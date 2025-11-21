import { Card } from "@/components/ui/card";
import { Smartphone, Lock, Shield, Link2, Cpu, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const FeaturesGrid = () => {
  const headerAnim = useScrollAnimation({ threshold: 0.2 });
  const gridAnim = useScrollAnimation({ threshold: 0.1 });
  
  const features = [
    {
      icon: Smartphone,
      title: "Local First",
      description: "Full AI power runs on your device. Airplane mode? No problem.",
      color: "freedom-blue",
    },
    {
      icon: Lock,
      title: "Privacy by Math",
      description: "Zero-knowledge architecture. Even we can't see your data.",
      color: "freedom-blue",
    },
    {
      icon: Shield,
      title: "Own It Forever",
      description: "Buy once. No subscriptions. No expiration. True ownership.",
      color: "freedom-blue",
    },
    {
      icon: Link2,
      title: "Blockchain Anti-Monopoly",
      description: "Mathematically impossible for any entity to control. Ever.",
      color: "freedom-blue",
    },
    {
      icon: Cpu,
      title: "Personal Computer 2.0",
      description: "We're doing for AI what Apple did for computing in 1984.",
      color: "freedom-blue",
    },
    {
      icon: Globe,
      title: "Universal Access",
      description: "Intelligence is a human right, not an elite privilege.",
      color: "freedom-blue",
    },
  ];

  return (
    <section className="parallax-section">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div ref={headerAnim.ref} className={`text-center mb-16 animate-on-scroll ${headerAnim.isVisible ? 'visible' : ''}`}>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 text-foreground">
              Why AKAFreedom Matters
            </h2>
            <p className="text-xl text-titanium">
              Six principles that change everything
            </p>
          </div>

          <div ref={gridAnim.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`bg-card/50 backdrop-blur-sm border-freedom-blue/20 hover:border-freedom-blue/60 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-freedom-blue/20 group animate-on-scroll stagger-${Math.min(index + 1, 6)} ${gridAnim.isVisible ? 'visible' : ''}`}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-lg bg-freedom-blue/10 flex items-center justify-center group-hover:bg-freedom-blue/20 transition-colors">
                    <feature.icon className={`w-10 h-10 text-${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
