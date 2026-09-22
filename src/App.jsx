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
            Thank you for enrolling in the Excel Using AI Course.
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
                Please check your email for the activation link and course
                access details.
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
      {/* ================= NAVBAR ================= */}
      {/* ================= HERO ================= */}
      <main>
        <section
          className="relative overflow-hidden bg-slate-50 pb-16 pt-12 sm:pb-24 sm:pt-16"
          id="home"
        >
          {/* Background Grid */}
          <div
            className="pointer-events-none absolute inset-0"
            style={gridBg}
          />

          {/* Background Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6">
            {/* Logo */}
            <img
              src={logo}
              alt="QNAYDS"
              className="mb-8 h-10 w-auto max-w-[140px] object-contain sm:h-12"
            />

            {/* Limited Offer */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-5 py-2.5 text-sm font-bold text-orange-700 shadow-sm">
              <span>🔥 Limited Offer</span>

              <span className="hidden h-5 w-px bg-orange-300 sm:block" />

              <span>Only {LIMITED_SEATS} seats available</span>
            </div>

            {/* Countdown */}
            <div className="mt-4 flex items-center justify-center gap-3 rounded-2xl border border-blue-200 bg-white px-5 py-3 shadow-md">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="text-lg">⏳</span>
                <span>Offer ends in</span>
              </div>

              <div className="flex items-center gap-2 text-sm font-bold">
                <span className="rounded-lg bg-slate-900 px-2.5 py-1.5 text-white">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>

                <span className="text-slate-700">:</span>

                <span className="rounded-lg bg-slate-900 px-2.5 py-1.5 text-white">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>

                <span className="text-slate-700">:</span>

                <span className="rounded-lg bg-slate-900 px-2.5 py-1.5 text-white">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Tag */}
            <div className={tag + " mt-6"}>
              ✦ ജോലി നേടാൻ സഹായിക്കുന്ന പ്രായോഗിക Excel + AI പഠനം
            </div>

            {/* Main Heading */}
            <h1 className="mt-6 max-w-3xl px-2 text-3xl font-extrabold leading-[1.18] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              <span className="block">Excel Using AI</span>

              <span className="mt-1 block text-blue-600">
                മാസ്റ്റർ ചെയ്യാൻ ആഗ്രഹമുണ്ടോ?
              </span>

              <span className="mt-1 block">വർക്ക് 10x സ്മാർട്ടാക്കണോ?</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl px-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {" "}
              Hours എടുക്കുന്ന Excel വർക്കുകൾ Minutes-ൽ തീർക്കാം.
              <br className="hidden sm:block" />
              AI ഉപയോഗിച്ച് നിങ്ങളുടെ Daily Work സ്മാർട്ടാക്കൂ!
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
              {/* Enroll */}
              <button
                type="button"
                onClick={openEnrollment}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl animate-[pulse_1.5s_ease-in-out_infinite] sm:w-auto"
              >
                Enroll Now
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              {/* Learn More */}
              <a
                href="#learn"
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 sm:w-auto"
              >
                കൂടുതൽ അറിയാം
              </a>
            </div>

            {/* Benefits */}
            <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-medium text-slate-600">
              <span>
                <span className="mr-2 text-emerald-500">✓</span>
                പ്രായോഗിക പഠനം
              </span>

              <span>
                <span className="mr-2 text-emerald-500">✓</span>
                Job-oriented
              </span>

              <span>
                <span className="mr-2 text-emerald-500">✓</span>
                AI ഉപയോഗിച്ച് Excel
              </span>
            </div>
          </div>
        </section>

        {/* ================= VIDEO SECTION ================= */}

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <div className={tag}>കോഴ്സിനെക്കുറിച്ച് അറിയാം</div>

            <h2 className={h2 + " mt-4"}>
              Excel + AI
              <br />
              <span className="text-blue-600">
                എങ്ങനെ പഠിക്കാം എന്ന് നോക്കാം.
              </span>
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
                "Excel + AI Practical Learning",
                "Real-world Excel Projects",
                "AI-assisted Excel Workflows",
                "Data Analysis & Dashboards",
                "Job-oriented Excel Skills",
                "Certification",
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

            <div className="mt-8 flex items-end justify-between border-t border-dashed border-slate-200 pt-6">
              {/* Regular Price */}
              <div>
                <span className="text-base font-bold uppercase tracking-wide text-slate-500">
                  REGULAR PRICE
                </span>

                <div className="mt-1">
                  <del className="text-5xl font-extrabold text-slate-900 sm:text-6xl">
                    ₹5,000
                  </del>
                </div>
              </div>

              {/* Today's Price */}
              <div className="text-right">
                <span className="text-base font-bold uppercase tracking-wide text-slate-400">
                  TODAY
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
              <span>START LEARNING EXCEL + AI TODAY</span>
              <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-xs font-semibold text-slate-500">
              <span>✓ Instant Access</span>
              <span>✓ Practical Learning</span>
              <span>✓ Beginner Friendly</span>
            </div>
          </div>
        </section>

        {/* ================= TRUST ================= */}

        <section className="bg-blue-900 py-10">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:flex-row sm:text-left">
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-white">2,000+</span>

              <span className="text-sm font-medium text-blue-100">
                ടീമുകൾ Excel ഉപയോഗിക്കുന്ന മേഖലകൾ
              </span>
            </div>

            <div className="hidden h-10 w-px bg-blue-400 sm:block"></div>

            <p className="text-sm font-medium text-blue-50">
              Office-ൽ ദിവസേന ഉപയോഗിക്കുന്ന spreadsheet skills കൂടുതൽ
              കാര്യക്ഷമമായി പഠിക്കാം.
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

        <section className="bg-white py-20 sm:py-28" id="reviews">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className={tag}>Learner Feedback</div>

              <h2 className={h2 + " mt-4"}>
                Excel + AI
                <br />
                <span className="text-blue-600">
                  പഠനത്തെക്കുറിച്ചുള്ള അഭിപ്രായങ്ങൾ.
                </span>
              </h2>

              <p className={lead}>
                Practical learning experience-നെ അടിസ്ഥാനമാക്കിയുള്ള sample
                feedback.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  initial: "A",
                  name: "Arun K.",
                  sub: "Sample Learner",
                  text: "Excel formulas മാത്രം പഠിക്കുന്നതിന് പകരം AI ഉപയോഗിച്ച് എങ്ങനെ faster ആയി work ചെയ്യാം എന്നത് മനസ്സിലാക്കാൻ ഈ learning approach സഹായിക്കുന്നു.",
                },
                {
                  initial: "S",
                  name: "Shahana M.",
                  text: "Reports, dashboards, data analysis എന്നിവ practical ആയി പഠിക്കാമെന്നത് വളരെ useful ആയി തോന്നി. Office work-ന് directly apply ചെയ്യാൻ കഴിയുന്ന രീതിയിലാണ്.",
                },
                {
                  initial: "R",
                  name: "Rahul P.",
                  text: "ChatGPT ഉപയോഗിച്ച് Excel formulas കണ്ടെത്താനും repetitive tasks എളുപ്പമാക്കാനും പഠിച്ചത് വളരെ interesting ആയിരുന്നു.",
                },
                {
                  initial: "M",
                  name: "Midhun P.",
                  text: "Excel-ൽ basic knowledge ഉണ്ടായിരുന്നെങ്കിലും advanced reports എങ്ങനെ തയ്യാറാക്കണം എന്ന് അറിയില്ലായിരുന്നു. Practical examples വഴി കാര്യങ്ങൾ വളരെ എളുപ്പത്തിൽ മനസ്സിലാക്കാൻ കഴിഞ്ഞു.",
                },

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

        {/* ================= WHO IS THIS FOR ================= */}

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className={tag}>ആർക്കുവേണ്ടി?</div>

              <h2 className={h2 + " mt-4"}>
                ഈ പഠനം
                <br />
                <span className="text-blue-600">നിങ്ങൾക്കുള്ളതാണോ?</span>
              </h2>

              <p className={lead}>
                Excel ഉപയോഗിച്ച് നിങ്ങളുടെ ജോലി skills മെച്ചപ്പെടുത്താൻ
                ആഗ്രഹിക്കുന്നവർക്ക്.
              </p>
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
                { label: "Data", value: "12,840", sub: "Rows", active: false },
                {
                  label: "Reports",
                  value: "24",
                  sub: "This Month",
                  active: true,
                },
                {
                  label: "Tasks",
                  value: "68%",
                  sub: "Repeated Work",
                  active: false,
                },
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
          </div>
        </section>

        {/* ================= COURSE STRUCTURE / MODULES ================= */}

        <section className="bg-slate-900 py-20 sm:py-28" id="modules">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
                Course Structure
              </div>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                What You'll <span className="text-blue-400">Learn</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
                Excel + AI ഉപയോഗിച്ച് job-ready practical skills step-by-step
                ആയി പഠിക്കാം.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "📊",
                  num: "MODULE 01",
                  title: "Excel Fundamentals",
                  topics: [
                    "Excel Interface & Navigation",
                    "Workbook & Worksheet Structure",
                    "Cells & Cell Referencing",
                    "Data Types & Formatting",
                    "Essential Keyboard Shortcuts",
                  ],
                  outcome: "Strong Excel foundation",
                  featured: false,
                },
                {
                  icon: "📈",
                  num: "MODULE 02",
                  title: "Data Handling & Analysis",
                  topics: [
                    "Sorting & Filtering Data",
                    "Data Validation",
                    "Remove Duplicates",
                    "Text Functions",
                    "Pivot Tables & Charts",
                  ],
                  featured: false,
                },
                {
                  icon: "📊",
                  num: "MODULE 03",
                  title: "Reports & Dashboards",
                  topics: [
                    "Chart Types",
                    "Dynamic Charts",
                    "KPI Reports",
                    "Dashboard Design",
                    "Professional Reporting",
                  ],
                  featured: false,
                },
                {
                  icon: "✦",
                  num: "MODULE 04",
                  title: "AI Tools with Excel",
                  topics: [
                    "Introduction to AI in Excel",
                    "ChatGPT for Excel",
                    "Formula Generation",
                    "Error Fixing",
                    "AI-assisted Data Cleaning",
                    "Smart Analysis & Insights",
                  ],
                  featured: true,
                },
                {
                  icon: "⚙",
                  num: "MODULE 05",
                  title: "Automation with AI",
                  topics: [
                    "Automating Repetitive Tasks",
                    "AI-assisted Formula Automation",
                    "Monthly Report Generation",
                    "Workflow Optimization",
                  ],
                  featured: false,
                },
                {
                  icon: "💼",
                  num: "MODULE 06",
                  title: "MIS, HR & Accounts",
                  topics: [
                    "MIS Report Structure",
                    "Daily / Weekly / Monthly Reports",
                    "HR Attendance & Leave Tracker",
                    "Payroll Basics",
                    "Expense & Budget Tracking",
                  ],
                  featured: false,
                },
              ].map((mod) => (
                <div
                  key={mod.num}
                  className={
                    "rounded-2xl border p-6 " +
                    (mod.featured
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-slate-700 bg-slate-800/60")
                  }
                >
                  <div className="text-2xl">{mod.icon}</div>

                  <span className="mt-3 block font-mono text-[11px] font-semibold tracking-wide text-blue-400">
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
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-slate-700 bg-slate-800/60 px-6 py-4 text-center">
              <p className="text-sm font-medium text-slate-300">
                <strong className="text-white">Job-Ready Learning:</strong> Real
                Office Tasks • Practical Projects • Excel + AI
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowEnrollment(true)}
                className="animate-pulse rounded-xl bg-blue-600 px-8 py-3 text-base font-bold text-white shadow-lg transition hover:bg-blue-700 hover:-translate-y-0.5"
              >
                Enroll Now →
              </button>
            </div>
          </div>
        </section>

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

        {/* ================= PROJECTS ================= */}

        <section className="bg-white py-20 sm:py-28" id="projects">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className={tag}>Practical Projects</div>

              <h2 className={h2 + " mt-4"}>
                പഠിച്ചതെല്ലാം
                <br />
                <span className="text-blue-600">Projects ആയി മാറ്റാം.</span>
              </h2>

              <p className={lead}>
                Theory മാത്രം അല്ല. നിങ്ങളുടെ skills ഉപയോഗിച്ച് practical
                spreadsheet projects നിർമ്മിക്കാം.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.number}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      {project.number}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      ▦
                    </div>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {project.text}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
                    Project →
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* ================= PROJECTS ENROLL CTA ================= */}

          <div className="mx-auto mt-10 max-w-5xl px-4">
            <div className="rounded-3xl border border-blue-200 bg-slate-950 px-6 py-8 text-center shadow-lg sm:px-10">
              <div className="inline-flex items-center rounded-full border border-blue-500/40 px-4 py-1.5 text-sm font-semibold text-blue-400">
                Limited Offer
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                Enroll Now &{" "}
                <span className="text-blue-500">Upgrade Your Skills</span>
              </h3>

              <p className="mt-3 text-sm text-slate-300 sm:text-base">
                Take the next step towards a better career with Excel + AI.
              </p>

              <button
                type="button"
                onClick={openEnrollment}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 animate-[pulse_1.2s_ease-in-out_infinite]"
              >
                Enroll Now
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* ================= AI WORKFLOW ================= */}

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <div className={tag}>Excel + AI Workflow</div>

            <h2 className={h2 + " mt-4"}>
              AI-യെ നിങ്ങളുടെ
              <br />
              <span className="text-blue-600">
                Excel workflow-ന്റെ ഭാഗമാക്കൂ.
              </span>
            </h2>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {workflow.map((item, index) => (
                <React.Fragment key={item}>
                  <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {index + 1}
                    </div>
                    <strong className="text-xs font-semibold text-slate-700">
                      {item}
                    </strong>
                  </div>

                  {index !== workflow.length - 1 && (
                    <span className="text-slate-300">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MIDDLE ENROLL CTA ================= */}

        <section className="bg-blue-600 py-16 sm:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center">
            <span className="text-xs font-bold uppercase tracking-wide text-blue-200">
              Ready to Start?
            </span>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Excel + AI
              <span className="text-blue-200">
                {" "}
                പഠനം ഇന്ന് തന്നെ ആരംഭിക്കൂ.
              </span>
            </h2>

            <button
              type="button"
              className="group mt-2 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-base font-extrabold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:px-8 animate-[pulse_0.8s_ease-in-out_infinite]"
              onClick={openEnrollment}
            >
              <span>ENROLL NOW — ₹1,499</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <p className="text-sm text-blue-100">
              Practical Learning • Real Projects • Career-focused Skills
            </p>
          </div>
        </section>

        {/* ================= CAREER ================= */}

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="text-center">
              <div className={tag}>Career Connection</div>

              <h2 className={h2 + " mt-4"}>
                Excel skills
                <br />
                <span className="text-blue-600">ഏത് ജോലികളിൽ ഉപയോഗിക്കാം?</span>
              </h2>

              <p className={lead + " mx-auto max-w-2xl"}>
                വിവിധ office, operations, HR, accounts, MIS, data-related
                roles-ൽ Excel ഒരു പ്രധാന skill ആണ്.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {roles.map((role) => (
                <div
                  key={role}
                  className="group flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <strong className="text-sm font-bold text-slate-900">
                    {role}
                  </strong>
                  <i className="not-italic text-slate-300 transition-colors duration-300 group-hover:text-blue-500">
                    ↗
                  </i>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CERTIFICATE ================= */}

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 rounded-3xl bg-slate-900 px-6 py-14 sm:px-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
                Certification
              </div>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                പഠനം പൂർത്തിയാക്കിയതിന്
                <span className="text-blue-400"> ഒരു Certificate.</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Program പൂർത്തിയാക്കിയ ശേഷം certification ലഭിക്കുന്ന രീതിയിലാണ്
                ഈ section ഒരുക്കിയിരിക്കുന്നത്.
              </p>

              <button
                type="button"
                onClick={openEnrollment}
                className={ctaPrimary + " mt-6"}
              >
                Enroll Now
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

                <p className="mt-1 text-sm text-slate-400">
                  പ്രായോഗിക Excel & AI പഠനം
                </p>

                <div className="mx-auto mt-6 h-px w-32 bg-slate-600"></div>

                <span className="mt-2 block text-xs text-slate-500">
                  വിദ്യാർത്ഥിയുടെ പേര്
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}

        <section className="bg-slate-50 py-20 sm:py-28" id="faq">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,320px)_1fr]">
            <div>
              <div className={tag}>FAQ</div>

              <h2 className={h2 + " mt-4"}>Frequently Asked Questions</h2>

              <p className={lead}>
                Program-നെക്കുറിച്ച് അറിയേണ്ട പ്രധാന കാര്യങ്ങൾ.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 text-sm font-bold text-slate-900 marker:content-none">
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong className="flex-1 font-bold">{faq.question}</strong>

                    <i className="not-italic text-lg text-slate-400 transition-transform duration-300 group-open:rotate-45">
                      +
                    </i>
                  </summary>

                  <p className="mt-3 pl-9 text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section
          className="relative overflow-hidden bg-slate-900 py-20 sm:py-28"
          id="enroll"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/30 blur-3xl"></div>

          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
              നിങ്ങളുടെ അടുത്ത ഘട്ടം
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Excel Skill
              <br />
              <span className="text-blue-400">ഇന്ന് തന്നെ Upgrade ചെയ്യൂ.</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Excel + AI skills പ്രായോഗികമായി പഠിച്ച് നിങ്ങളുടെ career-ന് കൂടുതൽ
              ശക്തമായ skillset നിർമ്മിക്കൂ.
            </p>

            <button
              type="button"
              onClick={openEnrollment}
              className={ctaPrimary + " mt-7"}
            >
              <span>ഇപ്പോൾ പഠനം ആരംഭിക്കൂ</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-400">
              <span>✓ Practical Learning</span>
              <span>✓ Excel + AI</span>
              <span>✓ Career-focused</span>
            </div>
          </div>
        </section>

        {/* ================= CHECKOUT ================= */}

        <section className="bg-white py-20 sm:py-28" id="checkout">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <div className={tag}>Enrollment</div>

              <h2 className={h2 + " mt-4"}>
                Your learning journey starts today.
              </h2>

              <p className={lead}>
                Excel + AI practical learning program-ൽ ചേരാൻ താഴെയുള്ള option
                ഉപയോഗിക്കുക.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Excel + AI Learning",
                  "Practical Projects",
                  "Job-oriented Skills",
                  "Certification",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-slate-700"
                  >
                    <span className="text-emerald-600">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl">
              <div className="flex items-center justify-between text-sm font-semibold text-slate-500">
                <span>Excel + AI Program</span>
                <span className="text-emerald-600">🔒 Secure</span>
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
                Enroll Now
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
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

      {/* =========================================================
          ENROLLMENT MODAL
          ========================================================= */}

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
                <h2 className="text-lg font-extrabold text-slate-900">
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
                  <strong className="block text-sm font-bold text-slate-900">
                    Excel + AI Practical Program
                  </strong>
                  <del className="text-xs text-slate-400">₹5,000</del>
                  <div className="mt-1 text-xl font-extrabold text-blue-600">
                    ₹1,499
                  </div>
                </div>

                <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-950">
                  Save ₹3,501
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
                    placeholder="Full Name"
                    required
                    className="w-full border-0 p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                  <span className="text-slate-400">✉</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full border-0 p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                  <span className="text-slate-400">⌕</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full border-0 p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  />
                </div>

                {/* SECURE CHECKOUT */}

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                    🛡️
                    <strong>Secure Checkout</strong>
                  </div>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    Secure payment via Razorpay. After payment, we'll send an
                    activation email to your inbox.
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
