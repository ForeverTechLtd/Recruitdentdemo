const STORAGE_KEY = "recruitdent.mvp.state.v1";
const PROFESSIONAL_REFERENCES_REQUIRED = 2;
const APP_VERSION = "20260514-shareable-demo-v1";

const seedState = {
  persona: "clinic",
  regions: [
    { id: "uk", name: "United Kingdom", currency: "GBP", symbol: "£", registration: "GDC number" },
    { id: "intl", name: "International template", currency: "Local", symbol: "", registration: "Professional registration" }
  ],
  roles: [
    { id: "dentist", name: "Dentist", sector: "Dentistry", documents: ["Photo ID", "GDC registration", "Qualification certificate", "Proof of address", "NHS performer/PIN", "Indemnity", "DBS", "Right to work"] },
    { id: "nurse", name: "Dental nurse", sector: "Dentistry", documents: ["Photo ID", "GDC registration", "Qualification certificate", "Proof of address", "NHS performer/PIN", "DBS", "Right to work"] },
    { id: "hygienist", name: "Hygienist", sector: "Dentistry", documents: ["Photo ID", "GDC registration", "Qualification certificate", "Proof of address", "NHS performer/PIN", "Indemnity", "Right to work"] },
    { id: "therapist", name: "Dental therapist", sector: "Dentistry", documents: ["Photo ID", "GDC registration", "Qualification certificate", "Proof of address", "NHS performer/PIN", "Indemnity", "Right to work"] },
    { id: "healthcare-assistant", name: "Healthcare assistant", sector: "Healthcare", documents: ["Photo ID", "Qualification certificate", "Proof of address", "NHS performer/PIN", "DBS", "Right to work"] },
    { id: "receptionist", name: "Receptionist", sector: "Dentistry", documents: ["Photo ID", "Qualification certificate", "Proof of address", "DBS", "Right to work"] }
  ],
  clinic: {
    id: "clinic-1",
    name: "Brightside Dental Studio",
    tagline: "Modern mixed NHS and private dental care with verified locum cover.",
    about: "A two-site dental group focused on calm patient care, strong clinical governance and reliable rota coverage.",
    visibility: "public",
    regionId: "uk",
    setupFeePaid: true,
    rating: 4.8,
    website: "https://brightside-dental.example",
    email: "hello@brightside.example",
    phone: "0161 000 0148",
    address: "42 Deansgate, Manchester M3 2BW",
    services: ["General dentistry", "Hygiene", "Emergency appointments", "Private cosmetic treatments"],
    locations: ["Manchester Central", "Salford Quays"],
    rooms: ["Surgery 1", "Surgery 2", "Surgery 3", "Hygiene room", "Reception desk"],
    rotaSettings: {
      month: "2026-05",
      site: "all",
      allowOvertime: true,
      overtimeMultiplier: 1.5,
      toilEnabled: true
    },
    invitedStaff: ["practice.manager@brightside.example"],
    documents: [
      { id: "policy-1", name: "Clinical governance policy", type: "Policy", status: "shared", acceptanceRequired: true, acceptedBy: 6 },
      { id: "handbook-1", name: "Staff handbook", type: "Handbook", status: "shared", acceptanceRequired: true, acceptedBy: 4 },
      { id: "contract-1", name: "Locum dentist terms", type: "Contract", status: "draft", acceptanceRequired: true, acceptedBy: 0 }
    ],
    roleRates: [
      { id: "rate-1", roleId: "dentist", weekday: 425, afterHours: 475, weekend: 525 },
      { id: "rate-2", roleId: "nurse", weekday: 165, afterHours: 190, weekend: 215 },
      { id: "rate-3", roleId: "hygienist", weekday: 230, afterHours: 260, weekend: 290 },
      { id: "rate-4", roleId: "therapist", weekday: 280, afterHours: 315, weekend: 350 },
      { id: "rate-5", roleId: "healthcare-assistant", weekday: 130, afterHours: 150, weekend: 175 },
      { id: "rate-6", roleId: "receptionist", weekday: 125, afterHours: 145, weekend: 165 }
    ]
  },
  clinicians: [
    {
      id: "clin-1",
      name: "Dr Amina Patel",
      email: "amina.patel@example.com",
      phone: "07700 900148",
      headline: "Verified dentist available for urgent cover and mixed diary sessions.",
      bio: "Calm general dentist with strong NHS/private experience, same-day emergency cover and clear patient communication.",
      roleId: "dentist",
      location: "Manchester",
      radius: 18,
      rate: 425,
      availability: "Mon, Wed, Fri",
      registration: "GDC 284918",
      profileVisibility: "visible to verified clinics",
      verified: true,
      rating: 4.9,
      cpdHours: 34,
      pdpGoals: ["Complete advanced endodontics refresher", "Build cosmetic bonding case portfolio"],
      training: [
        { id: "train-1", name: "Medical emergencies", status: "complete", due: "2026-09-30" },
        { id: "train-2", name: "Radiography update", status: "booked", due: "2026-07-18" }
      ],
      references: [],
      documents: [
        { id: "doc-1", name: "Photo ID", status: "approved", expiry: "2028-04-01" },
        { id: "doc-2", name: "GDC registration", status: "approved", expiry: "2026-12-31" },
        { id: "doc-8", name: "Qualification certificate", status: "approved", expiry: "No expiry" },
        { id: "doc-3", name: "Indemnity", status: "approved", expiry: "2026-10-15" },
        { id: "doc-4", name: "DBS", status: "approved", expiry: "2027-02-20" }
      ]
    },
    {
      id: "clin-2",
      name: "Sofia Green",
      email: "sofia.green@example.com",
      phone: "07700 900215",
      headline: "Dental nurse seeking reliable rota shifts across the North West.",
      bio: "Experienced dental nurse with strong decontamination, reception support and nervous patient care.",
      roleId: "nurse",
      location: "Liverpool",
      radius: 35,
      rate: 175,
      availability: "Tue, Thu, Sat",
      registration: "GDC 301552",
      profileVisibility: "visible to verified clinics",
      verified: false,
      rating: 4.7,
      cpdHours: 19,
      pdpGoals: ["Refresh sedation support training"],
      training: [
        { id: "train-3", name: "Safeguarding level 2", status: "due soon", due: "2026-06-20" }
      ],
      references: [],
      documents: [
        { id: "doc-5", name: "Photo ID", status: "approved", expiry: "2029-01-01" },
        { id: "doc-6", name: "GDC registration", status: "pending", expiry: "2026-11-30" },
        { id: "doc-7", name: "DBS", status: "pending", expiry: "2027-03-19" }
      ]
    }
  ],
  shifts: [
    {
      id: "shift-1",
      title: "Dentist - Surgery 1",
      roleId: "dentist",
      date: "2026-05-04",
      start: "09:00",
      end: "17:00",
      location: "Manchester Central",
      region: "Greater Manchester",
      room: "Surgery 1",
      rate: 450,
      clinicRating: 4.8,
      visibility: "verified",
      status: "open",
      notes: "Mixed NHS/private diary in surgery 1. Nurse support provided.",
      assignedClinicianId: "",
      external: true,
      draft: false
    },
    {
      id: "shift-10",
      title: "Dental nurse - Surgery 1",
      roleId: "nurse",
      date: "2026-05-04",
      start: "08:30",
      end: "17:00",
      location: "Manchester Central",
      region: "Greater Manchester",
      room: "Surgery 1",
      rate: 165,
      clinicRating: 4.8,
      visibility: "internal",
      status: "open",
      notes: "Chairside support for surgery 1.",
      assignedClinicianId: "",
      external: false,
      draft: false
    },
    {
      id: "shift-11",
      title: "Dental nurse - Surgery 2",
      roleId: "nurse",
      date: "2026-05-04",
      start: "08:30",
      end: "17:00",
      location: "Manchester Central",
      region: "Greater Manchester",
      room: "Surgery 2",
      rate: 165,
      clinicRating: 4.8,
      visibility: "internal",
      status: "open",
      notes: "Chairside support for surgery 2.",
      assignedClinicianId: "",
      external: false,
      draft: false
    },
    {
      id: "shift-12",
      title: "Dentist - Surgery 3",
      roleId: "dentist",
      date: "2026-05-04",
      start: "09:00",
      end: "17:00",
      location: "Manchester Central",
      region: "Greater Manchester",
      room: "Surgery 3",
      rate: 425,
      clinicRating: 4.8,
      visibility: "verified",
      status: "open",
      notes: "Mixed diary in surgery 3.",
      assignedClinicianId: "",
      external: true,
      draft: false
    },
    {
      id: "shift-13",
      title: "Receptionist",
      roleId: "receptionist",
      date: "2026-05-04",
      start: "08:00",
      end: "17:30",
      location: "Manchester Central",
      region: "Greater Manchester",
      room: "Reception desk",
      rate: 125,
      clinicRating: 4.8,
      visibility: "internal",
      status: "open",
      notes: "Front desk, phones and patient arrivals.",
      assignedClinicianId: "",
      external: false,
      draft: false
    },
    {
      id: "shift-2",
      title: "Internal dental nurse shift",
      roleId: "nurse",
      date: "2026-05-05",
      start: "08:30",
      end: "16:30",
      location: "Salford Quays",
      region: "Greater Manchester",
      room: "Surgery 2",
      rate: 160,
      clinicRating: 4.8,
      visibility: "internal",
      status: "assigned",
      notes: "Internal staff bank cover.",
      assignedClinicianId: "clin-2",
      external: false,
      draft: false
    },
    {
      id: "shift-3",
      title: "Public hygienist session",
      roleId: "hygienist",
      date: "2026-05-06",
      start: "10:00",
      end: "14:00",
      location: "Manchester Central",
      region: "Greater Manchester",
      room: "Hygiene room",
      rate: 230,
      clinicRating: 4.8,
      visibility: "public",
      status: "open",
      notes: "Scale and polish list, public job board visible.",
      assignedClinicianId: "",
      external: true,
      draft: false
    },
    {
      id: "shift-4",
      title: "Public dentist afternoon",
      roleId: "dentist",
      date: "2026-05-07",
      start: "13:00",
      end: "18:00",
      location: "Salford Quays",
      region: "Greater Manchester",
      room: "Surgery 2",
      rate: 300,
      clinicRating: 4.8,
      visibility: "public",
      status: "open",
      notes: "Urgent treatment and examinations. Public job board visible.",
      assignedClinicianId: "",
      external: true,
      draft: false
    },
    {
      id: "shift-5",
      title: "Confirmed dentist locum",
      roleId: "dentist",
      date: "2026-05-12",
      start: "09:00",
      end: "17:00",
      location: "Manchester Central",
      region: "Greater Manchester",
      room: "Surgery 1",
      rate: 475,
      clinicRating: 4.8,
      visibility: "verified",
      status: "assigned",
      notes: "Booked locum session with mixed NHS/private diary.",
      assignedClinicianId: "clin-1",
      external: true,
      draft: false
    },
    {
      id: "shift-6",
      title: "Private cosmetic cover",
      roleId: "dentist",
      date: "2026-05-20",
      start: "10:00",
      end: "18:00",
      location: "Manchester Central",
      region: "Greater Manchester",
      room: "Surgery 2",
      rate: 500,
      clinicRating: 4.8,
      visibility: "verified",
      status: "assigned",
      notes: "Composite bonding reviews and private examinations.",
      assignedClinicianId: "clin-1",
      external: true,
      draft: false
    },
    {
      id: "shift-7",
      title: "April emergency dentist cover",
      roleId: "dentist",
      date: "2026-04-18",
      start: "09:00",
      end: "17:00",
      location: "Salford Quays",
      region: "Greater Manchester",
      room: "Surgery 2",
      rate: 440,
      clinicRating: 4.8,
      visibility: "verified",
      status: "completed",
      notes: "Completed emergency list for previous month earnings.",
      assignedClinicianId: "clin-1",
      external: true,
      draft: false
    },
    {
      id: "shift-8",
      title: "April Saturday dentist",
      roleId: "dentist",
      date: "2026-04-27",
      start: "09:00",
      end: "14:00",
      location: "Manchester Central",
      region: "Greater Manchester",
      room: "Surgery 1",
      rate: 525,
      clinicRating: 4.8,
      visibility: "verified",
      status: "completed",
      notes: "Completed weekend locum session.",
      assignedClinicianId: "clin-1",
      external: true,
      draft: false
    },
    {
      id: "shift-9",
      title: "Evening urgent dentist",
      roleId: "dentist",
      date: "2026-05-14",
      start: "18:00",
      end: "22:00",
      location: "Liverpool Central",
      region: "Merseyside",
      room: "Emergency room",
      rate: 360,
      clinicRating: 4.6,
      visibility: "public",
      status: "open",
      notes: "After-hours urgent treatment clinic. Public job board visible.",
      assignedClinicianId: "",
      external: true,
      draft: false
    }
  ],
  applications: [
    { id: "app-1", shiftId: "shift-1", clinicianId: "clin-1", status: "pending", message: "Available and fully verified." }
  ],
  payments: [
    { id: "pay-1", type: "setup", amount: 50, status: "paid", label: "Clinic setup fee" }
  ],
  invoices: [
    { id: "inv-1", number: "RD-2026-0001", shiftId: "shift-7", clinicianId: "clin-1", clinicId: "clinic-1", amount: 440, status: "sent", issuedAt: "2026-04-20", due: "2026-05-04" }
  ],
  reviews: [
    { id: "rev-1", from: "Brightside Dental Studio", to: "Dr Amina Patel", rating: 5, text: "Reliable, calm and excellent with patients.", bookingId: "historic-1" }
  ],
  messages: [
    { id: "msg-1", from: "Brightside Dental Studio", to: "Dr Amina Patel", text: "Can you cover the urgent dentist shift on Monday?", relatedShiftId: "shift-1" }
  ],
  courses: [
    {
      id: "course-1",
      title: "Medical emergencies and AED update",
      provider: "Recruitdent Learning",
      category: "Mandatory CPD",
      roles: ["dentist", "nurse", "hygienist", "therapist", "healthcare-assistant"],
      format: "Online",
      duration: "2 hours",
      cpdHours: 2,
      price: 29,
      nextDate: "2026-05-15",
      certificateName: "Medical emergencies",
      description: "Team update for emergency drugs, AED response, oxygen use and escalation in dental practice."
    },
    {
      id: "course-2",
      title: "Infection prevention and decontamination",
      provider: "Dental Compliance Academy",
      category: "Compliance",
      roles: ["dentist", "nurse", "hygienist", "therapist", "healthcare-assistant"],
      format: "Blended",
      duration: "3 hours",
      cpdHours: 3,
      price: 45,
      nextDate: "2026-05-22",
      certificateName: "Infection prevention",
      description: "Practical IPC, HTM 01-05 refreshers, zoning, instrument flow and audit-ready records."
    },
    {
      id: "course-3",
      title: "Radiography update for dental teams",
      provider: "North West Dental CPD",
      category: "Clinical skills",
      roles: ["dentist", "hygienist", "therapist", "nurse"],
      format: "Live webinar",
      duration: "2.5 hours",
      cpdHours: 2.5,
      price: 39,
      nextDate: "2026-06-04",
      certificateName: "Radiography update",
      description: "IRMER refresher covering referrals, justification, grading, QA and team responsibilities."
    },
    {
      id: "course-4",
      title: "Safeguarding level 2 for dental practice",
      provider: "Recruitdent Learning",
      category: "Mandatory CPD",
      roles: ["dentist", "nurse", "hygienist", "therapist", "healthcare-assistant"],
      format: "Online",
      duration: "90 minutes",
      cpdHours: 1.5,
      price: 24,
      nextDate: "2026-05-18",
      certificateName: "Safeguarding level 2",
      description: "Recognising concerns, recording, reporting and working safely with children and vulnerable adults."
    },
    {
      id: "course-5",
      title: "NHS performer onboarding and claims confidence",
      provider: "Practice Growth School",
      category: "NHS dentistry",
      roles: ["dentist", "therapist"],
      format: "Workshop",
      duration: "Half day",
      cpdHours: 4,
      price: 95,
      nextDate: "2026-06-12",
      certificateName: "NHS performer onboarding",
      description: "NHS performer list basics, UDA workflows, claim confidence and avoiding common submission errors."
    },
    {
      id: "course-6",
      title: "Patient communication and complaint handling",
      provider: "Dental Leadership Lab",
      category: "Professionalism",
      roles: ["dentist", "nurse", "hygienist", "therapist", "healthcare-assistant"],
      format: "Online",
      duration: "2 hours",
      cpdHours: 2,
      price: 35,
      nextDate: "2026-06-20",
      certificateName: "Patient communication",
      description: "Clear treatment conversations, managing expectations, de-escalation and complaint documentation."
    }
  ],
  courseAssignments: [
    { id: "assign-1", courseId: "course-4", clinicianId: "clin-2", clinicId: "clinic-1", status: "assigned", assignedAt: "2026-05-01", due: "2026-06-20" }
  ],
  newsArticles: [
    {
      id: "news-1",
      title: "Recruitdent launches its clinic-led MVP for UK dentistry",
      category: "Product",
      date: "2026-05-03",
      author: "Recruitdent team",
      summary: "The first build focuses on clinic onboarding, verified professional profiles, shift posting, applications, bookings and admin-led verification.",
      body: "The MVP is designed to prove that clinics will pay to fill shifts while giving dental professionals a portable verified profile."
    },
    {
      id: "news-2",
      title: "Why references and document passports matter for locum cover",
      category: "Compliance",
      date: "2026-05-02",
      author: "Recruitdent verification",
      summary: "Reference requests, uploaded documents and manual checks give clinics confidence before they confirm a booking.",
      body: "The Recruitdent profile keeps references, GDC details, right-to-work evidence and certificates in one place for review."
    },
    {
      id: "news-3",
      title: "Course certificates now feed into the professional profile",
      category: "Learning",
      date: "2026-05-01",
      author: "Recruitdent learning",
      summary: "Clinics can link courses to staff, professionals can complete training, and certificates appear on the profile.",
      body: "The course finder is the first step toward a fuller CPD and professional development marketplace."
    }
  ]
};

