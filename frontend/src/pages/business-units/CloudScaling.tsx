import PageLayout from "../../components/PageLayout";
import CommonHero from "../../components/CommonHero";
import UnitValue from "../../components/buisness-units/UnitValue";
import UnitClients from "@/components/buisness-units/UnitClients";
import UnitProducts from "@/components/buisness-units/UnitProducts";
import UnitMoreServices from "@/components/buisness-units/UnitMoreServices";

const CloudScaling = () => {
  return (
    <PageLayout>
      <CommonHero
        title="Cloud & Scaling"
        caption="Advanced cloud infrastructure and scaling solutions for global operations."
      />

      <UnitValue
        category="CLOUD INFRASTRUCTURE"
        title="Scaling your Digital reach"
        description="We provide robust scaling platforms and managed services for applications across Android, iOS, and Web. Our infrastructure ensures high availability and seamless growth for enterprise-level demands."
        highlights={[
          "Automated Scaling Solutions",
          "Cross-Platform Managed Services",
          "Managed DevOps & Infrastructure",
          "High Availability Architectures",
        ]}
        imageUrl="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
        buttonText="Scale Your App"
      />

      <UnitProducts />

      <UnitClients />

      <UnitMoreServices />
    </PageLayout>
  );
};

export default CloudScaling;
