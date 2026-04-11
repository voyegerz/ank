import { Code, Database, Settings } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const DesktopApplications = () => {
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
        bgImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000"
        caption="High-Performance Software for Local Environments"
        title="Desktop Applications"
        subtitle="We build high-end, cross-platform desktop applications for Windows, macOS, and Linux that require local system access and low-latency offline processing."
        watermarkNumber="08"
      />
      <ServiceDetail
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000"
        caption="Precision Desktop Ecosystems"
        leftTitle="Core Capabilities"
        leftParagraphs={[
          "Electron & C++ Frameworks: Building powerful, performant desktop apps that combine the flexibility of modern web tech with the power of native system access.",
          "Low-Level Hardware Access: Developing specialized software that interacts directly with custom PCIe cards, COM ports, and other specialized industrial peripherals.",
          "Offline Data Processing: Engineering high-frequency data analysis tools that process and store data locally for maximum security and zero reliance on cloud availability.",
          "Cross-Platform Distribution: Ensuring your application functions flawlessly on Windows, macOS, and Linux with a single deployment strategy and automated updates.",
        ]}
        rightTitle="Why Your Software Needs the Desktop?"
        rightParagraphs={[
          "Certain mission-critical tasks cannot be left to the latency or dependencies of a browser. Our desktop engineering focuses on providing a stable, high-performance environment for your most demanding industrial and commercial applications.",
          "By prioritizing local system efficiency and secure data management, we deliver desktop software that is as powerful as it is intuitive, giving your team the tools they need to operate without interruption.",
        ]}
        features={[
          "Native System API Integration",
          "Multi-Core CPU Optimization",
          "Encrypted Local Databases",
        ]}
        ctaLabel="Design Your Desktop Tool"
        onCtaClick={() => {
          console.log("Desktop CTA clicked");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "System Analysis",
            description:
              "We begin by identifying the specific OS requirements and hardware interfaces required to meet your operational objectives with the lowest possible latency.",
          },
          {
            number: "02",
            title: "Core Development",
            description:
              "Our engineering team develops the application logic using highly efficient languages and frameworks to ensure stability and high-end performance.",
          },
          {
            number: "03",
            title: "Hardware Integration",
            description:
              "We conduct thorough testing of all local system integrations, ensuring seamless communication between the software and your physical hardware assets.",
          },
          {
            number: "04",
            title: "Packaging & Deployment",
            description:
              "Finally, we package the application for your target operating systems, with automated installers and secure update channels for long-term support.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our desktop philosophy"
        eyebrowHighlight="desktop"
        title="Stability Without Boundaries"
        paragraphs={[
          "Desktop applications represent the pinnacle of software control and performance. Our philosophy centers on respect for system resources—building software that is fast, responsive, and secure by default.",
          "We believe that industrial and specialized software should never be a bottleneck. That's why we focus on deep optimization and intuitive design, ensuring your desktop applications are as professional as the work they facilitate.",
        ]}
        items={[
          {
            icon: <Code size={32} strokeWidth={1.2} />,
            label: "Clean Architecture",
            description: "Maintainable and highly optimized code",
            progress: 96,
          },
          {
            icon: <Database size={32} strokeWidth={1.2} />,
            label: "Local Performance",
            description: "Zero-latency data processing",
            progress: 99,
          },
          {
            icon: <Settings size={32} strokeWidth={1.2} />,
            label: "Deep Integration",
            description: "Direct control of system APIs",
            progress: 94,
          },
        ]}
      />

      <Testimonials
        eyebrow="Feedback Highlights"
        eyebrowHighlight="Highlights"
        heading="Uncompromising Tools for High-Impact Tasks"
        watermarkText="Results"
        bgImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000"
        testimonials={[
          {
            title: "Blazing Fast Logic",
            rating: 5,
            review:
              "The custom CAD viewer developed for our engineering team is phenomenal. It handles massive 3D models natively on Windows with zero lag, exactly what we needed.",
            name: "Alexander Rossi",
            company: "Engineering Lead, Precision Dynamics",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          },
          {
            title: "Seamless Hardware Control",
            rating: 5,
            review:
              "Their grasp of C++ and system-level APIs is incredible. They built a custom testing suite for our production line that manages several PCIe data acquisition cards simultaneously.",
            name: "Isabella Chen",
            company: "CTO, NextGen Electronics",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Modernize your tools"
        eyebrowHighlight="tools"
        heading="Ready to build a desktop applications that provide the power and stability your business demands?"
        primaryLabel="Discuss Desktop Project"
        secondaryLabel="View Case Studies"
        onPrimaryClick={() => {
          console.log("Desktop Start clicked");
        }}
        onSecondaryClick={() => {
          console.log("Case Studies clicked");
        }}
      />
    </PageLayout>
  );
};

export default DesktopApplications;
