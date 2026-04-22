import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import DirectionsSection from "@/components/DirectionsSection";
import DirectionModal from "@/components/DirectionModal";
import HistorySection from "@/components/HistorySection";
import VideosSection from "@/components/VideosSection";
import ContactsSection from "@/components/ContactsSection";
import ApplicationModal from "@/components/ApplicationModal";
import AdminPanel from "@/components/AdminPanel";
import Footer from "@/components/Footer";
import { DIRECTIONS } from "@/data/siteData";

export type Application = {
  id: number;
  name: string;
  email: string;
  phone: string;
  course: string;
  direction: string;
  motivation: string;
  date: string;
};

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedDirection, setSelectedDirection] = useState<(typeof DIRECTIONS)[0] | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 1,
      name: "Иванов Иван Иванович",
      email: "ivanov@mail.ru",
      phone: "+7 913 123 4567",
      course: "2",
      direction: "ССХ",
      motivation: "Хочу развиваться в хирургии",
      date: "2026-04-10",
    },
  ]);

  const handleApplicationSubmit = (data: Omit<Application, "id" | "date">) => {
    const newApp: Application = {
      ...data,
      id: applications.length + 1,
      date: new Date().toISOString().split("T")[0],
    };
    setApplications((prev) => [...prev, newApp]);
    setShowApplication(false);
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    if (section === "admin") {
      setShowAdmin(true);
      return;
    }
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onApply={() => setShowApplication(true)}
      />

      <section id="home">
        <HeroSection onApply={() => setShowApplication(true)} />
      </section>

      <section id="news">
        <NewsSection />
      </section>

      <section id="directions">
        <DirectionsSection
          onSelectDirection={(d) => setSelectedDirection(d)}
          onApply={() => setShowApplication(true)}
        />
      </section>

      <section id="history">
        <HistorySection />
      </section>

      <section id="videos">
        <VideosSection />
      </section>

      <section id="contacts">
        <ContactsSection onApply={() => setShowApplication(true)} />
      </section>

      <Footer onNavigate={scrollToSection} />

      {selectedDirection && (
        <DirectionModal
          direction={selectedDirection}
          onClose={() => setSelectedDirection(null)}
          onApply={() => {
            setSelectedDirection(null);
            setShowApplication(true);
          }}
        />
      )}

      {showApplication && (
        <ApplicationModal
          onClose={() => setShowApplication(false)}
          onSubmit={handleApplicationSubmit}
        />
      )}

      {showAdmin && (
        <AdminPanel
          applications={applications}
          onClose={() => setShowAdmin(false)}
        />
      )}
    </div>
  );
};

export default Index;
