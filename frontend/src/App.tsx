import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { SmoothScroll } from './components/SmoothScroll'
import Home from './pages/Home'
import CADServices from './pages/CADServices'
import SoftwareServices from './pages/SoftwareServices'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import ScrollToTop from './components/ScrollToTop'

// --- Services ---
import SoftwareEngineering from './pages/services/SoftwareEngineering'
import HardwareEngineering from './pages/services/HardwareEngineering'
import MechanicalEngineering from './pages/services/MechanicalEngineering'
import TestingQA from './pages/services/TestingQA'
import PCBassembly from './pages/services/PCBassembly'
import ProductAssembly from './pages/services/ProductAssembly'
import RapidPrototyping from './pages/services/RapidPrototyping'
import FDM3DPrinting from './pages/services/FDM3DPrinting'
import WebApplications from './pages/services/WebApplications'
import MobileApplications from './pages/services/MobileApplications'
import DesktopApplications from './pages/services/DesktopApplications'
import IoTApplications from './pages/services/IoTApplications'
import ScalingMaintenance from './pages/services/ScalingMaintenance'
import SoftwareAutomation from './pages/services/SoftwareAutomation'
import ProcessAutomation from './pages/services/ProcessAutomation'
import MaintenanceTroubleshooting from './pages/services/MaintenanceTroubleshooting'

// --- Business Units ---
import CADDesignServicesUnit from './pages/business-units/CADDesignServices'
import SoftwareDevelopmentUnit from './pages/business-units/SoftwareDevelopment'
import ManufacturingUnit from './pages/business-units/Manufacturing'
import EmbeddedSystemsIoTUnit from './pages/business-units/EmbeddedSystemsIoT'
import CloudScalingUnit from './pages/business-units/CloudScaling'
import EducationUnit from './pages/business-units/Education'
import EngineeringConsultationUnit from './pages/business-units/EngineeringConsultation'
import IndustryCollaborationUnit from './pages/business-units/IndustryCollaboration'

// --- Products ---
import DecorProducts from './pages/products/DecorProducts'
import SoftwareProducts from './pages/products/SoftwareProducts'
import IndustrialEquipment from './pages/products/IndustrialEquipment'
import Courses from './pages/products/Courses'
import MedicalProducts from './pages/products/MedicalProducts'
import ProjectsModelling from './pages/products/ProjectsModelling'

// --- About ---
import CompanyOverview from './pages/about/CompanyOverview'
import PressNewsroom from './pages/about/PressNewsroom'
import ImagesVideos from './pages/about/ImagesVideos'
import Blogs from './pages/about/Blogs'
import CaseStudies from './pages/about/CaseStudies'
import TutorialsEbooks from './pages/about/TutorialsEbooks'
import Whitepapers from './pages/about/Whitepapers'
import Support from './pages/about/Support'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <SmoothScroll>
          <div className="min-h-screen bg-white text-slate-900 font-sans">
            <ScrollToTop />
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/cad-services" element={<CADServices />} />
                <Route path="/software-services" element={<SoftwareServices />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />
                
                {/* Services */}
                <Route path="/services/software-engineering" element={<SoftwareEngineering />} />
                <Route path="/services/hardware-engineering" element={<HardwareEngineering />} />
                <Route path="/services/mechanical-engineering" element={<MechanicalEngineering />} />
                <Route path="/services/testing-qa" element={<TestingQA />} />
                <Route path="/services/pcb-assembly" element={<PCBassembly />} />
                <Route path="/services/product-assembly" element={<ProductAssembly />} />
                <Route path="/services/rapid-prototyping" element={<RapidPrototyping />} />
                <Route path="/services/fdm-3d-printing" element={<FDM3DPrinting />} />
                <Route path="/services/web-applications" element={<WebApplications />} />
                <Route path="/services/mobile-applications" element={<MobileApplications />} />
                <Route path="/services/desktop-applications" element={<DesktopApplications />} />
                <Route path="/services/iot-applications" element={<IoTApplications />} />
                <Route path="/services/scaling-maintenance" element={<ScalingMaintenance />} />
                <Route path="/services/software-automation" element={<SoftwareAutomation />} />
                <Route path="/services/process-automation" element={<ProcessAutomation />} />
                <Route path="/services/maintenance-troubleshooting" element={<MaintenanceTroubleshooting />} />

                {/* Business Units */}
                <Route path="/business-units/cad-design" element={<CADDesignServicesUnit />} />
                <Route path="/business-units/software-development" element={<SoftwareDevelopmentUnit />} />
                <Route path="/business-units/manufacturing" element={<ManufacturingUnit />} />
                <Route path="/business-units/embedded-iot" element={<EmbeddedSystemsIoTUnit />} />
                <Route path="/business-units/cloud-scaling" element={<CloudScalingUnit />} />
                <Route path="/business-units/education" element={<EducationUnit />} />
                <Route path="/business-units/engineering-consultation" element={<EngineeringConsultationUnit />} />
                <Route path="/business-units/industry-collaboration" element={<IndustryCollaborationUnit />} />

                {/* Products */}
                <Route path="/products/decor" element={<DecorProducts />} />
                <Route path="/products/software" element={<SoftwareProducts />} />
                <Route path="/products/industrial" element={<IndustrialEquipment />} />
                <Route path="/products/courses" element={<Courses />} />
                <Route path="/products/medical" element={<MedicalProducts />} />
                <Route path="/products/modelling" element={<ProjectsModelling />} />

                {/* About Section */}
                <Route path="/about/overview" element={<CompanyOverview />} />
                <Route path="/about/press" element={<PressNewsroom />} />
                <Route path="/about/media" element={<ImagesVideos />} />
                <Route path="/about/blogs" element={<Blogs />} />
                <Route path="/about/case-studies" element={<CaseStudies />} />
                <Route path="/about/resources" element={<TutorialsEbooks />} />
                <Route path="/about/whitepapers" element={<Whitepapers />} />
                <Route path="/about/support" element={<Support />} />

              </Routes>
            </AnimatePresence>
            <Footer />
          </div>
        </SmoothScroll>
      )}
    </>
  )
}

export default App
