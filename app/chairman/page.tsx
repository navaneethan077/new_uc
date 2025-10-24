"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Award,
  Clock,
  ShieldCheck,
  Lightbulb,
  Users,
  TrendingUp,
} from "lucide-react";

import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";

export default function ChairmanPage() {
  const { language } = useLanguage();
  const chairman = translations[language].ChairmanPage;

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />

      {/* 🏛 Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[80vh] flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/Group1.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end w-full py-20">
          <div className="max-w-2xl text-right">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {chairman.hero.name}
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 mb-8 italic"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              “Great companies are built on trust, innovation, and teamwork.”
            </motion.p>

            {/* Animated Counters */}
            <div className="flex justify-end space-x-8 text-white mb-8">
              {[
                { number: "20+", label: "Years Experience" },
                { number: "100+", label: "Projects" },
                { number: "10K+", label: "Clients" },
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ scale: 1.1 }} className="text-center">
                  <p className="text-4xl font-bold text-primary">{item.number}</p>
                  <p>{item.label}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              {chairman.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 🗣 Message + Profile + Goals */}
      <section className="relative z-20 -mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-16"
          >
            {/* Chairman Message */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                {chairman.messageSection.title}
              </h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                {chairman.messageSection.welcome}
              </p>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                {chairman.messageSection.mission}
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                {chairman.messageSection.unity}
              </p>
            </div>

            {/* Profile Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <Image
                  src="/social-hero.jpg"
                  alt="Chairman"
                  width={1000}
                  height={350}
                  className="rounded-3xl shadow-xl object-cover"
                />
              </motion.div>

              {/* Right Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center md:text-left">
                  {chairman.profile.title}
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <GraduationCap className="text-primary w-7 h-7" />,
                      title: chairman.profile.education.title,
                      desc: chairman.profile.education.content,
                    },
                    {
                      icon: <Briefcase className="text-primary w-7 h-7" />,
                      title: chairman.profile.experience.title,
                      desc: chairman.profile.experience.content,
                    },
                    {
                      icon: <Award className="text-primary w-7 h-7" />,
                      title: chairman.profile.awards.title,
                      desc: chairman.profile.awards.content,
                    },
                    {
                      icon: <Clock className="text-primary w-7 h-7" />,
                      title: chairman.profile.years.title,
                      desc: chairman.profile.years.content,
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="p-5 bg-slate-50 rounded-2xl shadow-md border border-slate-200"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {item.icon}
                        <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Vision */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl shadow-inner"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {chairman.profile.vision.title}
                  </h3>
                  <p className="text-slate-700 italic leading-relaxed">
                    “{chairman.profile.vision.quote}”
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Future Goals */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-primary mb-6">
                  {chairman.goals.title}
                </h2>
                <p className="text-lg text-slate-700 mb-4">{chairman.goals.para}</p>
                <ul className="text-slate-700 space-y-3 mb-4">
                  {chairman.goals.list.map((goal, i) => (
                    <li key={i}>• {goal}</li>
                  ))}
                </ul>
                <p className="italic text-slate-600">“{chairman.goals.quote}”</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <Image
                  src="/serv1.png"
                  alt="Future Vision"
                  width={500}
                  height={350}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🧭 Valuesmmmmmmm & Philosophy */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {chairman.values.title}
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {chairman.values.items.map((val, i) => {
              const icons = [ShieldCheck, Lightbulb, Users, TrendingUp];
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-card rounded-2xl shadow-lg"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {val.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 📞 Contact Section */}
      <ContactSection />

      {/* 🔚 Footer */}
      <Footer />
    </div>
  );
}
