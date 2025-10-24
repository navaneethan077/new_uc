"use client";
import { useState, useEffect } from "react";
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Calendar } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";

interface Initiative {
  description: string;
  date: string;
  image: string;
}

interface Event {
  name: string;
  date: string;
  description: string;
}

export default function SocialWorkPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 6;

  const initiatives: Initiative[] = [
    {
      description:
        "A youth-driven mission across Mannar's beaches — from Pesalai to Talaimannar — focused on cleaning shorelines and educating fishermen and students on marine conservation and plastic reduction.",
      date: "August 12, 2025",
      image: "/mannar-coast.jpg",
    },
    {
      description:
        "A social entrepreneurship project empowering Mannar's women to preserve traditional weaving and handloom artistry, promoting self-employment through skill training and digital marketing support.",
      date: "July 22, 2025",
      image: "/mannar-handloom.jpg",
    },
    {
      description:
        "An awareness and support campaign providing safety gear, financial literacy training, and sustainable fishing practices for Mannar's coastal fishing communities.",
      date: "June 30, 2025",
      image: "/mannar-coast.jpg",
    },
    {
      description:
        "A digital literacy and career guidance program helping Mannar's rural youth gain coding, design, and language skills through weekend bootcamps and mentoring sessions.",
      date: "May 18, 2025",
      image: "/mannar-youth.jpg",
    },
    {
      description:
        "A community-led effort restoring Mannar's vital mangroves, combining local fisherman knowledge with environmental science to protect coastlines and biodiversity.",
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

  const events: Event[] = [
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

  const InitiativeCard = ({ item }: { item: Initiative }) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    
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

  const EventCard = ({ event }: { event: Event }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-primary mb-2">{event.name}</h3>
      <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
        <Calendar className="w-4 h-4 text-primary" />
        {event.date}
      </p>
      <p className="text-gray-600 text-sm leading-relaxed">
        {event.description}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
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
              Explore how Mannar's people, traditions, and communities come
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              className="w-full pl-4 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
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
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our ongoing and completed projects that are making a 
                real difference in the lives of Mannar's communities.
              </p>
            </div>

            {filteredInitiatives.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No initiatives found matching your search.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedInitiatives.map((item, index) => (
                    <InitiativeCard key={index} item={item} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center gap-2">
                    <button
                      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                      disabled={page === 1}
                      className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50 hover:bg-primary-dark transition-colors duration-200"
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (p) => (
                        <button
                          key={p}
                          onClick={() => setPage(p)}
                          className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
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
                      className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50 hover:bg-primary-dark transition-colors duration-200"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Events Section */}
        <section className="section-x bg-gray-50">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Upcoming Events
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join us in our upcoming community events and make a difference together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="section-x bg-primary text-white">
          <div className="container-x text-center">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to make a difference in Mannar? Join our community of volunteers 
              and be part of the change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Become a Volunteer
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-200">
                Donate Now
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}