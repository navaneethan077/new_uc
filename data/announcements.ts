// data/announcements.ts

export type Announcement = {
  id: number
  title: string
  description: string
  category: string
  date: string
  eventDate?: string
  priority: "normal" | "high" | "urgent"
  location?: string
  publishedBy: string
  image?: string
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Opening of Mannar Public Park",
    description:
      "The Mannar Urban Council proudly announces the grand opening of the renovated Mannar Public Park. All residents are invited to join the ceremony and cultural performances.",
    category: "Community Event",
    date: "2025-10-12",
    eventDate: "2025-10-20",
    priority: "normal",
    location: "Mannar Town Park",
    publishedBy: "Mannar Urban Council",
    image:"/water.webp",
  },
  {
    id: 2,
    title: "Temporary Water Supply Disruption",
    description:
      "Due to ongoing maintenance at the Thiruketheeswaram treatment facility, water supply to central Mannar areas will be temporarily interrupted from 9:00 AM to 4:00 PM on October 15th.",
    category: "Service Alert",
    date: "2025-10-13",
    priority: "high",
    location: "Central Mannar",
    publishedBy: "Water Supply Division, MUC",
    image:"/OIP.webp",
  },
  {
    id: 3,
    title: "Public Awareness Campaign on Waste Management",
    description:
      "Join our campaign to promote household waste segregation and recycling. Free bins and pamphlets will be distributed to residents of Mannar town area.",
    category: "Awareness Program",
    date: "2025-10-10",
    eventDate: "2025-10-18",
    priority: "normal",
    publishedBy: "Environmental Division, MUC",
    image:"/OIP.webp",
  },
  {
    id: 4,
    title: "Emergency Road Closure at Hospital Road",
    description:
      "Hospital Road will remain closed for vehicle traffic until further notice due to urgent sewer maintenance work. Please use alternative routes via Market Road.",
    category: "Public Notice",
    date: "2025-10-11",
    priority: "urgent",
    location: "Hospital Road, Mannar",
    publishedBy: "Road Maintenance Division, MUC",
     image:"/OIP.webp",
  },
  {
    id: 5,
    title: "Mannar Heritage Festival 2025",
    description:
      "Experience Mannar’s rich cultural traditions with dance, crafts, and food stalls. Organized by the Department of Culture with local schools participating.",
    category: "Festival",
    date: "2025-09-30",
    eventDate: "2025-10-25",
    priority: "normal",
    publishedBy: "Department of Culture, Mannar UC",
    image:"/OIP.webp",
  },
  {
    id: 6,
    title: "Electricity Supply Maintenance",
    description:
      "Scheduled maintenance will cause a power outage in Mannar Bazaar area on October 17th from 8 AM to 12 PM.",
    category: "Service Alert",
    date: "2025-10-13",
    priority: "high",
    location: "Mannar Bazaar",
    publishedBy: "Ceylon Electricity Board, Mannar Division",
     image:"/OIP.webp",
  },
]
