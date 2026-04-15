import { Settings, ShieldCheck, Zap } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import CTASection from "@/components/service/CTA";

const MaintenanceTroubleshooting = () => {
  const clients = [
    { name: "TechCorp", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Innovate AI", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "CloudSync", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "DataFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "LogicGate", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "NetSys", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Samsung_wordmark.svg" },
  ];

  const maintenanceImages = [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
        caption="Ensuring Continuous Operational Excellence"
        title="Maintenance & Troubleshooting"
        subtitle="Dedicated technical support, predictive maintenance strategies, and rapid fault resolution to minimize downtime and maximize system lifecycle."
        watermarkNumber="13"
      />
      <ServiceDetail
        images={maintenanceImages}
        caption="Mission-Critical Reliability"
        leftTitle="Support Capabilities"
        leftParagraphs={[
          "Utilizing sensor data and diagnostic models to identify potential system failures before they occur, allowing for scheduled, non-disruptive servicing. We provide instant technical oversight via secure remote access, resolving software and connectivity issues in record time.",
          "Our specialized engineering teams provide rapid on-site intervention for complex mechanical and electronic system failures. Periodic deep-dive evaluations ensure your hardware and software stacks remain compliant and perform at peak efficiency, avoiding critical financial loss from downtime.",
        ]}
        features={[
          "Guaranteed SLA Response",
          "Automated System Health Monitoring",
          "Global Hardware Support",
        ]}
        ctaLabel="Request a Support Audit"
        onCtaClick={() => {
          console.log("Maintenance CTA clicked");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Baseline Audit",
            description:
              "We perform a comprehensive evaluation of your current system health, identifying bottlenecks and immediate risks to operational stability.",
          },
          {
            number: "02",
            title: "Fault Diagnosis",
            description:
              "When an issue arises, our engineers use advanced diagnostic tools to isolate the root cause across hardware, firmware, and soft layers.",
          },
          {
            number: "03",
            title: "Rapid Resolution",
            description:
              "We execute coordinated fixes—whether remote or on-site—to bring systems back online with minimal interruption to your production schedule.",
          },
          {
            number: "04",
            title: "System Optimization",
            description:
              "Post-resolution, we implement preventive measures and optimizations to ensure the same issue does not reoccur, improving long-term reliability.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our support philosophy"
        eyebrowHighlight="support"
        title="Predictable System Health"
        paragraphs={[
          "Maintenance should never be an afterthought. Our philosophy is to turn technical support from a reactive cost into a proactive strategic advantage, providing peace of mind and operational security through absolute technical honesty.",
        ]}
        imageSize="xs"
        iconSize={80}
        items={[
          {
            icon: <Settings size={20} strokeWidth={1.2} />,
            label: "Predictive Control",
            description: "Identifying issues before they disrupt",
            progress: 98,
          },
          {
            icon: <ShieldCheck size={20} strokeWidth={1.2} />,
            label: "Verified Compliance",
            description: "Ensuring safety and industry standards",
            progress: 99,
          },
          {
            icon: <Zap size={20} strokeWidth={1.2} />,
            label: "Rapid Recovery",
            description: "Industry-leading MTTR",
            progress: 94,
          },
        ]}
      />

      <CTASection
        eyebrow="Protect your operations"
        eyebrowHighlight="Protect"
        heading="Ready to eliminate unplanned downtime with a professional technical support and maintenance partnership?"
        primaryLabel="Schedule a System Audit"
        secondaryLabel="View Case Studies"
        onPrimaryClick={() => {
          console.log("Maintenance Consultation clicked");
        }}
        onSecondaryClick={() => {
          console.log("Case Studies clicked");
        }}
      />
    </PageLayout>
  );
};

export default MaintenanceTroubleshooting;
