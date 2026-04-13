import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Package, Tags, Briefcase, FileText, Send, UserCheck, Layers, CheckCircle2, AlertCircle, Upload } from "lucide-react";
import catalogService from "../../appwrite/services/catalog";
import careersService from "../../appwrite/services/careers";
import contentService from "../../appwrite/services/content";
import inquiryService from "../../appwrite/services/inquiry";
import adminAuthService from "../../appwrite/services/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  // Dropdown Lists
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [vacancies, setVacancies] = useState<any[]>([]);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);

  // -------- Form States --------
  // Category
  const [catName, setCatName] = useState("");
  
  // Product
  const [prodName, setProdName] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [prodCategoryId, setProdCategoryId] = useState("");
  const [prodSpecs, setProdSpecs] = useState("");
  const [prodImage, setProdImage] = useState<File | null>(null);
  
  // Vacancy
  const [vacTitle, setVacTitle] = useState("");
  const [vacDesc, setVacDesc] = useState("");
  const [vacActive, setVacActive] = useState(true);

  // Application
  const [appName, setAppName] = useState("");
  const [appEmail, setAppEmail] = useState("");
  const [appAddress, setAppAddress] = useState("");
  const [appVacancyId, setAppVacancyId] = useState("");
  const [appResume, setAppResume] = useState<File | null>(null);

  // Case Study
  const [csTitle, setCsTitle] = useState("");
  const [csContent, setCsContent] = useState("");
  const [csImage, setCsImage] = useState<File | null>(null);

  // Case Study Item
  const [csiLabel, setCsiLabel] = useState("");
  const [csiDesc, setCsiDesc] = useState("");
  const [csiStudyId, setCsiStudyId] = useState("");

  // Inquiry
  const [inqType, setInqType] = useState("Sales"); 
  const [inqProductId, setInqProductId] = useState("");
  const [inqName, setInqName] = useState("");
  const [inqMobile, setInqMobile] = useState("");
  const [inqEmail, setInqEmail] = useState("");
  const [inqCompanyName, setInqCompanyName] = useState("");
  const [inqCompanyWebsite, setInqCompanyWebsite] = useState("");
  const [inqMessage, setInqMessage] = useState("");
  const [inqDesignation, setInqDesignation] = useState("");
  const [inqCountry, setInqCountry] = useState("");

  useEffect(() => {
    const init = async () => {
      const session = await adminAuthService.getAdminSession();
      if (!session) {
        navigate("/admin");
        return;
      }
      fetchAll();
    };
    init();
  }, [navigate]);

  const fetchAll = async () => {
    try {
      const [cats, prods, vacs, studies] = await Promise.all([
        catalogService.getCategories().catch(() => ({ documents: [] })),
        catalogService.getProducts().catch(() => ({ documents: [] })),
        careersService.getVacancies().catch(() => ({ documents: [] })),
        contentService.getCaseStudies().catch(() => ({ documents: [] }))
      ]);
      setCategories(cats.documents);
      setProducts(prods.documents);
      setVacancies(vacs.documents);
      setCaseStudies(studies.documents);
    } catch (e) {
       console.error(e);
    }
  };

  const notify = (promise: Promise<any>, successMsg: string) => {
    setLoading(true);
    setMessage(null);
    promise
      .then(() => {
        setMessage({ text: successMsg, type: "success" });
        fetchAll(); // Refresh relations
      })
      .catch((err) => setMessage({ text: err.message, type: "error" }))
      .finally(() => setLoading(false));
  };

  // HANDLERS
  const addCategory = (e: React.FormEvent) => {
    e.preventDefault();
    notify(catalogService.createCategory({ name: catName }), "Category Created!");
  };

  const addProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
        let image_id = undefined;
        if (prodImage) {
            const fileObj = await catalogService.uploadProductImage(prodImage);
            image_id = fileObj.$id;
        }
        const key_specs = prodSpecs.split(",").map(s => s.trim()).filter(Boolean);
        
        await catalogService.createProduct({
            name: prodName,
            category: prodCategoryId,
            description: prodDesc,
            image_id,
            key_specs: key_specs.length > 0 ? key_specs : undefined
        });
        
        setMessage({ text: "Product Created!", type: "success" });
        fetchAll(); // Refresh lists
    } catch(err: any) {
        setMessage({ text: err.message, type: "error" });
    } finally {
        setLoading(false);
    }
  };

  const addVacancy = (e: React.FormEvent) => {
    e.preventDefault();
    notify(careersService.createVacancy({ title: vacTitle, description: vacDesc, is_active: vacActive }), "Vacancy Created!");
  };

  const addApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
        if (!appResume) {
             throw new Error("Resume PDF/File is required per your schema!");
        }
        const fileObj = await careersService.uploadResume(appResume);
        
        await careersService.submitApplication(appVacancyId, { 
            applicant_name: appName, 
            applicant_email: appEmail, 
            address: appAddress, 
            resume_id: fileObj.$id
        });
        
        setMessage({ text: "Application Created!", type: "success" });
    } catch(err: any) {
        setMessage({ text: err.message, type: "error" });
    } finally {
        setLoading(false);
    }
  };

  const addCaseStudy = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
        let image_id = undefined;
        if (csImage) {
            const fileObj = await contentService.uploadProjectImage(csImage);
            image_id = fileObj.$id;
        }
        
        await contentService.createCaseStudy({
            title: csTitle,
            content: csContent,
            image_id
        });
        
        setMessage({ text: "Case Study Created!", type: "success" });
        fetchAll();
    } catch(err: any) {
        setMessage({ text: err.message, type: "error" });
    } finally {
        setLoading(false);
    }
  };

  const addStudyItem = (e: React.FormEvent) => {
    e.preventDefault();
    notify(contentService.addItemToStudy(csiStudyId, { label: csiLabel, description: csiDesc }), "Study Item Created!");
  };

  const addInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    notify(inquiryService.submitInquiry({ 
        type: inqType, 
        product: inqProductId || undefined,
        name: inqName, 
        mobile: inqMobile,
        company_name: inqCompanyName,
        company_website: inqCompanyWebsite,
        email: inqEmail, 
        message: inqMessage,
        designation: inqDesignation,
        country: inqCountry
    }), "Inquiry Created!");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-12 font-sans">
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* Header */}
        <header className="bg-slate-900 rounded-3xl p-8 lg:p-10 text-white flex flex-col md:flex-row justify-between items-start md:items-center shadow-xl gap-6">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight">System Data Control</h1>
            <p className="text-slate-400 font-medium mt-2">Fully loaded schemas mapping to the Appwrite Database</p>
          </div>
          <button 
            onClick={async () => { await adminAuthService.adminLogout(); navigate("/admin"); }}
            className="px-6 py-3 bg-red-500/10 text-red-400 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-red-500 hover:text-white transition-colors"
          >
            Logout
          </button>
        </header>

        {/* Global Alert */}
        {message && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl flex items-center gap-3 font-bold text-sm ${
              message.type === 'success' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'
            }`}
          >
            {message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            {message.text}
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CATALOG SECTION (Category & Product) */}
          <div className="space-y-8 col-span-1 lg:col-span-1 border border-slate-200 bg-white p-6 rounded-3xl shadow-sm h-fit">
             {/* Category */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center"><Tags size={20} /></div>
                    <h2 className="text-lg font-black text-slate-900 uppercase">1. Categories</h2>
                </div>
                <form onSubmit={addCategory} className="space-y-3">
                    <input required type="text" placeholder="name (e.g. Mechanical)" value={catName} onChange={e => setCatName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />
                    <button type="submit" disabled={loading} className="w-full bg-slate-900 text-white font-bold p-3 rounded-xl hover:bg-primary">Create Category</button>
                </form>
             </div>

             <hr className="border-slate-100" />
             
             {/* Product */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-indigo-500/10 text-indigo-500 rounded-xl flex items-center justify-center"><Package size={20} /></div>
                    <h2 className="text-lg font-black text-slate-900 uppercase">2. Products</h2>
                </div>
                <form onSubmit={addProduct} className="space-y-3">
                    <input required type="text" placeholder="name *" value={prodName} onChange={e => setProdName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />
                    <select required value={prodCategoryId} onChange={e => setProdCategoryId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm text-slate-600 outline-none focus:border-primary">
                    <option value="" disabled>category (Relationship) *</option>
                    {categories.map((cat: any) => <option key={cat.$id} value={cat.$id}>{cat.name}</option>)}
                    </select>
                    <textarea required placeholder="description *" value={prodDesc} onChange={e => setProdDesc(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary h-20 resize-none" />
                    <input type="text" placeholder="key_specs (comma separated strings)" value={prodSpecs} onChange={e => setProdSpecs(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />
                    
                    <div className="flex items-center gap-2">
                        <Upload size={16} className="text-indigo-500"/>
                        <label className="text-xs font-bold text-slate-500 uppercase">image_id (Upload)</label>
                    </div>
                    <input type="file" accept="image/*" onChange={e => setProdImage(e.target.files?.[0] || null)}
                    className="w-full text-xs text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                    
                    <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white font-bold p-3 rounded-xl hover:bg-indigo-700 mt-2">Create Product</button>
                </form>
             </div>
          </div>

          {/* CAREERS SECTION (Vacancy & Application) */}
          <div className="space-y-8 col-span-1 lg:col-span-1 border border-slate-200 bg-white p-6 rounded-3xl shadow-sm h-fit">
             {/* Vacancy */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-teal-500/10 text-teal-500 rounded-xl flex items-center justify-center"><Briefcase size={20} /></div>
                    <h2 className="text-lg font-black text-slate-900 uppercase">3. Vacancies</h2>
                </div>
                <form onSubmit={addVacancy} className="space-y-3">
                    <input required type="text" placeholder="title *" value={vacTitle} onChange={e => setVacTitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />
                    <textarea required placeholder="description *" value={vacDesc} onChange={e => setVacDesc(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary h-20 resize-none" />
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-600 pb-2">
                    <input type="checkbox" checked={vacActive} onChange={e => setVacActive(e.target.checked)} className="w-4 h-4 rounded text-teal-600 focus:ring-teal-500"/> is_active
                    </label>
                    <button type="submit" disabled={loading} className="w-full bg-teal-600 text-white font-bold p-3 rounded-xl hover:bg-teal-700">Create Vacancy</button>
                </form>
             </div>

             <hr className="border-slate-100" />
             
             {/* Application */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-sky-500/10 text-sky-500 rounded-xl flex items-center justify-center"><UserCheck size={20} /></div>
                    <h2 className="text-lg font-black text-slate-900 uppercase">4. Applications</h2>
                </div>
                <form onSubmit={addApplication} className="space-y-3">
                    <select required value={appVacancyId} onChange={e => setAppVacancyId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm text-slate-600 outline-none focus:border-primary">
                    <option value="" disabled>vacancy (Relationship) *</option>
                    {vacancies.map((vac: any) => <option key={vac.$id} value={vac.$id}>{vac.title}</option>)}
                    </select>
                    <input type="text" placeholder="applicant_name" value={appName} onChange={e => setAppName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />
                    <input required type="email" placeholder="applicant_email *" value={appEmail} onChange={e => setAppEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />
                    <input type="text" placeholder="address" value={appAddress} onChange={e => setAppAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />
                    
                    <div className="flex items-center gap-2">
                        <Upload size={16} className="text-sky-500"/>
                        <label className="text-xs font-bold text-slate-500 uppercase">resume_id (Required PDF) *</label>
                    </div>
                    <input required type="file" accept=".pdf,.doc,.docx" onChange={e => setAppResume(e.target.files?.[0] || null)}
                    className="w-full text-xs text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100" />
                    

                    <button type="submit" disabled={loading} className="w-full bg-sky-600 text-white font-bold p-3 rounded-xl hover:bg-sky-700 mt-2">Submit Application</button>
                </form>
             </div>
          </div>

          {/* CONTENT SECTION (Study & Items) */}
          <div className="space-y-8 col-span-1 lg:col-span-1 border border-slate-200 bg-white p-6 rounded-3xl shadow-sm h-fit">
             {/* Case Study */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center"><FileText size={20} /></div>
                    <h2 className="text-lg font-black text-slate-900 uppercase">5. Case Studies</h2>
                </div>
                <form onSubmit={addCaseStudy} className="space-y-3">
                    <input required type="text" placeholder="title *" value={csTitle} onChange={e => setCsTitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />
                    <textarea required placeholder="content *" value={csContent} onChange={e => setCsContent(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary h-20 resize-none" />
                    
                    <div className="flex items-center gap-2">
                        <Upload size={16} className="text-purple-500"/>
                        <label className="text-xs font-bold text-slate-500 uppercase">image_id (Upload)</label>
                    </div>
                    <input type="file" accept="image/*" onChange={e => setCsImage(e.target.files?.[0] || null)}
                    className="w-full text-xs text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100" />

                    <button type="submit" disabled={loading} className="w-full bg-purple-600 text-white font-bold p-3 rounded-xl hover:bg-purple-700 mt-2">Create Study</button>
                </form>
             </div>

             <hr className="border-slate-100" />
             
             {/* Study Item */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-pink-500/10 text-pink-500 rounded-xl flex items-center justify-center"><Layers size={20} /></div>
                    <h2 className="text-lg font-black text-slate-900 uppercase">6. Study Items</h2>
                </div>
                <form onSubmit={addStudyItem} className="space-y-3">
                    <select required value={csiStudyId} onChange={e => setCsiStudyId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm text-slate-600 outline-none focus:border-primary">
                    <option value="" disabled>caseStudies (Relationship) *</option>
                    {caseStudies.map((study: any) => <option key={study.$id} value={study.$id}>{study.title}</option>)}
                    </select>
                    <input required type="text" placeholder="label *" value={csiLabel} onChange={e => setCsiLabel(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />
                    <textarea required placeholder="description *" value={csiDesc} onChange={e => setCsiDesc(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary h-20 resize-none" />
                    <button type="submit" disabled={loading} className="w-full bg-pink-600 text-white font-bold p-3 rounded-xl hover:bg-pink-700">Add Item</button>
                </form>
             </div>
          </div>

          {/* INQUIRIES SECTION */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg col-span-1 md:col-span-2 lg:col-span-3">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center"><Send size={20} /></div>
                <h2 className="text-lg font-black text-slate-900 uppercase">7. Inquiries</h2>
                <div className="ml-auto text-xs font-bold text-slate-400">Detailed Schema Match</div>
             </div>
             
             <form onSubmit={addInquiry} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <input required type="text" placeholder="type (Enum) *" value={inqType} onChange={e => setInqType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />
                
                <select value={inqProductId} onChange={e => setInqProductId(e.target.value)}
                   className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm text-slate-600 outline-none focus:border-primary">
                   <option value="">product (Relationship)</option>
                   {products.map((prod: any) => <option key={prod.$id} value={prod.$id}>{prod.name}</option>)}
                </select>
                
                <input required type="text" placeholder="name *" value={inqName} onChange={e => setInqName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />
                
                <input required type="tel" placeholder="mobile *" value={inqMobile} onChange={e => setInqMobile(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />
                
                <input type="text" placeholder="company_name" value={inqCompanyName} onChange={e => setInqCompanyName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />

                <input type="url" placeholder="company_website" value={inqCompanyWebsite} onChange={e => setInqCompanyWebsite(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />

                <input required type="email" placeholder="email *" value={inqEmail} onChange={e => setInqEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />

                <input type="text" placeholder="designation" value={inqDesignation} onChange={e => setInqDesignation(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />

                <input type="text" placeholder="country" value={inqCountry} onChange={e => setInqCountry(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary" />

                <textarea placeholder="message" value={inqMessage} onChange={e => setInqMessage(e.target.value)}
                  className="w-full md:col-span-3 lg:col-span-3 bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm outline-none focus:border-primary h-24 resize-none" />
                  
                <button type="submit" disabled={loading} className="w-full md:col-span-3 lg:col-span-4 bg-orange-600 text-white font-bold p-3 rounded-xl hover:bg-orange-700 mt-2">Submit Full Inquiry</button>
             </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
