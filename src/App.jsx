import React, { useState, useEffect } from "react";
import logo from "./assets/QNAYDS_LOGO.png";
import mentorPhoto from "./assets/mentor.webp";
import courseVideo from "./assets/Excel.mp4";
import excelThumbnail from "./assets/excel-thumbnail.webp";
import EnrollmentFlow from "./components/EnrollmentFlow";
const EXCEL_COURSE_ID = 13;
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const gridBg = {
  backgroundImage:
    "linear-gradient(to right, rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.07) 1px, transparent 1px)",
  backgroundSize: "36px 36px",
};

const features = [
  {
    icon: "⚡",
    title: "Excel + AI",
    text: "Excel-നൊപ്പം AI ഉപയോഗിച്ച് വേഗത്തിലും എളുപ്പത്തിലും ജോലി ചെയ്യാൻ പഠിക്കാം.",
  },
  {
    icon: "📊",
    title: "ഡാറ്റാ വിശകലനം",
    text: "വലിയ അളവിലുള്ള ഡാറ്റ മനസ്സിലാക്കി ആവശ്യമായ വിവരങ്ങൾ കണ്ടെത്താൻ പഠിക്കാം.",
  },
  {
    icon: "📈",
    title: "റിപ്പോർട്ടുകളും ഡാഷ്ബോർഡുകളും",
    text: "ജോലിസ്ഥലത്ത് ഉപയോഗിക്കുന്ന പ്രൊഫഷണൽ റിപ്പോർട്ടുകളും ഡാഷ്ബോർഡുകളും നിർമ്മിക്കാം.",
  },
  {
    icon: "🤖",
    title: "Automation",
    text: "ആവർത്തിച്ച് ചെയ്യേണ്ട Excel ജോലികൾ എളുപ്പമാക്കാനും ഓട്ടോമേറ്റ് ചെയ്യാനും പഠിക്കാം.",
  },
];

const learners = [
  {
    title: "Freshers",
    text: "Excel basics മുതൽ practical workplace skills വരെ പഠിച്ച് career തുടങ്ങാൻ തയ്യാറാകാം.",
  },
  {
    title: "ജോലി അന്വേഷിക്കുന്നവർ",
    text: "Job-ൽ ആവശ്യമായ Excel, reporting, data analysis skills പഠിച്ച് interview confidence വർധിപ്പിക്കാം.",
  },
  {
    title: "Office / MIS ജീവനക്കാർ",
    text: "Daily reports, MIS, dashboards, data handling എന്നിവ കൂടുതൽ വേഗത്തിലും smart ആയും ചെയ്യാം.",
  },
  {
    title: "HR മേഖലയിൽ ജോലി ചെയ്യുന്നവർ",
    text: "Attendance, employee data, leave tracking, HR reports എന്നിവ Excel + AI ഉപയോഗിച്ച് എളുപ്പമാക്കാം.",
  },
  {
    title: "Accounts മേഖലയിൽ ജോലി ചെയ്യുന്നവർ",
    text: "Expenses, calculations, financial data, reports എന്നിവ കൂടുതൽ കൃത്യമായും efficient ആയും manage ചെയ്യാം.",
  },
  {
    title: "Business ചെയ്യുന്നവർ",
    text: "Sales, expenses, business data എന്നിവ analyze ചെയ്ത് better reports and decisions എടുക്കാൻ പഠിക്കാം.",
  },
  {
    title: "Freelancers",
    text: "Clients-നായി professional Excel reports, dashboards, data work എന്നിവ confidently ചെയ്യാൻ കഴിയും.",
  },
];

const skills = [
  "Excel അടിസ്ഥാനങ്ങൾ",
  "ഡാറ്റാ വിശകലനം",
  "റിപ്പോർട്ടുകളും ഡാഷ്ബോർഡുകളും",
  "Excel-ൽ AI ഉപയോഗം",
  "Automation",
  "MIS റിപ്പോർട്ടിംഗ്",
  "HR & Accounts ആവശ്യങ്ങൾ",
  "പ്രായോഗിക Projects",
];

const projects = [
  {
    number: "01",
    title: "Sales Dashboard",
    text: "Sales ഡാറ്റ ഉപയോഗിച്ച് ഒരു പ്രൊഫഷണൽ Dashboard തയ്യാറാക്കുക.",
  },
  {
    number: "02",
    title: "HR Attendance",
    text: "ജീവനക്കാരുടെ Attendance ഡാറ്റ കൈകാര്യം ചെയ്ത് റിപ്പോർട്ട് തയ്യാറാക്കുക.",
  },
  {
    number: "03",
    title: "Expense Tracker",
    text: "ചെലവുകൾ ക്രമീകരിച്ച് എളുപ്പത്തിൽ പരിശോധിക്കാവുന്ന Tracker നിർമ്മിക്കുക.",
  },
  {
    number: "04",
    title: "AI Formula Project",
    text: "AI ഉപയോഗിച്ച് ആവശ്യമായ Excel Formula കണ്ടെത്തുകയും പരിശോധിക്കുകയും ചെയ്യുക.",
  },
  {
    number: "05",
    title: "Automated MIS",
    text: "MIS റിപ്പോർട്ടിംഗ് കൂടുതൽ വേഗത്തിലും കാര്യക്ഷമമായും ചെയ്യാൻ പഠിക്കുക.",
  },
];

const workflow = [
  "ജോലി / Task",
  "AI സഹായം",
  "Excel",
  "പരിശോധിക്കുക",
  "വിശകലനം ചെയ്യുക",
  "റിപ്പോർട്ട് തയ്യാറാക്കുക",
  "Automation",
];

const roles = [
  "MIS Executive",
  "Data Analyst",
  "HR Executive",
  "Accounts Executive",
  "Operations Executive",
];

const faqs = [
  {
    question: "ഈ കോഴ്സ് ആർക്കാണ് അനുയോജ്യം?",
    answer:
      "Excel പഠിക്കാൻ ആഗ്രഹിക്കുന്ന beginners മുതൽ ജോലി ആവശ്യങ്ങൾക്ക് Excel കൂടുതൽ പ്രൊഫഷണലായി ഉപയോഗിക്കാൻ ആഗ്രഹിക്കുന്നവർ വരെ ഈ program പിന്തുടരാം.",
  },

  {
    question: "Excel മാത്രം അറിയുന്നത് മതിയോ?",
    answer:
      "ഇന്നത്തെ ജോലികളിൽ Excel ഉപയോഗിക്കുന്നതിനൊപ്പം data analysis, reporting, dashboards, AI തുടങ്ങിയ practical skills അറിയുന്നത് കൂടുതൽ സഹായകരമാണ്.",
  },

  {
    question: "AI ഉപയോഗിച്ചുള്ള Excel പഠിക്കുമോ?",
    answer:
      "അതെ. Excel workflows-ൽ AI എങ്ങനെ ഉപയോഗിക്കാം, formulas കണ്ടെത്താനും data work എളുപ്പമാക്കാനും AI എങ്ങനെ ഉപയോഗിക്കാം എന്നിവ program-ന്റെ ഭാഗമാണ്.",
  },

  {
    question: "Practical Projects ഉണ്ടാകുമോ?",
    answer:
      "അതെ. Sales Dashboard, HR Attendance, Expense Tracker, AI Formula Project, Automated MIS തുടങ്ങിയ practical projects ഉൾപ്പെടുത്തിയിട്ടുണ്ട്.",
  },

  {
    question: "ഈ കോഴ്സ് പഠിക്കാൻ ലാപ്ടോപ്പ് നിർബന്ധമാണോ?",
    answer:
      "അല്ല, ലാപ്ടോപ്പ് നിർബന്ധമില്ല. Mobile Phone, Tablet, Laptop, Desktop എന്നിവയിൽ എല്ലാം course access ചെയ്യാം. Internet connection ഉണ്ടെങ്കിൽ നിങ്ങൾക്ക് സൗകര്യമുള്ള ഏത് device-ലും പഠിക്കാം.",
  },

  {
    question: "Course പൂർത്തിയാക്കിയാൽ Certificate ലഭിക്കുമോ?",
    answer:
      "Program completion-നുമായി ബന്ധപ്പെട്ട certification section ഈ landing page-ൽ ഉൾപ്പെടുത്തിയിട്ടുണ്ട്.",
  },
];

// shared style fragments
const tag =
  "inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700";
const h2 =
  "text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl";
const lead = "mt-4 text-base leading-relaxed text-slate-600 sm:text-lg";
const ctaPrimary =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl animate-pulse";
const LIMITED_SEATS = 20;
const OFFER_END_TIME = Date.now() + 1000 * 60 * 60 * 18 + 1000 * 60 * 10;

