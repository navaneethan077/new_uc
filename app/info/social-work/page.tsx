"use client";
import { useState } from "react";
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Calendar } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function SocialWorkPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const initiatives = [
    {
      description:
        "A youth-driven mission across Mannar’s beaches — from Pesalai to Talaimannar — focused on cleaning shorelines and educating fishermen and students on marine conservation and plastic reduction.",
      date: "August 12, 2025",
      image: "/mannar-coast.jpg",
    },
    {
      description:
        "A social entrepreneurship project empowering Mannar’s women to preserve traditional weaving and handloom artistry, promoting self-employment through skill training and digital marketing support.",
      date: "July 22, 2025",
      image: "/mannar-handloom.jpg",
    },
    {
      description:
        "An awareness and support campaign providing safety gear, financial literacy training, and sustainable fishing practices for Mannar’s coastal fishing communities.",
      date: "June 30, 2025",
      image: "/mannar-coast.jpg",
    },
    {
      description:
        "A digital literacy and career guidance program helping Mannar’s rural youth gain coding, design, and language skills through weekend bootcamps and mentoring sessions.",
      date: "May 18, 2025",
      image: "/mannar-youth.jpg",
    },
    {
      description:
        "A community-led effort restoring Mannar’s vital mangroves, combining local fisherman knowledge with environmental science to protect coastlines and biodiversity.",
      date: "April 10, 2025",
      image: "/mannar-coast.jpg",
    },
    {
      description:
        "Mobile clinics and awareness drives offering free checkups, blood pressure screenings, and maternal health care in remote areas such as Erukkalampiddy and Nanattan.",
      date: "March 25, 2025",
      image: "/mannar-handloom.jpg",
    },
  ];

  const events = [
    {
      name: "Mannar Eco Day 2025",
      date: "December 15, 2025",
      description:
        "Join hundreds of locals for a beach restoration campaign at Talaimannar — a day dedicated to coastal preservation, tree planting, and eco-awareness programs.",
    },
    {
      name: "Island Hearts Blood Donation Drive",
      date: "November 22, 2025",
      description:
        "Held at Mannar General Hospital, this life-saving event unites volunteers and medical teams to support patients through community blood donations.",
    },
    {
      name: "Youth Leadership Summit – Mannar Edition",
      date: "Every Last Sunday",
      description:
        "Monthly youth meetups hosted at the Mannar District Secretariat to inspire leadership, innovation, and civic engagement among young changemakers.",
    },
  ];

  const filteredInitiatives = initiatives.filter((initiative) =>
    initiative.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredInitiatives.length / itemsPerPage);
  const paginatedInitiatives = filteredInitiatives.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const InitiativeCard = ({ item }) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <div className="card-x overflow-hidden group hover:shadow-lg transition-all duration-300">
        <div className="aspect-video overflow-hidden rounded-t-xl">
          <img
            src={item.image || "/placeholder.svg"}
            alt="Initiative"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <p className="text-gray-500 text-sm mb-2 flex items-center gap-1">
            <Calendar className="w-4 h-4 text-primary" />
            {item.date}
          </p>
          <p
            className={`text-gray-600 text-sm leading-relaxed ${
              expanded ? "line-clamp-none" : "line-clamp-3"
            } transition-all duration-300`}
          >
            {item.description}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-primary font-medium text-sm hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Initiatives", href: "/initiatives" },
            { label: "Social Work" },
          ]}
        />

        {/* Hero Section */}
        <section className="section-x relative from-primary">
          <div className="absolute inset-0">
            <img
              src="/social-hero.jpg"
              alt="Volunteers helping communities"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="container-x relative text-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empowering Mannar — Where Compassion Meets the Coast
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Explore how Mannar’s people, traditions, and communities come
              together to build resilience, uplift livelihoods, and nurture a
              future rooted in unity and care.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="sticky top-16 z-10 bg-white shadow-sm py-6">
          <div className="container-x w-full md:w-2/5 relative">
            <input
              type="text"
              placeholder="Search initiatives..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              className="w-full pl-4 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
            />
          </div>
        </section>

        {/* Initiatives Section */}
        <section className="section-x">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Featured Initiatives
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedInitiatives.map((item, index) => (
                <InitiativeCard key={index} item={item} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                  className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`px-4 py-2 rounded-lg ${
                        p === page
                          ? "bg-primary text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    >
                      {p}
                    </button>
                  )
                )}
                <button
                  onClick={() =>
                    setPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={page === totalPages}
                  className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Events Section */}
        {/* <section className="section-x bg-gray-50">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Upcoming Events & Campaigns
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div key={index} className="card-x">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{event.name}</h3>
                      <p className="text-sm text-primary">{event.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
