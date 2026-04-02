import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { Services } from '@/components/home/Services';
import { Pricing } from '@/components/home/Pricing';
import { Tools } from '@/components/home/Tools';
import { GettingStarted } from '@/components/home/GettingStarted';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Testimonials } from '@/components/home/Testimonials';
import { FAQ } from '@/components/home/FAQ';
import { ContactCTA } from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Tools />
        <GettingStarted />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
