import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Phone, Calendar, Heart, BookOpen, GraduationCap } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function CommunityServicesPage() {
  const programs = [
    { 
      name: "Youth Development Programs", 
      desc: "Workshops, sports activities, vocational training, and leadership programs for young residents.", 
      contact: "+94 23 223 5690",
      icon: GraduationCap
    },
    { 
      name: "Elder Care Services", 
      desc: "Health camps, social support programs, home assistance, and monthly wellness checks for senior citizens.", 
      contact: "+94 23 223 5691",
      icon: Heart
    },
    { 
      name: "Community Health Clinics", 
      desc: "Monthly mobile clinics, immunization drives, maternal health programs, and wellness education.", 
      contact: "+94 23 223 5692",
      icon: Calendar
    },
    { 
      name: "Women's Empowerment", 
      desc: "Skill development programs, microfinance support, and awareness workshops for women in the community.", 
      contact: "+94 23 223 5693",
      icon: Users
    },
    { 
      name: "Educational Support", 
      desc: "After-school tutoring, scholarship programs, school supplies distribution, and library services.", 
      contact: "+94 23 223 5694",
      icon: BookOpen
    },
    { 
      name: "Community Events", 
      desc: "Cultural festivals, sports tournaments, environmental cleanups, and community gatherings.", 
      contact: "+94 23 223 5695",
      icon: Calendar
    },
  ]

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />
      <main>
        <Breadcrumbs items={[
          { label: "Home", href: "/" }, 
          { label: "Information", href: "/info" }, 
           { label: "Services", href: "/info/services" }, 
          { label: "Community Services" }
        ]} />
        
        {/* Hero Section */}
        <section className="section-x bg-gradient-to-br from-primary to-primary-dark">
          <div className="container-x text-center">
            <Users className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Mannar Municipal Council Community Services</h1>
            <p className="text-primary-light max-w-3xl mx-auto text-lg">
              Building a stronger community through support programs and initiatives for all residents
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="section-x">
          <div className="container-x">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Our Community Programs</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                The Mannar Municipal Council offers various programs designed to support and uplift all members of our community. 
                Explore our services below and contact us to learn more or get involved.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => {
                const IconComponent = program.icon;
                return (
                  <div key={program.name} className="card-x group hover:shadow-md transition-all duration-300 border border-gray-100">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-primary mb-2">{program.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{program.desc}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-auto pt-4 border-t border-gray-100">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-primary text-sm font-medium">{program.contact}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="section-x bg-gray-50">
          <div className="container-x">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">Get Involved in Our Community</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-primary mb-3">Volunteer Opportunities</h3>
                  <p className="text-gray-700 mb-4">
                    Join our team of dedicated volunteers and make a difference in your community. 
                    We welcome individuals, groups, and organizations to participate in our various programs.
                  </p>
                  <div className="bg-primary-light p-4 rounded">
                    <p className="text-primary text-sm font-medium">Contact: +94 23 223 5700 | volunteer@mannarmc.gov.lk</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-primary mb-3">Program Enrollment</h3>
                  <p className="text-gray-700 mb-4">
                    Interested in participating in any of our community programs? 
                    Visit the Municipal Council office or contact the program coordinator directly.
                  </p>
                  <div className="bg-primary-light p-4 rounded">
                    <p className="text-primary text-sm">Office Hours: Mon-Fri 8:30 AM - 4:30 PM | Sat 8:30 AM - 12:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}