let state = loadState();

const app = document.querySelector("#app");
const pageTitle = document.querySelector("#pageTitle");
const personaSelect = document.querySelector("#personaSelect");
const personaHint = document.querySelector("#personaHint");
const toast = document.querySelector("#toast");
const topPrimaryAction = document.querySelector("#topPrimaryAction");

const routes = {
  overview: renderOverview,
  clinic: renderClinic,
  "clinic-profile": renderClinicProfile,
  professional: renderProfessionalPortal,
  "reference-request": renderReferenceRequest,
  clinician: renderClinician,
  marketplace: renderMarketplace,
  rota: renderRota,
  courses: renderCourses,
  news: renderNews,
  admin: renderAdmin,
  reviews: renderReviews
};

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return structuredClone(seedState);
  try {
    return normalizeState(JSON.parse(stored));
  } catch {
    return structuredClone(seedState);
  }
}

function uniqueStrings(values) {
  return [...new Set((values || []).map((item) => String(item || "").trim()).filter(Boolean))];
}

function normalizeState(saved) {
  const base = structuredClone(seedState);
  const next = { ...base, ...saved };
  next.roles = base.roles.map((baseRole) => {
    const savedRole = saved.roles?.find((role) => role.id === baseRole.id);
    return {
      ...baseRole,
      ...(savedRole || {}),
      documents: [...new Set([...(savedRole?.documents || []), ...baseRole.documents])]
    };
  });
  (saved.roles || [])
    .filter((savedRole) => !next.roles.some((role) => role.id === savedRole.id))
    .forEach((savedRole) => next.roles.push(savedRole));
  next.clinic = { ...base.clinic, ...(saved.clinic || {}) };
  next.clinic.documents = saved.clinic?.documents || base.clinic.documents;
  const savedRoleRates = saved.clinic?.roleRates || [];
  next.clinic.roleRates = base.clinic.roleRates.map((baseRate) => ({
    ...baseRate,
    ...(savedRoleRates.find((rate) => rate.roleId === baseRate.roleId) || {})
  }));
  savedRoleRates
    .filter((rate) => !next.clinic.roleRates.some((existing) => existing.roleId === rate.roleId))
    .forEach((rate) => next.clinic.roleRates.push(rate));
  next.clinic.services = saved.clinic?.services || base.clinic.services;
  next.clinic.locations = uniqueStrings([...(base.clinic.locations || []), ...(saved.clinic?.locations || [])]);
  next.clinic.rooms = uniqueStrings([...(base.clinic.rooms || []), ...(saved.clinic?.rooms || [])]);
  next.clinic.invitedStaff = saved.clinic?.invitedStaff || base.clinic.invitedStaff;
  next.clinic.rotaSettings = {
    ...base.clinic.rotaSettings,
    ...(saved.clinic?.rotaSettings || {})
  };
  next.courses = saved.courses || base.courses;
  next.courseAssignments = saved.courseAssignments || base.courseAssignments;
  next.newsArticles = saved.newsArticles || base.newsArticles;
  next.shifts = base.shifts.map((baseShift) => {
    const savedShift = saved.shifts?.find((shift) => shift.id === baseShift.id);
    const merged = { ...baseShift, ...(savedShift || {}) };
    return {
      ...merged,
      region: merged.region || merged.location,
      clinicRating: Number(merged.clinicRating || next.clinic.rating || 4.8),
      breakMinutes: Number(merged.breakMinutes ?? 30),
      rateMode: merged.rateMode || "override",
      overtimeAllowed: merged.overtimeAllowed ?? next.clinic.rotaSettings.allowOvertime,
      overtimeMinutes: Number(merged.overtimeMinutes || 0),
      toilMinutes: Number(merged.toilMinutes || 0)
    };
  });
  (saved.shifts || [])
    .filter((savedShift) => !next.shifts.some((shift) => shift.id === savedShift.id))
    .forEach((savedShift) => next.shifts.push({
      ...savedShift,
      region: savedShift.region || savedShift.location,
      clinicRating: Number(savedShift.clinicRating || next.clinic.rating || 4.8),
      breakMinutes: Number(savedShift.breakMinutes ?? 30),
      rateMode: savedShift.rateMode || "override",
      overtimeAllowed: savedShift.overtimeAllowed ?? next.clinic.rotaSettings.allowOvertime,
      overtimeMinutes: Number(savedShift.overtimeMinutes || 0),
      toilMinutes: Number(savedShift.toilMinutes || 0)
    }));
  next.invoices = saved.invoices || base.invoices;
  next.clinicians = base.clinicians.map((baseClinician, index) => ({
    ...baseClinician,
    ...(saved.clinicians?.[index] || {}),
    documents: saved.clinicians?.[index]?.documents || baseClinician.documents,
    training: saved.clinicians?.[index]?.training || baseClinician.training,
    pdpGoals: saved.clinicians?.[index]?.pdpGoals || baseClinician.pdpGoals,
    references: (saved.clinicians?.[index]?.references || baseClinician.references || []).map((reference) => ({
      status: "sent",
      requestedAt: new Date().toISOString().slice(0, 10),
      response: "",
      uploadName: "",
      ...reference
    }))
  }));
  return next;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function uid() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function selectedAttr(current, option) {
  return current === option ? "selected" : "";
}

function money(amount) {
  const region = state.regions.find((item) => item.id === state.clinic.regionId) || state.regions[0];
  return `${region.symbol || ""}${Number(amount).toLocaleString("en-GB")}`;
}

function currentMonthKey() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
}

function previousMonthKey(key = currentMonthKey()) {
  const [year, month] = key.split("-").map(Number);
  const previous = new Date(year, month - 2, 1);
  return `${previous.getFullYear()}-${String(previous.getMonth() + 1).padStart(2, "0")}`;
}

