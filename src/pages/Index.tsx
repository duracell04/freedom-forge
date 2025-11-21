import { HeroSection } from "@/components/HeroSection";
import { FullManifesto } from "@/components/ManifestoSection";
import { BlockchainSection } from "@/components/BlockchainSection";
import { PCRevolutionSection } from "@/components/PCRevolutionSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Footer } from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="relative">
      <HeroSection />
      <FullManifesto />
      <BlockchainSection />
      <PCRevolutionSection />
      <FeaturesGrid />
      <Footer />
    </div>
  );
};

export default HomePage;
