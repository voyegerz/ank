import { motion } from 'framer-motion'
import PageLayout from '../components/PageLayout'
import { 
  Users, 
  Award, 
  Settings2, 
  ChevronRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Rocket,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowBigRight
  
} from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <PageLayout>
      {/* Title Hero Section */}
      <section className="relative pt-48 pb-32 bg-slate-900 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600"
            alt="About Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="relative mb-12">
              <span className="absolute -top-16 left-0 text-[6rem] md:text-[10rem] font-black text-white/5 uppercase select-none pointer-events-none tracking-normal leading-none">
                About us
              </span>
              <span className="text-sm font-black text-sky-500 uppercase tracking-[0.4em] mb-4 block relative z-10">
                About ANK
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-normal uppercase relative z-10">
                Who we <span className="text-sky-500">are?</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-medium leading-relaxed mb-12">
              We help our clients to seamlessly move programs through design and
              production with engineering excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats/Counters Section */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatBox
              value="30+"
              label="World awards"
              sub="Taking seamless key performance indicators."
            />
            <StatBox
              value="99%"
              label="Project success"
              sub="Engage fully tested process improvement."
            />
            <StatBox
              value="60+"
              label="Expertise"
              sub="Multidisciplinary team of engineers."
            />
            <StatBox
              value="15+"
              label="Years of Excellence"
              sub="Driving industrial evolution since day one."
            />
          </div>
        </div>
      </section>

      {/* Mission Section - Background Image Overlay */}
      <section className="py-40 relative mt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1600"
            alt="Mission Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-white"
          >
            <span className="text-sm font-black text-sky-500 uppercase tracking-[0.5em] mb-8 block">
              Who is ANK?
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-normal mb-12 uppercase leading-[1.2]">
              A multidisciplinary team providing{" "}
              <span className="text-sky-500">cutting edge</span> solution,
              design, development & manufacturing services
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-sky-500 text-white px-10 py-5 rounded-xl font-black text-lg uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all"
            >
              Join us on a project <ArrowBigRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
            <ServiceListItem
              num="01"
              title="Parts production"
              desc="Quickly change. Seamlessly underwhelm optimal testing procedure processes."
            />
            <ServiceListItem
              num="02"
              title="Precision & quality"
              desc="Dramatically underwhelm meta-services with precision and high standard quality."
            />
            <ServiceListItem
              num="03"
              title="Auto & aero manufacture"
              desc="Dramatically visualize customer directed convergence without revolutionary ROI."
            />
            <ServiceListItem
              num="04"
              title="Quality replacement parts"
              desc="Phosfluorescently provide access to world-class replacement parts and services."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-black text-sky-500 tracking-[0.5em] uppercase mb-4">
              Our Team
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-normal leading-[1.1] uppercase">
              Meet our <span className="text-sky-500">experts</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamMember
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
              role="Production Manager"
              name="Sawyer Perry"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
              role="Product Architect"
              name="Sue Martins"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
              role="Team Leader"
              name="Matthew Garnett"
            />

            {/* Careers Block */}
            <div className="relative group overflow-hidden rounded-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400"
                className="w-full h-full object-cover grayscale opacity-50 bg-sky-900"
                alt="Careers"
              />
              <div className="absolute inset-0 bg-sky-600/90 p-8 flex flex-col justify-center text-white">
                <span className="text-xs font-black uppercase tracking-widest mb-4 opacity-70">
                  Careers
                </span>
                <h4 className="text-2xl font-black leading-tight mb-6">
                  Interested in joining ANK?
                </h4>
                <p className="text-sm font-medium opacity-80 mb-8 leading-relaxed">
                  Simply fill out the Careers form and we will contact you as
                  soon as possible.
                </p>
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] bg-white text-sky-600 px-6 py-3 rounded-lg w-fit"
                >
                  Apply Now <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

const StatBox = ({ value, label, sub }: { value: string, label: string, sub: string }) => (
  <div className="bg-slate-50 p-10 rounded-xl border border-slate-100 hover:shadow-2xl hover:bg-white transition-all group">
    <h3 className="text-5xl font-black text-sky-500 mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">{value}</h3>
    <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-normal">{label}</h4>
    <p className="text-xs text-slate-500 leading-relaxed font-medium">{sub}</p>
  </div>
)

const ServiceListItem = ({ num, title, desc }: { num: string, title: string, desc: string }) => (
  <div className="group">
    <div className="h-[1px] w-full bg-slate-200 mb-8 group-hover:bg-sky-500 transition-colors duration-500"></div>
    <div className="flex gap-8">
      <span className="text-xs font-black text-sky-500 tracking-widest">{num}</span>
      <div>
        <h4 className="text-xl font-black text-slate-900 uppercase tracking-normal mb-4 group-hover:text-sky-500 transition-colors">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8 max-w-md">{desc}</p>
        <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-sky-500 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  </div>
)

const TeamMember = ({ image, role, name }: { image: string, role: string, name: string }) => (
  <div className="group">
    <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-8 shadow-xl">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <span className="text-xs font-black text-sky-500 uppercase tracking-widest mb-2 block">{role}</span>
    <h4 className="text-2xl font-black text-slate-900 uppercase tracking-normal mb-4">{name}</h4>
    <div className="flex gap-4">
      <SocialIcon icon={<Facebook size={16} />} />
      <SocialIcon icon={<Twitter size={16} />} />
      <SocialIcon icon={<Instagram size={16} />} />
      <SocialIcon icon={<Linkedin size={16} />} />
    </div>
  </div>
)

const SocialIcon = ({ icon }: { icon: any }) => (
  <a href="#" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-500 transition-all">
    {icon}
  </a>
)

export default About
