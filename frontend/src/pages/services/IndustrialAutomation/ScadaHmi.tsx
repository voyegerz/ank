import { Code, Database, Zap } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const ScadaHmi = () => {
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
        bgImage="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&q=80&w=2000"
        caption="Digital Streamlining for Modern Industry"
        title="Software Automation"
        subtitle="Custom software tools and scripts designed to eliminate repetitive digital tasks, automate complex data processing, and enhance operational intelligence."
        watermarkNumber="15"
      />
      <ServiceDetail
        image="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=2000"
        caption="Logic-Driven Efficiency"
        leftTitle="Digital Automation Capabilities"
        leftParagraphs={[
          "Robotic Process Automation (RPA): Developing digital workers that automate complex multi-stage workflows across legacy software without the need for high-end API integration.",
          "Automated Reporting & ETL: Engineering data pipelines that automatically extract, transform, and load data from your industrial sensors into beautiful cloud dashboards.",
          "Custom Scripting for Industrial Tools: Developing specialized software scripts to automate repetitive tasks in CAD, PLM, and ERP systems, saving hundreds of engineering hours.",
          "Database Integration & Sync: Synchronizing digital assets across disparate legacy systems and modern cloud backends for a single source of technical truth.",
        ]}
        rightTitle="Why Automate Your Software?"
        rightParagraphs={[
          "Human intelligence is best used for creative and strategic tasks, not repetitive data crunching. Our software automation services are designed to reclaim that lost time by delegating repetitive digital work to custom-engineered scripts and tools.",
          "By auditing your digital bottlenecks and identifying high-utility automation points, we deliver software solutions that increase data accuracy, reduce human error, and accelerate your time-to-insight.",
        ]}
        features={[
          "Custom Data Pipelines",
          "Automated PDF & Report Gen.",
          "Zero-Error Data Entry",
        ]}
        ctaLabel="Consult Automation Spec."
        onCtaClick={() => {
          console.log("Software Automation CTA clicked");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Bottleneck Audit",
            description:
              "We monitor your current digital workflows to identify repetitive, high-volume tasks that are consuming engineering and administrative time.",
          },
          {
            number: "02",
            title: "Logic Development",
            description:
              "Our engineering team develops the custom logic, scripts, and automation tools required to handle these tasks with 100% accuracy and speed.",
          },
          {
            number: "03",
            title: "System Integration",
            description:
              "We integrate the new automation tools into your existing software stack, ensuring secure data handling and cross-system compatibility.",
          },
          {
            number: "04",
            title: "Scaling & Support",
            description:
              "We finalize the automation suite with deployment orchestration and lifecycle support, enabling your team to scale without increased manual labor.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1454165833767-027eeed1a131?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our digital philosophy"
        eyebrowHighlight="digital"
        title="Predictable Logic Growth"
        paragraphs={[
          "The best automation is almost invisible—it just works. Our philosophy is to build digital tools that feel like a seamless extension of your existing software, removing friction without adding complexity.",
          "We believe in the power of precision logic to unlock business value. By automating the routine, we enable your team to focus on the exceptional, driving innovation across every layer of your digital operation.",
        ]}
        items={[
          {
            icon: <Zap size={32} strokeWidth={1.2} />,
            label: "Absolute Speed",
            description: "Processing data millions of times faster",
            progress: 98,
          },
          {
            icon: <Database size={32} strokeWidth={1.2} />,
            label: "Data Accuracy",
            description: "Eliminating manual entry errors",
            progress: 99,
          },
          {
            icon: <Code size={32} strokeWidth={1.2} />,
            label: "Clean Codebase",
            description: "Modular and maintainable scripts",
            progress: 94,
          },
        ]}
      />

      <Testimonials
        eyebrow="Feedback Highlights"
        eyebrowHighlight="Highlights"
        heading="Removing Digital Friction with Precision Software"
        watermarkText="Results"
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
        testimonials={[
          {
            title: "Unprecedented Time Savings",
            rating: 5,
            review:
              "The custom ETL pipeline ANK built for our engineering audits has saved us over 200 hours of manual data entry every single month. It's transformed our reporting speed.",
            name: "Isabella Martinez",
            company: "Lead Auditor, Global Energy",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          },
          {
            title: "A Technical Powerhouse",
            rating: 5,
            review:
              "Transitioning our legacy Excel-based tracking to an automated cloud dashboard was handled with incredible poise. We now have real-time visibility into every project KPI.",
            name: "Lucas Wright",
            company: "VP Operations, Nexus Industrial",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Automate your future"
        eyebrowHighlight="Automate"
        heading="Ready to eliminate digital repetition with custom software automation and precision data processing?"
        primaryLabel="Schedule Automation Consult"
        secondaryLabel="View Success Stories"
        onPrimaryClick={() => {
          console.log("Software Automation Start clicked");
        }}
        onSecondaryClick={() => {
          console.log("Success Stories clicked");
        }}
      />
    </PageLayout>
  );
};

export default ScadaHmi;
