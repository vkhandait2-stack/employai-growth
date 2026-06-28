import {
  PhoneCall,
  Briefcase,
  MessageCircle,
  CalendarCheck,
  PhoneOutgoing,
  Workflow,
  Database,
  HeartPulse,
  Building2,
  GraduationCap,
  Landmark,
  Factory,
  Scale,
  Hotel,
  Car,
  Shield,
  HardHat,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  bullets: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "ai-voice-receptionist",
    name: "AI Voice Receptionist",
    role: "Front-Desk Employee",
    tagline: "Never miss another business call.",
    description:
      "A virtual receptionist that answers calls 24/7, handles customer inquiries, books appointments and routes calls intelligently.",
    bullets: [
      "Answer incoming calls",
      "Route customers",
      "Book appointments",
      "Capture leads",
      "Answer FAQs",
    ],
  },
  {
    slug: "ai-sales-employee",
    name: "AI Sales Employee",
    role: "Inside Sales Rep",
    tagline: "Turn every lead into an opportunity.",
    description:
      "An AI-powered sales representative that qualifies leads, answers product questions, follows up automatically and books meetings.",
    bullets: [
      "Qualify leads",
      "Follow up automatically",
      "Handle objections",
      "Schedule meetings",
      "Update CRM",
    ],
  },
  {
    slug: "ai-whatsapp-sales-agent",
    name: "AI WhatsApp Sales Agent",
    role: "Conversation Specialist",
    tagline: "Turn WhatsApp into your highest-converting channel.",
    description:
      "An intelligent WhatsApp assistant that engages customers, manages conversations, qualifies leads and supports marketing campaigns.",
    bullets: [
      "AI Conversations",
      "Lead Qualification",
      "Broadcast Campaigns",
      "Product Recommendations",
      "Appointment Booking",
    ],
  },
  {
    slug: "ai-appointment-setter",
    name: "AI Appointment Setter",
    role: "Scheduling Coordinator",
    tagline: "Fill your calendar automatically.",
    description:
      "An AI assistant that schedules meetings, confirms appointments, sends reminders and reduces no-shows.",
    bullets: [
      "Book meetings",
      "Send reminders",
      "Confirm appointments",
      "Reduce no-shows",
    ],
  },
  {
    slug: "ai-outbound-calling",
    name: "AI Outbound Calling",
    role: "Campaign Operator",
    tagline: "Reach thousands of customers automatically.",
    description:
      "Launch intelligent AI calling campaigns for promotions, reminders, surveys, customer engagement, admissions, feedback and outreach.",
    bullets: [
      "Promotions",
      "Customer Follow-ups",
      "Surveys",
      "Event Invitations",
      "Lead Generation",
      "Feedback Campaigns",
    ],
  },
  {
    slug: "ai-workflow-automation",
    name: "AI Workflow Automation",
    role: "Operations Engineer",
    tagline: "Automate repetitive business operations.",
    description:
      "Automate repetitive business operations by connecting CRM, email, calendars, WhatsApp and internal workflows.",
    bullets: [
      "CRM",
      "Email",
      "Calendar",
      "Notifications",
      "Lead Routing",
      "Internal Processes",
    ],
  },
  {
    slug: "crm-automation",
    name: "CRM Automation",
    role: "Pipeline Manager",
    tagline: "Centralize every customer interaction.",
    description:
      "Automatically organize leads, manage pipelines, trigger follow-ups and improve sales productivity.",
    bullets: [
      "Sales Pipeline",
      "Lead Tracking",
      "Customer History",
      "Automated Follow-ups",
      "Reports",
    ],
  },
];

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  "ai-voice-receptionist": PhoneCall,
  "ai-sales-employee": Briefcase,
  "ai-whatsapp-sales-agent": MessageCircle,
  "ai-appointment-setter": CalendarCheck,
  "ai-outbound-calling": PhoneOutgoing,
  "ai-workflow-automation": Workflow,
  "crm-automation": Database,
};

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  blurb: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    blurb: "Automate patient communication and appointment management end-to-end.",
    challenges: [
      "High call volume",
      "Missed appointments",
      "Long response times",
      "Patient follow-up",
      "Staff workload",
    ],
    solutions: [
      "AI Voice Receptionist",
      "AI Appointment Setter",
      "AI WhatsApp Patient Assistant",
      "AI Follow-up Calls",
      "CRM Automation",
    ],
    benefits: [
      "Increase appointment bookings",
      "Reduce missed calls",
      "Improve patient experience",
      "Automate reminders",
      "Reduce admin workload",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Building2,
    blurb: "Respond to every enquiry instantly and book more site visits.",
    challenges: [
      "Thousands of leads",
      "Slow follow-up",
      "Site visit scheduling",
      "Low conversion",
      "Manual CRM updates",
    ],
    solutions: [
      "AI Sales Employee",
      "AI WhatsApp Sales Agent",
      "AI Outbound Calling",
      "AI Appointment Setter",
      "CRM Automation",
    ],
    benefits: [
      "Respond instantly",
      "Qualify leads automatically",
      "Book more site visits",
      "Increase sales productivity",
      "Improve lead conversion",
    ],
  },
  {
    slug: "finance",
    name: "Finance",
    icon: Landmark,
    blurb: "Streamline customer service, EMI reminders and policy renewals.",
    challenges: [
      "Loan inquiries",
      "EMI reminders",
      "Customer verification",
      "Policy renewals",
      "Large support volume",
    ],
    solutions: [
      "AI Voice Receptionist",
      "AI Sales Employee",
      "AI Outbound Calling",
      "AI Workflow Automation",
      "CRM Automation",
    ],
    benefits: [
      "Automate communication",
      "Improve follow-up",
      "Reduce manual operations",
      "Increase productivity",
      "Deliver faster service",
    ],
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    blurb: "Convert more admissions enquiries with always-on counselling.",
    challenges: [
      "Admission inquiries",
      "Student counselling",
      "Parent communication",
      "Fee reminders",
      "High enquiry volume",
    ],
    solutions: [
      "AI Voice Receptionist",
      "AI WhatsApp Sales Agent",
      "AI Appointment Setter",
      "AI Outbound Calling",
      "CRM Automation",
    ],
    benefits: [
      "Increase admissions",
      "Automate counselling",
      "Respond faster",
      "Reduce staff workload",
      "Improve student experience",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    blurb: "Coordinate dealers, orders and support across every channel.",
    challenges: [
      "Dealer communication",
      "Order tracking",
      "Customer support",
      "Sales enquiries",
      "Internal workflows",
    ],
    solutions: [
      "AI Sales Employee",
      "AI Voice Receptionist",
      "AI Workflow Automation",
      "CRM Automation",
      "AI WhatsApp Sales Agent",
    ],
    benefits: [
      "Automate dealer comms",
      "Improve order management",
      "Reduce repetitive work",
      "Increase productivity",
      "Better customer support",
    ],
  },
  {
    slug: "insurance",
    name: "Insurance",
    icon: Shield,
    blurb: "Renew policies and handle claims with AI-driven communication.",
    challenges: ["Renewal reminders", "Claims status", "Policy queries", "Lead follow-up"],
    solutions: [
      "AI Outbound Calling",
      "AI WhatsApp Sales Agent",
      "AI Voice Receptionist",
      "CRM Automation",
    ],
    benefits: [
      "Higher renewal rate",
      "Faster claim updates",
      "Reduced call backlog",
      "Better policyholder experience",
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: Hotel,
    blurb: "Handle bookings, guest queries and concierge requests around the clock.",
    challenges: ["Bookings", "Guest queries", "Multi-language support", "Repeat enquiries"],
    solutions: ["AI Voice Receptionist", "AI WhatsApp Sales Agent", "AI Appointment Setter"],
    benefits: [
      "More direct bookings",
      "24/7 guest support",
      "Reduced front-desk load",
      "Multi-language coverage",
    ],
  },
  {
    slug: "automotive",
    name: "Automotive",
    icon: Car,
    blurb: "Drive test-drives, service bookings and dealership conversions.",
    challenges: ["Test drive scheduling", "Service reminders", "Lead follow-up", "Dealer comms"],
    solutions: [
      "AI Sales Employee",
      "AI Appointment Setter",
      "AI Outbound Calling",
      "CRM Automation",
    ],
    benefits: [
      "More test drives",
      "Higher service retention",
      "Faster lead follow-up",
      "Better dealer coordination",
    ],
  },
  {
    slug: "legal",
    name: "Legal",
    icon: Scale,
    blurb: "Intake, qualify and schedule consultations without missing a call.",
    challenges: ["Client intake", "Consultation booking", "Document follow-up"],
    solutions: ["AI Voice Receptionist", "AI Appointment Setter", "AI Workflow Automation"],
    benefits: ["Capture every lead", "Reduce admin load", "Faster client onboarding"],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: HardHat,
    blurb: "Coordinate enquiries, vendors and project communication.",
    challenges: ["Project enquiries", "Vendor coordination", "Quotation follow-up"],
    solutions: ["AI Sales Employee", "AI WhatsApp Sales Agent", "AI Workflow Automation"],
    benefits: ["Higher conversion", "Better coordination", "Less manual work"],
  },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Book Your Free Consultation", desc: "Map your goals, channels and customer journey." },
  { n: "02", title: "Business Analysis", desc: "Audit existing workflows and identify automation wins." },
  { n: "03", title: "AI Strategy", desc: "Design the right AI Employees for your industry." },
  { n: "04", title: "Deployment", desc: "Integrate with CRM, telephony, WhatsApp and calendars." },
  { n: "05", title: "Training", desc: "Train AI on your business knowledge and tone of voice." },
  { n: "06", title: "Go Live", desc: "Launch with monitoring, QA and rollback safety." },
  { n: "07", title: "Continuous Optimization", desc: "Iterate on performance, conversion and CSAT." },
];

export const CASE_STUDIES = [
  {
    slug: "healthcare-network",
    industry: "Healthcare",
    title: "Multi-Clinic Patient Concierge",
    challenge:
      "Front-desk teams across multiple clinics couldn't keep up with appointment calls and follow-ups.",
    solution: "AI Voice Receptionist + AI WhatsApp Patient Assistant + CRM Automation.",
    implementation:
      "Integrated with the clinic's PMS and WhatsApp Business API. Trained the AI on services, doctors and FAQs.",
    outcomes: [
      "Faster patient response time",
      "Higher appointment booking rate",
      "Reduced administrative workload",
      "Improved patient experience",
    ],
  },
  {
    slug: "real-estate-builder",
    industry: "Real Estate",
    title: "AI Sales Workforce for a National Builder",
    challenge:
      "Sales teams couldn't follow up with thousands of leads across cities in time, causing high drop-off.",
    solution: "AI Sales Employee + AI WhatsApp Agent + AI Outbound Calling.",
    implementation:
      "Connected ad sources, CRM and dialer. Custom knowledge base for projects, pricing and floor plans.",
    outcomes: [
      "Instant lead engagement",
      "More qualified site visits",
      "Reduced manual follow-ups",
      "Higher pipeline coverage",
    ],
  },
  {
    slug: "education-institute",
    industry: "Education",
    title: "Always-On Admissions Counsellor",
    challenge:
      "Admission enquiries spiked during peak season and counselling teams were stretched thin.",
    solution: "AI Voice Receptionist + AI WhatsApp Sales Agent + AI Appointment Setter.",
    implementation:
      "AI trained on program catalogues, fee structures and scholarships. Booked counsellor meetings directly.",
    outcomes: [
      "Higher enquiry-to-application rate",
      "Reduced response time",
      "Counsellors focused on closing",
      "Better parent experience",
    ],
  },
  {
    slug: "finance-services",
    industry: "Finance",
    title: "Automated Loan & EMI Communication",
    challenge:
      "Manual EMI reminders and policy renewal calls were eating up support team capacity.",
    solution: "AI Outbound Calling + AI Voice Receptionist + CRM Automation.",
    implementation:
      "Segmented campaigns by product and stage. Routed exceptions to human agents with full context.",
    outcomes: [
      "Improved on-time payments",
      "Reduced manual operations",
      "More consistent customer experience",
      "Lower cost-to-serve",
    ],
  },
  {
    slug: "manufacturing-dealer-network",
    industry: "Manufacturing",
    title: "Dealer Support & Order Automation",
    challenge:
      "Dealer enquiries and order updates were scattered across phone, email and WhatsApp.",
    solution: "AI WhatsApp Sales Agent + AI Workflow Automation + CRM Automation.",
    implementation:
      "Unified channels into one inbox. Automated routing to the right region and product team.",
    outcomes: [
      "Faster dealer response",
      "Fewer dropped requests",
      "Cleaner order pipeline",
      "Better internal visibility",
    ],
  },
];

export const TRUST_PILLARS = [
  "Enterprise-Ready AI",
  "24×7 Availability",
  "Fast Deployment",
  "Business-Focused Solutions",
  "Secure Infrastructure",
  "Dedicated Support",
  "Scalable Automation",
  "Custom Integrations",
];

export const BLOG_POSTS = [
  { slug: "what-is-an-ai-employee", title: "What Is an AI Employee?", category: "AI Automation", read: "6 min" },
  { slug: "ai-receptionist-vs-traditional", title: "AI Receptionist vs Traditional Receptionist", category: "AI Voice", read: "5 min" },
  { slug: "how-ai-improves-customer-communication", title: "How AI Improves Customer Communication", category: "AI Automation", read: "7 min" },
  { slug: "ai-for-healthcare", title: "AI for Healthcare", category: "Healthcare", read: "6 min" },
  { slug: "ai-for-real-estate", title: "AI for Real Estate", category: "Real Estate", read: "6 min" },
  { slug: "ai-for-manufacturing", title: "AI for Manufacturing", category: "Manufacturing", read: "5 min" },
  { slug: "ai-workflow-automation-guide", title: "AI Workflow Automation Guide", category: "Workflow Automation", read: "8 min" },
  { slug: "whatsapp-ai-for-business", title: "WhatsApp AI for Business", category: "WhatsApp AI", read: "5 min" },
  { slug: "voice-ai-explained", title: "Voice AI Explained", category: "AI Voice", read: "6 min" },
  { slug: "crm-automation-benefits", title: "CRM Automation Benefits", category: "CRM", read: "5 min" },
];

export const FAQ_ITEMS = [
  {
    q: "What is an AI Employee?",
    a: "An AI Employee is an intelligent assistant designed to automate business tasks such as customer communication, lead qualification, appointment booking and workflow automation. It works alongside your team, not instead of them.",
  },
  {
    q: "How does the AI Voice Receptionist work?",
    a: "It answers your incoming business calls 24/7, understands customer intent, answers FAQs, books appointments and routes complex conversations to the right human team member.",
  },
  {
    q: "Can AI integrate with our CRM?",
    a: "Yes. We support integrations with major CRM platforms, custom systems, calendars, WhatsApp Business API and most telephony providers.",
  },
  {
    q: "Can AI book appointments?",
    a: "Yes. Our AI Appointment Setter books, confirms, reschedules and sends reminders directly into your calendar.",
  },
  {
    q: "Does AI support WhatsApp?",
    a: "Yes. Our AI WhatsApp Sales Agent handles conversations, qualifies leads, runs broadcast campaigns and books appointments on WhatsApp.",
  },
  {
    q: "How long does deployment take?",
    a: "Timelines depend on scope and integrations. Most deployments go live in a few weeks following a discovery and training phase.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We follow enterprise-grade security practices, encrypted storage and role-based access. Data is processed strictly for your use case.",
  },
  {
    q: "Which industries do you serve?",
    a: "Healthcare, Real Estate, Finance, Education, Manufacturing, Insurance, Hospitality, Construction, Legal and other professional services.",
  },
  {
    q: "Can AI handle multiple conversations?",
    a: "Yes. AI Employees scale instantly and handle thousands of conversations in parallel without losing quality.",
  },
  {
    q: "Do you provide training and support?",
    a: "Yes. We provide onboarding, knowledge-base training, dedicated support and continuous optimization.",
  },
];
