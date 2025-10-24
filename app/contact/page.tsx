"use client";
import React, { useState, useEffect } from "react";
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Mail, Phone, Loader2 } from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { useLanguage } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";
import { contactService, type Contact } from "@/app/services/contact";

// Generate avatar fallback
const generateAvatar = (name: string) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return `https://placehold.co/128x128/1e40af/ffffff?text=${initials}`;
};

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language].TeamContent;
  
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch contacts from API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const response = await contactService.getAllContacts();
        
        if (response.success && Array.isArray(response.data)) {
          setContacts(response.data);
        } else {
          setError("Failed to load contacts");
        }
      } catch (err) {
        console.error("Error fetching contacts:", err);
        setError("Error loading contact information");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleEmailClick = (email: string) => {
    if (email) window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (tel: string) => {
    if (tel) window.location.href = `tel:${tel.replace(/\s+/g, "")}`;
  };

  // Fallback contacts if API fails or during loading
  const fallbackContacts = [
    {
      id: "1",
      name: t.members.commissioner.name,
      position: t.members.commissioner.position,
      email: "commissioner@mannarmc.gov.lk",
      tel: "+94 23 222 2201",
      profile: "/images.jfif",
      description: t.members.commissioner.description,
      createdAt: "",
      updatedAt: ""
    },
    {
      id: "2",
      name: t.members.deputyCommissioner.name,
      position: t.members.deputyCommissioner.position,
      email: "deputy@mannarmc.gov.lk",
      tel: "+94 23 222 2203",
      profile: "/images.jfif",
      description: t.members.deputyCommissioner.description,
      createdAt: "",
      updatedAt: ""
    },
    {
      id: "3",
      name: t.members.adminOfficer.name,
      position: t.members.adminOfficer.position,
      email: "admin@mannarmc.gov.lk",
      tel: "+94 23 222 2210",
      profile: "/images.jfif",
      description: t.members.adminOfficer.description,
      createdAt: "",
      updatedAt: ""
    },
    {
      id: "4",
      name: t.members.hrManager.name,
      position: t.members.hrManager.position,
      email: "hr@mannarmc.gov.lk",
      tel: "+94 23 222 2212",
      profile: "/images.jfif",
      description: t.members.hrManager.description,
      createdAt: "",
      updatedAt: ""
    },
    {
      id: "5",
      name: t.members.cfo.name,
      position: t.members.cfo.position,
      email: "finance@mannarmc.gov.lk",
      tel: "+94 23 222 2230",
      profile: "/images.jfif",
      description: t.members.cfo.description,
      createdAt: "",
      updatedAt: ""
    },
    {
      id: "6",
      name: t.members.chiefEngineer.name,
      position: t.members.chiefEngineer.position,
      email: "engineering@mannarmc.gov.lk",
      tel: "+94 23 222 2240",
      profile: "/images.jfif",
      description: t.members.chiefEngineer.description,
      createdAt: "",
      updatedAt: ""
    },
    {
      id: "7",
      name: t.members.medicalOfficer.name,
      position: t.members.medicalOfficer.position,
      email: "health@mannarmc.gov.lk",
      tel: "+94 23 222 2250",
      profile: "/images.jfif",
      description: t.members.medicalOfficer.description,
      createdAt: "",
      updatedAt: ""
    },
    {
      id: "8",
      name: t.members.townPlanner.name,
      position: t.members.townPlanner.position,
      email: "planning@mannarmc.gov.lk",
      tel: "+94 23 222 2260",
      profile: "/images.jfif",
      description: t.members.townPlanner.description,
      createdAt: "",
      updatedAt: ""
    },
  ];

  // Use API contacts or fallback if no contacts loaded
  const displayContacts = contacts.length > 0 ? contacts : fallbackContacts;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <TopBar />
        <Navigation />
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin" style={{ color: "var(--primary)" }} />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <TopBar />
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-16"
        style={{
          background: "linear-gradient(135deg, var(--primary) 0%, oklch(0.25 0.08 250) 100%)"
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.hero.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {error && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-center">
              <p className="text-yellow-800">{error}</p>
            </div>
          )}
          
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.members.title}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayContacts.map((person) => (
              <div
                key={person.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="w-full h-48 relative bg-gray-100">
                  <img
                    src={person.profile || generateAvatar(person.name)}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = generateAvatar(person.name);
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h2 className="text-lg font-semibold">{person.name}</h2>
                  <p className="text-sm text-gray-600">{person.position}</p>
                  <p className="text-sm text-gray-700 mt-2">
                    {person.description}
                  </p>
                  <div className="flex flex-col gap-2 mt-4">
                    {person.email && (
                      <button
                        onClick={() => handleEmailClick(person.email)}
                        className="flex items-center gap-2 hover:underline text-sm transition-colors"
                        style={{ color: "var(--primary)" }}
                      >
                        <Mail className="w-4 h-4" /> {person.email}
                      </button>
                    )}
                    {person.tel && (
                      <button
                        onClick={() => handlePhoneClick(person.tel)}
                        className="flex items-center gap-2 hover:underline text-sm transition-colors"
                        style={{ color: "var(--primary)" }}
                      >
                        <Phone className="w-4 h-4" /> {person.tel}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}