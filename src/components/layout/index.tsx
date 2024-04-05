import * as React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

import Footer from '@/components/layout/Footer';
import Seo from '@/components/layout/SEO';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Seo />
      <main>{children}</main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
