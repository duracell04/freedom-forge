import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Heart } from "lucide-react";

export const Footer = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <footer className="relative py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`max-w-4xl mx-auto text-center space-y-8 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          {/* Main commitment */}
          <Card className="bg-card/30 backdrop-blur-sm border-freedom-blue/30 p-12">
            <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              "This project can never be acquired. My initials are my bond."
            </p>
            <p className="text-xl text-freedom-blue">— AKA</p>
          </Card>

          {/* Hashtags */}
          <div className="flex flex-wrap justify-center gap-4 text-titanium">
            <span className="hover:text-freedom-blue transition-colors cursor-pointer">#CognitiveSovereignty</span>
            <span className="hover:text-freedom-blue transition-colors cursor-pointer">#AlsoKnownAsFreedom</span>
            <span className="hover:text-freedom-blue transition-colors cursor-pointer">#YourAIYourControl</span>
            <span className="hover:text-freedom-blue transition-colors cursor-pointer">#NoAIFeudalism</span>
          </div>

          {/* Support CTA */}
          <div className="pt-8">
            <a href="/donate">
              <Button
                size="lg"
                className="text-lg px-10 py-6 bg-gradient-to-r from-freedom-blue to-primary hover:from-primary hover:to-freedom-blue font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                <Heart className="mr-2" />
                Support the Project
              </Button>
            </a>
          </div>

          {/* Easter egg hint */}
          <div className="pt-8 text-sm text-titanium/50">
            <p>Built for freedom. Forever.</p>
          </div>

          {/* Hidden Mars Easter egg */}
          <div className="pt-4">
            <button
              onClick={() => alert('🚀 To Mars and Cognitive Freedom 🚀')}
              className="text-xs text-titanium/30 hover:text-freedom-blue transition-colors"
              aria-label="Mars Easter egg"
            >
              🔴
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
