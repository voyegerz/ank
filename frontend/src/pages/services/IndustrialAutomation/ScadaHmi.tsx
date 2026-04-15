import { Monitor, BarChart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import CTASection from "@/components/service/CTA";

const ScadaHmi = () => {
  const navigate = useNavigate();

  const scadaImages = [
    "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=2000"
        caption="Supervisory Control & Data Acquisition"
        title="DCS / SCADA / HMI"
        subtitle="Advanced industrial visualization and control systems. We design intuitive HMI screens and comprehensive SCADA/DCS architectures that provide real-time data, historical logging, and remote control of your entire production facility."
        watermarkNumber="10"
      />
      <ServiceDetail
        images={scadaImages}
        caption="Visibility & Control"
        leftTitle="Industrial Visualization"
        leftParagraphs={[
          "We develop Human-Machine Interfaces (HMI) that prioritize clarity and ease of use for operators. Our SCADA solutions provide a birds-eye view of your entire process, integrating data from multiple PLCs and devices into a single, unified monitoring platform.",
          "Beyond simple control, our systems offer robust data logging and historical trending capabilities. We implement advanced alarming and reporting features, ensuring your team has the data needed for thorough post-event analysis.",
        ]}
        features={[
          "High-Performance HMI Design",
          "Comprehensive SCADA Architectures",
          "Real-time Data Trending & Logging",
          "Alarm Management & Reporting",
        ]}
        ctaLabel="Explore Visualization"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Information Architecture",
            description:
              "Defining the data hierarchy, tag mapping, and navigation structure for a seamless operator experience.",
          },
          {
            number: "02",
            title: "Interface Development",
            description:
              "Designing high-fidelity graphics, control objects, and dynamic trend screens tailored to your specific process.",
          },
          {
            number: "03",
            title: "Network Integration",
            description:
              "Configuring industrial communication drivers (OPC, Modbus, Profinet) to ensure reliable data flow from field devices.",
          },
          {
            number: "04",
            title: "Validation & Tuning",
            description:
              "Fine-tuning update rates, verifying alarm setpoints, and ensuring total system responsiveness in a live environment.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our visualization ethos"
        eyebrowHighlight="ethos"
        title="Clarifying Complexity"
        paragraphs={[
          "A great SCADA system shouldn't just show data; it should provide context. We focus on transforming raw industrial numbers into actionable visual information that empowers your team to operate at peak efficiency.",
        ]}
        imageSize="xs"
        iconSize={80}
        items={[
          {
            icon: <Monitor size={20} strokeWidth={1.2} />,
            label: "Superior UX",
            description: "Designed for fast operator response",
            progress: 97,
          },
          {
            icon: <BarChart size={20} strokeWidth={1.2} />,
            label: "Deep Insights",
            description: "Comprehensive data logging",
            progress: 95,
          },
          {
            icon: <Eye size={20} strokeWidth={1.2} />,
            label: "Total Visibility",
            description: "Real-time process monitoring",
            progress: 100,
          },
        ]}
      />

      <CTASection
        eyebrow="Visualize your success"
        eyebrowHighlight="success"
        heading="Ready to upgrade your industrial monitoring and control interfaces?"
        primaryLabel="Consult our SCADA Experts"
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

export default ScadaHmi;
