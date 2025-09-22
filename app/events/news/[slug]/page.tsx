"use client"

import Link from "next/link"
import Image from "next/image"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ArrowLeft, Calendar, Clock, MapPin, Info } from "lucide-react"
import { notFound } from "next/navigation"

 const newsevents = [
    {
      id: 1,
      title: "New Water Treatment Plant Inaugurated",
      excerpt:
        "The Mannar Urban Council officially opened a state-of-the-art water treatment facility to serve 15,000 residents with clean, safe drinking water.",
      content:
        "In a significant milestone for public health infrastructure, the Mannar Urban Council inaugurated its new water treatment plant yesterday. The facility, built with a budget of Rs. 45 million, incorporates advanced filtration and purification technologies...",
      author: "Municipal Communications",
      date: "2024-01-15",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Infrastructure",
      slug: "new-water-treatment-plant-inaugurated"
    },
    {
      id: 2,
      title: "Digital Services Portal Launched",
      excerpt:
        "Citizens can now access municipal services online through our new digital platform, reducing wait times and improving efficiency.",
      content:
        "The Mannar Urban Council has launched its comprehensive digital services portal, marking a significant step towards modernizing municipal operations. Citizens can now apply for certificates, pay taxes, and access various services online...",
      author: "IT Department",
      date: "2024-01-12",
      readTime: "8:00 PM",
      image:"/new.png",
      category: "Technology",
      slug: "digital-services-portal-launched"
    },
    {
      id: 3,
      title: "Community Garden Project Success",
      excerpt:
        "The pilot community garden project has yielded impressive results, with plans to expand to five more locations across the municipality.",
      content:
        "The community garden initiative launched six months ago has exceeded expectations. Located in the heart of Ward 3, the garden has produced over 500kg of fresh vegetables, distributed among participating families...",
      author: "Environmental Division",
      date: "2024-01-10",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Environment",
      slug: "community-garden-project-success"
    },
    {
      id: 4,
      title: "New Public Transport Routes Announced",
      excerpt:
        "Three new bus routes will connect underserved neighborhoods starting next month, improving accessibility for 8,000 residents.",
      content: "Details...",
      author: "Transport Department",
      date: "2024-01-08",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Transport",
      slug: "new-public-transport-routes-announced"
    },
    {
      id: 5,
      title: "Youth Council Elections Conclude",
      excerpt:
        "Over 2,000 young voters participated in the first-ever Youth Council elections, marking a milestone in civic engagement.",
      content: "Details...",
      author: "Youth Affairs",
      date: "2024-01-05",
      readTime: "8:00 PM",
      image:"/new.png",
      category: "Youth Programs",
      slug: "youth-council-elections-conclude"
    },
    {
      id: 6,
      title: "Flood Prevention System Upgrade",
      excerpt:
        "The council has allocated Rs. 30 million to upgrade drainage systems in flood-prone areas ahead of monsoon season.",
      content: "Details...",
      author: "Public Works",
      date: "2024-01-03",
      readTime: "8:00 PM",
      image:"/new.png",
      category: "Infrastructure",
      slug: "flood-prevention-system-upgrade"
    },
    {
      id: 7,
      title: "Senior Wellness Center Opens",
      excerpt:
        "The new center offers free health screenings, yoga classes, and social activities for Mannar's senior population.",
      content: "Details...",
      author: "Health Department",
      date: "2023-12-28",
      readTime: "8:00 PM",
      image:"/new.png",
      category: "Community Outreach",
      slug: "senior-wellness-center-opens"
      
    },
    {
      id: 8,
      title: "Recycling Initiative Surpasses Targets",
      excerpt:
        "The city's recycling program collected 40% more materials than projected, thanks to community participation.",
      content: "Details...",
      author: "Environmental Division",
      date: "2023-12-20",
      readTime: "8:00 PM",
      image:"/new.png",
      category: "Environment",
      slug: "recycling-initiative-surpasses-targets"
    },
    {
      id: 9,
      title: "Road Safety Campaign Launched",
      excerpt:
        "A new road safety awareness campaign aims to reduce accidents by 25% through education and improved signage.",
      content: "Details...",
      author: "Public Safety",
      date: "2023-12-15",
      readTime: "8:00 PM",
      image:"/new.png",
      category: "Public Safety",
      slug: "road-safety-campaign-launched"
    },
    {
      id: 10,
      title: "Library Expansion Completed",
      excerpt:
        "The municipal library has doubled its capacity with new study rooms and a digital learning center.",
      content: "Details...",
      author: "Education Department",
      date: "2023-12-10",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Education",
      slug: "library-expansion-completed"
    },
    {
      id: 11,
      title: "Local Business Grant Program",
      excerpt:
        "Small businesses can now apply for grants up to Rs. 500,000 through the new economic development initiative.",
      content: "Details...",
      author: "Economic Development",
      date: "2023-12-05",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Economic Development",
      slug: "local-business-grant-program"
    },
    {
      id: 12,
      title: "Park Renovation Project Begins",
      excerpt:
        "The central park will receive new playground equipment, walking paths, and lighting in a 3-month renovation project.",
      content: "Details...",
      author: "Parks & Recreation",
      date: "2023-11-28",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Parks & Recreation",
      slug: "park-renovation-project-begins"
    },
  ]

export default function NewseventPage({ params }: { params: { slug: string } }) {
  const event = newsevents.find((e) => e.slug === params.slug)
  if (!event) return notFound()

  // Example extra content for "problem/solution/before-after"
  const extraSections = [
    {
      title: "Problem",
      description: "Before this initiative, residents faced long queues, limited access to clean water, and delays in municipal services. This created public dissatisfaction and inefficiencies."
    },
    {
      title: "Solution",
      description: "The council introduced a modern water treatment facility, leveraging advanced purification technologies and efficient service systems to serve all citizens reliably."
    },
    {
      title: "Before & After",
      description: "Previously, water quality was inconsistent and prone to contamination. Now, with the new plant, water is consistently safe and supply issues are resolved, improving public health drastically."
    },
    {
      title: "Impact",
      description: "Over 15,000 residents now benefit from clean water daily. Community satisfaction has increased, and related municipal departments report more efficient operations."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />

      <main className="relative pt-6">
        <div className="container-x py-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "News", href: "/news" },
              { label: event.title },
            ]}
          />
        </div>

        <div className="container-x py-8 max-w-5xl mx-auto">
          <Link
            href="/news"
            className="flex items-center gap-2 text-primary mb-4 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-6">{event.title}</h1>

          {/* Event meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(event.date).toLocaleDateString()}</div>
            <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> {event.readTime}</div>
            <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {event.category}</div>
          </div>

          {/* Hero image */}
          <div className="aspect-video w-full mb-8 overflow-hidden rounded-xl shadow-lg">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main event content */}
          <p className="text-lg text-foreground leading-relaxed mb-8">{event.content}</p>

          {/* Extra Sections */}
          {extraSections.map((section, idx) => (
            <div key={idx} className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
              </div>
              <p className="text-foreground text-lg leading-relaxed">{section.description}</p>
            </div>
          ))}

          {/* Optional CTA or related news */}
          <div className="mt-12 border-t pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Related News</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {newsevents
                .filter((e) => e.slug !== event.slug)
                .slice(0, 4)
                .map((related) => (
                  <Link key={related.id} href={`/news/${related.slug}`} className="block p-4 border rounded-lg hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-foreground">{related.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{related.excerpt}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
