"use client";
import React from "react";
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Mail, Phone } from "lucide-react";

// Updated members data with description / bio
const HIGHLIGHTED_MEMBERS = [
  {
    name: "Mr. A.B. Perera",
    position: "Municipal Commissioner",
    email: "commissioner@mannarmc.gov.lk",
    tel: "+94 23 222 2201",
    profile: "/images.jfif",
    description:
      "Mr. Perera leads the municipal council, ensuring smooth governance and effective implementation of policies.",
  },
  {
    name: "Ms. S.T. Fernando",
    position: "Deputy Commissioner",
    email: "deputy@mannarmc.gov.lk",
    tel: "+94 23 222 2203",
    profile: "/images.jfif",
    description:
      "Ms. Fernando supports the commissioner in administrative duties and supervises council operations.",
  },
  {
    name: "Mr. R.S. Jayasinghe",
    position: "Chief Administrative Officer",
    email: "admin@mannarmc.gov.lk",
    tel: "+94 23 222 2210",
    profile: "/images.jfif",
    description:
      "Mr. Jayasinghe manages all administrative functions and coordinates between departments.",
  },
  {
    name: "Mrs. L.M. Silva",
    position: "Human Resources Manager",
    email: "hr@mannarmc.gov.lk",
    tel: "+94 23 222 2212",
    profile: "/images.jfif",
    description:
      "Mrs. Silva oversees HR policies, employee welfare, and recruitment for the municipal council.",
  },
  {
    name: "Mr. K.L. Bandara",
    position: "Chief Financial Officer",
    email: "finance@mannarmc.gov.lk",
    tel: "+94 23 222 2230",
    profile: "/images.jfif",
    description:
      "Mr. Bandara manages the council’s finances, budgeting, and financial reporting.",
  },
  {
    name: "Mr. W.A.S. Kumara",
    position: "Chief Engineer",
    email: "engineering@mannarmc.gov.lk",
    tel: "+94 23 222 2240",
    profile: "/images.jfif",
    description:
      "Mr. Kumara supervises municipal infrastructure projects and engineering works.",
  },
  {
    name: "Dr. S.M. Fonseka",
    position: "Chief Medical Officer",
    email: "health@mannarmc.gov.lk",
    tel: "+94 23 222 2250",
    profile: "/images.jfif",
    description:
      "Dr. Fonseka leads public health initiatives and medical services across the municipality.",
  },
  {
    name: "Mr. P.G. Amarasinghe",
    position: "Town Planner",
    email: "planning@mannarmc.gov.lk",
    tel: "+94 23 222 2260",
    profile: "/images.jfif",
    description:
      "Mr. Amarasinghe is responsible for urban planning, zoning, and sustainable city development.",
  },
];

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

export default function TeamPage() {
  const handleEmailClick = (email: string) => {
    if (email) window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (tel: string) => {
    if (tel) window.location.href = `tel:${tel.replace(/\s+/g, "")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <TopBar />
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <h1 className="text-4xl font-bold text-center mb-12">
            Mannar Municipal Council - Key Members
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HIGHLIGHTED_MEMBERS.map((person, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="w-full h-48 relative bg-gray-100">
                  <img
                    src={person.profile || generateAvatar(person.name)}
                    alt={person.name}
                    className="w-full h-full object-cover"
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
                        className="flex items-center gap-2 text-primary hover:underline text-sm"
                      >
                        <Mail className="w-4 h-4" /> {person.email}
                      </button>
                    )}
                    {person.tel && (
                      <button
                        onClick={() => handlePhoneClick(person.tel)}
                        className="flex items-center gap-2 text-primary hover:underline text-sm"
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
      </main>
      <Footer />
    </div>
  );
}
