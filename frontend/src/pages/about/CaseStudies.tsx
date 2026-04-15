import { useState, useEffect } from 'react';
import PageLayout from '../../components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import contentService from '../../appwrite/services/content';

const CaseStudies = () => {
  const [studies, setStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        const res = await contentService.getCaseStudies();
        setStudies(res.documents);
      } catch (error) {
        console.error("Failed to fetch studies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudies();
  }, []);

  return (
    <PageLayout>
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(1,0,128,0.2),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black tracking-normal uppercase mb-6">Case <span className="text-indigo-400">Studies</span></h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-medium">Deep dives into our most successful and challenging projects.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="animate-spin text-primary mb-4" size={40} />
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading project data...</p>
            </div>
          ) : studies.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                <p className="text-slate-400 font-medium italic">Our latest project stories are coming soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {studies.map((study, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={study.$id}
                  className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 flex flex-col h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {study.image_id ? (
                      <img 
                        src={contentService.getProjectImagePreview(study.image_id)} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        alt={study.title}
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                        <ArrowRight size={48} className="opacity-20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500" />
                  </div>
                  
                  <div className="p-10 flex flex-col flex-1">
                    <p className="text-[10px] font-black tracking-[0.3em] text-primary uppercase mb-4">Case Study</p>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase leading-tight group-hover:text-primary transition-colors">{study.title}</h2>
                    <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-1 line-clamp-3">
                      {study.content}
                    </p>
                    <Link 
                      to={`/about/case-studies/${study.$id}`}
                      className="inline-flex items-center gap-3 text-sm font-black text-slate-900 uppercase tracking-widest group/link hover:text-primary transition-all"
                    >
                      Explore Project 
                      <div className="p-2 bg-slate-50 rounded-full group-hover/link:bg-primary group-hover/link:text-white transition-all">
                        <ArrowRight size={18} />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase">Ready to start yours?</h2>
            <p className="text-slate-500 max-w-xl mx-auto font-medium mb-12">Let's solve your most complex problems together and build something exceptional.</p>
            <Link to="/contact">
               <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 mx-auto uppercase tracking-wider">Work With Us <ArrowRight size={20} /></button>
            </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseStudies;