const getTimeLeft = (endTime) => {
  const distance = Math.max(endTime - Date.now(), 0);

  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
};

const trackMetaEvent = (eventName, params = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName, params);
  }
};

const learners = [
  {
    title: "Freshers",
    text: "Excel Basics മുതൽ practical job skills വരെ പഠിച്ച് നിങ്ങളുടെ Career ആരംഭിക്കാം.",
  },
  {
    title: "Job Seekers",
    text: "ജോലിക്ക് ആവശ്യമായ Excel, Reporting, Data Analysis Skills പഠിച്ച് Interview-ൽ കൂടുതൽ ആത്മവിശ്വാസത്തോടെ പങ്കെടുക്കാം.",
  },
  {
    title: "Office / MIS Professionals",
    text: "ദിവസേനയുള്ള Reports, MIS, Dashboards, Data കൈകാര്യം എന്നിവ കൂടുതൽ വേഗത്തിൽ ചെയ്യാം.",
  },
  {
    title: "HR Professionals",
    text: "Attendance, ജീവനക്കാരുടെ Data, Leave Tracking, HR Reports എന്നിവ Excel + AI ഉപയോഗിച്ച് എളുപ്പമാക്കാം.",
  },
  {
    title: "Accounts Professionals",
    text: "Expenses, കണക്കുകൂട്ടലുകൾ, സാമ്പത്തിക Data, Reports എന്നിവ കൂടുതൽ കൃത്യമായി ചെയ്യാം.",
  },
  {
    title: "Business Owners",
    text: "Sales, Expenses, Business Data എന്നിവ Analyze ചെയ്ത് മികച്ച തീരുമാനങ്ങൾ എടുക്കാം.",
  },
];

const todayChallenges = [
  "Reports തയ്യാറാക്കാൻ കൂടുതൽ സമയം ചെലവാകുന്നു",
  "Data മനസ്സിലാക്കാൻ ബുദ്ധിമുട്ട്",
  "Repeated Excel Tasks",
  "Interview-ന് ആവശ്യമായ കഴിവുകളുടെ കുറവ്",
];


const modules = [
  {
    num: "Module 01",
    title: "Excel Fundamentals",
    topics: [
      "Excel Interface & Navigation",
      "Workbook & Worksheet Structure",
      "Cells & Cell Referencing",
      "Data Types & Formatting",
      "Essential Keyboard Shortcuts",
    ],
    outcome: "Build a Strong Excel Foundation",
  },
  {
    num: "Module 02",
    title: "Data Handling & Analysis",
    topics: [
      "Data Sorting & Filtering",
      "Data Validation & Cleaning",
      "Duplicate Removal",
      "Text & Lookup Functions",
      "Pivot Tables & Charts",
    ],
    outcome: "Organize Data & Perform Analysis",
  },
  {
    num: "Module 03",
    title: "Reports & Dashboards",
    topics: [
      "Charts & Data Visualization",
      "Dynamic Presentation Charts",
      "KPI Reporting Formats",
      "Interactive Dashboard Design",
      "Professional Report Layouts",
    ],
    outcome: "Create Professional Charts & Dashboards",
  },
  {
    num: "Module 04",
    title: "AI Tools in Excel",
    topics: [
      "Introduction to AI in Excel",
      "Using ChatGPT for Complex Formulas",
      "Instant Formula Generation",
      "Error Correction Using AI",
      "Smart Data Insights",
    ],
    outcome: "Generate Formulas & Fix Errors Using AI",
    featured: true,
  },
  {
    num: "Module 05",
    title: "AI-Powered Automation",
    topics: [
      "Repeated Task Automation",
      "AI Formula Automation",
      "Monthly Report Generation",
      "Daily Workflow Automation",
    ],
    outcome: "Automate Repetitive Tasks",
  },
  {
    num: "Module 06",
    title: "MIS, HR & Accounts",
    topics: [
      "MIS Reporting Structure & Standards",
      "Daily / Weekly / Monthly Reports",
      "HR Attendance & Leave Trackers",
      "Payroll Calculations",
      "Expense & Budget Tracking",
    ],
    outcome: "Create Job-Ready Reports",
  },
];


const projects = [
  {
    number: "01",
    title: "Sales Dashboard",
    text: "Sales Data ഉപയോഗിച്ച് Management-നായി ഒരു Professional Interactive Dashboard തയ്യാറാക്കാം.",
  },
  {
    number: "02",
    title: "HR Attendance Report",
    text: "Employee Attendance, Leave Data എന്നിവ ഉപയോഗിച്ച് Automated Report തയ്യാറാക്കാം.",
  },
  {
    number: "03",
    title: "Expense Tracker",
    text: "Office Expenses track ചെയ്യാനും നിരീക്ഷിക്കാനും ഒരു Expense Tracker നിർമ്മിക്കാം.",
  },
  {
    number: "04",
    title: "AI Formula Project",
    text: "ChatGPT ഉപയോഗിച്ച് Excel Formulas കണ്ടെത്താനും മനസ്സിലാക്കാനും പ്രായോഗികമായി പഠിക്കാം.",
  },
  {
    number: "05",
    title: "Automated MIS",
    text: "Daily MIS Reporting എളുപ്പമാക്കാനും ആവശ്യമായ Reports automate ചെയ്യാനും പഠിക്കാം.",
  },
];

const faqs = [
  {
    question: "ആർക്കാണ് ഈ Course അനുയോജ്യം?",
    answer:
      "Excel പഠിക്കാൻ ആഗ്രഹിക്കുന്ന Beginners മുതൽ Excel കൂടുതൽ Professional ആയി ഉപയോഗിക്കാൻ ആഗ്രഹിക്കുന്ന Office Staff, Freshers, Job Seekers, HR, Accounts Professionals എന്നിവർക്ക് ഈ Course അനുയോജ്യമാണ്.",
  },
  {
    question: "Excel അറിയാത്തവർക്ക് ഈ Course പഠിക്കാനാകുമോ?",
    answer:
      "തീർച്ചയായും. Excel Basics മുതൽ Step by Step ആയി പഠിപ്പിക്കുന്നു. Beginners-ന് എളുപ്പത്തിൽ മനസ്സിലാകുന്ന ലളിതമായ മലയാളത്തിലാണ് Classes.",
  },
  {
    question: "Classes Live ആണോ, Recorded ആണോ?",
    answer:
      "ഇത് Recorded Classes ആണ്. നിങ്ങൾക്ക് സൗകര്യമുള്ള സമയത്ത് Mobile അല്ലെങ്കിൽ Laptop ഉപയോഗിച്ച് പഠിക്കാം.",
  },
  {
    question: "Course എത്ര മണിക്കൂർ ദൈർഘ്യമുള്ളതാണ്? Access എത്ര കാലം ലഭിക്കും?",
    answer:
      "10+ Hours ദൈർഘ്യമുള്ള practical training ഇതിൽ ഉൾപ്പെടുന്നു. Enroll ചെയ്യുന്നവർക്ക് Course-ലേക്ക് Lifetime Access ലഭിക്കും.",
  },
  {
    question: "AI Tools സൗജന്യമാണോ?",
    answer:
      "അതെ. പഠനത്തിനായി ChatGPT-യുടെ സൗജന്യ പതിപ്പ് എങ്ങനെ ഫലപ്രദമായി ഉപയോഗിക്കാം എന്നാണ് പ്രധാനമായും പഠിപ്പിക്കുന്നത്. ഇതിനായി അധിക Expenses ആവശ്യമില്ല.",
  },
  {
    question: "Course പൂർത്തിയാക്കിയാൽ Certificate ലഭിക്കുമോ?",
    answer:
      "അതെ. Course വിജയകരമായി പൂർത്തിയാക്കിയാൽ Resume, LinkedIn Profile എന്നിവയിൽ ചേർക്കാവുന്ന QNAYDS Verified Certificate ലഭിക്കും.",
  },
  {
    question: "Refund ലഭിക്കുമോ?",
    answer:
      "ഇത് Instant Access ലഭിക്കുന്ന Digital Course ആയതിനാൽ സാധാരണയായി Refund അനുവദിക്കാറില്ല. Technical Issues അല്ലെങ്കിൽ Payment Problems ഉണ്ടായാൽ ഞങ്ങളുടെ Support Team പരിശോധിച്ച് പരിഹാരം നൽകും.",
  },
  {
    question: "സംശയം വന്നാൽ ആരോട് ചോദിക്കും?",
    answer:
      "പഠനത്തിനിടയിൽ Questions ഉണ്ടായാൽ ഞങ്ങളുടെ WhatsApp Support ടീമുമായി നേരിട്ട് ബന്ധപ്പെടാം. ഞങ്ങളുടെ Mentors നിങ്ങൾക്ക് ആവശ്യമായ സഹായം നൽകും.",
  },
  {
    question: "ഏതെല്ലാം Payment Methods ലഭ്യമാണ്?",
    answer:
      "Google Pay, PhonePe, Paytm, Debit/Credit Cards, Net Banking എന്നിവ വഴി Secure ആയി Payment നടത്താം.",
  },
];

