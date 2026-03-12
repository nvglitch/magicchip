import HeroBanner from "@/components/HeroBanner";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProduct from "@/components/FeaturedProduct";
import LeadGeneration from "@/components/LeadGeneration";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <ProductCategories />
      <FeaturedProduct />
      <Services />
      <SocialProof />
      <LeadGeneration />
    </div>
  );
}
