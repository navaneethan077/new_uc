"use client";

import type React from "react";
import {useState, useCallback, useRef} from "react";
import {ChevronDown, ChevronUp, MapPin, Phone, Mail, ArrowRight} from "lucide-react";
import {GoogleMap, useJsApiLoader, Marker} from "@react-google-maps/api";
import {useLanguage} from "@/lib/i18n/context";
import {translations} from "@/lib/i18n/translations";

const containerStyle = {
    width: "100%",
    height: "400px",
};

// ✅ URBAN COUNCIL MANNAR COORDINATES
const defaultCenter = {
    lat: 8.9798667,
    lng: 79.9125385,
};

export function ContactSection() {
    const {t, language} = useLanguage();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        console.log("Form submitted:", formData);

        // Simulate API call
        setTimeout(() => {
            setFormData({name: "", email: "", message: ""});
            setIsSubmitting(false);
            alert("Thank you! Your message has been sent.");
        }, 1500);
    };

    // ✅ Get translated FAQ content
    const faqs = translations[language].home.contact.faqs;

    const {isLoaded} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_GOOGLE_MAPS_API_KEY_HERE",
    });

    const mapRef = useRef<google.maps.Map | null>(null);
    const onMapLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map;
    }, []);

    const onMapUnmount = useCallback(() => {
        mapRef.current = null;
    }, []);

    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="container-x">
                <h2 className="title-x text-center mb-12 text-3xl md:text-4xl font-bold text-gray-800">
                    {t.home.contact.title}
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left - Contact Form */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">{t.home.contact.getInTouch}</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">{t.home.contact.description}</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t.contactPage.name}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="John Smith"
                                    className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none bg-white"
                                    required
                                    aria-required="true"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t.contactPage.email}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                    className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none bg-white"
                                    required
                                    aria-required="true"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell us how we can help..."
                                    rows={6}
                                    className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-y bg-white"
                                    required
                                    aria-required="true"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-4 bg-[#001f4d] text-white font-semibold rounded-2xl hover:bg-[#00153a] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 
                        0 5.373 0 12h4zm2 5.291A7.962 
                        7.962 0 014 12H0c0 3.042 1.135 
                        5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        {t.common.submit}
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Right - Contact Info + Map */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t.home.contact.quickContact}</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-3 bg-blue-50 rounded-xl">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{t.footer.phone}</p>
                                        <p className="text-gray-600 text-sm mt-1">Mon–Fri, 8:00 AM – 4:30 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 p-3 bg-blue-50 rounded-xl">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{t.footer.email}</p>
                                        <p className="text-gray-600 text-sm mt-1">We reply within 1–2 business days</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 sm:col-span-2">
                                    <div className="flex-shrink-0 p-3 bg-blue-50 rounded-xl">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Urban Council Mannar</p>
                                        <p className="text-gray-600 text-sm mt-1">Medawachchiya-Talaimannar Hwy, Mannar 41000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
    <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            {t.home.contact.findUs}
        </h3>
        <p className="text-sm text-gray-600 mt-1">Urban Council Mannar</p>
    </div>
    <div className="relative">
        {/* Embedded Responsive Google Map */}
        <div className="embed-map-responsive">
            <div className="embed-map-container">
                <iframe 
                    className="embed-map-frame"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Urban%20Council%20%E0%AE%AE%E0%AE%A9%E0%AF%8D%E0%AE%A9%E0%AE%BE%E0%AE%B0%E0%AF%8D%20%E0%AE%A8%E0%AE%95%E0%AE%B0%E0%AE%9A%E0%AE%AA%E0%AF%88%2C%20XWH7%2BW2V%2C%20Medawachchiya-Talaimannar%20Hwy%2C%20Mannar%2041000&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    title="Urban Council Mannar Location Map"
                    aria-label="Interactive map showing Urban Council Mannar location"
                    loading="lazy"
                >
                </iframe>
                {/* Remove or replace the spam link */}
                <a 
                    href="https://maps.google.com" 
                    style={{
                        fontSize: "2px!important",
                        color: "gray!important",
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        zIndex: "1",
                        maxHeight: "1px",
                        overflow: "hidden",
                        textDecoration: "none"
                    }}
                    aria-hidden="true"
                >
                    Google Maps
                </a>
            </div>
        </div>
        
        {/* Custom CSS for responsive embedding */}
        <style jsx>{`
            .embed-map-responsive {
                position: relative;
                text-align: right;
                width: 100%;
                height: 0;
                padding-bottom: 66.66666666666666%;
            }
            .embed-map-container {
                overflow: hidden;
                background: none !important;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
            .embed-map-frame {
                width: 100% !important;
                height: 100% !important;
                position: absolute;
                top: 0;
                left: 0;
                border: 0;
            }
        `}</style>
    </div>
</div>
                    </div>
                </div>

                {/* FAQs */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-primary text-center mb-12">{t.home.contact.faqsTitle}</h3>
                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                            >
                                <button
                                    className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary hover:bg-gray-50 transition-colors"
                                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                    aria-expanded={expandedFaq === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                                    {expandedFaq === index ? (
                                        <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                                    )}
                                </button>
                                {expandedFaq === index && (
                                    <div id={`faq-answer-${index}`} className="px-8 pb-8 pt-0 animate-fadeIn">
                                        <p className="text-gray-600 leading-relaxed text-base">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}