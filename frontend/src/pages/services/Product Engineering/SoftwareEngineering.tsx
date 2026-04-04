import { Code2, GitBranch, ShieldCheck } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const SoftwareEngineering = () => {
  const clients = [
    { name: "Client 1", logo: "/clients/client1.png" },
    { name: "Client 2", logo: "/clients/client2.png" },
    { name: "Client 3", logo: "/clients/client3.png" },
    { name: "Client 4", logo: "/clients/client4.png" },
    { name: "Client 5", logo: "/clients/client5.png" },
    { name: "Client 6", logo: "/clients/client6.png" },
  ];
  return (
    <PageLayout>
      <CommonHero
        caption="Custom manufacturing solutions"
        title="Product fabrication"
        subtitle="From prototyping through delivery, each customer is assigned a dedicated support team..."
        watermarkNumber="01" // optional decorative number
      />
      <ServiceDetail
        image=""
        caption="Custom manufacturing solutions"
        leftTitle="Core Capabilities"
        leftParagraphs={[
          "Tailored software designed to meet the unique challenges of your business operations.",
          "Developing sophisticated algorithms for PLC, SCADA, and automated control systems.",
          "Building reliable server-side architectures that handle massive data loads with ease.",
          "Connecting disparate software and hardware components into a unified ecosystem.",
        ]}
        rightTitle="Why Partner With Us?"
        rightParagraphs={[
          "Our software engineering team combines deep domain knowledge with modern development practices to deliver solutions that are not just functional, but future-proof.",
        ]}
        features={[
          "Agile Development Methodology",
          "Rigorous Testing & QA",
          "Security-First Architecture",
        ]}
        ctaLabel="Discuss Your Project"
        onCtaClick={() => {
          // Handle CTA click
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Requirement Analysis",
            description:
              "We begin by thoroughly understanding your business needs and technical requirements to ensure the solution aligns perfectly with your goals.",
          },
          {
            number: "02",
            title: "Design & Architecture",
            description:
              "Our team creates a robust architecture that ensures scalability, security, and performance from day one.",
          },
          {
            number: "03",
            title: "Development & Integration",
            description:
              "We build your solution using the latest technologies and integrate it seamlessly with your existing systems.",
          },
          {
            number: "04",
            title: "Testing & Deployment",
            description:
              "Rigorous testing ensures quality and reliability, followed by a smooth deployment to your production environment.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        eyebrow="Our philosophy"
        eyebrowHighlight="Our"
        title="Quality system certifications"
        paragraphs={[
          "We have decades of experience meeting the stringent regulations and certifications for the automotive, aerospace and medical device industries, which serve as benchmarks for all of the products we manufacture.",
          "We have decades of experience meeting the stringent regulations and certifications for the automotive, aerospace and medical device industries, which serve as benchmarks for all of the products we manufacture.",
        ]}
        items={[
          {
            icon: <Code2 size={32} strokeWidth={1.2} />,
            label: "Construction",
            description: "Fulfilling client requests on the go",
            progress: 85,
          },
          {
            icon: <GitBranch size={32} strokeWidth={1.2} />,
            label: "Production",
            description: "Manufacturing the product",
            progress: 70,
          },
          {
            icon: <ShieldCheck size={32} strokeWidth={1.2} />,
            label: "Deadline",
            description: "Finishing upon requested time",
            progress: 92,
          },
        ]}
      />

      <Testimonials
        eyebrow="People about Company"
        eyebrowHighlight="about"
        heading="What are our clients saying"
        watermarkText="Clients"
        bgImage=""
        testimonials={[
          {
            title: "Quality system certifications",
            rating: 5,
            review:
              "We have decades of experience meeting the stringent regulations and certifications for the automotive, aerospace and medical device industries, which serve as benchmarks for all of the products we manufacture.",
            name: "John Doe",
            company: "Company",
            avatar: "",
          },
          {
            title: "Quality system certifications",
            rating: 5,
            review:
              "We have decades of experience meeting the stringent regulations and certifications for the automotive, aerospace and medical device industries, which serve as benchmarks for all of the products we manufacture.",
            name: "John Doe",
            company: "Company",
            avatar: "",
          },
        ]}
      />
      <CTASection
        eyebrow="Ready to talk?"
        eyebrowHighlight="to"
        heading="With diverse capabilities and extensive manufacturing experience, you can rely on Amwerk as a critical part of your supply chain."
        primaryLabel="Book a meeting"
        secondaryLabel="Get a quote"
        onPrimaryClick={() => {
          // TODO: Implement contact form or redirect to contact page
          console.log("Book a meeting clicked");
        }}
        onSecondaryClick={() => {
          // TODO: Implement quote form or redirect to quote page
          console.log("Get a quote clicked");
        }}
      />
    </PageLayout>
  );
};

export default SoftwareEngineering;
