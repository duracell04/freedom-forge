import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Shield, Scale, Users, Lock, TrendingDown, AlertTriangle, CheckCircle2, Waves } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Governance = () => {
  const heroAnim = useScrollAnimation({ threshold: 0.2 });
  const howItWorksAnim = useScrollAnimation({ threshold: 0.3 });
  const whaleProtectionAnim = useScrollAnimation({ threshold: 0.3 });
  const tokenomicsAnim = useScrollAnimation({ threshold: 0.3 });
  const guaranteesAnim = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <NavLink href="/" className="text-2xl font-bold text-freedom-blue">
            AKAFreedom
          </NavLink>
          <div className="flex gap-6">
            <NavLink href="/" className="text-foreground/80 hover:text-freedom-blue transition-colors">
              Home
            </NavLink>
            <NavLink href="/manifesto" className="text-foreground/80 hover:text-freedom-blue transition-colors">
              Manifesto
            </NavLink>
            <NavLink href="/governance" className="text-freedom-blue font-semibold">
              Governance
            </NavLink>
            <NavLink href="/donate" className="text-foreground/80 hover:text-freedom-blue transition-colors">
              Donate
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <NavLink href="/">
          <Button variant="ghost" className="mb-8 text-freedom-blue hover:text-freedom-blue/80">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Button>
        </NavLink>

        <div ref={heroAnim.ref} className={`text-center mb-20 max-w-4xl mx-auto animate-on-scroll ${heroAnim.isVisible ? "visible" : ""}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-freedom-blue to-primary bg-clip-text text-transparent">
            Blockchain Governance System
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">Mathematically guaranteed decentralization through influence tokens</p>
          <div className="flex items-center justify-center gap-3 text-freedom-blue font-mono text-lg">
            <Shield className="w-6 h-6" />
            <span>Anti-Oligarchy Protocol Active</span>
          </div>
        </div>

        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-freedom-blue/30 bg-card/50">
              <CardHeader>
                <Scale className="w-10 h-10 text-freedom-blue mb-4" />
                <CardTitle>True Decentralization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ownership managed by blockchain — distributed, transparent, and immutable.</p>
              </CardContent>
            </Card>

            <Card className="border-freedom-blue/30 bg-card/50">
              <CardHeader>
                <Lock className="w-10 h-10 text-freedom-blue mb-4" />
                <CardTitle>Uncapturable DAO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Cannot be acquired, sold, or compromised. Legally structured for permanence.</p>
              </CardContent>
            </Card>

            <Card className="border-freedom-blue/30 bg-card/50">
              <CardHeader>
                <Users className="w-10 h-10 text-freedom-blue mb-4" />
                <CardTitle>Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Power distributed among many, preventing any single entity from control.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section ref={howItWorksAnim.ref} className={`mb-20 animate-on-scroll ${howItWorksAnim.isVisible ? "visible" : ""}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">How Influence Tokens Work</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-freedom-blue/30 bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-freedom-blue">01</span>
                  Token Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4">
                  Influence tokens represent voting power in the AKAFreedom ecosystem. They are distributed to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Early Contributors:</strong> Developers, designers, and community builders
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Community Members:</strong> Active participants who help grow the ecosystem
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Donors & Supporters:</strong> Those who financially support the project
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Future Participants:</strong> New members joining the movement
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-freedom-blue/30 bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-freedom-blue">02</span>
                  Voting Power
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4">Each token grants voting rights on critical decisions:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>Protocol upgrades and feature additions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>Treasury fund allocation and spending</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>Partnership and integration approvals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>Governance rule modifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-freedom-blue/30 bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-freedom-blue">03</span>
                  Smart Contract Enforcement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  All governance rules are enforced by immutable smart contracts on the blockchain. No human intervention can override the protocol. The code is law, and the law protects decentralization.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section ref={whaleProtectionAnim.ref} className={`mb-20 animate-on-scroll ${whaleProtectionAnim.isVisible ? "visible" : ""}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">Anti-Oligarchy Protocol</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            The system mathematically prevents any single entity from accumulating too much power.
          </p>

          <div className="max-w-5xl mx-auto">
            <Card className="border-rebel-red/40 bg-card/50 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">The Whale Protection Mechanism</CardTitle>
                <CardDescription className="text-center text-lg">Automatic redistribution when concentration exceeds safe thresholds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 p-6 bg-muted/20 rounded-lg border border-border/30">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-freedom-blue/20 rounded-full flex items-center justify-center">
                        <Waves className="w-8 h-8 text-freedom-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Step 1: Whale Attempts Accumulation</h3>
                      <p className="text-muted-foreground">
                        A large entity (corporation, billionaire, investment fund) starts buying tokens to gain majority control.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 p-6 bg-muted/20 rounded-lg border border-border/30">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-rebel-red/20 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-8 h-8 text-rebel-red" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Step 2: Auto-Detection Triggers</h3>
                      <p className="text-muted-foreground mb-3">
                        Smart contracts continuously monitor token distribution. When any single address exceeds{" "}
                        <strong className="text-freedom-blue">15% concentration</strong>, the protocol activates.
                      </p>
                      <div className="bg-background/50 p-4 rounded border border-freedom-blue/30 font-mono text-sm">
                        if (holderPercentage &gt; 15%) {"{"} triggerRedistribution(); {"}"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 p-6 bg-muted/20 rounded-lg border border-border/30">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-freedom-blue/20 rounded-full flex items-center justify-center">
                        <TrendingDown className="w-8 h-8 text-freedom-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Step 3: Instant Redistribution</h3>
                      <p className="text-muted-foreground mb-3">Excess tokens above the threshold are automatically:</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-freedom-blue">•</span>
                          <span>
                            <strong>Devalued:</strong> Their voting power drops to 0%
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-freedom-blue">•</span>
                          <span>
                            <strong>Redistributed:</strong> Excess tokens spread to community members
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-freedom-blue">•</span>
                          <span>
                            <strong>Locked:</strong> The whale can't sell or transfer devalued tokens
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-8 bg-gradient-to-r from-freedom-blue/10 to-primary/10 rounded-lg border-2 border-freedom-blue/50 text-center">
                    <h3 className="text-2xl font-bold mb-3 text-freedom-blue">Mathematical Guarantee</h3>
                    <p className="text-xl">
                      Even if BlackRock buys 99% of tokens, their voting power ={" "}
                      <strong className="text-3xl text-freedom-blue">0%</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section ref={tokenomicsAnim.ref} className={`mb-20 animate-on-scroll ${tokenomicsAnim.isVisible ? "visible" : ""}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">Token Distribution Model</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-freedom-blue/30 bg-card/50">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div>
                      <h4 className="font-bold text-lg">Community & Contributors</h4>
                      <p className="text-sm text-muted-foreground">Active participants and builders</p>
                    </div>
                    <div className="text-3xl font-bold text-freedom-blue">40%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div>
                      <h4 className="font-bold text-lg">Development Treasury</h4>
                      <p className="text-sm text-muted-foreground">Funding ongoing development</p>
                    </div>
                    <div className="text-3xl font-bold text-freedom-blue">30%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div>
                      <h4 className="font-bold text-lg">Early Supporters & Donors</h4>
                      <p className="text-sm text-muted-foreground">Those who believed first</p>
                    </div>
                    <div className="text-3xl font-bold text-freedom-blue">20%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div>
                      <h4 className="font-bold text-lg">Future Distribution</h4>
                      <p className="text-sm text-muted-foreground">Reserved for ecosystem growth</p>
                    </div>
                    <div className="text-3xl font-bold text-freedom-blue">10%</div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-freedom-blue/10 rounded-lg border border-freedom-blue/30">
                  <p className="text-center text-muted-foreground">
                    <strong className="text-foreground">No single allocation exceeds 15%</strong> to any individual or entity, ensuring decentralization from day one.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section ref={guaranteesAnim.ref} className={`mb-20 animate-on-scroll ${guaranteesAnim.isVisible ? "visible" : ""}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">Uncapturable by Design</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="border-freedom-blue/30 bg-card/50">
              <CardHeader>
                <Lock className="w-10 h-10 text-freedom-blue mb-4" />
                <CardTitle>Legal Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>Registered as a non-profit DAO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>No CEO, no board, no single point of control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>Cannot be acquired or sold</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>Treasury controlled by smart contracts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-freedom-blue/30 bg-card/50">
              <CardHeader>
                <Shield className="w-10 h-10 text-freedom-blue mb-4" />
                <CardTitle>Technical Enforcement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>Open-source smart contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>Audited by independent security firms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>Immutable on-chain governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>Decentralized node network</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="border-rebel-red/40 bg-gradient-to-br from-rebel-red/5 to-freedom-blue/5 max-w-3xl mx-auto">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-3xl font-bold mb-4">No Kings. No Overlords.</h3>
                <p className="text-xl text-muted-foreground mb-6">
                  The system is designed to be permanent, decentralized, and resistant to capture by any entity — corporate, governmental, or individual.
                </p>
                <p className="text-2xl font-bold text-freedom-blue">This is freedom by mathematics.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Decentralized Future</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contribute to the project and earn influence tokens. Help build a future where AI serves humanity, not corporations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink href="/donate">
              <Button size="lg" className="text-lg px-8 py-6">
                Support & Earn Tokens
              </Button>
            </NavLink>
            <NavLink href="/manifesto">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-freedom-blue text-freedom-blue hover:bg-freedom-blue/10">
                Read Full Manifesto
              </Button>
            </NavLink>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Governance;
