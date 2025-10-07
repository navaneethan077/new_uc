// app/services/[category]/[subService]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { serviceCategories } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from 'next/image';
import { useState } from 'react';
import { 
  ChevronRight, 
  ArrowRight, 
  Users, 
  BookOpen, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Shield,
  Target
} from 'lucide-react';

export default function SubServiceDetailPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const subServiceId = params.subService as string;

  const category = serviceCategories.find(cat => cat.id === categoryId);
  const subService = category?.subServices.find(sub => sub.id === subServiceId);

  if (!category || !subService) {
    notFound();
  }

  const serviceData = {
    title: "Cooperative School Shop Program",
    date: "Launched: January 15, 2025",
    bannerImage: "/hero1.png",
    description: "The Urban Council operates a cooperative school shop initiative providing affordable educational materials to students and families across Mannar. This service ensures equitable access to quality education resources while supporting local economic development.",
    serviceStats: [
      { icon: <Users className="w-6 h-6" />, value: "2,500+", label: "Families Served" },
      { icon: <BookOpen className="w-6 h-6" />, value: "15,000+", label: "Items Distributed" },
      { icon: <DollarSign className="w-6 h-6" />, value: "40%", label: "Cost Savings" },
      { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Online Portal" }
    ],
    serviceFeatures: [
      {
        title: "Affordable Pricing",
        description: "Subsidized rates for all educational materials through council funding",
        icon: <DollarSign className="w-5 h-5" />
      },
      {
        title: "Quality Assurance",
        description: "All materials meet national education standards and quality guidelines",
        icon: <Shield className="w-5 h-5" />
      },
      {
        title: "Easy Access",
        description: "Multiple distribution points across Mannar with online ordering options",
        icon: <MapPin className="w-5 h-5" />
      },
      {
        title: "Community Focus",
        description: "Prioritizing underserved areas and low-income families",
        icon: <Target className="w-5 h-5" />
      }
    ],
    gallery: [
      { image: "/serv1.png", caption: "UC Service Center - Main Distribution Point" },
      { image: "/serv2.png", caption: "Educational Materials Quality Check" },
      { image: "/serv1.png", caption: "Online Order Processing System" },
      { image: "/serv2.png", caption: "Community Outreach Program" }
    ],
    testimonial: {
      text: "The cooperative shop has significantly reduced our education expenses while ensuring our children get quality materials. The service process is straightforward and the staff is very helpful.",
      author: "Local Parent",
      role: "Service User"
    }
  };

  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (imageKey: string) => {
    setImageErrors(prev => ({ ...prev, [imageKey]: true }));
  };

  const FallbackImage = ({ alt, className = "h-48" }: { alt: string; className?: string }) => (
    <div className={`bg-muted flex items-center justify-center rounded-lg ${className}`}>
      <div className="text-center p-4">
        <div className="text-4xl mb-2">📷</div>
        <span className="text-muted-foreground text-sm">{alt}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <Navigation />

      <div className="flex-1 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm flex-wrap">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />
                <Link href={`/services/${category.id}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {category.title}
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />
                <span className="text-foreground font-medium">{subService.title}</span>
              </li>
            </ol>
          </nav>

          {/* Banner Image */}
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-8">
            {imageErrors.banner ? (
              <FallbackImage alt="Service Banner" className="w-full h-full" />
            ) : (
              <Image
                src={serviceData.bannerImage}
                alt="Service Banner"
                fill
                className="object-cover"
                priority
                onError={() => handleImageError('banner')}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-primary-foreground">
                <span className="px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block bg-primary/80">
                  {serviceData.date}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {serviceData.title}
                </h1>
                <p className="text-primary-foreground/90 max-w-2xl">
                  Urban Council Service • {category.title}
                </p>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Service Description */}
              <div className="bg-card rounded-xl shadow-sm p-6 mb-6 border border-border">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Service Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{serviceData.description}</p>
              </div>

              {/* Service Impact */}
              <div className="bg-card rounded-xl shadow-sm p-6 mb-6 border border-border">
                <h3 className="text-xl font-bold mb-6 text-foreground text-center">Service Performance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {serviceData.serviceStats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="flex justify-center mb-2 text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Features */}
              <div className="bg-card rounded-xl shadow-sm p-6 mb-6 border border-border">
                <h3 className="text-xl font-bold mb-6 text-foreground">Key Service Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceData.serviceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Process */}
              {/* <div className="bg-card rounded-xl shadow-sm p-6 border border-border">
                <h3 className="text-xl font-bold mb-6 text-foreground">How to Access This Service</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Visit Service Center</h4>
                      <p className="text-muted-foreground">Come to any Urban Council service center with required documents</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Submit Application</h4>
                      <p className="text-muted-foreground">Complete the service request form with necessary details</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Receive Materials</h4>
                      <p className="text-muted-foreground">Collect your educational materials at subsidized rates</p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Gallery */}
              <div className="bg-card rounded-xl shadow-sm p-6 mt-6 border border-border">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Service in Action</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceData.gallery.map((photo, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative h-48 rounded-lg overflow-hidden mb-2 border border-border">
                        {imageErrors[`gallery-${index}`] ? (
                          <FallbackImage alt={photo.caption} />
                        ) : (
                          <Image
                            src={photo.image}
                            alt={photo.caption}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={() => handleImageError(`gallery-${index}`)}
                          />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground text-center">{photo.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Testimonial */}
              <div className="bg-card rounded-xl shadow-sm p-6 border border-border">
                <div className="text-primary text-4xl mb-4">"</div>
                <blockquote className="text-foreground italic mb-4">"{serviceData.testimonial.text}"</blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{serviceData.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{serviceData.testimonial.role}</div>
                </div>
              </div>

              {/* Service Actions */}
              <div className="bg-card rounded-xl shadow-sm p-6 border border-border">
                <h4 className="font-bold mb-4 text-foreground">Access This Service</h4>
                <div className="space-y-3">
                  <button className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-primary/90 transition-colors">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="w-full border border-border text-foreground px-4 py-3 rounded-lg flex items-center justify-center hover:bg-muted transition-colors duration-200">
                    Download Forms
                  </button>
                  <button className="w-full border border-border text-foreground px-4 py-3 rounded-lg flex items-center justify-center hover:bg-muted transition-colors duration-200">
                    Check Eligibility
                  </button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-card rounded-xl shadow-sm p-6 border border-border">
                <h4 className="font-bold mb-4 text-foreground">Service Contact</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="w-4 h-4 mr-3 text-primary" />
                    <span>(094) 123-4567</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="w-4 h-4 mr-3 text-primary" />
                    <span>education@mannar.gov</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-3 text-primary" />
                    <span>Mannar Education Center</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-3 text-primary" />
                    <span>Mon-Fri: 8:30 AM - 4:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="font-bold mb-3 text-foreground">Required Documents</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    National ID Card
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Student School ID
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Proof of Residence
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    Income Certificate (if applicable)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t border-border">
            <Link 
              href={`/services/${category.id}`}
              className="flex items-center font-medium mb-4 sm:mb-0 text-primary hover:text-primary/80 transition-colors"
            >
              <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
              Back to {category.title}
            </Link>
            <Link 
              href="/services"
              className="flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View All Services
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}