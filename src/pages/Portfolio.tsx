import React, { Suspense, lazy } from 'react';
import MedievalLayout from '@/components/layout/MedievalLayout';
import PageMeta from '@/components/common/PageMeta';
import Hero from '@/components/sections/Hero';
import TheOath from '@/components/sections/TheOath';
import TheArmory from '@/components/sections/TheArmory';
import Campaigns from '@/components/sections/Campaigns';
import GreatWorks from '@/components/sections/GreatWorks';
import ScrollsOfHonor from '@/components/sections/ScrollsOfHonor';
import ScholarPath from '@/components/sections/ScholarPath';
import Achievements from '@/components/sections/Achievements';
import TheRaven from '@/components/sections/TheRaven';

const PortfolioPage = () => {
  return (
    <MedievalLayout>
      <PageMeta 
        title="Mourique Naskar | Data Scientist & Full Stack Developer Portfolio"
        description="Explore the portfolio of Mourique Naskar, a Data Scientist and Full Stack Developer. Discover projects in Machine Learning, Computer Vision, and Web Development."
      />
      <Hero />
      <TheOath />
      <TheArmory />
      <Campaigns />
      <GreatWorks />
      <ScrollsOfHonor />
      <ScholarPath />
      <Achievements />
      <TheRaven />
    </MedievalLayout>
  );
};

export default PortfolioPage;
