"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";

export default function ChairmanPage() {
  const { t, language } = useLanguage();
  const chairmanContent = translations[language].ChairmanPage;

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[70vh] flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent parallax-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-right py-16 w-full flex justify-end">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-6 animate-fade-in-up">
              {chairmanContent.hero.name}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 animate-fade-in-up">
              {chairmanContent.hero.description}
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 animate-pulse-slow"
            >
              {chairmanContent.hero.cta} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Card */}
      <div className="relative -mt-24 max-w-7xl mx-auto bg-card shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 z-10 transform transition-all duration-300 hover:shadow-3xl">

        {/* Who is Balen */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {chairmanContent.whoIsBalen.title}
          </h2>
          <div className="text-gray-600 leading-relaxed text-base md:text-lg max-w-4xl mx-auto space-y-6 text-justify">
            {chairmanContent.whoIsBalen.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Academics & Qualifications */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="flex justify-center md:justify-end">
            <Image
              src="/balen-academic.png"
              alt={chairmanContent.academics.imageAlt}
              width={600}
              height={600}
              className="rounded-xl shadow-lg w-full md:w-[85%] object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              {chairmanContent.academics.title}
            </h2>
            <ul className="space-y-5 text-foreground/80">
              {chairmanContent.academics.qualifications.map((q, i) => (
                <li key={i}>
                  <p className="font-semibold text-lg">{q.degree}</p>
                  <p className="text-sm text-muted-foreground">{q.institution}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Honours, Awards & Publications */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center md:text-left">
              {chairmanContent.awards.title}
            </h2>
            <ul className="space-y-6 text-foreground/80">
              {chairmanContent.awards.items.map((award, i) => (
                <li key={i} className="pb-3 border-b border-gray-100">
                  <span className="font-semibold text-lg">{award.title}</span>
                  <p className="text-sm text-muted-foreground mt-1">{award.details}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/balen-awards.png"
              alt={chairmanContent.awards.imageAlt}
              width={600}
              height={600}
              className="rounded-xl shadow-lg w-full md:w-[85%] object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>

      {/* Leadership & Culture Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            {chairmanContent.leadership.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {chairmanContent.leadership.mayorSection.title}
              </h3>
              <p className="text-foreground/80 mb-4">
                {chairmanContent.leadership.mayorSection.description}
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {chairmanContent.leadership.mayorSection.initiatives.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {chairmanContent.leadership.cultureSection.title}
              </h3>
              <p className="text-foreground/80">
                {chairmanContent.leadership.cultureSection.description}
              </p>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-foreground/80 italic">
                  {chairmanContent.leadership.cultureSection.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
