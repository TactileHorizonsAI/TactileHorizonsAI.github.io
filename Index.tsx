import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import MarketSection from "@/components/MarketSection";
import TractionSection from "@/components/TractionSection";
import CompetitiveSection from "@/components/CompetitiveSection";
import RoadmapSection from "@/components/RoadmapSection";
import AskSection from "@/components/AskSection";
import VisionSection from "@/components/VisionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MarketSection />
      <TractionSection />
      <CompetitiveSection />
      <RoadmapSection />
      <AskSection />
      <VisionSection />
      <footer className="py-6 text-center text-xs text-muted-foreground border-t border-border">
        © 2026 Tactile Horizons AI. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
