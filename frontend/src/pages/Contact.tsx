import PageLayout from '../components/PageLayout'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  return (
    <PageLayout>
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-black text-primary tracking-tighter mb-6 uppercase">
                Let's <span className="text-accent">Connect</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Ready to transform your industrial operations? Our team is here to help you achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-8">
                <ContactInfo 
                  icon={<Mail className="text-accent" />} 
                  title="Email Us" 
                  detail="enquiry@ ankautomation.in" 
                />
                <ContactInfo 
                  icon={<Phone className="text-accent" />} 
                  title="Call Us" 
                  detail="+91 6354230924, +91 9409588709" 
                />
                <ContactInfo 
                  icon={<MapPin className="text-accent" />} 
                  title="Visit Us" 
                  detail="485/486-A6 GIDC Makarpura, Vadodara - 390010" 
                />
              </div>

              <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Name</label>
                      <input type="text" className="w-full px-6 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-accent outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Email</label>
                      <input type="email" className="w-full px-6 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-accent outline-none" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Subject</label>
                    <input type="text" className="w-full px-6 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-accent outline-none" placeholder="Project Inquiry" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Message</label>
                    <textarea rows={5} className="w-full px-6 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-accent outline-none resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-accent transition-all flex items-center justify-center gap-2 shadow-lg">
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

const ContactInfo = ({ icon, title, detail }: { icon: any, title: string, detail: string }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4">
    <div className="p-4 bg-blue-50 rounded-2xl">{icon}</div>
    <div>
      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</h4>
      <p className="text-xl font-bold text-primary">{detail}</p>
    </div>
  </div>
)

export default Contact
