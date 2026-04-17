import { useState, useRef, useEffect, type ChangeEvent } from "react";
import PageLayout from "../components/PageLayout";
import CommonHero from "../components/CommonHero";
import MapSection from "../components/MapSection";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Send,
  Briefcase,
  CheckCircle2,
  CheckCircle,
  X,
  Loader2,
  Upload,
} from "lucide-react";
import { useVacancies, useSubmitApplication } from "@/hooks/useCareerQueries";
import careersService from "@/appwrite/services/careers";

const JOBS = [
  {
    id: 1,
    title: "Industrial Automation Engineer",
    type: "Full-time",
    location: "Vadodara, India",
    description:
      "Lead the design and implementation of complex automation systems, including PLC programming, SCADA integration, and hardware coordination for industrial production lines.",
    requirements: [
      "Expertise in Siemens/Rockwell/Delta PLC systems",
      "Proficiency in SCADA & HMI development",
      "Knowledge of industrial networking protocols",
      "Degree in Electrical or Mechatronics Engineering",
    ],
  },
  {
    id: 2,
    title: "Web Developer",
    type: "Full-time",
    location: "Remote / Hybrid",
    description:
      "Craft high-performance, visually stunning web applications and digital solutions for our industrial clients and internal products using modern stacks.",
    requirements: [
      "Advanced proficiency in React & TypeScript",
      "Experience with Tailwind CSS & Framer Motion",
      "Understanding of Headless CMS & API integration",
      "Strong UI/UX design sensibilities",
    ],
  },
];

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    applicant_name: "",
    applicant_email: "",
    address: "",
    vacancy: "",
    resume: null as File | null,
  });

  const { data: vacancies } = useVacancies(true);
  const {
    mutate: submitApplication,
    isPending,
    isSuccess,
  } = useSubmitApplication();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleApply = (title: string) => {
    setSelectedPosition(title);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files?.[0] || null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.resume || !formData.vacancy) return;
    let resume_id = "";  

    // Start loading immediately
    setIsSubmitting(true);

    try {
      // First upload the resume file
      const uploadResponse = await careersService.uploadResume(formData.resume);
      resume_id = uploadResponse.$id;
      console.log("Resume uploaded successfully with ID:", resume_id);

      // Then submit the application with the resume_id
      await submitApplication({
        vacancyId: formData.vacancy,
        data: {
          applicant_name: formData.applicant_name,
          applicant_email: formData.applicant_email,
          address: formData.address,
          resume_id,
        },
      });

      // Reset form
      setFormData({
        applicant_name: "",
        applicant_email: "",
        address: "",
        vacancy: "",
        resume: null,
      });
    } catch (error) {
      console.error("Failed to upload resume or submit application:", error);

      // Always try to delete the resume if it was uploaded
      if (resume_id) {
        console.log("Attempting to delete uploaded resume:", resume_id);
        try {
          const deleteResult = await careersService.deleteResume(resume_id);
          console.log("Resume deletion result:", deleteResult);
          if (deleteResult) {
            console.log("Resume deleted successfully");
          } else {
            console.error("Resume deletion returned false");
          }
        } catch (deleteError) {
          console.error("Failed to delete resume:", deleteError);
        }
      } else {
        console.log("No resume to delete - upload failed before getting ID");
      }

      // Show user-friendly error message
      alert("Failed to submit application. Please try again.");
    } finally {
      // Stop loading regardless of success or error
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
        caption="Build the Future"
        title="Careers at ANK"
        subtitle="Join a team of elite engineers and innovators dedicated to solving the world's most complex industrial automation and software challenges."
        watermarkNumber="07"
      />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tight">
                Our <span className="text-primary-hover">Culture</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed uppercase tracking-wide text-sm">
                At ANK, we don't just build machines; we build the future. We
                provide a high-performance environment where technical
                excellence meets creative freedom. We're always looking for
                unique minds who are ready to push the boundaries of what's
                possible.
              </p>
            </motion.div>
          </div>

          {/* Open Positions */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                Open Positions
              </span>
              <div className="h-px flex-1 bg-slate-100" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {JOBS.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group bg-slate-50 border border-slate-100 p-10 rounded-sm hover:bg-white hover:border-primary/20 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-primary/10 text-primary rounded-sm group-hover:bg-primary group-hover:text-white transition-colors">
                        <Briefcase size={20} />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest bg-white px-3 py-1 border border-slate-100 text-slate-400">
                        {job.type}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {job.location}
                      </p>
                    </div>

                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {job.description}
                    </p>

                    <ul className="space-y-3">
                      {job.requirements.map((req, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[11px] font-bold text-slate-600 uppercase tracking-tight"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-primary mt-0.5 shrink-0"
                          />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleApply(job.title)}
                    className="mt-10 inline-flex items-center gap-4 bg-slate-900 text-white group-hover:bg-primary px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all group/btn w-full justify-center"
                  >
                    Apply Now
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div ref={formRef} className="max-w-4xl mx-auto scroll-mt-32">
            <div className="bg-slate-50 p-12 rounded-sm border border-black/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest flex items-center gap-4">
                    <span className="w-12 h-px bg-primary/20" />
                    Drop Your CV
                  </h2>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                    Submit your application and join the ANK elite.
                  </p>
                </div>

                <AnimatePresence>
                  {selectedPosition && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="bg-primary/10 border border-primary/20 px-4 py-2 flex items-center gap-3"
                    >
                      <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                        Applying for: {selectedPosition}
                      </span>
                      <button
                        onClick={() => setSelectedPosition("")}
                        className="text-primary hover:text-slate-900 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-slate-500 text-sm">
                    We&apos;ll review your application and get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="applicant_name"
                        value={formData.applicant_name}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 px-4 py-3 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="applicant_email"
                        value={formData.applicant_email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-slate-200 px-4 py-3 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Address
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                      placeholder="Your address..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Position Applying For *
                    </label>
                    <select
                      name="vacancy"
                      value={formData.vacancy}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-slate-200 px-4 py-3 rounded focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    >
                      <option value="">Select a position...</option>
                      {vacancies?.map((job: any) => (
                        <option key={job.$id} value={job.$id}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Resume / CV *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="flex items-center gap-3 w-full bg-white border border-slate-200 px-4 py-3 rounded cursor-pointer hover:border-primary transition-all"
                      >
                        <Upload size={20} className="text-primary" />
                        <span className="text-slate-600">
                          {formData.resume
                            ? formData.resume.name
                            : "Upload your resume (PDF, DOC, DOCX)"}
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      isPending ||
                      !formData.resume ||
                      !formData.vacancy
                    }
                    className="w-full bg-primary text-white py-4 rounded font-bold uppercase tracking-wider hover:bg-primary-hover transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting || isPending ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />{" "}
                        Submitting...
                      </>
                    ) : showSuccess ? (
                      <>
                        <CheckCircle size={18} /> Application Sent!
                      </>
                    ) : (
                      <>
                        Submit Application <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </PageLayout>
  );
};

export default Careers;
