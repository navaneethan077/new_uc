"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, Award, Clock, ShieldCheck, Lightbulb, Users, TrendingUp } from "lucide-react";

import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";

export default function ChairmanPage() {
  const { language } = useLanguage();
  const chairmanContent = translations[language].ChairmanPage;

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
              {chairmanContent.hero.name}
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 mb-8"
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
              {chairmanContent.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 🗣 Combined Section – Message + Profile + Future Goals */}
      <section className="relative z-20 -mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 md:p-16"
          >
            {/* Chairman’s Message */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Chairman’s Message</h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                A warm welcome to all our valued clients, partners, and team members.
              </p>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Our mission is to lead with vision, build with integrity, and deliver innovation that matters.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Together, we are shaping the future of technology and trust.
              </p>
            </div>

            {/* Chairman Profile Section (Left Image, Right Details) */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Left – Chairman Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <Image
                  src="/social-hero.jpg" // 👉 Replace with your actual chairman image
                  alt="Chairman"
                  width={1000}   // smaller size
                  height={350}  // smaller size
                  className="rounded-3xl shadow-xl object-cover"
                />
              </motion.div>

              {/* Right – Profile Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center md:text-left">
                  Chairman’s Profile
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Education */}
                  <motion.div whileHover={{ scale: 1.05 }} className="p-5 bg-slate-50 rounded-2xl shadow-md border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="text-primary w-7 h-7" />
                      <h3 className="text-lg font-semibold text-primary">Education</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      MBA in Business Leadership – Oxford University
                    </p>
                  </motion.div>

                  {/* Experience */}
                  <motion.div whileHover={{ scale: 1.05 }} className="p-5 bg-slate-50 rounded-2xl shadow-md border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="text-primary w-7 h-7" />
                      <h3 className="text-lg font-semibold text-primary">Experience</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      20+ Years in Corporate Leadership and Innovation
                    </p>
                  </motion.div>

                  {/* Awards */}
                  <motion.div whileHover={{ scale: 1.05 }} className="p-5 bg-slate-50 rounded-2xl shadow-md border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="text-primary w-7 h-7" />
                      <h3 className="text-lg font-semibold text-primary">Awards</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Best Business Leader (2021), Visionary Entrepreneur (2023)
                    </p>
                  </motion.div>

                  {/* Years of Service */}
                  <motion.div whileHover={{ scale: 1.05 }} className="p-5 bg-slate-50 rounded-2xl shadow-md border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="text-primary w-7 h-7" />
                      <h3 className="text-lg font-semibold text-primary">Years of Service</h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      15 years as Chairman & Founder of DEAL PARTNER
                    </p>
                  </motion.div>
                </div>

                {/* Vision Box */}
                <motion.div whileHover={{ scale: 1.02 }} className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl shadow-inner">
                  <h3 className="text-xl font-semibold text-primary mb-3">Vision</h3>
                  <p className="text-slate-700 italic leading-relaxed">
                    “Empowering teams to deliver excellence with passion and purpose.”
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Future Goals Section (Left Text, Right Image) */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left – Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-primary mb-6">Future Goals</h2>
                <p className="text-lg text-slate-700 mb-4">
                  Our goal is to continue leading innovation, expand global reach, and ensure sustainable growth.
                </p>
                <ul className="text-slate-700 space-y-3 mb-4">
                  <li>• Strengthen digital transformation initiatives</li>
                  <li>• Foster eco-friendly and sustainable business models</li>
                  <li>• Develop global partnerships for tech innovation</li>
                </ul>
                <p className="italic text-slate-600">
                  “Our goal is to inspire change and empower every client to succeed.”
                </p>
              </motion.div>

              {/* Right – Image */}
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

      {/* 🧭 Values & Philosophy */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Values & Philosophy
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { title: "Integrity", desc: "We believe honesty builds trust and lasting partnerships.", icon: <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" /> },
              { title: "Innovation", desc: "We embrace creativity and cutting-edge solutions.", icon: <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" /> },
              { title: "Teamwork", desc: "Collaboration fuels our success and growth.", icon: <Users className="w-12 h-12 text-primary mx-auto mb-4" /> },
              { title: "Growth", desc: "We strive for continuous learning and excellence.", icon: <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" /> },
            ].map((val, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 bg-card rounded-2xl shadow-lg">
                {val.icon}
                <h3 className="text-xl font-semibold text-primary mb-2">{val.title}</h3>
                <p className="text-muted-foreground text-sm">{val.desc}</p>
              </motion.div>
            ))}
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
