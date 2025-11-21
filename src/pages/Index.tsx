import { HeroSection } from "@/components/HeroSection";
import { FullManifesto } from "@/components/ManifestoSection";
import { BlockchainSection } from "@/components/BlockchainSection";
import { PCRevolutionSection } from "@/components/PCRevolutionSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Full Manifesto (Sections 1-13) */}
      <FullManifesto />

      {/* Section 14: Blockchain Governance */}
      <BlockchainSection />

      {/* Section 15: PC Revolution 2.0 */}
      <PCRevolutionSection />

      {/* Feature Grid */}
      <FeaturesGrid />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