function App() {
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(OFFER_END_TIME));
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [showWhatsappPopup, setShowWhatsappPopup] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(OFFER_END_TIME));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCta(window.scrollY > 180);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openEnrollment = (e) => {
    e.preventDefault();
    setShowEnrollment(true);
  };

  const closeEnrollment = () => {
    setShowEnrollment(false);
  };
  const whatsappMessage =
    "Hi QNAYDS Team, I would like to know more about the Excel Using AI Course.";

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=919074871204&text=${encodeURIComponent(
    whatsappMessage,
  )}&type=phone_number&app_absent=0`;

  if (showPaymentSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl font-bold text-emerald-600">
            ✓
          </div>

          <h1 className="mt-6 text-2xl font-extrabold text-slate-900">
            Payment Successful!
          </h1>

          <p className="mt-2 text-slate-600">
            Excel Using AI Course-ൽ Enroll ചെയ്തതിന് നന്ദി!
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-left">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white">
              ✉
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Check your email
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                course Access വിവരങ്ങളും Activation ലിങ്കും നിങ്ങളുടെ
                Email-ലേക്ക് അയച്ചിട്ടുണ്ട്.
              </p>
            </div>
          </div>

          <button
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700"
            onClick={() => {
              trackMetaEvent("Contact", {
                content_name: "WhatsApp Group",
              });

              window.open(
                "https://chat.whatsapp.com/E9J1e6cdldY4mOyoX6gbzn",
                "_blank",
              );
            }}
          >
            💬 Join WhatsApp Group
          </button>

          <button
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:bg-slate-50"
            onClick={() => setShowPaymentSuccess(false)}
          >
            ← Back to Landing Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app min-h-screen bg-white text-slate-900 antialiased">
      {/* ================= 1. FIRST SCREEN (HERO - SECTION 2) ================= */}
      <section
        className="relative overflow-hidden bg-slate-50 pb-8 pt-4 sm:pb-14 sm:pt-6"
        id="home"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={gridBg}
        />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
          {/* 1. ONE SLIM BANNER: REAL END DATE / COUNTDOWN ONLY */}
          <div className="mb-3 inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full border border-orange-200 bg-orange-50/90 px-3 py-1 text-[11px] font-bold text-orange-800 shadow-sm sm:mb-4 sm:gap-2 sm:px-4 sm:py-1.5 sm:text-sm">
            <span>🔥 Limited-Time Offer</span>
            <span className="h-3 w-px bg-orange-300 hidden sm:inline" />
            <span className="text-slate-700 hidden sm:inline">Offer Ends In:</span>
            <span className="text-slate-700 sm:hidden">Time Left:</span>
            <span className="font-mono font-extrabold text-orange-900">
              {String(timeLeft.hours).padStart(2, "0")}:
              {String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>

          {/* 2. LOGO (SMALL) */}
          <img
            src={logo}
            alt="QNAYDS"
            className="mb-3 h-7 w-auto max-w-[110px] object-contain sm:mb-4 sm:h-9"
          />

          {/* TAG ABOVE HEADLINE (SLIM) */}
          <div className="inline-flex max-w-full items-center justify-center text-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700 sm:px-3.5 sm:text-xs">
            ✦ Job-ൽ ഉപയോഗിക്കാവുന്ന Practical Excel + AI Training
          </div>

          {/* 3. HEADLINE IN MALAYALAM, SMALLER, 2 LINES */}
          <h1 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            <span>AI ഉപയോഗിച്ച് Excel പഠിക്കാൻ ആഗ്രഹമുണ്ടോ?</span>
            <span className="block text-blue-600 sm:mt-1">
              ജോലികൾ കൂടുതൽ എളുപ്പത്തിലും വേഗത്തിലും ചെയ്യാം.
            </span>
          </h1>

          {/* 4. ONE SHORT LINE IN SIMPLE MALAYALAM */}
          <p className="mt-2.5 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-600 sm:text-base">
            Hours എടുക്കുന്ന Excel Tasks, AI ഉപയോഗിച്ച് കുറഞ്ഞ സമയത്തിൽ പൂർത്തിയാക്കാൻ പഠിക്കാം.
          </p>

          {/* 5. SOLID DARK BUTTON: Enroll Now – ₹1,499 */}
          <div className="mt-4 flex w-full max-w-sm flex-col items-center justify-center px-2 sm:px-0">
            <button
              type="button"
              onClick={openEnrollment}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-slate-900 px-6 py-3.5 text-sm sm:text-base font-extrabold text-white shadow-xl shadow-slate-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 sm:px-8"
            >
              <span>Enroll Now – ₹1,499</span>
              <span className="text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

          {/* 6. FACTS LINE: LIVE/RECORDED • HOURS • CERTIFICATE */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-xl border border-blue-100 bg-blue-50/80 px-3 py-1.5 text-[11px] font-semibold text-slate-700 sm:gap-x-2.5 sm:px-3.5 sm:text-sm">
            <span>Recorded Classes</span>
            <span className="text-blue-300">•</span>
            <span>10+ Hours</span>
            <span className="text-blue-300">•</span>
            <span>Lifetime Access</span>
            <span className="text-blue-300">•</span>
            <span className="font-bold text-blue-900">Certificate</span>
          </div>

          {/* TICKS (COMPACT) */}
          <div className="mt-2.5 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs font-medium text-slate-500 sm:gap-x-5">
            <span>✓ Practical Training</span>
            <span>✓ Job-ready Skills</span>
            <span>✓ AI ഉപയോഗിച്ച് Excel</span>
          </div>
        </div>
      </section>

      {/* ================= 2. VIDEO RIGHT BELOW ================= */}
      <section className="bg-white pt-4 pb-14 sm:pt-6 sm:pb-20" id="video">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className={tag}>About the Course</div>

          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
            Excel + AI{" "}
            <span className="text-blue-600">
              എങ്ങനെ പഠിക്കാമെന്ന് നോക്കാം.
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-600">
            Career വളർച്ചയ്ക്ക് Excel + AI എങ്ങനെ ഉപയോഗിക്കാമെന്ന് ഈ Video-യിലൂടെ മനസ്സിലാക്കാം.
          </p>

          <div className="mt-6 sm:mt-7">
            <div className="relative mx-auto w-fit max-w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 bg-slate-950 group">
              <video
                ref={videoRef}
                className="block h-[380px] w-auto max-w-full rounded-2xl object-contain sm:h-[500px] md:h-[560px] sm:rounded-3xl"
                controls={videoStarted}
                playsInline
                poster={excelThumbnail}
                preload="metadata"
                onPlay={() => setVideoStarted(true)}
              >
                Enroll Now
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              {/* MALAYALAM VIDEO COVER OVERLAY (Fixes "2:48" vs "0:48" checklist issue) */}
              {!videoStarted && (
                <div
                  onClick={handlePlayVideo}
                  className="absolute inset-0 flex flex-col justify-between p-3.5 sm:p-6 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50 rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-300 hover:bg-slate-950/40"
                >
                  {/* Top Malayalam Badge */}
                  <div className="flex justify-between items-center">
                    <span className="rounded-full bg-slate-900/90 border border-white/20 px-2.5 py-1 sm:px-3 text-[11px] sm:text-xs font-bold text-white shadow backdrop-blur-md">
                      ✦ Excel + AI course Introduction
                    </span>
                  </div>

                  {/* Center Play Button */}
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500">
                      <svg
                        className="h-7 w-7 sm:h-10 sm:w-10 translate-x-0.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="rounded-full bg-slate-900/80 px-3 py-0.5 sm:px-3.5 sm:py-1 text-xs font-bold text-white backdrop-blur-sm">
                      Video കാണാം
                    </span>
                  </div>

                  {/* Bottom: Malayalam label and actual 0:48 duration */}
                  <div className="flex justify-between items-end">
                    <span className="rounded-md bg-blue-600/90 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-white">
                      48-Second Introduction
                    </span>
                    <span className="rounded-md bg-slate-950 border border-white/20 px-2 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[11px] sm:text-xs font-bold text-white shadow-md">
                      0:48
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* UNDER VIDEO CAPTION (MALAYALAM) */}
            <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-x-5 sm:gap-x-7 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span>
                Practical Training
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span>
                AI-Assisted Learning
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span>
                Real-World Projects
              </div>
            </div>
          </div>
        </section>

      {/* ================= 3. PRICE BOX (WITH FACTS) ================= */}
      <section className="bg-slate-50 py-14 sm:py-24" id="pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-5 shadow-xl sm:p-8 md:p-10">
            <div className="absolute -top-3.5 right-5 sm:right-8 rounded-full bg-amber-400 px-3.5 py-1 sm:px-4 sm:py-1.5 text-xs font-black text-amber-950 shadow-md">
              ₹3,501 Savings
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              What You Will Get in This Course:
            </h2>

            <p className={lead + " mx-auto max-w-2xl"}>
              കരിയറിൽ മാറ്റങ്ങൾ കൊണ്ടുവരാൻ Excel + AI എങ്ങനെ പഠിക്കാമെന്ന് ഈ
              വീഡിയോയിലൂടെ മനസ്സിലാക്കാം.
            </p>

            <div className="mt-12">
              <div className="mx-auto w-fit max-w-full overflow-hidden rounded-3xl shadow-2xl">
                <video
                  className="block h-[500px] w-auto max-w-full rounded-3xl object-contain sm:h-[600px] md:h-[650px]"
                  controls
                  playsInline
                  poster={excelThumbnail}
                  preload="metadata"
                >
                  <source src={courseVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  Excel പ്രായോഗിക പരിശീലനം
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  AI ഉപയോഗിച്ചുള്ള പഠനം
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-emerald-600">✓</span>
                  Real-world Projects
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COURSE VALUE STACK ================= */}

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="relative mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
            <div className="absolute -top-3 right-8 rounded-full bg-amber-400 px-4 py-1.5 text-xs font-extrabold text-amber-950 shadow">
              SAVE ₹3,501
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900">
              Course Value Stack:
            </h2>

            <div className="mt-6 space-y-3">
              {[
                "Practical Excel + AI Training",
                "Real-World Excel Projects",
                "AI-Powered Excel Workflows",
                "Data Analysis & Dashboards",
                "Job-ready Excel Skills",
                "Certificate on Completion",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-medium text-slate-700"
                >
                  <span className="text-emerald-600">✓</span>
                  {item}
                </div>
              ))}
            </div>

            {/* FACTS LINE NEXT TO / ABOVE PRICE */}
            <div className="mt-6 sm:mt-7 rounded-2xl border border-blue-100 bg-blue-50/70 p-3 sm:p-3.5 text-center text-xs font-semibold text-slate-700 sm:text-sm">
              Recorded Classes • 10+ Hours • Lifetime Access •
              Certificate
            </div>

            <div className="mt-6 flex flex-wrap items-end justify-between gap-3 border-t border-dashed border-slate-200 pt-6">
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                  Regular Price
                </span>

                <div className="mt-1">
                  <del className="text-5xl font-extrabold text-slate-900 sm:text-6xl">
                    ₹5,000
                  </del>
                </div>
              </div>

              {/* Today's Price */}
              <div className="text-right">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Today’s Special Offer
                </span>

                <strong className="mt-1 block text-4xl font-extrabold text-blue-600 sm:text-5xl">
                  ₹1,499
                </strong>
              </div>
            </div>

            <button
              type="button"
              onClick={openEnrollment}
              className="mt-6 group inline-flex w-full items-center justify-between gap-4 rounded-full bg-blue-600 px-6 py-4 text-left text-base font-extrabold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl animate-pulse"
            >
              <span>Enroll Now – ₹1,499</span>
              <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs font-semibold text-slate-500 sm:gap-x-5">
              <span>✓ Instant Access</span>
              <span>✓ Practical Training</span>
              <span>✓ Beginner-Friendly</span>
            </div>
          </div>
        </section>

      {/* ================= 4. WHO THIS IS FOR ================= */}
      <section className="bg-white py-16 sm:py-24" id="who-is-this-for">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className={tag}>Who Is This For?</div>

            <h2 className={h2 + " mt-4"}>
              ഈ course{" "}
              <span className="text-blue-600">നിങ്ങൾക്കുള്ളതാണോ?</span>
            </h2>

            <p className={lead}>
              Excel ഉപയോഗിച്ച് Work Skills മെച്ചപ്പെടുത്താൻ ആഗ്രഹിക്കുന്നവർക്ക്.
            </p>
          </div>
        </section>
        {/* ================= MEET YOUR MENTOR ================= */}

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            {/* Section Heading */}
            <div className="mx-auto max-w-2xl text-center">
              <div className={tag}>Meet Your Mentor</div>

              <h2 className={h2 + " mt-4"}>
                Learn From Someone
                <br />
                <span className="text-blue-600">
                  Who Understands Your Journey.
                </span>
              </h2>

      <h2 className={h2 + " mt-4"}>
        Learn From Someone
        <br />
        <span className="text-blue-600">
          Who Understands Your Journey.
        </span>
      </h2>

      <p className={lead}>
        Practical Excel + AI skills പഠിക്കാൻ നിങ്ങളെ step-by-step ആയി guide
        ചെയ്യുന്ന mentor.
      </p>
    </div>

    {/* Mentor Card */}
    <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

      <div className="grid grid-cols-1 items-center gap-10 p-7 sm:p-10 lg:grid-cols-[280px_1fr] lg:gap-14">

        {/* Mentor Photo */}
        <div className="flex justify-center">
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-xl"></div>

            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-blue-500 bg-white p-1 shadow-xl sm:h-64 sm:w-64">
              <img
                src={mentorPhoto}
                alt="Excel + AI Mentor"
                className="h-full w-full rounded-full object-cover object-[center_20%]"
              />
            </div>

            {/* Mentor Card */}
            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <div className="grid grid-cols-1 items-center gap-10 p-7 sm:p-10 lg:grid-cols-[280px_1fr] lg:gap-14">
                {/* Mentor Photo */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-xl"></div>

                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-blue-500 bg-white p-1 shadow-xl sm:h-64 sm:w-64">
                      <img
                        src={mentorPhoto}
                        alt="Excel + AI Mentor"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Mentor Details */}
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    Midhun
                  </h3>

                  <p className="mt-2 text-lg font-bold text-blue-600">
                    Excel + AI Trainer
                  </p>

                  {/* Highlights */}
                  <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <span className="text-xl">🏆</span>
                      <span className="text-sm font-bold text-slate-700">
                        Excel & AI Expert
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <span className="text-xl">📊</span>
                      <span className="text-sm font-bold text-slate-700">
                        Practical Training
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <span className="text-xl">👥</span>
                      <span className="text-sm font-bold text-slate-700">
                        Learner-focused Teaching
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <span className="text-xl">💼</span>
                      <span className="text-sm font-bold text-slate-700">
                        Real-world Skills
                      </span>
                    </div>
                  </div>

                  {/* Mentor Message */}
                  <div className="mt-7 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-5 text-left">
                    <p className="text-sm italic leading-relaxed text-slate-700 sm:text-base">
                      "Excel formulas മാത്രം പഠിപ്പിക്കുകയല്ല — real-world
                      work-ൽ Excel + AI എങ്ങനെ smart ആയി ഉപയോഗിക്കാം എന്നതാണ് ഈ
                      program-ന്റെ focus."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================= REVIEWS ================= */}

          {/* JOBS LINE & DISCLAIMER (ITEM 7 FIX) */}
          <div className="mt-8 sm:mt-10 mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6 text-center">
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
              Excel Skills Office, Operations, HR, Accounts, MIS, Data തുടങ്ങിയ മേഖലകളിൽ പ്രയോജനപ്പെടുന്നു.
            </p>
            <p className="mt-2 text-[11px] sm:text-xs text-slate-500 italic">
              ശ്രദ്ധിക്കുക: ഈ Course ജോലി ഉറപ്പ് നൽകുന്നില്ല; ജോലിക്ക് ആവശ്യമായ
              പ്രായോഗിക Skills കാര്യക്ഷമമായി പഠിപ്പിക്കുന്നു.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 5. TODAY'S CHALLENGE (PROBLEM) ================= */}
      <section className="bg-slate-50 py-16 sm:py-24" id="challenge">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className={tag}>Today’s Challenges</div>

              <p className={lead}>
                Practical learning experience-നെ അടിസ്ഥാനമാക്കിയുള്ള sample
                feedback.
              </p>
            </div>

            <p className={lead}>
              Data കൂടുമ്പോഴും Reports സങ്കീർണ്ണമാകുമ്പോഴും
              Spreadsheet Tasks-നായി കൂടുതൽ സമയം ചെലവഴിക്കേണ്ടി വരാം.
            </p>

                {
                  initial: "N",
                  name: "Nimisha K.",
                  text: "AI ഉപയോഗിച്ച് Excel work കൂടുതൽ എളുപ്പമാക്കാൻ കഴിയുമെന്ന് ഈ course വഴി മനസ്സിലായി. Especially formulas, data analysis എന്നിവ പഠിച്ചത് വളരെ helpful ആയിരുന്നു.",
                },

                {
                  initial: "V",
                  name: "Vishnu R.",
                  text: "Office-ൽ ദിവസവും ചെയ്യുന്ന Excel tasks കുറച്ച് സമയം കൊണ്ട് ചെയ്യാൻ കഴിയുന്ന രീതിയിലുള്ള practical skills ആണ് ഇവിടെ പഠിച്ചത്. Course വളരെ useful ആയി തോന്നി.",
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                      {review.initial}
                    </div>

                    <div>
                      <strong className="block text-sm font-bold text-slate-900">
                        {review.name}
                      </strong>
                      {review.sub && (
                        <span className="text-xs text-slate-400">
                          {review.sub}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 text-amber-400">★★★★★</div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

          {/* NUMBER CARDS MARKED "Example Only" (AS PER DEVELOPER CHECKLIST C) */}
          <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                Office Task Examples
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-slate-500">
                Example Only
              </span>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {learners.map((learner) => (
                <div
                  key={learner.title}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                    ✓
                  </span>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {learner.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {learner.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROBLEM ================= */}

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <div className={tag}>ഇന്നത്തെ വെല്ലുവിളി</div>

              <h2 className={h2 + " mt-4"}>
                Basic Excel മാത്രം
                <br />
                <span className="text-blue-600">എപ്പോഴും മതിയാകില്ല.</span>
              </h2>

              <p className={lead}>
                Data കൂടുമ്പോഴും reports കൂടുതൽ complex ആകുമ്പോഴും spreadsheet-ൽ
                കൂടുതൽ സമയം ചെലവഴിക്കേണ്ടി വരാം.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Reports തയ്യാറാക്കാൻ കൂടുതൽ സമയം",
                  "Data മനസ്സിലാക്കാൻ ബുദ്ധിമുട്ട്",
                  "Repetitive Excel work",
                  "Interview-ready skills കുറവ്",
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-700"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-slate-100 text-xs font-bold text-slate-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Data Volume", value: "10,000+", sub: "Rows" },
                {
                  label: "Reports",
                  value: "20+",
                  sub: "Monthly",
                  highlight: true,
                },
                { label: "Routine Task", value: "60%", sub: "Can be automated" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={
                    "flex flex-col rounded-2xl border p-4 text-center shadow-sm " +
                    (stat.active
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-200 bg-white text-slate-900")
                  }
                >
                  <span
                    className={
                      "text-xs font-semibold " +
                      (stat.active ? "text-blue-100" : "text-slate-400")
                    }
                  >
                    {stat.label}
                  </span>
                  <strong className="mt-3 text-2xl font-extrabold">
                    {stat.value}
                  </strong>
                  <small
                    className={
                      "mt-1 text-[11px] " +
                      (stat.active ? "text-blue-100" : "text-slate-400")
                    }
                  >
                    {stat.sub}
                  </small>
                </div>
              ))}
            </div>

            <p className="mt-4 sm:mt-5 text-center text-xs leading-relaxed text-slate-500">
              ഈ Challenges കൈകാര്യം ചെയ്ത് Excel Tasks വേഗത്തിൽ പൂർത്തിയാക്കാൻ AI സഹായിക്കുന്നു.
            </p>
          </div>
        </section>

      {/* ================= 6. WHAT YOU'LL LEARN + PRACTICAL PROJECTS ================= */}
      <section className="bg-slate-900 py-16 sm:py-24 text-white" id="modules">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
              Course Syllabus
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              What You Will <span className="text-blue-400">Learn</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Excel + AI ഉപയോഗിച്ച് Job-ready Practical Skills Step by Step പഠിക്കാം.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {modules.map((mod) => (
              <div
                key={mod.num}
                className={
                  "rounded-2xl border p-5 sm:p-6 flex flex-col justify-between h-full " +
                  (mod.featured
                    ? "border-blue-500 bg-blue-950/40 ring-1 ring-blue-500"
                    : "border-slate-800 bg-slate-800/60")
                }
              >
                <div>
                  <span className="font-mono text-[11px] font-bold tracking-wider text-blue-400">
                    {mod.num}
                  </span>

                  <h3 className="mt-1 text-lg font-bold text-white">
                    {mod.title}
                  </h3>

                  <ul className="mt-4 space-y-2">
                    {mod.topics.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-400"></span>
                        {t}
                      </li>
                    ))}
                  </ul>

                  {mod.outcome && (
                    <div className="mt-5 border-t border-slate-700 pt-4 text-xs text-slate-400">
                      Outcome:{" "}
                      <strong className="text-slate-200">{mod.outcome}</strong>
                    </div>
                  )}
                </div>

                <div className="mt-6 border-t border-slate-700/80 pt-3 text-xs text-slate-400">
                  <span className="text-blue-300 font-semibold">Outcome:</span>{" "}
                  {mod.outcome}
                </div>
              </div>
            ))}
          </div>

          {/* PRACTICAL PROJECTS SECTION (NO BROKEN "PROJECT ->" LINKS) */}
          <div className="mt-16 sm:mt-20">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
                Practical Projects
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                പഠിച്ച കാര്യങ്ങൾ Projects ആയി പ്രയോഗിക്കാം.
              </h3>

              <p className="mt-3 text-sm text-slate-400 sm:text-base">
                തിയറി മാത്രമല്ല. പഠിച്ച Skills ഉപയോഗിച്ച് Practical Spreadsheet Projects നിർമ്മിക്കാം.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
              {projects.map((project) => (
                <div
                  key={project.number}
                  className="rounded-2xl border border-slate-800 bg-slate-800/40 p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-blue-400/50 hover:bg-slate-800/80 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-blue-400">
                        Project {project.number}
                      </span>
                      <span className="text-lg">📊</span>
                    </div>

        {/* ================= LEARNING PATH ================= */}

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <div className={tag}>Job-ready Skill Path</div>

            <h2 className={h2 + " mt-4"}>
              പഠിക്കുക.
              <span className="text-blue-600"> പരിശീലിക്കുക.</span>
              <br />
              Build ചെയ്യുക.
            </h2>

            <div className="relative mt-14 grid grid-cols-1 gap-8 sm:grid-cols-5">
              <div className="absolute left-0 right-0 top-5 hidden h-px bg-slate-200 sm:block"></div>

              {[
                ["01", "പഠിക്കുക", "Concepts മനസ്സിലാക്കുക"],
                ["02", "പരിശീലിക്കുക", "Practical tasks ചെയ്യുക"],
                ["03", "Build ചെയ്യുക", "Real projects നിർമ്മിക്കുക"],
                ["04", "തയ്യാറാകുക", "Interview skills മെച്ചപ്പെടുത്തുക"],
                ["05", "Demonstrate ചെയ്യുക", "നിങ്ങളുടെ skills തെളിയിക്കുക"],
              ].map(([num, title, desc]) => (
                <div key={num} className="relative flex flex-col items-center">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {num}
                  </span>
                  <strong className="mt-4 text-sm font-bold text-slate-900">
                    {title}
                  </strong>
                  <p className="mt-1 text-xs text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* ================= 7. MEET YOUR MENTOR (WITH PROOF) ================= */}
      <section className="bg-slate-50 py-16 sm:py-24" id="mentor">
  <div className="mx-auto max-w-5xl px-4 sm:px-6">
    <div className="mx-auto max-w-2xl text-center">
      <div className={tag}>Meet Your Mentor</div>

              <h2 className={h2 + " mt-4"}>
                Learn Excel + AI with{" "}
                <span className="text-blue-600">the Right Mentor.</span>
              </h2>

      <p className={lead}>
        Excel + AI Practical Skills Step by Step പഠിപ്പിക്കുന്ന Mentor.
      </p>
    </div>

          <div className="mt-10 sm:mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 md:p-10 shadow-xl">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr] sm:gap-12">
              {/* Photo */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-xl" />
                  <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-blue-500 bg-white p-1 shadow-xl sm:h-60 sm:w-60">
                    <img
                      src={mentorPhoto}
                      alt="Midhun - Excel + AI Trainer"
                      className="h-full w-full rounded-full object-cover object-[center_20%]"
                    />
                  </div>
                </div>
              </div>

              {/* Details & Proof */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  Midhun 
                </h3>

                <p className="mt-1 text-base font-bold text-blue-600">
                  Excel + AI Trainer
                </p>

                {/* Proof Badges */}
                <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2.5 sm:gap-2.5 sm:p-3">
                    <span className="text-base sm:text-lg">🏆</span>
                    <span className="text-[11px] sm:text-sm font-bold text-slate-800 leading-tight">
                      5+ Years of Experience
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2.5 sm:gap-2.5 sm:p-3">
                    <span className="text-base sm:text-lg">👥</span>
                    <span className="text-[11px] sm:text-sm font-bold text-slate-800 leading-tight">
                      2,000+ Learners Trained
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2.5 sm:gap-2.5 sm:p-3">
                    <span className="text-base sm:text-lg">📊</span>
                    <span className="text-[11px] sm:text-sm font-bold text-slate-800 leading-tight">
                      Practical Training
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2.5 sm:gap-2.5 sm:p-3">
                    <span className="text-base sm:text-lg">💼</span>
                    <span className="text-[11px] sm:text-sm font-bold text-slate-800 leading-tight">
                      Real-world Projects
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-6 rounded-2xl border-l-4 border-blue-600 bg-blue-50/70 p-3.5 sm:p-4 text-left">
                  <p className="text-xs sm:text-sm italic leading-relaxed text-slate-700">
                    "Excel Formulas മാത്രം പഠിപ്പിക്കുകയല്ല. യഥാർത്ഥ ജോലിയിൽ
                    Excel-ഉം AI-യും എങ്ങനെ ബുദ്ധിപൂർവ്വം ഉപയോഗിക്കാം എന്നതാണ് ഈ
                    course-ന്റെ ശ്രദ്ധ."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. CERTIFICATE ================= */}
      <section className="bg-white py-16 sm:py-24" id="certificate">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-slate-900 px-5 py-10 text-white sm:px-10 sm:py-16 lg:grid-cols-2 lg:gap-12">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
                Certification
              </div>

              <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                പഠനം പൂർത്തിയാക്കിയതിന്{" "}
                <span className="text-blue-400">ഒരു Certificate.</span>
              </h2>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                Course വിജയകരമായി പൂർത്തിയാക്കിയാൽ QNAYDS Verified Certificate ലഭിക്കും. ഇത് Resume-ലും LinkedIn Profile-ലും ചേർക്കാം.
              </p>

              <button
                type="button"
                onClick={openEnrollment}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 animate-[pulse_1.2s_ease-in-out_infinite]"
              >
                <span>Enroll Now – ₹1,499</span>
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl border-2 border-blue-400/40 bg-slate-800 p-8 text-center">
                <span className="text-2xl text-blue-400">✦</span>

                <small className="mt-3 block text-[11px] font-bold tracking-wide text-slate-400">
                  CERTIFICATE OF COMPLETION
                </small>

                <h3 className="mt-3 text-2xl font-extrabold text-white">
                  Excel + AI
                </h3>

                <p className="mt-1 text-xs font-medium text-blue-300">
                  Practical Excel & AI Training
                </p>

                <div className="mx-auto mt-6 h-px w-32 bg-slate-600"></div>

                <span className="mt-2 block text-xs text-slate-500">
                  വിദ്യാർത്ഥിയുടെ പേര്
                </span>
              </div>

              {/* Approved caption */}
              <span className="mt-3 text-xs text-slate-400 font-medium">
                Sample Certificate
              </span>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}

      {/* ================= 10. FAQ ================= */}
      <section className="bg-white py-16 sm:py-24" id="faq">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,320px)_1fr]">
          <div>
            <div className={tag}>Frequently Asked Questions</div>

            <h2 className={h2 + " mt-4"}>
              Frequently Asked Questions{" "}
              <span className="text-blue-600">(FAQ)</span>
            </h2>

            <p className={lead}>
              Course-നെക്കുറിച്ച് അറിയേണ്ട പ്രധാന കാര്യങ്ങൾ.
            </p>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-xs sm:text-sm text-slate-700">
              <p className="font-semibold text-blue-900">Still Have Questions?</p>
              <p className="mt-1 text-slate-600">
                ഞങ്ങളുടെ WhatsApp Support Team-നെ നേരിട്ട് Contact ചെയ്യാം.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
              >
                💬 Ask on WhatsApp →
              </a>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3.5 sm:px-5 sm:py-4 shadow-sm transition-all open:bg-white open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 sm:gap-4 text-sm font-bold text-slate-900 marker:content-none">
                  <span className="font-mono text-xs font-bold text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong className="flex-1 font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {faq.question}
                  </strong>

                  <span className="text-xl text-slate-400 transition-transform duration-300 group-open:rotate-45 font-light">
                    +
                  </span>
                </summary>

                <p className="mt-3 pl-0 sm:pl-7 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 11. ONE FINAL BUTTON + BAND ================= */}
      <section className="bg-slate-900 py-16 sm:py-20 text-white text-center" id="final-cta">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
            Ready to Get Started?
          </div>

          <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold leading-tight text-white md:text-4xl">
            Excel + AI പഠനം{" "}
            <span className="text-blue-400">ഇന്നുതന്നെ ആരംഭിക്കൂ.</span>
          </h2>

          <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-400 md:text-base">
            നിങ്ങളുടെ Learning Journey ഇന്ന് തുടങ്ങാം. Excel + AI Practical Course-ൽ ചേരാൻ താഴെയുള്ള Button ഉപയോഗിക്കുക.
          </p>

          <div className="mt-8 flex justify-center w-full max-w-sm mx-auto">
            <button
              type="button"
              onClick={openEnrollment}
              className={ctaPrimary + " mt-7"}
            >
              <span>Enroll Now – ₹1,499</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

          <div className="mt-6 flex flex-wrap justify-center gap-x-5 sm:gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <span>✓ Practical Training</span>
            <span>✓ Real-World Projects</span>
            <span>✓ Job-ready Skills</span>
          </div>
        </section>

      {/* ================= 12. COMPLETE TRUST FOOTER ================= */}
      <footer
        ref={footerRef}
        className="border-t border-slate-200 bg-slate-50 pb-28 pt-12 text-slate-700 sm:pb-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Top section: Logo, description, and contact info */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
            {/* Column 1: Brand & Malayalam line */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <a href="#home" className="inline-block">
                <img
                  src={logo}
                  alt="QNAYDS"
                  className="h-8 sm:h-9 w-auto max-w-[120px] object-contain"
                />
              </a>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 max-w-sm">
                Excel + AI ഉപയോഗിച്ച് Practical, Career-focused Skills പഠിക്കാം.
              </p>

            {/* Column 2: Quick Links & Policies */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Policies
              </h4>
              <div className="mt-3 flex flex-wrap justify-center gap-x-3.5 gap-y-2 text-xs font-medium text-slate-600 md:justify-start">
                <button
                  type="button"
                  onClick={() => setActivePolicyModal("terms")}
                  className="hover:text-blue-600 hover:underline"
                >
                  Terms & Conditions
                </button>
                <span className="text-slate-300">•</span>
                <button
                  type="button"
                  onClick={() => setActivePolicyModal("privacy")}
                  className="hover:text-blue-600 hover:underline"
                >
                  Privacy Policy
                </button>
                <span className="text-slate-300">•</span>
                <button
                  type="button"
                  onClick={() => setActivePolicyModal("refund")}
                  className="hover:text-blue-600 hover:underline"
                >
                  Refund Policy
                </button>
                <span className="text-slate-300">•</span>
                <button
                  type="button"
                  onClick={() => setActivePolicyModal("contact")}
                  className="hover:text-blue-600 hover:underline"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Column 3: Contact Details (Trust Item 4) */}
            <div className="text-center text-xs text-slate-600 md:text-left flex flex-col items-center md:items-start">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Customer Support
              </h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 hover:underline"
                  >
                    <span>💬 WhatsApp:</span> +91 90748 71204
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@qnayds.in"
                    className="inline-flex items-center gap-1.5 hover:text-blue-600 hover:underline"
                  >
                    <span>✉ Email:</span> support@qnayds.in
                  </a>
                </li>
                <li className="text-slate-500">
                  <span>📍 Address:</span> QNAYDS Academy, Kerala, India
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright line */}
          <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
            <p>© 2026 QNAYDS ACADEMY. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ================= 13. STICKY FLOATING CTA BAR ================= */}
      {showFloatingCta && (
        <div className="fixed inset-x-3 bottom-3 z-[9998] mx-auto max-w-4xl rounded-2xl border border-blue-200 bg-white/95 px-3.5 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] backdrop-blur-md sm:bottom-4 sm:px-6 sm:py-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            {/* Offer + Countdown (No fake 20 seats) */}
            <div className="flex items-center justify-between gap-2 sm:justify-start sm:gap-4">
              <span className="text-xs font-bold text-slate-900 shrink-0">
                🔥 Limited-Time Offer
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <span className="hidden sm:inline">Offer Ends In:</span>
                <span className="sm:hidden text-[11px]">Time Left:</span>
                <span className="rounded bg-slate-900 px-1.5 py-0.5 sm:px-2 sm:py-1 font-mono text-xs font-bold text-white">
                  {String(timeLeft.hours).padStart(2, "0")}:
                  {String(timeLeft.minutes).padStart(2, "0")}:
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-8 border-t border-dashed border-slate-200 pt-6">
                <div className="flex items-end justify-between">
                  {/* Regular Price */}
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wide text-slate-500">
                      REGULAR PRICE
                    </div>

                    <div className="mt-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                      <del>₹5,000</del>
                    </div>
                  </div>

                  {/* Today's Price */}
                  <div className="text-right">
                    <div className="text-sm font-bold uppercase tracking-wide text-slate-500">
                      TODAY
                    </div>

                    <div className="mt-2 text-4xl font-extrabold text-blue-600 sm:text-5xl">
                      ₹1,499
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={openEnrollment}
                className={ctaPrimary + " mt-6 w-full"}
              >
                <span>Enroll Now – ₹1,499</span>
                <span>→</span>
              </button>

              <p className="mt-4 text-center text-xs text-slate-400">
                Your learning journey starts today.
              </p>
            </div>
          </div>
        </section>
      </main>

      <EnrollmentFlow onEnroll={openEnrollment} whatsappUrl={whatsappUrl} />

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-200 bg-slate-50 pb-24 pt-12 sm:pb-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <a href="#home" className="flex items-center">
              <img
                src={logo}
                alt="QNAYDS"
                className="block h-10 w-auto max-w-[130px] object-contain"
              />
            </a>

            <p className="max-w-xs text-sm text-slate-500">
              Excel + AI ഉപയോഗിച്ച് practical, career-focused skills പഠിക്കാം.
            </p>
          </div>

          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600">
              Features
            </a>
            <a href="#learn" className="hover:text-blue-600">
              Learn
            </a>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
            <a href="#faq" className="hover:text-blue-600">
              FAQ
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center gap-2 border-t border-slate-200 px-4 pt-6 text-center text-xs text-slate-400 sm:flex-row sm:justify-between sm:text-left">
          <span>© 2026 Excel AI. എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.</span>
          <span>Excel + AI Learning Program</span>
        </div>
      </footer>

      {/* ================= STICKY CTA ================= */}

      {showFloatingCta && (
        <div
          className="
      fixed inset-x-3 bottom-3 z-[9998]
      rounded-xl border border-blue-200
      bg-white/95
      px-3 py-2.5
      shadow-[0_-3px_15px_rgba(0,0,0,0.08)]
      backdrop-blur-md
      sm:inset-x-4 sm:bottom-4
      sm:rounded-2xl sm:px-5 sm:py-3
    "
        >
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
            {/* ================= PRICE + ENROLL ================= */}
            <div className="flex items-center justify-between gap-3 sm:order-2 sm:w-auto sm:justify-end sm:gap-5">
              {/* PRICE */}
              <div className="flex items-center gap-1.5 sm:flex-col sm:items-end sm:gap-0">
                <del className="text-base font-bold text-blackS sm:text-lg">
                  ₹5,000
                </del>

                <strong className="text-lg font-extrabold text-blue-600 sm:text-2xl">
                  ₹1,499
                </strong>
              </div>

              {/* ENROLL BUTTON */}
              <button
                type="button"
                onClick={openEnrollment}
                className="
            inline-flex shrink-0
            items-center justify-center
            gap-1.5
            rounded-full
            bg-blue-600
            px-4 py-2.5
            text-[11px] font-extrabold text-white
            shadow-md shadow-blue-500/25
            transition-all duration-300
            hover:bg-blue-700
            animate-[pulse_1s_ease-in-out_infinite]
            sm:px-6 sm:py-3
            sm:text-sm
          "
              >
                Enroll Now
                <span className="text-sm sm:text-lg">→</span>
              </button>
            </div>

            {/* ================= OFFER + COUNTDOWN ================= */}
            <div className="flex min-w-0 items-center justify-between gap-2 sm:order-1 sm:justify-start sm:gap-5">
              {/* LIMITED OFFER */}
              <strong className="whitespace-nowrap text-[10px] font-bold text-slate-900 sm:text-sm">
                Limited offer • {LIMITED_SEATS} seats left
              </strong>

              {/* COUNTDOWN */}
              <div className="flex shrink-0 items-center gap-1">
                <span className="text-sm sm:text-lg">⏳</span>

                <span className="whitespace-nowrap text-[10px] font-semibold text-slate-600 sm:text-xs">
                  Offer ends in
                </span>

                <span className="rounded-md bg-slate-900 px-1.5 py-1 text-[10px] font-bold text-white sm:px-2.5 sm:py-1.5 sm:text-xs">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>

                <span className="text-[10px] font-bold text-slate-500">:</span>

                <span className="rounded-md bg-slate-900 px-1.5 py-1 text-[10px] font-bold text-white sm:px-2.5 sm:py-1.5 sm:text-xs">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>

                <span className="text-[10px] font-bold text-slate-500">:</span>

                <span className="rounded-md bg-slate-900 px-1.5 py-1 text-[10px] font-bold text-white sm:px-2.5 sm:py-1.5 sm:text-xs">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* ================= WHATSAPP FLOATING ================= */}

      {/* WHATSAPP FLOATING BUTTON */}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact QNAYDS on WhatsApp"
        className="fixed bottom-[110px] right-5 z-[9996] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-105 sm:right-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-8 w-8 fill-current"
          aria-hidden="true"
        >
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.59 4.44 1.7 6.3L3 29l6.9-1.65A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 23.7c-2.08 0-4.11-.56-5.88-1.62l-.42-.25-4.1.98.98-4-.27-.43A10.67 10.67 0 1 1 16 26.7Zm5.86-7.98c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.81 1.04-.99 1.25-.18.21-.36.24-.68.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.59-1.9-1.77-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.36.47-.54.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.76.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>

      {/* ================= 15. POLICY MODALS ================= */}
      {activePolicyModal && (
        <div
          className="fixed inset-0 z-[10001] flex items-center justify-center overflow-y-auto bg-slate-900/60 p-3 sm:p-4 backdrop-blur-sm"
          onClick={() => setActivePolicyModal(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 sm:pb-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {activePolicyModal === "privacy" && "Privacy Policy (Privacy Policy)"}
                {activePolicyModal === "terms" && "Terms & Conditions (Terms & Conditions)"}
                {activePolicyModal === "refund" && "Refund Policy (Refund Policy)"}
                {activePolicyModal === "contact" && "Contact Us (Contact Us)"}
              </h3>
              <button
                type="button"
                className="h-8 w-8 rounded-full text-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 flex items-center justify-center"
                onClick={() => setActivePolicyModal(null)}
              >
                ✕
              </button>
            </div>

            <div className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 space-y-3">
              {activePolicyModal === "privacy" && (
                <>
                  <p>
                    QNAYDS Academy-യിൽ നിങ്ങളുടെ സ്വകാര്യത ഞങ്ങൾ അതീവ പ്രാധാന്യത്തോടെ
                    സംരക്ഷിക്കുന്നു.
                  </p>
                  <h4 className="font-bold text-slate-800">Information We Collect:</h4>
                  <p>
                    നിങ്ങൾ course-ൽ Enroll ചെയ്യുമ്പോൾ നൽകുന്ന പേര്, Email Address,
                    Phone Number എന്നിവ course Access വിവരങ്ങൾ അയക്കാനും Support നൽകാനും
                    മാത്രമാണ് ഉപയോഗിക്കുന്നത്.
                  </p>
                  <h4 className="font-bold text-slate-800">Payment Security:</h4>
                  <p>
                    എല്ലാ സാമ്പത്തിക ഇടപാടുകളും Secureമായ Razorpay Payment ഗേറ്റ്‌വേ
                    വഴിയാണ് നടക്കുന്നത്. നിങ്ങളുടെ കാർഡ്, ബാങ്ക് വിവരങ്ങൾ ഞങ്ങൾ
                    സൂക്ഷിക്കുന്നില്ല.
                  </p>
                  <h4 className="font-bold text-slate-800">Information Sharing:</h4>
                  <p>
                    ഞങ്ങൾ നിങ്ങളുടെ വ്യക്തിഗത വിവരങ്ങൾ യാതൊരു കാരണവശാലും മൂന്നാം
                    കക്ഷികൾക്ക് വിൽക്കുകയോ കൈമാറുകയോ ചെയ്യില്ല.
                  </p>
                </>
              )}

              {activePolicyModal === "terms" && (
                <>
                  <p>
                    Excel Using AI course-ൽ ചേരുന്നതിലൂടെ താഴെ പറയുന്ന
                    നിബന്ധനകൾക്ക് നിങ്ങൾ സമ്മതം നൽകുന്നു:
                  </p>
                  <h4 className="font-bold text-slate-800">Usage Rights:</h4>
                  <p>
                    course കണ്ടന്റുകൾ, Videoകൾ, പ്രോജക്റ്റ് ഫയലുകൾ എന്നിവ വ്യക്തിഗത
                    പഠന ആവശ്യങ്ങൾക്ക് മാത്രമുള്ളതാണ്. ഇത് അനധികൃതമായി പങ്കിടുകയോ
                    പുനർSales നടത്തുകയോ ചെയ്യാൻ പാടില്ല.
                  </p>
                  <h4 className="font-bold text-slate-800">Access & Certificate:</h4>
                  <p>
                    വിജയകരമായി ഫീസ് അടയ്ക്കുന്ന Learnersക്ക് course-ലേക്ക് Lifetime
                    ആക്സസും, പൂർത്തിയാക്കുമ്പോൾ QNAYDS സർട്ടിഫിക്കറ്റും ലഭിക്കുന്നതാണ്.
                  </p>
                </>
              )}

              {activePolicyModal === "refund" && (
                <>
                  <p>
                    Excel Using AI Instantം Access ലഭിക്കുന്ന Digital ലേണിംഗ് കോഴ്സാണ്.
                  </p>
                  <h4 className="font-bold text-slate-800">Refund Policy:</h4>
                  <p>
                    Payment വിജയകരമായി പൂർത്തിയായ ഉടൻ തന്നെ Login വിവരങ്ങളും Digital
                    കണ്ടന്റുകളിലേക്കുള്ള ആക്സസും ലഭിക്കുന്നതിനാൽ, Digital പ്രോഡക്റ്റുകൾക്ക്
                    സാധാരണയായി Refund അനുവദിക്കുന്നതല്ല.
                  </p>
                  <h4 className="font-bold text-slate-800">Support & Help:</h4>
                  <p>
                    Technical തടസ്സങ്ങൾ മൂലമോ അബദ്ധത്തിലോ ഇരട്ടി Payment നടക്കുകയാണെങ്കിൽ
                    support@qnayds.in അല്ലെങ്കിൽ WhatsApp വഴി ബന്ധപ്പെട്ടാൽ 24
                    മണിക്കൂറിനകം പരിശോധിച്ച് പരിഹാരം കാണുന്നതാണ്.
                  </p>
                </>
              )}

              {activePolicyModal === "contact" && (
                <>
                  <p>
                    Course അല്ലെങ്കിൽ Enrollment സംബന്ധിച്ച് എന്തെങ്കിലും
                    സംശയങ്ങളുണ്ടെങ്കിൽ ഞങ്ങളെ ബന്ധപ്പെടാം:
                  </p>
                  <div className="rounded-xl bg-slate-50 p-4 space-y-2 border border-slate-100">
                    <p>
                      <strong>WhatsApp:</strong>{" "}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 underline font-semibold"
                      >
                        +91 90748 71204
                      </a>
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:support@qnayds.in"
                        className="text-blue-600 underline font-semibold"
                      >
                        support@qnayds.in
                      </a>
                    </p>
                    <p>
                      <strong>Office Address:</strong> QNAYDS Academy, Kerala, India
                    </p>
                    <p className="text-xs text-slate-500">
                      പ്രവർത്തന സമയം: തിങ്കൾ മുതൽ ശനി വരെ (രാവിലെ 9:00 - വൈകുന്നേരം 7:00)
                    </p>
                  </div>
                </>
              )}
            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-full bg-slate-900 py-3 text-xs sm:text-sm font-bold text-white hover:bg-slate-800"
              onClick={() => setActivePolicyModal(null)}
            >
              ശരി, മനസ്സിലായി
            </button>
          </div>
        </div>
      )}

      {/* ================= 16. ENROLLMENT MODAL ================= */}
      {showEnrollment && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-y-auto bg-slate-900/60 p-4 backdrop-blur-sm"
          onClick={closeEnrollment}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-slate-200 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}

            <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
                  Complete Your Enrollment
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Enter your details to continue securely.
                </p>
              </div>

              <button
                type="button"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                onClick={closeEnrollment}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* MODAL BODY */}

            <div className="px-6 py-6">
              {/* COURSE PRICE BOX */}

              <div className="flex items-center justify-between rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4">
                <div>
                  <strong className="block text-xs sm:text-sm font-bold text-slate-900">
                    Excel + AI Practical Course
                  </strong>
                  <del className="text-xs text-slate-400">₹5,000</del>
                  <div className="mt-1 text-xl font-extrabold text-blue-600">
                    ₹1,499
                  </div>
                </div>

                <span className="rounded-full bg-amber-400 px-2.5 py-1 sm:px-3 text-xs font-bold text-amber-950">
                  ₹3,501 Savings
                </span>
              </div>

              {/* FORM */}

              <form
                className="mt-6 space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();

                  try {
                    const formData = new FormData(e.currentTarget);

                    const name = formData.get("name");
                    const email = formData.get("email");
                    const phone = formData.get("phone");

                    if (!name || !email || !phone) {
                      alert("Please fill all details.");
                      return;
                    }

                    // 1. Create Razorpay order
                    const response = await fetch(
                      `${API_URL}/landing/create-order`,
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          name,
                          email,
                          phone,
                          courseId: EXCEL_COURSE_ID,
                        }),
                      },
                    );

                    const result = await response.json();

                    if (!response.ok || !result.success) {
                      throw new Error(
                        result.message || "Unable to create order",
                      );
                    }

                    const order = result.data.order;
                    const student = result.data.student;

                    // 2. Open Razorpay Checkout
                    const options = {
                      key: import.meta.env.VITE_RAZORPAY_KEY_ID,

                      amount: order.amount,
                      currency: order.currency || "INR",

                      name: "Excel Using AI",
                      description: "Excel + AI Course",

                      order_id: order.id,

                      prefill: {
                        name: student.name,
                        email: student.email,
                        contact: phone,
                      },

                      theme: {
                        color: "#2563eb",
                      },

                      handler: async function (paymentResponse) {
                        try {
                          // 3. Verify payment in backend
                          const verifyResponse = await fetch(
                            `${API_URL}/payments/verify`,
                            {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                razorpay_order_id:
                                  paymentResponse.razorpay_order_id,

                                razorpay_payment_id:
                                  paymentResponse.razorpay_payment_id,

                                razorpay_signature:
                                  paymentResponse.razorpay_signature,
                              }),
                            },
                          );

                          const verifyResult = await verifyResponse.json();

                          if (!verifyResponse.ok || !verifyResult.success) {
                            throw new Error(
                              verifyResult.message ||
                                "Payment verification failed",
                            );
                          }
                          trackMetaEvent("Purchase", {
                            value: order.amount / 100,
                            currency: order.currency || "INR",
                          });
                          setShowEnrollment(false);
                          setShowPaymentSuccess(true);
                        } catch (error) {
                          console.error("Payment Verification Error:", error);
                          alert(error.message);
                        }
                      },

                      modal: {
                        ondismiss: function () {
                          console.log("Razorpay checkout closed");
                        },
                      },
                    };

                    const razorpay = new window.Razorpay(options);

                    razorpay.on("payment.failed", function (response) {
                      console.error("Payment Failed:", response.error);
                      alert(
                        response.error?.description ||
                          "Payment failed. Please try again.",
                      );
                    });
                    trackMetaEvent("InitiateCheckout", {
                      value: order.amount / 100,
                      currency: order.currency || "INR",
                    });
                    razorpay.open();
                  } catch (error) {
                    console.error("Payment Error:", error);
                    alert(error.message || "Something went wrong");
                  }
                }}
              >
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                  <span className="text-slate-400">♙</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name (Full Name)"
                    required
                    className="w-full border-0 p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                  <span className="text-slate-400">✉</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address (Email)"
                    required
                    className="w-full border-0 p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                  <span className="text-slate-400">⌕</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (WhatsApp Number)"
                    required
                    className="w-full border-0 p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  />
                </div>

                {/* SECURE CHECKOUT */}
                <div className="rounded-xl bg-slate-50 p-3.5 sm:p-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                    <span>🛡️</span>
                    <strong>Secure Payment (Secure Checkout)</strong>
                  </div>
                  <p className="mt-1.5 text-[11px] sm:text-xs leading-relaxed text-slate-500">
                    Razorpay വഴി 100% Secureമായ Payment. Payment-ന് ശേഷം
                    Activation ലിങ്ക് നിങ്ങളുടെ ഇമെയിലിൽ എത്തും.
                  </p>
                </div>

                {/* ACTION BUTTONS */}

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:bg-slate-50"
                    onClick={closeEnrollment}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700"
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
