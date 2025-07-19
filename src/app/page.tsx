// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "../components/ui/hero";
import VideoIntro from "../components/ui/video-intro";
import Feature from "../components/ui/feature";
import Testimonials from "../components/ui/testimonials";
import Faqs from "../components/ui/faqs";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      {/*
      <VideoIntro />
      */}
      
      <Feature />
      {/*
      <MobileConvenience />
      <Testimonials />
      */}
      <Faqs />

      <Footer />
    </>
  );
}
