import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import DetailedProcessSection from "../../../components/service/DetailedProcessSection";
import type { ProcessStep } from "../../../components/service/DetailedProcessSection";

import CTASection from "@/components/service/CTA";

const FeaAnalysis = () => {

  const steps: ProcessStep[] = [
    {
      number: "1",
      title: "Regulatory Compliance Audit",
      subtitle: "Standards Verification",
      description:
        "We commence every engagement with a rigorous audit of your designs against international ISO, IEC, and CE standards, ensuring your product is globally compliant and market-ready from day one.",
      images: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "2",
      title: "Environmental Stress Testing",
      subtitle: "Reliability Analysis",
      description:
        "Subjecting hardware to extreme thermal cycling, vibration analysis, and mechanical stress helps us identify latent vulnerabilities. We ensure your product survives the harshest industrial environments.",
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
      ],
    },
    {
      number: "3",
      title: "Automated Software Validation",
      subtitle: "Continuous Testing",
      description:
        "Our software engineering team deploys advanced CI/CD pipelines including unit, integration, and regression test suites to guarantee code stability, cybersecurity, and sub-second performance metrics.",
      images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "4",
      title: "Final Certification & Handover",
      subtitle: "Operational Readiness",
      description:
        "The final phase involves a comprehensive functional sign-off. We provide exhaustive documentation, test reports, and compliance certificates before the product transitions to full-scale production.",
      images: [
        "https://images.unsplash.com/photo-1454165833767-027eeed1a131?auto=format&fit=crop&q=80&w=1200",
      ],
    },
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
        caption="Engineering Integrity"
        title="Testing & Quality Assurance"
        subtitle="We deliver uncompromising technical validation for mission-critical hardware and software, ensuring every deployment is resilient, secure, and performant."
        watermarkNumber="16"
      />

      <DetailedProcessSection
        eyebrow="Precision Workflow"
        title="An Exhaustive Audit of Your Vision"
        description="Our quality assurance framework is built on thirty years of industrial expertise, combining physical stress tests with advanced digital simulation."
        steps={steps}
      />


      <CTASection
        eyebrowHighlight="Zero"
        eyebrow="Zero-Defect Goal"
        heading="Ready to ensure your next industrial project meets the highest standards of reliability and performance?"
        primaryLabel="Request a QA Audit"
        secondaryLabel="View Case Studies"
      />
    </PageLayout>
  );
};

export default FeaAnalysis;
