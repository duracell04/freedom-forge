import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Cpu, Users, Zap, Globe, TrendingUp, Clock, Heart, FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "warning" | "success";
}

const ManifestoSection = ({ title, children, variant = "default" }: SectionProps) => {
  const variantClasses = {
    default: "border-border bg-card/50",
    warning: "border-rebel-red/30 bg-rebel-red/5",
    success: "border-freedom-blue/30 bg-freedom-blue/5",
  };

  return (
    <div className="parallax-section">
      <div className="container mx-auto px-6">
        <div className={`max-w-5xl mx-auto border ${variantClasses[variant]} backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-2xl animate-slide-up`}>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 text-foreground">
            {title}
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FullManifesto = () => {
  return (
    <div className="relative">
      {/* Section 1: Personal Note */}
      <ManifestoSection title="A Personal Note">
        <Card className="bg-secondary/50 border-freedom-blue/30 p-8">
          <p className="text-2xl md:text-3xl font-serif italic text-foreground">
            "I watched OpenAI become ClosedAI. I'm building the alternative."
          </p>
          <p className="mt-4 text-titanium">— Andro Kasrashvili (AKA)</p>
        </Card>
        <div className="mt-8 text-center">
          <Link to="/manifesto">
            <Button variant="outline" className="border-freedom-blue/30 text-freedom-blue hover:bg-freedom-blue/10 gap-2">
              <FileText className="w-5 h-5" />
              Read Full Manifesto
            </Button>
          </Link>
        </div>
      </ManifestoSection>

      {/* Section 2: The Problem */}
      <ManifestoSection title="The Problem We Face" variant="warning">
        <h3 className="text-3xl font-bold text-rebel-red mb-6">We're Living in AI Feudalism</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Shield, text: "Your conversations become their training data" },
            { icon: Lock, text: "Your thoughts locked behind their paywalls" },
            { icon: Cpu, text: "Your intelligence rented, never owned" },
          ].map((item, i) => (
            <Card key={i} className="bg-rebel-red/10 border-rebel-red/30 p-6 text-center">
              <item.icon className="w-12 h-12 mx-auto mb-4 text-rebel-red" />
              <p className="text-foreground/90">{item.text}</p>
            </Card>
          ))}
        </div>
      </ManifestoSection>

      {/* Section 3: The Cost */}
      <ManifestoSection title="The Cost Is Higher Than We Realize">
        <div className="space-y-8">
          <div>
            <h4 className="text-2xl font-bold text-freedom-blue mb-3">For Individuals</h4>
            <p>Your private thoughts, your personal struggles, your creative process — all harvested, analyzed, and monetized by companies you can't hold accountable.</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-freedom-blue mb-3">For Professionals</h4>
            <p>Lawyers can't use AI for client cases. Therapists can't use it for patient notes. Journalists can't use it for source protection. The tools that could help us most are the ones we can't trust.</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-freedom-blue mb-3">For Humanity</h4>
            <p>We're creating a future where thinking requires permission from a handful of corporations. Where cognitive tools are privileges, not rights.</p>
          </div>
        </div>
      </ManifestoSection>

      {/* Section 4: The Alternative */}
      <ManifestoSection title="The Alternative We're Building" variant="success">
        <h3 className="text-3xl font-bold text-freedom-blue mb-6">Cognitive Sovereignty</h3>
        <p className="text-2xl mb-6">
          AKA8 runs entirely on your device. Your phone. Your laptop. Your hardware. Your mind stays yours.
        </p>
        <div className="bg-card/30 border border-freedom-blue/30 rounded-lg p-6 text-center">
          <p className="text-xl font-mono text-freedom-blue">
            ✈️ Airplane mode: ON<br />
            🔒 Data leaving device: ZERO<br />
            🧠 Your thoughts: YOURS
          </p>
        </div>
      </ManifestoSection>

      {/* Section 5: Our Principles */}
      <ManifestoSection title="Our Principles">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Cpu, title: "Local First, Cloud Optional", desc: "Runs on your device. Cloud only when you choose." },
            { icon: Shield, title: "Privacy by Design", desc: "Not by policy. By mathematics." },
            { icon: Lock, title: "Ownership, Not Rental", desc: "Buy it once. Own it forever." },
            { icon: Globe, title: "Transparency, Not Trust", desc: "Open source. Auditable. Verifiable." },
            { icon: Zap, title: "Augmentation, Not Replacement", desc: "Amplifies human intelligence." },
            { icon: Users, title: "Universal Access", desc: "Not elite privilege." },
          ].map((principle, i) => (
            <Card key={i} className="bg-secondary/30 border-freedom-blue/20 p-6">
              <principle.icon className="w-10 h-10 text-freedom-blue mb-4" />
              <h4 className="text-xl font-bold mb-2 text-foreground">{principle.title}</h4>
              <p className="text-foreground/70">{principle.desc}</p>
            </Card>
          ))}
        </div>
      </ManifestoSection>

      {/* Section 6: The Path Forward */}
      <ManifestoSection title="The Path Forward">
        <div className="space-y-8">
          {[
            { phase: "Phase 1", title: "Foundation", desc: "AKA8 on-device AI available now" },
            { phase: "Phase 2", title: "Expansion", desc: "Multi-platform support & professional tools" },
            { phase: "Phase 3", title: "Ecosystem", desc: "Developer APIs & community plugins" },
            { phase: "Phase 4", title: "Revolution", desc: "Cognitive sovereignty becomes the norm" },
          ].map((phase, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-freedom-blue to-secondary flex items-center justify-center text-2xl font-black">
                {i + 1}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-freedom-blue mb-2">{phase.phase}: {phase.title}</h4>
                <p className="text-foreground/80">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ManifestoSection>

      {/* Section 7: Why This Matters */}
      <ManifestoSection title="Why This Matters" variant="warning">
        <div className="space-y-6">
          <p className="text-2xl font-bold text-rebel-red">
            <Clock className="inline w-8 h-8 mr-2" />
            The Window Is Closing
          </p>
          <p>
            Right now, AI is being centralized. Locked down. Turned into a surveillance and control mechanism. 
            In five years, it might be too late to build an alternative.
          </p>
          <p className="text-xl font-bold text-foreground">
            We have one chance to get this right. This is it.
          </p>
        </div>
      </ManifestoSection>

      {/* Section 8: The Movement */}
      <ManifestoSection title="The Movement We're Building">
        <p className="text-xl mb-6">
          This isn't just a product. It's a movement for cognitive sovereignty. Join millions who refuse to rent their minds.
        </p>
        <div className="bg-card/30 rounded-lg p-8 text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-4 text-freedom-blue" />
          <p className="text-3xl font-black text-foreground mb-2">Freedom Is Contagious</p>
          <p className="text-titanium">Every person who chooses sovereignty makes it easier for the next.</p>
        </div>
      </ManifestoSection>

      {/* Section 9: How You Can Help */}
      <ManifestoSection title="How You Can Help" variant="success">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { role: "Developers", action: "Build plugins. Contribute code. Shape the future." },
            { role: "Professionals", action: "Use AKA8 in your work. Prove sovereignty works." },
            { role: "Everyone", action: "Choose cognitive sovereignty. Spread the word." },
            { role: "Enterprises", action: "Deploy on-premise AI. Own your intelligence." },
          ].map((item, i) => (
            <Card key={i} className="bg-freedom-blue/10 border-freedom-blue/30 p-6">
              <h4 className="text-xl font-bold mb-3 text-freedom-blue">{item.role}</h4>
              <p className="text-foreground/80">{item.action}</p>
            </Card>
          ))}
        </div>
      </ManifestoSection>

      {/* Section 10: Technical & Economic */}
      <ManifestoSection title="The Technical Commitment">
        <div className="space-y-6">
          <div className="bg-card/50 border-2 border-freedom-blue rounded-lg p-8">
            <h4 className="text-2xl font-bold text-freedom-blue mb-4">Always Free → Never Compromised → Forever Sovereign</h4>
            <ul className="space-y-3 text-lg">
              <li>✓ Core on-device AI: Free forever</li>
              <li>✓ Optional cloud bridge: Pay once, use forever</li>
              <li>✓ No subscriptions, no data harvesting, no betrayal</li>
              <li>✓ Open source: Audit everything</li>
            </ul>
          </div>
        </div>
      </ManifestoSection>

      {/* Section 11: Long Vision */}
      <ManifestoSection title="The Long Vision">
        <div className="space-y-8">
          <div>
            <h4 className="text-2xl font-bold text-freedom-blue mb-3">2030</h4>
            <p>On-device AI is as common as smartphones. Privacy is expected, not exceptional.</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-freedom-blue mb-3">2035</h4>
            <p>Cloud AI is seen as legacy technology. Quaint. Like using a mainframe for email.</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-freedom-blue mb-3">2040</h4>
            <p>Children learn about "the time when people sent their thoughts to corporations" the way we learned about telephone operators. They can't imagine it was ever different.</p>
          </div>
        </div>
      </ManifestoSection>

      {/* Section 12: Personal Commitment */}
      <ManifestoSection title="A Personal Commitment">
        <Card className="bg-secondary/50 border-freedom-blue/30 p-8">
          <Heart className="w-16 h-16 mx-auto mb-6 text-rebel-red" />
          <p className="text-xl mb-6 text-center">
            This project can never be acquired. My initials are my bond. AKAFreedom will remain free, private, and sovereign — or cease to exist.
          </p>
          <p className="text-right text-2xl font-bold text-freedom-blue">— AKA</p>
        </Card>
      </ManifestoSection>

      {/* Section 13: Three Laws */}
      <ManifestoSection title="The Three Laws of AKAFreedom" variant="success">
        <div className="space-y-8">
          {[
            { num: "I", law: "Your data never leaves your device without your explicit, informed consent." },
            { num: "II", law: "You own what you create. Forever. No exceptions." },
            { num: "III", law: "This project serves humanity, not shareholders. It cannot be sold, acquired, or compromised." },
          ].map((law, i) => (
            <div key={i} className="bg-card/30 border-2 border-freedom-blue rounded-lg p-8">
              <div className="text-6xl font-black text-freedom-blue mb-4">{law.num}</div>
              <p className="text-2xl text-foreground">{law.law}</p>
            </div>
          ))}
        </div>
      </ManifestoSection>
    </div>
  );
};
