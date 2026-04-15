import { Monitor, BarChart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const ScadaHmi = () => {
  const navigate = useNavigate();

  const scadaImages = [
    "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=2000",
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
        leftTitle="Intuitive Visual Interfaces"
        leftParagraphs={[
          "We develop Human-Machine Interfaces (HMI) that prioritize clarity and ease of use for operators. Our designs follow high-performance HMI standards to reduce cognitive load and improve reaction times during critical events.",
          "Our SCADA solutions provide a birds-eye view of your entire process, integrating data from multiple PLCs and devices into a single, unified monitoring platform.",
        ]}
        rightTitle="Data-Driven Insights"
        rightParagraphs={[
          "Beyond simple control, our systems offer robust data logging and historical trending capabilities. This allows you to analyze production patterns, identify bottlenecks, and make informed decisions for process optimization.",
          "We implement advanced alarming and reporting features, ensuring that your team is immediately notified of any deviations and has the data needed for thorough post-event analysis.",
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
          "Our interfaces are built for the modern industrial age, supporting high-resolution displays, remote web access, and secure data integration with higher-level ERP and MES systems.",
        ]}
        items={[
          {
            icon: <Monitor size={32} strokeWidth={1.2} />,
            label: "Superior UX",
            description: "Designed for fast operator response",
            progress: 97,
          },
          {
            icon: <BarChart size={32} strokeWidth={1.2} />,
            label: "Deep Insights",
            description: "Comprehensive data logging",
            progress: 95,
          },
          {
            icon: <Eye size={32} strokeWidth={1.2} />,
            label: "Total Visibility",
            description: "Real-time process monitoring",
            progress: 100,
          },
        ]}
      />

      <Testimonials
        eyebrow="Visionary Control"
        eyebrowHighlight="Control"
        heading="Client Feedback"
        watermarkText="Monitoring"
        bgImage="https://images.unsplash.com/photo-1551288049-bbbda536ad0a?q=80&w=2000&auto=format&fit=crop"
        testimonials={[
          {
            title: "Data Empowerment",
            rating: 5,
            review:
              "ANK's SCADA implementation transformed how we manage our plant. We now have real-time visibility into every machine's status, and the historical data has been invaluable for our OEE improvements.",
            name: "Rajesh Khanna",
            company: "Plant Director, Surya Chemicals",
            avatar:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
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
