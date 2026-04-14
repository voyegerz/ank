import { Globe, ShieldCheck, Zap } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const WebsiteDesign = () => {
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
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
        caption="Modern Enterprise Ecosystems"
        title="Web Applications"
        subtitle="We build high-performance, scalable web platforms designed to streamline operations, engage users, and drive digital growth."
        watermarkNumber="05"
      />
      <ServiceDetail
        image="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2000"
        caption="Digital Infrastructure"
        leftTitle="Product Capabilities"
        leftParagraphs={[
          "Custom Web Portals: Architecting bespoke client-facing and internal portals that centralize data management and improve accessibility with high uptime.",
          "Scalable SaaS Solutions: Designing robust software-as-a-service architectures using modern multi-tenant models that grow alongside your business ecosystem.",
          "E-commerce Platforms: Engineering high-conversion digital storefronts with secure payment integrations and streamlined inventory synchronization.",
          "API Design & Integration: Developing secure, high-performance RESTful and GraphQL APIs that serve as the backbone for your interconnected digital services.",
        ]}
        rightTitle="Why Our Web Solutions?"
        rightParagraphs={[
          "The modern web requires more than just functionality; it demands blazing speed, absolute security, and a seamless user experience. Our development methodology prioritizes performance-first architecture to ensure your platforms are ready for peak traffic.",
          "By leveraging the power of cloud-native technologies and modern frontend frameworks like React and Next.js, we deliver web applications that are as resilient as they are aesthetically pleasing.",
        ]}
        features={[
          "Performance Optimized React Archi.",
          "Cloud-Native Serverless Deploy.",
          "Zero-Trust Security Framework",
        ]}
        ctaLabel="Consult on Web Project"
        onCtaClick={() => {
          console.log("Web CTA clicked");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Strategic Blueprinting",
            description:
              "We define the technical roadmap, choosing the optimal tech stack and cloud architecture to ensure long-term scalability and business alignment.",
          },
          {
            number: "02",
            title: "User-Centric Design",
            description:
              "Our design team creates intuitive, accessible, and high-fidelity interfaces that prioritize user flow and functional clarity across all devices.",
          },
          {
            number: "03",
            title: "Full-Stack Engineering",
            description:
              "We develop with a focus on code quality, security, and performance, delivering modular components through a robust CI/CD pipeline.",
          },
          {
            number: "04",
            title: "Continuous Optimization",
            description:
              "Post-launch, we provide ongoing monitoring and performance tuning to ensure your application remains cutting-edge and secure.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our digital philosophy"
        eyebrowHighlight="digital"
        title="Engineering for the Modern Web"
        paragraphs={[
          "Web applications are the central hub of modern business. We approach every project with a commitment to technical excellence, ensuring that your digital assets are built on a foundation of reliability and innovation.",
          "Our philosophy centers on 'Performance over Placeholders'—we don't just build websites; we engineer high-utility applications that deliver measurable value to your operations and users.",
        ]}
        items={[
          {
            icon: <Zap size={32} strokeWidth={1.2} />,
            label: "Blazing Performance",
            description: "Sub-second load times and smooth interactions",
            progress: 96,
          },
          {
            icon: <ShieldCheck size={32} strokeWidth={1.2} />,
            label: "Absolute Security",
            description: "Encrypted data and robust auth protocols",
            progress: 99,
          },
          {
            icon: <Globe size={32} strokeWidth={1.2} />,
            label: "Global Scalability",
            description: "Multi-region cloud-native deployments",
            progress: 92,
          },
        ]}
      />

      <Testimonials
        eyebrow="Partner Insights"
        eyebrowHighlight="Insights"
        heading="Scaling the Web with High Precision"
        watermarkText="Results"
        bgImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000"
        testimonials={[
          {
            title: "Next-Level Performance",
            rating: 5,
            review:
              "The custom dashboard ANK developed for us has transformed our data visibility. It's incredibly fast even with millions of data points being streamed in real-time.",
            name: "John Richardson",
            company: "CTO, DataMatrix Systems",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          },
          {
            title: "Seamless Integration",
            rating: 5,
            review:
              "Transitioning our legacy systems to a modern web portal was a daunting task, but ANK's engineering team handled the complexity flawlessly. Highly recommended technical partners.",
            name: "Sarah Miller",
            company: "Ops Director, Global Logistics",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Build for change"
        eyebrowHighlight="change"
        heading="Ready to build a web application that outpaces the competition and grows with your vision?"
        primaryLabel="Start Development"
        secondaryLabel="Explore Portfolio"
        onPrimaryClick={() => {
          console.log("Web Start clicked");
        }}
        onSecondaryClick={() => {
          console.log("Portfolio clicked");
        }}
      />
    </PageLayout>
  );
};

export default WebsiteDesign;
