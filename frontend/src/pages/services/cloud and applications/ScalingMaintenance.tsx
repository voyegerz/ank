import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import DetailedProcessSection from "../../../components/service/DetailedProcessSection";
import type { ProcessStep } from "../../../components/service/DetailedProcessSection";
import CTASection from "@/components/service/CTA";

const ScalingMaintenance = () => {
  const steps: ProcessStep[] = [
    {
      number: "1",
      title: "Performance Benchmarking",
      subtitle: "Baseline Metric Analysis",
      description:
        "Our engineers begin with an exhaustive profiling of your current software architecture, identifying bottlenecks in database execution, network latency, and server resource allocation.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      ],
    },
    {
      number: "2",
      title: "Infrastructure Refactoring",
      subtitle: "Efficiency Optimization",
      description:
        "We implement advanced caching layers, code-level optimizations, and database indexing to transform your legacy infrastructure into a high-performance system capable of handling peak loads.",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "3",
      title: "Elastic Scalability Implementation",
      subtitle: "Cloud-Native Growth",
      description:
        "By architecting containerized, multi-region cloud solutions, we ensure your digital assets can scale horizontally in real-time. We build for tomorrow's traffic, today.",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
      ],
    },
    {
      number: "4",
      title: "Operational Monitoring & Security",
      subtitle: "24/7 Technical Oversight",
      description:
        "Long-term maintenance is about proactive security auditing and real-time observability. We ensure your system is patched, secure, and performant across the entire lifecycle.",
      images: [
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
      ],
    },
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
        caption="Future-Proof Solutions"
        title="Scaling & Maintenance"
        subtitle="Dedicated performance optimization and long-term maintenance infrastructure designed to keep your high-traffic industrial platforms secure and resilient."
        watermarkNumber="17"
      />

      <DetailedProcessSection
        eyebrow="Evolutionary Growth"
        title="From Prototype to Platform"
        description="Our maintenance infrastructure handles billions of data points annually, providing the scaling path your mission-critical applications require."
        steps={steps}
      />

      <CTASection
        eyebrowHighlight="Global"
        eyebrow="Global Availability"
        heading="Ready to scale your digital infrastructure and ensure absolute uptime for your mission-critical applications?"
        primaryLabel="Request a Scaling Audit"
        secondaryLabel="Explore Infrastructure"
      />
    </PageLayout>
  );
};

export default ScalingMaintenance;
