import { Code2, GitBranch, ShieldCheck } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import CTASection from "@/components/service/CTA";

const SoftwareEngineering = () => {
  const clients = [
    { name: "TechCorp", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Innovate AI", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "CloudSync", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "DataFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "LogicGate", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "NetSys", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Samsung_wordmark.svg" },
  ];

  const softwareImages = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=2000"
        caption="Enterprise-Grade Software Solutions"
        title="Software Engineering"
        subtitle="We design, build, and scale robust software applications that empower industrial automation, data analytics, and operational efficiency."
        watermarkNumber="01"
      />
      <ServiceDetail
        images={softwareImages}
        caption="Digital Transformation"
        leftTitle="Core Capabilities"
        leftParagraphs={[
          "Our software engineering division operates at the intersection of bits and atoms. We develop mission-critical embedded firmware, industrial IoT platforms, and scalable enterprise applications that drive physical machinery and interpret high-frequency sensor data with absolute reliability.",
          "By employing Agile methodologies complemented by rigorous compliance and security testing, we ensure that every deployment—from real-time OS components to cloud-native architectures—is resilient against both system failures and cyber threats.",
        ]}
        features={[
          "Real-Time OS (RTOS) Expertise",
          "Cloud-Native Architecture",
          "Secure by Design Principles",
        ]}
        ctaLabel="Discuss Your Software Needs"
        onCtaClick={() => {
          console.log("Software CTA clicked");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Discovery & Architecture",
            description:
              "We commence with a deep technological audit to understand your operational environment, defining a scalable software architecture that aligns with your industrial objectives.",
          },
          {
            number: "02",
            title: "Agile Development Cycles",
            description:
              "Our engineering teams work in iterative sprints, delivering functional software components that allow for continuous feedback and proactive path correction.",
          },
          {
            number: "03",
            title: "Integration & Simulation",
            description:
              "Before deployment, software is subjected to exhaustive simulation environments, testing edge cases and integration points with existing hardware and legacy systems.",
          },
          {
            number: "04",
            title: "Deployment & Lifecycle Support",
            description:
              "We provide seamless deployment orchestration followed by continuous monitoring, patch management, and lifecycle support to ensure long-term stability.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our execution framework"
        eyebrowHighlight="execution"
        title="Predictable Quality in Every Release"
        paragraphs={[
          "Software in the industrial sector must perform flawlessly under the most demanding conditions. We adhere strictly to industry standards ensuring that our solutions are highly performant, observable, and deeply integrated.",
        ]}
        imageSize="xs"
        iconSize={80}
        items={[
          {
            icon: <Code2 size={20} strokeWidth={1.2} />,
            label: "Clean Code",
            description: "Maintainable, peer-reviewed codebases",
            progress: 95,
          },
          {
            icon: <GitBranch size={20} strokeWidth={1.2} />,
            label: "CI/CD Pipeline",
            description: "Automated testing and delivery",
            progress: 88,
          },
          {
            icon: <ShieldCheck size={20} strokeWidth={1.2} />,
            label: "Cybersecurity",
            description: "Zero-trust models and testing",
            progress: 98,
          },
        ]}
      />

      <CTASection
        eyebrow="Accelerate your digital journey"
        eyebrowHighlight="Accelerate"
        heading="Ready to modernize your infrastructure with custom, high-performance software engineering?"
        primaryLabel="Schedule a Consultation"
        secondaryLabel="View Case Studies"
        onPrimaryClick={() => {
          console.log("Consultation clicked");
        }}
        onSecondaryClick={() => {
          console.log("Case Studies clicked");
        }}
      />
    </PageLayout>
  );
};

export default SoftwareEngineering;
