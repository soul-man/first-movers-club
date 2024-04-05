import * as React from 'react';

import Layout from '@/components/layout';
import Intro from '@/components/LandingPage/Intro';
import GridSlider from '@/components/LandingPage/slider/GridSlider';
import Mint from '@/components/LandingPage/Mint';
import Collection from '@/components/LandingPage/Collection';
import Line from '@/components/LandingPage/Line';
import Personality from '@/components/LandingPage/Peronality';
import Rarity from '@/components/LandingPage/Rarity';
import Items from '@/components/LandingPage/Items';
import Faq from '@/components/LandingPage/faq/Faq';

export default function HomePage() {
  return (
    <Layout>
      <Intro />
      <GridSlider/>
      <Mint />
      <Collection />
      <Line />
      <Personality />
      <Rarity />
      <Items/>
      <Faq/>
    </Layout>
  );
}