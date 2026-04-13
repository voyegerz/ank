import PageLayout from "../../components/PageLayout";
import CommonHero from "../../components/CommonHero";
import UnitValue from "../../components/buisness-units/UnitValue";
import UnitClients from "@/components/buisness-units/UnitClients";
import UnitProducts from "@/components/buisness-units/UnitProducts";
import UnitMoreServices from "@/components/buisness-units/UnitMoreServices";

const SoftwareDevelopment = () => {
  return (
    <PageLayout>
      <CommonHero
        title="Software Engineering"
        caption="Tailor-made digital products designed for scalability, performance, and security."
      />

      <UnitValue
        category="CUSTOM SOLUTIONS"
        title="Innovating Custom Software"
        description="We transform custom business needs into high-performing digital products. Our expertise spans across enterprise-grade applications, scalable cloud architectures, and intuitive user experiences for web and mobile."
        highlights={[
          "Full-Stack Enterprise Applications",
          "Scalable Cloud Architectures",
          "Intuitive User Experience Design",
          "Rigorous Security & Compliance",
        ]}
        imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
        buttonText="Build Your Product"
      />

      <UnitProducts />

      <UnitClients />

      <UnitMoreServices />
    </PageLayout>
  );
};

export default SoftwareDevelopment;
