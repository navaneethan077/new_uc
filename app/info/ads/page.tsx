// In your chairman-page.tsx
import { AdsSection } from "@/components/ads-section";
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { MapPin, Camera, Calendar, Star, Clock, Phone, Search, X, Filter } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function ChairmanPage() {
  return (
    <div className="min-h-screen bg-background">
   <TopBar />
         <Navigation />
   
         
           <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Information", href: "/info" }, { label: "Tourism" }]} />
      
      {/* Add AdsSection after Navigation */}
      <AdsSection />

      {/* Your existing hero section and other content */}
      <section className="relative bg-cover bg-center min-h-[70vh] flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/hero.png')" }}>
        {/* ... rest of your content */}
      </section>
      
      {/* ... rest of your page */}
    </div>
  );
}