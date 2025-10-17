"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { Search, X, Grid3X3, List, Filter } from "lucide-react";
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";

type Category = "for-sale" | "services" | "jobs" | "notices";

type Ad = {
  id: number;
  title: string;
  category: Category;
  description: string;
  image?: string;
  featured?: boolean;
  contact?: string;
  date: string;
};

const DEFAULT_IMAGE = "/ads.jpg"; // <- default fallback image

const INITIAL_ADS: Ad[] = [
  { id: 1, title: "Bicycle — Good condition", category: "for-sale", description: "Well-maintained bicycle, 21-speed. Contact: 077-1234567", image: "/bicycle.webp", featured: true, contact: "077-1234567", date: "2025-10-12" },
  { id: 2, title: "Math Tutor Available", category: "services", description: "Experienced tutor for grade 6-11. Call 077-9876543", image: "/tutor.jpeg", featured: false, contact: "077-9876543", date: "2025-10-10" },
  { id: 3, title: "Housekeeping Job", category: "jobs", description: "Part-time, 3 days a week. Contact via SMS", featured: false, date: "2025-10-09" },
  { id: 4, title: "Community Meeting Notice", category: "notices", description: "Town hall meeting on Oct 20 at 6pm.", featured: true, date: "2025-10-08" },
  { id: 5, title: "Used Mobile Phone", category: "for-sale", description: "Phone in working order, small scratch. Price negotiable.", image: "/phone.avif", featured: false, date: "2025-10-07" },
];

const formatDate = (iso: string) => {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString();
  } catch {
    return iso;
  }
};

