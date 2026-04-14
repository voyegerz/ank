import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Send,
  MessageCircle,
  Globe,
} from "lucide-react";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-32 py-16  bg-slate-950 text-white relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        {/* Company Info / Business Card Style */}
        <div className="col-span-1">
          <div className="bg-white p-6 rounded-t-sm">
            <Link to="/" className="block group">
              <img
                src={logo}
                alt="ANK Logo"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </Link>
          </div>
          <div className="bg-primary p-6 rounded-b-sm space-y-4">
            <div>
              <h3 className="text-sm font-black uppercase tracking-tight leading-tight">
                ANK Design & <br /> Automation Solutions
              </h3>
              <p className="text-[9px] font-bold text-white/60 mt-1 uppercase tracking-widest">
                GSTIN: 24ACKFA7111N1ZB
              </p>
            </div>
            
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-white/60" />
                <p className="text-[10px] font-bold">+91 63542 30924 / 94095 88709</p>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={14} className="text-white/60" />
                <p className="text-[10px] font-bold">www.ankautomation.in</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-white/60" />
                <p className="text-[10px] font-bold lowercase">enquiry@ankautomation.in</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-white/60 mt-0.5" />
                <p className="text-[10px] font-bold leading-tight">
                  Shop No. A4, Lovely Mobile Market, Near Marimatas Lane, Palace Road, Vadodara, Gujarat 390001
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-8">
            <SocialIcon icon={<Facebook size={18} />} />
            <SocialIcon icon={<Instagram size={18} />} />
            <SocialIcon icon={<Linkedin size={18} />} />
            <SocialIcon icon={<MessageCircle size={18} />} />
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-10">
            Our Services
          </h4>
          <ul className="space-y-4">
            <FooterLink
              to="/services/mechanical-engineering"
              label="Mechanical Engineering"
            />
            <FooterLink
              to="/services/software-engineering"
              label="Industrial Software"
            />
            <FooterLink to="/services/pcb-assembly" label="PCB & Electronics" />
            <FooterLink
              to="/services/rapid-prototyping"
              label="Rapid Prototyping"
            />
            <FooterLink to="/services/testing-qa" label="Quality Assurance" />
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-10">
            Contact Us
          </h4>
          <div className="space-y-8">
            <div className="flex gap-4 group cursor-default">
              <MapPin
                className="text-white shrink-0 group-hover:scale-110 transition-transform"
                size={20}
              />
              <p className="text-sm font-bold text-slate-300 leading-relaxed">
                Shop No. A4, Lovely Mobile Market, Near Marimatas Lane, Palace Road, Vadodara - 390001
              </p>
            </div>
            <div className="flex gap-4 group cursor-default">
              <Phone
                className="text-white shrink-0 group-hover:scale-110 transition-transform"
                size={20}
              />
              <p className="text-sm font-bold text-slate-300">
                +91 63542 30924
              </p>
            </div>
            <div className="flex gap-4 group cursor-default">
              <Mail
                className="text-white shrink-0 group-hover:scale-110 transition-transform"
                size={20}
              />
              <p className="text-sm font-bold text-slate-300">
                enquiry@ankautomation.in
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links / Newsletter */}
        <div>
          <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-10">
            Quick Links
          </h4>
          <ul className="space-y-4 mb-10">
            <FooterLink to="/about/company-overview" label="About Company" />
            <FooterLink to="/careers" label="Join Our Team" />
            <FooterLink to="/about/case-studies" label="Case Studies" />
            <FooterLink to="/contact" label="Contact Us" />
          </ul>

          <div className="relative group">
            <input
              type="email"
              placeholder="Newsletter..."
              className="w-full bg-slate-900 border-none px-6 py-4 text-sm font-bold text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary transition-all outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary flex items-center justify-center hover:bg-white hover:text-primary transition-all">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-black uppercase tracking-widest">
        <p>
          © 2026 ANK DESIGN & AUTOMATION SOLUTIONS LLP. All rights reserved.
        </p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms of Use
          </Link>
          <Link to="/support" className="hover:text-white transition-colors">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: any }) => (
  <a
    href="#"
    className="w-10 h-10 bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link
      to={to}
      className="group flex items-center gap-2 text-base font-bold text-slate-400 hover:text-white transition-all"
    >
      <ChevronRight
        size={12}
        className="text-white opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
      />
      {label}
    </Link>
  </li>
);

export default Footer;
