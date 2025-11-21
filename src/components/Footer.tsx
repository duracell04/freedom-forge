import { Card } from "@/components/ui/card";

export const Footer = () => {
  return (
    <footer className="relative py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
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
