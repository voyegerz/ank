import { Cpu, Signal, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const IotApplication = () => {
  const navigate = useNavigate();

  const iotImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
        caption="Bridging Physical & Digital"
        title="Web / IoT Applications"
        subtitle="End-to-end IoT solutions that connect your physical assets to the digital world. We build hardware-integrated software platforms for real-time monitoring, remote control, and predictive maintenance of industrial equipment."
        watermarkNumber="15"
      />
      <ServiceDetail
        images={iotImages}
        caption="Intelligence at the Edge"
        leftTitle="Connected Industrial Assets"
        leftParagraphs={[
          "We specialize in bridging the gap between physical sensors and digital intelligence. Our IoT platforms collect real-time data from your equipment, providing you with actionable insights through intuitive web and mobile dashboards.",
          "From edge computing and firmware development to secure cloud data storage and advanced analytics, we provide a complete ecosystem for your connected industrial products.",
        ]}
        rightTitle="Remote Monitoring & Control"
        rightParagraphs={[
          "Our IoT solutions empower you to monitor and control your assets from anywhere in the world. We implement robust security protocols to ensure that your industrial data and control commands remain private and safe.",
          "We focus on creating highly responsive systems that provide real-time status updates and predictive alerts, helping you reduce downtime and optimize the performance of your distributed assets.",
        ]}
        features={[
          "Edge Device & Firmware Dev",
          "Secure Cloud Data Pipelines",
          "Real-time Dashboards & Alerts",
          "Predictive Analytics Engine",
        ]}
        ctaLabel="Connect your Assets"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Hardware & Sensor Audit",
            description:
              "Identifying the best sensors and communication protocols (WiFi, LoRaWAN, Cellular) for your physical environment.",
          },
          {
            number: "02",
            title: "Edge & Cloud Pipeline",
            description:
              "Developing edge firmware to process raw sensor data and building secure cloud ingestion pipelines for long-term storage.",
          },
          {
            number: "03",
            title: "Dashboard & UI Dev",
            description:
              "Creating high-performance web and mobile interfaces that visualize complex sensor data into clear, actionable metrics.",
          },
          {
            number: "04",
            title: "Deployment & Scaling",
            description:
              "Deploying the hardware on-site, activating the cloud platform, and ensuring the system scales as you add more devices.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our IoT ethos"
        eyebrowHighlight="ethos"
        title="Data with a Pulse"
        paragraphs={[
          "IoT is not just about connecting devices; it's about making sense of physical reality in real-time. We believe that every data point from a machine tells a story about its health, efficiency, and future.",
          "We apply rigorous industrial engineering standards to our software development, ensuring that our IoT platforms are as robust and reliable as the physical machinery they connect to.",
        ]}
        items={[
          {
            icon: <Signal size={32} strokeWidth={1.2} />,
            label: "Seamless Connectivity",
            description: "Reliable data flow from edge",
            progress: 98,
          },
          {
            icon: <BarChart3 size={32} strokeWidth={1.2} />,
            label: "Actionable Insights",
            description: "Data-driven decision making",
            progress: 95,
          },
          {
            icon: <Cpu size={32} strokeWidth={1.2} />,
            label: "Hardware Mastery",
            description: "Deep integration with devices",
            progress: 100,
          },
        ]}
      />

      <Testimonials
        eyebrow="Connected Success"
        eyebrowHighlight="Success"
        heading="Client Feedback"
        watermarkText="IoT"
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
        testimonials={[
          {
            title: "Real-time Visibility",
            rating: 5,
            review:
              "ANK's IoT platform gave us instant visibility into our distributed solar pump network. We can now detect failures remotely, saving us thousands in site visits.",
            name: "Sunil G.",
            company: "Founder, GreenEnergy Systems",
            avatar:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Digitize your physical world"
        eyebrowHighlight="world"
        heading="Ready to build a secure and scalable IoT solution for your industrial assets?"
        primaryLabel="Talk to IoT Experts"
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

export default IotApplication;
