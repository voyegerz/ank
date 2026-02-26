import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import { ArrowRight, ChevronRight, Star, Users, MapPin, Layers, Cpu, Settings2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroBg from '../assets/images/hero_bg.png'

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-slate-950 pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-indigo-950/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[8px] font-black uppercase tracking-[0.6em] mb-10">
              ANK DESIGN AND AUTOMATION SOLUTIONS LLP.
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter mb-8 uppercase">
              Provider of <span className="text-indigo-500">Software, Product Engineering,</span> Electronics Manufacturing <span className="text-indigo-500">Services & Solutions</span>
            </h1>
            
            <p className="text-sm md:text-base text-slate-400 max-w-lg leading-relaxed font-medium mb-12">
              We provide expert services in 3D/2D CAD Development, PLC & SCADA Programming, Panel Automation, Home Automation, Process Automation, Automated Test Equipment (ATE).
            </p>
            
            <div className="flex justify-start">
              <Link to="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all flex items-center gap-2 shadow-2xl shadow-indigo-500/20">
                Get started <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30">
           <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"></div>
           <span className="text-[10px] font-black uppercase tracking-[0.5em]">Scroll Down</span>
        </div>
      </section>

      {/* Business Units - From Page 1 Design */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-black text-indigo-600 tracking-[0.5em] uppercase mb-4">Business Units</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight uppercase">
              We help our customers with desired solution based on the latest technology as per their custom requirement
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <UnitCard 
              title="CAD Design Services" 
              desc="We Provide 3D/2D CAD Mechanical design development with precision and usability and practical standards."
              icon={<Layers size={24} />}
            />
            <UnitCard 
              title="Software Development" 
              desc="We Provide Software for the custom needs, Application with cross platform (Android/Ios/Web) availability."
              icon={<Cpu size={24} />}
            />
            <UnitCard 
              title="Manufacturing" 
              desc="We provide Additive manufacturing with precise 3D Printing for all types of filaments (PLA, PETG, ABS, Carbon Fiber, etc)"
              icon={<Settings2 size={24} />}
            />
            <UnitCard 
              title="Embedded Systems & IoT" 
              desc="We Provide Embedded IoT Systems with Custom Data Requirement and Warehousing with Analytics Software."
              icon={<Cpu size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-[10px] font-black text-indigo-600 tracking-[0.5em] uppercase mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight uppercase">
                We are a multidisciplinary team providing cutting edge solution, design, development & manufacturing services
              </h3>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                From mechanical design and automation to embedded and IoT systems, to Custom Application Development our team collaborates closely to ensure every project meets technical accuracy, industry relevance, and execution quality.
              </p>
              <div className="grid grid-cols-3 gap-8">
                 <div>
                    <h4 className="text-4xl font-black text-slate-900 mb-2">1K+</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Monthly Visits</p>
                 </div>
                 <div>
                    <h4 className="text-4xl font-black text-slate-900 mb-2">98%</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Satisfaction</p>
                 </div>
                 <div>
                    <h4 className="text-4xl font-black text-slate-900 mb-2">4.9/5</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ratings</p>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Team" />
                  </div>
                  <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-2xl mt-12">
                     <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Team" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[10px] font-black text-indigo-600 tracking-[0.5em] uppercase mb-12">Testimonial</h2>
            <p className="text-3xl md:text-4xl font-black text-slate-900 leading-tight italic">
              “Simply the best. Better than all the rest. I’d recommend there service to anyone individual or professional, they are great.”
            </p>
            <div className="mt-12 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-slate-200 mb-6 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" alt="Ian Klein" />
              </div>
              <h4 className="text-xl font-black text-slate-900">Ian Klein</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Digital Marketer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-slate-950 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-tight">Ready to launch your <br /> next project?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
            With having a team of unique minds, you can easily get ur imagined idea into reality, without any hassle. Build your next landing project with us.
          </p>
          <button className="bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-slate-900 transition-all shadow-2xl">
            Get started a project
          </button>
        </div>
      </section>
    </PageLayout>
  )
}

const UnitCard = ({ title, desc, icon }: { title: string, desc: string, icon: any }) => (
  <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-2xl transition-all group">
    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
      {icon}
    </div>
    <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase group-hover:text-indigo-600 transition-colors">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8">{desc}</p>
    <div className="flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-widest">
      Learn More <ChevronRight size={14} />
    </div>
  </div>
)

export default Home
