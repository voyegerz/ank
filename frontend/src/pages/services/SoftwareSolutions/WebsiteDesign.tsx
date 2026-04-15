import { Globe, Code, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const WebsiteDesign = () => {
  const navigate = useNavigate();

  const webImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
        caption="High-Performance Digital Presence"
        title="Website Design & Development"
        subtitle="Professional corporate websites and web applications built for speed, conversion, and brand impact. We combine modern aesthetics with robust engineering to deliver digital experiences that represent your technical excellence."
        watermarkNumber="11"
      />
      <ServiceDetail
        images={webImages}
        caption="Engineering the Web"
        leftTitle="Impactful Digital Strategy"
        leftParagraphs={[
          "Your website is the digital front door to your business. We design responsive, high-performance websites that communicate your brand's unique value proposition and technical authority to a global audience.",
          "We focus on creating intuitive user journeys that guide visitors toward your primary goals, whether it's requesting a quote, downloading a specification sheet, or initiating a partnership.",
        ]}
        rightTitle="Modern Web Engineering"
        rightParagraphs={[
          "We utilize industry-leading technologies like React, Tailwind CSS, and headless CMS platforms to build websites that are lightning-fast, secure, and incredibly easy for your team to manage and update.",
          "Our development process prioritizes SEO best practices, accessibility, and cross-browser compatibility, ensuring that your digital presence performs flawlessly on every device.",
        ]}
        features={[
          "Custom Responsive Design",
          "High-Speed Web Development",
          "Search Engine Optimization (SEO)",
          "Content Management Integration",
        ]}
        ctaLabel="Build your Website"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Strategy & Wireframing",
            description:
              "Defining the site's goals, user personas, and information architecture before creating low-fidelity wireframes.",
          },
          {
            number: "02",
            title: "UI/UX Visual Design",
            description:
              "Developing high-fidelity prototypes that align with your brand identity and provide an exceptional user experience.",
          },
          {
            number: "03",
            title: "Agile Development",
            description:
              "Coding the website using modern frameworks, ensuring clean, performant, and scalable code at every step.",
          },
          {
            number: "04",
            title: "Deployment & Support",
            description:
              "Rigorous testing, final deployment to production, and ongoing maintenance to keep your site running perfectly.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our digital ethos"
        eyebrowHighlight="ethos"
        title="Form Meets Function"
        paragraphs={[
          "In the world of professional engineering, a website must be more than just pretty; it must be a precise tool. We approach web design with the same rigor we apply to mechanical or electrical engineering.",
          "Every pixel, every line of code, and every interaction is designed to support your business objectives and reinforce your reputation for quality and innovation.",
        ]}
        items={[
          {
            icon: <Code size={32} strokeWidth={1.2} />,
            label: "Clean Code",
            description: "Scalable and secure frontend",
            progress: 99,
          },
          {
            icon: <Rocket size={32} strokeWidth={1.2} />,
            label: "Fast Load Times",
            description: "Optimized for core web vitals",
            progress: 98,
          },
          {
            icon: <Globe size={32} strokeWidth={1.2} />,
            label: "Global Outreach",
            description: "Built for SEO and visibility",
            progress: 95,
          },
        ]}
      />

      <Testimonials
        eyebrow="Digital Impact"
        eyebrowHighlight="Impact"
        heading="Client Feedback"
        watermarkText="Digital"
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
        testimonials={[
          {
            title: "Corporate Identity",
            rating: 5,
            review:
              "ANK's team redesigned our corporate site and the results were incredible. Our page speed tripled, and we saw an immediate increase in high-quality leads from our contact form.",
            name: "Siddharth J.",
            company: "Marketing Director, Precision Tools Ltd.",
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Elevate your digital presence"
        eyebrowHighlight="presence"
        heading="Ready to build a website that matches your technical excellence?"
        primaryLabel="Start Web Project"
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

export default WebsiteDesign;
