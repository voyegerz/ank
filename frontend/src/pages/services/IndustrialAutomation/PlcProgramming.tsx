import { Cpu, Layers, Settings } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const PlcProgramming = () => {
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
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
        caption="Engineering Industrial Workflows"
        title="Process Automation"
        subtitle="Transforming manual industrial tasks into high-precision, automated workflows through the seamless integration of hardware, robotics, and intelligent control systems."
        watermarkNumber="14"
      />
      <ServiceDetail
        image="https://images.unsplash.com/photo-1565608444338-316f39949826?auto=format&fit=crop&q=80&w=2000"
        caption="Industrial Intelligence"
        leftTitle="Core Process Capabilities"
        leftParagraphs={[
          "PLC & SCADA Integration: Architecting and deploying high-reliability Programmable Logic Controllers and Supervisory Control systems for centralized plant oversight.",
          "Robotic Cell Implementation: Designing custom robotic workcells for autonomous pick-and-place, precision sorting, and high-speed assembly tasks.",
          "Inline Automated Inspection: Developing vision-based and acoustic quality control modules that identify defects in real-time on live production lines.",
          "Workflow Digitization: Moving from paper-based tracking to fully integrated digital manufacturing execution systems (MES) for total operational traceability.",
        ]}
        rightTitle="Why Automate Your Process?"
        rightParagraphs={[
          "True automation is not just about replacing labor; it's about increasing the precision, speed, and safety of your operations. Our process automation services are designed to maximize your return on investment through smarter engineering.",
          "By auditing your entire workflow and identifying bottlenecks, we deliver custom automation solutions that are modular, scalable, and deeply integrated into your strategic business objectives.",
        ]}
        features={[
          "Real-Time Data Visualization",
          "Advanced Precision Controls",
          "Scalable Modular Designs",
        ]}
        ctaLabel="Design Your Workflow"
        onCtaClick={() => {
          console.log("Process Automation CTA clicked");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Operational Audit",
            description:
              "We perform a deep-dive audit of your current physical processes, mapping every movement and transaction to identify the highest-impact automation points.",
          },
          {
            number: "02",
            title: "System Design",
            description:
              "Our engineering team architects the hardware and software layers, creating detailed 3D simulations of the proposed robotic or control systems.",
          },
          {
            number: "03",
            title: "Agile Integration",
            description:
              "We execute the physical installation and software commissioning in phased cycles, ensuring minimal disruption to your existing production lines.",
          },
          {
            number: "04",
            title: "Performance Tune",
            description:
              "Post-implementation, we perform exhaustive speed and accuracy tests, tuning every variable for maximum efficiency and system longevity.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our automation philosophy"
        eyebrowHighlight="automation"
        title="Engineered Throughput"
        paragraphs={[
          "Process automation is the art of synchronization. Our philosophy is to build systems that work in perfect harmony with your human capital—not to replace talent, but to empower it with better tools.",
          "We believe in simplicity within complexity. A truly high-end automation system should be effortless to monitor and resilient enough to handle any operational edge case.",
        ]}
        items={[
          {
            icon: <Cpu size={32} strokeWidth={1.2} />,
            label: "Control Precision",
            description: "High-resolution sensor and PLC feedback",
            progress: 96,
          },
          {
            icon: <Layers size={32} strokeWidth={1.2} />,
            label: "Modular Scale",
            description: "Designed for future expansion",
            progress: 92,
          },
          {
            icon: <Settings size={32} strokeWidth={1.2} />,
            label: "Integration Flow",
            description: "Seamless connection to cloud backends",
            progress: 98,
          },
        ]}
      />

      <Testimonials
        eyebrow="Collaborative Success"
        eyebrowHighlight="Success"
        heading="Automating the Future of Modern Production"
        watermarkText="Results"
        bgImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000"
        testimonials={[
          {
            title: "Transformative Efficiency",
            rating: 5,
            review:
              "ANK integrated a custom robotic sorting line that tripled our throughput in just 6 months. Their grasp of SCADA integration has given us data visibility we never had before.",
            name: "Jeremy Cole",
            company: "COO, NextGen Assembly",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          },
          {
            title: "A Technical Masterclass",
            rating: 5,
            review:
              "Transitions from manual to automated processes are always stressful, but ANK's engineering team managed the transition with Incredible professionalism. Zero downtime during the swap.",
            name: "Linda Thorne",
            company: "Director of Ops, BlueWave Energy",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Optimize your workflow"
        eyebrowHighlight="Optimize"
        heading="Ready to build an automated industrial powerhouse with custom robotic integration and precision control systems?"
        primaryLabel="Schedule Automation Briefing"
        secondaryLabel="View Case Studies"
        onPrimaryClick={() => {
          console.log("Process Start clicked");
        }}
        onSecondaryClick={() => {
          console.log("Case Studies clicked");
        }}
      />
    </PageLayout>
  );
};

export default PlcProgramming;
