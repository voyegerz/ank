import { useState, useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { SmoothScroll } from "./components/SmoothScroll";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";

// --- Services ---
import OurServices from "./pages/services/OurServices";

// Product Designs
import ProductDesignsOverview from "./pages/services/ProductDesigns/Overview";
import HardwareEngineering from "./pages/services/ProductDesigns/HardwareEngineering";
import CadDesign from "./pages/services/ProductDesigns/CadDesign";
import ReverseEngineering from "./pages/services/ProductDesigns/ReverseEngineering";
import SPM from "./pages/services/ProductDesigns/SPM";
import SoftwareEngineering from "./pages/services/ProductDesigns/SoftwareEngineering";
import FeaAnalysis from "./pages/services/ProductDesigns/FeaAnalysis";

// Manufacturing
import ManufacturingOverview from "./pages/services/Manufacturing/Overview";
import PcbDesign from "./pages/services/Manufacturing/PcbDesign";
import ProductAssembly from "./pages/services/Manufacturing/ProductAssembly";
import RapidPrototyping from "./pages/services/Manufacturing/RapidPrototyping";
import Fdm3DPrinting from "./pages/services/Manufacturing/Fdm3DPrinting";

// Software Solutions
import SoftwareSolutionsOverview from "./pages/services/SoftwareSolutions/Overview";
import WebsiteDesign from "./pages/services/SoftwareSolutions/WebsiteDesign";
import MobileApplication from "./pages/services/SoftwareSolutions/MobileApplication";
import ApplicationDesign from "./pages/services/SoftwareSolutions/ApplicationDesign";
import IotApplication from "./pages/services/SoftwareSolutions/IotApplication";
import InventoryManagement from "./pages/services/SoftwareSolutions/InventoryManagement";
import Saas from "./pages/services/SoftwareSolutions/Saas";

// Industrial Automation
import IndustrialAutomationOverview from "./pages/services/IndustrialAutomation/Overview";
import ScadaHmi from "./pages/services/IndustrialAutomation/ScadaHmi";
import PlcProgramming from "./pages/services/IndustrialAutomation/PlcProgramming";
import PanelAutomation from "./pages/services/IndustrialAutomation/PanelAutomation";
import MaintenanceTroubleshooting from "./pages/services/IndustrialAutomation/MaintenanceTroubleshooting";

// Student Outreach
import StudentOutreachOverview from "./pages/services/StudentOutreach/Overview";
import SchoolsCollegeProjects from "./pages/services/StudentOutreach/SchoolsCollegeProjects";
import Workshops from "./pages/services/StudentOutreach/Workshops";
import ProjectToProduct from "./pages/services/StudentOutreach/ProjectToProduct";

// --- Products ---
import DecorProducts from "./pages/products/DecorProducts";
import SoftwareProducts from "./pages/products/SoftwareProducts";
import IndustrialEquipment from "./pages/products/IndustrialEquipment";
import Courses from "./pages/products/Courses";
import MedicalProducts from "./pages/products/MedicalProducts";
import ProjectsModelling from "./pages/products/ProjectsModelling";
import DiyRoboticsKit from "./pages/products/DiyRoboticsKit";
import DiyRoboticsProducts from "./pages/products/DiyRoboticsProducts";

// --- About ---
import CompanyOverview from "./pages/about/CompanyOverview";
import CaseStudies from "./pages/about/CaseStudies";
import CaseStudyDetail from "./pages/about/CaseStudyDetail";

// --- Admin ---
import AdminLogin from "./pages/admin/Login";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminOverview from "./pages/admin/Overview";
import AdminProducts from "./pages/admin/Products/ProductsPage";
import AdminProductDetail from "./pages/admin/Products/ProductDetailPage";
import AdminCategories from "./pages/admin/CategoriesPage";
import AdminApplications from "./pages/admin/ApplicationsPage";
import AdminCaseStudies from "./pages/admin/CaseStudies/CaseStudiesPage";
import AdminCaseStudyDetail from "./pages/admin/CaseStudies/CaseStudyDetail";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { checkAuth, loading: authLoading } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (authLoading) {
    return null; // Or a professional loading screen
  }

  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      <Analytics />
      {/* <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence> */}

      <SmoothScroll>
        <div className="min-h-screen bg-white text-slate-900 font-sans">
          <ScrollToTop />
          {!isAdmin && <Navbar />}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<OurServices />} />

              {/* Service Category Overviews */}
              <Route
                path="/services/product-designs"
                element={<ProductDesignsOverview />}
              />
              <Route
                path="/services/industrial-automation"
                element={<IndustrialAutomationOverview />}
              />
              <Route
                path="/services/software-solutions"
                element={<SoftwareSolutionsOverview />}
              />
              <Route
                path="/services/manufacturing"
                element={<ManufacturingOverview />}
              />
              <Route
                path="/services/student-outreach"
                element={<StudentOutreachOverview />}
              />

              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />

              {/* Services */}
              <Route
                path="/services/software-engineering"
                element={<SoftwareEngineering />}
              />
              <Route
                path="/services/hardware-engineering"
                element={<HardwareEngineering />}
              />
              <Route path="/services/cad-design" element={<CadDesign />} />
              <Route
                path="/services/reverse-engineering"
                element={<ReverseEngineering />}
              />
              <Route path="/services/spm" element={<SPM />} />
              <Route path="/services/fea-analysis" element={<FeaAnalysis />} />
              <Route path="/services/pcb-design" element={<PcbDesign />} />
              <Route
                path="/services/product-assembly"
                element={<ProductAssembly />}
              />
              <Route
                path="/services/rapid-prototyping"
                element={<RapidPrototyping />}
              />
              <Route path="/services/3d-printing" element={<Fdm3DPrinting />} />
              <Route
                path="/services/website-design"
                element={<WebsiteDesign />}
              />
              <Route
                path="/services/mobile-application"
                element={<MobileApplication />}
              />
              <Route
                path="/services/application-design"
                element={<ApplicationDesign />}
              />
              <Route
                path="/services/iot-application"
                element={<IotApplication />}
              />
              <Route
                path="/services/inventory-management"
                element={<InventoryManagement />}
              />
              <Route path="/services/saas" element={<Saas />} />
              <Route path="/services/scada-hmi" element={<ScadaHmi />} />
              <Route
                path="/services/plc-programming"
                element={<PlcProgramming />}
              />
              <Route
                path="/services/panel-automation"
                element={<PanelAutomation />}
              />
              <Route
                path="/services/maintenance-troubleshooting"
                element={<MaintenanceTroubleshooting />}
              />
              <Route
                path="/services/schools-college-projects"
                element={<SchoolsCollegeProjects />}
              />
              <Route path="/services/workshops" element={<Workshops />} />
              <Route
                path="/services/project-to-product"
                element={<ProjectToProduct />}
              />

              {/* Products */}
              <Route path="/products/decor" element={<DecorProducts />} />
              <Route path="/products/software" element={<SoftwareProducts />} />
              <Route
                path="/products/industrial"
                element={<IndustrialEquipment />}
              />
              <Route path="/products/courses" element={<Courses />} />
              <Route path="/products/medical" element={<MedicalProducts />} />
              <Route
                path="/products/modelling"
                element={<ProjectsModelling />}
              />
              <Route
                path="/products/diy-robotics-kit"
                element={<DiyRoboticsKit />}
              />
              <Route
                path="/products/diy-robotics-catalog"
                element={<DiyRoboticsProducts />}
              />

              {/* About Section */}
              <Route path="/about/overview" element={<CompanyOverview />} />
              <Route path="/about/case-studies" element={<CaseStudies />} />
              <Route
                path="/about/case-studies/:id"
                element={<CaseStudyDetail />}
              />
              {/* Admin */}
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminLayout />}>
                <Route index element={<AdminOverview />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="products/:id" element={<AdminProductDetail />} />
                <Route path="categories" element={<AdminCategories />} />
                <Route path="applications" element={<AdminApplications />} />
                <Route path="case-studies" element={<AdminCaseStudies />} />
                <Route
                  path="case-studies/:id"
                  element={<AdminCaseStudyDetail />}
                />
              </Route>
            </Routes>
          </AnimatePresence>
          {!isAdmin && <Footer />}
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
