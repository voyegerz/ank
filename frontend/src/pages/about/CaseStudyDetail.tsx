import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Loader2, CheckCircle2, ChevronRight } from 'lucide-react';
import contentService from '../../appwrite/services/content';
import { Query } from 'appwrite';

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [study, setStudy] = useState<any>(null);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!id) return;
      try {
        const [studyRes, itemsRes] = await Promise.all([
          contentService.getCaseStudy(id),
          contentService.getStudyItems([Query.equal("caseStudies", [id])])
        ]);
        setStudy(studyRes);
        setItems(itemsRes.documents);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
          <Loader2 className="animate-spin text-primary mb-4" size={48} />
          <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Assembling project details...</p>
        </div>
      </PageLayout>
    );
  }

  if (!study) {
    return (
      <PageLayout>
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
          <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase">Project Not Found</h2>
          <p className="text-slate-500 mb-8 max-w-md text-center">The project you are looking for might have been moved or archived.</p>
          <Link to="/about/case-studies">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-900 transition-all uppercase tracking-wider text-sm">
              <ArrowLeft size={18} /> Back to projects
            </button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="flex-1">
              <Link to="/about/case-studies" className="inline-flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-widest text-[10px] mb-8 hover:text-white transition-colors group">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
              </Link>
              <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-[0.95] tracking-tight mb-8">
                {study.title}
              </h1>
              <div className="flex flex-wrap gap-4">
                 <div className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-indigo-300">
                    Industrial Automation
                 </div>
                 <div className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-indigo-300">
                    Smart Solution
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content & Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Content Body */}
            <div className="lg:col-span-7">
               <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
               >
                 <div className="inline-block p-4 bg-slate-50 border border-slate-100 rounded-2xl mb-10">
                    <p className="text-xs font-black uppercase text-primary tracking-widest mb-1">Project Overview</p>
                    <div className="h-1 w-12 bg-primary rounded-full" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 uppercase leading-tight">
                    Transforming complexity into <span className="text-primary">high-performance</span> reality.
                 </h3>
                 <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-[1.8] text-lg space-y-6">
                    {study.content.split('\n').map((paragraph: string, i: number) => (
                      paragraph && <p key={i}>{paragraph}</p>
                    ))}
                 </div>
               </motion.div>

               {/* Case Items/Highlights Section */}
               {items.length > 0 && (
                 <div className="mt-20 space-y-12">
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-3">
                       <CheckCircle2 className="text-primary" size={24} /> Key Deliverables & Highlights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {items.map((item, index) => (
                         <motion.div 
                           key={item.$id}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: index * 0.1 }}
                           className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
                         >
                            <h5 className="text-sm font-black text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                               <ChevronRight size={16} /> {item.label}
                            </h5>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">
                               {item.description}
                            </p>
                         </motion.div>
                       ))}
                    </div>
                 </div>
               )}
            </div>

            {/* Right: Featured Media Corner */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                 <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group"
                 >
                    {study.image_id ? (
                      <img 
                        src={contentService.getProjectImagePreview(study.image_id)} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                        alt={study.title}
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                        <ArrowRight size={64} className="text-white opacity-10" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700" />
                 </motion.div>

                 <div className="mt-12 p-10 bg-slate-900 rounded-[2.5rem] text-white">
                    <p className="text-[10px] font-black tracking-[0.3em] text-indigo-400 uppercase mb-4">Take Action</p>
                    <h4 className="text-2xl font-black uppercase mb-6 leading-tight">Empower your Next Venture</h4>
                    <Link to="/contact">
                       <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-slate-900 transition-all uppercase tracking-wider text-sm">
                          Consult Our Experts <ArrowRight size={18} />
                       </button>
                    </Link>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
           <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase leading-tight italic">
              "Excellence is not an act, but a habit. We build success stories one innovation at a time."
           </h2>
           <Link to="/about/case-studies">
              <button className="inline-flex items-center gap-3 text-slate-500 font-black text-xs uppercase tracking-widest hover:text-primary transition-colors">
                Explore More Success Stories <ArrowRight size={14} />
              </button>
           </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseStudyDetail;
