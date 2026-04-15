import { Cpu, Terminal, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const PlcProgramming = () => {
  const navigate = useNavigate();

  const plcImages = [
    "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=2000"
        caption="Industrial Logic & Control"
        title="PLC Programming"
        subtitle="Custom PLC programming services for a variety of industrial platforms (Siemens, Allen-Bradley, Schneider, Delta). We develop robust, fail-safe logic to control your machinery and production processes with maximum efficiency."
        watermarkNumber="08"
      />
      <ServiceDetail
        images={plcImages}
        caption="Intelligence at the Edge"
        leftTitle="Robust Control Logic"
        leftParagraphs={[
          "We specialize in developing clean, well-documented, and highly reliable PLC code that forms the brain of your industrial systems. Our approach prioritizes safety, speed, and ease of future modifications.",
          "Whether it's a simple machine or a complex multi-stage production line, we design logic that handles real-world variability and ensures continuous uptime.",
        ]}
        rightTitle="Platform Versatility"
        rightParagraphs={[
          "Our engineering team is proficient across all major PLC brands and communication protocols. We bridge the gap between different hardware environments to create a unified control strategy.",
          "We don't just write code; we optimize system performance by fine-tuning PID loops, motion control profiles, and interlocking sequences for maximum throughput.",
        ]}
        features={[
          "Multi-Platform Development",
          "Advanced Motion Control",
          "PID Loop Optimization",
          "Industrial Protocol Integration",
        ]}
        ctaLabel="Consult our PLC Experts"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "IO Mapping & Logic",
            description:
              "Defining all physical inputs/outputs and creating a comprehensive logic flow based on the machine's functional requirements.",
          },
          {
            number: "02",
            title: "Development & Coding",
            description:
              "Writing structured PLC code using industry-standard languages like Ladder Logic, Structured Text, or Function Block Diagrams.",
          },
          {
            number: "03",
            title: "Virtual Commissioning",
            description:
              "Testing the code in a simulated environment to identify and fix logic errors before connecting to physical hardware.",
          },
          {
            number: "04",
            title: "Site Acceptance (SAT)",
            description:
              "Deploying the code on-site, performing real-world testing, and handing over a fully validated and documented system.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our control ethos"
        eyebrowHighlight="ethos"
        title="Logic that never fails"
        paragraphs={[
          "Industrial automation depends on logic that can handle thousands of cycles without a single glitch. We approach PLC programming with a rigorous emphasis on state-machine design and fail-safe error handling.",
          "Our code is built to be understood by your maintenance teams, with clear comments and logical structuring that reduces the cost of long-term ownership and troubleshooting.",
        ]}
        items={[
          {
            icon: <Terminal size={32} strokeWidth={1.2} />,
            label: "Clean Architecture",
            description: "Modular and scalable code",
            progress: 99,
          },
          {
            icon: <Zap size={32} strokeWidth={1.2} />,
            label: "High Performance",
            description: "Optimized cycle times",
            progress: 96,
          },
          {
            icon: <Cpu size={32} strokeWidth={1.2} />,
            label: "Seamless Integration",
            description: "Works across all hardware",
            progress: 100,
          },
        ]}
      />

      <Testimonials
        eyebrow="Proven Control"
        eyebrowHighlight="Control"
        heading="Client Feedback"
        watermarkText="Logic"
        bgImage="https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?q=80&w=2000&auto=format&fit=crop"
        testimonials={[
          {
            title: "Flawless Migration",
            rating: 5,
            review:
              "ANK helped us migrate our old S5 system to modern TIA Portal logic. The transition was seamless, and the new code is much easier for our team to maintain.",
            name: "Suresh P.",
            company: "Maintenance Manager, Global FMCG Brand",
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Intelligent Automation"
        eyebrowHighlight="Automation"
        heading="Need robust PLC logic to power your industrial processes?"
        primaryLabel="Talk to our Programmers"
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

export default PlcProgramming;
