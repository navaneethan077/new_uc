export type Notice = {
  id: number;
  title: string;
  body: string;
  category: string;
  dateIssued: string; // ISO date string
  deadline?: string;
  issuedBy: string;
  refNo?: string;
  attachment?: string; // file URL
};

export const notices: Notice[] = [
  {
    id: 101,
    title: "Public Protest Against Wind Project Continues",
    body:
      "Residents of Mannar held a protest on October 28, 2025 calling for the halt of the proposed wind power project, citing environmental damage and community dissent.",
    category: "Environment",
    dateIssued: "2025-10-28T09:30:00Z",
    issuedBy: "Civil Society Alliance, Mannar",
    refNo: "MUC/ENV/2025/101",
    attachment: "https://icseindia.org/document/sample.pdf"
  },
  {
    id: 102,
    title: "Solid Waste Segregation Required from Nov 1, 2025",
    body:
      "The Mannar Urban Council mandates all households to separate biodegradable from non-biodegradable waste from November 1, 2025. Non-compliance may incur fines.",
    category: "Environment",
    dateIssued: "2025-10-25T14:00:00Z",
    issuedBy: "Environment Division, Mannar UC",
    refNo: "MUC/ENV/2025/102",
    attachment: "https://icseindia.org/document/sample.pdf"
  },
  {
    id: 103,
    title: "Trade License Renewal – Extended Deadline",
    body:
      "The deadline for renewing shop trade licenses has been extended to November 15, 2025 for municipal areas in Mannar.",
    category: "Business",
    dateIssued: "2025-10-26T08:15:00Z",
    deadline: "2025-11-15T23:59:00Z",
    issuedBy: "Administrative Division, Mannar UC",
    refNo: "MUC/TRADE/2025/103",
    attachment: "/documents/pdf-test.pdf"
  },
  {
    id: 104,
    title: "Property Tax Payment Reminder",
    body:
      "Final reminder: annual property tax for 2025 must be settled by November 30, 2025. Late payments will incur a surcharge of 10%.",
    category: "Finance",
    dateIssued: "2025-10-20T10:00:00Z",
    deadline: "2025-11-30T23:59:00Z",
    issuedBy: "Finance Division, Mannar UC",
    refNo: "MUC/FIN/2025/104"
  },
  {
    id: 105,
    title: "Office Closure for Deepavali Festival",
    body:
      "Mannar Urban Council offices will be closed on October 29, 2025 in observance of the Deepavali festival.",
    category: "General",
    dateIssued: "2025-10-15T07:00:00Z",
    issuedBy: "Office of the Secretary, Mannar UC",
    refNo: "MUC/GEN/2025/105"
  }
];
