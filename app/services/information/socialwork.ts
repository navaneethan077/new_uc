// Updated social work page with service integration
"use client";
import { useState, useEffect } from "react";
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Calendar } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { socialWorkService, SocialWorkInitiative, SocialWorkEvent } from "@/services/socialWorkService";

export default function SocialWorkPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [initiatives, setInitiatives] = useState<SocialWorkInitiative[]>([]);
  const [events, setEvents] = useState<SocialWorkEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    fetchSocialWorkData();
  }, []);

  const fetchSocialWorkData = async () => {
    try {
      setLoading(true);
      const [initiativesResponse, eventsResponse] = await Promise.all([
        socialWorkService.getAllInitiatives(),
        socialWorkService.getAllEvents()
      ]);
      
      if (initiativesResponse.success) {
        setInitiatives(initiativesResponse.data as SocialWorkInitiative[]);
      }
      
      if (eventsResponse.success) {
        setEvents(eventsResponse.data as SocialWorkEvent[]);
      }
    } catch (error) {
      console.error('Error fetching social work data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredInitiatives = initiatives.filter((initiative) =>
    initiative.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredInitiatives.length / itemsPerPage);
  const paginatedInitiatives = filteredInitiatives.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const InitiativeCard = ({ item }: { item: SocialWorkInitiative }) => {
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

  if (loading) {
    return <div>Loading...</div>;
  }

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

        {/* Rest of your JSX remains the same */}
        {/* ... */}
      </main>

      <Footer />
    </div>
  );
}