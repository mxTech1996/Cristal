'use client';

import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import AgencyInfoSection from '@/components/organisms/Info';
import Navbar from '@/components/organisms/Navbar';
import Products from '@/components/organisms/Products';
import ProjectsSection from '@/components/organisms/Projects';
import AdvertisingConsultingServices from '@/components/organisms/Services';
import AdvertisingTestimonials from '@/components/organisms/Testimonials';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AgencyInfoSection />
      <AdvertisingConsultingServices />
      <Products />
      <ProjectsSection />
      <AdvertisingTestimonials />
      <Footer />
    </main>
  );
}
