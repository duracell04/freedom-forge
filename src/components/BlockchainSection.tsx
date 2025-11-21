import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, TrendingDown, ArrowRight } from "lucide-react";
// import blockchainImage from "@/assets/blockchain-governance.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { NavLink } from "@/components/NavLink";

export const BlockchainSection = () => {
  const headerAnim = useScrollAnimation({ threshold: 0.2 });
  const imageAnim = useScrollAnimation({ threshold: 0.3 });
  const protocolAnim = useScrollAnimation({ threshold: 0.2 });
  const cardsAnim = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="parallax-section relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div ref={headerAnim.ref} className={`text-center mb-16 animate-on-scroll ${headerAnim.isVisible ? 'visible' : ''}`}>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 text-foreground">
              Decentralized Ownership via Blockchain
            </h2>
            <p className="text-2xl text-freedom-blue font-bold mb-4">
              Ownership of AKA8 is managed by blockchain — truly decentralized, forever.
            </p>
          </div>

          {/* Visual */}
          {/* <div ref={imageAnim.ref} className={`relative mb-16 animate-on-scroll-scale ${imageAnim.isVisible ? 'visible' : ''}`}>
            <img
              src={blockchainImage}
              alt="Blockchain anti-oligarchy protocol"
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg" />
          </div> */}

          {/* Anti-Oligarchy Protocol */}
          <Card ref={protocolAnim.ref} className={`bg-card/50 backdrop-blur-sm border-rebel-red/30 p-8 md:p-12 mb-12 animate-on-scroll-large ${protocolAnim.isVisible ? 'visible' : ''}`}>
            <div className="flex items-start gap-6 mb-8">
              <AlertTriangle className="w-16 h-16 text-rebel-red flex-shrink-0" />
              <div>
                <h3 className="text-3xl font-black text-rebel-red mb-4">Anti-Oligarchy Protocol Activated</h3>
                <p className="text-xl text-foreground/90 mb-6">
                  Even if one entity buys 99% of governance tokens, the system mathematically prevents monopoly.
                </p>
              </div>
            </div>

            {/* Animation sequence */}
            <div ref={cardsAnim.ref} className="grid md:grid-cols-3 gap-6">
              <Card className={`bg-secondary/30 border-rebel-red/20 p-6 text-center animate-on-scroll stagger-1 ${cardsAnim.isVisible ? 'visible' : ''}`}>
                <div className="text-4xl mb-4">🐋</div>
                <h4 className="text-lg font-bold mb-2 text-foreground">Whale Attempts Accumulation</h4>
                <p className="text-sm text-foreground/70">Large entity tries to buy majority tokens</p>
              </Card>

              <Card className={`bg-secondary/30 border-rebel-red/20 p-6 text-center animate-on-scroll stagger-2 ${cardsAnim.isVisible ? 'visible' : ''}`}>
                <TrendingDown className="w-12 h-12 mx-auto mb-4 text-rebel-red" />
                <h4 className="text-lg font-bold mb-2 text-foreground">Auto-Detection Triggers</h4>
                <p className="text-sm text-foreground/70">System detects concentration &gt;15%</p>
              </Card>

              <Card className={`bg-secondary/30 border-freedom-blue/20 p-6 text-center animate-on-scroll stagger-3 ${cardsAnim.isVisible ? 'visible' : ''}`}>
                <div className="text-4xl mb-4">💥</div>
                <h4 className="text-lg font-bold mb-2 text-freedom-blue">Instant Redistribution</h4>
                <p className="text-sm text-foreground/70">Excess tokens devalue & redistribute</p>
              </Card>
            </div>
          </Card>

          {/* Key guarantees */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-freedom-blue/10 border-freedom-blue/30 p-8">
              <Shield className="w-12 h-12 text-freedom-blue mb-4" />
              <h4 className="text-2xl font-bold mb-3 text-foreground">No Kings. No Overlords.</h4>
              <p className="text-foreground/80">
                Mathematical guarantees prevent centralization. Even if BlackRock tries to buy 99%, the protocol reduces their voting power to 0%.
              </p>
            </Card>

            <Card className="bg-freedom-blue/10 border-freedom-blue/30 p-8">
              <Shield className="w-12 h-12 text-freedom-blue mb-4" />
              <h4 className="text-2xl font-bold mb-3 text-foreground">No Takeover. Ever.</h4>
              <p className="text-foreground/80">
                Legally structured as an uncapturable DAO. Cannot be acquired, cannot be sold, cannot be compromised.
              </p>
            </Card>
          </div>

          {/* Bottom tagline */}
          <div className="text-center mt-16">
            <p className="text-3xl font-black text-freedom-blue mb-8">
              No oligarchy possible. Ever.
            </p>
            <NavLink to="/governance">
              <Button 
                variant="link"
                className="text-lg text-freedom-blue/80 hover:text-freedom-blue underline-offset-4"
              >
                Read More About Governance
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
