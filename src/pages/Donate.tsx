import { useState } from "react";
import { ethers } from "ethers";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on?: (event: string, handler: (...args: unknown[]) => void) => void;
      removeListener?: (event: string, handler: (...args: unknown[]) => void) => void;
    };
  }
}
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Wallet, Heart, Shield, TrendingUp } from "lucide-react";
import { NavLink } from "@/components/NavLink";

interface Donation {
  name: string;
  amount: string;
  timestamp: string;
}

const Donate = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [donorName, setDonorName] = useState<string>("");
  const [donationAmount, setDonationAmount] = useState<string>("");
  const [donations, setDonations] = useState<Donation[]>([
    { name: "Anonymous Supporter", amount: "0.5 ETH", timestamp: "2025-11-20" },
    { name: "Freedom Advocate", amount: "1.2 ETH", timestamp: "2025-11-19" },
    { name: "Privacy Pioneer", amount: "0.8 ETH", timestamp: "2025-11-18" },
  ]);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]);
        toast({
          title: "Wallet Connected",
          description: `Connected: ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`,
        });
      } catch (error) {
        toast({
          title: "Connection Failed",
          description: "Failed to connect wallet. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "MetaMask Not Found",
        description: "Please install MetaMask to donate.",
        variant: "destructive",
      });
    }
  };

  const handleDonate = async () => {
    if (!walletAddress) {
      toast({
        title: "Connect Wallet",
        description: "Please connect your wallet first.",
        variant: "destructive",
      });
      return;
    }

    if (!donorName || !donationAmount) {
      toast({
        title: "Missing Information",
        description: "Please enter your name and donation amount.",
        variant: "destructive",
      });
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      
      // Project wallet address (replace with actual address)
      const projectWallet = "0x0000000000000000000000000000000000000000";
      
      const tx = await signer.sendTransaction({
        to: projectWallet,
        value: ethers.parseEther(donationAmount),
      });

      await tx.wait();

      const newDonation: Donation = {
        name: donorName,
        amount: `${donationAmount} ETH`,
        timestamp: new Date().toISOString().split('T')[0],
      };

      setDonations([newDonation, ...donations]);
      
      toast({
        title: "Thank You! 🎉",
        description: `Your donation of ${donationAmount} ETH has been received!`,
      });

      setDonorName("");
      setDonationAmount("");
    } catch (error) {
      toast({
        title: "Transaction Failed",
        description: "Failed to process donation. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-freedom-blue">
            AKAFreedom
          </NavLink>
          <div className="flex gap-6">
            <NavLink to="/" className="text-foreground/80 hover:text-freedom-blue transition-colors">
              Home
            </NavLink>
            <NavLink to="/manifesto" className="text-foreground/80 hover:text-freedom-blue transition-colors">
              Manifesto
            </NavLink>
            <NavLink to="/donate" className="text-freedom-blue font-semibold">
              Donate
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-freedom-blue to-primary bg-clip-text text-transparent">
            Support Cognitive Freedom
          </h1>
          <p className="text-xl text-muted-foreground">
            Help us build a future where your thoughts remain yours. Every donation brings us closer to true digital sovereignty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Donation Card */}
          <Card className="border-freedom-blue/30 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="text-freedom-blue" />
                Make a Donation
              </CardTitle>
              <CardDescription>
                Connect your Web3 wallet and contribute to the project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!walletAddress ? (
                <Button 
                  onClick={connectWallet} 
                  className="w-full"
                  size="lg"
                >
                  <Wallet className="mr-2" />
                  Connect Wallet
                </Button>
              ) : (
                <>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Connected Wallet</p>
                    <p className="font-mono text-sm text-freedom-blue">
                      {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="donorName">Display Name</Label>
                      <Input
                        id="donorName"
                        placeholder="How should we recognize you?"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="amount">Amount (ETH)</Label>
                      <Input
                        id="amount"
                        type="number"
                        step="0.001"
                        placeholder="0.1"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    <Button 
                      onClick={handleDonate} 
                      className="w-full"
                      size="lg"
                    >
                      <Heart className="mr-2" />
                      Donate {donationAmount && `${donationAmount} ETH`}
                    </Button>
                  </div>
                </>
              )}

              <div className="space-y-3 pt-4 border-t border-border/40">
                <h3 className="font-semibold text-sm">Why Donate?</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>Support development of privacy-first AI</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>Fund research and open-source tools</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-freedom-blue mt-0.5 flex-shrink-0" />
                    <span>Join a community fighting for digital rights</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Donations List */}
          <Card className="border-freedom-blue/30 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Recent Donations</CardTitle>
              <CardDescription>
                Maximum transparency. Every contribution counts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {donations.map((donation, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/30 hover:border-freedom-blue/50 transition-all"
                  >
                    <div>
                      <p className="font-semibold text-foreground">{donation.name}</p>
                      <p className="text-sm text-muted-foreground">{donation.timestamp}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-freedom-blue font-semibold">{donation.amount}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-freedom-blue/10 border border-freedom-blue/30 rounded-lg">
                <p className="text-sm text-center text-muted-foreground">
                  All donations are publicly visible on the blockchain for complete transparency
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Donate;
