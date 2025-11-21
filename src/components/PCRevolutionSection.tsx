import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Smartphone } from "lucide-react";
// import pcImage from "@/assets/pc-revolution.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { NavLink } from "@/components/NavLink";

export const PCRevolutionSection = () => {
  const headerAnim = useScrollAnimation({ threshold: 0.2 });
  const imageAnim = useScrollAnimation({ threshold: 0.3 });
  const timelineAnim = useScrollAnimation({ threshold: 0.2 });
  const quoteAnim = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="parallax-section relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div ref={headerAnim.ref} className={`text-center mb-16 animate-on-scroll ${headerAnim.isVisible ? 'visible' : ''}`}>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 text-foreground">
              The Personal Computer Revolution, Again
            </h2>
            <p className="text-2xl text-titanium mb-4">
              From planet-sized machines to something you own and carry
            </p>
          </div>

          {/* Split timeline visual */}
          {/* <div ref={imageAnim.ref} className={`relative mb-16 animate-on-scroll-scale ${imageAnim.isVisible ? 'visible' : ''}`}>
            <img
              src={pcImage}
              alt="Evolution from mainframe to personal AI"
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg" />
          </div> */}

          {/* Timeline comparison */}
          <div ref={timelineAnim.ref} className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Mainframe Era */}
            <Card className={`bg-secondary/30 border-titanium/30 p-8 flex flex-col items-center justify-center text-center animate-on-scroll-left ${timelineAnim.isVisible ? 'visible' : ''}`}>
              <Cpu className="w-16 h-16 text-titanium mb-6" />
              <h3 className="text-2xl font-bold mb-8 text-foreground">The Mainframe Era</h3>
              <div className="text-xl text-titanium font-bold">
                Giant Corporate Infrastructure
              </div>
            </Card>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-24 h-24 text-freedom-blue animate-pulse" />
            </div>

            {/* Personal AI Era */}
            <Card className={`bg-freedom-blue/10 border-freedom-blue/30 p-8 relative flex flex-col items-center justify-center text-center animate-on-scroll-right ${timelineAnim.isVisible ? 'visible' : ''}`}>
              <div className="absolute top-4 right-4 text-sm text-freedom-blue font-bold">2025+</div>
              <Smartphone className="w-16 h-16 text-freedom-blue mb-6" />
              <h3 className="text-2xl font-bold mb-8 text-foreground">The Personal AI Era</h3>
              <div className="text-xl text-freedom-blue font-bold">
                Personal Intelligence
              </div>
            </Card>
          </div>

          {/* Center quote */}
          <Card ref={quoteAnim.ref} className={`bg-card/50 backdrop-blur-sm border-freedom-blue/30 p-12 text-center animate-on-scroll-scale ${quoteAnim.isVisible ? 'visible' : ''}`}>
            <blockquote className="text-3xl md:text-5xl font-black leading-tight text-foreground mb-6">
              "Mainframes → PCs.<br/>
              Superclusters → your pocket.<br/>
              Time to make AI personal and untouchable.<br/>
              AKAFreedom. Now."
            </blockquote>
            <p className="text-xl text-freedom-blue">— The AKAFreedom</p>
          </Card>

          {/* Historical parallels */}
          <div className="mt-16 space-y-6">
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">History Repeating (On Purpose)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-secondary/20 border-border p-6">
                <h4 className="text-xl font-bold mb-3 text-titanium">1970s: "Computers are for corporations"</h4>
                <p className="text-foreground/70">Then came Apple, Commodore, IBM PC. Computing became personal.</p>
              </Card>
              <Card className="bg-freedom-blue/10 border-freedom-blue/30 p-6">
                <h4 className="text-xl font-bold mb-3 text-freedom-blue">2025: "AI is for tech giants"</h4>
                <p className="text-foreground/90">Now comes AKA8. Intelligence becomes personal.</p>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <NavLink to="/pc-revolution">
                <Button 
                  variant="link"
                  className="text-lg text-freedom-blue/80 hover:text-freedom-blue underline-offset-4"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
