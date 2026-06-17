import Hero from '../sections/Hero';
import Credentials from '../sections/Credentials';
import Statement from '../sections/Statement';
import Projects from '../sections/Projects';
import Landings from '../sections/Landings';
import Diagnostic from '../sections/Diagnostic';
import TechStack from '../sections/TechStack';
import Process from '../sections/Process';
import Testimonial from '../sections/Testimonial';
import CTA from '../sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Credentials />
      <Statement />
      <Projects />
      <Landings />
      <Diagnostic />
      <TechStack />
      <Process />
      <Testimonial />
      <CTA />
    </>
  );
}
