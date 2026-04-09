import PageLayout from "../../components/PageLayout";
import CommonHero from "../../components/CommonHero";
import UnitValue from "../../components/buisness-units/UnitValue";
import UnitClients from "@/components/buisness-units/UnitClients";
import UnitProducts from "@/components/buisness-units/UnitProducts";
import UnitMoreServices from "@/components/buisness-units/UnitMoreServices";

const CADDesignServices = () => {
  return (
    <PageLayout>
      <CommonHero
        title="CAD Design Services"
        caption="Precision-engineered 3D/2D CAD development for industrial excellence."
      />

      <UnitValue
        category="CAD EXCELLENCE"
        title="Engineering the best CAD solutions"
        description="Uniquely enable accurate supply chains rather than frictionless technology. Globally network focused materials vis-a-vis cost effective manufactured products."
        highlights={[
          "Solutions for your manufacturing business",
          "Production of bespoke tools and machines",
          "Designing, building and testing with highest quality",
          "Delivering the best results for reasonable cost",
        ]}
        imageUrl="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
        buttonText="Find out more"
      />

      <UnitProducts />

      <UnitClients />

      <UnitMoreServices />
    </PageLayout>
  );
};

export default CADDesignServices;
