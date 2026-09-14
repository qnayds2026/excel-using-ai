import React, { useState, useEffect } from "react";
import logo from "./assets/QNAYDS_LOGO.png";
import { FaWhatsapp } from "react-icons/fa";

const EXCEL_COURSE_ID = 13;
const API_URL = "http://localhost:3000";
console.log("API_URL =", API_URL);

const gridBg = {
  backgroundImage:
    "linear-gradient(to right, rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.07) 1px, transparent 1px)",
  backgroundSize: "36px 36px",
};

const features = [
  {
    icon: "🌱",
    title: "Start from Zero",
    text: "Excel ഒന്നും അറിയാത്തവർക്കും basics മുതൽ step-by-step ആയി confidence-ോടെ പഠിക്കാം.",
  },
  {
    icon: "⚡",
    title: "Level Up Your Excel",
    text: "Formulas, functions, data analysis, dashboards എന്നിവ ഉപയോഗിച്ച് നിങ്ങളുടെ Excel skills next level-ലേക്ക് എത്തിക്കാം.",
  },
  {
    icon: "🤖",
    title: "Work Smarter with AI",
    text: "AI ഉപയോഗിച്ച് formulas കണ്ടെത്താനും data മനസ്സിലാക്കാനും reports തയ്യാറാക്കാനും repetitive tasks എളുപ്പമാക്കാനും പഠിക്കാം.",
  },
  {
    icon: "🚀",
    title: "Go Beyond Excel",
    text: "Advanced Excel + AI + Automation skills ഉപയോഗിച്ച് real workplace problems smart ആയി solve ചെയ്യാൻ പഠിക്കാം.",
  },
];
const learners = [
  {
    number: "01",
    icon: "🌱",
    title: "Excel Beginners",
    text: "Zero മുതൽ Excel confidently പഠിച്ച് തുടങ്ങാം."
  },
  {
    number: "02",
    icon: "📈",
    title: "Existing Excel Users",
    text: "ഇപ്പോഴുള്ള Excel skills next level-ലേക്ക് എത്തിക്കാം."
  },
  {
    number: "03",
    icon: "⚡",
    title: "Advanced Learners",
    text: "Advanced Excel + AI ഉപയോഗിച്ച് smarter ആയി work ചെയ്യാം."
  },
  {
    number: "04",
    icon: "🎓",
    title: "Freshers",
    text: "Job-ready Excel + AI skills നേടി workplace-ready ആകാം."
  },
  {
    number: "05",
    icon: "💼",
    title: "Office / MIS Professionals",
    text: "Daily office work കൂടുതൽ fast & productive ആക്കാം."
  },
  {
    number: "06",
    icon: "📊",
    title: "Data & Reporting Professionals",
    text: "Data-യെ powerful reports & insights ആക്കി മാറ്റാം."
  },
  {
    number: "07",
    icon: "👥",
    title: "HR & Accounts Professionals",
    text: "Repetitive tasks Excel + AI ഉപയോഗിച്ച് smart ആക്കാം."
  },
  {
    number: "08",
    icon: "🚀",
    title: "Freelancers & Business Owners",
    text: "Data manage ചെയ്യാം, സമയം save ചെയ്യാം, smarter ആയി grow ചെയ്യാം."
  }
];
const skills = [
  "Excel Basics",
  "Formulas & Functions",
  "Data Analysis",
  "Reports & Dashboards",
  "Excel + AI",
  "Automation",
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
  "📌 Task — എന്താണ് ചെയ്യേണ്ടത് എന്ന് മനസ്സിലാക്കുക",
  "🤖 AI Assist — ശരിയായ formula / approach കണ്ടെത്തുക",
  "📊 Excel — Data & calculations work ചെയ്യുക",
  "🔍 Verify — AI output ശരിയാണോ എന്ന് പരിശോധിക്കുക",
  "💡 Analyze — Data-യിൽ നിന്ന് useful insights കണ്ടെത്തുക",
  "📑 Report — Professional report/dashboard തയ്യാറാക്കുക",
  "⚙️ Automate — വീണ്ടും വീണ്ടും ചെയ്യുന്ന work smart ആക്കുക",
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
    question: "Excel ഒന്നും അറിയാത്ത Beginner-ന് ഈ course പഠിക്കാനാകുമോ?",
    answer:
      "തീർച്ചയായും. Excel basics മുതൽ step-by-step ആയി പഠിപ്പിക്കുന്നതിനാൽ beginners-ന് zero level-ൽ നിന്ന് തുടങ്ങാം. ഓരോ concept-ഉം practical examples ഉപയോഗിച്ച് മനസ്സിലാക്കുന്ന രീതിയിലാണ് program ഒരുക്കിയിരിക്കുന്നത്.",
  },

  {
    question: "Already Excel അറിയുന്നവർക്ക് ഈ course എന്തിന്?",
    answer:
      "Basic Excel അറിയുന്നവർക്ക് formulas, data analysis, dashboards, AI tools, automation തുടങ്ങിയ advanced skills പഠിച്ച് അവരുടെ existing Excel knowledge next level-ലേക്ക് upgrade ചെയ്യാം.",
  },

  {
    question: "Beginner മുതൽ Advanced വരെ എല്ലാം പഠിക്കുമോ?",
    answer:
      "അതെ. Excel foundation മുതൽ formulas, functions, data analysis, professional reports, dashboards, Excel + AI, automation എന്നിവയിലേക്ക് step-by-step ആയി progress ചെയ്യാം.",
  },

  {
    question: "Excel-നൊപ്പം AI എങ്ങനെ ഉപയോഗിക്കാമെന്ന് പഠിക്കുമോ?",
    answer:
      "അതെ. Formulas കണ്ടെത്താനും, data മനസ്സിലാക്കാനും, tasks simplify ചെയ്യാനും Excel workflows കൂടുതൽ smart ആക്കാനും AI എങ്ങനെ ഉപയോഗിക്കാം എന്ന് practical ആയി പഠിക്കാം.",
  },

  {
    question: "Practical Projects ഉണ്ടാകുമോ?",
    answer:
      "ഉണ്ട്. Sales Dashboard, HR Attendance, Expense Tracker, AI Formula Project, Automated MIS തുടങ്ങിയ real-world projects വഴി പഠിച്ച skills practice ചെയ്യാം.",
  },

  {
    question: "ഈ skills job-ൽ എങ്ങനെ ഉപയോഗിക്കാം?",
    answer:
      "MIS, HR, Accounts, Operations, Reporting, Data Analysis തുടങ്ങിയ ജോലികളിൽ ഉപയോഗിക്കുന്ന practical Excel skills develop ചെയ്യാൻ program സഹായിക്കും. Daily repetitive work കൂടുതൽ fast, accurate, smart ആക്കാനും പഠിക്കാം.",
  },

  {
    question: "Course പൂർത്തിയാക്കിയാൽ Certificate ലഭിക്കുമോ?",
    answer:
      "അതെ. Program successfully complete ചെയ്യുന്ന learners-ന് course completion certificate ലഭിക്കും.",
  },
];

