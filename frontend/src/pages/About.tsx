import PageLayout from '../components/PageLayout'
import { motion } from 'framer-motion'
import { Users, Target, Rocket, Award } from 'lucide-react'

const About = () => {
  return (
    <PageLayout>
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-7xl font-black text-primary tracking-tighter mb-8 uppercase">
                Driving Industrial <span className="text-accent">Evolution</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Founded on the principles of engineering excellence and digital innovation, ANK has grown into a leading provider of CAD design and software development solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <StatCard label="Completed Projects" value="500+" />
                <StatCard label="Satisfied Clients" value="200+" />
                <StatCard label="Expert Engineers" value="50+" />
                <StatCard label="Years of Excellence" value="15+" />
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="aspect-video bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                  alt="Office Environment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-primary mb-6">OUR MISSION & VALUES</h2>
            <p className="text-lg text-slate-600">
              We are committed to delivering precision, reliability, and innovation in every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard icon={<Rocket />} title="Innovation" desc="Pushing the boundaries of what's possible." />
            <ValueCard icon={<Target />} title="Precision" desc="Meticulous attention to every engineering detail." />
            <ValueCard icon={<Users />} title="Collaboration" desc="Working as one with our clients." />
            <ValueCard icon={<Award />} title="Quality" desc="Upholding the highest standards of excellence." />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

const StatCard = ({ label, value }: { label: string, value: string }) => (
  <div>
    <h3 className="text-4xl font-black text-primary mb-2">{value}</h3>
    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{label}</p>
  </div>
)

const ValueCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all text-center">
    <div className="inline-flex p-4 bg-blue-50 text-accent rounded-2xl mb-6">{icon}</div>
    <h4 className="text-xl font-bold text-primary mb-4">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
)

export default About
