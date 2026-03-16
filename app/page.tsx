import HeroBanner from "@/components/HeroBanner";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProduct from "@/components/FeaturedProduct";
import LeadGeneration from "@/components/LeadGeneration";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import { getAllBanners, getAllProducts } from "@/lib/content-loader";

export default function Home() {
  const banners = getAllBanners();
  const products = getAllProducts();

  return (
    <div>
      <HeroBanner banners={banners} />
      <ProductCategories products={products} />
      <FeaturedProduct />
      <Services />
      <SocialProof />
      <ContactSection />
      <LeadGeneration />
    </div>
  );
}
