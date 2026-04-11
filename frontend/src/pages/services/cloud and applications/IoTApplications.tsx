import { Cpu, Database, Zap } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const IoTApplications = () => {
  const clients = [
    { name: "TechCorp", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Innovate AI", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "CloudSync", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "DataFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "LogicGate", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "NetSys", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Samsung_wordmark.svg" },
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=2000"
        caption="Connecting Physical & Digital Worlds"
        title="IoT Applications"
        subtitle="End-to-end industrial IoT solutions bridging remote sensor data with intuitive cloud platforms for real-time monitoring and predictive control."
        watermarkNumber="07"
      />
      <ServiceDetail
        image="https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=2000"
        caption="Interconnected Intelligence"
        leftTitle="Core IoT Capabilities"
        leftParagraphs={[
          "Remote Telemetry & Monitoring: Scaling data acquisition networks that collect and visualize low-latency parameters from your industrial assets globally.",
          "Cloud-Edge Orchestration: Architecting edge computing nodes that process critical local data in real-time while syncing meta-analysis with powerful cloud backends.",
          "Industrial Protocol Bridge: Integrating legacy machinery using modern conversion modules like MQTT, OPC UA, and Modbus for unified digital oversight.",
          "Predictive Analytics Dashboards: Harnessing incoming sensor data through machine learning models to predict system failure and optimize maintenance cycles.",
        ]}
        rightTitle="Why Trust ANK with IoT?"
        rightParagraphs={[
          "Industrial IoT is more than just data; it is about reliable, mission-critical communication. Our engineering team ensures your hardware and software speak a unified language, secure against intrusion and resilient to downtime.",
          "By implementing a zero-trust architecture for every connected device, we provide a secure foundation for your digital transformation, giving you full visibility and remote control over your entire operation.",
        ]}
        features={[
          "End-to-End Data Encryption",
          "Low-Latency Edge Processing",
          "Multi-Protocol Device Support",
        ]}
        ctaLabel="Connect Your Assets"
        onCtaClick={() => {
          console.log("IoT CTA clicked");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Connectivity Audit",
            description:
              "We perform a thorough evaluation of your current physical assets and network infrastructure to define the most efficient connectivity strategy.",
          },
          {
            number: "02",
            title: "Device Management",
            description:
              "We develop the firmware and cloud-based device management systems required to register, monitor, and update your IoT fleet securely.",
          },
          {
            number: "03",
            title: "Data Pipeline",
            description:
              "Our engineers architect resilient data pipelines that ingest billion-point data streams, ensuring data integrity and real-time visualization.",
          },
          {
            number: "04",
            title: "Insights & Action",
            description:
              "The final stage turns raw data into actionable intelligence through custom dashboards and automated alerting systems.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our IoT philosophy"
        eyebrowHighlight="IoT"
        title="Predictable Connectivity"
        paragraphs={[
          "The most powerful IoT solutions are invisible—they perform perfectly in the background, providing data without noise. Our philosophy is to build IoT systems that are self-healing, secure, and incredibly easy to scale.",
          "Whether you are monitoring a single factory floor or an entire fleet of remote sensors, our commitment is to provide absolute data clarity through uncompromising engineering standards.",
        ]}
        items={[
          {
            icon: <Cpu size={32} strokeWidth={1.2} />,
            label: "Edge Intelligence",
            description: "On-site data processing for speed",
            progress: 96,
          },
          {
            icon: <Database size={32} strokeWidth={1.2} />,
            label: "Data Integrity",
            description: "Validated sensor inputs and storage",
            progress: 99,
          },
          {
            icon: <Zap size={32} strokeWidth={1.2} />,
            label: "Real-Time Sync",
            description: "Minimal latency in cloud updates",
            progress: 92,
          },
        ]}
      />

      <Testimonials
        eyebrow="Collaborative Success"
        eyebrowHighlight="Success"
        heading="Bridging the Gap Between Hardware & Software"
        watermarkText="Impact"
        bgImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000"
        testimonials={[
          {
            title: "Flawless Device Sync",
            rating: 5,
            review:
              "ANK Design delivered an IoT dashboard that syncs with over 5,000 industrial sensors across 12 countries. The latency is incredible and the security is top-notch.",
            name: "David Sterling",
            company: "Head of Digital, Sterling Energy",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          },
          {
            title: "Insightful Data Visuals",
            rating: 5,
            review:
              "Their grasp of both firmware and high-end cloud dashboards is exactly what we needed. They built a predictive maintenance tool that has reduced our engine failures by 30%.",
            name: "Michael Varrone",
            company: "CTO, TransAtlantic Logistics",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Unlock your assets"
        eyebrowHighlight="Unlock"
        heading="Looking for an engineering team that specializes in complex, high-performance IoT ecosystem development?"
        primaryLabel="Schedule IoT Consultation"
        secondaryLabel="View Case Studies"
        onPrimaryClick={() => {
          console.log("IoT Consultation clicked");
        }}
        onSecondaryClick={() => {
          console.log("Case Studies clicked");
        }}
      />
    </PageLayout>
  );
};

export default IoTApplications;
