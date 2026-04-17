import { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import CommonHero from "../components/CommonHero";
import MapSection from "../components/MapSection";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { useSubmitInquiry } from "@/hooks/useInquiryQueries";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  designation: string;
  company_name: string;
  company_website: string;
  country: string;
  message: string;
  product: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    company_name: "",
    company_website: "",
    country: "",
    message: "",
    product: "",
  });

  const { mutate: submitInquiry, isPending, isSuccess } = useSubmitInquiry();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitInquiry({
      type: "general",
      ...formData,
    });
    setFormData({
      name: "",
      email: "",
      mobile: "",
      designation: "",
      company_name: "",
      company_website: "",
      country: "",
      message: "",
      product: "",
    });
  };

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=2000"
        caption="Get in Touch"
        title="Contact ANK"
        subtitle="Connect with our technical consultants to discuss your next industrial engineering project. We're ready to help you scale your operations."
        watermarkNumber="09"
      />
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              {/* Left Side: Info */}
              <div className="order-2 lg:order-1 lg:col-span-4 space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-widest flex items-center gap-4">
                    <span className="w-12 h-px bg-primary/20" />
                    Office
                  </h2>
                  <div className="space-y-10">
                    <ContactInfo
                      icon={<Mail size={20} />}
                      title="Direct Email"
                      detail="enquiry@ankautomation.in"
                    />
                    <ContactInfo
                      icon={<Phone size={20} />}
                      title="Phone Lines"
                      detail="+91 6354230924 / 9409588709"
                    />
                    <ContactInfo
                      icon={<MapPin size={20} />}
                      title="Visit HQ"
                      detail="485/486-A6 GIDC Makarpura, Vadodara - 390010"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Right Side: Form */}
              <div className="order-1 lg:order-2 lg:col-span-8">
                <div className="bg-slate-50 p-12 rounded-sm border border-black/5 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                  <h2 className="text-2xl font-black text-slate-900 mb-10 uppercase tracking-widest flex items-center gap-4">
                    <span className="w-12 h-px bg-primary/20" />
                    Project Inquiry
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-8 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm"
                          placeholder="+91 ..."
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          Designation
                        </label>
                        <input
                          type="text"
                          name="designation"
                          value={formData.designation}
                          onChange={handleChange}
                          className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm"
                          placeholder="e.g. Project Manager"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company_name"
                          value={formData.company_name}
                          onChange={handleChange}
                          className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm"
                          placeholder="Your Org"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          Company Website
                        </label>
                        <input
                          type="url"
                          name="company_website"
                          value={formData.company_website}
                          onChange={handleChange}
                          className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm"
                          placeholder="https://example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm"
                          placeholder="India"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          Product Interest
                        </label>
                        <input
                          type="text"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm"
                          placeholder="Product name or category"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-white border border-black/5 px-6 py-4 rounded-sm focus:ring-1 focus:ring-primary outline-none font-bold text-slate-900 placeholder:text-slate-300 transition-all shadow-sm resize-none"
                        placeholder="Tell us about your project requirements..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-primary text-white py-6 rounded-sm font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary-hover transition-all shadow-xl flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isPending ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />{" "}
                          Sending...
                        </>
                      ) : showSuccess ? (
                        <>
                          <CheckCircle size={16} /> Sent Successfully
                        </>
                      ) : (
                        <>
                          Send Now <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </PageLayout>
  );
};

const ContactInfo = ({
  icon,
  title,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
}) => (
  <div className="flex items-start gap-6 group">
    <div className="w-12 h-12 bg-slate-50 border border-black/5 flex items-center justify-center rounded-sm text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
      {icon}
    </div>
    <div>
      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
        {title}
      </h4>
      <p className="text-sm font-black text-slate-900 leading-relaxed uppercase tracking-tight">
        {detail}
      </p>
    </div>
  </div>
);

export default Contact;
