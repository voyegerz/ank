import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Send,
  ArrowUpRight,
} from "lucide-react";
import cardFront from "../assets/images/business_card_front.jpg";
import cardBack from "../assets/images/business_card_back.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    { name: "Product Designs", path: "/services/product-designs" },
    { name: "Industrial Automation", path: "/services/industrial-automation" },
    { name: "Software Solutions", path: "/services/software-solutions" },
    { name: "Manufacturing", path: "/services/manufacturing" },
    { name: "Student Outreach", path: "/services/student-outreach" },
  ];

  const productLinks = [
    { name: "Decor Products", path: "/products/decor" },
    { name: "Software Products", path: "/products/software" },
    { name: "Industrial Automation", path: "/products/industrial" },
    { name: "Courses", path: "/products/courses" },
    { name: "Medical Products", path: "/products/medical" },
    { name: "DIY Robotics Kits", path: "/products/diy-robotics-catalog" },
  ];

  const aboutLinks = [
    { name: "Company Overview", path: "/about/overview" },
    { name: "Case Studies", path: "/about/case-studies" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-[#020617] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Modern Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-primary rounded-full blur-[120px] animate-pulse " /> */}
        <motion.div
          className="absolute w-[70%] h-[70%] bg-primary rounded-full blur-[120px]"
          animate={{
            x: [0, -50, 30, -20, 0],
            y: [0, 40, -30, 20, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
            opacity: [0.4, 0.6, 0.3, 0.5, 0.4],
          }}
          transition={{
            duration: 2500,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "-10%", right: "-10%" }}
        />
        <motion.div
          className="absolute w-[60%] h-[60%] bg-primary/40 rounded-full blur-[100px]"
          animate={{
            x: [0, 60, -40, 20, 0],
            y: [0, -30, 50, -10, 0],
            scale: [1, 0.95, 1.1, 1, 1],
            opacity: [0.3, 0.5, 0.4, 0.6, 0.3],
          }}
          transition={{
            duration: 2500,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "-10%", left: "-10%" }}
        />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/40 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(1,0,128,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          {/* ─── Business Card Section (Left) ─── */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="perspective-1000 group cursor-pointer w-full max-w-[280px]">
              <motion.div
                className="relative w-full aspect-[9/16] preserve-3d transition-all duration-1000"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ rotateY: 180 }}
              >
                {/* Front Side */}
                <div className="backface-hidden shadow-2xl rounded-lg overflow-hidden absolute inset-0" style={{ transform: "translateZ(0)" }}>
                  <img
                    src={cardFront}
                    alt="ANK Business Card Front"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 backface-hidden shadow-2xl rounded-lg overflow-hidden"
                  style={{ transform: "rotateY(180deg) translateZ(0)" }}
                >
                  <img
                    src={cardBack}
                    alt="ANK Business Card Back"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* ─── Links Sections ─── */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

              {/* Our Services */}
              <div className="space-y-8">
                <h4 className="text-xs font-bold text-white uppercase tracking-[0.25em] opacity-90 border-b border-white/10 pb-4">
                  Our Services
                </h4>
                <ul className="space-y-4">
                  {serviceCategories.map((link) => (
                    <FooterLink key={link.path} to={link.path} label={link.name} />
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div className="space-y-8">
                <h4 className="text-xs font-bold text-white uppercase tracking-[0.25em] opacity-90 border-b border-white/10 pb-4">
                  Products
                </h4>
                <ul className="space-y-4">
                  {productLinks.map((link) => (
                    <FooterLink key={link.path} to={link.path} label={link.name} />
                  ))}
                </ul>
              </div>

              {/* About & More */}
              <div className="space-y-8">
                <h4 className="text-xs font-bold text-white uppercase tracking-[0.25em] opacity-90 border-b border-white/10 pb-4">
                  About ANK
                </h4>
                <ul className="space-y-4">
                  {aboutLinks.map((link) => (
                    <FooterLink key={link.path} to={link.path} label={link.name} />
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter & Socials Row */}
            <div className="xl:mt-5 xl:pt-10 lg:mt-10 lg:pt-10 border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              {/* Newsletter */}
              <div className="max-w-md">
                <h4 className="text-sm font-bold mb-4 uppercase tracking-widest">Stay Updated</h4>
                <p className="text-white/40 text-xs mb-6 uppercase tracking-wider font-medium">Subscribe to our newsletter for the latest insights.</p>
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all rounded-sm"
                  />
                  <button className="absolute right-1 top-1 bottom-1 px-5 bg-primary text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 rounded-sm">
                    <Send size={14} />
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-col md:items-end gap-6">
                <h4 className="text-sm font-bold uppercase tracking-widest">Connect With Us</h4>
                <div className="flex gap-4">
                  <SocialIcon icon={<Facebook size={18} />} href="#" />
                  <SocialIcon icon={<Instagram size={18} />} href="#" />
                  <SocialIcon icon={<Linkedin size={18} />} href="#" />
                  <SocialIcon icon={<Twitter size={18} />} href="#" />
                  <SocialIcon icon={<Youtube size={18} />} href="#" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] font-medium uppercase tracking-[0.2em]">
            © {currentYear} ANK DESIGN & AUTOMATION SOLUTIONS LLP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="text-white/30 hover:text-white text-[10px] font-medium uppercase tracking-[0.2em] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/30 hover:text-white text-[10px] font-medium uppercase tracking-[0.2em] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <motion.a
    href={href}
    whileHover={{ y: -4 }}
    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/50 hover:bg-primary hover:text-white transition-all duration-300 border border-white/5 hover:border-transparent"
  >
    {icon}
  </motion.a>
);

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link
      to={to}
      className="group flex items-center gap-3 text-sm font-medium text-white/60 hover:text-white transition-all duration-300"
    >
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary/50 transition-all duration-300 group-hover:w-full" />
      </span>
      <ArrowUpRight
        size={14}
        className="text-white opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out"
      />
    </Link>
  </li>
);

export default Footer;