function monthLabel(key) {
  return new Date(`${key}-01T12:00:00`).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

function monthDays(key) {
  const [year, month] = key.split("-").map(Number);
  const total = new Date(year, month, 0).getDate();
  return Array.from({ length: total }, (_, index) => `${key}-${String(index + 1).padStart(2, "0")}`);
}

function addMonthsToKey(key, delta) {
  const [year, month] = key.split("-").map(Number);
  const next = new Date(year, month - 1 + delta, 1);
  return `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
}

function shiftRegion(shift) {
  return shift.region || shift.location || "Unknown region";
}

function clinicRatingForShift(shift) {
  return Number(shift.clinicRating || state.clinic.rating || 0);
}

function shiftTiming(shift) {
  const day = new Date(`${shift.date}T12:00:00`).getDay();
  if (day === 0 || day === 6) return "weekend";
  const hour = Number(String(shift.start || "09:00").split(":")[0]);
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  return "evening";
}

function timingLabel(value) {
  return {
    morning: "Morning",
    afternoon: "Afternoon",
    evening: "Evening",
    weekend: "Weekend"
  }[value] || "Any time";
}

function staffApplicationForShift(shift, clinician) {
  return state.applications.find((application) => application.shiftId === shift.id && application.clinicianId === clinician.id);
}

function staffCanSeeShift(shift, clinician = state.clinicians[0]) {
  if (shift.draft) return false;
  if (shift.assignedClinicianId === clinician.id) return true;
  if (staffApplicationForShift(shift, clinician)) return true;
  return shift.visibility !== "internal";
}

function staffMonthShifts(clinician, key = currentMonthKey()) {
  return state.shifts
    .filter((shift) => staffCanSeeShift(shift, clinician) && shift.date?.startsWith(key))
    .sort((a, b) => `${a.date} ${a.start}`.localeCompare(`${b.date} ${b.start}`));
}

function staffBookedShifts(clinician, key = currentMonthKey(), statuses = ["assigned", "completed"]) {
  return state.shifts
    .filter((shift) => shift.assignedClinicianId === clinician.id && shift.external && shift.date?.startsWith(key) && statuses.includes(shift.status))
    .sort((a, b) => `${a.date} ${a.start}`.localeCompare(`${b.date} ${b.start}`));
}

function sumShiftRates(shifts) {
  return shifts.reduce((sum, shift) => sum + Number(shift.rate || 0), 0);
}

function clinicianForShift(shift) {
  return state.clinicians.find((clinician) => clinician.id === shift.assignedClinicianId);
}

function effectiveShiftRate(shift) {
  const clinician = clinicianForShift(shift);
  if (shift.rateMode === "staff" && clinician) return Number(clinician.rate || shift.rate || 0);
  return Number(shift.rate || clinician?.rate || 0);
}

function shiftBreakMinutes(shift) {
  return Number(shift.breakMinutes ?? 30);
}

function shiftOvertimeMinutes(shift) {
  if (!(shift.overtimeAllowed ?? state.clinic.rotaSettings?.allowOvertime)) return 0;
  return Number(shift.overtimeMinutes || 0);
}

function shiftToilMinutes(shift) {
  if (!state.clinic.rotaSettings?.toilEnabled) return 0;
  return Number(shift.toilMinutes || 0);
}

function shiftHours(shift) {
  const [startHours, startMinutes] = String(shift.start || "09:00").split(":").map(Number);
  const [endHours, endMinutes] = String(shift.end || "17:00").split(":").map(Number);
  const rawMinutes = Math.max(0, (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes));
  return Math.max(0, (rawMinutes - shiftBreakMinutes(shift)) / 60);
}

function overtimeValue(shift) {
  const minutes = shiftOvertimeMinutes(shift);
  if (!minutes) return 0;
  const hourly = effectiveShiftRate(shift) / Math.max(1, shiftHours(shift) || 8);
  return Math.round(hourly * (minutes / 60) * Number(state.clinic.rotaSettings?.overtimeMultiplier || 1.5));
}

function monthShifts(key) {
  return state.shifts
    .filter((shift) => !shift.draft && shift.date?.startsWith(key))
    .sort((a, b) => `${a.date} ${a.start}`.localeCompare(`${b.date} ${b.start}`));
}

function rotaSiteFilter() {
  return state.clinic.rotaSettings?.site || "all";
}

function rotaShiftsForMonth(key) {
  const site = rotaSiteFilter();
  return monthShifts(key).filter((shift) => site === "all" || shift.location === site);
}

function groupShiftsByLocation(shifts) {
  return uniqueStrings(shifts.map((shift) => shift.location))
    .sort((a, b) => a.localeCompare(b))
    .map((locationName) => [
      locationName,
      shifts
        .filter((shift) => shift.location === locationName)
        .sort((a, b) => {
          const roomDelta = roomOrder(a.room) - roomOrder(b.room);
          if (roomDelta) return roomDelta;
          return `${a.start} ${roleName(a.roleId)}`.localeCompare(`${b.start} ${roleName(b.roleId)}`);
        })
    ]);
}

function roomOrder(roomName) {
  const index = state.clinic.rooms.findIndex((room) => room.toLowerCase() === String(roomName || "").toLowerCase());
  return index === -1 ? 999 : index;
}

function roleRateFor(roleId) {
  return state.clinic.roleRates.find((rate) => rate.roleId === roleId);
}

function defaultRateForRole(roleId, date, start) {
  const rate = roleRateFor(roleId);
  if (!rate) return 0;
  const day = new Date(`${date}T12:00:00`).getDay();
  if ([0, 6].includes(day)) return Number(rate.weekend || rate.weekday || 0);
  if (String(start || "09:00") >= "17:00") return Number(rate.afterHours || rate.weekday || 0);
  return Number(rate.weekday || 0);
}

function roleFromPatternValue(value) {
  const normal = String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  return state.roles.find((role) => role.id === normal || role.name.toLowerCase() === normal)
    || state.roles.find((role) => normal.includes(role.id) || normal.includes(role.name.toLowerCase()))
    || state.roles.find((role) => normal.includes(role.name.toLowerCase().split(" ").at(-1)));
}

function roomFromPatternValue(value, roleId) {
  const normal = String(value || "").replace(/sugery/gi, "surgery").toLowerCase();
  const matchingRoom = state.clinic.rooms.find((room) => normal.includes(room.toLowerCase()));
  if (matchingRoom) return matchingRoom;
  if (roleId === "receptionist") return "Reception desk";
  return state.clinic.rooms[0] || "Surgery 1";
}

function parseSiteDayLine(line) {
  const parts = String(line || "").split("|").map((part) => part.trim()).filter(Boolean);
  const searchText = parts.join(" ") || line;
  const role = roleFromPatternValue(parts[0] || searchText);
  if (!role) return null;
  const room = roomFromPatternValue(parts[1] || searchText, role.id);
  return {
    roleId: role.id,
    room,
    title: parts[2] || `${role.name} - ${room}`
  };
}

function siteCoverageList(shifts) {
  const grouped = groupShiftsByLocation(shifts);
  if (!grouped.length) return `<p class="muted">No shifts for this view.</p>`;
  return `
    <div class="site-summary-list">
      ${grouped.map(([locationName, siteShifts]) => {
        const roles = state.roles
          .map((role) => [role, siteShifts.filter((shift) => shift.roleId === role.id).length])
          .filter(([, count]) => count);
        return `
          <article class="site-summary-card">
            <header><strong>${esc(locationName)}</strong><span class="badge">${siteShifts.length} shifts</span></header>
            <div class="role-legend">${roles.map(([role, count]) => `<span class="role-chip ${rotaRoleClass(role.id)}">${esc(role.name)} ${count}</span>`).join("")}</div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function rotaRoleClass(roleId) {
  const index = Math.max(0, state.roles.findIndex((role) => role.id === roleId));
  return `role-colour-${index % 6}`;
}

function invoiceForShift(shiftId) {
  return state.invoices?.find((invoice) => invoice.shiftId === shiftId);
}

function nextInvoiceNumber() {
  const sequence = String((state.invoices || []).length + 1).padStart(4, "0");
  return `RD-2026-${sequence}`;
}

function roleName(roleId) {
  return state.roles.find((role) => role.id === roleId)?.name || "Unknown role";
}

function clinicianName(clinicianId) {
  return state.clinicians.find((clinician) => clinician.id === clinicianId)?.name || "Unassigned";
}

function currentRoute() {
  const route = location.hash.replace("#", "");
  return routes[route] ? route : "overview";
}

function referenceRequestLink(referenceId) {
  const [baseUrl] = location.href.split("#");
  const url = new URL(baseUrl);
  url.searchParams.set("v", APP_VERSION);
  url.searchParams.set("ref", referenceId);
  return `${url.href}#reference-request`;
}

function referenceRequestEmailLink(clinician, reference) {
  const subject = encodeURIComponent(`Recruitdent reference request for ${clinician.name}`);
  const body = encodeURIComponent([
    `${clinician.name} has requested a professional reference for their Recruitdent profile.`,
    "Please complete the reference form or upload a written reference using this link:",
    referenceRequestLink(reference.id)
  ].join("\n\n"));
  return `mailto:${encodeURIComponent(reference.email)}?subject=${subject}&body=${body}`;
}

function setTitle(title) {
  pageTitle.textContent = title;
  document.querySelectorAll(".nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === currentRoute());
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function statusBadge(status) {
  const className = {
    approved: "success",
    assigned: "success",
    booked: "success",
    completed: "success",
    paid: "success",
    pending: "warning",
    sent: "blue",
    submitted: "success",
    uploaded: "success",
    open: "blue",
    draft: "warning",
    rejected: "danger",
    expired: "danger"
  }[status] || "";
  return `<span class="badge ${className}">${status}</span>`;
}

function icon(id) {
  return `<svg><use href="#${id}"></use></svg>`;
}

function emptyState(title, text) {
  return `
    <div class="empty-state">
      <div class="empty-visual" aria-hidden="true"></div>
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
  `;
}

function render() {
  const route = currentRoute();
  personaSelect.value = state.persona;
  personaHint.textContent = {
    clinic: "Post shifts, review applicants, manage rota and pay booking fees.",
    clinician: "Build a verified profile, upload documents and apply for suitable work.",
    admin: "Review documents, monitor revenue and keep the marketplace trusted."
  }[state.persona];
  configureTopAction(route);
  routes[route]();
}

function configureTopAction(route) {
  const config = route === "reference-request"
    ? { href: "#professional", icon: "icon-key", label: "Professional portal" }
    : route === "courses"
    ? { href: "#courses", icon: "icon-course", label: "Find courses" }
    : route === "news"
    ? { href: "#news", icon: "icon-news", label: "Read news" }
    : route === "professional" || state.persona === "clinician"
    ? { href: "#marketplace", icon: "icon-briefcase", label: "Find shifts" }
    : { href: "#clinic", icon: "icon-plus", label: "Post shift" };
  topPrimaryAction.href = config.href;
  topPrimaryAction.innerHTML = `${icon(config.icon)}<span>${config.label}</span>`;
}

function renderOverview() {
  setTitle("Overview");
  const filled = state.shifts.filter((shift) => shift.status === "assigned").length;
  const externalBookings = state.payments.filter((payment) => payment.type === "booking").length;
  const verifiedClinicians = state.clinicians.filter((clinician) => clinician.verified).length;
  const revenue = state.payments.reduce((sum, payment) => sum + Number(payment.amount), 0);

  app.innerHTML = `
    <section class="hero-panel">
      <div>
        <span class="eyebrow">MVP mission</span>
        <h2>Fill verified dental shifts without chasing documents.</h2>
        <p>Recruitdent connects clinics with verified clinicians, then keeps the operational pieces together: profiles, documents, rota visibility, applications, booking fees, reviews and admin verification.</p>
        <div class="hero-actions">
          <a class="primary-action" href="#clinic">${icon("icon-plus")}<span>Create a shift</span></a>
          <a class="secondary-action" href="#marketplace">${icon("icon-briefcase")}<span>View job board</span></a>
        </div>
      </div>
      <div class="network-visual" role="img" aria-label="Recruitdent verified workforce network illustration"></div>
    </section>

    <section class="metrics-grid" aria-label="MVP success metrics">
      ${metric("Shifts posted", state.shifts.length, "Supply created by clinics")}
      ${metric("Shifts filled", filled, "Core marketplace outcome")}
      ${metric("Verified clinicians", verifiedClinicians, "Trusted workforce")}
      ${metric("Revenue logged", money(revenue), `${externalBookings} external booking fee${externalBookings === 1 ? "" : "s"}`)}
    </section>

    <section class="content-grid">
      <div class="tool-panel">
        <span class="eyebrow">Roadmap focus</span>
        <h2>Build the clinic habit first</h2>
        <div class="timeline">
          ${roadmapItem("MVP", "Profiles, document upload, verification, post shift, apply, book, rota, reviews and booking fee.")}
          ${roadmapItem("Phase 2", "Read and sign policies, expiry alerts, advanced rota, favourites, priority ranking and repeat tools.")}
          ${roadmapItem("Phase 3", "Payroll module, invoice automation, pay rules, exports and dispute tracking.")}
          ${roadmapItem("Phase 4", "CPD, PDP, training marketplace, credentials passport and career records.")}
        </div>
      </div>
      <div class="insight-panel">
        <span class="eyebrow">Expansion-ready defaults</span>
        <h2>Configurable roles and regions</h2>
        <p class="muted">The MVP starts with UK dentistry but stores roles, document requirements, currency and professional registration labels as configurable records.</p>
        <div class="badge-row">
          ${state.roles.map((role) => `<span class="badge">${role.name}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function metric(label, value, note) {
  return `<article class="metric-card"><span>${label}</span><strong>${value}</strong><span>${note}</span></article>`;
}

function roadmapItem(phase, text) {
  return `<div class="timeline-item"><time>${phase}</time><p>${text}</p></div>`;
}

function renderClinic() {
  setTitle("Clinic dashboard");
  const pendingApps = state.applications.filter((application) => application.status === "pending");
  app.innerHTML = `
    <section class="content-grid">
      <form class="form-panel" id="shiftForm">
        <span class="eyebrow">Brightside Dental Studio</span>
        <h2>Post a shift</h2>
        <div class="form-grid">
          <div class="field full"><label for="shiftTitle">Shift title</label><input id="shiftTitle" name="title" required value="New dental shift"></div>
          <div class="field"><label for="shiftRole">Role</label><select id="shiftRole" name="roleId">${state.roles.map((role) => `<option value="${role.id}">${role.name}</option>`).join("")}</select></div>
          <div class="field"><label for="shiftDate">Date</label><input id="shiftDate" name="date" type="date" required value="2026-05-07"></div>
          <div class="field"><label for="shiftStart">Start</label><input id="shiftStart" name="start" type="time" value="09:00"></div>
          <div class="field"><label for="shiftEnd">End</label><input id="shiftEnd" name="end" type="time" value="17:00"></div>
          <div class="field"><label for="shiftLocation">Location</label><select id="shiftLocation" name="location">${state.clinic.locations.map((locationName) => `<option>${locationName}</option>`).join("")}</select></div>
          <div class="field"><label for="shiftRoom">Room</label><select id="shiftRoom" name="room">${state.clinic.rooms.map((room) => `<option>${room}</option>`).join("")}</select></div>
          <div class="field"><label for="shiftRate">Rate</label><input id="shiftRate" name="rate" type="number" min="0" value="250"></div>
          <div class="field"><label for="shiftRateMode">Rate mode</label><select id="shiftRateMode" name="rateMode"><option value="override">Override rate</option><option value="staff">Use staff normal rate</option></select></div>
          <div class="field"><label for="shiftBreak">Break minutes</label><input id="shiftBreak" name="breakMinutes" type="number" min="0" value="30"></div>
          <div class="field"><label for="shiftOvertimeAllowed">Overtime</label><select id="shiftOvertimeAllowed" name="overtimeAllowed"><option value="yes">Allowed</option><option value="no">Not allowed</option></select></div>
          <div class="field"><label for="shiftOvertime">Overtime minutes</label><input id="shiftOvertime" name="overtimeMinutes" type="number" min="0" value="0"></div>
          <div class="field"><label for="shiftToil">TOIL minutes</label><input id="shiftToil" name="toilMinutes" type="number" min="0" value="0"></div>
          <div class="field"><label for="shiftVisibility">Visibility</label><select id="shiftVisibility" name="visibility"><option value="verified">Verified Recruitdent clinicians</option><option value="public">Public job board</option><option value="internal">Internal staff only</option></select></div>
          <div class="field full"><label for="shiftNotes">Notes</label><textarea id="shiftNotes" name="notes">Clinician must be verified before confirmation.</textarea></div>
        </div>
        <div class="action-row">
          <button class="primary-action" type="submit">${icon("icon-plus")}<span>Publish shift</span></button>
          <button class="ghost-action" type="button" id="saveDraft">${icon("icon-copy")}<span>Save draft</span></button>
        </div>
      </form>

      <aside class="insight-panel">
        <span class="eyebrow">Clinic setup</span>
        <h2>${state.clinic.name}</h2>
        <p class="muted">${state.clinic.locations.join(" / ")}. Setup fee ${state.clinic.setupFeePaid ? "paid" : "due"}.</p>
        <div class="badge-row">
          ${statusBadge(state.clinic.setupFeePaid ? "paid" : "pending")}
          <span class="badge">${state.clinic.visibility} profile</span>
          <span class="badge">${state.clinic.rooms.length} rooms</span>
        </div>
        <div class="action-row">
          <button class="secondary-action" type="button" id="inviteStaff">${icon("icon-user")}<span>Invite staff</span></button>
        </div>
      </aside>
    </section>

    <section>
      <div class="toolbar"><div><span class="eyebrow">Applications</span><h2>Approve or reject applicants</h2></div><span class="badge warning">${pendingApps.length} pending</span></div>
      <div class="three-grid">${pendingApps.length ? pendingApps.map(applicationCard).join("") : emptyState("No pending applications", "Clinician applications will appear here for clinic approval.")}</div>
    </section>
  `;

  document.querySelector("#shiftForm").addEventListener("submit", (event) => addShift(event, false));
  document.querySelector("#saveDraft").addEventListener("click", (event) => addShift(event, true));
  document.querySelector("#inviteStaff").addEventListener("click", inviteStaff);
}

function addShift(event, draft) {
  event.preventDefault();
  const form = document.querySelector("#shiftForm");
  const data = Object.fromEntries(new FormData(form).entries());
  state.shifts.unshift({
    id: uid(),
    title: data.title,
    roleId: data.roleId,
    date: data.date,
    start: data.start,
    end: data.end,
    location: data.location,
    region: data.location,
    room: data.room,
    rate: Number(data.rate || 0),
    rateMode: data.rateMode,
    breakMinutes: Number(data.breakMinutes || 0),
    overtimeAllowed: data.overtimeAllowed === "yes",
    overtimeMinutes: Number(data.overtimeMinutes || 0),
    toilMinutes: Number(data.toilMinutes || 0),
    clinicRating: Number(state.clinic.rating || 4.8),
    visibility: data.visibility,
    status: draft ? "draft" : "open",
    notes: data.notes,
    assignedClinicianId: "",
    external: data.visibility !== "internal",
    draft
  });
  saveState();
  showToast(draft ? "Draft rota shift saved." : "Shift published to the selected audience.");
  render();
}

function inviteStaff() {
  const next = `team.member${state.clinic.invitedStaff.length + 1}@clinic.example`;
  addInvitation(next);
  saveState();
  showToast(`Invitation queued for ${next}.`);
  render();
}

function addInvitation(email) {
  const normalised = String(email || "").trim().toLowerCase();
  if (!normalised) return false;
  if (!state.clinic.invitedStaff.includes(normalised)) {
    state.clinic.invitedStaff.push(normalised);
  }
  return true;
}

function clinicProfileCompletion() {
  const clinic = state.clinic;
  const checks = [
    clinic.name,
    clinic.tagline,
    clinic.about,
    clinic.email,
    clinic.phone,
    clinic.address,
    clinic.services?.length,
    clinic.locations?.length,
    clinic.rooms?.length,
    clinic.documents?.length,
    clinic.roleRates?.length
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

function renderClinicProfile() {
  setTitle("Clinic profile");
  const clinic = state.clinic;
  const region = state.regions.find((item) => item.id === clinic.regionId) || state.regions[0];
  const sharedDocs = clinic.documents.filter((document) => document.status === "shared").length;

  app.innerHTML = `
    <section class="profile-hero">
      <div class="profile-hero-main">
        <div class="clinic-avatar" aria-hidden="true">${clinic.name.split(" ").map((word) => word[0]).join("").slice(0, 2).toUpperCase()}</div>
        <div>
          <span class="eyebrow">Company profile</span>
          <h2>${esc(clinic.name)}</h2>
          <p>${esc(clinic.tagline)}</p>
        </div>
        <div class="badge-row">
          <span class="badge ${clinic.visibility === "public" ? "success" : "warning"}">${esc(clinic.visibility)} profile</span>
          <span class="badge">${esc(region.name)}</span>
          <span class="badge">${clinic.setupFeePaid ? "setup paid" : "setup due"}</span>
        </div>
        <div class="profile-hero-meta">
          <div><span>Sites</span><strong>${clinic.locations.length}</strong></div>
          <div><span>Rooms</span><strong>${clinic.rooms.length}</strong></div>
          <div><span>Shared docs</span><strong>${sharedDocs}</strong></div>
        </div>
      </div>
      <aside class="profile-preview" aria-label="Public clinic preview">
        <div class="preview-window">
          <div class="preview-bar"><span></span><span></span><span></span></div>
          <span class="eyebrow">Clinician preview</span>
          <h3>${esc(clinic.name)}</h3>
          <p>${esc(clinic.about)}</p>
          <dl class="detail-list">
            <div><dt>Contact</dt><dd>${esc(clinic.email)}<br>${esc(clinic.phone)}</dd></div>
            <div><dt>Address</dt><dd>${esc(clinic.address)}</dd></div>
          </dl>
        </div>
      </aside>
    </section>

    <section class="metrics-grid" aria-label="Clinic profile status">
      ${metric("Profile", `${clinicProfileCompletion()}%`, "Ready for launch")}
      ${metric("Company docs", clinic.documents.length, `${sharedDocs} shared with staff`)}
      ${metric("Staff invited", clinic.invitedStaff.length, "Workspace access")}
      ${metric("Default rates", clinic.roleRates.length, "Role templates")}
    </section>

    <section class="content-grid">
      <form class="form-panel" id="clinicProfileForm">
        <span class="eyebrow">Profile settings</span>
        <h2>Public and private details</h2>
        <div class="form-grid">
          <div class="field"><label for="clinicName">Clinic name</label><input id="clinicName" name="name" required value="${esc(clinic.name)}"></div>
          <div class="field"><label for="clinicVisibility">Visibility</label><select id="clinicVisibility" name="visibility"><option value="public" ${selectedAttr(clinic.visibility, "public")}>Public profile</option><option value="private" ${selectedAttr(clinic.visibility, "private")}>Private profile</option></select></div>
          <div class="field"><label for="clinicRegion">Region</label><select id="clinicRegion" name="regionId">${state.regions.map((item) => `<option value="${esc(item.id)}" ${selectedAttr(clinic.regionId, item.id)}>${esc(item.name)} - ${esc(item.currency)}</option>`).join("")}</select></div>
          <div class="field"><label for="clinicWebsite">Website</label><input id="clinicWebsite" name="website" value="${esc(clinic.website)}"></div>
          <div class="field"><label for="clinicEmail">Email</label><input id="clinicEmail" name="email" type="email" value="${esc(clinic.email)}"></div>
          <div class="field"><label for="clinicPhone">Phone</label><input id="clinicPhone" name="phone" value="${esc(clinic.phone)}"></div>
          <div class="field full"><label for="clinicTagline">Short profile line</label><input id="clinicTagline" name="tagline" value="${esc(clinic.tagline)}"></div>
          <div class="field full"><label for="clinicAddress">Address</label><input id="clinicAddress" name="address" value="${esc(clinic.address)}"></div>
          <div class="field full"><label for="clinicServices">Services</label><input id="clinicServices" name="services" value="${esc(clinic.services.join(", "))}"></div>
          <div class="field full"><label for="clinicAbout">About the clinic</label><textarea id="clinicAbout" name="about">${esc(clinic.about)}</textarea></div>
        </div>
        <div class="action-row"><button class="primary-action" type="submit">${icon("icon-check")}<span>Save profile</span></button></div>
      </form>

      <aside class="insight-panel">
        <span class="eyebrow">Services</span>
        <h2>What clinicians see</h2>
        <div class="badge-row">${clinic.services.map((service) => `<span class="badge">${esc(service)}</span>`).join("")}</div>
        <dl class="detail-list">
          <div><dt>Locations</dt><dd>${clinic.locations.map(esc).join("<br>")}</dd></div>
          <div><dt>Rooms</dt><dd>${clinic.rooms.map(esc).join("<br>")}</dd></div>
        </dl>
      </aside>
    </section>

    <section class="three-grid">
      <form class="form-panel" id="locationForm">
        <span class="eyebrow">Sites</span>
        <h2>Locations</h2>
        <div class="mini-list">${clinic.locations.map((locationName) => `<span>${esc(locationName)}</span>`).join("")}</div>
        <div class="field"><label for="newLocations">Add multiple locations</label><textarea id="newLocations" name="locations" placeholder="One location per line">Bolton Dental Hub
Stockport Dental Studio</textarea></div>
        <div class="action-row"><button class="secondary-action" type="submit">${icon("icon-plus")}<span>Add locations</span></button></div>
      </form>

      <form class="form-panel" id="roomForm">
        <span class="eyebrow">Rota setup</span>
        <h2>Surgeries and rooms</h2>
        <div class="mini-list">${clinic.rooms.map((room) => `<span>${esc(room)}</span>`).join("")}</div>
        <div class="field"><label for="newRoom">Add room</label><input id="newRoom" name="room" placeholder="Surgery or room"></div>
        <div class="action-row"><button class="secondary-action" type="submit">${icon("icon-plus")}<span>Add room</span></button></div>
      </form>

      <form class="form-panel" id="staffInviteForm">
        <span class="eyebrow">Workspace</span>
        <h2>Invite staff</h2>
        <div class="mini-list">${clinic.invitedStaff.map((email) => `<span>${esc(email)}</span>`).join("")}</div>
        <div class="field"><label for="staffEmail">Staff email</label><input id="staffEmail" name="email" type="email" placeholder="name@clinic.co.uk"></div>
        <div class="action-row"><button class="secondary-action" type="submit">${icon("icon-user")}<span>Invite</span></button></div>
      </form>
    </section>

    <section class="content-grid">
      <div>
        <div class="toolbar"><div><span class="eyebrow">Company documents</span><h2>Policies, handbook and contracts</h2></div><span class="badge">${sharedDocs} shared</span></div>
        <div class="document-list">${clinic.documents.map(clinicDocumentCard).join("")}</div>
      </div>
      <form class="form-panel" id="companyDocumentForm">
        <span class="eyebrow">Upload company document</span>
        <h2>Add document</h2>
        <div class="form-grid">
          <div class="field"><label for="companyDocName">Document name</label><input id="companyDocName" name="name" required value="Associate agreement"></div>
          <div class="field"><label for="companyDocType">Type</label><select id="companyDocType" name="type"><option>Policy</option><option>Handbook</option><option>Contract</option><option>Procedure</option></select></div>
          <div class="field full checkbox-field"><label><input name="acceptanceRequired" type="checkbox" checked> Staff must accept this document</label></div>
        </div>
        <div class="action-row"><button class="primary-action" type="submit">${icon("icon-plus")}<span>Add document</span></button></div>
      </form>
    </section>

    <section>
      <div class="toolbar"><div><span class="eyebrow">Rate templates</span><h2>Default rates by role</h2></div><span class="badge">${esc(region.currency)}</span></div>
      <div class="rate-grid">${clinic.roleRates.map(rateCard).join("")}</div>
      <form class="form-panel compact-form" id="rateForm">
        <div class="form-grid">
          <div class="field"><label for="rateRole">Role</label><select id="rateRole" name="roleId">${state.roles.map((role) => `<option value="${esc(role.id)}">${esc(role.name)}</option>`).join("")}</select></div>
          <div class="field"><label for="weekdayRate">Weekday</label><input id="weekdayRate" name="weekday" type="number" min="0" value="250"></div>
          <div class="field"><label for="afterHoursRate">After hours</label><input id="afterHoursRate" name="afterHours" type="number" min="0" value="300"></div>
          <div class="field"><label for="weekendRate">Weekend</label><input id="weekendRate" name="weekend" type="number" min="0" value="350"></div>
        </div>
        <div class="action-row"><button class="secondary-action" type="submit">${icon("icon-pound")}<span>Save rate</span></button></div>
      </form>
    </section>
  `;

  document.querySelector("#clinicProfileForm").addEventListener("submit", saveClinicProfile);
  document.querySelector("#locationForm").addEventListener("submit", addClinicLocation);
  document.querySelector("#roomForm").addEventListener("submit", addClinicRoom);
  document.querySelector("#staffInviteForm").addEventListener("submit", inviteClinicStaff);
  document.querySelector("#companyDocumentForm").addEventListener("submit", addClinicDocument);
  document.querySelector("#rateForm").addEventListener("submit", saveRoleRate);
}

function clinicDocumentCard(document) {
  return `
    <article class="document-card">
      <header>
        <div><h3>${esc(document.name)}</h3><span class="muted">${esc(document.type)}</span></div>
        ${statusBadge(document.status)}
      </header>
      <p>${document.acceptanceRequired ? "Staff acceptance required." : "Available for staff reference."} ${Number(document.acceptedBy || 0)} acceptance${Number(document.acceptedBy || 0) === 1 ? "" : "s"} recorded.</p>
    </article>
  `;
}

function rateCard(rate) {
  return `
    <article class="item-card rate-card">
      <header><h3>${esc(roleName(rate.roleId))}</h3><span class="badge">${money(rate.weekday)}</span></header>
      <dl class="detail-list">
        <div><dt>Weekday</dt><dd>${money(rate.weekday)}</dd></div>
        <div><dt>After hours</dt><dd>${money(rate.afterHours)}</dd></div>
        <div><dt>Weekend</dt><dd>${money(rate.weekend)}</dd></div>
      </dl>
    </article>
  `;
}

function saveClinicProfile(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  state.clinic = {
    ...state.clinic,
    name: data.name,
    visibility: data.visibility,
    regionId: data.regionId,
    website: data.website,
    email: data.email,
    phone: data.phone,
    tagline: data.tagline,
    address: data.address,
    about: data.about,
    services: data.services.split(",").map((item) => item.trim()).filter(Boolean)
  };
  saveState();
  showToast("Clinic profile saved.");
  render();
}

function addClinicLocation(event) {
  event.preventDefault();
  const rawLocations = new FormData(event.currentTarget).get("locations");
  const locations = String(rawLocations || "")
    .split(/\n|,|;/)
    .map((locationName) => locationName.trim())
    .filter(Boolean);
  if (!locations.length) return;
  locations.forEach((locationName) => {
    if (!state.clinic.locations.includes(locationName)) {
      state.clinic.locations.push(locationName);
    }
  });
  saveState();
  showToast(`${locations.length} location${locations.length === 1 ? "" : "s"} added to the clinic profile.`);
  render();
}

function addClinicRoom(event) {
  event.preventDefault();
  const room = new FormData(event.currentTarget).get("room").trim();
  if (!room) return;
  if (!state.clinic.rooms.includes(room)) {
    state.clinic.rooms.push(room);
  }
  saveState();
  showToast("Room added to rota setup.");
  render();
}

function inviteClinicStaff(event) {
  event.preventDefault();
  const email = new FormData(event.currentTarget).get("email");
  if (!addInvitation(email)) return;
  saveState();
  showToast("Staff invitation queued.");
  render();
}

function addClinicDocument(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  state.clinic.documents.unshift({
    id: uid(),
    name: data.name,
    type: data.type,
    status: data.type === "Contract" ? "draft" : "shared",
    acceptanceRequired: data.acceptanceRequired === "on",
    acceptedBy: 0
  });
  saveState();
  showToast("Company document added.");
  render();
}

function saveRoleRate(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const existing = state.clinic.roleRates.find((rate) => rate.roleId === data.roleId);
  const nextRate = {
    id: existing?.id || uid(),
    roleId: data.roleId,
    weekday: Number(data.weekday || 0),
    afterHours: Number(data.afterHours || 0),
    weekend: Number(data.weekend || 0)
  };
  if (existing) {
    Object.assign(existing, nextRate);
  } else {
    state.clinic.roleRates.push(nextRate);
  }
  saveState();
  showToast("Default role rate saved.");
  render();
}

function applicationCard(application) {
  const shift = state.shifts.find((item) => item.id === application.shiftId);
  const clinician = state.clinicians.find((item) => item.id === application.clinicianId);
  if (!shift || !clinician) return "";
  return `
    <article class="item-card">
      <header>
        <div><h3>${clinician.name}</h3><span class="muted">${roleName(clinician.roleId)} for ${shift.title}</span></div>
        ${statusBadge(application.status)}
      </header>
      <p>${application.message}</p>
      <div class="badge-row">
        <span class="badge ${clinician.verified ? "success" : "warning"}">${clinician.verified ? "verified" : "not verified"}</span>
        <span class="badge">${money(clinician.rate)} day rate</span>
        <span class="badge">${clinician.documents.filter((doc) => doc.status === "approved").length} docs approved</span>
      </div>
      <div class="action-row">
        <button class="secondary-action" type="button" data-action="approve-app" data-id="${application.id}">${icon("icon-check")}<span>Approve</span></button>
        <button class="ghost-action" type="button" data-action="reject-app" data-id="${application.id}">${icon("icon-x")}<span>Reject</span></button>
      </div>
    </article>
  `;
}

function renderClinician() {
  setTitle("Clinician profile");
  const clinician = state.clinicians[0];
  const requiredDocs = state.roles.find((role) => role.id === clinician.roleId)?.documents || [];
  app.innerHTML = `
    <section class="content-grid">
      <div class="tool-panel">
        <span class="eyebrow">Verified passport</span>
        <h2>${clinician.name}</h2>
        <p class="muted">${roleName(clinician.roleId)} based in ${clinician.location}. Travels ${clinician.radius} miles. Available ${clinician.availability}.</p>
        <div class="metrics-grid">
          ${metric("Day rate", money(clinician.rate), "Clinic can auto-populate this")}
          ${metric("Rating", clinician.rating, "From completed bookings")}
          ${metric("Documents", clinician.documents.length, "Uploaded to profile")}
          ${metric("Status", clinician.verified ? "Verified" : "Pending", "Manual admin review")}
        </div>
      </div>
      <form class="form-panel" id="documentForm">
        <span class="eyebrow">Upload document</span>
        <h2>Add credential</h2>
        <div class="form-grid">
          <div class="field"><label for="docName">Document</label><select id="docName" name="name">${requiredDocs.map((doc) => `<option>${doc}</option>`).join("")}<option>Certificate</option><option>CV</option></select></div>
          <div class="field"><label for="docExpiry">Expiry</label><input id="docExpiry" name="expiry" type="date" value="2027-04-29"></div>
        </div>
        <div class="action-row"><button class="primary-action" type="submit">${icon("icon-plus")}<span>Upload for review</span></button></div>
      </form>
    </section>

    <section>
      <div class="toolbar"><div><span class="eyebrow">Credentials</span><h2>Document status</h2></div><span class="badge">${roleName(clinician.roleId)}</span></div>
      <div class="three-grid">${clinician.documents.map(documentCard).join("")}</div>
    </section>
  `;
  document.querySelector("#documentForm").addEventListener("submit", uploadDocument);
}

function uploadDocument(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  state.clinicians[0].documents.push({
    id: uid(),
    name: data.name,
    status: "pending",
    expiry: data.expiry
  });
  state.clinicians[0].verified = false;
  saveState();
  showToast("Document uploaded for admin verification.");
  render();
}

function documentCard(document) {
  return `
    <article class="document-card">
      <header><h3>${document.name}</h3>${statusBadge(document.status)}</header>
      <p>Expiry: ${document.expiry || "Not supplied"}</p>
    </article>
  `;
}

function professionalCompletion(clinician) {
  const requiredDocs = state.roles.find((role) => role.id === clinician.roleId)?.documents || [];
  const checks = [
    clinician.name,
    clinician.email,
    clinician.phone,
    clinician.headline,
    clinician.bio,
    clinician.registration,
    clinician.location,
    clinician.radius,
    clinician.rate,
    clinician.availability,
    requiredDocs.every((required) => clinician.documents.some((document) => document.name === required && document.status === "approved")),
    clinician.references?.length >= PROFESSIONAL_REFERENCES_REQUIRED,
    clinician.pdpGoals?.length,
    clinician.training?.length
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

function staffCalendarMarkup(clinician, key = currentMonthKey()) {
  const shifts = staffMonthShifts(clinician, key);
  const shiftsByDay = shifts.reduce((map, shift) => {
    map[shift.date] = [...(map[shift.date] || []), shift];
    return map;
  }, {});
  const firstDay = new Date(`${key}-01T12:00:00`).getDay();
  const leadingBlanks = (firstDay + 6) % 7;
  const cells = [
    ...Array.from({ length: leadingBlanks }, () => `<div class="staff-calendar-day blank-day" aria-hidden="true"></div>`),
    ...monthDays(key).map((date) => {
      const dayShifts = shiftsByDay[date] || [];
      return `
        <article class="staff-calendar-day">
          <strong>${Number(date.slice(-2))}</strong>
          <div class="calendar-shift-list">
            ${dayShifts.map((shift) => calendarShiftPill(shift, clinician)).join("") || `<span class="muted small-text">No shifts</span>`}
          </div>
        </article>
      `;
    })
  ];
  return `
    <div class="calendar-weekdays">${["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => `<span>${day}</span>`).join("")}</div>
    <div class="staff-calendar-grid">${cells.join("")}</div>
  `;
}

function calendarShiftPill(shift, clinician) {
  const application = staffApplicationForShift(shift, clinician);
  const stateLabel = shift.assignedClinicianId === clinician.id
    ? shift.status
    : application
    ? application.status
    : "available";
  return `
    <div class="calendar-shift-pill ${stateLabel}">
      <span>${esc(shift.start)} ${esc(roleName(shift.roleId))}</span>
      <strong>${money(shift.rate)}</strong>
    </div>
  `;
}

function staffInvoiceCard(shift) {
  const invoice = invoiceForShift(shift.id);
  return `
    <article class="invoice-row">
      <div>
        <h3>${esc(shift.title)}</h3>
        <p class="muted">${esc(shift.date)}, ${esc(shift.start)}-${esc(shift.end)} at ${esc(shift.location)}</p>
      </div>
      <div class="invoice-row-side">
        <strong>${money(shift.rate)}</strong>
        ${invoice ? `<span class="badge ${invoice.status === "sent" ? "blue" : "warning"}">${esc(invoice.number)} ${esc(invoice.status)}</span>` : `<button class="secondary-action" type="button" data-action="create-invoice" data-id="${shift.id}">${icon("icon-document")}<span>Create invoice</span></button>`}
      </div>
    </article>
  `;
}

function renderProfessionalPortal() {
  setTitle("Professional login");
  if (state.persona !== "clinician") {
    state.persona = "clinician";
    personaSelect.value = "clinician";
    personaHint.textContent = "Build a verified profile, upload documents and apply for suitable work.";
    saveState();
  }

  const clinician = state.clinicians[0];
  const role = state.roles.find((item) => item.id === clinician.roleId) || state.roles[0];
  const requiredDocs = role.documents || [];
  const approvedDocs = clinician.documents.filter((document) => document.status === "approved").length;
  const pendingDocs = clinician.documents.filter((document) => document.status === "pending").length;
  const applications = state.applications.filter((application) => application.clinicianId === clinician.id);
  const upcoming = state.shifts.filter((shift) => shift.assignedClinicianId === clinician.id);
  const visibleShifts = state.shifts.filter((shift) => !shift.draft && shift.visibility !== "internal" && shift.roleId === clinician.roleId && shift.status === "open");
  const staffMonth = currentMonthKey();
  const previousMonth = previousMonthKey(staffMonth);
  const expectedShifts = staffBookedShifts(clinician, staffMonth, ["assigned"]);
  const previousShifts = staffBookedShifts(clinician, previousMonth, ["assigned", "completed"]);
  const locumShifts = state.shifts.filter((shift) => shift.assignedClinicianId === clinician.id && shift.external && ["assigned", "completed"].includes(shift.status));
  const uninvoicedLocum = locumShifts.filter((shift) => !invoiceForShift(shift.id));

  app.innerHTML = `
    <section class="professional-hero">
      <div class="profile-hero-main">
        <div class="clinic-avatar professional-avatar" aria-hidden="true">${clinician.name.split(" ").map((word) => word[0]).join("").slice(0, 2).toUpperCase()}</div>
        <div>
          <span class="eyebrow">Professional login</span>
          <h2>${esc(clinician.name)}</h2>
          <p>${esc(clinician.headline)}</p>
        </div>
        <div class="badge-row">
          <span class="badge ${clinician.verified ? "success" : "warning"}">${clinician.verified ? "verified" : "verification pending"}</span>
          <span class="badge">${esc(roleName(clinician.roleId))}</span>
          <span class="badge blue">${esc(clinician.profileVisibility)}</span>
        </div>
        <div class="profile-hero-meta">
          <div><span>Profile</span><strong>${professionalCompletion(clinician)}%</strong></div>
          <div><span>CPD hours</span><strong>${clinician.cpdHours}</strong></div>
          <div><span>Applications</span><strong>${applications.length}</strong></div>
        </div>
      </div>

      <form class="login-card" id="professionalLoginForm">
        <div class="preview-bar"><span></span><span></span><span></span></div>
        <span class="eyebrow">Sign in or create profile</span>
        <h3>Professional account</h3>
        <div class="form-grid single-form">
          <div class="field"><label for="proName">Full name</label><input id="proName" name="name" required value="${esc(clinician.name)}"></div>
          <div class="field"><label for="proEmail">Email</label><input id="proEmail" name="email" type="email" required value="${esc(clinician.email)}"></div>
          <div class="field"><label for="proPhone">Phone</label><input id="proPhone" name="phone" value="${esc(clinician.phone)}"></div>
          <div class="field"><label for="proRole">Role</label><select id="proRole" name="roleId">${state.roles.map((item) => `<option value="${esc(item.id)}" ${selectedAttr(clinician.roleId, item.id)}>${esc(item.name)}</option>`).join("")}</select></div>
          <div class="field"><label for="proRegistration">${esc(state.regions[0].registration)}</label><input id="proRegistration" name="registration" value="${esc(clinician.registration)}"></div>
          <div class="field"><label for="proVisibility">Profile visibility</label><select id="proVisibility" name="profileVisibility"><option ${selectedAttr(clinician.profileVisibility, "visible to verified clinics")}>visible to verified clinics</option><option ${selectedAttr(clinician.profileVisibility, "private until applying")}>private until applying</option><option ${selectedAttr(clinician.profileVisibility, "public job board visible")}>public job board visible</option></select></div>
        </div>
        <div class="action-row"><button class="primary-action" type="submit">${icon("icon-key")}<span>Enter professional portal</span></button></div>
      </form>
    </section>

    <section class="metrics-grid" aria-label="Professional account status">
      ${metric("Passport", `${approvedDocs}/${requiredDocs.length}`, `${pendingDocs} pending review`)}
      ${metric("Day rate", money(clinician.rate), "Default clinic quote")}
      ${metric("References", `${clinician.references.length}`, `${PROFESSIONAL_REFERENCES_REQUIRED} minimum required`)}
      ${metric("Rating", clinician.rating, "From clinic reviews")}
    </section>

    <section class="metrics-grid" aria-label="Staff earnings">
      ${metric("Expected", money(sumShiftRates(expectedShifts)), `${monthLabel(staffMonth)} booked locum shifts`)}
      ${metric("Previous month", money(sumShiftRates(previousShifts)), `${monthLabel(previousMonth)} earnings`)}
      ${metric("Locum shifts", locumShifts.length, `${uninvoicedLocum.length} ready to invoice`)}
      ${metric("Invoices", state.invoices.filter((invoice) => invoice.clinicianId === clinician.id).length, "Draft and sent invoices")}
    </section>

    <section class="content-grid staff-workspace">
      <div>
        <div class="toolbar"><div><span class="eyebrow">Staff calendar</span><h2>${monthLabel(staffMonth)}</h2></div><span class="badge">${staffMonthShifts(clinician, staffMonth).length} shifts</span></div>
        <div class="staff-calendar">${staffCalendarMarkup(clinician, staffMonth)}</div>
      </div>
      <aside class="insight-panel invoice-panel">
        <span class="eyebrow">Locum invoicing</span>
        <h2>Invoice clinics</h2>
        <p class="muted">Create a draft invoice from any booked or completed external locum shift.</p>
        <div class="invoice-list">${locumShifts.length ? locumShifts.map(staffInvoiceCard).join("") : emptyState("No locum shifts", "Booked external locum shifts will appear here for invoicing.")}</div>
      </aside>
    </section>

    <section class="content-grid">
      <form class="form-panel" id="professionalProfileForm">
        <span class="eyebrow">Professional profile</span>
        <h2>Profile, rates and availability</h2>
        <div class="form-grid">
          <div class="field full"><label for="proHeadline">Headline</label><input id="proHeadline" name="headline" value="${esc(clinician.headline)}"></div>
          <div class="field"><label for="proLocation">Base location</label><input id="proLocation" name="location" value="${esc(clinician.location)}"></div>
          <div class="field"><label for="proRadius">Travel radius</label><input id="proRadius" name="radius" type="number" min="0" value="${esc(clinician.radius)}"></div>
          <div class="field"><label for="proRate">Day rate</label><input id="proRate" name="rate" type="number" min="0" value="${esc(clinician.rate)}"></div>
          <div class="field full"><label for="proAvailability">Availability</label><input id="proAvailability" name="availability" value="${esc(clinician.availability)}"></div>
          <div class="field full"><label for="proBio">Profile bio</label><textarea id="proBio" name="bio">${esc(clinician.bio)}</textarea></div>
        </div>
        <div class="action-row"><button class="primary-action" type="submit">${icon("icon-check")}<span>Save professional profile</span></button></div>
      </form>

      <aside class="insight-panel passport-panel">
        <span class="eyebrow">Credential passport</span>
        <h2>Required documents</h2>
        <div class="document-list compact-documents">${requiredDocs.map((name) => professionalRequirementCard(clinician, name)).join("")}</div>
      </aside>
    </section>

    <section class="content-grid">
      <div>
        <div class="toolbar"><div><span class="eyebrow">References</span><h2>Professional references</h2></div><span class="badge">${clinician.references.length} added / ${PROFESSIONAL_REFERENCES_REQUIRED} minimum</span></div>
        <div class="reference-grid">${referenceSlots(clinician).join("")}</div>
      </div>
      <form class="form-panel" id="referenceForm">
        <span class="eyebrow">Request reference</span>
        <h2>Send referee form</h2>
        <div class="form-grid">
          <div class="field"><label for="referenceName">Referee name</label><input id="referenceName" name="name" required value="Practice manager"></div>
          <div class="field"><label for="referenceClinic">Clinic/company</label><input id="referenceClinic" name="clinic" required value="Northside Dental Care"></div>
          <div class="field"><label for="referenceEmail">Email</label><input id="referenceEmail" name="email" type="email" required value="manager@northside.example"></div>
          <div class="field"><label for="referencePhone">Phone</label><input id="referencePhone" name="phone" value="0161 000 0199"></div>
          <div class="field full"><label for="referenceRelation">Relationship</label><input id="referenceRelation" name="relationship" value="Clinical lead / previous practice manager"></div>
        </div>
        <div class="action-row"><button class="primary-action" type="submit">${icon("icon-plus")}<span>Create request</span></button></div>
        <p class="muted">Requests generate an email-ready link that the referee can use to complete a form or record an uploaded reference.</p>
      </form>
    </section>

    <section class="content-grid">
      <div>
        <div class="toolbar"><div><span class="eyebrow">Applications and bookings</span><h2>Work pipeline</h2></div><span class="badge">${visibleShifts.length} matching open shifts</span></div>
        <div class="three-grid pipeline-grid">
          ${applications.length ? applications.map(professionalApplicationCard).join("") : emptyState("No applications yet", "Apply for a public or verified shift to start your pipeline.")}
          ${upcoming.map((shift) => professionalBookingCard(shift)).join("")}
        </div>
      </div>
      <form class="form-panel" id="documentForm">
        <span class="eyebrow">Upload document</span>
        <h2>Add credential</h2>
        <div class="form-grid">
          <div class="field"><label for="docName">Document</label><select id="docName" name="name">${requiredDocs.map((doc) => `<option>${esc(doc)}</option>`).join("")}<option>Certificate</option><option>CV</option></select></div>
          <div class="field"><label for="docExpiry">Expiry</label><input id="docExpiry" name="expiry" type="date" value="2027-05-03"></div>
        </div>
        <div class="action-row"><button class="primary-action" type="submit">${icon("icon-plus")}<span>Upload for review</span></button></div>
      </form>
    </section>

    <section class="two-grid">
      <form class="form-panel" id="trainingForm">
        <span class="eyebrow">CPD and training</span>
        <h2>Training record</h2>
        <div class="timeline">${clinician.training.map(trainingItem).join("")}</div>
        <div class="form-grid compact-form">
          <div class="field"><label for="trainingName">Course</label><input id="trainingName" name="name" value="Infection control update"></div>
          <div class="field"><label for="trainingDue">Due date</label><input id="trainingDue" name="due" type="date" value="2026-08-01"></div>
        </div>
        <div class="action-row"><button class="secondary-action" type="submit">${icon("icon-plus")}<span>Add CPD</span></button></div>
      </form>

      <form class="form-panel" id="pdpForm">
        <span class="eyebrow">PDP</span>
        <h2>Development plan</h2>
        <div class="mini-list">${clinician.pdpGoals.map((goal) => `<span>${esc(goal)}</span>`).join("")}</div>
        <div class="field"><label for="pdpGoal">Add PDP goal</label><input id="pdpGoal" name="goal" value="Complete communication skills reflection"></div>
        <div class="action-row"><button class="secondary-action" type="submit">${icon("icon-plus")}<span>Add goal</span></button></div>
      </form>
    </section>

    <section>
      <div class="toolbar"><div><span class="eyebrow">Course certificates</span><h2>Certificates in profile</h2></div><a class="secondary-action" href="#courses">${icon("icon-course")}<span>Find courses</span></a></div>
      <div class="three-grid">${courseCertificatesFor(clinician).map(documentCard).join("") || emptyState("No course certificates yet", "Completed courses will add approved certificates to this profile.")}</div>
    </section>

    <section>
      <div class="toolbar"><div><span class="eyebrow">Reputation</span><h2>Professional reviews</h2></div><span class="badge success">${clinician.rating}/5</span></div>
      <div class="three-grid">${state.reviews.filter((review) => review.to === clinician.name).map(reviewCard).join("") || emptyState("No reviews yet", "Completed shifts will generate clinic reviews.")}</div>
    </section>
  `;

  document.querySelector("#professionalLoginForm").addEventListener("submit", saveProfessionalLogin);
  document.querySelector("#professionalProfileForm").addEventListener("submit", saveProfessionalProfile);
  document.querySelector("#documentForm").addEventListener("submit", uploadDocument);
  document.querySelector("#referenceForm").addEventListener("submit", addProfessionalReference);
  document.querySelector("#trainingForm").addEventListener("submit", addProfessionalTraining);
  document.querySelector("#pdpForm").addEventListener("submit", addPdpGoal);
}

function referenceSlots(clinician) {
  const references = [...clinician.references];
  while (references.length < PROFESSIONAL_REFERENCES_REQUIRED) {
    references.push(null);
  }
  return references.map((reference, index) => {
    if (!reference) {
      return `
        <article class="item-card reference-card empty-reference">
          <header><div><h3>Reference ${index + 1}</h3><span class="muted">Awaiting referee details</span></div><span class="badge warning">missing</span></header>
          <p>Add a practice manager, clinical lead or employer who can verify work history and conduct.</p>
        </article>
      `;
    }
    const requestLink = referenceRequestLink(reference.id);
    return `
      <article class="item-card reference-card">
        <header><div><h3>${esc(reference.name)}</h3><span class="muted">${esc(reference.clinic)}</span></div>${statusBadge(reference.status)}</header>
        <p>${esc(reference.relationship)}<br>${esc(reference.email)}${reference.phone ? `<br>${esc(reference.phone)}` : ""}</p>
        ${reference.response ? `<p><strong>Referee response:</strong> ${esc(reference.response)}</p>` : ""}
        ${reference.uploadName ? `<p><strong>Uploaded file:</strong> ${esc(reference.uploadName)}</p>` : ""}
        <div class="reference-link">
          <span>${esc(requestLink)}</span>
        </div>
        <div class="action-row">
          <a class="primary-action" href="${esc(referenceRequestEmailLink(clinician, reference))}">${icon("icon-message")}<span>Email request</span></a>
          <a class="secondary-action" href="${esc(requestLink)}">${icon("icon-document")}<span>Open form</span></a>
          <button class="ghost-action" type="button" data-action="copy-reference-link" data-id="${reference.id}">${icon("icon-copy")}<span>Copy link</span></button>
          <button class="ghost-action" type="button" data-action="mark-reference-sent" data-id="${reference.id}">${icon("icon-check")}<span>Mark sent</span></button>
        </div>
      </article>
    `;
  });
}

function findReferenceById(referenceId) {
  for (const clinician of state.clinicians) {
    const reference = clinician.references.find((item) => item.id === referenceId);
    if (reference) return { clinician, reference };
  }
  return { clinician: state.clinicians[0], reference: null };
}

function renderReferenceRequest() {
  setTitle("Reference form");
  const referenceId = new URLSearchParams(location.search).get("ref");
  const { clinician, reference } = findReferenceById(referenceId);

  if (!reference) {
    app.innerHTML = `
      <section class="professional-hero reference-request-hero">
        <div>
          <span class="eyebrow">Reference request</span>
          <h2>Request not found</h2>
          <p>The reference link may be incomplete. Ask the professional to generate a new request from their Recruitdent portal.</p>
          <div class="action-row"><a class="primary-action" href="#professional">${icon("icon-key")}<span>Back to portal</span></a></div>
        </div>
      </section>
    `;
    return;
  }

  app.innerHTML = `
    <section class="professional-hero reference-request-hero">
      <div class="profile-hero-main">
        <div class="clinic-avatar professional-avatar" aria-hidden="true">${clinician.name.split(" ").map((word) => word[0]).join("").slice(0, 2).toUpperCase()}</div>
        <div>
          <span class="eyebrow">Reference request</span>
          <h2>${esc(clinician.name)}</h2>
          <p>${esc(clinician.name)} has requested a professional reference for their Recruitdent profile. Complete the form or record an uploaded reference file.</p>
        </div>
        <div class="badge-row">
          <span class="badge blue">${esc(roleName(clinician.roleId))}</span>
          ${statusBadge(reference.status)}
        </div>
      </div>

      <aside class="login-card">
        <div class="preview-bar"><span></span><span></span><span></span></div>
        <span class="eyebrow">Referee</span>
        <h3>${esc(reference.name)}</h3>
        <p class="muted">${esc(reference.clinic)}<br>${esc(reference.email)}</p>
        <p>${esc(reference.relationship)}</p>
      </aside>
    </section>

    <section class="content-grid">
      <form class="form-panel" id="referenceResponseForm">
        <span class="eyebrow">Reference form</span>
        <h2>Complete reference</h2>
        <div class="form-grid">
          <div class="field"><label for="refereeName">Your name</label><input id="refereeName" name="name" required value="${esc(reference.name)}"></div>
          <div class="field"><label for="refereeRole">Your role</label><input id="refereeRole" name="role" value="${esc(reference.role || "Practice manager")}"></div>
          <div class="field"><label for="workedFrom">Worked from</label><input id="workedFrom" name="workedFrom" type="date" value="${esc(reference.workedFrom || "2024-01-01")}"></div>
          <div class="field"><label for="workedTo">Worked to</label><input id="workedTo" name="workedTo" type="date" value="${esc(reference.workedTo || "2025-12-31")}"></div>
          <div class="field full"><label for="referenceResponse">Reference notes</label><textarea id="referenceResponse" name="response">${esc(reference.response || "Reliable, professional and suitable for locum clinical work.")}</textarea></div>
          <div class="field full"><label for="referenceUpload">Upload written reference</label><input id="referenceUpload" name="upload" type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"></div>
        </div>
        <div class="action-row"><button class="primary-action" type="submit">${icon("icon-check")}<span>Submit reference</span></button></div>
      </form>

      <aside class="insight-panel">
        <span class="eyebrow">Upload option</span>
        <h2>Form or file</h2>
        <p class="muted">In this local MVP, uploaded files are represented by their filename. A production version would store the file securely and notify Recruitdent admin.</p>
        <dl class="detail-list">
          <div><dt>Status</dt><dd>${esc(reference.status)}</dd></div>
          <div><dt>Requested</dt><dd>${esc(reference.requestedAt || "Today")}</dd></div>
        </dl>
      </aside>
    </section>
  `;

  document.querySelector("#referenceResponseForm").addEventListener("submit", submitReferenceResponse);
}

function submitReferenceResponse(event) {
  event.preventDefault();
  const referenceId = new URLSearchParams(location.search).get("ref");
  const { reference } = findReferenceById(referenceId);
  if (!reference) return;
  const data = new FormData(event.currentTarget);
  const upload = data.get("upload");
  reference.name = data.get("name");
  reference.role = data.get("role");
  reference.workedFrom = data.get("workedFrom");
  reference.workedTo = data.get("workedTo");
  reference.response = data.get("response");
  reference.uploadName = upload && upload.name ? upload.name : reference.uploadName;
  reference.status = reference.uploadName ? "uploaded" : "submitted";
  reference.submittedAt = new Date().toISOString().slice(0, 10);
  saveState();
  showToast("Reference submitted to the professional profile.");
  render();
}

function professionalRequirementCard(clinician, name) {
  const document = clinician.documents.find((item) => item.name === name);
  return `
    <article class="document-card passport-doc">
      <header><h3>${esc(name)}</h3>${statusBadge(document?.status || "pending")}</header>
      <p>${document ? `Expiry: ${esc(document.expiry || "Not supplied")}` : "Upload required before full verification."}</p>
    </article>
  `;
}

function professionalApplicationCard(application) {
  const shift = state.shifts.find((item) => item.id === application.shiftId);
  if (!shift) return "";
  return `
    <article class="item-card">
      <header><div><h3>${esc(shift.title)}</h3><span class="muted">${esc(state.clinic.name)}</span></div>${statusBadge(application.status)}</header>
      <p>${shift.date}, ${shift.start}-${shift.end}, ${shift.location}. ${esc(application.message)}</p>
      <div class="badge-row"><span class="badge">${money(shift.rate)}</span><span class="badge blue">${esc(shift.visibility)}</span></div>
    </article>
  `;
}

function professionalBookingCard(shift) {
  return `
    <article class="item-card rate-card">
      <header><div><h3>${esc(shift.title)}</h3><span class="muted">Confirmed booking</span></div>${statusBadge("assigned")}</header>
      <p>${shift.date}, ${shift.start}-${shift.end}, ${shift.room}. ${esc(shift.notes)}</p>
      <div class="badge-row"><span class="badge">${money(shift.rate)}</span><span class="badge success">${esc(shift.location)}</span></div>
    </article>
  `;
}

function trainingItem(item) {
  const label = item.status === "complete" ? "Completed" : "Due";
  const certificate = item.certificate ? `<br><span class="muted">${esc(item.certificate)}</span>` : "";
  return `<div class="timeline-item"><time>${esc(item.status)}</time><p><strong>${esc(item.name)}</strong><br><span class="muted">${label} ${esc(item.due)}</span>${certificate}</p></div>`;
}

function courseCertificatesFor(clinician) {
  return clinician.documents.filter((document) => document.courseId);
}

function saveProfessionalLogin(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const clinician = state.clinicians[0];
  Object.assign(clinician, {
    name: data.name,
    email: data.email,
    phone: data.phone,
    roleId: data.roleId,
    registration: data.registration,
    profileVisibility: data.profileVisibility
  });
  saveState();
  showToast("Professional account updated.");
  render();
}

function saveProfessionalProfile(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  Object.assign(state.clinicians[0], {
    headline: data.headline,
    location: data.location,
    radius: Number(data.radius || 0),
    rate: Number(data.rate || 0),
    availability: data.availability,
    bio: data.bio
  });
  saveState();
  showToast("Professional profile saved.");
  render();
}

function addProfessionalTraining(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  state.clinicians[0].training.unshift({
    id: uid(),
    name: data.name,
    status: "planned",
    due: data.due
  });
  state.clinicians[0].cpdHours += 2;
  saveState();
  showToast("CPD record added.");
  render();
}

function addProfessionalReference(event) {
  event.preventDefault();
  const clinician = state.clinicians[0];
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  clinician.references.push({
    id: uid(),
    name: data.name,
    clinic: data.clinic,
    email: data.email,
    phone: data.phone,
    relationship: data.relationship,
    status: "sent",
    requestedAt: new Date().toISOString().slice(0, 10),
    response: "",
    uploadName: ""
  });
  saveState();
  showToast("Reference request created and marked sent.");
  render();
}

function markReferenceSent(referenceId) {
  const { reference } = findReferenceById(referenceId);
  if (!reference) return;
  reference.status = "sent";
  reference.requestedAt = new Date().toISOString().slice(0, 10);
  saveState();
  showToast("Reference request marked as sent.");
  render();
}

async function copyReferenceLink(referenceId) {
  const { reference } = findReferenceById(referenceId);
  if (!reference) return;
  const link = referenceRequestLink(reference.id);
  try {
    await navigator.clipboard.writeText(link);
    showToast("Reference form link copied.");
  } catch {
    showToast("Reference form link is shown on the card.");
  }
}

function addPdpGoal(event) {
  event.preventDefault();
  const goal = new FormData(event.currentTarget).get("goal").trim();
  if (!goal) return;
  state.clinicians[0].pdpGoals.unshift(goal);
  saveState();
  showToast("PDP goal added.");
  render();
}

function renderMarketplace() {
  setTitle("Job board");
  const visibleShifts = state.shifts.filter((shift) => {
    if (state.persona === "clinic" || state.persona === "admin") return !shift.draft;
    return !shift.draft && shift.visibility !== "internal";
  });
  const regions = [...new Set(visibleShifts.map(shiftRegion))].sort();

  app.innerHTML = `
    <section class="toolbar">
      <div><span class="eyebrow">Marketplace</span><h2>Available shifts</h2></div>
      <div class="filter-row marketplace-filters">
        <select id="roleFilter" aria-label="Filter role"><option value="">All roles</option>${state.roles.map((role) => `<option value="${role.id}">${role.name}</option>`).join("")}</select>
        <select id="regionFilter" aria-label="Filter region"><option value="">All regions</option>${regions.map((region) => `<option>${esc(region)}</option>`).join("")}</select>
        <input id="minRateFilter" aria-label="Minimum rate" type="number" min="0" placeholder="Min rate">
        <select id="timingFilter" aria-label="Filter timing"><option value="">Any timing</option><option value="morning">Morning</option><option value="afternoon">Afternoon</option><option value="evening">Evening</option><option value="weekend">Weekend</option></select>
        <select id="ratingFilter" aria-label="Filter clinic rating"><option value="">Any rating</option><option value="4.8">4.8+ clinic</option><option value="4.5">4.5+ clinic</option><option value="4">4.0+ clinic</option></select>
        <select id="visibilityFilter" aria-label="Filter visibility"><option value="">All visibility</option><option value="public">Public</option><option value="verified">Verified</option><option value="internal">Internal</option></select>
      </div>
    </section>
    <section class="three-grid" id="shiftList">
      ${visibleShifts.length ? visibleShifts.map(shiftCard).join("") : emptyState("No visible shifts", "Public and verified shifts will appear here.")}
    </section>
  `;

  document.querySelector("#roleFilter").addEventListener("change", filterShifts);
  document.querySelector("#regionFilter").addEventListener("change", filterShifts);
  document.querySelector("#minRateFilter").addEventListener("input", filterShifts);
  document.querySelector("#timingFilter").addEventListener("change", filterShifts);
  document.querySelector("#ratingFilter").addEventListener("change", filterShifts);
  document.querySelector("#visibilityFilter").addEventListener("change", filterShifts);
}

function filterShifts() {
  const role = document.querySelector("#roleFilter").value;
  const region = document.querySelector("#regionFilter").value;
  const minRate = Number(document.querySelector("#minRateFilter").value || 0);
  const timing = document.querySelector("#timingFilter").value;
  const minRating = Number(document.querySelector("#ratingFilter").value || 0);
  const visibility = document.querySelector("#visibilityFilter").value;
  const shifts = state.shifts.filter((shift) => {
    const personaVisible = state.persona === "clinician" ? shift.visibility !== "internal" && !shift.draft : !shift.draft;
    return personaVisible &&
      (!role || shift.roleId === role) &&
      (!region || shiftRegion(shift) === region) &&
      (!minRate || Number(shift.rate || 0) >= minRate) &&
      (!timing || shiftTiming(shift) === timing) &&
      (!minRating || clinicRatingForShift(shift) >= minRating) &&
      (!visibility || shift.visibility === visibility);
  });
  document.querySelector("#shiftList").innerHTML = shifts.length ? shifts.map(shiftCard).join("") : emptyState("No matching shifts", "Try another region, role, rate, timing or rating filter.");
}

function shiftCard(shift) {
  const applications = state.applications.filter((application) => application.shiftId === shift.id);
  const alreadyApplied = applications.some((application) => application.clinicianId === state.clinicians[0].id);
  const roleMatches = shift.roleId === state.clinicians[0].roleId;
  const canApply = state.persona === "clinician" && shift.status === "open" && !alreadyApplied && roleMatches;
  return `
    <article class="shift-card">
      <header>
        <div><h3>${shift.title}</h3><span class="muted">${roleName(shift.roleId)} at ${shift.location}</span></div>
        ${statusBadge(shift.status)}
      </header>
      <p>${shift.date}, ${shift.start}-${shift.end}, ${shift.room}. ${shift.notes}</p>
      <div class="badge-row">
        <span class="badge">${money(shift.rate)}</span>
        <span class="badge">${esc(shiftRegion(shift))}</span>
        <span class="badge">${esc(timingLabel(shiftTiming(shift)))}</span>
        <span class="badge blue">${clinicRatingForShift(shift).toFixed(1)} clinic</span>
        <span class="badge ${shift.visibility === "internal" ? "warning" : "blue"}">${shift.visibility}</span>
        <span class="badge">${applications.length} applicant${applications.length === 1 ? "" : "s"}</span>
        ${state.persona === "clinician" && !roleMatches ? `<span class="badge warning">role mismatch</span>` : ""}
        ${shift.assignedClinicianId ? `<span class="badge success">${clinicianName(shift.assignedClinicianId)}</span>` : ""}
      </div>
      <div class="action-row">
        ${canApply ? `<button class="primary-action" type="button" data-action="apply-shift" data-id="${shift.id}">${icon("icon-check")}<span>Apply</span></button>` : ""}
        ${state.persona !== "clinician" ? `<button class="ghost-action" type="button" data-action="copy-shift" data-id="${shift.id}">${icon("icon-copy")}<span>Copy</span></button>` : ""}
      </div>
    </article>
  `;
}

function renderRota() {
  setTitle("Rota");
  const settings = state.clinic.rotaSettings;
  const month = settings.month || currentMonthKey();
  const allMonthShifts = monthShifts(month);
  const site = rotaSiteFilter();
  const siteOptions = uniqueStrings([...state.clinic.locations, ...allMonthShifts.map((shift) => shift.location)]);
  const shifts = rotaShiftsForMonth(month);
  const assignedShifts = shifts.filter((shift) => ["assigned", "completed"].includes(shift.status));
  const overtimeTotal = shifts.reduce((sum, shift) => sum + overtimeValue(shift), 0);
  const toilMinutes = shifts.reduce((sum, shift) => sum + shiftToilMinutes(shift), 0);
  const invoiceTotal = state.invoices
    .filter((invoice) => shifts.some((shift) => shift.id === invoice.shiftId))
    .reduce((sum, invoice) => sum + Number(invoice.amount || 0), 0);
  app.innerHTML = `
    <section class="toolbar">
      <div><span class="eyebrow">Monthly rota</span><h2>${monthLabel(month)}</h2><span class="muted">${site === "all" ? "All sites" : esc(site)}</span></div>
      <div class="action-row">
        <button class="ghost-action" type="button" data-action="previous-rota-month">${icon("icon-calendar")}<span>Previous</span></button>
        <button class="secondary-action" type="button" data-action="current-rota-month">${icon("icon-check")}<span>This month</span></button>
        <button class="ghost-action" type="button" data-action="next-rota-month">${icon("icon-calendar")}<span>Next</span></button>
        <button class="primary-action" type="button" data-action="pull-rota-financials">${icon("icon-pound")}<span>Pull financials</span></button>
      </div>
    </section>

    <section class="metrics-grid" aria-label="Rota financials">
      ${metric("Rota value", money(shifts.reduce((sum, shift) => sum + effectiveShiftRate(shift), 0)), `${shifts.length} shifts in ${monthLabel(month)}`)}
      ${metric("Assigned pay", money(assignedShifts.reduce((sum, shift) => sum + effectiveShiftRate(shift), 0)), `${assignedShifts.length} confirmed shifts`)}
      ${metric("Overtime", money(overtimeTotal), settings.allowOvertime ? `${settings.overtimeMultiplier}x multiplier` : "Disabled")}
      ${metric("TOIL", `${Math.round(toilMinutes / 60 * 10) / 10}h`, settings.toilEnabled ? "Recorded for time off in lieu" : "Disabled")}
    </section>

    <section class="content-grid">
      <form class="form-panel" id="rotaSettingsForm">
        <span class="eyebrow">Rota controls</span>
        <h2>Breaks, overtime and TOIL</h2>
        <div class="form-grid">
          <div class="field checkbox-field"><label><input name="allowOvertime" type="checkbox" ${settings.allowOvertime ? "checked" : ""}> Allow overtime on rota shifts</label></div>
          <div class="field"><label for="overtimeMultiplier">Overtime multiplier</label><input id="overtimeMultiplier" name="overtimeMultiplier" type="number" min="1" step="0.1" value="${esc(settings.overtimeMultiplier || 1.5)}"></div>
          <div class="field checkbox-field"><label><input name="toilEnabled" type="checkbox" ${settings.toilEnabled ? "checked" : ""}> Record overtime as TOIL</label></div>
          <div class="field"><label for="rotaMonth">Rota month</label><input id="rotaMonth" name="month" type="month" value="${esc(month)}"></div>
          <div class="field full"><label for="rotaSite">Site view</label><select id="rotaSite" name="site"><option value="all" ${selectedAttr(site, "all")}>All sites</option>${siteOptions.map((locationName) => `<option value="${esc(locationName)}" ${selectedAttr(site, locationName)}>${esc(locationName)}</option>`).join("")}</select></div>
        </div>
        <div class="action-row"><button class="primary-action" type="submit">${icon("icon-check")}<span>Save rota settings</span></button></div>
      </form>

      <aside class="insight-panel">
        <span class="eyebrow">Role colours</span>
        <h2>Colour coded roles</h2>
        <div class="role-legend">${state.roles.map((role) => `<span class="role-chip ${rotaRoleClass(role.id)}">${esc(role.name)}</span>`).join("")}</div>
        <dl class="detail-list">
          <div><dt>Invoices</dt><dd>${money(invoiceTotal)} pulled from invoices for this month.</dd></div>
          <div><dt>Breaks</dt><dd>${shifts.reduce((sum, shift) => sum + shiftBreakMinutes(shift), 0)} minutes recorded.</dd></div>
        </dl>
      </aside>
    </section>

    <section class="content-grid">
      <form class="form-panel" id="siteDayForm">
        <span class="eyebrow">Site day builder</span>
        <h2>Multiple shifts per day</h2>
        <div class="form-grid">
          <div class="field"><label for="siteDayDate">Date</label><input id="siteDayDate" name="date" type="date" required value="${esc(`${month}-04`)}"></div>
          <div class="field"><label for="siteDayLocation">Site</label><select id="siteDayLocation" name="location">${siteOptions.map((locationName) => `<option value="${esc(locationName)}" ${selectedAttr(site !== "all" ? site : state.clinic.locations[0], locationName)}>${esc(locationName)}</option>`).join("")}</select></div>
          <div class="field"><label for="siteDayStart">Start</label><input id="siteDayStart" name="start" type="time" value="08:30"></div>
          <div class="field"><label for="siteDayEnd">End</label><input id="siteDayEnd" name="end" type="time" value="17:00"></div>
          <div class="field"><label for="siteDayVisibility">Visibility</label><select id="siteDayVisibility" name="visibility"><option value="internal">Internal staff only</option><option value="verified">Verified Recruitdent clinicians</option><option value="public">Public job board</option></select></div>
          <div class="field"><label for="siteDayRateMode">Rate mode</label><select id="siteDayRateMode" name="rateMode"><option value="staff">Use staff normal rate</option><option value="override">Override role rate</option></select></div>
          <div class="field"><label for="siteDayBreak">Break minutes</label><input id="siteDayBreak" name="breakMinutes" type="number" min="0" value="30"></div>
          <div class="field full"><label for="siteDayPattern">Shift lines</label><textarea id="siteDayPattern" name="pattern">nurse | Surgery 1 | Dental nurse - Surgery 1
dentist | Surgery 1 | Dentist - Surgery 1
nurse | Surgery 2 | Dental nurse - Surgery 2
dentist | Surgery 3 | Dentist - Surgery 3
receptionist | Reception desk | Receptionist</textarea></div>
        </div>
        <div class="action-row"><button class="primary-action" type="submit">${icon("icon-plus")}<span>Add site day rota</span></button></div>
      </form>

      <aside class="insight-panel">
        <span class="eyebrow">Per site</span>
        <h2>Cover by location</h2>
        ${siteCoverageList(shifts)}
      </aside>
    </section>

    <section>
      <div class="toolbar"><div><span class="eyebrow">Full month view</span><h2>Assigned and unassigned shifts</h2></div><span class="badge">${shifts.length} shifts</span></div>
      <div class="rota-month-board">${rotaMonthGrid(month, shifts)}</div>
    </section>
  `;

  document.querySelector("#rotaSettingsForm").addEventListener("submit", saveRotaSettings);
  document.querySelector("#siteDayForm").addEventListener("submit", addSiteDayShifts);
}

function rotaMonthGrid(month, shifts) {
  const shiftsByDay = shifts.reduce((map, shift) => {
    map[shift.date] = [...(map[shift.date] || []), shift];
    return map;
  }, {});
  const firstDay = new Date(`${month}-01T12:00:00`).getDay();
  const leadingBlanks = (firstDay + 6) % 7;
  return `
    <div class="calendar-weekdays">${["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => `<span>${day}</span>`).join("")}</div>
    <div class="rota-month-grid">
      ${Array.from({ length: leadingBlanks }, () => `<div class="rota-month-day blank-day" aria-hidden="true"></div>`).join("")}
      ${monthDays(month).map((date) => rotaMonthDay(date, shiftsByDay[date] || [])).join("")}
    </div>
  `;
}

function rotaMonthDay(date, shifts) {
  const grouped = groupShiftsByLocation(shifts);
  return `
    <article class="rota-month-day">
      <h3>${Number(date.slice(-2))}</h3>
      ${grouped.length ? grouped.map(([locationName, siteShifts]) => `
        <div class="site-shift-group">
          <div class="site-shift-heading"><span>${esc(locationName)}</span><small>${siteShifts.length}</small></div>
          <div class="rota-day-shifts">${siteShifts.map(rotaShiftCard).join("")}</div>
        </div>
      `).join("") : `<span class="muted small-text">No shifts</span>`}
    </article>
  `;
}

function rotaShiftCard(shift) {
  const assigned = Boolean(shift.assignedClinicianId);
  const overtimeMinutes = shiftOvertimeMinutes(shift);
  const toilMinutes = shiftToilMinutes(shift);
  return `
    <div class="mini-shift ${assigned ? "" : "unassigned"} ${rotaRoleClass(shift.roleId)}">
      <strong>${esc(shift.start)}-${esc(shift.end)}</strong>
      <span>${esc(roleName(shift.roleId))}</span>
      <span class="muted">${esc(shift.location)} / ${esc(shift.room)}</span>
      <span class="muted">${shiftBreakMinutes(shift)}m break · ${shift.rateMode === "staff" ? "staff rate" : "override rate"}</span>
      ${overtimeMinutes ? `<span class="muted">${overtimeMinutes}m overtime ${overtimeValue(shift) ? `· ${money(overtimeValue(shift))}` : ""}</span>` : ""}
      ${toilMinutes ? `<span class="muted">${toilMinutes}m TOIL</span>` : ""}
      <span class="badge ${assigned ? "success" : "warning"}">${assigned ? clinicianName(shift.assignedClinicianId) : "unassigned"}</span>
    </div>
  `;
}

function addSiteDayShifts(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const lines = String(data.pattern || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const parsedLines = lines.map(parseSiteDayLine).filter(Boolean);
  if (!parsedLines.length) {
    showToast("Add at least one shift line with a recognised role.");
    return;
  }
  let createdCount = 0;
  parsedLines.forEach((shiftLine) => {
    const alreadyExists = state.shifts.some((shift) => (
      shift.date === data.date
      && shift.location === data.location
      && shift.room === shiftLine.room
      && shift.roleId === shiftLine.roleId
      && shift.start === data.start
      && shift.end === data.end
    ));
    if (alreadyExists) return;
    const rate = defaultRateForRole(shiftLine.roleId, data.date, data.start);
    state.shifts.unshift({
      id: uid(),
      title: shiftLine.title,
      roleId: shiftLine.roleId,
      date: data.date,
      start: data.start,
      end: data.end,
      location: data.location,
      region: data.location,
      room: shiftLine.room,
      rate,
      rateMode: data.rateMode,
      breakMinutes: Number(data.breakMinutes || 0),
      overtimeAllowed: Boolean(state.clinic.rotaSettings?.allowOvertime),
      overtimeMinutes: 0,
      toilMinutes: 0,
      clinicRating: Number(state.clinic.rating || 4.8),
      visibility: data.visibility,
      status: "open",
      notes: `${shiftLine.room} cover at ${data.location}.`,
      assignedClinicianId: "",
      external: data.visibility !== "internal",
      draft: false
    });
    createdCount += 1;
  });
  if (!createdCount) {
    showToast("Those shifts are already on the rota.");
    return;
  }
  state.clinic.rotaSettings = {
    ...state.clinic.rotaSettings,
    month: data.date.slice(0, 7),
    site: data.location
  };
  saveState();
  showToast(`${createdCount} shifts added for ${data.location}.`);
  render();
}

function saveRotaSettings(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  state.clinic.rotaSettings = {
    ...state.clinic.rotaSettings,
    month: data.month || state.clinic.rotaSettings.month || currentMonthKey(),
    site: data.site || "all",
    allowOvertime: data.allowOvertime === "on",
    overtimeMultiplier: Number(data.overtimeMultiplier || 1.5),
    toilEnabled: data.toilEnabled === "on"
  };
  saveState();
  showToast("Rota settings saved.");
  render();
}

function changeRotaMonth(delta) {
  const current = state.clinic.rotaSettings?.month || currentMonthKey();
  state.clinic.rotaSettings.month = delta === 0 ? currentMonthKey() : addMonthsToKey(current, delta);
  saveState();
  render();
}

function pullRotaFinancials() {
  const month = state.clinic.rotaSettings?.month || currentMonthKey();
  const site = rotaSiteFilter();
  const shifts = rotaShiftsForMonth(month);
  const rotaValue = shifts.reduce((sum, shift) => sum + effectiveShiftRate(shift) + overtimeValue(shift), 0);
  showToast(`${monthLabel(month)} financials pulled for ${site === "all" ? "all sites" : site}: ${money(rotaValue)} rota value.`);
}

function renderCourses() {
  setTitle("Courses");
  const assignments = state.courseAssignments || [];
  const completed = assignments.filter((assignment) => assignment.status === "completed");
  const assigned = assignments.filter((assignment) => assignment.status !== "completed");
  const categories = [...new Set(state.courses.map((course) => course.category))];
  const completedCertificates = completed.map(courseCertificateCard).join("");

  app.innerHTML = `
    <section class="toolbar">
      <div><span class="eyebrow">Staff and professional learning</span><h2>Find a course</h2></div>
      <div class="filter-row course-filters">
        <input id="courseSearch" aria-label="Search courses" placeholder="Search courses">
        <select id="courseRoleFilter" aria-label="Filter course role"><option value="">All roles</option>${state.roles.map((role) => `<option value="${esc(role.id)}">${esc(role.name)}</option>`).join("")}</select>
        <select id="courseCategoryFilter" aria-label="Filter course category"><option value="">All categories</option>${categories.map((category) => `<option>${esc(category)}</option>`).join("")}</select>
      </div>
    </section>

    <section class="metrics-grid" aria-label="Course metrics">
      ${metric("Courses", state.courses.length, "Dental and healthcare CPD")}
      ${metric("Assigned", assigned.length, "Linked by clinics")}
      ${metric("Certificates", completed.length, "Added to profiles")}
      ${metric("CPD hours", completed.reduce((sum, assignment) => sum + Number(courseById(assignment.courseId)?.cpdHours || 0), 0), "From completed courses")}
    </section>

    <section class="content-grid course-layout">
      <div>
        <div class="toolbar"><div><span class="eyebrow">Course finder</span><h2>Catalogue</h2></div><span class="badge">${state.courses.length} courses</span></div>
        <div class="course-list" id="courseList">${state.courses.map(courseCard).join("")}</div>
      </div>

      <aside class="insight-panel course-sidebar">
        <span class="eyebrow">Clinic assignment</span>
        <h2>Link to staff</h2>
        <form id="courseAssignForm">
          <div class="form-grid single-form">
            <div class="field"><label for="assignCourse">Course</label><select id="assignCourse" name="courseId">${state.courses.map((course) => `<option value="${esc(course.id)}">${esc(course.title)}</option>`).join("")}</select></div>
            <div class="field"><label for="assignClinician">Staff member</label><select id="assignClinician" name="clinicianId">${state.clinicians.map((clinician) => `<option value="${esc(clinician.id)}">${esc(clinician.name)} - ${esc(roleName(clinician.roleId))}</option>`).join("")}</select></div>
            <div class="field"><label for="assignDue">Due date</label><input id="assignDue" name="due" type="date" value="2026-07-01"></div>
          </div>
          <div class="action-row"><button class="primary-action" type="submit">${icon("icon-course")}<span>Assign course</span></button></div>
        </form>
        <div class="assignment-list">
          <span class="eyebrow">Linked courses</span>
          <div class="timeline">${assignments.length ? assignments.map(courseAssignmentItem).join("") : `<div class="empty-state compact-empty"><h2>No linked courses</h2><p>Clinic course assignments will appear here.</p></div>`}</div>
        </div>
      </aside>
    </section>

    <section>
      <div class="toolbar"><div><span class="eyebrow">Profile certificates</span><h2>Completed course certificates</h2></div><span class="badge success">${completed.length} complete</span></div>
      <div class="three-grid">${completedCertificates || emptyState("No certificates yet", "Complete a course to add a certificate to the professional profile.")}</div>
    </section>
  `;

  document.querySelector("#courseSearch").addEventListener("input", filterCourses);
  document.querySelector("#courseRoleFilter").addEventListener("change", filterCourses);
  document.querySelector("#courseCategoryFilter").addEventListener("change", filterCourses);
  document.querySelector("#courseAssignForm").addEventListener("submit", assignCourseFromForm);
}

function courseById(courseId) {
  return state.courses.find((course) => course.id === courseId);
}

function courseRoleList(course) {
  return course.roles.map(roleName).join(", ");
}

function thumbnailVariant(id) {
  const hash = String(id || "").split("").reduce((sum, character) => sum + character.charCodeAt(0), 0);
  return `thumb-${hash % 6}`;
}

function thumbnailLabel(text) {
  return String(text || "RD")
    .split(/\s|-/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function courseThumbnail(course) {
  return `
    <div class="thumbnail course-thumbnail ${thumbnailVariant(course.id)}" aria-hidden="true">
      <div class="thumbnail-orbit"></div>
      <div class="thumbnail-mark">${icon("icon-course")}<strong>${esc(thumbnailLabel(course.category))}</strong></div>
      <span>${esc(course.format)}</span>
    </div>
  `;
}

function newsThumbnail(article, feature = false) {
  return `
    <div class="thumbnail news-thumbnail ${feature ? "feature-thumbnail" : ""} ${thumbnailVariant(article.id)}" aria-hidden="true">
      <div class="thumbnail-orbit"></div>
      <div class="thumbnail-mark">${icon("icon-news")}<strong>${esc(thumbnailLabel(article.category))}</strong></div>
      <span>${esc(article.date)}</span>
    </div>
  `;
}

function courseCard(course) {
  const currentClinician = state.clinicians[0];
  const assignment = state.courseAssignments.find((item) => item.courseId === course.id && item.clinicianId === currentClinician.id);
  const completed = assignment?.status === "completed";
  return `
    <article class="course-card" data-course-category="${esc(course.category)}">
      <div class="course-card-body">
        ${courseThumbnail(course)}
        <div class="course-card-content">
          <header>
            <div>
              <span class="eyebrow">${esc(course.category)}</span>
              <h3>${esc(course.title)}</h3>
              <span class="muted">${esc(course.provider)}</span>
            </div>
            <span class="badge ${completed ? "success" : assignment ? "warning" : "blue"}">${completed ? "certificate ready" : assignment ? assignment.status : course.format}</span>
          </header>
          <p>${esc(course.description)}</p>
          <div class="course-meta">
            <span>${icon("icon-course")}${esc(course.duration)}</span>
            <span>${esc(course.cpdHours)} CPD hours</span>
            <span>${money(course.price)}</span>
            <span>Next ${esc(course.nextDate)}</span>
          </div>
          <p class="muted">Suitable for ${esc(courseRoleList(course))}.</p>
          <div class="action-row">
            <button class="secondary-action" type="button" data-action="assign-course" data-id="${course.id}">${icon("icon-user")}<span>Link to staff</span></button>
            <button class="primary-action" type="button" data-action="complete-course" data-id="${course.id}" ${completed ? "disabled" : ""}>${icon("icon-check")}<span>${completed ? "Completed" : "Complete course"}</span></button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function filterCourses() {
  const search = document.querySelector("#courseSearch").value.trim().toLowerCase();
  const role = document.querySelector("#courseRoleFilter").value;
  const category = document.querySelector("#courseCategoryFilter").value;
  const courses = state.courses.filter((course) => {
    const searchable = `${course.title} ${course.provider} ${course.category} ${course.description}`.toLowerCase();
    return (!search || searchable.includes(search)) &&
      (!role || course.roles.includes(role)) &&
      (!category || course.category === category);
  });
  document.querySelector("#courseList").innerHTML = courses.length ? courses.map(courseCard).join("") : emptyState("No matching courses", "Try another role, category or search term.");
}

function assignCourseFromForm(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  assignCourse(data.courseId, data.clinicianId, data.due);
}

function assignCourse(courseId, clinicianId = state.clinicians[0].id, due = "2026-07-01") {
  const course = courseById(courseId);
  const clinician = state.clinicians.find((item) => item.id === clinicianId);
  if (!course || !clinician) return;
  const existing = state.courseAssignments.find((item) => item.courseId === courseId && item.clinicianId === clinicianId);
  if (existing) {
    existing.due = due || existing.due;
    existing.status = existing.status === "completed" ? "completed" : "assigned";
  } else {
    state.courseAssignments.push({
      id: uid(),
      courseId,
      clinicianId,
      clinicId: state.clinic.id,
      status: "assigned",
      assignedAt: new Date().toISOString().slice(0, 10),
      due
    });
  }
  saveState();
  showToast(`${course.title} linked to ${clinician.name}.`);
  render();
}

function completeCourse(courseId) {
  const course = courseById(courseId);
  const clinician = state.clinicians[0];
  if (!course || !clinician) return;
  let assignment = state.courseAssignments.find((item) => item.courseId === courseId && item.clinicianId === clinician.id);
  if (!assignment) {
    assignment = {
      id: uid(),
      courseId,
      clinicianId: clinician.id,
      clinicId: state.clinic.id,
      status: "assigned",
      assignedAt: new Date().toISOString().slice(0, 10),
      due: new Date().toISOString().slice(0, 10)
    };
    state.courseAssignments.push(assignment);
  }
  if (assignment.status === "completed") return;
  assignment.status = "completed";
  assignment.completedAt = new Date().toISOString().slice(0, 10);
  addCourseCertificateToProfile(course, clinician, assignment.completedAt);
  saveState();
  showToast("Course completed and certificate added to the professional profile.");
  render();
}

function addCourseCertificateToProfile(course, clinician, completedAt) {
  const certificateName = `${course.certificateName} certificate`;
  const expiry = course.category === "Mandatory CPD" || course.category === "Compliance"
    ? `${Number(completedAt.slice(0, 4)) + 1}${completedAt.slice(4)}`
    : "No expiry";
  if (!clinician.documents.some((document) => document.name === certificateName)) {
    clinician.documents.push({
      id: uid(),
      name: certificateName,
      status: "approved",
      expiry,
      courseId: course.id
    });
  }
  if (!clinician.training.some((item) => item.courseId === course.id)) {
    clinician.training.unshift({
      id: uid(),
      name: course.title,
      status: "complete",
      due: completedAt,
      courseId: course.id,
      certificate: certificateName
    });
    clinician.cpdHours += Number(course.cpdHours || 0);
  }
}

function courseAssignmentItem(assignment) {
  const course = courseById(assignment.courseId);
  const clinician = state.clinicians.find((item) => item.id === assignment.clinicianId);
  if (!course || !clinician) return "";
  const dateLabel = assignment.status === "completed" ? `Completed ${assignment.completedAt}` : `Due ${assignment.due}`;
  return `<div class="timeline-item"><time>${esc(assignment.status)}</time><p><strong>${esc(course.title)}</strong><br><span class="muted">${esc(clinician.name)} - ${esc(dateLabel)}</span></p></div>`;
}

function courseCertificateCard(assignment) {
  const course = courseById(assignment.courseId);
  const clinician = state.clinicians.find((item) => item.id === assignment.clinicianId);
  if (!course || !clinician) return "";
  return `
    <article class="document-card certificate-card">
      <header><div><h3>${esc(course.certificateName)} certificate</h3><span class="muted">${esc(clinician.name)}</span></div>${statusBadge("approved")}</header>
      <p>${esc(course.title)} completed on ${esc(assignment.completedAt || "today")}. ${esc(course.cpdHours)} CPD hours added to the profile.</p>
    </article>
  `;
}

function renderNews() {
  setTitle("Blogs and news");
  const categories = [...new Set(state.newsArticles.map((article) => article.category))];
  const [featured] = state.newsArticles;

  app.innerHTML = `
    <section class="toolbar">
      <div><span class="eyebrow">Recruitdent updates</span><h2>Blogs and news</h2></div>
      <div class="filter-row news-filters">
        <input id="newsSearch" aria-label="Search news" placeholder="Search articles">
        <select id="newsCategoryFilter" aria-label="Filter news category"><option value="">All categories</option>${categories.map((category) => `<option>${esc(category)}</option>`).join("")}</select>
      </div>
    </section>

    <section class="content-grid news-layout">
      ${featured ? `
        <article class="news-feature">
          <div class="news-feature-grid">
            ${newsThumbnail(featured, true)}
            <div>
              <span class="eyebrow">${esc(featured.category)}</span>
              <h2>${esc(featured.title)}</h2>
              <p>${esc(featured.summary)}</p>
              <div class="badge-row"><span class="badge blue">${esc(featured.date)}</span><span class="badge">${esc(featured.author)}</span></div>
            </div>
          </div>
        </article>
      ` : emptyState("No news yet", "Recruitdent updates will appear here.")}

      <form class="form-panel" id="newsForm">
        <span class="eyebrow">Admin publishing</span>
        <h2>Add blog or news</h2>
        <div class="form-grid single-form">
          <div class="field"><label for="newsTitle">Title</label><input id="newsTitle" name="title" required value="How clinics can prepare for verified locum bookings"></div>
          <div class="field"><label for="newsCategory">Category</label><input id="newsCategory" name="category" required value="Clinic guide"></div>
          <div class="field"><label for="newsAuthor">Author</label><input id="newsAuthor" name="author" value="Recruitdent team"></div>
          <div class="field"><label for="newsSummary">Summary</label><textarea id="newsSummary" name="summary">A short practical guide for getting policies, documents, rooms and rates ready before posting shifts.</textarea></div>
        </div>
        <div class="action-row"><button class="primary-action" type="submit">${icon("icon-news")}<span>Publish update</span></button></div>
      </form>
    </section>

    <section>
      <div class="toolbar"><div><span class="eyebrow">Article library</span><h2>Latest posts</h2></div><span class="badge">${state.newsArticles.length} posts</span></div>
      <div class="three-grid" id="newsList">${state.newsArticles.map(newsArticleCard).join("")}</div>
    </section>
  `;

  document.querySelector("#newsSearch").addEventListener("input", filterNews);
  document.querySelector("#newsCategoryFilter").addEventListener("change", filterNews);
  document.querySelector("#newsForm").addEventListener("submit", addNewsArticle);
}

function newsArticleCard(article) {
  return `
    <article class="message-card news-card">
      ${newsThumbnail(article)}
      <div class="news-card-content">
        <header><div><h3>${esc(article.title)}</h3><span class="muted">${esc(article.author)} - ${esc(article.date)}</span></div><span class="badge blue">${esc(article.category)}</span></header>
        <p>${esc(article.summary)}</p>
        <p class="muted">${esc(article.body || "More detail can be added when Recruitdent turns this into a full publishing workflow.")}</p>
      </div>
    </article>
  `;
}

function filterNews() {
  const search = document.querySelector("#newsSearch").value.trim().toLowerCase();
  const category = document.querySelector("#newsCategoryFilter").value;
  const articles = state.newsArticles.filter((article) => {
    const searchable = `${article.title} ${article.summary} ${article.body} ${article.category}`.toLowerCase();
    return (!search || searchable.includes(search)) && (!category || article.category === category);
  });
  document.querySelector("#newsList").innerHTML = articles.length ? articles.map(newsArticleCard).join("") : emptyState("No matching articles", "Try another category or search term.");
}

function addNewsArticle(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  state.newsArticles.unshift({
    id: uid(),
    title: data.title,
    category: data.category,
    date: new Date().toISOString().slice(0, 10),
    author: data.author || "Recruitdent team",
    summary: data.summary,
    body: data.summary
  });
  saveState();
  showToast("Blog/news update published.");
  render();
}

function renderAdmin() {
  setTitle("Admin verification");
  const pendingDocs = state.clinicians.flatMap((clinician) => clinician.documents
    .filter((document) => document.status === "pending")
    .map((document) => ({ ...document, clinicianId: clinician.id, clinicianName: clinician.name })));
  const referenceChecks = state.clinicians.flatMap((clinician) => clinician.references
    .map((reference) => ({ ...reference, clinicianId: clinician.id, clinicianName: clinician.name })));

  app.innerHTML = `
    <section class="metrics-grid">
      ${metric("Setup fee", money(50), state.clinic.setupFeePaid ? "Paid by clinic" : "Due")}
      ${metric("Booking fee", money(10), "Charged per external booking")}
      ${metric("Pending docs", pendingDocs.length, "Admin review queue")}
      ${metric("References", referenceChecks.length, "Requested and returned")}
      ${metric("Regions", state.regions.length, "Expansion templates")}
    </section>

    <section class="content-grid">
      <div>
        <div class="toolbar"><div><span class="eyebrow">Manual checks</span><h2>Document verification queue</h2></div></div>
        <div class="three-grid">${pendingDocs.length ? pendingDocs.map(adminDocumentCard).join("") : emptyState("Queue clear", "No pending documents need review.")}</div>
      </div>
      <form class="form-panel" id="roleForm">
        <span class="eyebrow">Configurable compliance</span>
        <h2>Add healthcare role</h2>
        <div class="form-grid">
          <div class="field"><label for="roleName">Role name</label><input id="roleName" name="name" required value="Locum pharmacist"></div>
          <div class="field"><label for="roleSector">Sector</label><input id="roleSector" name="sector" required value="Healthcare"></div>
          <div class="field full"><label for="roleDocuments">Required documents</label><input id="roleDocuments" name="documents" value="Photo ID, DBS, Professional registration, Right to work"></div>
        </div>
        <div class="action-row"><button class="primary-action" type="submit">${icon("icon-plus")}<span>Add role</span></button></div>
      </form>
    </section>

    <section>
      <div class="toolbar"><div><span class="eyebrow">Reference checks</span><h2>Referee responses and uploads</h2></div><span class="badge">${referenceChecks.length} request${referenceChecks.length === 1 ? "" : "s"}</span></div>
      <div class="three-grid">${referenceChecks.length ? referenceChecks.map(adminReferenceCard).join("") : emptyState("No references requested", "Professional reference requests will appear here once a clinician sends them.")}</div>
    </section>
  `;
  document.querySelector("#roleForm").addEventListener("submit", addRole);
}

function adminDocumentCard(document) {
  return `
    <article class="document-card">
      <header><div><h3>${document.name}</h3><span class="muted">${document.clinicianName}</span></div>${statusBadge(document.status)}</header>
      <p>Expiry: ${document.expiry}. Manual verification keeps trust high while the MVP avoids automated-check complexity.</p>
      <div class="action-row">
        <button class="secondary-action" type="button" data-action="approve-doc" data-doc-id="${document.id}" data-clinician-id="${document.clinicianId}">${icon("icon-check")}<span>Approve</span></button>
        <button class="ghost-action" type="button" data-action="reject-doc" data-doc-id="${document.id}" data-clinician-id="${document.clinicianId}">${icon("icon-x")}<span>Reject</span></button>
      </div>
    </article>
  `;
}

function adminReferenceCard(reference) {
  return `
    <article class="item-card reference-card">
      <header><div><h3>${esc(reference.name)}</h3><span class="muted">${esc(reference.clinicianName)}</span></div>${statusBadge(reference.status)}</header>
      <p>${esc(reference.clinic)}<br>${esc(reference.email)}${reference.phone ? `<br>${esc(reference.phone)}` : ""}</p>
      ${reference.response ? `<p><strong>Response:</strong> ${esc(reference.response)}</p>` : `<p class="muted">Awaiting referee form response.</p>`}
      ${reference.uploadName ? `<p><strong>Uploaded file:</strong> ${esc(reference.uploadName)}</p>` : ""}
      <div class="action-row">
        <a class="secondary-action" href="${esc(referenceRequestLink(reference.id))}">${icon("icon-document")}<span>Open form</span></a>
      </div>
    </article>
  `;
}

function addRole(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  state.roles.push({
    id: data.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    name: data.name,
    sector: data.sector,
    documents: data.documents.split(",").map((item) => item.trim()).filter(Boolean)
  });
  saveState();
  showToast(`${data.name} added without changing booking logic.`);
  render();
}

function renderReviews() {
  setTitle("Messages and reviews");
  const completedBookings = state.shifts.filter((shift) => shift.status === "assigned" && shift.external);
  app.innerHTML = `
    <section class="two-grid">
      <div>
        <div class="toolbar"><div><span class="eyebrow">Messages</span><h2>Booking conversations</h2></div></div>
        <div class="timeline">${state.messages.map((message) => `
          <article class="message-card">
            <header><h3>${message.from} to ${message.to}</h3><span class="badge blue">shift</span></header>
            <p>${message.text}</p>
          </article>
        `).join("")}</div>
      </div>
      <form class="form-panel" id="reviewForm">
        <span class="eyebrow">Completed bookings only</span>
        <h2>Leave a review</h2>
        <div class="form-grid">
          <div class="field full"><label for="reviewBooking">Booking</label><select id="reviewBooking" name="shiftId" ${completedBookings.length ? "" : "disabled"}>${completedBookings.map((shift) => `<option value="${shift.id}">${shift.title} with ${clinicianName(shift.assignedClinicianId)}</option>`).join("")}</select></div>
          <div class="field"><label for="reviewRating">Rating</label><input id="reviewRating" name="rating" min="1" max="5" type="number" value="5"></div>
          <div class="field full"><label for="reviewText">Review</label><textarea id="reviewText" name="text">Great communication and reliable cover.</textarea></div>
        </div>
        <div class="action-row"><button class="primary-action" type="submit" ${completedBookings.length ? "" : "disabled"}>${icon("icon-check")}<span>Publish review</span></button></div>
        ${completedBookings.length ? "" : `<p class="muted">A review can be left after an external booking has been completed.</p>`}
      </form>
    </section>

    <section>
      <div class="toolbar"><div><span class="eyebrow">Reputation</span><h2>Reviews</h2></div></div>
      <div class="three-grid">${state.reviews.map(reviewCard).join("")}</div>
    </section>
  `;
  document.querySelector("#reviewForm").addEventListener("submit", addReview);
}

function reviewCard(review) {
  return `
    <article class="item-card">
      <header><div><h3>${review.to}</h3><span class="muted">From ${review.from}</span></div><span class="badge success">${review.rating}/5</span></header>
      <p>${review.text}</p>
    </article>
  `;
}

function addReview(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const shift = state.shifts.find((item) => item.id === data.shiftId);
  if (!shift || shift.status !== "assigned") {
    showToast("Reviews are only available after completed bookings.");
    return;
  }
  state.reviews.unshift({
    id: uid(),
    from: state.clinic.name,
    to: clinicianName(shift.assignedClinicianId),
    rating: Number(data.rating),
    text: data.text,
    bookingId: shift.id
  });
  saveState();
  showToast("Review published to the completed booking.");
  render();
}

function applyToShift(shiftId) {
  const shift = state.shifts.find((item) => item.id === shiftId);
  if (!shift || shift.visibility === "internal") return;
  const exists = state.applications.some((application) => application.shiftId === shiftId && application.clinicianId === state.clinicians[0].id);
  if (exists) return;
  state.applications.push({
    id: uid(),
    shiftId,
    clinicianId: state.clinicians[0].id,
    status: "pending",
    message: "I am available and my Recruitdent profile is ready for review."
  });
  saveState();
  showToast("Application sent to the clinic.");
  render();
}

function copyShift(shiftId) {
  const shift = state.shifts.find((item) => item.id === shiftId);
  if (!shift) return;
  const copy = {
    ...shift,
    id: uid(),
    title: `${shift.title} copy`,
    date: "2026-05-08",
    status: "draft",
    assignedClinicianId: "",
    draft: true
  };
  state.shifts.unshift(copy);
  saveState();
  showToast("Shift copied into draft rota.");
  render();
}

function createInvoice(shiftId) {
  const shift = state.shifts.find((item) => item.id === shiftId);
  const clinician = state.clinicians.find((item) => item.id === shift?.assignedClinicianId);
  if (!shift || !clinician || !shift.external || !["assigned", "completed"].includes(shift.status)) {
    showToast("Only booked external locum shifts can be invoiced.");
    return;
  }
  if (invoiceForShift(shift.id)) {
    showToast("An invoice already exists for this shift.");
    return;
  }
  state.invoices.push({
    id: uid(),
    number: nextInvoiceNumber(),
    shiftId: shift.id,
    clinicianId: clinician.id,
    clinicId: state.clinic.id,
    amount: Number(shift.rate || 0),
    status: "draft",
    issuedAt: new Date().toISOString().slice(0, 10),
    due: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)
  });
  saveState();
  showToast("Draft invoice created for the clinic.");
  render();
}

function approveApplication(applicationId) {
  const application = state.applications.find((item) => item.id === applicationId);
  if (!application) return;
  const shift = state.shifts.find((item) => item.id === application.shiftId);
  const clinician = state.clinicians.find((item) => item.id === application.clinicianId);
  if (!shift || !clinician) return;
  if (!clinician.verified) {
    showToast("This clinician needs admin verification before booking.");
    return;
  }
  application.status = "approved";
  shift.status = "assigned";
  shift.assignedClinicianId = clinician.id;
  state.applications
    .filter((item) => item.shiftId === shift.id && item.id !== application.id)
    .forEach((item) => { item.status = "rejected"; });
  if (shift.external) {
    state.payments.push({
      id: uid(),
      type: "booking",
      amount: 10,
      status: "paid",
      label: `External booking fee: ${shift.title}`
    });
  }
  state.messages.push({
    id: uid(),
    from: state.clinic.name,
    to: clinician.name,
    text: `Confirmed for ${shift.title} on ${shift.date}.`,
    relatedShiftId: shift.id
  });
  saveState();
  showToast(shift.external ? "Booking confirmed and £10 fee recorded." : "Internal shift assigned.");
  render();
}

function rejectApplication(applicationId) {
  const application = state.applications.find((item) => item.id === applicationId);
  if (!application) return;
  application.status = "rejected";
  saveState();
  showToast("Application rejected.");
  render();
}

function verifyDocument(clinicianId, documentId, status) {
  const clinician = state.clinicians.find((item) => item.id === clinicianId);
  const document = clinician?.documents.find((item) => item.id === documentId);
  if (!clinician || !document) return;
  document.status = status;
  const requiredDocs = state.roles.find((role) => role.id === clinician.roleId)?.documents || [];
  clinician.verified = requiredDocs.every((required) => clinician.documents.some((item) => item.name === required && item.status === "approved"));
  saveState();
  showToast(status === "approved" ? "Document approved." : "Document rejected.");
  render();
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "apply-shift") applyToShift(button.dataset.id);
  if (action === "copy-shift") copyShift(button.dataset.id);
  if (action === "create-invoice") createInvoice(button.dataset.id);
  if (action === "previous-rota-month") changeRotaMonth(-1);
  if (action === "current-rota-month") changeRotaMonth(0);
  if (action === "next-rota-month") changeRotaMonth(1);
  if (action === "pull-rota-financials") pullRotaFinancials();
  if (action === "assign-course") assignCourse(button.dataset.id);
  if (action === "complete-course") completeCourse(button.dataset.id);
  if (action === "approve-app") approveApplication(button.dataset.id);
  if (action === "reject-app") rejectApplication(button.dataset.id);
  if (action === "approve-doc") verifyDocument(button.dataset.clinicianId, button.dataset.docId, "approved");
  if (action === "reject-doc") verifyDocument(button.dataset.clinicianId, button.dataset.docId, "rejected");
  if (action === "mark-reference-sent") markReferenceSent(button.dataset.id);
  if (action === "copy-reference-link") copyReferenceLink(button.dataset.id);
});

personaSelect.addEventListener("change", (event) => {
  state.persona = event.target.value;
  saveState();
  render();
});

document.querySelector("#resetDemo").addEventListener("click", () => {
  state = structuredClone(seedState);
  saveState();
  showToast("Demo data reset.");
  render();
});

window.addEventListener("hashchange", render);

if (!location.hash) {
  location.hash = "#overview";
}

render();
