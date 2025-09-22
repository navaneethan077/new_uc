"use client";

import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Trash2, FileText, Bell, Globe, Users } from "lucide-react";
import Image from "next/image";

export default function InfoPage() {
  const infoCards = [
    {
      title: "Garbage Collection",
      description:
        "Schedules, guidelines, and contacts for waste collection across all wards and zones. Learn proper disposal methods to keep Mannar clean and sustainable.",
      icon: Trash2,
      href: "/info/garbage-collection",
      color: "bg-primary",
    },
    {
      title: "Certificates & Permits",
      description:
        "How to apply for vital documents such as birth, marriage, and death certificates. Includes guidance on business registrations and construction permits.",
      icon: FileText,
      href: "/info/certificates",
      color: "bg-primary",
    },
    {
      title: "Public Notices",
      description:
        "Stay informed with official announcements—tenders, council meetings, budget reports, and community consultations.",
      icon: Bell,
      href: "/info/public-notices",
      color: "bg-primary",
    },
    {
      title: "e-Services",
      description:
        "Convenient access to online services: pay taxes, renew licenses, and submit forms digitally. Save time with our e-Governance tools.",
      icon: Globe,
      href: "/info/e-services",
      color: "bg-primary",
    },
    {
      title: "Community Services",
      description:
        "Explore youth programs, elder care, health clinics, and social welfare services that support the Mannar community.",
      icon: Users,
      href: "/info/community-services",
      color: "bg-primary",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-x bg-gradient-to-br from-primary to-primary/80 text-white">
          <div className="container-x text-center">
            <div className="flex flex-col items-center mb-6">
              <Image
                src="/logo.png"
                alt="Mannar Urban Council Logo"
                width={80}
                height={80}
                className="mb-4"
              />
              <h1 className="text-4xl md:text-5xl font-bold">
                Mannar Urban Council – Services
              </h1>
            </div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white/90">
              Access comprehensive information about municipal services,
              procedures, and resources. Everything you need to know about
              living, working, and thriving in Mannar.
            </p>
          </div>
        </section>

        {/* Info Cards Grid */}
        <section className="section-x">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Service Categories
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover a range of municipal services designed to make life in
                Mannar more convenient, sustainable, and community-driven.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {infoCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    className="card-x group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {card.description}
                    </p>
                    <a
                      href={card.href}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors group-hover:shadow-md"
                    >
                      Learn More
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="section-x bg-gray-50">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Quick Access
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get fast access to frequently used services and information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Emergency Contacts
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Essential phone numbers for urgent situations
                </p>
                <a
                  href="/info/emergency"
                  className="text-primary hover:underline"
                >
                  View Contacts
                </a>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Office Hours
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Working hours and holiday schedules
                </p>
                <a
                  href="/info/office-hours"
                  className="text-primary hover:underline"
                >
                  View Schedule
                </a>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Download Forms
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Printable applications and official documents
                </p>
                <a href="/info/forms" className="text-primary hover:underline">
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
