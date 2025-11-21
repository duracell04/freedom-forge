import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github } from "lucide-react";

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <Card className="bg-secondary/30 border-titanium/20 px-4 py-2 flex items-center gap-2">
                <Github className="w-4 h-4 text-titanium" />
                <span className="text-sm text-titanium">Future: Auto-sync from GitHub</span>
              </Card>
            </div>
          </div>
        </div>
      </header>

      <article className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-6 pb-12 border-b border-freedom-blue/20">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-foreground">
              The AKAFreedom Manifesto
            </h1>
            <p className="text-2xl md:text-3xl text-freedom-blue font-light">Why Your AI Should Be Also Known As Freedom</p>
            <div className="space-y-2 text-titanium">
              <p className="text-lg italic">By Andro Kasrashvili (AKA)</p>
              <p className="text-sm">Founder, AKALabs</p>
            </div>
          </div>

          <section className="space-y-6">
            <h2 className="text-4xl font-black text-foreground">A Personal Note</h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                I watched OpenAI become ClosedAI.
                <br />
                I watched our thoughts become their training data.
                <br />
                I watched privacy policies change overnight.
                <br />
                I watched AI become surveillance with a smile.
              </p>

              <p className="font-bold text-foreground">I'm building the alternative.</p>

              <p>
                This is AKAFreedom — AI that's Also Known As Freedom.
                <br />
                My initials are on this project because I personally guarantee your cognitive sovereignty.
              </p>
            </div>
          </section>

          <div className="border-t border-border/20" />

          <section className="space-y-6">
            <h2 className="text-4xl font-black text-foreground">The Problem We Face</h2>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-rebel-red">We're Living in AI Feudalism</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">Today, artificial intelligence means:</p>
              <ul className="space-y-2 text-lg text-foreground/80 list-disc list-inside">
                <li>Every query processed on corporate servers</li>
                <li>Every thought potentially training their models</li>
                <li>Every interaction logged, analyzed, monetized</li>
                <li>Every innovation locked behind API keys</li>
                <li>Every human dependent on 3-5 corporations</li>
              </ul>
              <p className="text-lg text-foreground/80 italic">We've traded our cognitive independence for convenience.</p>
            </div>

            <div className="space-y-6 pt-6">
              <h3 className="text-3xl font-bold text-freedom-blue">The Cost Is Higher Than We Realize</h3>

              <Card className="bg-card/30 border-border p-6 space-y-4">
                <h4 className="text-xl font-bold text-foreground">For Individuals:</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Your therapist notes could train their models</li>
                  <li>• Your creative ideas become their property</li>
                  <li>• Your private thoughts are their product</li>
                  <li>• Your children grow up thinking surveillance is normal</li>
                </ul>
              </Card>

              <Card className="bg-card/30 border-border p-6 space-y-4">
                <h4 className="text-xl font-bold text-foreground">For Professionals:</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Lawyers can't use AI for confidential work</li>
                  <li>• Doctors can't process patient information</li>
                  <li>• Journalists can't protect sources</li>
                  <li>• Researchers can't ensure data privacy</li>
                </ul>
              </Card>

              <Card className="bg-card/30 border-border p-6 space-y-4">
                <h4 className="text-xl font-bold text-foreground">For Humanity:</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Centralized control over human augmentation</li>
                  <li>• Single points of failure for global intelligence</li>
                  <li>• Censorship disguised as safety</li>
                  <li>• Innovation gatekept by corporations</li>
                </ul>
              </Card>
            </div>
          </section>

          <div className="border-t border-border/20" />

          <section className="space-y-6">
            <h2 className="text-4xl font-black text-foreground">The Alternative We're Building</h2>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-freedom-blue">Cognitive Sovereignty</h3>
              <p className="text-xl font-bold text-foreground">Your AI should be like your mind:</p>
              <ul className="space-y-2 text-lg text-foreground/80">
                <li>• It lives with you, not in the cloud</li>
                <li>• It works for you, not on you</li>
                <li>• It keeps your secrets</li>
                <li>• It can't be taken away</li>
                <li>• It can't be censored</li>
                <li>• It can't betray you</li>
              </ul>
            </div>

            <div className="space-y-6 pt-6">
              <h3 className="text-3xl font-bold text-freedom-blue">The Technical Reality</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">This isn't a dream. It's technically possible TODAY:</p>
              <ul className="space-y-2 text-lg text-foreground/80">
                <li>• Modern phones can run powerful AI models</li>
                <li>• Devices can sync without servers</li>
                <li>• Privacy can be preserved while using cloud resources</li>
                <li>• Decentralized networks can provide compute without surveillance</li>
              </ul>
              <p className="text-xl font-bold text-freedom-blue">We just need to build it.</p>
            </div>
          </section>

          <div className="border-t border-border/20" />

          <section className="space-y-8">
            <h2 className="text-4xl font-black text-foreground">Our Principles</h2>

            <div className="space-y-6">
              {[
                {
                  num: "1",
                  title: "Local First, Cloud Optional",
                  desc: "Your AI should work in airplane mode. Internet enhances but doesn't define intelligence.",
                },
                {
                  num: "2",
                  title: "Privacy by Design, Not by Policy",
                  desc: "Mathematical guarantees, not legal promises. Encryption, not terms of service.",
                },
                {
                  num: "3",
                  title: "Ownership, Not Rental",
                  desc: "You buy it, you own it. No subscriptions for basic intelligence. No remote kill switches.",
                },
                {
                  num: "4",
                  title: "Transparency, Not Trust",
                  desc: 'Open source core. Auditable privacy. Verifiable claims. "Don\'t trust, verify."',
                },
                {
                  num: "5",
                  title: "Augmentation, Not Replacement",
                  desc: "AI should amplify human intelligence, not replace human judgment.",
                },
                {
                  num: "6",
                  title: "Universal Access, Not Elite Privilege",
                  desc: "Everyone deserves cognitive sovereignty, not just those who can afford it.",
                },
              ].map((principle) => (
                <Card key={principle.num} className="bg-secondary/20 border-freedom-blue/20 p-6">
                  <h3 className="text-2xl font-bold text-freedom-blue mb-3">
                    {principle.num}. {principle.title}
                  </h3>
                  <p className="text-lg text-foreground/80">{principle.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <div className="border-t border-border/20" />

          <section className="space-y-6">
            <h2 className="text-4xl font-black text-foreground">The Path Forward</h2>

            <div className="space-y-6">
              {[
                {
                  phase: "Phase 1: Prove It's Possible",
                  desc: "Build AI that runs entirely on your phone. No cloud, no surveillance, no compromise.",
                },
                { phase: "Phase 2: Make It Powerful", desc: "Add desktop companions, P2P sync, privacy gateways. Same sovereignty, more capability." },
                { phase: "Phase 3: Make It Standard", desc: "When millions choose sovereignty, surveillance becomes obsolete." },
                { phase: "Phase 4: Make It Permanent", desc: "Encode these principles in technology, law, and culture." },
              ].map((item, i) => (
                <Card key={i} className="bg-card/30 border-border p-6">
                  <h3 className="text-2xl font-bold text-freedom-blue mb-3">{item.phase}</h3>
                  <p className="text-lg text-foreground/80">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <div className="border-t border-border/20" />

          <section className="space-y-6">
            <h2 className="text-4xl font-black text-foreground">Why This Matters</h2>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-rebel-red">This Is About More Than Technology</h3>
              <div className="space-y-4 text-lg text-foreground/80">
                <p>This is about whether our children will own their thoughts.</p>
                <p>This is about whether humanity's cognitive evolution will be controlled by corporations or individuals.</p>
                <p>This is about whether AI becomes a tool of liberation or control.</p>
                <p>This is about whether "artificial intelligence" means "artificial surveillance."</p>
              </div>
            </div>

            <div className="space-y-6 pt-6">
              <h3 className="text-3xl font-bold text-rebel-red">The Window Is Closing</h3>
              <div className="space-y-4 text-lg text-foreground/80">
                <p>
                  Every day we wait, surveillance AI becomes more normalized.
                  <br />
                  Every day we wait, more thoughts are harvested.
                  <br />
                  Every day we wait, alternatives become harder to imagine.
                </p>
                <p className="text-xl font-bold text-foreground">But the window isn't closed yet.</p>
              </div>
            </div>
          </section>

          <div className="border-t border-border/20" />

          <section className="space-y-6">
            <h2 className="text-4xl font-black text-foreground">The Movement We're Building</h2>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-freedom-blue">This Isn't a Company, It's a Cause</h3>
              <p className="text-lg text-foreground/80">
                AKAFreedom isn't trying to become the next tech giant. We're trying to prevent tech giants from owning human cognition.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-freedom-blue">You're Not a User, You're a Citizen</h3>
              <p className="text-lg text-foreground/80">This is your cognitive infrastructure. You should have a say in how it works.</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-freedom-blue">We're Not Selling, We're Building</h3>
              <p className="text-lg text-foreground/80">
                This project will never be acquired. Never go public. Never compromise. My initials are on it as a personal guarantee.
              </p>
            </div>
          </section>

          <div className="border-t border-border/20" />

          <section className="space-y-6">
            <h2 className="text-4xl font-black text-foreground">How You Can Help</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-freedom-blue/10 border-freedom-blue/30 p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">For Developers</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Contribute code</li>
                  <li>• Build tools</li>
                  <li>• Audit privacy</li>
                  <li>• Port to new platforms</li>
                </ul>
              </Card>

              <Card className="bg-freedom-blue/10 border-freedom-blue/30 p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">For Professionals</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Test in your field</li>
                  <li>• Provide feedback</li>
                  <li>• Share use cases</li>
                  <li>• Demand sovereignty</li>
                </ul>
              </Card>

              <Card className="bg-freedom-blue/10 border-freedom-blue/30 p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">For Everyone</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Choose local AI when possible</li>
                  <li>• Support the movement</li>
                  <li>• Spread awareness</li>
                  <li>• Reject surveillance</li>
                </ul>
              </Card>

              <Card className="bg-freedom-blue/10 border-freedom-blue/30 p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">For Enterprises</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Fund through usage, not ownership</li>
                  <li>• Support development, not acquisition</li>
                  <li>• Choose sovereignty for your employees</li>
                </ul>
              </Card>
            </div>
          </section>

          <div className="border-t border-border/20" />

          <section className="space-y-6">
            <h2 className="text-4xl font-black text-foreground">The Technical Commitment</h2>

            <h3 className="text-3xl font-bold text-freedom-blue">What We Promise</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/30 border-freedom-blue/30 p-6">
                <h4 className="text-xl font-bold text-freedom-blue mb-4">Always Free:</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Core AI functionality</li>
                  <li>• Basic tools</li>
                  <li>• Privacy protection</li>
                  <li>• Local operation</li>
                </ul>
              </Card>

              <Card className="bg-card/30 border-rebel-red/30 p-6">
                <h4 className="text-xl font-bold text-rebel-red mb-4">Never Compromised:</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• No data harvesting</li>
                  <li>• No usage tracking</li>
                  <li>• No remote control</li>
                  <li>• No forced updates</li>
                </ul>
              </Card>

              <Card className="bg-card/30 border-freedom-blue/30 p-6">
                <h4 className="text-xl font-bold text-freedom-blue mb-4">Forever Sovereign:</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Can't be acquired</li>
                  <li>• Can't be shut down</li>
                  <li>• Can't be censored</li>
                  <li>• Can't be corrupted</li>
                </ul>
              </Card>
            </div>
          </section>

          <div className="border-t border-border/20" />

          <section className="space-y-6">
            <h2 className="text-4xl font-black text-foreground">The Economic Model</h2>

            <h3 className="text-3xl font-bold text-freedom-blue mb-6">Sustainability Without Surveillance</h3>

            <div className="space-y-4">
              <Card className="bg-card/30 border-border p-6">
                <h4 className="text-xl font-bold text-foreground mb-2">Free for Individuals:</h4>
                <p className="text-foreground/80">Everything you need for personal sovereignty</p>
              </Card>

              <Card className="bg-card/30 border-border p-6">
                <h4 className="text-xl font-bold text-foreground mb-2">Paid for Convenience:</h4>
                <p className="text-foreground/80">Optional cloud services, advanced features</p>
              </Card>

              <Card className="bg-card/30 border-border p-6">
                <h4 className="text-xl font-bold text-foreground mb-2">Paid for Enterprises:</h4>
                <p className="text-foreground/80">Compliance, support, deployment help</p>
              </Card>

              <Card className="bg-card/30 border-border p-6">
                <h4 className="text-xl font-bold text-foreground mb-2">Funded by Mission:</h4>
                <p className="text-foreground/80">Those who can pay fund freedom for everyone</p>
              </Card>
            </div>
          </section>

          <div className="border-t border-border/20" />

          <section className="space-y-6">
            <h2 className="text-4xl font-black text-foreground">The Long Vision</h2>

            <div className="space-y-6">
              <Card className="bg-secondary/20 border-border p-6">
                <h3 className="text-2xl font-bold text-freedom-blue mb-3">By 2030</h3>
                <p className="text-lg text-foreground/80">Local AI is normal. Privacy is expected. Sovereignty is standard.</p>
              </Card>

              <Card className="bg-secondary/20 border-border p-6">
                <h3 className="text-2xl font-bold text-freedom-blue mb-3">By 2035</h3>
                <p className="text-lg text-foreground/80">
                  The idea of sending thoughts to corporate servers seems as antiquated as fax machines.
                </p>
              </Card>

              <Card className="bg-secondary/20 border-border p-6">
                <h3 className="text-2xl font-bold text-freedom-blue mb-3">By 2040</h3>
                <p className="text-lg text-foreground/80">Every human has sovereign AI, like every human has sovereign thoughts.</p>
              </Card>

              <Card className="bg-freedom-blue/10 border-freedom-blue/30 p-6">
                <h3 className="text-2xl font-bold text-freedom-blue mb-3">The Real Victory</h3>
                <p className="text-lg text-foreground/80">When people can't imagine it was ever different.</p>
              </Card>
            </div>
          </section>

          <div className="border-t border-border/20" />

          <section className="space-y-6">
            <h2 className="text-4xl font-black text-foreground">A Personal Commitment</h2>

            <Card className="bg-card/50 border-freedom-blue/30 p-8 space-y-4 text-lg text-foreground/80">
              <p>My name is Andro Kasrashvili — AKA.</p>
              <p>I'm putting my initials on this project because I'm putting my life into this mission.</p>
              <p>I've seen what happens when technology serves surveillance:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Thoughts become products</li>
                <li>Privacy becomes privilege</li>
                <li>Freedom becomes fiction</li>
              </ul>
              <p>I'm building what should exist:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>AI that serves you</li>
                <li>Privacy that's permanent</li>
                <li>Freedom that's fundamental</li>
              </ul>
              <p className="font-bold text-foreground">This isn't about creating wealth. It's about preserving sovereignty.</p>
              <p className="font-bold text-foreground">This isn't about building a unicorn. It's about preventing dystopia.</p>
              <p className="font-bold text-foreground">This isn't about me. It's about us.</p>
            </Card>
          </section>

          <div className="border-t border-border/20" />

          <section className="space-y-6 text-center">
            <h2 className="text-4xl font-black text-foreground">Join the Resistance</h2>

            <p className="text-xl text-foreground/80">The future of human cognition shouldn't be a corporate monopoly.</p>
            <p className="text-2xl font-bold text-freedom-blue">Your AI should be Also Known As Freedom.</p>

            <div className="py-8">
              <Link href="/">
                <Button
                  size="lg"
                  className="text-xl px-12 py-8 bg-gradient-to-r from-rebel-red to-[hsl(var(--rebel-red-end))] hover:from-[hsl(var(--rebel-red-end))] hover:to-rebel-red text-foreground font-bold uppercase tracking-wider"
                >
                  Join us at AKALabs.io
                </Button>
              </Link>
            </div>

            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Together, we're building cognitive sovereignty.
                <br />
                One device at a time.
                <br />
                One mind at a time.
                <br />
                One free human at a time.
              </p>
            </div>
          </section>

          <div className="border-t border-border/20" />

          <section className="space-y-6">
            <Card className="bg-card/30 border-border p-8">
              <p className="text-2xl italic text-center text-foreground/80 mb-6">
                "The best time to plant a tree was 20 years ago. The second best time is now."
              </p>
              <p className="text-lg text-center text-foreground/80">
                The best time to build sovereign AI was before surveillance AI existed.
                <br />
                The second best time is now.
              </p>
              <p className="text-xl font-bold text-center text-freedom-blue mt-6">Let's build it together.</p>
              <p className="text-2xl font-bold text-center text-freedom-blue mt-4">— AKA</p>
            </Card>
          </section>

          <div className="border-t border-border/20" />

          <section className="space-y-6">
            <h2 className="text-4xl font-black text-foreground text-center">The Three Laws of AKAFreedom</h2>

            <div className="space-y-6">
              {[
                { law: "Law 1: Privacy Is Not Negotiable", desc: "No feature, no optimization, no convenience is worth surveillance." },
                { law: "Law 2: Users Own Their Intelligence", desc: "Your data, your models, your outputs, your control. Forever." },
                { law: "Law 3: This Project Cannot Be Sold", desc: "Legally structured to be impossible. My initials, my commitment, humanity's future." },
              ].map((item, i) => (
                <Card key={i} className="bg-card/50 border-freedom-blue/30 p-8">
                  <h3 className="text-2xl font-bold text-freedom-blue mb-4">{item.law}</h3>
                  <p className="text-lg text-foreground/80">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          <div className="border-t border-border/20" />

          <section className="text-center space-y-4 py-8">
            <p className="text-sm italic text-titanium">
              This manifesto is released under CC0. Spread it, modify it, build upon it. The ideas belong to everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-freedom-blue">
              <span>#CognitiveSovereignty</span>
              <span>#AlsoKnownAsFreedom</span>
              <span>#YourAIYourControl</span>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Manifesto;
