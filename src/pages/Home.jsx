import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import CategoriesSection from "../components/landing/CategoriesSection";
import CTASection from "../components/landing/CTASection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background font-body">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}