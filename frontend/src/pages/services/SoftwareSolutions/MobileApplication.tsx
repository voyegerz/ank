import { Smartphone, Tablet, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const MobileApplication = () => {
  const navigate = useNavigate();

  const mobileImages = [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000"
        caption="Next-Gen Mobile Experiences"
        title="Mobile Application Development"
        subtitle="High-performance iOS and Android applications designed for the modern mobile world. We build native and cross-platform apps that provide seamless, fast, and engaging experiences for your users on the go."
        watermarkNumber="14"
      />
      <ServiceDetail
        images={mobileImages}
        caption="Innovation in your Pocket"
        leftTitle="Native-Feel Experiences"
        leftParagraphs={[
          "We specialize in developing mobile applications that feel fast and fluid. Our team utilizes modern frameworks like React Native and Flutter to deliver near-native performance with the efficiency of a single codebase.",
          "From consumer-facing apps to specialized industrial mobile tools, we focus on creating intuitive touch interfaces and robust offline capabilities that ensure your app works perfectly everywhere.",
        ]}
        rightTitle="End-to-End Mobile Strategy"
        rightParagraphs={[
          "Our mobile development process covers everything from initial concept and UI/UX design to App Store submission and ongoing support. We ensure your app integrates seamlessly with your existing backend systems.",
          "We prioritize security, performance, and battery efficiency, ensuring that your application provides a premium experience that keeps users coming back.",
        ]}
        features={[
          "Cross-Platform App Development",
          "Intuitive Touch UI/UX Design",
          "Seamless Backend Integration",
          "App Store & Play Store Support",
        ]}
        ctaLabel="Build your Mobile App"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Concept & Prototyping",
            description:
              "Defining the app's core value, mapping user journeys, and creating interactive mobile-first prototypes.",
          },
          {
            number: "02",
            title: "Agile Mobile Development",
            description:
              "Coding the application using modern frameworks, with regular build releases for continuous client feedback.",
          },
          {
            number: "03",
            title: "Rigorous Device Testing",
            description:
              "Testing the app across a wide range of real iOS and Android devices to ensure flawless performance and UI consistency.",
          },
          {
            number: "04",
            title: "Launch & Maintenance",
            description:
              "Managing the submission process to stores and providing ongoing updates to keep the app compatible with new OS versions.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our mobile ethos"
        eyebrowHighlight="ethos"
        title="Mobility Without Compromise"
        paragraphs={[
          "Mobile applications are the most personal way to connect with your users. We believe that a great mobile experience is one that respects the user's time and attention with speed and clarity.",
          "Whether it's an internal tool for your field engineers or a marketplace for your customers, we apply the same high standards of engineering excellence to every line of mobile code we write.",
        ]}
        items={[
          {
            icon: <Smartphone size={32} strokeWidth={1.2} />,
            label: "Pocket Power",
            description: "High-performance native feel",
            progress: 99,
          },
          {
            icon: <Tablet size={32} strokeWidth={1.2} />,
            label: "Multi-Device",
            description: "Optimized for all screens",
            progress: 97,
          },
          {
            icon: <Zap size={32} strokeWidth={1.2} />,
            label: "Fast Response",
            description: "Instant loading & interactions",
            progress: 100,
          },
        ]}
      />

      <Testimonials
        eyebrow="Mobile Impact"
        eyebrowHighlight="Impact"
        heading="Client Feedback"
        watermarkText="Mobile"
        bgImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop"
        testimonials={[
          {
            title: "Field Efficiency",
            rating: 5,
            review:
              "ANK developed a custom mobile inspection tool for our site engineers. It's incredibly stable even in low-connectivity areas, and the offline sync works like a charm.",
            name: "Vikram S.",
            company: "Tech Lead, Global Infrastructure Corp.",
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Connect with users anywhere"
        eyebrowHighlight="anywhere"
        heading="Ready to build a high-performance mobile application for your business?"
        primaryLabel="Start Mobile Project"
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

export default MobileApplication;
