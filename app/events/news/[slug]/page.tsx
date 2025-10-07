"use client"

import Link from "next/link"
import Image from "next/image"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  User,
  Share2, 
  Bookmark, 
  Printer,
  Star,
  CheckCircle,
  AlertTriangle,
  Download,
  FileText,
  Lightbulb,
  RefreshCw,
  TrendingUp,
  Eye,
  MessageCircle,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Check
} from "lucide-react"
import { notFound } from "next/navigation"
import { useState, useEffect } from "react"

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

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const event = newsevents.find((e) => e.slug === params.slug)
  const [showShareModal, setShowShareModal] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [saveNotification, setSaveNotification] = useState(false)
  const [shareCount, setShareCount] = useState(event?.shares || 0)

  if (!event) return notFound()

  // Load saved state from localStorage on component mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('savedNews') || '[]')
    setIsSaved(savedItems.includes(event.id))
  }, [event.id])

  // Share functionality
  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = event.title
    const text = event.excerpt

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`
    }

    if (platform === 'email') {
      window.location.href = shareUrls.email
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400')
    }

    // Increment share count
    setShareCount(prev => prev + 1)
    setShowShareModal(false)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      // You could show a toast notification here
      alert('Link copied to clipboard!')
      setShowShareModal(false)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  // Save functionality
  const handleSave = () => {
    const savedItems = JSON.parse(localStorage.getItem('savedNews') || '[]')
    
    if (isSaved) {
      // Remove from saved
      const updatedItems = savedItems.filter((id: number) => id !== event.id)
      localStorage.setItem('savedNews', JSON.stringify(updatedItems))
      setIsSaved(false)
    } else {
      // Add to saved
      const updatedItems = [...savedItems, event.id]
      localStorage.setItem('savedNews', JSON.stringify(updatedItems))
      setIsSaved(true)
      setSaveNotification(true)
      setTimeout(() => setSaveNotification(false), 3000)
    }
  }

  // Print functionality
  const handlePrint = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${event.title} - Mannar Urban Council</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
          .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 20px; }
          .title { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
          .meta { font-size: 14px; color: #666; margin-bottom: 20px; }
          .content { line-height: 1.6; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ccc; font-size: 12px; color: #666; }
          @media print {
            body { margin: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="title">${event.title}</div>
          <div class="meta">
            Published: ${new Date(event.date).toLocaleDateString()} | 
            Author: ${event.author} | 
            Category: ${event.category}
          </div>
        </div>
        <div class="content">
          ${event.content.split('\n').map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="footer">
          Printed from Mannar Urban Council - ${window.location.href}
        </div>
      </body>
      </html>
    `

    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(printContent)
      printWindow.document.close()
      printWindow.focus()
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 250)
    }
  }

  const extraSections = [
    {
      title: "Problem Statement",
      description: "Before this initiative, residents faced long queues, limited access to clean water, and delays in municipal services, causing public dissatisfaction.",
      items: [
        "Average wait time of 3+ hours for water collection",
        "Frequent water-borne disease outbreaks",
        "Limited service coverage in remote areas",
        "Aging infrastructure requiring constant repairs"
      ]
    },
    {
      title: "Innovative Solution",
      description: "The council introduced a modern water treatment facility, leveraging advanced purification technologies and efficient service systems.",
      items: [
        "State-of-the-art reverse osmosis technology",
        "Automated monitoring and quality control",
        "Expanded distribution network coverage",
        "Trained technical staff for maintenance"
      ]
    },
    {
      title: "Transformation Journey",
      description: "Previously, water quality was inconsistent. Now, residents enjoy safe, reliable water supply, improving public health drastically.",
      items: [
        "Water quality compliance improved from 65% to 98%",
        "Service coverage expanded from 45% to 92% of households",
        "Response time for complaints reduced from 48 to 6 hours"
      ]
    },
    {
      title: "Community Impact",
      description: "Over 15,000 residents benefit daily from clean water. Community satisfaction has increased, and municipal operations are more efficient.",
      items: [
        "15,000+ residents served daily",
        "40% reduction in water-related complaints",
        "95% resident satisfaction rate",
        "50% improvement in operational efficiency"
      ]
    }
  ]

  const relatedNews = newsevents.filter((e) => e.slug !== event.slug).slice(0, 4)

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navigation />

      {/* Save Notification */}
      {saveNotification && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2 animate-in slide-in-from-right">
          <Check className="w-4 h-4" />
          Article saved to your collection
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 animate-in fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
              <button 
                onClick={() => setShowShareModal(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-6">
              <button 
                onClick={() => handleShare('facebook')}
                className="flex flex-col items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <Facebook className="w-6 h-6 text-blue-600" />
                <span className="text-xs text-gray-700">Facebook</span>
              </button>
              
              <button 
                onClick={() => handleShare('twitter')}
                className="flex flex-col items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <Twitter className="w-6 h-6 text-blue-400" />
                <span className="text-xs text-gray-700">Twitter</span>
              </button>
              
              <button 
                onClick={() => handleShare('linkedin')}
                className="flex flex-col items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <Linkedin className="w-6 h-6 text-blue-700" />
                <span className="text-xs text-gray-700">LinkedIn</span>
              </button>
              
              <button 
                onClick={() => handleShare('email')}
                className="flex flex-col items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Mail className="w-6 h-6 text-gray-600" />
                <span className="text-xs text-gray-700">Email</span>
              </button>
            </div>
            
            <div className="flex gap-2">
              <input 
                type="text" 
                value={window.location.href}
                readOnly
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50"
              />
              <button 
                onClick={copyToClipboard}
                className="px-4 py-2 bg-[oklch(0.2_0.08_250)] text-white rounded-lg hover:bg-[oklch(0.3_0.08_250)] transition-colors text-sm font-medium"
              >
                Copy Link
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="relative pt-6">
        <div className="container-x mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="py-4">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "News & Events", href: "/events/news" },
                { label: event.title }
              ]}
            />
          </div>

          {/* Back Link */}
          <Link
            href="/events/news"
            className="inline-flex items-center gap-2 text-[oklch(0.2_0.08_250)] hover:text-[oklch(0.3_0.08_250)] transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to All News</span>
          </Link>

          {/* Main Article Container */}
          <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            {/* Article Header */}
            <div className="bg-gradient-to-r from-[oklch(0.2_0.08_250)] to-[oklch(0.3_0.08_250)] text-white p-8">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{event.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">{event.views} views</span>
                  </div>
                </div>
                
                <h1 className="text-4xl font-bold leading-tight mb-4">{event.title}</h1>
                
                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{event.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>By {event.author}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="p-8">
              {/* Hero Image */}
              <div className="w-full mb-8 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={1200}
                  height={600}
                  className="w-full h-64 object-cover"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  The newly inaugurated water treatment plant facility in Mannar
                </p>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                  {event.excerpt}
                </p>
                
                <div className="text-gray-800 leading-7 space-y-6">
                  {event.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-[oklch(0.97_0.02_250)] rounded-xl border border-[oklch(0.85_0.05_250)]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[oklch(0.2_0.08_250)]">15,000+</div>
                  <div className="text-sm text-[oklch(0.3_0.08_250)]">Residents Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[oklch(0.4_0.1_140)]">95%</div>
                  <div className="text-sm text-[oklch(0.5_0.1_140)]">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[oklch(0.4_0.1_300)]">24/7</div>
                  <div className="text-sm text-[oklch(0.5_0.1_300)]">Service Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[oklch(0.4_0.1_50)]">60%</div>
                  <div className="text-sm text-[oklch(0.5_0.1_50)]">Disease Reduction</div>
                </div>
              </div>

              {/* Key Highlights */}
              {event.highlights && (
                <div className="bg-[oklch(0.97_0.02_140)] border border-[oklch(0.85_0.05_140)] rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-[oklch(0.3_0.08_140)] mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-[oklch(0.4_0.1_140)]" />
                    Key Achievements
                  </h3>
                  <div className="grid gap-3">
                    {event.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[oklch(0.4_0.1_140)] mt-0.5 flex-shrink-0" />
                        <span className="text-[oklch(0.4_0.08_140)]">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* News Sections */}
              <div className="space-y-8">
                {extraSections.map((section, idx) => (
                  <section key={idx} className={`
                    p-6 rounded-xl border-l-4 transition-all duration-300 hover:shadow-md
                    ${idx === 0 ? 'bg-[oklch(0.97_0.02_10)] border-l-[oklch(0.5_0.1_10)]' : 
                      idx === 1 ? 'bg-[oklch(0.97_0.02_140)] border-l-[oklch(0.5_0.1_140)]' : 
                      idx === 2 ? 'bg-[oklch(0.97_0.02_250)] border-l-[oklch(0.5_0.1_250)]' : 
                      'bg-[oklch(0.97_0.02_300)] border-l-[oklch(0.5_0.1_300)]'}
                  `}>
                    <div className="flex items-start gap-4">
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
                        ${idx === 0 ? 'bg-[oklch(0.9_0.05_10)] text-[oklch(0.5_0.1_10)]' : 
                          idx === 1 ? 'bg-[oklch(0.9_0.05_140)] text-[oklch(0.5_0.1_140)]' : 
                          idx === 2 ? 'bg-[oklch(0.9_0.05_250)] text-[oklch(0.5_0.1_250)]' : 
                          'bg-[oklch(0.9_0.05_300)] text-[oklch(0.5_0.1_300)]'}
                      `}>
                        {idx === 0 && <AlertTriangle className="w-6 h-6" />}
                        {idx === 1 && <Lightbulb className="w-6 h-6" />}
                        {idx === 2 && <RefreshCw className="w-6 h-6" />}
                        {idx === 3 && <TrendingUp className="w-6 h-6" />}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                          {section.title}
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg mb-4">
                          {section.description}
                        </p>
                        
                        {section.items && (
                          <ul className="space-y-2">
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-3 text-gray-700">
                                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                  idx === 0 ? 'bg-[oklch(0.5_0.1_10)]' :
                                  idx === 1 ? 'bg-[oklch(0.5_0.1_140)]' :
                                  idx === 2 ? 'bg-[oklch(0.5_0.1_250)]' :
                                  'bg-[oklch(0.5_0.1_300)]'
                                }`}></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              {/* Timeline */}
              {event.timeline && (
                <div className="mt-8 p-6 bg-[oklch(0.97_0.02_300)] border border-[oklch(0.85_0.05_300)] rounded-lg">
                  <h3 className="text-xl font-semibold text-[oklch(0.3_0.08_300)] mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[oklch(0.4_0.1_300)]" />
                    Project Timeline
                  </h3>
                  <div className="space-y-4">
                    {event.timeline.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 bg-[oklch(0.5_0.1_300)] rounded-full"></div>
                          {index < event.timeline.length - 1 && (
                            <div className="w-0.5 h-full bg-[oklch(0.85_0.05_300)] mt-1"></div>
                          )}
                        </div>
                        <div className="flex-1 pb-4">
                          <h4 className="font-semibold text-[oklch(0.4_0.08_300)]">{item.title}</h4>
                          <p className="text-sm text-[oklch(0.5_0.08_300)] mb-1">
                            {new Date(item.date).toLocaleDateString('en-US', { 
                              month: 'long', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </p>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Downloadable Resources */}
              {event.resources && (
                <div className="mt-8 p-6 bg-[oklch(0.97_0.02_140)] border border-[oklch(0.85_0.05_140)] rounded-lg">
                  <h3 className="text-xl font-semibold text-[oklch(0.3_0.08_140)] mb-4 flex items-center gap-2">
                    <Download className="w-5 h-5 text-[oklch(0.4_0.1_140)]" />
                    Download Resources
                  </h3>
                  <div className="grid gap-3">
                    {event.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        className="flex items-center justify-between p-3 bg-white rounded-lg border border-[oklch(0.85_0.05_140)] hover:bg-[oklch(0.97_0.02_140)] transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-[oklch(0.4_0.1_140)]" />
                          <span className="text-[oklch(0.4_0.08_140)] font-medium">{resource.name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[oklch(0.4_0.1_140)]">
                          <span>{resource.size}</span>
                          <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Section */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[oklch(0.2_0.08_250)] to-[oklch(0.3_0.08_250)] rounded-xl text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Stay Informed</h3>
                    <p className="text-[oklch(0.9_0.02_250)]">Get updates on municipal projects and community initiatives</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-3 bg-white text-[oklch(0.2_0.08_250)] rounded-lg font-semibold hover:bg-[oklch(0.95_0.02_250)] transition-colors">
                      Subscribe to Updates
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                      Contact Department
                    </button>
                  </div>
                </div>
              </div>

              {/* Article Footer with Action Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-4 justify-between items-center">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Published by Mannar Urban Council</span>
                    <span>•</span>
                    <span>Last updated: {new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => setShowShareModal(true)}
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[oklch(0.2_0.08_250)] transition-colors rounded-lg hover:bg-[oklch(0.97_0.02_250)]"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>Share ({shareCount})</span>
                    </button>
                    <button 
                      onClick={handleSave}
                      className={`flex items-center gap-2 px-4 py-2 transition-colors rounded-lg ${
                        isSaved 
                          ? 'text-[oklch(0.5_0.1_10)] bg-[oklch(0.97_0.02_10)]' 
                          : 'text-gray-600 hover:text-[oklch(0.5_0.1_10)] hover:bg-[oklch(0.97_0.02_10)]'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                      <span>{isSaved ? 'Saved' : 'Save'}</span>
                    </button>
                    <button 
                      onClick={handlePrint}
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[oklch(0.5_0.1_140)] transition-colors rounded-lg hover:bg-[oklch(0.97_0.02_140)]"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Related News */}
          <div className="mt-16 border-t pt-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Related News</h3>
              <Link 
                href="/events/news" 
                className="text-[oklch(0.2_0.08_250)] hover:text-[oklch(0.3_0.08_250)] font-medium flex items-center gap-2"
              >
                View All News
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedNews.map((related) => (
                <Link
                  key={related.id}
                  href={`/news/${related.slug}`}
                  className="block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="h-40 bg-gray-200 relative">
                    <Image
                      src={related.image || "/placeholder.svg"}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(related.date).toLocaleDateString()}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[oklch(0.2_0.08_250)] transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{related.excerpt}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-[oklch(0.2_0.08_250)]">
                      <span>Read More</span>
                      <ArrowLeft className="w-3 h-3 rotate-180" />
                    </div>
                  </div>
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