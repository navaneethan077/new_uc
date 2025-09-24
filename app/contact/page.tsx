"use client";
import React, { useState, useMemo } from "react";
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  Search,
  Filter,
  Mail,
  Phone,
  MapPin,
  Download,
  User,
  ChevronDown,
  X,
  Building,
  Printer,
  Copy as CopyIcon,
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";

// Updated contact data for Mannar Municipal Council
const CONTACT_DATA = {
  main: {
    address: "Mannar Municipal Council, Main Street, Mannar, Sri Lanka",
    tel: "+94 23 222 2222, +94 23 222 2223",
    fax: "+94 23 222 2224",
    email: "info@mannarmc.gov.lk",
  },
  divisions: [
    {
      title: "Municipal Commissioner's Office",
      items: [
        {
          name: "Mr. A.B. Perera",
          position: "Municipal Commissioner",
          salary: "SL 4",
          tel: "+94 23 222 2201",
          fax: "+94 23 222 2202",
          email: "commissioner@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Ms. S.T. Fernando",
          position: "Deputy Commissioner",
          salary: "SL 3",
          tel: "+94 23 222 2203",
          fax: "+94 23 222 2204",
          email: "deputy@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Administration Division",
      items: [
        {
          name: "Mr. R.S. Jayasinghe",
          position: "Chief Administrative Officer",
          salary: "SL 3",
          tel: "+94 23 222 2210",
          fax: "+94 23 222 2211",
          email: "admin@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. L.M. Silva",
          position: "Human Resources Manager",
          salary: "SL 2",
          tel: "+94 23 222 2212",
          fax: "+94 23 222 2213",
          email: "hr@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Finance Department",
      items: [
        {
          name: "Mr. K.L. Bandara",
          position: "Chief Financial Officer",
          salary: "SL 3",
          tel: "+94 23 222 2230",
          fax: "+94 23 222 2231",
          email: "finance@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. N.P. Gunawardena",
          position: "Senior Accountant",
          salary: "SL 2",
          tel: "+94 23 222 2232",
          fax: "+94 23 222 2233",
          email: "accounts@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Engineering Department",
      items: [
        {
          name: "Mr. W.A.S. Kumara",
          position: "Chief Engineer",
          salary: "SL 3",
          tel: "+94 23 222 2240",
          fax: "+94 23 222 2241",
          email: "engineering@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. D.M. Rajapaksa",
          position: "Assistant Engineer",
          salary: "SL 1",
          tel: "+94 23 222 2242",
          fax: "+94 23 222 2243",
          email: "eng.assistant@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Public Health Department",
      items: [
        {
          name: "Dr. S.M. Fonseka",
          position: "Chief Medical Officer",
          salary: "SL 3",
          tel: "+94 23 222 2250",
          fax: "+94 23 222 2251",
          email: "health@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. R.T. Zoysa",
          position: "Public Health Inspector",
          salary: "SL 1",
          tel: "+94 23 222 2252",
          fax: "+94 23 222 2253",
          email: "phi@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Town Planning Department",
      items: [
        {
          name: "Mr. P.G. Amarasinghe",
          position: "Town Planner",
          salary: "SL 3",
          tel: "+94 23 222 2260",
          fax: "+94 23 222 2261",
          email: "planning@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Ms. T.W. Dissanayake",
          position: "Assistant Town Planner",
          salary: "SL 1",
          tel: "+94 23 222 2262",
          fax: "+94 23 222 2263",
          email: "planning.assistant@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "License Department",
      items: [
        {
          name: "Mr. J.K. Ratnayake",
          position: "License Commissioner",
          salary: "SL 2",
          tel: "+94 23 222 2270",
          fax: "+94 23 222 2271",
          email: "licenses@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. S.R. Perera",
          position: "License Officer",
          salary: "SL 1",
          tel: "+94 23 222 2272",
          fax: "+94 23 222 2273",
          email: "licenses.office@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
    {
      title: "Waste Management Department",
      items: [
        {
          name: "Mr. M.V. Jayasuriya",
          position: "Waste Management Director",
          salary: "SL 2",
          tel: "+94 23 222 2280",
          fax: "+94 23 222 2281",
          email: "waste@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
        {
          name: "Mrs. K.L. Fernando",
          position: "Sanitation Officer",
          salary: "SL 1",
          tel: "+94 23 222 2282",
          fax: "+94 23 222 2283",
          email: "sanitation@mannarmc.gov.lk",
          profile: "/images.jfif",
        },
      ],
    },
  ],
};

// Function to generate consistent avatar based on name (used as fallback)
const generateAvatar = (name: string, backgroundColor = "1e40af", foregroundColor = "ffffff") => {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return `https://placehold.co/128x128/${backgroundColor}/${foregroundColor}?text=${encodeURIComponent(initials)}`;
};

// Profile Card Component
function ProfileCard({ person, onEmailClick, onPhoneClick }: { person: any; onEmailClick: (email: string) => void; onPhoneClick: (phone: string) => void }) {
  const [hasProfileImage, setHasProfileImage] = useState(!!person.profile);
  const avatarUrl = generateAvatar(person.name, "1e40af", "ffffff");

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200 hover:shadow-md transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-primary flex items-center justify-center">
            {hasProfileImage ? (
              <img
                src={person.profile}
                alt={person.name}
                className="w-full h-full object-cover"
                onError={() => setHasProfileImage(false)}
              />
            ) : (
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {person.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)}
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{person.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{person.position}</p>
          {person.salary && person.salary !== "-" && (
            <span className="inline-block mt-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {person.salary}
            </span>
          )}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {person.tel && person.tel !== "-" && (
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-2 text-primary" />
            <a
              href={`tel:${person.tel.replace(/\s+/g, "")}`}
              className="hover:text-primary hover:underline truncate"
              onClick={(e) => {
                e.preventDefault();
                onPhoneClick(person.tel);
              }}
            >
              {person.tel}
            </a>
          </div>
        )}
        {person.fax && person.fax !== "-" && (
          <div className="flex items-center text-sm text-gray-600">
            <Printer className="w-4 h-4 mr-2 text-primary" />
            <span>{person.fax}</span>
          </div>
        )}
        {person.email && person.email !== "-" && (
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="w-4 h-4 mr-2 text-primary" />
            <a
              href={`mailto:${person.email}`}
              className="hover:text-primary hover:underline truncate"
              onClick={(e) => {
                e.preventDefault();
                onEmailClick(person.email);
              }}
            >
              {person.email}
            </a>
          </div>
        )}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between">
        <button
          className="text-xs text-primary hover:text-primary/80 flex items-center"
          onClick={() => {
            navigator.clipboard.writeText(`
              ${person.name}
              ${person.position}
              Tel: ${person.tel}
              Email: ${person.email}
            `.trim());
          }}
        >
          <CopyIcon className="w-3 h-3 mr-1" /> Copy
        </button>
        <button
          className="text-xs text-primary hover:text-primary/80 flex items-center"
          onClick={() => onEmailClick(person.email)}
        >
          <Mail className="w-3 h-3 mr-1" /> Email
        </button>
      </div>
    </div>
  );
}

// Division Section Component
function DivisionSection({ division, searchTerm, onEmailClick, onPhoneClick }: { division: any; searchTerm: string; onEmailClick: (email: string) => void; onPhoneClick: (phone: string) => void }) {
  const filteredItems = division.items.filter(
    (person: any) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (person.tel && person.tel.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (person.email && person.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  if (filteredItems.length === 0) return null;
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-primary rounded-full"></div>
          <h3 className="text-2xl font-bold text-gray-900">{division.title}</h3>
        </div>
        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
          {filteredItems.length} contact{filteredItems.length !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((person: any, idx: number) => (
          <ProfileCard
            key={idx}
            person={person}
            onEmailClick={onEmailClick}
            onPhoneClick={onPhoneClick}
          />
        ))}
      </div>
    </section>
  );
}

export default function ContactPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Extract all divisions for filter
  const divisionsList = useMemo(() => {
    return CONTACT_DATA.divisions.map((div) => div.title);
  }, []);

  // Show toast notification
  const showToastMessage = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Handle email click
  const handleEmailClick = (email: string) => {
    if (email && email !== "-") {
      window.location.href = `mailto:${email}`;
    } else {
      showToastMessage("No email address available");
    }
  };

  // Handle phone click
  const handlePhoneClick = (phone: string) => {
    if (phone && phone !== "-") {
      window.location.href = `tel:${phone.replace(/\s+/g, "")}`;
    } else {
      showToastMessage("No phone number available");
    }
  };

  // Filter divisions based on selection
  const filteredDivisions = useMemo(() => {
    if (selectedDivision === "all") return CONTACT_DATA.divisions;
    return CONTACT_DATA.divisions.filter((div) => div.title === selectedDivision);
  }, [selectedDivision]);

  // Generate CSV data
  const generateCSV = () => {
    const headers = "Name,Position,Salary,Telephone,Fax,Email,Division\n";
    const rows = CONTACT_DATA.divisions
      .flatMap((division) =>
        division.items.map(
          (person: any) =>
            `"${person.name}","${person.position}","${person.salary || ""}","${person.tel || ""}","${person.fax || ""}","${person.email || ""}","${division.title}"`
        )
      )
      .join("\n");
    return headers + rows;
  };

  // Download CSV
  const downloadCSV = () => {
    const csvData = generateCSV();
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mannar-municipal-council-contacts.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToastMessage("Directory downloaded as CSV");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <TopBar />
      <Navigation />
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-6 z-50 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg flex items-center animate-fadeIn">
          <span>{toastMessage}</span>
          <button
            className="ml-4 text-green-800 hover:text-green-900"
            onClick={() => setShowToast(false)}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <Breadcrumbs items={[
            { label: "Home", href: "/" }, 
            { label: "Information", href: "/info" }, 
            { label: "Contact Directory" }
          ]} />
          
          {/* Header Section */}
          <header className="rounded-2xl overflow-hidden mb-8 bg-gradient-to-r from-primary to-primary-dark text-white p-8 shadow-lg">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Mannar Municipal Council Contact Directory</h1>
              <p className="text-lg opacity-90 mb-6">
                Find the right contact in the Mannar Municipal Council quickly and efficiently.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 mr-2" />
                    <h3 className="font-semibold">Main Office</h3>
                  </div>
                  <p className="text-sm opacity-90">{CONTACT_DATA.main.address}</p>
                  <p className="text-sm mt-2 opacity-90">Tel: {CONTACT_DATA.main.tel}</p>
                  <p className="text-sm opacity-90">Fax: {CONTACT_DATA.main.fax}</p>
                  <p className="text-sm mt-2 opacity-90">
                    Email: <a className="underline" href={`mailto:${CONTACT_DATA.main.email}`}>{CONTACT_DATA.main.email}</a>
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex items-center mb-3">
                    <User className="w-5 h-5 mr-2" />
                    <h3 className="font-semibold">Office Hours</h3>
                  </div>
                  <p className="text-sm opacity-90">Monday - Friday: 8:30 AM - 4:30 PM</p>
                  <p className="text-sm mt-2 opacity-90">Saturday: 8:30 AM - 12:30 PM</p>
                  <p className="text-sm opacity-90">Sunday: Closed</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex items-center mb-3">
                    <Building className="w-5 h-5 mr-2" />
                    <h3 className="font-semibold">Quick Access</h3>
                  </div>
                  <div className="space-y-2">
                    <button
                      className="w-full text-left text-sm hover:underline"
                      onClick={() => setSelectedDivision("Municipal Commissioner's Office")}
                    >
                      Commissioner's Office
                    </button>
                    <button
                      className="w-full text-left text-sm hover:underline"
                      onClick={() => setSelectedDivision("Administration Division")}
                    >
                      Administration
                    </button>
                    <button
                      className="w-full text-left text-sm hover:underline"
                      onClick={() => setSelectedDivision("Finance Department")}
                    >
                      Finance Department
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
          
          {/* Search and Filter Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 sticky top-16 z-10">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, position, phone, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-colors"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-3 w-full md:w-auto">
                <div className="relative">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium"
                  >
                    <Filter className="w-5 h-5" />
                    <span>Filter</span>
                    {selectedDivision !== "all" && (
                      <span className="bg-primary text-white text-sm rounded-full h-6 w-6 flex items-center justify-center">
                        1
                      </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                  </button>
                  {showFilters && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-20 p-3">
                      <h4 className="font-medium text-gray-900 mb-2">Filter by Division</h4>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        <label className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                          <input
                            type="radio"
                            name="division"
                            value="all"
                            checked={selectedDivision === "all"}
                            onChange={() => setSelectedDivision("all")}
                            className="rounded-full text-primary focus:ring-primary"
                          />
                          <span>All Divisions</span>
                        </label>
                        {divisionsList.map((division, index) => (
                          <label key={index} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                            <input
                              type="radio"
                              name="division"
                              value={division}
                              checked={selectedDivision === division}
                              onChange={() => setSelectedDivision(division)}
                              className="rounded-full text-primary focus:ring-primary"
                            />
                            <span>{division}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={downloadCSV}
                  className="flex items-center gap-2 px-4 py-3 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors font-medium"
                >
                  <Download className="w-5 h-5" />
                  <span>Export</span>
                </button>
              </div>
            </div>
            {/* Active filters */}
            {(searchTerm || selectedDivision !== "all") && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Active filters:</span>
                  {searchTerm && (
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1">
                      Search: "{searchTerm}"
                      <button onClick={() => setSearchTerm("")}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedDivision !== "all" && (
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1">
                      Division: {selectedDivision}
                      <button onClick={() => setSelectedDivision("all")}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            <section className="lg:w-2/3">
              {filteredDivisions.length > 0 ? (
                filteredDivisions.map((division: any, idx: number) => (
                  <DivisionSection
                    key={idx}
                    division={division}
                    searchTerm={searchTerm}
                    onEmailClick={handleEmailClick}
                    onPhoneClick={handlePhoneClick}
                  />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-xl shadow-sm p-6">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No contacts found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </section>
            
            <aside className="lg:w-1/3">
              <div className="sticky top-32 space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Directory Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Divisions:</span>
                      <span className="font-medium text-gray-900">{CONTACT_DATA.divisions.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Contacts:</span>
                      <span className="font-medium text-gray-900">
                        {CONTACT_DATA.divisions.reduce((total: number, division: any) => total + division.items.length, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Updated:</span>
                      <span className="font-medium text-gray-900">January 2024</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Quick Actions</h3>
                  <div className="space-y-3">
                    <button
                      className="w-full flex items-center gap-2 px-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors"
                      onClick={() => handleEmailClick(CONTACT_DATA.main.email)}
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email Main Office</span>
                    </button>
                    <button
                      className="w-full flex items-center gap-2 px-4 py-3 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors"
                      onClick={downloadCSV}
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Directory</span>
                    </button>
                    <button
                      className="w-full flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                      onClick={() => window.print()}
                    >
                      <Printer className="w-5 h-5" />
                      <span>Print Directory</span>
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Most Contacted</h3>
                  <div className="space-y-4">
                    {CONTACT_DATA.divisions[0].items.slice(0, 3).map((person: any, idx: number) => {
                      const [hasProfileImage, setHasProfileImage] = useState(!!person.profile);
                      const avatarUrl = generateAvatar(person.name, "1e40af", "ffffff");
                      return (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-primary">
                            {hasProfileImage ? (
                              <img
                                src={person.profile}
                                alt={person.name}
                                className="w-full h-full object-cover"
                                onError={() => setHasProfileImage(false)}
                              />
                            ) : (
                              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-medium text-xs">
                                {person.name.split(" ").map((n: string) => n[0]).join("").toUpperCase().slice(0, 2)}
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate text-gray-900">{person.name}</p>
                            <p className="text-xs text-gray-600 truncate">{person.position}</p>
                          </div>
                          <button
                            className="text-primary hover:text-primary/80"
                            onClick={() => handleEmailClick(person.email)}
                          >
                            <Mail className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}