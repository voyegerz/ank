import { Cog, Factory, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import CTASection from "@/components/service/CTA";

const SPM = () => {
  const navigate = useNavigate();

  const spmImages = [
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000"
        caption="Custom Machinery Solutions"
        title="Special Purpose Machines"
        subtitle="End-to-end development of Special Purpose Machines (SPM) designed to automate unique industrial tasks. From concept and mechanical design to control system integration, we build machines that enhance productivity and precision."
        watermarkNumber="07"
      />
      <ServiceDetail
        images={spmImages}
        caption="Innovation in Motion"
        leftTitle="Bespoke Automation"
        leftParagraphs={[
          "When standard machinery isn't enough, we design and build custom solutions tailored specifically to your production requirements. Our SPM development covers a wide range of applications including assembly, testing, and material handling.",
          "We integrate mechanical precision with advanced control systems to create reliable, high-performance machines. Our approach is holistic, engineering the entire system including mechanical frames, pneumatics, hydraulics, and electronic controls with a focus on safety and high uptime.",
        ]}
        features={[
          "Custom Concept Development",
          "Multi-disciplinary Engineering",
          "Automated Testing & Assembly",
          "Turnkey System Integration",
        ]}
        ctaLabel="Discuss your Machine"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Requirements Capture",
            description:
              "Deep-diving into your production bottlenecks and defining precise cycle times, accuracy levels, and safety constraints.",
          },
          {
            number: "02",
            title: "Concept Design",
            description:
              "Developing multiple mechanical concepts and choosing the most robust architecture for your specific application.",
          },
          {
            number: "03",
            title: "Detailed Engineering",
            description:
              "Finalizing 3D models, selecting actuators, designing control panels, and simulating kinematic movements.",
          },
          {
            number: "04",
            title: "Assembly & Testing",
            description:
              "Fabricating components, assembling the machine, and conducting rigorous factory acceptance tests before deployment.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our machine ethos"
        eyebrowHighlight="ethos"
        title="Purpose-Built Power"
        paragraphs={[
          "Special Purpose Machines represent the pinnacle of engineering creativity, requiring a perfect balance of mechanical strength, electrical intelligence, and operational simplicity. We believe every production bottleneck is an opportunity for innovation.",
        ]}
        imageSize="xs"
        iconSize={80}
        items={[
          {
            icon: <Cog size={20} strokeWidth={1.2} />,
            label: "Mechanical Mastery",
            description: "Robust frames and precise motion",
            progress: 97,
          },
          {
            icon: <Zap size={20} strokeWidth={1.2} />,
            label: "Electrical Logic",
            description: "Intelligent control and sensing",
            progress: 95,
          },
          {
            icon: <Factory size={20} strokeWidth={1.2} />,
            label: "Industrial Quality",
            description: "Built for 24/7 heavy operation",
            progress: 100,
          },
        ]}
      />

      <CTASection
        eyebrow="Automate your unique process"
        eyebrowHighlight="process"
        heading="Ready to build a machine designed specifically for your needs?"
        primaryLabel="Start Custom Build"
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

export default SPM;
