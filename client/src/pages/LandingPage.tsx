import BottomCTA from "../components/landing/BottomCTA";
import FeatureCards from "../components/landing/FeatureCards";
import HeroSection from "../components/landing/HeroSection";
import HowItWorks from "../components/landing/HowItWorks";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";



export default function LandingPage() {
    return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />


      <main className="flex-1 w-full flex flex-col items-center">

        <HeroSection />

        <FeatureCards />


        <HowItWorks />


        <BottomCTA />
      </main>

      <Footer />
    </div>
  );
}
