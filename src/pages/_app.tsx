import { useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import "@/styles/globals.css";

const BaseApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AKAFreedom - AI That's Also Known As Freedom</title>
        <meta
          name="description"
          content="Your thoughts stay yours. No servers. No spying. No betrayal. Ever. AKA8 runs entirely on your device. Cognitive sovereignty or bust."
        />
        <meta name="author" content="AKALabs.io" />

        <meta property="og:title" content="AKAFreedom - AI That's Also Known As Freedom" />
        <meta
          property="og:description"
          content="Your thoughts stay yours. No servers. No spying. No betrayal. Ever. Join the movement for cognitive sovereignty."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://akalabs.io/opengraph-image-p98pqg.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@akalabsio" />
        <meta name="twitter:image" content="https://akalabs.io/opengraph-image-p98pqg.png" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Component {...pageProps} />
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default BaseApp;
