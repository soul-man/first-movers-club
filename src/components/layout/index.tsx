import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Seo from '@/components/layout/SEO';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Seo />
      <main>{children}</main>
      <Footer/>
    </>
  );
}
