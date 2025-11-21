import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { ArrowLeft, Building2, Smartphone, Cpu, Users, Clock, TrendingUp, Zap, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import pcRevolutionImage from "@/assets/pc-revolution.jpg";

const PCRevolution = () => {
  const heroAnim = useScrollAnimation({ threshold: 0.2 });
  const mainframeAnim = useScrollAnimation({ threshold: 0.3 });
  const revolutionAnim = useScrollAnimation({ threshold: 0.3 });
  const parallelsAnim = useScrollAnimation({ threshold: 0.3 });
  const futureAnim = useScrollAnimation({ threshold: 0.3 });

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
            <NavLink href="/governance" className="text-foreground/80 hover:text-freedom-blue transition-colors">
              Governance
            </NavLink>
            <NavLink href="/pc-revolution" className="text-freedom-blue font-semibold">
              PC Revolution
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

        <div ref={heroAnim.ref} className={`text-center mb-20 max-w-5xl mx-auto animate-on-scroll ${heroAnim.isVisible ? "visible" : ""}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-freedom-blue to-primary bg-clip-text text-transparent">
            The Personal Computer Revolution, Again
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">From planet-sized machines to something you own and carry</p>
          <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden">
            <Image src={pcRevolutionImage} alt="The evolution from mainframes to personal computers" className="w-full" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>

        <section ref={mainframeAnim.ref} className={`mb-20 animate-on-scroll ${mainframeAnim.isVisible ? "visible" : ""}`}>
          <h2 className="text-4xl font-bold mb-12 text-center">Chapter 1: The Mainframe Era</h2>

          <div className="max-w-5xl mx-auto">
            <Card className="border-muted/40 bg-card/50 mb-8">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="w-12 h-12 text-muted-foreground" />
                  <div>
                    <CardTitle className="text-3xl">1960s - 1970s</CardTitle>
                    <p className="text-muted-foreground">Computing was for corporations only</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">The Reality</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-rebel-red text-2xl">•</span>
                        <span>
                          <strong>Room-sized machines:</strong> Computers filled entire floors, required massive cooling systems
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-rebel-red text-2xl">•</span>
                        <span>
                          <strong>Corporate monopoly:</strong> Only large companies and universities could afford access
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-rebel-red text-2xl">•</span>
                        <span>
                          <strong>Rent, never own:</strong> Time-sharing systems where you paid by the minute
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-rebel-red text-2xl">•</span>
                        <span>
                          <strong>Expert operators required:</strong> Only trained specialists could interact with machines
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">What They Said</h3>
                    <Card className="bg-muted/20 border-muted/40 p-6">
                      <p className="text-lg italic text-muted-foreground mb-4">
                        "There is no reason anyone would want a computer in their home."
                      </p>
                      <p className="text-sm text-muted-foreground">— Ken Olsen, Founder of Digital Equipment Corporation, 1977</p>
                    </Card>
                    <Card className="bg-muted/20 border-muted/40 p-6">
                      <p className="text-lg italic text-muted-foreground mb-4">
                        "I think there is a world market for maybe five computers."
                      </p>
                      <p className="text-sm text-muted-foreground">— Thomas Watson, IBM Chairman, 1943</p>
                    </Card>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-rebel-red/10 border border-rebel-red/30 rounded-lg">
                  <p className="text-lg text-center">
                    <strong className="text-foreground">Computing was a privilege, not a right.</strong> If you wanted to use a computer, you needed corporate permission,
                    deep pockets, or institutional access.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section ref={revolutionAnim.ref} className={`mb-20 animate-on-scroll ${revolutionAnim.isVisible ? "visible" : ""}`}>
          <h2 className="text-4xl font-bold mb-12 text-center">Chapter 2: The Revolution Begins</h2>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-freedom-blue/30" />

              <div className="space-y-8">
                <div className="relative pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-freedom-blue/20 rounded-full flex items-center justify-center border-4 border-background">
                    <Clock className="w-8 h-8 text-freedom-blue" />
                  </div>
                  <Card className="border-freedom-blue/30 bg-card/50">
                    <CardHeader>
                      <CardTitle className="text-2xl">1975: Altair 8800</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        First commercially successful personal computer kit. Sold for $439. Required assembly. No keyboard, no screen. But it was{" "}
                        <strong className="text-foreground">yours</strong>.
                      </p>
                      <p className="text-freedom-blue italic">"People thought we were crazy. Why would anyone want their own computer?"</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-freedom-blue/20 rounded-full flex items-center justify-center border-4 border-background">
                    <Cpu className="w-8 h-8 text-freedom-blue" />
                  </div>
                  <Card className="border-freedom-blue/30 bg-card/50">
                    <CardHeader>
                      <CardTitle className="text-2xl">1977: Apple II, Commodore PET, TRS-80</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        The "trinity" of personal computing arrives. Pre-assembled computers with keyboards and displays. Ready to use out of the box.
                      </p>
                      <p className="text-freedom-blue italic">
                        "We're here to put a dent in the universe. Why would you not want to be part of this?" — Steve Jobs
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-freedom-blue/20 rounded-full flex items-center justify-center border-4 border-background">
                    <Building2 className="w-8 h-8 text-freedom-blue" />
                  </div>
                  <Card className="border-freedom-blue/30 bg-card/50">
                    <CardHeader>
                      <CardTitle className="text-2xl">1981: IBM PC</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        The establishment joins the revolution. IBM legitimizes personal computing. Corporations see the light. The floodgates open.
                      </p>
                      <p className="text-freedom-blue italic">"If IBM says it's real, it must be real." — The market sentiment shifts</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-freedom-blue/20 rounded-full flex items-center justify-center border-4 border-background">
                    <Users className="w-8 h-8 text-freedom-blue" />
                  </div>
                  <Card className="border-freedom-blue/30 bg-card/50">
                    <CardHeader>
                      <CardTitle className="text-2xl">1984: Macintosh</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">
                        Computing becomes friendly. Graphical interface. Mouse. Icons. "Hello." The masses can now participate.
                      </p>
                      <p className="text-freedom-blue italic">
                        "You'll see why 1984 won't be like '1984.'" — Apple's famous Super Bowl ad
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-freedom-blue/10 to-primary/10 rounded-lg border-2 border-freedom-blue/50">
              <h3 className="text-3xl font-bold mb-4 text-center text-freedom-blue">The Shift</h3>
              <p className="text-xl text-center">
                In less than 10 years, computing went from <strong>"impossible for individuals"</strong> to <strong>"expected in every home."</strong>
              </p>
            </div>
          </div>
        </section>

        <section ref={parallelsAnim.ref} className={`mb-20 animate-on-scroll ${parallelsAnim.isVisible ? "visible" : ""}`}>
          <h2 className="text-4xl font-bold mb-12 text-center">Chapter 3: History Repeating</h2>

          <div className="max-w-6xl mx-auto">
            <p className="text-2xl text-center text-muted-foreground mb-12">The AI industry today looks exactly like computing in the 1960s</p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-muted/40 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <Building2 className="w-10 h-10 text-muted-foreground" />
                    1970s: Computers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">→</span>
                      <div>
                        <strong className="text-foreground">"Computers are for corporations"</strong>
                        <p className="text-sm">Only IBM, DEC, and universities had access</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">→</span>
                      <div>
                        <strong className="text-foreground">Massive infrastructure required</strong>
                        <p className="text-sm">Dedicated buildings, cooling, power systems</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">→</span>
                      <div>
                        <strong className="text-foreground">Rent, never own</strong>
                        <p className="text-sm">Time-sharing at $500/hour (inflation-adjusted)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">→</span>
                      <div>
                        <strong className="text-foreground">Your data on their machines</strong>
                        <p className="text-sm">Complete surveillance of your work</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-rebel-red/40 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-3">
                    <Zap className="w-10 h-10 text-rebel-red" />
                    2025: AI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">→</span>
                      <div>
                        <strong className="text-foreground">"AI is for tech giants"</strong>
                        <p className="text-sm">Only OpenAI, Google, Meta have real AI</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">→</span>
                      <div>
                        <strong className="text-foreground">Massive infrastructure required</strong>
                        <p className="text-sm">Data centers, GPU farms, billion-dollar budgets</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">→</span>
                      <div>
                        <strong className="text-foreground">Rent, never own</strong>
                        <p className="text-sm">API subscriptions at $20-200/month forever</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">→</span>
                      <div>
                        <strong className="text-foreground">Your thoughts on their machines</strong>
                        <p className="text-sm">Complete surveillance of your mind</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="border-freedom-blue/50 bg-gradient-to-br from-freedom-blue/5 to-primary/5 max-w-3xl mx-auto">
                <CardContent className="pt-8 pb-8">
                  <p className="text-3xl font-bold text-freedom-blue mb-4">Same Excuses. Same Resistance. Same Inevitable Outcome.</p>
                  <p className="text-xl text-muted-foreground">
                    They said computers could never be personal. They were wrong. Now they say AI can never be personal. They're wrong again.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section ref={futureAnim.ref} className={`mb-20 animate-on-scroll ${futureAnim.isVisible ? "visible" : ""}`}>
          <h2 className="text-4xl font-bold mb-12 text-center">Chapter 4: Personal AI Era</h2>

          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="border-freedom-blue/50 bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Smartphone className="w-12 h-12 text-freedom-blue" />
                  <div>
                    <CardTitle className="text-3xl">2025 - 2030s</CardTitle>
                    <p className="text-muted-foreground">AI becomes personal</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">The Reality We're Building</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-freedom-blue text-2xl">✓</span>
                        <span>
                          <strong>Pocket-sized power:</strong> AI that runs on your phone, your laptop, your hardware
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-freedom-blue text-2xl">✓</span>
                        <span>
                          <strong>Universal access:</strong> Anyone can use it, anywhere, anytime
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-freedom-blue text-2xl">✓</span>
                        <span>
                          <strong>Own it forever:</strong> Buy once, use forever. No subscriptions, no rent-seeking
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-freedom-blue text-2xl">✓</span>
                        <span>
                          <strong>Your thoughts stay yours:</strong> Zero data leaves your device. Complete privacy.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">What We're Saying Now</h3>
                    <Card className="bg-freedom-blue/10 border-freedom-blue/40 p-6">
                      <p className="text-lg italic text-muted-foreground mb-4">
                        "AKALabs is doing for AI what was done for computers: turning planet-sized machines into something every human carries in their pocket and truly owns."
                      </p>
                      <p className="text-sm text-freedom-blue font-bold">— The AKAFreedom Manifesto</p>
                    </Card>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-freedom-blue/10 border border-freedom-blue/30 rounded-lg">
                  <p className="text-lg text-center">
                    <strong className="text-foreground">Intelligence is a right, not a privilege.</strong> If you can think, you deserve AI that respects your sovereignty.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-freedom-blue/30 bg-card/50 text-center p-6">
                <TrendingUp className="w-12 h-12 text-freedom-blue mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Miniaturization</h4>
                <p className="text-muted-foreground text-sm">From room-sized to pocket-sized, both for computers and AI</p>
              </Card>

              <Card className="border-freedom-blue/30 bg-card/50 text-center p-6">
                <Users className="w-12 h-12 text-freedom-blue mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Democratization</h4>
                <p className="text-muted-foreground text-sm">From elite privilege to universal right for everyone</p>
              </Card>

              <Card className="border-freedom-blue/30 bg-card/50 text-center p-6">
                <Shield className="w-12 h-12 text-freedom-blue mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Sovereignty</h4>
                <p className="text-muted-foreground text-sm">From renting to owning, from their control to your freedom</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="text-center">
          <Card className="border-freedom-blue/50 bg-gradient-to-br from-freedom-blue/10 to-primary/10 max-w-4xl mx-auto">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-4xl font-bold mb-6">The Revolution Is Happening Again</h2>
              <p className="text-2xl text-muted-foreground mb-8">They said personal computers were impossible. We proved them wrong.</p>
              <p className="text-2xl text-muted-foreground mb-8">Now they say personal AI is impossible. Watch us prove them wrong again.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <NavLink href="/donate">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Join the Revolution
                  </Button>
                </NavLink>
                <NavLink href="/manifesto">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-freedom-blue text-freedom-blue hover:bg-freedom-blue/10">
                    Read the Full Manifesto
                  </Button>
                </NavLink>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default PCRevolution;
