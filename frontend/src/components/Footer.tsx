import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-black tracking-tighter">
              ANK<span className="text-indigo-500">.</span>
            </Link>
            <p className="mt-8 text-slate-400 max-w-xs leading-relaxed">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-8">Services</h4>
            <ul className="space-y-4 text-slate-300 font-bold">
              <li><Link to="/cad-services" className="hover:text-indigo-400 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/software-services" className="hover:text-indigo-400 transition-colors">Content Writing</Link></li>
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">SEO for Business</Link></li>
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">UI Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4 text-slate-300 font-bold">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact us</Link></li>
              <li><Link to="/careers" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-8">Legal</h4>
            <ul className="space-y-4 text-slate-300 font-bold">
              <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/return" className="hover:text-indigo-400 transition-colors">Return Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-medium">
          <p>© 2026 ANK DESIGN & AUTOMATION SOLUTIONS LLP. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
             <Link to="/help" className="hover:text-white transition-colors">Help desk</Link>
             <Link to="/support" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
