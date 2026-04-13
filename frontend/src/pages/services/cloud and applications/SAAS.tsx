import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import DetailedProcessSection from "../../../components/service/DetailedProcessSection";
import type { ProcessStep } from "../../../components/service/DetailedProcessSection";
import CTASection from "@/components/service/CTA";

const SAAS = () => {
  const steps: ProcessStep[] = [
    {
      number: "1",
      title: "Cloud Architecture",
      subtitle: "Scalable Infrastructure",
      description:
        "We design multi-tenant cloud architectures using AWS and Azure, ensuring your SaaS platform can scale to thousands of concurrent users while maintaining high availability and security.",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "2",
      title: "Modern Stack Development",
      subtitle: "Robust & Secure",
      description:
        "Using modern frameworks like React and Node.js, we build responsive, secure, and intuitive web interfaces backed by powerful APIs and optimized database schemas.",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "3",
      title: "Subscription Management",
      subtitle: "Monetization & Billing",
      description:
        "We integrate comprehensive subscription management and billing systems, including automated invoicing, tiered pricing, and secure payment gateway integrations.",
      images: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
      ],
    },
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
        caption="Digital Products"
        title="SaaS Development"
        subtitle="Scalable, cloud-native Software as a Service platforms. We help you transform your specialized industrial knowledge into a powerful, global digital product."
        watermarkNumber="21"
      />

      <DetailedProcessSection
        eyebrow="Software-First"
        title="Build Your Digital Empire"
        description="Our SaaS engineering team combines cloud-native technology with deep industry insights to deliver products that are secure, scalable, and user-friendly."
        steps={steps}
      />

      <CTASection
        eyebrowHighlight="Launch"
        eyebrow="Your Product"
        heading="Have a vision for a breakthrough SaaS product? Let's build the platform that powers it."
        primaryLabel="Consult Our Architects"
        secondaryLabel="Platform Specs"
      />
    </PageLayout>
  );
};

export default SAAS;