export default function AdsPage(): JSX.Element {
  const [ads, setAds] = useState<Ad[]>(INITIAL_ADS);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");
  const PAGE_SIZE = 6;

  const [activeAd, setActiveAd] = useState<Ad | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [posting, setPosting] = useState(false);
  const [message, setMessage] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ads.filter((a) => {
      const matchesQ = q === "" || (`${a.title} ${a.description}`).toLowerCase().includes(q);
      const matchesCat = category === "all" || a.category === category;
      return matchesQ && matchesCat;
    });
  }, [ads, query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages]);

  const openAd = (ad: Ad) => {
    setActiveAd(ad);
    setShowModal(true);
  };
  const closeModal = () => {
    setActiveAd(null);
    setShowModal(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPosting(true);
    setMessage("");
    const fd = new FormData(e.currentTarget);
    const newAd: Ad = {
      id: Date.now(),
      title: (fd.get("title") as string) || "Untitled",
      category: (fd.get("category") as Category) || "for-sale",
      description: (fd.get("description") as string) || "",
      image: (fd.get("imageUrl") as string) || undefined,
      contact: (fd.get("contact") as string) || undefined,
      featured: false,
      date: new Date().toISOString().slice(0, 10),
    };

    setTimeout(() => {
      setAds((prev) => [newAd, ...prev]);
      setPosting(false);
      setMessage("Thanks — your ad has been submitted for review.");
      (e.target as HTMLFormElement).reset();
      setPage(1);
    }, 600);
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main >
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Community Ads" }]} />

        {/* Hero Section */}
        <section className="section-x relative from-primary">
          <div className="absolute inset-0">
            <img
              src="/social-hero.jpg"
              alt="Mannar Community Marketplace"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative text-center z-10 py-20 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mannar Community Marketplace
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Buy, sell, find services, and connect with your neighbors. A trusted platform for Mannar residents to share opportunities and build community.
            </p>
          </div>
        </section>

        {/* Sticky Filter Section */}
        <section className="sticky top-16 z-10 bg-card shadow-sm py-6 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-2/5">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search ads..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-[oklch(0.2_0.08_250)] focus:border-[oklch(0.2_0.08_250)] focus:outline-none bg-background text-foreground"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                {/* View Toggle */}
                <div className="flex bg-muted rounded-lg p-1.5 border border-border">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-all duration-300 ${viewMode === "grid" ? "bg-background shadow-sm border border-border" : "hover:bg-muted/80"}`}
                    title="Grid View"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("masonry")}
                    className={`p-2 rounded-md transition-all duration-300 ${viewMode === "masonry" ? "bg-background shadow-sm border border-border" : "hover:bg-muted/80"}`}
                    title="Masonry View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Category Filter */}
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setPage(1);
                  }}
                  className="px-4 py-2 rounded-lg border bg-background text-foreground"
                >
                  <option value="all">All categories</option>
                  <option value="for-sale">For Sale</option>
                  <option value="services">Services</option>
                  <option value="jobs">Jobs</option>
                  <option value="notices">Notices</option>
                </select>

                {/* Clear */}
                {(query || category !== "all") && (
                  <button
                    onClick={() => {
                      setQuery("");
                      setCategory("all");
                      setPage(1);
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    <X className="w-5 h-5" /> Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="px-4 py-8 container-x">
          {/* Ads Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"} gap-6`}>
                {pageItems.length === 0 && (
                  <div className="col-span-full bg-card p-6 rounded-2xl shadow text-center">No ads found.</div>
                )}
                {pageItems.map((ad) => (
                  <article key={ad.id} className="bg-card rounded-2xl shadow overflow-hidden border border-border">
                    <button onClick={() => openAd(ad)} className="w-full text-left">
                      <div className="h-44 bg-muted overflow-hidden relative">
                        {/* Use default image when ad.image is missing */}
                        <Image src={ad.image ?? DEFAULT_IMAGE} alt={ad.title} fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">{ad.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{ad.description.slice(0, 120)}{ad.description.length > 120 ? '...' : ''}</p>
                        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                          <span className="capitalize">{ad.category.replace('-', ' ')}</span>
                          <span>{formatDate(ad.date)}</span>
                        </div>
                      </div>
                    </button>
                  </article>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <nav className="inline-flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button key={i} onClick={() => setPage(i + 1)} className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-[oklch(0.2_0.08_250)] text-white' : 'border'}`}>{i + 1}</button>
                  ))}
                </nav>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="bg-card p-4 rounded-2xl shadow">
                <h4 className="font-semibold">Advert Guidelines</h4>
                <ol className="mt-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Keep text clear & truthful.</li>
                  <li>No illegal or harmful content.</li>
                  <li>Prefer local contact info.</li>
                </ol>
              </div>

              <div className="bg-card p-4 rounded-2xl shadow text-center">
                <h4 className="font-semibold">Need help?</h4>
                <p className="text-sm text-muted-foreground mt-2">Call: +94 76 482 2492</p>
                <button onClick={() => document.getElementById("post-form")?.scrollIntoView({ behavior: 'smooth' })} className="mt-3 inline-block px-4 py-2 rounded-lg bg-[oklch(0.2_0.08_250)] text-white">Post an Ad</button>
              </div>
            </aside>
          </section>

          {/* Post Form */}
          {/* <section id="post-form" className="max-w-3xl mx-auto mt-8">
            <div className="bg-card p-6 rounded-2xl shadow">
              <h2 className="text-xl font-semibold">Post a Community Ad</h2>
              <p className="text-sm text-muted-foreground mt-1">Ads are reviewed by Mannar UC before publishing.</p>

              <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-3">
                <input id="title" name="title" required placeholder="Title (e.g., 'Bike for sale')" className="p-3 rounded-md border" />
                <select id="categorySelect" name="category" className="p-3 rounded-md border">
                  <option value="for-sale">For Sale</option>
                  <option value="services">Services</option>
                  <option value="jobs">Jobs</option>
                  <option value="notices">Notices</option>
                </select>
                <textarea id="description" name="description" rows={4} required placeholder="Description" className="p-3 rounded-md border"></textarea>
                <input id="contact" name="contact" placeholder="Contact info (phone or email)" className="p-3 rounded-md border" />
                <input id="imageUrl" name="imageUrl" placeholder="Image URL (optional)" className="p-3 rounded-md border" />

                <div className="flex gap-3">
                  <button type="submit" disabled={posting} className="px-4 py-2 rounded-lg bg-[oklch(0.2_0.08_250)] text-white">{posting ? 'Posting…' : 'Submit for Review'}</button>
                  <button type="reset" className="px-4 py-2 rounded-lg border">Reset</button>
                </div>

                {message && <p className="text-sm text-emerald-600">{message}</p>}
              </form>
            </div>
          </section> */}
        </div>
      </main>

      <Footer />

      {showModal && activeAd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-w-3xl w-full bg-card rounded-2xl shadow p-6 relative">
            <button onClick={closeModal} className="absolute top-4 right-4 p-2 rounded-full border">✕</button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                {/* Modal also uses default image when missing */}
                <Image src={activeAd.image ?? DEFAULT_IMAGE} alt={activeAd.title} width={400} height={300} className="w-full h-48 object-cover rounded-md" />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold">{activeAd.title}</h3>
                <p className="mt-2 text-muted-foreground">{activeAd.description}</p>
                {activeAd.contact && <p className="mt-4 text-sm text-muted-foreground">Contact: {activeAd.contact}</p>}
                <p className="text-sm text-muted-foreground">Posted: {formatDate(activeAd.date)}</p>
                <div className="mt-4 flex gap-3">
                  {activeAd.contact && <a href={`tel:${activeAd.contact}`} className="px-4 py-2 rounded bg-[oklch(0.2_0.08_250)] text-white">Call</a>}
                  <button onClick={() => { navigator.share ? navigator.share({ title: activeAd.title, text: activeAd.description }) : alert('Share your ad link'); }} className="px-4 py-2 rounded border">Share</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}