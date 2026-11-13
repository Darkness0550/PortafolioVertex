import Hero from '../sections/Hero';
import Credentials from '../sections/Credentials';
import Projects from '../sections/Projects';
import Process from '../sections/Process';
import Statement from '../sections/Statement';
import TechStack from '../sections/TechStack';
import Pricing from '../sections/Pricing';
import LandingAd from '../sections/LandingAd';
import Testimonial from '../sections/Testimonial';
import CTA from '../sections/CTA';
import Apps from '../sections/Apps';

export default function Home() {
  return (
    <>
      <Hero />
      <Credentials />
      <Projects />
      <Apps />
      <Process />
      <Statement />
      <TechStack />
      <Pricing />
      <LandingAd />
      <Testimonial />
      <CTA />
    </>
  );
}
