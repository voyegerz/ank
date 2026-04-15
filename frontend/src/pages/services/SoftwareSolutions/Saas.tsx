import { Cloud, Layers, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const Saas = () => {
  const navigate = useNavigate();

  const saasImages = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000"
        caption="Scalable Digital Platforms"
        title="SaaS Development"
        subtitle="End-to-end development of Software as a Service (SaaS) platforms. We build multi-tenant, cloud-native solutions that are secure, scalable, and designed to provide continuous value to your subscribers."
        watermarkNumber="13"
      />
      <ServiceDetail
        images={saasImages}
        caption="Innovation in the Cloud"
        leftTitle="Multi-Tenant Architectures"
        leftParagraphs={[
          "We specialize in building robust SaaS architectures that support thousands of concurrent users while maintaining strict data isolation and security. Our solutions are designed to scale horizontally as your user base grows.",
          "From subscription management and billing integration to advanced user permission systems, we handle the complex core logic that powers successful SaaS businesses.",
        ]}
        rightTitle="Continuous Value Delivery"
        rightParagraphs={[
          "Our SaaS development philosophy focuses on agility and reliability. We implement modern DevOps practices to ensure that your platform can be updated seamlessly without interrupting service for your users.",
          "We integrate powerful analytics and reporting tools directly into your SaaS platform, providing you and your users with deep insights into usage patterns and performance metrics.",
        ]}
        features={[
          "Multi-tenant Cloud Architecture",
          "Subscription & Billing Logic",
          "Automated Deployment (CI/CD)",
          "Secure API Development",
        ]}
        ctaLabel="Build your SaaS"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Market & Tech Strategy",
            description:
              "Defining the target audience, core features, and choosing the most scalable tech stack for your platform.",
          },
          {
            number: "02",
            title: "MVP Development",
            description:
              "Building the core functional version of your SaaS to validate the business model and gather early user feedback.",
          },
          {
            number: "03",
            title: "Scale & Feature Expansion",
            description:
              "Iteratively adding advanced features, optimizing database performance, and enhancing the multi-tenant architecture.",
          },
          {
            number: "04",
            title: "Growth & Optimization",
            description:
              "Monitoring system health, performing security audits, and continuously improving the platform based on real-world usage.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our platform ethos"
        eyebrowHighlight="ethos"
        title="Scale Without Limits"
        paragraphs={[
          "A successful SaaS platform is never 'finished'—it's an evolving organism. We build platforms with a long-term vision, ensuring the foundation is strong enough to support years of growth and innovation.",
          "Security and uptime are our non-negotiables. We treat your users' data with the highest level of respect, implementing multi-layered security protocols and redundant cloud architectures.",
        ]}
        items={[
          {
            icon: <Cloud size={32} strokeWidth={1.2} />,
            label: "Cloud Native",
            description: "Built for AWS, Azure, or GCP",
            progress: 100,
          },
          {
            icon: <Layers size={32} strokeWidth={1.2} />,
            label: "Scalable Logic",
            description: "Supports rapid user growth",
            progress: 98,
          },
          {
            icon: <Zap size={32} strokeWidth={1.2} />,
            label: "High Availability",
            description: "99.9% uptime architectures",
            progress: 99,
          },
        ]}
      />

      <Testimonials
        eyebrow="Platform Success"
        eyebrowHighlight="Success"
        heading="Client Feedback"
        watermarkText="SaaS"
        bgImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
        testimonials={[
          {
            title: "Scale Achieved",
            rating: 5,
            review:
              "ANK developed our property management SaaS from scratch. Their expertise in multi-tenant databases was crucial. We've scaled to 500+ corporate clients with zero downtime.",
            name: "Rahul M.",
            company: "Founder, PropTech Solutions",
            avatar:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Launch your vision"
        eyebrowHighlight="vision"
        heading="Ready to build a world-class SaaS platform that dominates your market?"
        primaryLabel="Start SaaS Project"
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

export default Saas;
