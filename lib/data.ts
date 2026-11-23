export const services = [
  {
    slug: "security-services",
    fit: "For facilities looking for security manpower, surveillance support and supervision planned around their site requirements.",
    name: "Security Services",
    eyebrow: "SAFETY & PROTECTION",
    short:
      "Professional, reliable and trustworthy security manpower for safer premises.",
    detail:
      "SATYA presents security manpower as a core part of its facility services. The brochure highlights male and female guards, 24×7 strict surveillance, reliable deployment and supervision tailored to site requirements.",
    icon: "shield",
    points: [
      "Male & female security guards",
      "24×7 strict surveillance",
      "Site-wise deployment",
      "Reliable and trustworthy personnel",
      "Strict supervision",
    ],
  },
  {
    slug: "housekeeping-services",
    fit: "For workplaces and facilities that need regular housekeeping support from trained, verified and uniformed staff.",
    name: "Housekeeping Services",
    eyebrow: "CLEAN, EVERY DAY",
    short:
      "Trained housekeeping teams and dependable routines for cleaner spaces.",
    detail:
      "SATYA’s housekeeping offering focuses on clean, organised and hygienic environments, supported by trained staff, quality service assurance and professional presentation.",
    icon: "sparkles",
    points: [
      "Daily housekeeping support",
      "Trained and verified staff",
      "Quality service assurance",
      "Uniformed professionals",
      "Cleaning routines and supervision",
    ],
  },
  {
    slug: "patient-care-services",
    fit: "For hospitals and home care settings seeking compassionate help with personal care, daily activities and companionship.",
    name: "Patient Care Services",
    eyebrow: "CARE WITH COMPASSION",
    short:
      "Compassionate assistance for hospitals, elderly care and home care.",
    detail:
      "SATYA describes its patient care service as reliable, trained and compassionate support for hospitals and home care. The brochure lists personal care, daily activity assistance, medication reminders, companionship and post-surgery or elderly care.",
    icon: "heart",
    points: [
      "Personal care (bathing & hygiene)",
      "Assistance in daily activities: mobility, feeding and dressing",
      "Medication reminders",
      "Companionship and emotional support",
      "Post-surgery and elderly care",
    ],
  },
  {
    slug: "gardening-landscaping",
    fit: "For sites with gardens or outdoor green spaces that need regular upkeep and plant care.",
    name: "Gardening & Landscaping",
    eyebrow: "GREENER ENVIRONMENTS",
    short:
      "Thoughtful green-space care for fresher, more welcoming surroundings.",
    detail:
      "SATYA’s gardening and landscaping brochure focuses on green-space maintenance and keeping outdoor environments cared for and presentable.",
    icon: "sprout",
    points: [
      "Garden and green-space maintenance",
      "Plant care",
      "Outdoor area upkeep",
      "Regular site support",
    ],
  },
  {
    slug: "glass-cleaning",
    fit: "For facilities that want planned cleaning support for glass and window surfaces, with attention to the final finish.",
    name: "Glass Cleaning Services",
    eyebrow: "A CLEARER FIRST IMPRESSION",
    short: "Professional glass cleaning for brighter, well-presented spaces.",
    detail:
      "SATYA includes dedicated glass cleaning services in its facility portfolio, helping maintain clean and presentable glass surfaces.",
    icon: "panels",
    points: [
      "Glass and window cleaning",
      "Professional cleaning support",
      "Planned cleaning schedules",
      "Attention to finish and presentation",
    ],
  },
  {
    slug: "single-disc-floor-cleaning",
    fit: "For floors that need deeper scrubbing or polishing with single-disc machine support.",
    name: "Single Disc Floor Cleaning",
    eyebrow: "DEEP CLEAN. PERFECT FINISH.",
    short:
      "Professional floor scrubbing and polishing with single-disc machine technology.",
    detail:
      "The SATYA brochure describes deep floor cleaning to remove dirt, stains and tough marks from floor types. It highlights single-disc technology, safe and reliable cleaning, and trained operators.",
    icon: "brush",
    points: [
      "Deep floor cleaning",
      "Removes dirt, stains and tough marks",
      "Single-disc machine technology",
      "Scrubbing and polishing",
      "Trained and experienced operators",
    ],
  },
  {
    slug: "housekeeping-staff-training",
    fit: "For housekeeping teams that need practical guidance on cleaning techniques, schedules, materials and safety.",
    name: "Housekeeping Staff Training",
    eyebrow: "PEOPLE. PROCESS. PERFORMANCE.",
    short:
      "Practical training for consistent cleaning standards and safer routines.",
    detail:
      "SATYA’s training material highlights proper cleaning techniques, daily cleaning schedules, use of cleaning materials and safety precautions.",
    icon: "training",
    points: [
      "Proper cleaning techniques",
      "Daily cleaning schedules",
      "Correct use of cleaning materials",
      "Safety precautions",
    ],
  },
  {
    slug: "uniforms-manpower",
    fit: "For facilities seeking uniformed housekeeping professionals and manpower support for site requirements.",
    name: "Uniforms & Manpower Supply",
    eyebrow: "PROFESSIONAL TEAMS",
    short:
      "Uniformed and presentable personnel for day-to-day facility operations.",
    detail:
      "SATYA’s brochures show uniformed housekeeping professionals and manpower support as part of its facility services offering.",
    icon: "users",
    points: [
      "Uniformed professionals",
      "Housekeeping manpower support",
      "Professional presentation",
      "Site-specific staffing support",
    ],
  },
  {
    slug: "office-cleaning",
    fit: "For offices looking for support to keep work areas clean, neat and presentable.",
    name: "Office Cleaning Services",
    eyebrow: "WORKPLACE CLEANLINESS",
    short:
      "Cleaning support to keep office environments neat, hygienic and welcoming.",
    detail:
      "Office cleaning is named in SATYA’s service overview brochure as part of its facility support portfolio.",
    icon: "sparkles",
    points: [
      "Office cleaning support",
      "Clean and presentable work areas",
      "Professional cleaning personnel",
      "Site-specific service routines",
    ],
  },
  {
    slug: "hospitality-staff",
    fit: "For facilities that require hospitality staff support and professional presentation.",
    name: "Hospitality Staff",
    eyebrow: "SERVICE WITH A WELCOME",
    short:
      "Hospitality staff support as part of SATYA’s facility manpower portfolio.",
    detail:
      "Hospitality staff is listed in SATYA’s service overview brochure among the manpower and facility services offered.",
    icon: "heart",
    points: [
      "Hospitality staff support",
      "Professional presentation",
      "Manpower support",
      "Site-specific requirements",
    ],
  },
];
export const serviceImages: Record<(typeof services)[number]["slug"], string> = {
  "security-services": "/images/security.webp",
  "housekeeping-services": "/images/housekeeping-services.webp",
  "patient-care-services": "/images/hospitality-staff.webp",
  "gardening-landscaping": "/images/gardening-landscaping.webp",
  "glass-cleaning": "/images/office-cleaning.webp",
  "single-disc-floor-cleaning": "/images/single-disc-floor-cleaning.webp",
  "housekeeping-staff-training": "/images/housekeeping-staff-training.webp",
  "uniforms-manpower": "/images/uniforms-manpower.webp",
  "office-cleaning": "/images/office-cleaning.webp",
  "hospitality-staff": "/images/hospitality-staff.webp",
};
export const gallery = [
  "/gallery/CompleteFacilitySolutions.webp",
  "/gallery/PatientCareServices.webp",
  "/gallery/SingleDiscMachineCleaning.webp",
  "/gallery/WhatsApp Image 2026-11-16 at 12.44.48.jpeg",
  "/gallery/WhatsApp Image 2026-11-16 at 12.44.49 (1).jpeg",
  "/gallery/WhatsApp Image 2026-11-16 at 12.44.49.jpeg",
  "/gallery/WhatsApp Image 2026-11-16 at 12.44.51.jpeg",
  "/gallery/WhatsApp Image 2026-11-16 at 12.44.53.jpeg",
  "/gallery/WhatsApp Image 2026-11-16 at 12.44.54.jpeg",
  "/gallery/WhatsApp Image 2026-11-16 at 12.44.56.jpeg",
  "/gallery/WhatsApp Image 2026-11-16 at 12.44.57.jpeg",
  "/gallery/WhatsApp Image 2026-11-16 at 12.44.59.jpeg",
  "/gallery/WhatsApp Image 2026-11-16 at 12.45.00.jpeg",
  "/gallery/WhatsApp Image 2026-11-16 at 12.45.01.jpeg",
  "/gallery/WhatsApp Image 2026-11-16 at 12.45.03.jpeg",
  "/gallery/WhatsApp Image 2026-11-16 at 12.45.05.jpeg",
];
export const contact = {
  phone1: "9815088606",
  phone2: "7717440566",
  email: "satyafacility8@gmail.com",
  address: "Plot No. 775, JLPL, Sector 82, Mohali, Punjab, India",
};
