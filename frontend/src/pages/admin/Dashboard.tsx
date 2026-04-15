import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Package,
  Tags,
  Briefcase,
  FileText,
  Send,
  UserCheck,
  Layers,
  CheckCircle2,
  AlertCircle,
  Upload,
  LogOut,
  ChevronRight,
  Plus,
} from "lucide-react";

// Shadcn Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

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
    <div className="min-h-screen bg-slate-50 p-6 lg:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <Card className="bg-slate-900 border-none shadow-2xl overflow-hidden rounded-3xl">
          <CardContent className="p-8 lg:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl font-black uppercase tracking-tight text-white leading-none">
                Data Control <span className="text-primary-foreground/40 font-light">Panel</span>
              </h1>
              <p className="text-slate-400 font-medium mt-3 text-sm">
                Advanced schema management and direct database population
              </p>
            </div>
            <Button
              variant="destructive"
              onClick={async () => {
                await adminAuthService.adminLogout();
                navigate("/admin");
              }}
              className="rounded-xl font-bold uppercase tracking-widest text-xs h-11 px-6 shadow-lg shadow-red-500/20"
            >
              <LogOut size={16} className="mr-2" /> Logout
            </Button>
          </CardContent>
        </Card>

        {/* Global Alert */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
            >
              <div
                className={`p-4 rounded-xl flex items-center gap-3 font-bold text-sm shadow-sm border ${
                  message.type === "success"
                    ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                    : "bg-red-50 text-red-600 border-red-100"
                }`}
              >
                {message.type === "success" ? (
                  <CheckCircle2 size={18} className="text-emerald-500" />
                ) : (
                  <AlertCircle size={18} className="text-red-500" />
                )}
                {message.text}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CATALOG SECTION (Category & Product) */}
          <div className="space-y-8">
            <Card className="border-slate-200 rounded-3xl shadow-sm bg-white overflow-hidden">
              <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <Tags size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-black text-slate-900 uppercase tracking-tight">
                      Categories
                    </CardTitle>
                    <CardDescription className="text-[10px] font-bold uppercase text-slate-400">
                      Step 1: Classification
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={addCategory} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Category Name
                    </Label>
                    <Input
                      required
                      placeholder="e.g. Mechanical"
                      value={catName}
                      onChange={(e) => setCatName(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl font-bold uppercase tracking-wider h-11"
                  >
                    Create Category
                  </Button>
                </form>

                <div className="my-8 border-t border-slate-100" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                    <Package size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-black text-slate-900 uppercase tracking-tight">
                      Products
                    </CardTitle>
                    <CardDescription className="text-[10px] font-bold uppercase text-slate-400">
                      Step 2: Inventory
                    </CardDescription>
                  </div>
                </div>
                <form onSubmit={addProduct} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Product Name *
                    </Label>
                    <Input
                      required
                      placeholder="e.g. Precision Gearbox"
                      value={prodName}
                      onChange={(e) => setProdName(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Category *
                    </Label>
                    <Select
                      value={prodCategoryId}
                      onValueChange={setProdCategoryId}
                      required
                    >
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {categories.map((cat: any) => (
                          <SelectItem key={cat.$id} value={cat.$id}>
                            {cat.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Description *
                    </Label>
                    <Textarea
                      required
                      placeholder="Detailed product info..."
                      value={prodDesc}
                      onChange={(e) => setProdDesc(e.target.value)}
                      className="rounded-xl bg-slate-50 border-slate-200 h-24 resize-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Key Specs (Comma Separated)
                    </Label>
                    <Input
                      placeholder="e.g. 500RPM, 5kg"
                      value={prodSpecs}
                      onChange={(e) => setProdSpecs(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Product Image
                    </Label>
                    <div className="flex items-center gap-3 p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl">
                      <Upload size={16} className="text-indigo-500 shrink-0" />
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setProdImage(e.target.files?.[0] || null)}
                        className="h-8 border-none bg-transparent shadow-none p-0 cursor-pointer file:rounded-lg file:bg-indigo-600 file:text-white file:text-[10px] file:font-bold file:uppercase file:px-3 file:h-full"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold h-11 uppercase tracking-wider"
                  >
                    Create Product
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* CAREERS SECTION (Vacancy & Application) */}
          <div className="space-y-8">
            <Card className="border-slate-200 rounded-3xl shadow-sm bg-white overflow-hidden">
              <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-black text-slate-900 uppercase tracking-tight">
                      Vacancies
                    </CardTitle>
                    <CardDescription className="text-[10px] font-bold uppercase text-slate-400">
                      Step 3: Opportunities
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={addVacancy} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Job Title *
                    </Label>
                    <Input
                      required
                      placeholder="e.g. Design Engineer"
                      value={vacTitle}
                      onChange={(e) => setVacTitle(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Job Description *
                    </Label>
                    <Textarea
                      required
                      placeholder="Role responsibilities..."
                      value={vacDesc}
                      onChange={(e) => setVacDesc(e.target.value)}
                      className="rounded-xl bg-slate-50 border-slate-200 h-24 resize-none"
                    />
                  </div>
                  <div className="flex items-center gap-3 pb-2 pt-1">
                    <Checkbox
                      id="vacActive"
                      checked={vacActive}
                      onCheckedChange={(c) => setVacActive(!!c)}
                    />
                    <Label
                      htmlFor="vacActive"
                      className="text-sm font-bold text-slate-600 cursor-pointer"
                    >
                      Active Posting
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold h-11 uppercase tracking-wider shadow-lg shadow-teal-500/10"
                  >
                    Create Vacancy
                  </Button>
                </form>

                <div className="my-8 border-t border-slate-100" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-black text-slate-900 uppercase tracking-tight">
                      Applications
                    </CardTitle>
                    <CardDescription className="text-[10px] font-bold uppercase text-slate-400">
                      Step 4: Candidates
                    </CardDescription>
                  </div>
                </div>
                <form onSubmit={addApplication} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Vacancy *
                    </Label>
                    <Select
                      value={appVacancyId}
                      onValueChange={setAppVacancyId}
                      required
                    >
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200">
                        <SelectValue placeholder="Select Position" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {vacancies.map((vac: any) => (
                          <SelectItem key={vac.$id} value={vac.$id}>
                            {vac.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                        Full Name
                      </Label>
                      <Input
                        placeholder="John Doe"
                        value={appName}
                        onChange={(e) => setAppName(e.target.value)}
                        className="h-11 rounded-xl bg-slate-50 border-slate-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                        Email *
                      </Label>
                      <Input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={appEmail}
                        onChange={(e) => setAppEmail(e.target.value)}
                        className="h-11 rounded-xl bg-slate-50 border-slate-200"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Resume (PDF/Doc) *
                    </Label>
                    <div className="flex items-center gap-3 p-3 bg-sky-50/50 border border-sky-100 rounded-xl">
                      <Upload size={16} className="text-sky-600 shrink-0" />
                      <Input
                        required
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setAppResume(e.target.files?.[0] || null)}
                        className="h-8 border-none bg-transparent shadow-none p-0 cursor-pointer file:rounded-lg file:bg-sky-600 file:text-white file:text-[10px] file:font-bold file:uppercase file:px-3 file:h-full"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold h-11 uppercase tracking-wider"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* CONTENT SECTION (Study & Items) */}
          <div className="space-y-8">
            <Card className="border-slate-200 rounded-3xl shadow-sm bg-white overflow-hidden">
              <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                    <FileText size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-black text-slate-900 uppercase tracking-tight">
                      Case Studies
                    </CardTitle>
                    <CardDescription className="text-[10px] font-bold uppercase text-slate-400">
                      Step 5: Showcases
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={addCaseStudy} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Study Title *
                    </Label>
                    <Input
                      required
                      placeholder="e.g. Factory Automation"
                      value={csTitle}
                      onChange={(e) => setCsTitle(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Content *
                    </Label>
                    <Textarea
                      required
                      placeholder="Detailed content..."
                      value={csContent}
                      onChange={(e) => setCsContent(e.target.value)}
                      className="rounded-xl bg-slate-50 border-slate-200 h-24 resize-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Study Cover Image
                    </Label>
                    <div className="flex items-center gap-3 p-3 bg-purple-50/50 border border-purple-100 rounded-xl">
                      <Upload size={16} className="text-purple-500 shrink-0" />
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setCsImage(e.target.files?.[0] || null)}
                        className="h-8 border-none bg-transparent shadow-none p-0 cursor-pointer file:rounded-lg file:bg-purple-600 file:text-white file:text-[10px] file:font-bold file:uppercase file:px-3 file:h-full"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold h-11 uppercase tracking-wider"
                  >
                    Create Study
                  </Button>
                </form>

                <div className="my-8 border-t border-slate-100" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <Layers size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-black text-slate-900 uppercase tracking-tight">
                      Study Items
                    </CardTitle>
                    <CardDescription className="text-[10px] font-bold uppercase text-slate-400">
                      Step 6: Success Metrics
                    </CardDescription>
                  </div>
                </div>
                <form onSubmit={addStudyItem} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Target Case Study *
                    </Label>
                    <Select value={csiStudyId} onValueChange={setCsiStudyId} required>
                      <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200">
                        <SelectValue placeholder="Select Study" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {caseStudies.map((study: any) => (
                          <SelectItem key={study.$id} value={study.$id}>
                            {study.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Item Label *
                    </Label>
                    <Input
                      required
                      placeholder="e.g. 50% Speedup"
                      value={csiLabel}
                      onChange={(e) => setCsiLabel(e.target.value)}
                      className="h-11 rounded-xl bg-slate-50 border-slate-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                      Description
                    </Label>
                    <Textarea
                      required
                      placeholder="Detail about this point..."
                      value={csiDesc}
                      onChange={(e) => setCsiDesc(e.target.value)}
                      className="rounded-xl bg-slate-50 border-slate-200 h-20 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-bold h-11 uppercase tracking-wider"
                  >
                    Add Study Item
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* INQUIRIES SECTION */}
          <Card className="border-slate-200 rounded-3xl shadow-lg bg-white overflow-hidden col-span-1 md:col-span-2 lg:col-span-3">
            <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                    <Send size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-black text-slate-900 uppercase tracking-tight">
                      Inquiries
                    </CardTitle>
                    <CardDescription className="text-[10px] font-bold uppercase text-slate-400">
                      Step 7: Customer Relationship
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="text-[10px] font-bold uppercase border-slate-200 text-slate-400 hidden sm:flex">
                  Direct Schema Integration
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={addInquiry} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Inquiry Type *
                  </Label>
                  <Input
                    required
                    placeholder="Sales, Support, etc."
                    value={inqType}
                    onChange={(e) => setInqType(e.target.value)}
                    className="h-11 rounded-xl bg-slate-50 border-slate-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Linked Product
                  </Label>
                  <Select value={inqProductId} onValueChange={setInqProductId}>
                    <SelectTrigger className="h-11 rounded-xl bg-slate-50 border-slate-200">
                      <SelectValue placeholder="Select Product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      {products.map((prod: any) => (
                        <SelectItem key={prod.$id} value={prod.$id}>
                          {prod.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Customer Name *
                  </Label>
                  <Input
                    required
                    placeholder="Contact person"
                    value={inqName}
                    onChange={(e) => setInqName(e.target.value)}
                    className="h-11 rounded-xl bg-slate-50 border-slate-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Contact Email *
                  </Label>
                  <Input
                    required
                    type="email"
                    placeholder="email@example.com"
                    value={inqEmail}
                    onChange={(e) => setInqEmail(e.target.value)}
                    className="h-11 rounded-xl bg-slate-50 border-slate-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Mobile Number *
                  </Label>
                  <Input
                    required
                    type="tel"
                    placeholder="+123..."
                    value={inqMobile}
                    onChange={(e) => setInqMobile(e.target.value)}
                    className="h-11 rounded-xl bg-slate-50 border-slate-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Company Name
                  </Label>
                  <Input
                    placeholder="Organization"
                    value={inqCompanyName}
                    onChange={(e) => setInqCompanyName(e.target.value)}
                    className="h-11 rounded-xl bg-slate-50 border-slate-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Designation
                  </Label>
                  <Input
                    placeholder="Role"
                    value={inqDesignation}
                    onChange={(e) => setInqDesignation(e.target.value)}
                    className="h-11 rounded-xl bg-slate-50 border-slate-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Location
                  </Label>
                  <Input
                    placeholder="Country/City"
                    value={inqCountry}
                    onChange={(e) => setInqCountry(e.target.value)}
                    className="h-11 rounded-xl bg-slate-50 border-slate-200"
                  />
                </div>

                <div className="space-y-2 md:col-span-3 lg:col-span-4">
                  <Label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Message
                  </Label>
                  <Textarea
                    placeholder="Customer requirement details..."
                    value={inqMessage}
                    onChange={(e) => setInqMessage(e.target.value)}
                    className="rounded-xl bg-slate-50 border-slate-200 h-24 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full md:col-span-3 lg:col-span-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold h-12 uppercase tracking-wider shadow-lg shadow-orange-500/10"
                >
                  <Send size={16} className="mr-2" /> Submit Full Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
