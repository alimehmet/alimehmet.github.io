import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <div className="cursor-default">
      <SmoothScroll />
      <Navbar />
      <PageTransition>
        <main className="cursor-default">
          <Hero />
          <AboutSection />
          <PortfolioGrid />
          <ContactSection />
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
}
