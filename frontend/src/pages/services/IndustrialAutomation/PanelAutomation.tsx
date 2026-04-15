import { Layout, Settings, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const PanelAutomation = () => {
  const navigate = useNavigate();

  const panelImages = [
    "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=2000"
        caption="Electrical Design & Fabrication"
        title="Panel Automation"
        subtitle="Custom design and fabrication of industrial control panels. We build high-quality PLC panels, VFD panels, and power distribution boards that are safety-compliant, well-organized, and built for harsh industrial environments."
        watermarkNumber="09"
      />
      <ServiceDetail
        images={panelImages}
        caption="Reliable Power & Control"
        leftTitle="Precision Panel Engineering"
        leftParagraphs={[
          "We provide end-to-end solutions for industrial control panels, from initial electrical drafting and component selection to final assembly and testing. Our panels are designed for maximum reliability and ease of maintenance.",
          "Every panel we build follows strict industrial standards for wiring, labeling, and safety. We use high-quality switchgear and components to ensure long-term performance in demanding conditions.",
        ]}
        rightTitle="Optimized for Industry"
        rightParagraphs={[
          "Our electrical design team focuses on optimal space utilization, effective thermal management, and clear documentation. This ensures that your control systems remain cool and accessible during operation.",
          "We specialize in integrating complex automation components, including PLCs, HMIs, VFDs, and safety relays, into a cohesive and robust electrical architecture.",
        ]}
        features={[
          "Custom Control Panel Design",
          "PLC & VFD Panel Fabrication",
          "Detailed Electrical Drafting",
          "Comprehensive Load Testing",
        ]}
        ctaLabel="Get a Panel Quote"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Electrical Design",
            description:
              "Creating detailed circuit diagrams and panel layouts using industry-standard electrical CAD software.",
          },
          {
            number: "02",
            title: "Component Selection",
            description:
              "Selecting the most reliable and efficient switchgear, controllers, and actuators for your specific load requirements.",
          },
          {
            number: "03",
            title: "Fabrication & Wiring",
            description:
              "Assembling the panel with precision wiring, clear ferrule labeling, and robust mounting of all components.",
          },
          {
            number: "04",
            title: "Quality Assurance",
            description:
              "Conducting rigorous continuity tests, insulation resistance checks, and functional logic testing before delivery.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our electrical ethos"
        eyebrowHighlight="ethos"
        title="Built to Last"
        paragraphs={[
          "The control panel is the heart of any automation system. We believe that a well-designed panel should be as clean and logical as the code that runs inside it.",
          "We take pride in our 'zero-clutter' wiring approach, which not only looks professional but also significantly reduces troubleshooting time for your plant operators.",
        ]}
        items={[
          {
            icon: <Layout size={32} strokeWidth={1.2} />,
            label: "Organized Layouts",
            description: "Easy access for maintenance",
            progress: 98,
          },
          {
            icon: <Settings size={32} strokeWidth={1.2} />,
            label: "Premium Components",
            description: "Built with world-class brands",
            progress: 100,
          },
          {
            icon: <ShieldCheck size={32} strokeWidth={1.2} />,
            label: "Safety First",
            description: "Fully compliant with IP standards",
            progress: 99,
          },
        ]}
      />

      <Testimonials
        eyebrow="Electrical Excellence"
        eyebrowHighlight="Excellence"
        heading="Client Feedback"
        watermarkText="Fabrication"
        bgImage="https://images.unsplash.com/photo-1565608438257-fac3c27beb36?q=80&w=2000&auto=format&fit=crop"
        testimonials={[
          {
            title: "Industrial Grade",
            rating: 5,
            review:
              "The automation panels ANK delivered for our new assembly line are some of the cleanest we've seen. The documentation was thorough, and the internal wiring is perfect.",
            name: "Manoj Tiwari",
            company: "Director, Apex Automations",
            avatar:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Power your automation"
        eyebrowHighlight="automation"
        heading="Ready to build a high-performance control panel for your industrial needs?"
        primaryLabel="Request a Quote"
        secondaryLabel="Contact Us"
        onPrimaryClick={() => {
          navigate("/contact");
        }}
        onSecondaryClick={() => {
          navigate("/contact");
        }}
      />
    </PageLayout>
  );
};

export default PanelAutomation;
