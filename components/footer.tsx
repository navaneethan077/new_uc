"use client"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "/info/services" },
    { name: t.nav.aboutUs, href: "/about" },
    { name: t.nav.news, href: "/events/news" },
    { name: t.nav.contact, href: "/contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Sitemap", href: "#sitemap" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#facebook" },
    { name: "Twitter", icon: Twitter, href: "#twitter" },
    { name: "Instagram", icon: Instagram, href: "#instagram" },
    { name: "YouTube", icon: Youtube, href: "#youtube" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-x">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.footer.about}</h3>
              <p className="text-primary-foreground/80 leading-7 mb-4">
                {t.footer.aboutDescription}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.footer.quickLinks}</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.footer.contactInfo}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-primary-foreground/80">
                    <p>{t.footer.about}</p>
                    <p>{t.footer.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-primary-foreground/80">{t.footer.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="text-primary-foreground/80">{t.footer.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#082457] text-primary-foreground/70 py-4">
        <div className="container-x">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              {t.footer.copyright}
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#accessibility" className="hover:text-primary-foreground transition-colors">
                Accessibility
              </a>
              <span>|</span>
              <a href="#feedback" className="hover:text-primary-foreground transition-colors">
                Feedback
              </a>
              <span>|</span>
              <a href="#help" className="hover:text-primary-foreground transition-colors">
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
