import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { PartnerLogos } from '@/components/home/PartnerLogos';
import { Services } from '@/components/home/Services';
import { Pricing } from '@/components/home/Pricing';
import { Tools } from '@/components/home/Tools';
import { GettingStarted } from '@/components/home/GettingStarted';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Testimonials } from '@/components/home/Testimonials';
import { FAQ } from '@/components/home/FAQ';
import { ContactSupport } from '@/components/home/ContactSupport';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PartnerLogos />
        <Services />
        <Pricing />
        <Tools />
        <GettingStarted />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ContactSupport />
      </main>
      <Footer />
    </div>
  );
}