// shared style fragments
const tag =
  "inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700";
const h2 =
  "text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl";
const lead = "mt-4 text-base leading-relaxed text-slate-600 sm:text-lg";
const ctaPrimary =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl";
const LIMITED_SEATS = 20;
const OFFER_END_TIME = Date.now() + 1000 * 60 * 60 * 18 + 1000 * 60 * 10;

const getTimeLeft = (endTime) => {
  const distance = Math.max(endTime - Date.now(), 0);

  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
};

function App() {
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(OFFER_END_TIME));
  const [showFloatingCta, setShowFloatingCta] = useState(false);

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
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
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
          className="relative overflow-hidden bg-slate-50 pb-20 pt-16 sm:pb-28 sm:pt-20"
          id="home"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={gridBg}
          ></div>
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl"></div>

          <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
            <div className="flex w-full items-center justify-center">
              <img
                src={logo}
                alt="QNAYDS"
                className="mb-6 h-10 w-auto max-w-[160px] object-contain sm:mb-8 sm:h-12"
              />
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold text-orange-700 sm:text-sm">
              <span>🔥 Limited Offer</span>
              <span className="hidden h-4 w-px bg-orange-300 sm:block"></span>
              <span>Only {LIMITED_SEATS} seats available</span>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-blue-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="text-blue-600">⏳</span>
                Offer ends in
              </div>

              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <span className="rounded-lg bg-slate-900 px-2 py-1 text-white">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span>:</span>
                <span className="rounded-lg bg-slate-900 px-2 py-1 text-white">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span>:</span>
                <span className="rounded-lg bg-slate-900 px-2 py-1 text-white">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className={tag + " mt-6"}>
              ✦ ജോലി നേടാൻ സഹായിക്കുന്ന പ്രായോഗിക Excel + AI പഠനം
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
              Excel + AI
              <br />
              <span className="text-blue-600">നിങ്ങളുടെ Career</span>
              <br />
              അടുത്ത ഘട്ടത്തിലേക്ക്.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Excel വെറും ഒരു spreadsheet skill ആയി മാത്രം പഠിക്കേണ്ടതില്ല.
              Data, Reports, Dashboards, AI, Automation എന്നിവ പ്രായോഗികമായി
              പഠിച്ച് ജോലി ചെയ്യാൻ തയ്യാറാകൂ.
            </p>

            <div className="mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-xl sm:flex-row">
              <button
                type="button"
                onClick={openEnrollment}
                className={ctaPrimary + " w-full sm:w-auto"}
              >
                Enroll Now
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                type="button"
                onClick={openEnrollment}
                className="inline-flex w-full items-center justify-center rounded-full border border-blue-300 bg-white px-7 py-3.5 text-base font-bold text-blue-600 shadow-sm transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 sm:w-auto"
              >
                Reserve My Seat
              </button>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
              <span>✓ പ്രായോഗിക പഠനം</span>
              <span>✓ Job-oriented</span>
              <span>✓ AI ഉപയോഗിച്ച് Excel</span>
            </div>
          </div>
        </div>

        <div className="ai-card">
          <div className="ai-card-icon">✦</div>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <div className={tag}>കോഴ്സിനെക്കുറിച്ച് അറിയാം</div>

            <h2 className={h2 + " mt-4"}>
              Excel + AI
              <br />
              <span className="text-blue-600">
                എങ്ങനെ പഠിക്കാം എന്ന് കാണാം.
              </span>
            </h2>

            <p className={lead + " mx-auto max-w-2xl"}>
              Excel + AI പഠനത്തിന്റെ പ്രധാന ഭാഗങ്ങളും പ്രായോഗിക പരിശീലനവും ഈ
              വീഡിയോയിലൂടെ പരിചയപ്പെടാം.
            </p>

            <div className="mt-12">
              <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
                <div className="flex h-full w-full flex-col items-center justify-center text-center text-white">
                  <h3 className="text-lg font-bold">കോഴ്സ് വീഡിയോ</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    വീഡിയോ ഉടൻ ഇവിടെ ലഭ്യമാകും
                  </p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-2xl text-blue-600 shadow-lg">
                    ▶
                  </div>
                </div>
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

      <div className="video-points">

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
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-slate-400">
                  TODAY
                </span>
                <div className="mt-1 text-sm text-slate-400">
                  REGULAR PRICE <del>₹5,000</del>
                </div>
              </div>

              <strong className="text-4xl font-extrabold text-blue-600">
                ₹1,499
              </strong>
            </div>

            <button
              type="button"
              onClick={openEnrollment}
              className="mt-6 group inline-flex w-full items-center justify-between gap-4 rounded-full bg-blue-600 px-6 py-4 text-left text-base font-extrabold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
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

    <h2>
      നിങ്ങൾക്ക് ലഭിക്കുന്നത്:
    </h2>

    <div className="value-list">
      <div>✓ Excel + AI Practical Skills</div>
      <div>✓ Real-world Excel Projects</div>
      <div>✓ Data Analysis & Dashboards</div>
      <div>✓ AI-powered Excel Workflows</div>
      <div>✓ Job-oriented Workplace Skills</div>
      <div>✓ Course Completion Certificate</div>
    </div>

        <section className="bg-blue-600 py-10">
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

    <button
      type="button"
      onClick={openEnrollment}
      className="cta-pulse group inline-flex w-full items-center justify-between gap-4 rounded-full bg-blue-600 px-6 py-4 text-left text-base font-extrabold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
    >
      <span>YES, I WANT TO LEARN EXCEL + AI</span>

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

        {/* ================= TRUST ================= */}

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
                  key={learner}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                    ✓
                  </span>

                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {learner}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      നിങ്ങളുടെ ജോലി ആവശ്യങ്ങൾക്ക് Excel skills കൂടുതൽ
                      ശക്തമാക്കാം.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<section className="intro-modern" id="learn">
  <div className="intro-modern-container">

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

        <i className="ai-node node-1"></i>
        <i className="ai-node node-2"></i>
        <i className="ai-node node-3"></i>
        <i className="ai-node node-4"></i>
      </div>

        <section className="bg-slate-50 py-20 sm:py-28" id="features">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className={tag}>നിങ്ങൾ പഠിക്കുന്നത്</div>

              <h2 className={h2 + " mt-4"}>
                Excel-നെ
                <br />
                <span className="text-blue-600">കൂടുതൽ ശക്തമാക്കാം.</span>
              </h2>

              <p className={lead}>
                Excel + AI ഉപയോഗിച്ച് modern workplace-ന് ആവശ്യമായ skills
                step-by-step ആയി പഠിക്കാം.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {feature.text}
                  </p>
                  <span className="absolute right-5 top-5 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-500">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

