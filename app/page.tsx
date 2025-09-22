import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { VisionMissionSection } from "@/components/vision-mission-section"
import { ChairmanSection } from "@/components/chairman-section"
import { EventsSection } from "@/components/events-section"
import { InfoSection } from "@/components/info-section"
import { ContactSection } from "@/components/contact-section"
import { HomeGallerySection } from "@/components/home-gallery-section"
import { TourismMediaSection } from "@/components/tourism-media-section"
import { Footer } from "@/components/footer"
import { LanguageAwareWrapper } from "@/components/language-aware-wrapper"

export default function HomePage() {
  return (
    <LanguageAwareWrapper className="min-h-screen">
      <div className="min-h-screen">
        <TopBar />
        <Navigation />
        <main>
          <HeroSection />
          <VisionMissionSection />
          <ChairmanSection />
          <EventsSection />
          <InfoSection />
         
          <HomeGallerySection />
          <TourismMediaSection />
           <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageAwareWrapper>
  )
}
