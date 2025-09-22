import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText, ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function PublicNoticesInfoPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Information", href: "/info" }, { label: "Public Notices" }]} />
        
        {/* Hero Section */}
        <section className="section-x bg-gradient-to-br from-primary to-primary-dark">
          <div className="container-x text-center">
            <FileText className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Public Notices</h1>
            <p className="text-primary-light max-w-3xl mx-auto">
              Official announcements, tenders, and meeting minutes.
            </p>
          </div>
        </section>

        {/* Notices Section */}
        <section className="section-x">
          <div className="container-x grid md:grid-cols-2 gap-6">
            <div className="card-x group hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-primary mb-2">Latest Notices</h3>
              <p className="text-gray-600 mb-4">Browse current tenders and announcements.</p>
              <a 
                href="/events/notices" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
              >
                View Notices <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="card-x group hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-primary mb-2">Announcements</h3>
              <p className="text-gray-600 mb-4">Urgent service alerts and public messages.</p>
              <a 
                href="/events/announcements" 
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
              >
                View Announcements <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}