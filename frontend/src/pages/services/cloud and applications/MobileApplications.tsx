import { Smartphone, Layers, ShieldCheck } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const MobileApplications = () => {
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
        bgImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2000"
        caption="Native and Cross-Platform Excellence"
        title="Mobile Applications"
        subtitle="We develop powerful, high-performance mobile experiences for iOS and Android, focusing on native-level speed and pixel-perfect design."
        watermarkNumber="06"
      />
      <ServiceDetail
        image="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=2000"
        caption="Mobile Ecosystems"
        leftTitle="Service Capabilities"
        leftParagraphs={[
          "React Native & Flutter: Building unified codebases that deliver native performance on both iOS and Android platforms, reducing development time without compromising quality.",
          "Native iOS & Android: Optimizing low-level system integrations for demanding applications that require the maximum performance only native platforms can provide.",
          "IoT Mobile Dashboards: Developing specialized mobile controllers for industrial hardware, integrating real-time telemetry and advanced remote control features.",
          "Offline-First Architectures: Ensuring mission-critical mobile tools function flawlessly in environments with poor or zero connectivity, with robust data synchronization models.",
        ]}
        rightTitle="Why Your App Needs Our Touch?"
        rightParagraphs={[
          "A mobile application is the most intimate connection your business has with its users. We don't just build apps; we design experiences that feel right in the palm of the hand—fast, fluid, and focused.",
          "Our mobile engineering process prioritizes battery efficiency, security, and consistent UI/UX across all device form factors, ensuring your app stands out in a crowded digital landscape.",
        ]}
        features={[
          "Biometric Authentication",
          "Real-Time Data Syncing",
          "Advanced Push Logic",
        ]}
        ctaLabel="Design Your Mobile App"
        onCtaClick={() => {
          console.log("Mobile CTA clicked");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "UX Wireframing",
            description:
              "We map out user journeys and wireframe every screen to ensure a frictionless, mobile-first experience that prioritizes your core functionalities.",
          },
          {
            number: "02",
            title: "Modern Development",
            description:
              "Our mobile engineers write clean, efficient code using modern frameworks, ensuring your application is lightweight and high-performing on all hardware.",
          },
          {
            number: "03",
            title: "Hardware Integration",
            description:
              "Whether it's camera, GPS, NFC, or Bluetooth, we specialize in bridging software with mobile hardware for truly integrated digital experiences.",
          },
          {
            number: "04",
            title: "App Store Strategy",
            description:
              "We manage the full submission process for Apple App Store and Google Play, ensuring compliance with all guidelines and optimal store presence.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our mobile philosophy"
        eyebrowHighlight="mobile"
        title="Mobility Without Compromise"
        paragraphs={[
          "The most successful mobile applications are those that simplify complexity. We strive to build mobile tools that feel like a natural extension of the user's intent, with zero friction and maximum reliability.",
          "From consumer-facing startups to mission-critical industrial controllers, our approach to mobile engineering is consistent: build for performance, design for clarity, and secure for peace of mind.",
        ]}
        items={[
          {
            icon: <Smartphone size={32} strokeWidth={1.2} />,
            label: "Device Integration",
            description: "Deep integration with mobile hardware",
            progress: 98,
          },
          {
            icon: <Layers size={32} strokeWidth={1.2} />,
            label: "Layered Architecture",
            description: "Modular, maintainable code structures",
            progress: 94,
          },
          {
            icon: <ShieldCheck size={32} strokeWidth={1.2} />,
            label: "End-to-End Security",
            description: "Encrypted local storage and secure APIs",
            progress: 97,
          },
        ]}
      />

      <Testimonials
        eyebrow="Client Reviews"
        eyebrowHighlight="Reviews"
        heading="Taking Business Mobile with High Impact"
        watermarkText="Impact"
        bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
        testimonials={[
          {
            title: "A Stellar User Experience",
            rating: 5,
            review:
              "ANK built our field service app which requires heavy offline tasks and complex hardware syncing. It's been a game-changer for our technicians and has increased efficiency by 40%.",
            name: "Emily Thompson",
            company: "COO, Vertex Field Services",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
          },
          {
            title: "Precision in Every Pixel",
            rating: 5,
            review:
              "Their grasp of both React Native and native module development is impressive. They delivered a high-end consumer app that feels and performs just like a native solution.",
            name: "Marcus Aurelius",
            company: "Founder, NexaApp Venture",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Go mobile today"
        eyebrowHighlight="mobile"
        heading="Ready to put your business in the palm of your customer's hand with a high-performance mobile application?"
        primaryLabel="Start Mobile Project"
        secondaryLabel="View Case Studies"
        onPrimaryClick={() => {
          console.log("Mobile Start clicked");
        }}
        onSecondaryClick={() => {
          console.log("Case Studies clicked");
        }}
      />
    </PageLayout>
  );
};

export default MobileApplications;
