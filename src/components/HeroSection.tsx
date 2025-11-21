import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// import heroImage from "@/assets/hero-chains-breaking.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden starfield">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-freedom-blue rounded-full particle-drift"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Main visual */}
          {/* <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <img
              src={heroImage}
              alt="AI Freedom - Breaking chains of corporate control"
              className="w-full max-w-4xl mx-auto rounded-lg animate-float electric-pulse"
            />
          </div> */}

          {/* Main headline */}
          <div className="space-y-6">
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none"
              data-text="AI THAT'S ALSO KNOWN AS FREEDOM"
            >
              <span className="block bg-gradient-to-r from-freedom-blue via-freedom-blue to-foreground bg-clip-text text-transparent glow-freedom chromatic-text">
                AI THAT'S ALSO
              </span>
              <span className="block bg-gradient-to-r from-freedom-blue via-foreground to-freedom-blue bg-clip-text text-transparent glow-freedom chromatic-text">
                KNOWN AS FREEDOM
              </span>
            </h1>

            <p className="text-xl md:text-3xl text-foreground/90 max-w-4xl mx-auto font-light leading-relaxed">
              Your thoughts stay yours. No servers. No spying. No betrayal. Ever.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a href="mailto:andro@akalabs.io">
              <Button
                size="lg"
                className="text-xl px-12 py-8 bg-gradient-to-r from-rebel-red to-[hsl(var(--rebel-red-end))] hover:from-[hsl(var(--rebel-red-end))] hover:to-rebel-red text-foreground font-bold uppercase tracking-wider shadow-2xl hover:shadow-rebel-red/50 transition-all duration-300 hover:scale-105 glow-rebel group"
              >
                Claim Sovereignty Now
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/donate">
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-8 border-2 border-freedom-blue text-freedom-blue hover:bg-freedom-blue/10 font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                Support the Project
              </Button>
            </a>
          </div>

          {/* Scroll indicator */}
          {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-freedom-blue rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-freedom-blue rounded-full animate-pulse" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
