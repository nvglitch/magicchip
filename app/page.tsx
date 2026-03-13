import HeroBanner from "@/components/HeroBanner";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProduct from "@/components/FeaturedProduct";
import LeadGeneration from "@/components/LeadGeneration";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <ProductCategories />
      <FeaturedProduct />
      <Services />
      <SocialProof />
      <ContactSection />
      <LeadGeneration />
    </div>
  );
}
