// app/services/[category]/[subService]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { serviceCategories } from "@/lib/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { useState } from "react";

interface ServiceDetail {
  label: string;
  value: string;
}

export default function ServicePage() {
  const params = useParams();
  const categoryId = params.category as string;
  const subServiceId = params.subService as string;

  const category = serviceCategories.find((c) => c.id === categoryId);
  const subService = category?.subServices.find((s) => s.id === subServiceId);

  if (!category || !subService) return notFound();

  const locationDetails: ServiceDetail[] = [
    { label: "District", value: subService.location?.district || "N/A" },
    { label: "Division", value: subService.location?.division || "N/A" },
    { label: "GS Division", value: subService.location?.gsDivision || "N/A" },
  ];

  const serviceInfo: ServiceDetail[] = [
    { label: "Service Type", value: subService.type || "N/A" },
    { label: "Responsible Authority", value: subService.authority || "N/A" },
    { label: "Date Created", value: subService.dateCreated || "N/A" },
    { label: "Service Date", value: subService.serviceDate || "N/A" },
    // { label: "Status", value: subService.status || "Active" },
  ];

  const galleryImages: string[] = subService.gallery || [
    "/after.jpg",
    "/beach2.jpg",
    "/beach3.jpg",
    "/beach4.jpg",
    "/beach5.jpg",
    "/beach6.jpg",
  ];

  return (
    <div className="font-sans bg-background text-foreground min-h-screen">
      {/* Layout Components */}
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            {subService.title}
          </h1>
          <p className="text-muted-foreground mb-6">{subService.description}</p>
          <Link
            href="/request-service"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
          >
            Request Service
          </Link>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={subService.mainImage || "/images/services/placeholder1.jpg"}
            alt={subService.title}
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* Before / After Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Before & After
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Before Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-xl shadow-md h-80">
              <Image
                src={subService.beforeImage || "/images/services/placeholder2.jpg"}
                alt="Before Service"
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
              Before
            </span>
          </div>

          {/* After Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-xl shadow-md h-80">
              <Image
                src={subService.afterImage || "/images/services/placeholder3.jpg"}
                alt="After Service"
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
              After
            </span>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Service Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location */}
          <div className="bg-card rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-card-foreground mb-4 text-xl">
              Location Information
            </h3>
            <ul className="space-y-3">
              {locationDetails.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                >
                  <span className="font-medium text-muted-foreground">
                    {item.label}:
                  </span>
                  <span className="text-card-foreground">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Info */}
          <div className="bg-card rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-card-foreground mb-4 text-xl">
              Service Information
            </h3>
            <ul className="space-y-3">
              {serviceInfo.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                >
                  <span className="font-medium text-muted-foreground">
                    {item.label}:
                  </span>
                  {item.label === "Status" ? (
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {item.value}
                    </span>
                  ) : (
                    <span className="text-card-foreground">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-card rounded-xl shadow-lg p-6 md:col-span-2 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-semibold text-card-foreground mb-4 text-xl">
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center py-2 border-b border-border">
                <span className="font-medium text-muted-foreground">
                  Contact Person:
                </span>
                <span className="text-card-foreground">
                  {subService.contact?.person || "N/A"}
                </span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-border">
                <span className="font-medium text-muted-foreground">Phone:</span>
                <span className="text-card-foreground">
                  {subService.contact?.phone || "N/A"}
                </span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="font-medium text-muted-foreground">Email:</span>
                <span className="text-card-foreground">
                  {subService.contact?.email || "N/A"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-card rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-6">
            Service Description
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {subService.longDescription || "No further details available."}
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">
          Image Gallery
        </h2>

        {galleryImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`Gallery image ${idx + 1}`}
                  width={400}
                  height={250}
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground italic">
            No gallery images available yet 🌅
          </p>
        )}
      </section>

      {/* CTA Section */}
   <section className="bg-secondary py-16">
  <div className="max-w-3xl mx-auto text-center text-secondary-foreground px-4">
    <h2 className="text-3xl font-semibold mb-4">Need This Service?</h2>
    <p className="mb-6 text-lg text-secondary-foreground/80">
      Submit a request and our team will schedule the service for your area.
    </p>
    <Link
      href="/request-service"
      className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition duration-300 text-lg"
    >
      Request Service Now
    </Link>
  </div>
</section>

      {/* Footer */}
      <Footer />
    </div>
  );
}