<section className="section audience-section">
  <div className="container">

        <section className="bg-white py-20 sm:py-28" id="learn">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <div className={tag}>Course Skills</div>

              <h2 className={h2 + " mt-4"}>
                ഒരു
                <span className="text-blue-600"> complete Excel skillset.</span>
              </h2>

              <p className={lead}>
                Basic മുതൽ advanced practical workflows വരെ പഠിക്കാൻ കഴിയുന്ന
                രീതിയിലാണ് learning path.
              </p>
            </div>

            <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white shadow-sm">
              {skills.map((skill, index) => (
                <div key={skill} className="flex items-center gap-4 px-5 py-4">
                  <span className="font-mono text-xs font-semibold text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong className="flex-1 text-sm font-semibold text-slate-800">
                    {skill}
                  </strong>

                  <i className="not-italic text-emerald-600">✓</i>
                </div>
              ))}
            </div>
          </div>
        </section>

      <div className="audience-icon">
        {learner.icon}
      </div>

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

    <div className="skills-heading">

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-semibold text-slate-500">
                <span>Today's Work</span>
                <span className="text-blue-600">Excel + AI</span>
              </div>

              <div className="space-y-3 p-5">
                {[
                  "Sales Report തയ്യാറാക്കുക",
                  "Monthly Data പരിശോധിക്കുക",
                  "Dashboard Update ചെയ്യുക",
                  "MIS Report തയ്യാറാക്കുക",
                ].map((task) => (
                  <div
                    key={task}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    <span className="text-emerald-600">✓</span>
                    {task}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className={tag}>Real Office Skills</div>

              <h2 className={h2 + " mt-4"}>
                പഠിക്കുന്നത്
                <span className="text-blue-600"> യഥാർത്ഥ ജോലിയിൽ </span>
                ഉപയോഗിക്കാം.
              </h2>

              <p className={lead}>
                Course-ൽ പഠിക്കുന്ന concepts practical office tasks-ലേക്ക്
                connect ചെയ്യാൻ കഴിയുന്ന രീതിയിലാണ് learning experience.
              </p>

              <a
                href="#projects"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                Projects കാണാം →
              </a>
            </div>
          </div>
        </section>

  </div>
</section>
{/* ================= COURSE STRUCTURE / MODULES ================= */}

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
        </section>

        <div className="module-outcome">
          Outcome: <strong>Strong Excel Foundation</strong>
        </div>
      </div>

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
              className="group mt-2 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-base font-extrabold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:px-8"
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

        <span className="module-number">MODULE 04</span>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <div className={tag}>Interview Preparation</div>

              <h2 className={h2 + " mt-4"}>
                Skill പഠിക്കുന്നതിനൊപ്പം
                <span className="text-blue-600"> Interview-നും തയ്യാറാകൂ.</span>
              </h2>

              <p className={lead}>
                Excel-related interview questions, practical tasks, data
                handling എന്നിവയെ നേരിടാൻ ആവശ്യമായ confidence വികസിപ്പിക്കാം.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Excel Practical Questions",
                "Formula-based Tasks",
                "Data Analysis Tasks",
                "Reporting Tasks",
                "Workplace Scenarios",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  <span className="text-emerald-600">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

      <div className="module-card">
        <div className="module-icon">💼</div>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className={tag}>എന്തുകൊണ്ട് ഈ Program?</div>

              <h2 className={h2 + " mt-4"}>
                പഠനം മാത്രമല്ല.
                <br />
                <span className="text-blue-600">പ്രായോഗിക Skill Building.</span>
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  "പ്രായോഗിക സമീപനം",
                  "Real-world Excel tasks-നോട് ബന്ധിപ്പിച്ചുള്ള പഠനം.",
                ],
                [
                  "AI Integration",
                  "Excel workflow-ൽ AI എങ്ങനെ ഉപയോഗിക്കാം എന്ന് പഠിക്കുക.",
                ],
                [
                  "Projects",
                  "പഠിച്ച skills practical projects വഴി ഉപയോഗിക്കുക.",
                ],
                [
                  "Career Focus",
                  "Job-related skills വികസിപ്പിക്കുന്നതിൽ ശ്രദ്ധ.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-base font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      <div className="path-item">
        <span>04</span>
        <strong>Apply ചെയ്യുക</strong>
        <p>Workplace scenarios-ൽ skills ഉപയോഗിക്കുക</p>
      </div>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <div className={tag}>Course Outcomes</div>

              <h2 className={h2 + " mt-4"}>
                Course കഴിഞ്ഞാൽ
                <span className="text-blue-600">
                  {" "}
                  നിങ്ങൾക്ക് ചെയ്യാൻ കഴിയുന്നത്.
                </span>
              </h2>

              <p className={lead}>
                Excel ഉപയോഗിച്ച് കൂടുതൽ confidence-ോടെ data, reports,
                dashboards, AI-assisted workflows എന്നിവ കൈകാര്യം ചെയ്യാൻ
                കഴിയുന്ന രീതിയിലേക്ക് വളരുക.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Excel data ക്രമീകരിക്കുക",
                "Formulas ഉപയോഗിക്കുക",
                "Data വിശകലനം ചെയ്യുക",
                "Reports തയ്യാറാക്കുക",
                "Dashboards നിർമ്മിക്കുക",
                "AI സഹായം ഉപയോഗിക്കുക",
                "Repetitive work കുറയ്ക്കുക",
                "Practical projects നിർമ്മിക്കുക",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <span className="text-emerald-600">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

    <div className="office-visual">
      <div className="office-card">

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

          <h3>{project.title}</h3>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <div className={tag}>How the Program Works</div>

              <h2 className={h2 + " mt-4"}>
                പഠനം
                <span className="text-blue-600"> എങ്ങനെ നടക്കും?</span>
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "പഠിക്കുക", "Concepts ലളിതമായി മനസ്സിലാക്കുക."],
                [
                  "02",
                  "Practice ചെയ്യുക",
                  "Hands-on tasks ഉപയോഗിച്ച് പരിശീലിക്കുക.",
                ],
                [
                  "03",
                  "Project നിർമ്മിക്കുക",
                  "പഠിച്ച skills ഉപയോഗിച്ച് project ചെയ്യുക.",
                ],
                [
                  "04",
                  "Career-ന് തയ്യാറാകുക",
                  "Interview-നും workplace tasks-നും തയ്യാറാകുക.",
                ],
              ].map(([num, title, text]) => (
                <div key={num}>
                  <span className="text-sm font-bold text-blue-600">{num}</span>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <strong>{item}</strong>

          {index !== workflow.length - 1 && (
            <span className="workflow-arrow">
              →
            </span>
          )}

        </div>
      ))}
    </div>

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
        </div>

        <div className="review-stars">
          ★★★★★
        </div>

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

              <div className="mt-6 border-t border-dashed border-slate-200 pt-6">
                <small className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Program Access
                </small>
                <strong className="mt-1 block text-3xl font-extrabold text-blue-600">
                  ₹1,499
                </strong>
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

        <div>
          ✓ Course Completion Certificate
        </div>

      </div>

    </div>

    <div className="checkout-card">

      <div className="checkout-top">

        <span>
          Excel + AI Program
        </span>

        <span className="secure">
          🔒 Secure
        </span>

      </div>

      <div className="price">

        <small>
          Full Program Access
        </small>

        <strong>
          ₹1,499
        </strong>

        <span>
          One-time payment
        </span>

      </div>

      <button
        type="button"
        onClick={openEnrollment}
        className="cta-pulse group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
      >
        <span>
          ENROLL NOW — ₹1,499
        </span>

        <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>

      <p className="checkout-note">
        Start learning Excel + AI today.
      </p>

    </div>

  </div>
