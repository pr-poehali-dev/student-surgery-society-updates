import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
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

  const navigate = (section: string) => {
    if (section === "admin") {
      setShowAdmin(true);
      return;
    }
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection onApply={() => setShowApplication(true)} onNavigate={navigate} />;
      case "news":
        return <NewsSection />;
      case "directions":
        return (
          <DirectionsSection
            onSelectDirection={(d) => setSelectedDirection(d)}
            onApply={() => setShowApplication(true)}
          />
        );
      case "history":
        return <HistorySection />;
      case "videos":
        return <VideosSection />;
      case "contacts":
        return <ContactsSection onApply={() => setShowApplication(true)} />;
      default:
        return <HomeSection onApply={() => setShowApplication(true)} onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-montserrat flex flex-col">
      <Navbar
        activeSection={activeSection}
        onNavigate={navigate}
        onApply={() => setShowApplication(true)}
      />

      <main className="flex-1 pt-16">
        {renderSection()}
      </main>

      <Footer onNavigate={navigate} />

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