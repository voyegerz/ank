import { useState, useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  FileText,
  Inbox,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Layers,
} from "lucide-react";

// Shadcn Components
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import logo from "@/assets/images/logo.svg";


const sidebarLinks = [
  {
    label: "Overview",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
    end: true,
  },
  {
    label: "Products",
    path: "/admin/dashboard/products",
    icon: Package,
  },
  {
    label: "Applications",
    path: "/admin/dashboard/applications",
    icon: Inbox,
  },
  {
    label: "Case Studies",
    path: "/admin/dashboard/case-studies",
    icon: FileText,
  },
  {
    label: "Categories",
    path: "/admin/dashboard/categories",
    icon: Layers,
  },
];

const AdminLayout = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading, logout } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/admin");
    }
  }, [loading, isAuthenticated, navigate]);

  const handleLogout = async () => {
    await logout();
    navigate("/admin");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-8 h-8 border-2 border-slate-200 border-t-primary rounded-full"
        />
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* ── Desktop Sidebar ── */}
      <aside className="hidden lg:flex flex-col w-[260px] bg-slate-900 text-white fixed top-0 left-0 h-screen z-50">
        {/* Logo */}
        <div className="px-6 py-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ANK" className="h-10 w-auto" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                Admin Panel
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 px-3 py-6">
          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-white/20 px-3 mb-4">
            Modules
          </p>
          <div className="space-y-1">
            {sidebarLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                className="block"
              >
                {({ isActive }) => (
                  <Button
                    variant="ghost"
                    className={`w-full justify-start gap-3 h-11 px-4 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-all duration-200 border-none ${
                        isActive
                        ? "bg-white/10 text-white shadow-lg shadow-black/10 hover:bg-white/20"
                        : "text-white/40 hover:text-white/80 hover:bg-white/5"
                    }`}
                  >
                    <link.icon size={17} strokeWidth={isActive ? 2.5 : 2} />
                    <span className="flex-1 text-left">{link.label}</span>
                    <ChevronRight
                      size={13}
                      className={`transition-all duration-200 ${
                        isActive
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2 group-hover:opacity-30"
                      }`}
                    />
                  </Button>
                )}
              </NavLink>
            ))}
          </div>
        </ScrollArea>

        {/* Logout */}
        <div className="px-3 pb-6">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start gap-3 h-11 px-4 rounded-xl text-[11px] font-bold uppercase tracking-wider text-red-400/60 hover:text-red-400 hover:bg-red-500/10 transition-all border-none"
          >
            <LogOut size={16} />
            Logout
          </Button>
        </div>
      </aside>

      {/* ── Mobile Header ── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-slate-900 z-50 flex items-center justify-between px-5">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ANK" className="h-7 w-auto brightness-0 invert" />
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
            Admin
          </span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white/60 hover:text-white transition-colors"
        >
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Sidebar Overlay ── */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden fixed top-0 left-0 h-screen w-[260px] bg-slate-900 z-[60] flex flex-col"
            >
              <div className="px-5 py-5 border-b border-white/5 flex items-center justify-between">
                <img src={logo} alt="ANK" className="h-8 w-auto brightness-0 invert" />
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-white/40 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              <ScrollArea className="flex-1 px-3 py-6">
                <div className="space-y-1">
                  {sidebarLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      end={link.end}
                      onClick={() => setSidebarOpen(false)}
                      className="block"
                    >
                      {({ isActive }) => (
                        <Button
                          variant="ghost"
                          className={`w-full justify-start gap-3 h-11 px-4 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-all border-none ${
                            isActive
                              ? "bg-white/10 text-white hover:bg-white/20"
                              : "text-white/40 hover:text-white/80 hover:bg-white/5"
                          }`}
                        >
                          <link.icon size={17} />
                          {link.label}
                        </Button>
                      )}
                    </NavLink>
                  ))}
                </div>
              </ScrollArea>
              <div className="px-3 pb-6">
                <Button
                  variant="ghost"
                  onClick={handleLogout}
                  className="w-full justify-start gap-3 h-11 px-4 rounded-xl text-[11px] font-bold uppercase tracking-wider text-red-400/60 hover:text-red-400 hover:bg-red-500/10 transition-all border-none"
                >
                  <LogOut size={16} />
                  Logout
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── Main Content ── */}
      <main className="flex-1 lg:ml-[260px] min-h-screen pt-16 lg:pt-0">
        <div className="p-6 lg:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
