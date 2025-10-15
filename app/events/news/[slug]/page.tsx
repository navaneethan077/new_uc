// app/events/news/[slug]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";

import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  User,
  Share2,
  Bookmark,
  Printer,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Check,
} from "lucide-react";

import { useLanguage } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";

type NewsEvent = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime?: string;
  image?: string;
  category?: string;
  slug: string;
  shares?: number;
};

// const newsevents: NewsEvent[] = [
//   {
//     id: 1,
//     title: "New Water Treatment Plant Inaugurated",
//     excerpt:
//       "The Mannar Urban Council officially opened a state-of-the-art water treatment facility to serve 15,000 residents with clean, safe drinking water.",
//     content: `In a significant milestone for public health infrastructure, the Mannar Urban Council inaugurated its new water treatment plant yesterday.
// The facility, built with a budget of Rs. 45 million, incorporates advanced filtration and purification technologies, including reverse osmosis, UV sterilization, and sedimentation processes, ensuring clean and safe water for all residents.

// Mayor Mr. S. Perera highlighted that this project will not only improve water quality but also significantly reduce waterborne diseases in the region. He emphasized the council's commitment to sustainable development and modern infrastructure.

// The plant has a capacity to process up to 10,000 liters of water per hour, catering to households, schools, and local businesses. In addition, the facility includes an automated monitoring system to ensure continuous quality checks and maintenance alerts.

// Environmental experts praised the project for integrating energy-efficient systems, including solar-powered pumps and rainwater harvesting mechanisms. Local community leaders expressed appreciation for the council’s efforts in prioritizing public health and long-term sustainability.

// Residents attending the inauguration ceremony were given guided tours of the plant and educational sessions on water conservation practices. The council has also planned workshops for schools in Mannar to raise awareness on responsible water usage.

// This development is expected to serve as a model for other municipalities looking to upgrade their water treatment infrastructure while maintaining environmental and operational efficiency.`,
//     author: "Municipal Communications",
//     date: "2024-01-15",
//     readTime: "8:00 PM",
//     image: "/new.png",
//     category: "Infrastructure",
//     slug: "new-water-treatment-plant-inaugurated",
//     shares: 12,
//   },
//   {
//     id: 2,
//     title: "Digital Services Portal Launched",
//     excerpt:
//       "Citizens can now access municipal services online through our new digital platform, reducing wait times and improving efficiency.",
//     content:
//       "The Mannar Urban Council has launched its comprehensive digital services portal, marking a significant step towards modernizing municipal operations. Citizens can now apply for certificates, pay taxes, and access various services online...",
//     author: "IT Department",
//     date: "2024-01-12",
//     readTime: "8:00 PM",
//     image: "/new.png",
//     category: "Technology",
//     slug: "digital-services-portal-launched",
//     shares: 3,
//   },
//   {
//     id: 3,
//     title: "Community Garden Project Success",
//     excerpt:
//       "The pilot community garden project has yielded impressive results, with plans to expand to five more locations across the municipality.",
//     content:
//       "The community garden initiative launched six months ago has exceeded expectations. Located in the heart of Ward 3, the garden has produced over 500kg of fresh vegetables, distributed among participating families...",
//     author: "Environmental Division",
//     date: "2024-01-10",
//     readTime: "8:00 PM",
//     image: "/new.png",
//     category: "Environment",
//     slug: "community-garden-project-success",
//     shares: 7,
//   },
//   // ... other items omitted for brevity (keep the same data set you already have)
// ];

