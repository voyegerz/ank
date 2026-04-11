import { Settings, ShieldCheck, Zap } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
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
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
        caption="Mission-Critical Reliability"
        leftTitle="Support Capabilities"
        leftParagraphs={[
          "Predictive Maintenance Plans: Utilizing sensor data and ML models to identify potential system failures before they occur, allowing for scheduled, non-disruptive servicing.",
          "24/7 Remote Troubleshooting: Providing instant technical oversight and diagnosis via secure remote access, resolving software and connectivity issues in record time.",
          "On-Site Hardware Repair: Our specialized engineering teams provide rapid on-site intervention for complex mechanical and electronic system failures.",
          "Lifecycle System Audits: Periodic deep-dive evaluations of your hardware and software stacks to ensure they remain compliant and perform at peak efficiency.",
        ]}
        rightTitle="Why Our Support?"
        rightParagraphs={[
          "In modern industry, downtime is not just a nuisance—it's a critical financial loss. Our maintenance philosophy is centered on prevention. We don't just fix problems; we engineer the systems that avoid them.",
          "With ANK as your technical partner, you gain access to a dedicated support infrastructure that understands the unique pressures of your operational environment and responds with precision and speed.",
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
          "Maintenance should never be an afterthought. Our philosophy is to turn technical support from a reactive cost into a proactive strategic advantage. We believe in visibility, transparency, and absolute technical honesty.",
          "By combining real-time data monitoring with a deep understanding of industrial mechanics, we provide a layer of security and peace of mind that allows your team to focus on growth while we handle the complexity of the machine.",
        ]}
        items={[
          {
            icon: <Settings size={32} strokeWidth={1.2} />,
            label: "Predictive Control",
            description: "Identifying issues before they disrupt",
            progress: 98,
          },
          {
            icon: <ShieldCheck size={32} strokeWidth={1.2} />,
            label: "Verified Compliance",
            description: "Ensuring safety and industry standards",
            progress: 99,
          },
          {
            icon: <Zap size={32} strokeWidth={1.2} />,
            label: "Rapid Recovery",
            description: "Industry-leading MTTR (Mean Time To Repair)",
            progress: 94,
          },
        ]}
      />

      <Testimonials
        eyebrow="Partner Success"
        eyebrowHighlight="Success"
        heading="Keeping High-Value Assets Online and Efficient"
        watermarkText="Impact"
        bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
        testimonials={[
          {
            title: "Critical Support in Crisis",
            rating: 5,
            review:
              "An unplanned system crash threatened our entire quarterly output. ANK's remote engineering team was on the line within 10 minutes and resolved the issue in under an hour. Breathtaking response.",
            name: "Richard Vance",
            company: "Plant Manager, Precision Castings",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          },
          {
            title: "Proactive Peace of Mind",
            rating: 5,
            review:
              "Since implementing their predictive maintenance audit, our unplanned downtime has dropped by 80%. They solve problems we didn't even know we had.",
            name: "Elena Rodriguez",
            company: "CEO, TerraDynamics",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
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