</section>
</main>
{/* ================= FOOTER ================= */}

<footer className="footer">
  <div className="container footer-inner">

    <div className="footer-brand">

      <a href="#home" className="flex items-center">
        <img
          src={logo}
          alt="QNAYDS"
          className="block h-10 w-auto max-w-[130px] object-contain"
        />
      </a>

      <p>
        Excel + AI ഉപയോഗിച്ച് practical skills പഠിച്ച്,
        workplace-ൽ കൂടുതൽ smart & confident ആയി work ചെയ്യാൻ തയ്യാറാകൂ.
      </p>

    </div>

    <div className="footer-links">

      <a href="#features">
        Features
      </a>

      <a href="#learn">
        Skills
      </a>

      <a href="#projects">
        Projects
      </a>

      <a href="#faq">
        FAQ
      </a>

      <a href="#enroll">
        Enroll
      </a>

    </div>

  </div>

  <div className="container footer-bottom">

    <span>
      © 2026 Excel AI. എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.
    </span>

    <span>
      Excel + AI Learning Program
    </span>

  </div>
</footer>
{/* ================= FLOATING WHATSAPP ================= */}
<a
  href="https://wa.me/919074871204"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Join WhatsApp Group"
  style={{
    position: "fixed",
    right: "20px",
    bottom: "95px",
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100000,
    boxShadow: "0 5px 15px rgba(0,0,0,0.25)",
    textDecoration: "none",
  }}
>
  <FaWhatsapp
    style={{
      color: "#fff",
      fontSize: "34px",
    }}
  />
</a>
      {/* ================= STICKY CTA ================= */}

      {showFloatingCta && (
        <div className="fixed inset-x-4 bottom-4 z-[9998] rounded-2xl border border-blue-200 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col leading-tight">
              <strong className="text-xs font-bold text-slate-900">
                Limited offer • {LIMITED_SEATS} seats left
              </strong>
              <span className="text-[11px] text-slate-500">
                Offer ends soon
              </span>
            </div>

            <button
              type="button"
              onClick={openEnrollment}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700"
            >
              Enroll Now
              <span className="text-base">→</span>
            </button>
          </div>
        </div>
      )}

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
                      `${API_URL}/api/landing/create-order`,
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
                            `${API_URL}/api/payments/verify`,
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
