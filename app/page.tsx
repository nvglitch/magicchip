import HeroBanner from "@/components/HeroBanner";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProduct from "@/components/FeaturedProduct";
import LeadGeneration from "@/components/LeadGeneration";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import { getAllBanners, getAllProducts, getSiteConfig } from "@/lib/content-loader";

export default function Home() {
  const banners = getAllBanners();
  const products = getAllProducts();
  const siteConfig = getSiteConfig();

  return (
    <div>
      <HeroBanner banners={banners} />
      <ProductCategories products={products} />
      <FeaturedProduct />
      <Services />
      <SocialProof />
      <ContactSection siteConfig={siteConfig} />
      <LeadGeneration />
    </div>
  );
}
