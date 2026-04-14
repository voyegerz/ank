import { useState } from "react";
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

import HardwareEngineering from "./pages/services/Product Engineering/HardwareEngineering";
import MechanicalEngineering from "./pages/services/Product Engineering/MechanicalEngineering";
import ReverseEngineering from "./pages/services/Product Engineering/ReverseEngineering";
import SPM from "./pages/services/Product Engineering/SPM";
import SoftwareEngineering from "./pages/services/Product Engineering/SoftwareEngineering";
import TestingQA from "./pages/services/Product Engineering/TestingQA";
import PCBassembly from "./pages/services/Manufacturing/PCBassembly";
import ProductAssembly from "./pages/services/Manufacturing/ProductAssembly";
import RapidPrototyping from "./pages/services/Manufacturing/RapidPrototyping";
import FDM3DPrinting from "./pages/services/Manufacturing/FDM3DPrinting";
import WebApplications from "./pages/services/cloud and applications/WebApplications";
import MobileApplications from "./pages/services/cloud and applications/MobileApplications";
import DesktopApplications from "./pages/services/cloud and applications/DesktopApplications";
import IoTApplications from "./pages/services/cloud and applications/IoTApplications";
import ScalingMaintenance from "./pages/services/cloud and applications/ScalingMaintenance";
import SAAS from "./pages/services/cloud and applications/SAAS";
import SoftwareAutomation from "./pages/services/Production And Automation/SoftwareAutomation";
import ProcessAutomation from "./pages/services/Production And Automation/ProcessAutomation";
import PanelAutomation from "./pages/services/Production And Automation/PanelAutomation";
import MaintenanceTroubleshooting from "./pages/services/Production And Automation/MaintenanceTroubleshooting";
import SchoolsCollegeProjects from "./pages/services/Student Outreach/SchoolsCollegeProjects";
import Workshops from "./pages/services/Student Outreach/Workshops";
import ProjectToProduct from "./pages/services/Student Outreach/ProjectToProduct";

// --- Products ---
import DecorProducts from "./pages/products/DecorProducts";
import SoftwareProducts from "./pages/products/SoftwareProducts";
import IndustrialEquipment from "./pages/products/IndustrialEquipment";
import Courses from "./pages/products/Courses";
import MedicalProducts from "./pages/products/MedicalProducts";
import ProjectsModelling from "./pages/products/ProjectsModelling";

// --- About ---
import CompanyOverview from "./pages/about/CompanyOverview";
import CaseStudies from "./pages/about/CaseStudies";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <SmoothScroll>
        <div className="min-h-screen bg-white text-slate-900 font-sans">
          <ScrollToTop />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
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
              <Route
                path="/services/mechanical-engineering"
                element={<MechanicalEngineering />}
              />
              <Route
                path="/services/reverse-engineering"
                element={<ReverseEngineering />}
              />
              <Route path="/services/spm" element={<SPM />} />
              <Route path="/services/testing-qa" element={<TestingQA />} />
              <Route path="/services/pcb-assembly" element={<PCBassembly />} />
              <Route
                path="/services/product-assembly"
                element={<ProductAssembly />}
              />
              <Route
                path="/services/rapid-prototyping"
                element={<RapidPrototyping />}
              />
              <Route
                path="/services/fdm-3d-printing"
                element={<FDM3DPrinting />}
              />
              <Route
                path="/services/web-applications"
                element={<WebApplications />}
              />
              <Route
                path="/services/mobile-applications"
                element={<MobileApplications />}
              />
              <Route
                path="/services/desktop-applications"
                element={<DesktopApplications />}
              />
              <Route
                path="/services/iot-applications"
                element={<IoTApplications />}
              />
              <Route
                path="/services/scaling-maintenance"
                element={<ScalingMaintenance />}
              />
              <Route path="/services/saas" element={<SAAS />} />
              <Route
                path="/services/software-automation"
                element={<SoftwareAutomation />}
              />
              <Route
                path="/services/process-automation"
                element={<ProcessAutomation />}
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

              {/* About Section */}
              <Route path="/about/overview" element={<CompanyOverview />} />
              <Route path="/about/case-studies" element={<CaseStudies />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