export default function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { t: _, language } = useLanguage(); // keep compatibility if hook returns a t helper
  const lang = language || "en";
  const navContent = translations[lang].nav;
  const labels = translations[lang].NewsLabels;
  const newsevents = translations[lang].eventsPage.NewsEventPage;

  const event = newsevents.find((e) => e.slug === params.slug);
  const [showShareModal, setShowShareModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [saveNotification, setSaveNotification] = useState(false);
  const [shareCount, setShareCount] = useState(event?.shares || 0);

  if (!event) return notFound();

  // Load saved state from localStorage
  useEffect(() => {
    try {
      const savedRaw = localStorage.getItem("savedNews");
      const savedItems = savedRaw ? JSON.parse(savedRaw) : [];
      setIsSaved(savedItems.includes(event.id));
    } catch (err) {
      setIsSaved(false);
    }
  }, [event.id]);

  // Share functionality
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = event.title;
    const text = event.excerpt;
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      email: `mailto:?subject=${encodeURIComponent(
        title
      )}&body=${encodeURIComponent(text + "\n\n" + url)}`,
    };

    if (platform === "email") window.location.href = shareUrls.email;
    else
      window.open(
        shareUrls[platform],
        "_blank",
        "width=600,height=400,noopener,noreferrer"
      );

    setShareCount((prev) => prev + 1);
    setShowShareModal(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // small accessible feedback
      setShowShareModal(false);
      // show a temporary toast using saveNotification slot for feedback reuse
      setSaveNotification(true);
      setTimeout(() => setSaveNotification(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleSave = () => {
    try {
      const savedRaw = localStorage.getItem("savedNews");
      const savedItems: number[] = savedRaw ? JSON.parse(savedRaw) : [];
      if (isSaved) {
        const updatedItems = savedItems.filter((id) => id !== event.id);
        localStorage.setItem("savedNews", JSON.stringify(updatedItems));
        setIsSaved(false);
      } else {
        const updatedItems = [...savedItems, event.id];
        localStorage.setItem("savedNews", JSON.stringify(updatedItems));
        setIsSaved(true);
        setSaveNotification(true);
        setTimeout(() => setSaveNotification(false), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePrint = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${escapeHtml(event.title)}</title>
        <meta charset="utf-8" />
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
          .title { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
          .meta { font-size: 14px; color: #666; margin-bottom: 20px; }
          .content { line-height: 1.6; }
        </style>
      </head>
      <body>
        <div class="title">${escapeHtml(event.title)}</div>
        <div class="meta">Published: ${new Date(
          event.date
        ).toLocaleDateString()} | Author: ${escapeHtml(event.author)}</div>
        <div class="content">${event.content
          .split("\n")
          .map((p) => `<p>${escapeHtml(p)}</p>`)
          .join("")}</div>
      </body>
      </html>
    `;
    const printWindow = window.open("", "_blank", "noopener,noreferrer");
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 300);
    }
  };

  const relatedNews = newsevents
    .filter((e) => e.slug !== event.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navigation />

      {saveNotification && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2 animate-in slide-in-from-right">
          <Check className="w-4 h-4" /> {labels.articleSaved}
        </div>
      )}

      {showShareModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 animate-in fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {labels.shareThisArticle}
              </h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close share dialog"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <button
                onClick={() => handleShare("facebook")}
                className="flex flex-col items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                aria-label="Share to Facebook"
              >
                <Facebook className="w-6 h-6 text-blue-600" />
                <span className="text-xs text-gray-700">Facebook</span>
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="flex flex-col items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                aria-label="Share to Twitter"
              >
                <Twitter className="w-6 h-6 text-blue-400" />
                <span className="text-xs text-gray-700">Twitter</span>
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="flex flex-col items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                aria-label="Share to LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-blue-700" />
                <span className="text-xs text-gray-700">LinkedIn</span>
              </button>
              <button
                onClick={() => handleShare("email")}
                className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Share via Email"
              >
                <Mail className="w-6 h-6 text-gray-600" />
                <span className="text-xs text-gray-700">Email</span>
              </button>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={
                  typeof window !== "undefined" ? window.location.href : ""
                }
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50"
                aria-label="Share link"
              />
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
              >
                {labels.copyLink}
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="relative pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <Breadcrumbs
              items={[
                { label: navContent.home, href: "/" },
                { label: navContent.news, href: "/events/news" },
                { label: event.title },
              ]}
            />
          </div>

          <button
            onClick={() => historyBackSafely()}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-6 group"
            aria-label={labels.backToAllNews}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">{labels.backToAllNews}</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <article className="lg:col-span-8 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {new Date(event.date).toLocaleDateString(lang, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {event.readTime}
                    </span>
                  </div>
                </div>
                <h1 className="text-4xl font-bold leading-tight mb-4">
                  {event.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{event.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{event.author}</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Image + excerpt */}
                <div className="w-full mb-8 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={1200}
                    height={600}
                    className="w-full h-64 object-cover"
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    {event.excerpt}
                  </p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                    {event.excerpt}
                  </p>
                  <div className="text-gray-800 leading-7 space-y-6">
                    {event.content.split("\n").map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-3 justify-between items-center">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{labels.publishedBy}</span>
                    <span>•</span>
                    <span>
                      {labels.lastUpdated}:{" "}
                      {new Date().toLocaleDateString(lang)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setShowShareModal(true)}
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-100"
                      aria-label={labels.shareThisArticle}
                    >
                      <Share2 className="w-4 h-4" /> {labels.shareThisArticle} (
                      {shareCount})
                    </button>
                    <button
                      onClick={handleSave}
                      className={`flex items-center gap-2 px-4 py-2 transition-colors rounded-lg ${
                        isSaved
                          ? "text-primary bg-primary-light/20"
                          : "text-gray-600 hover:text-primary hover:bg-gray-100"
                      }`}
                      aria-pressed={isSaved}
                    >
                      <Bookmark className="w-4 h-4" />{" "}
                      {isSaved ? labels.saved : labels.save}
                    </button>
                    <button
                      onClick={handlePrint}
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-100"
                    >
                      <Printer className="w-4 h-4" /> {labels.print}
                    </button>
                  </div>
                </div>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {labels.relatedNews}
              </h3>
              {relatedNews.map((related) => (
                <Link
                  key={related.id}
                  href={`/events/news/${related.slug}`}
                  className="block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-40 bg-gray-200 relative">
                    <Image
                      src={related.image || "/placeholder.svg"}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-primary">
                      <span>{labels.readMore}</span>
                      <ArrowLeft className="w-3 h-3 rotate-180" />
                    </div>
                  </div>
                </Link>
              ))}
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* Utility helpers */

function escapeHtml(unsafe: string) {
  return unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function historyBackSafely() {
  // prefer router back if available, otherwise fallback
  try {
    if (typeof window !== "undefined") {
      if (window.history.length > 1) window.history.back();
      else window.location.href = "/events/news";
    }
  } catch (e) {
    window.location.href = "/events/news";
  }
}
