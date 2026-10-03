import React, { useState, useEffect, useRef } from "react";
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

const tag =
  "inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700";
const h2 =
  "text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl";
const lead = "mt-4 text-base leading-relaxed text-slate-600 sm:text-lg";
const ctaPrimary =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl animate-pulse";

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
    title: "ഫ്രഷേഴ്സ്",
    text: "Excel അടിസ്ഥാനങ്ങൾ മുതൽ പ്രായോഗിക ജോലി കഴിവുകൾ വരെ പഠിച്ച് കരിയർ തുടങ്ങാം.",
  },
  {
    title: "ജോലി അന്വേഷിക്കുന്നവർ",
    text: "ജോലിക്ക് ആവശ്യമായ Excel, റിപ്പോർട്ടിംഗ്, ഡാറ്റ വിശകലനം കഴിവുകൾ പഠിച്ച് ഇന്റർവ്യൂവിൽ ആത്മവിശ്വാസം കൂട്ടാം.",
  },
  {
    title: "Office / MIS ജീവനക്കാർ",
    text: "ദിവസേനയുള്ള റിപ്പോർട്ടുകൾ, MIS, ഡാഷ്ബോർഡുകൾ, ഡാറ്റ കൈകാര്യം എന്നിവ കൂടുതൽ വേഗത്തിൽ ചെയ്യാം.",
  },
  {
    title: "HR മേഖലയിൽ ജോലി ചെയ്യുന്നവർ",
    text: "ഹാജർ, ജീവനക്കാരുടെ ഡാറ്റ, ലീവ് ട്രാക്കിംഗ്, HR റിപ്പോർട്ടുകൾ എന്നിവ Excel + AI ഉപയോഗിച്ച് എളുപ്പമാക്കാം.",
  },
  {
    title: "അക്കൗണ്ട്സ് മേഖലയിൽ ജോലി ചെയ്യുന്നവർ",
    text: "ചെലവുകൾ, കണക്കുകൂട്ടലുകൾ, സാമ്പത്തിക ഡാറ്റ, റിപ്പോർട്ടുകൾ എന്നിവ കൂടുതൽ കൃത്യമായി ചെയ്യാം.",
  },
  {
    title: "ബിസിനസ് ചെയ്യുന്നവർ",
    text: "വിൽപ്പന, ചെലവ്, ബിസിനസ് ഡാറ്റ എന്നിവ വിശകലനം ചെയ്ത് മികച്ച തീരുമാനങ്ങൾ എടുക്കാം.",
  },
];

const todayChallenges = [
  "റിപ്പോർട്ടുകൾ തയ്യാറാക്കാൻ കൂടുതൽ സമയം",
  "ഡാറ്റ മനസ്സിലാക്കാൻ ബുദ്ധിമുട്ട്",
  "ആവർത്തിച്ചുള്ള Excel ജോലികൾ",
  "ഇന്റർവ്യൂവിന് ആവശ്യമായ കഴിവുകളുടെ കുറവ്",
];

const modules = [
  {
    num: "മൊഡ്യൂൾ 01",
    title: "Excel അടിസ്ഥാനങ്ങൾ",
    topics: [
      "Excel ഇന്റർഫേസും നാവിഗേഷനും",
      "വർക്ക്ബുക്ക് & വർക്ക്ഷീറ്റ് ഘടന",
      "സെല്ലുകളും സെൽ റഫറൻസിംഗും",
      "ഡാറ്റ ടൈപ്പുകളും ഫോർമാറ്റിംഗും",
      "പ്രധാന കീബോർഡ് ഷോർട്ട്കട്ടുകൾ",
    ],
    outcome: "ശക്തമായ Excel അടിത്തറ",
  },
  {
    num: "മൊഡ്യൂൾ 02",
    title: "ഡാറ്റ കൈകാര്യവും വിശകലനവും",
    topics: [
      "ഡാറ്റ സോർട്ടിംഗും ഫിൽട്ടറിംഗും",
      "ഡാറ്റ വാലിഡേഷനും ക്ലീനിംഗും",
      "ഡ്യൂപ്ലിക്കേറ്റുകൾ നീക്കം ചെയ്യൽ",
      "ടെക്സ്റ്റ് & ലുക്ക്അപ്പ് ഫംഗ്ഷനുകൾ",
      "Pivot Tables & Charts",
    ],
    outcome: "ഡാറ്റ ക്രമീകരിക്കാനും വിശകലനം ചെയ്യാനും കഴിയും",
  },
  {
    num: "മൊഡ്യൂൾ 03",
    title: "റിപ്പോർട്ടുകളും ഡാഷ്ബോർഡുകളും",
    topics: [
      "വിവിധതരം ചാർട്ടുകൾ & വിഷ്വലൈസേഷൻ",
      "ഡൈനാമിക് പ്രസന്റേഷൻ ചാർട്ടുകൾ",
      "KPI റിപ്പോർട്ടിംഗ് ഫോർമാറ്റുകൾ",
      "ഇന്ററാക്ടീവ് ഡാഷ്ബോർഡ് ഡിസൈൻ",
      "പ്രൊഫഷണൽ റിപ്പോർട്ട് ലേഔട്ടുകൾ",
    ],
    outcome: "ചാർട്ടുകളും ഡാഷ്ബോർഡുകളും ഉണ്ടാക്കാൻ കഴിയും",
  },
  {
    num: "മൊഡ്യൂൾ 04",
    title: "Excel-ൽ AI ടൂളുകൾ",
    topics: [
      "Excel-ൽ AI-യുടെ ആമുഖം",
      "സങ്കീർണ്ണ ഫോർമുലകൾക്കായി ChatGPT",
      "തൽക്ഷണ ഫോർമുല ജനറേഷൻ",
      "AI ഉപയോഗിച്ച് തെറ്റുകൾ തിരുത്തൽ",
      "സ്മാർട്ട് ഡാറ്റ ഇൻസൈറ്റുകൾ",
    ],
    outcome: "ChatGPT ഉപയോഗിച്ച് ഫോർമുലകൾ കണ്ടെത്താനും തെറ്റുകൾ തിരുത്താനും കഴിയും",
    featured: true,
  },
  {
    num: "മൊഡ്യൂൾ 05",
    title: "AI ഉപയോഗിച്ചുള്ള ഓട്ടോമേഷൻ",
    topics: [
      "ആവർത്തിച്ചുള്ള ജോലികൾ ഓട്ടോമേറ്റ് ചെയ്യൽ",
      "AI ഫോർമുല ഓട്ടോമേഷൻ",
      "പ്രതിമാസ റിപ്പോർട്ട് ജനറേഷൻ",
      "ദിവസേനയുള്ള വർക്ക്ഫ്ലോ ലളിതമാക്കൽ",
    ],
    outcome: "ആവർത്തിച്ചുള്ള ജോലികൾ എളുപ്പമാക്കാം",
  },
  {
    num: "മൊഡ്യൂൾ 06",
    title: "MIS, HR & അക്കൗണ്ട്സ്",
    topics: [
      "MIS റിപ്പോർട്ട് ഘടനയും മാനദണ്ഡങ്ങളും",
      "ദിവസേന / പ്രതിവാര / പ്രതിമാസ റിപ്പോർട്ടുകൾ",
      "HR ഹാജർ & ലീവ് ട്രാക്കറുകൾ",
      "പേറോൾ അടിസ്ഥാന കണക്കുകൂട്ടലുകൾ",
      "ചെലവ് & ബജറ്റ് ട്രാക്കിംഗ്",
    ],
    outcome: "ജോലിക്ക് ആവശ്യമായ റിപ്പോർട്ടുകൾ തയ്യാറാക്കാം",
  },
];

const projects = [
  {
    number: "01",
    title: "സെയിൽസ് ഡാഷ്ബോർഡ്",
    text: "Sales ഡാറ്റ ഉപയോഗിച്ച് മാനേജ്‌മെന്റിനായി ഒരു പ്രൊഫഷണൽ Interactive Dashboard തയ്യാറാക്കുക.",
  },
  {
    number: "02",
    title: "HR ഹാജർ റിപ്പോർട്ട്",
    text: "ജീവനക്കാരുടെ Attendance, Leave ഡാറ്റ കൈകാര്യം ചെയ്ത് Automated റിപ്പോർട്ട് തയ്യാറാക്കുക.",
  },
  {
    number: "03",
    title: "ചെലവ് ട്രാക്കർ",
    text: "ഓഫീസ് ചെലവുകൾ ക്രമീകരിച്ച് കൃത്യമായി നിരീക്ഷിക്കാവുന്ന Expense Tracker നിർമ്മിക്കുക.",
  },
  {
    number: "04",
    title: "AI ഫോർമുല പ്രോജക്ട്",
    text: "ChatGPT ഉപയോഗിച്ച് സങ്കീർണ്ണമായ Excel Formula കണ്ടെത്തുകയും പരിശോധിച്ച് പ്രയോഗിക്കുകയും ചെയ്യുക.",
  },
  {
    number: "05",
    title: "ഓട്ടോമേറ്റഡ് MIS",
    text: "ദിവസേനയുള്ള MIS റിപ്പോർട്ടിംഗ് കൂടുതൽ വേഗത്തിലും കൃത്യതയോടെയും ചെയ്യാൻ ഓട്ടോമേറ്റ് ചെയ്യുക.",
  },
];

const faqs = [
  {
    question: "ഈ കോഴ്സ് ആർക്കാണ് അനുയോജ്യം?",
    answer:
      "Excel പഠിക്കാൻ ആഗ്രഹിക്കുന്ന beginners മുതൽ ജോലി ആവശ്യങ്ങൾക്ക് Excel കൂടുതൽ പ്രൊഫഷണലായി ഉപയോഗിക്കാൻ ആഗ്രഹിക്കുന്ന office ജീവനക്കാർ, freshers, job seekers, HR, accounts വ്യക്തികൾക്ക് ഈ കോഴ്സ് അനുയോജ്യമാണ്.",
  },
  {
    question: "Excel ഒട്ടും അറിയില്ലെങ്കിൽ ഈ കോഴ്സ് പഠിക്കാൻ പറ്റുമോ?",
    answer:
      "തീർച്ചയായും പഠിക്കാം. Excel-ന്റെ അടിസ്ഥാന പാഠങ്ങൾ മുതൽ ഘട്ടം ഘട്ടമായാണ് പഠിപ്പിക്കുന്നത്. തുടക്കക്കാർക്ക് വളരെ എളുപ്പത്തിൽ മനസ്സിലാക്കാൻ സാധിക്കുന്ന ലളിതമായ മലയാളത്തിലാണ് ക്ലാസുകൾ.",
  },
  {
    question: "ക്ലാസുകൾ ലൈവ് ആണോ, റെക്കോർഡ് ചെയ്തതാണോ?",
    answer:
      "ഉയർന്ന നിലവാരത്തിൽ റെക്കോർഡ് ചെയ്ത ക്ലാസുകളാണ്. നിങ്ങളുടെ സൗകര്യപ്രദമായ സമയത്ത് മൊബൈൽ ഫോണിലോ ലാപ്ടോപ്പിലോ കണ്ട് പഠിക്കാവുന്നതാണ്.",
  },
  {
    question: "കോഴ്സ് എത്ര മണിക്കൂർ ഉണ്ട്? ആക്സസ് എത്ര കാലം ലഭിക്കും?",
    answer:
      "10-ൽ കൂടുതൽ മണിക്കൂർ നീളുന്ന പ്രായോഗിക പരിശീലനമാണ് ഇതിലുള്ളത്. എൻറോൾ ചെയ്യുന്ന വിദ്യാർത്ഥികൾക്ക് കോഴ്സിലേക്ക് ലൈഫ് ടൈം (ആജീവനാന്ത) ആക്സസ് ലഭിക്കും.",
  },
  {
    question: "AI ടൂളുകൾ സൗജന്യമാണോ?",
    answer:
      "അതെ. പഠനത്തിനായി ChatGPT-യുടെ സൗജന്യ പതിപ്പ് എങ്ങനെ ഫലപ്രദമായി ഉപയോഗിക്കാം എന്നാണ് പ്രധാനമായും പഠിപ്പിക്കുന്നത്. ഇതിനായി അധിക ചെലവുകൾ ആവശ്യമില്ല.",
  },
  {
    question: "പഠനം പൂർത്തിയാക്കിയാൽ Certificate ലഭിക്കുമോ?",
    answer:
      "അതെ. കോഴ്സ് പൂർത്തിയാക്കുമ്പോൾ നിങ്ങളുടെ റെസ്യൂമെയിലും LinkedIn-ലും ചേർക്കാവുന്ന QNAYDS നൽകുന്ന വെരിഫൈഡ് കോഴ്സ് സർട്ടിഫിക്കറ്റ് ലഭിക്കുന്നതാണ്.",
  },
  {
    question: "സംശയം വന്നാൽ ആരോട് ചോദിക്കും?",
    answer:
      "പഠനത്തിനിടയിൽ സംശയങ്ങൾ ഉണ്ടായാൽ ഞങ്ങളുടെ WhatsApp സപ്പോർട്ട് ടീമുമായി നേരിട്ട് ബന്ധപ്പെടാം. ഞങ്ങളുടെ മെന്റർമാർ നിങ്ങൾക്ക് ആവശ്യമായ സഹായം നൽകും.",
  },
  {
    question: "പണമടയ്ക്കാൻ ഏതെല്ലാം വഴികളുണ്ട്?",
    answer:
      "Google Pay, PhonePe, Paytm, Debit / Credit Cards, Net Banking വഴി 100% സുരക്ഷിതമായി ഫീസ് അടയ്ക്കാവുന്നതാണ്.",
  },
];

function App() {
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(OFFER_END_TIME));
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const [activePolicyModal, setActivePolicyModal] = useState(null); // 'terms' | 'privacy' | 'refund' | 'contact' | null

  const footerRef = useRef(null);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setVideoStarted(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(OFFER_END_TIME));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Stop/hide the price bar before the footer so it never obscures footer contents
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        if (footerRect.top <= window.innerHeight - 30) {
          setShowFloatingCta(false);
          return;
        }
      }

      setShowFloatingCta(scrollY > 250);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openEnrollment = (e) => {
    if (e && e.preventDefault) e.preventDefault();
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

  // Payment Success Screen
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
            Excel Using AI കോഴ്സിൽ എൻറോൾ ചെയ്തതിന് നന്ദി.
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
                കോഴ്സ് ആക്സസ് വിവരങ്ങളും ആക്റ്റിവേഷൻ ലിങ്കും നിങ്ങളുടെ
                ഇമെയിലിലേക്ക് അയച്ചിട്ടുണ്ട്.
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
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/90 px-3.5 py-1 text-xs font-bold text-orange-800 shadow-sm sm:mb-4 sm:px-4 sm:py-1.5 sm:text-sm">
            <span>🔥 പരിമിതകാല ഓഫർ</span>
            <span className="h-3 w-px bg-orange-300" />
            <span className="text-slate-700">ഓഫർ അവസാനിക്കാൻ ബാക്കി:</span>
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
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-0.5 text-[11px] font-semibold text-blue-700 sm:text-xs sm:px-3.5 sm:py-1">
            ✦ ജോലിയിൽ ഉപയോഗിക്കാവുന്ന പ്രായോഗിക Excel + AI പഠനം
          </div>

          {/* 3. HEADLINE IN MALAYALAM, SMALLER, 2 LINES */}
          <h1 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            <span>AI ഉപയോഗിച്ച് Excel പഠിക്കാൻ ആഗ്രഹമുണ്ടോ?</span>
            <span className="block text-blue-600 sm:mt-1">
              ജോലി എളുപ്പത്തിലും വേഗത്തിലും ചെയ്യാം.
            </span>
          </h1>

          {/* 4. ONE SHORT LINE IN SIMPLE MALAYALAM */}
          <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            മണിക്കൂറുകൾ എടുക്കുന്ന Excel ജോലികൾ AI ഉപയോഗിച്ച് വളരെ കുറഞ്ഞ
            സമയത്തിൽ ചെയ്യാൻ പഠിക്കാം.
          </p>

          {/* 5. SOLID DARK BUTTON: ₹1,499-ന് ഇപ്പോൾ ചേരൂ */}
          <div className="mt-4 flex w-full max-w-sm flex-col items-center justify-center">
            <button
              type="button"
              onClick={openEnrollment}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-slate-900 px-8 py-3.5 text-base font-extrabold text-white shadow-xl shadow-slate-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <span>₹1,499-ന് ഇപ്പോൾ ചേരൂ</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* 6. FACTS LINE: LIVE/RECORDED • HOURS • CERTIFICATE */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 rounded-xl border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700 sm:text-sm">
            <span>റെക്കോർഡ് ചെയ്ത ക്ലാസുകൾ</span>
            <span className="text-blue-300">•</span>
            <span>10+ മണിക്കൂർ</span>
            <span className="text-blue-300">•</span>
            <span>ലൈഫ് ടൈം ആക്സസ്</span>
            <span className="text-blue-300">•</span>
            <span className="font-bold text-blue-900">സർട്ടിഫിക്കറ്റ്</span>
          </div>

          {/* TICKS (COMPACT) */}
          <div className="mt-2.5 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs font-medium text-slate-500">
            <span>✓ പ്രായോഗിക പഠനം</span>
            <span>✓ ജോലിക്ക് ഉപകരിക്കുന്നത്</span>
            <span>✓ AI ഉപയോഗിച്ച് Excel</span>
          </div>
        </div>
      </section>

      {/* ================= 2. VIDEO RIGHT BELOW ================= */}
      <section className="bg-white pt-4 pb-14 sm:pt-6 sm:pb-20" id="video">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className={tag}>കോഴ്സിനെക്കുറിച്ച് അറിയാം</div>

          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
            Excel + AI{" "}
            <span className="text-blue-600">
              എങ്ങനെ പഠിക്കാം എന്ന് നോക്കാം.
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-600">
            കരിയറിൽ മാറ്റങ്ങൾ കൊണ്ടുവരാൻ Excel + AI എങ്ങനെ പഠിക്കാമെന്ന് ഈ
            വീഡിയോയിലൂടെ മനസ്സിലാക്കാം.
          </p>

          <div className="mt-7">
            <div className="relative mx-auto w-fit max-w-full overflow-hidden rounded-3xl shadow-2xl border border-slate-200 bg-slate-950 group">
              <video
                ref={videoRef}
                className="block h-[400px] w-auto max-w-full rounded-3xl object-contain sm:h-[520px] md:h-[580px]"
                controls={videoStarted}
                playsInline
                poster={excelThumbnail}
                preload="metadata"
                onPlay={() => setVideoStarted(true)}
              >
                <source src={courseVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* MALAYALAM VIDEO COVER OVERLAY (Fixes "2:48" vs "0:48" checklist issue) */}
              {!videoStarted && (
                <div
                  onClick={handlePlayVideo}
                  className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/50 rounded-3xl cursor-pointer transition-all duration-300 hover:bg-slate-950/40"
                >
                  {/* Top Malayalam Badge */}
                  <div className="flex justify-between items-center">
                    <span className="rounded-full bg-slate-900/90 border border-white/20 px-3 py-1 text-xs font-bold text-white shadow backdrop-blur-md">
                      ✦ Excel + AI കോഴ്സ് ആമുഖം
                    </span>
                  </div>

                  {/* Center Play Button */}
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500">
                      <svg
                        className="h-8 w-8 sm:h-10 sm:w-10 translate-x-0.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="rounded-full bg-slate-900/80 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-sm">
                      വീഡിയോ കാണാം
                    </span>
                  </div>

                  {/* Bottom: Malayalam label and actual 0:48 duration */}
                  <div className="flex justify-between items-end">
                    <span className="rounded-md bg-blue-600/90 px-2 py-0.5 text-[11px] font-bold text-white">
                      48 സെക്കൻഡ് ആമുഖം
                    </span>
                    <span className="rounded-md bg-slate-950 border border-white/20 px-2.5 py-1 font-mono text-xs font-bold text-white shadow-md">
                      0:48
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* UNDER VIDEO CAPTION (MALAYALAM) */}
            <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-x-7 gap-y-2 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span>
                പ്രായോഗിക പരിശീലനം
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span>
                AI ഉപയോഗിച്ചുള്ള പഠനം
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-600">✓</span>
                യഥാർത്ഥ പ്രോജക്ടുകൾ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. PRICE BOX (WITH FACTS) ================= */}
      <section className="bg-slate-50 py-16 sm:py-24" id="pricing">
        <div className="relative mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-7 shadow-xl sm:p-10">
          <div className="absolute -top-3.5 right-6 sm:right-8 rounded-full bg-amber-400 px-4 py-1.5 text-xs font-black text-amber-950 shadow-md">
            ₹3,501 ലാഭം
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900">
            ഈ കോഴ്സിൽ നിങ്ങൾക്ക് കിട്ടുന്നത്:
          </h2>

          <div className="mt-6 space-y-3">
            {[
              "Excel + AI പ്രായോഗിക പഠനം",
              "യഥാർത്ഥ ജോലിയിലെ Excel പ്രോജക്ടുകൾ",
              "AI സഹായത്തോടെയുള്ള Excel ജോലിരീതികൾ",
              "ഡാറ്റ വിശകലനവും ഡാഷ്ബോർഡുകളും",
              "ജോലിക്ക് ഉപകരിക്കുന്ന Excel കഴിവുകൾ",
              "പഠനം പൂർത്തിയാക്കിയാൽ സർട്ടിഫിക്കറ്റ്",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-slate-700"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>

          {/* FACTS LINE NEXT TO / ABOVE PRICE */}
          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50/70 p-3.5 text-center text-xs font-semibold text-slate-700 sm:text-sm">
            റെക്കോർഡ് ചെയ്ത ക്ലാസുകൾ • 10+ മണിക്കൂർ • ലൈഫ് ടൈം ആക്സസ് •
            സർട്ടിഫിക്കറ്റ്
          </div>

          <div className="mt-6 flex items-end justify-between border-t border-dashed border-slate-200 pt-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                സാധാരണ വില
              </span>
              <div className="mt-1">
                <del className="text-3xl font-extrabold text-slate-400 sm:text-4xl">
                  ₹5,000
                </del>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                ഇന്നത്തെ പ്രത്യേക ഓഫർ
              </span>
              <strong className="mt-1 block text-3xl font-black text-blue-600 sm:text-5xl">
                ₹1,499
              </strong>
            </div>
          </div>

          <button
            type="button"
            onClick={openEnrollment}
            className="mt-6 group inline-flex w-full items-center justify-between gap-4 rounded-full bg-blue-600 px-6 py-4 text-left text-base font-extrabold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl animate-pulse"
          >
            <span>₹1,499-ന് ഇപ്പോൾ ചേരൂ</span>
            <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-xs font-semibold text-slate-500">
            <span>✓ ഉടൻ ആക്സസ്</span>
            <span>✓ പ്രായോഗിക പഠനം</span>
            <span>✓ തുടക്കക്കാർക്ക് അനുയോജ്യം</span>
          </div>
        </div>
      </section>

      {/* ================= 4. WHO THIS IS FOR ================= */}
      <section className="bg-white py-16 sm:py-24" id="who-is-this-for">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className={tag}>ആർക്കുവേണ്ടി?</div>

            <h2 className={h2 + " mt-4"}>
              ഈ കോഴ്സ്{" "}
              <span className="text-blue-600">നിങ്ങൾക്കുള്ളതാണോ?</span>
            </h2>

            <p className={lead}>
              Excel ഉപയോഗിച്ച് ജോലിയിലെ കഴിവുകൾ മെച്ചപ്പെടുത്താൻ
              ആഗ്രഹിക്കുന്നവർക്ക്.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {learners.map((learner) => (
              <div
                key={learner.title}
                className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-md"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
                  ✓
                </span>

                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {learner.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {learner.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* JOBS LINE & DISCLAIMER (ITEM 7 FIX) */}
          <div className="mt-10 mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="text-sm font-semibold text-slate-800">
              Excel കഴിവുകൾ ഏതെല്ലാം ജോലികളിൽ ഉപയോഗിക്കാം? ഓഫീസ്,
              ഓപ്പറേഷൻസ്, HR, അക്കൗണ്ട്സ്, MIS, ഡാറ്റ എന്നീ ജോലികളിൽ Excel ഒരു
              പ്രധാന കഴിവാണ്.
            </p>
            <p className="mt-2 text-xs text-slate-500 italic">
              ശ്രദ്ധിക്കുക: ഈ കോഴ്സ് ജോലി ഉറപ്പ് നൽകുന്നില്ല; ജോലിക്ക് ആവശ്യമായ
              പ്രായോഗിക കഴിവുകൾ കാര്യക്ഷമമായി പഠിപ്പിക്കുന്നു.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 5. TODAY'S CHALLENGE (PROBLEM) ================= */}
      <section className="bg-slate-50 py-16 sm:py-24" id="challenge">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <div className={tag}>ഇന്നത്തെ വെല്ലുവിളി</div>

            <h2 className={h2 + " mt-4"}>
              Basic Excel മാത്രം{" "}
              <span className="text-blue-600">എപ്പോഴും മതിയാകില്ല.</span>
            </h2>

            <p className={lead}>
              ഡാറ്റ കൂടുമ്പോഴും റിപ്പോർട്ടുകൾ സങ്കീർണ്ണമാകുമ്പോഴും
              സ്പ്രെഡ്ഷീറ്റിൽ കൂടുതൽ സമയം ചെലവഴിക്കേണ്ടി വരാം.
            </p>

            <div className="mt-6 space-y-3">
              {todayChallenges.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm text-sm font-semibold text-slate-800"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-xs font-bold text-blue-700">
                    {i + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* NUMBER CARDS MARKED "ഉദാഹരണം മാത്രം" (AS PER DEVELOPER CHECKLIST C) */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                ഓഫീസ് ടാസ്ക് ഉദാഹരണങ്ങൾ
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500">
                ഉദാഹരണം മാത്രം
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "ഡാറ്റ വോളിയം", value: "10,000+", sub: "Rows" },
                {
                  label: "റിപ്പോർട്ടുകൾ",
                  value: "20+",
                  sub: "മാസംതോറും",
                  highlight: true,
                },
                { label: "റൂട്ടീൻ ടാസ്ക്", value: "60%", sub: "ഓട്ടോമേറ്റ് ചെയ്യാം" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={
                    "flex flex-col rounded-2xl border p-4 text-center " +
                    (stat.highlight
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-200 bg-slate-50 text-slate-900")
                  }
                >
                  <span
                    className={
                      "text-xs font-semibold " +
                      (stat.highlight ? "text-blue-100" : "text-slate-500")
                    }
                  >
                    {stat.label}
                  </span>
                  <strong className="mt-2 text-xl font-black">
                    {stat.value}
                  </strong>
                  <small
                    className={
                      "mt-1 text-[11px] " +
                      (stat.highlight ? "text-blue-100" : "text-slate-400")
                    }
                  >
                    {stat.sub}
                  </small>
                </div>
              ))}
            </div>

            <p className="mt-5 text-center text-xs text-slate-500">
              ഈ വെല്ലുവിളികൾ പരിഹരിച്ച് Excel വർക്കുകൾ വളരെ വേഗത്തിൽ ചെയ്യാൻ AI
              സഹായിക്കുന്നു.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 6. WHAT YOU'LL LEARN + PRACTICAL PROJECTS ================= */}
      <section className="bg-slate-900 py-16 sm:py-24 text-white" id="modules">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
              കോഴ്സ് സിലബസ്
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              നിങ്ങൾ എന്തെല്ലാം <span className="text-blue-400">പഠിക്കും</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
              Excel + AI ഉപയോഗിച്ച് ജോലിക്ക് ഉപകരിക്കുന്ന പ്രായോഗിക കഴിവുകൾ
              ഘട്ടം ഘട്ടമായി പഠിക്കാം.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <div
                key={mod.num}
                className={
                  "rounded-2xl border p-6 flex flex-col justify-between " +
                  (mod.featured
                    ? "border-blue-500 bg-blue-950/40 ring-1 ring-blue-500"
                    : "border-slate-800 bg-slate-800/60")
                }
              >
                <div>
                  <span className="font-mono text-[11px] font-bold tracking-wider text-blue-400">
                    {mod.num}
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-white">
                    {mod.title}
                  </h3>

                  <ul className="mt-4 space-y-2">
                    {mod.topics.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-700/80 pt-3 text-xs text-slate-400">
                  <span className="text-blue-300 font-semibold">ഫലം:</span>{" "}
                  {mod.outcome}
                </div>
              </div>
            ))}
          </div>

          {/* PRACTICAL PROJECTS SECTION (NO BROKEN "PROJECT ->" LINKS) */}
          <div className="mt-20">
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
                പ്രായോഗിക പ്രോജക്ടുകൾ
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                പഠിച്ചതെല്ലാം പ്രോജക്ടുകളാക്കി മാറ്റാം.
              </h3>

              <p className="mt-3 text-sm text-slate-400 sm:text-base">
                തിയറി മാത്രമല്ല. പഠിച്ച കഴിവുകൾ ഉപയോഗിച്ച് പ്രായോഗിക
                സ്പ്രെഡ്ഷീറ്റ് പ്രോജക്ടുകൾ നിർമ്മിക്കാം.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.number}
                  className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6 shadow-sm transition-all duration-300 hover:border-blue-400/50 hover:bg-slate-800/80"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-blue-400">
                      പ്രോജക്ട് {project.number}
                    </span>
                    <span className="text-lg">📊</span>
                  </div>

                  <h4 className="mt-3 text-base font-bold text-white">
                    {project.title}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                    {project.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. MEET YOUR MENTOR (WITH PROOF) ================= */}
      <section className="bg-slate-50 py-16 sm:py-24" id="mentor">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className={tag}>നിങ്ങളുടെ മെന്റർ</div>

            <h2 className={h2 + " mt-4"}>
              നിങ്ങളുടെ യാത്ര മനസ്സിലാക്കുന്ന{" "}
              <span className="text-blue-600">ഒരാളിൽ നിന്ന് പഠിക്കാം.</span>
            </h2>

            <p className={lead}>
              പ്രായോഗിക Excel + AI കഴിവുകൾ ഘട്ടം ഘട്ടമായി പഠിപ്പിക്കുന്ന മെന്റർ.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
            <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-[260px_1fr]">
              {/* Photo */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-xl" />
                  <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-blue-500 bg-white p-1 shadow-xl sm:h-60 sm:w-60">
                    <img
                      src={mentorPhoto}
                      alt="മിഥുൻ - Excel + AI ട്രെയിനർ"
                      className="h-full w-full rounded-full object-cover object-[center_20%]"
                    />
                  </div>
                </div>
              </div>

              {/* Details & Proof */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  മിഥുൻ
                </h3>

                <p className="mt-1 text-base font-bold text-blue-600">
                  Excel + AI ട്രെയിനർ
                </p>

                {/* Proof Badges */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <span className="text-lg">🏆</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      5+ വർഷത്തെ പരിചയം
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <span className="text-lg">👥</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      2,000+ പേരെ പഠിപ്പിച്ചു
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <span className="text-lg">📊</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      പ്രായോഗിക പരിശീലനം
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <span className="text-lg">💼</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      റിയൽ-വേൾഡ് പ്രോജക്ടുകൾ
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-6 rounded-2xl border-l-4 border-blue-600 bg-blue-50/70 p-4 text-left">
                  <p className="text-sm italic leading-relaxed text-slate-700">
                    "Excel ഫോർമുലകൾ മാത്രം പഠിപ്പിക്കുകയല്ല. യഥാർത്ഥ ജോലിയിൽ
                    Excel-ഉം AI-യും എങ്ങനെ ബുദ്ധിപൂർവ്വം ഉപയോഗിക്കാം എന്നതാണ് ഈ
                    കോഴ്സിന്റെ ശ്രദ്ധ."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. CERTIFICATE ================= */}
      <section className="bg-white py-16 sm:py-24" id="certificate">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-10 sm:py-16 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-300">
              സർട്ടിഫിക്കേഷൻ
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              പഠനം പൂർത്തിയാക്കിയതിന്{" "}
              <span className="text-blue-400">ഒരു സർട്ടിഫിക്കറ്റ്.</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-300">
              കോഴ്സ് വിജയകരമായി പൂർത്തിയാക്കിയ ശേഷം നിങ്ങൾക്ക് QNAYDS നൽകുന്ന
              വെരിഫൈഡ് സർട്ടിഫിക്കറ്റ് ലഭിക്കും. നിങ്ങളുടെ റെസ്യൂമെയിലും
              LinkedIn പ്രൊഫൈലിലും ഇത് ഉപയോഗിക്കാം.
            </p>

            <button
              type="button"
              onClick={openEnrollment}
              className={ctaPrimary + " mt-8"}
            >
              <span>₹1,499-ന് ഇപ്പോൾ ചേരൂ</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* Sample Certificate (No draft text) */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-2xl border-2 border-blue-400/40 bg-slate-800 p-8 text-center shadow-2xl">
              <span className="text-2xl text-blue-400">✦</span>

              <small className="mt-3 block text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                Certificate of Completion
              </small>

              <h3 className="mt-3 text-2xl font-black text-white">
                Excel Using AI
              </h3>

              <p className="mt-1 text-xs font-medium text-blue-300">
                പ്രായോഗിക Excel & AI പഠനം
              </p>

              <div className="mx-auto my-5 h-px w-32 bg-slate-700" />

              <div className="rounded-lg bg-slate-700/50 px-3 py-1.5 text-xs text-slate-300">
                Issued by QNAYDS Academy
              </div>
            </div>

            {/* Approved caption */}
            <span className="mt-3 text-xs text-slate-400 font-medium">
              മാതൃകാ സർട്ടിഫിക്കറ്റ്
            </span>
          </div>
        </div>
      </section>

      {/* ================= 9. HOW TO ENROLL (3 SIMPLE STEPS) ================= */}
      <EnrollmentFlow onEnroll={openEnrollment} whatsappUrl={whatsappUrl} />

      {/* ================= 10. FAQ ================= */}
      <section className="bg-white py-16 sm:py-24" id="faq">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,320px)_1fr]">
          <div>
            <div className={tag}>പതിവ് ചോദ്യങ്ങൾ</div>

            <h2 className={h2 + " mt-4"}>
              പതിവ് ചോദ്യങ്ങൾ{" "}
              <span className="text-blue-600">(FAQ)</span>
            </h2>

            <p className={lead}>
              കോഴ്സിനെക്കുറിച്ച് അറിയേണ്ട പ്രധാന കാര്യങ്ങൾ.
            </p>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-xs sm:text-sm text-slate-700">
              <p className="font-semibold text-blue-900">മറ്റ് സംശയങ്ങൾ ഉണ്ടോ?</p>
              <p className="mt-1 text-slate-600">
                ഞങ്ങളുടെ WhatsApp സപ്പോർട്ട് ടീമുമായി നേരിട്ട് ചാറ്റ് ചെയ്യാം.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
              >
                💬 WhatsApp-ൽ ചോദിക്കാം →
              </a>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-slate-50/50 px-5 py-4 shadow-sm transition-all open:bg-white open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 text-sm font-bold text-slate-900 marker:content-none">
                  <span className="font-mono text-xs font-bold text-blue-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong className="flex-1 font-bold text-slate-900 text-sm sm:text-base">
                    {faq.question}
                  </strong>

                  <span className="text-xl text-slate-400 transition-transform duration-300 group-open:rotate-45 font-light">
                    +
                  </span>
                </summary>

                <p className="mt-3 pl-8 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
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
            തുടങ്ങാൻ തയ്യാറാണോ?
          </div>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Excel + AI പഠനം{" "}
            <span className="text-blue-400">ഇന്ന് തന്നെ ആരംഭിക്കൂ.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            നിങ്ങളുടെ പഠനയാത്ര ഇന്ന് തുടങ്ങാം. Excel + AI പ്രായോഗിക കോഴ്സിൽ
            ചേരാൻ താഴെയുള്ള ബട്ടൺ ഉപയോഗിക്കുക.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={openEnrollment}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-9 py-4 text-base font-extrabold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              <span>₹1,499-ന് ഇപ്പോൾ ചേരൂ</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <span>✓ പ്രായോഗിക പഠനം</span>
            <span>✓ യഥാർത്ഥ പ്രോജക്ടുകൾ</span>
            <span>✓ ജോലിക്ക് ഉപകരിക്കുന്ന കഴിവുകൾ</span>
          </div>
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
            <div className="text-center md:text-left">
              <a href="#home" className="inline-block">
                <img
                  src={logo}
                  alt="QNAYDS"
                  className="h-9 w-auto max-w-[120px] object-contain"
                />
              </a>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 max-w-sm">
                Excel + AI ഉപയോഗിച്ച് പ്രായോഗികവും കരിയറിന് ഉപകരിക്കുന്നതുമായ
                കഴിവുകൾ പഠിക്കാം.
              </p>
            </div>

            {/* Column 2: Quick Links & Policies */}
            <div className="text-center md:text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                പ്രധാന പോളിസികൾ (Policies)
              </h4>
              <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-medium text-slate-600 md:justify-start">
                <button
                  type="button"
                  onClick={() => setActivePolicyModal("terms")}
                  className="hover:text-blue-600 hover:underline"
                >
                  നിബന്ധനകളും വ്യവസ്ഥകളും
                </button>
                <span className="text-slate-300">•</span>
                <button
                  type="button"
                  onClick={() => setActivePolicyModal("privacy")}
                  className="hover:text-blue-600 hover:underline"
                >
                  സ്വകാര്യതാ നയം
                </button>
                <span className="text-slate-300">•</span>
                <button
                  type="button"
                  onClick={() => setActivePolicyModal("refund")}
                  className="hover:text-blue-600 hover:underline"
                >
                  റീഫണ്ട് നയം
                </button>
                <span className="text-slate-300">•</span>
                <button
                  type="button"
                  onClick={() => setActivePolicyModal("contact")}
                  className="hover:text-blue-600 hover:underline"
                >
                  ബന്ധപ്പെടുക
                </button>
              </div>
            </div>

            {/* Column 3: Contact Details (Trust Item 4) */}
            <div className="text-center text-xs text-slate-600 md:text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                കസ്റ്റമർ സപ്പോർട്ട് (Contact Us)
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
                    <span>✉ ഇമെയിൽ:</span> support@qnayds.in
                  </a>
                </li>
                <li className="text-slate-500">
                  <span>📍 വിലാസം:</span> QNAYDS Academy, Kerala, India
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright line */}
          <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
            <p>© 2026 QNAYDS ACADEMY. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം.</p>
          </div>
        </div>
      </footer>

      {/* ================= 13. STICKY FLOATING CTA BAR ================= */}
      {showFloatingCta && (
        <div className="fixed inset-x-3 bottom-3 z-[9998] rounded-2xl border border-blue-200 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-md sm:inset-x-6 sm:bottom-4 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            {/* Offer + Countdown (No fake 20 seats) */}
            <div className="flex items-center justify-between gap-3 sm:justify-start sm:gap-4">
              <span className="text-xs font-bold text-slate-900">
                🔥 പരിമിതകാല ഓഫർ
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <span>ബാക്കി:</span>
                <span className="rounded bg-slate-900 px-2 py-1 font-mono font-bold text-white">
                  {String(timeLeft.hours).padStart(2, "0")}:
                  {String(timeLeft.minutes).padStart(2, "0")}:
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Price + Button */}
            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <div className="flex items-center gap-2">
                <del className="text-sm font-semibold text-slate-400">
                  ₹5,000
                </del>
                <strong className="text-xl font-black text-blue-600">
                  ₹1,499
                </strong>
              </div>

              <button
                type="button"
                onClick={openEnrollment}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-extrabold text-white shadow-md shadow-blue-500/30 transition-all hover:bg-blue-700 animate-pulse sm:text-sm"
              >
                <span>₹1,499-ന് ഇപ്പോൾ ചേരൂ</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= 14. FLOATING WHATSAPP BUTTON ================= */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 z-[9997] flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 sm:bottom-6 sm:right-6"
      >
        <svg
          className="h-7 w-7 fill-current"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.59 4.44 1.7 6.3L3 29l6.9-1.65A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 23.7c-2.08 0-4.11-.56-5.88-1.62l-.42-.25-4.1.98.98-4-.27-.43A10.67 10.67 0 1 1 16 26.7Zm5.86-7.98c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.81 1.04-.99 1.25-.18.21-.36.24-.68.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.59-1.9-1.77-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.36.47-.54.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.76.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>

      {/* ================= 15. POLICY MODALS ================= */}
      {activePolicyModal && (
        <div
          className="fixed inset-0 z-[10001] flex items-center justify-center overflow-y-auto bg-slate-900/60 p-4 backdrop-blur-sm"
          onClick={() => setActivePolicyModal(null)}
        >
          <div
            className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-slate-900">
                {activePolicyModal === "privacy" && "സ്വകാര്യതാ നയം (Privacy Policy)"}
                {activePolicyModal === "terms" && "നിബന്ധനകളും വ്യവസ്ഥകളും (Terms & Conditions)"}
                {activePolicyModal === "refund" && "റീഫണ്ട് നയം (Refund Policy)"}
                {activePolicyModal === "contact" && "ബന്ധപ്പെടുക (Contact Us)"}
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
                  <h4 className="font-bold text-slate-800">ശേഖരിക്കുന്ന വിവരങ്ങൾ:</h4>
                  <p>
                    നിങ്ങൾ കോഴ്സിൽ എൻറോൾ ചെയ്യുമ്പോൾ നൽകുന്ന പേര്, ഇമെയിൽ വിലാസം,
                    ഫോൺ നമ്പർ എന്നിവ കോഴ്സ് ആക്സസ് വിവരങ്ങൾ അയക്കാനും സപ്പോർട്ട് നൽകാനും
                    മാത്രമാണ് ഉപയോഗിക്കുന്നത്.
                  </p>
                  <h4 className="font-bold text-slate-800">പേയ്മെന്റ് സുരക്ഷ:</h4>
                  <p>
                    എല്ലാ സാമ്പത്തിക ഇടപാടുകളും സുരക്ഷിതമായ Razorpay പേയ്മെന്റ് ഗേറ്റ്‌വേ
                    വഴിയാണ് നടക്കുന്നത്. നിങ്ങളുടെ കാർഡ്, ബാങ്ക് വിവരങ്ങൾ ഞങ്ങൾ
                    സൂക്ഷിക്കുന്നില്ല.
                  </p>
                  <h4 className="font-bold text-slate-800">വിവരങ്ങൾ പങ്കിടൽ:</h4>
                  <p>
                    ഞങ്ങൾ നിങ്ങളുടെ വ്യക്തിഗത വിവരങ്ങൾ യാതൊരു കാരണവശാലും മൂന്നാം
                    കക്ഷികൾക്ക് വിൽക്കുകയോ കൈമാറുകയോ ചെയ്യില്ല.
                  </p>
                </>
              )}

              {activePolicyModal === "terms" && (
                <>
                  <p>
                    Excel Using AI കോഴ്സിൽ ചേരുന്നതിലൂടെ താഴെ പറയുന്ന
                    നിബന്ധനകൾക്ക് നിങ്ങൾ സമ്മതം നൽകുന്നു:
                  </p>
                  <h4 className="font-bold text-slate-800">ഉപയോഗാവകാശം:</h4>
                  <p>
                    കോഴ്സ് കണ്ടന്റുകൾ, വീഡിയോകൾ, പ്രോജക്റ്റ് ഫയലുകൾ എന്നിവ വ്യക്തിഗത
                    പഠന ആവശ്യങ്ങൾക്ക് മാത്രമുള്ളതാണ്. ഇത് അനധികൃതമായി പങ്കിടുകയോ
                    പുനർവിൽപ്പന നടത്തുകയോ ചെയ്യാൻ പാടില്ല.
                  </p>
                  <h4 className="font-bold text-slate-800">ആക്സസ് & സർട്ടിഫിക്കറ്റ്:</h4>
                  <p>
                    വിജയകരമായി ഫീസ് അടയ്ക്കുന്ന വിദ്യാർത്ഥികൾക്ക് കോഴ്സിലേക്ക് ലൈഫ് ടൈം
                    ആക്സസും, പൂർത്തിയാക്കുമ്പോൾ QNAYDS സർട്ടിഫിക്കറ്റും ലഭിക്കുന്നതാണ്.
                  </p>
                </>
              )}

              {activePolicyModal === "refund" && (
                <>
                  <p>
                    Excel Using AI തൽക്ഷണം ആക്സസ് ലഭിക്കുന്ന ഡിജിറ്റൽ ലേണിംഗ് കോഴ്സാണ്.
                  </p>
                  <h4 className="font-bold text-slate-800">റീഫണ്ട് നയം:</h4>
                  <p>
                    പേയ്മെന്റ് വിജയകരമായി പൂർത്തിയായ ഉടൻ തന്നെ ലോഗിൻ വിവരങ്ങളും ഡിജിറ്റൽ
                    കണ്ടന്റുകളിലേക്കുള്ള ആക്സസും ലഭിക്കുന്നതിനാൽ, ഡിജിറ്റൽ പ്രോഡക്റ്റുകൾക്ക്
                    സാധാരണയായി റീഫണ്ട് അനുവദിക്കുന്നതല്ല.
                  </p>
                  <h4 className="font-bold text-slate-800">സപ്പോർട്ടും സഹായവും:</h4>
                  <p>
                    സാങ്കേതിക തടസ്സങ്ങൾ മൂലമോ അബദ്ധത്തിലോ ഇരട്ടി പേയ്മെന്റ് നടക്കുകയാണെങ്കിൽ
                    support@qnayds.in അല്ലെങ്കിൽ WhatsApp വഴി ബന്ധപ്പെട്ടാൽ 24
                    മണിക്കൂറിനകം പരിശോധിച്ച് പരിഹാരം കാണുന്നതാണ്.
                  </p>
                </>
              )}

              {activePolicyModal === "contact" && (
                <>
                  <p>
                    കോഴ്സിനെക്കുറിച്ചോ നിങ്ങളുടെ എൻറോൾമെന്റിനെക്കുറിച്ചോ എന്തെങ്കിലും
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
                      <strong>ഇമെയിൽ:</strong>{" "}
                      <a
                        href="mailto:support@qnayds.in"
                        className="text-blue-600 underline font-semibold"
                      >
                        support@qnayds.in
                      </a>
                    </p>
                    <p>
                      <strong>ഓഫീസ് വിലാസം:</strong> QNAYDS Academy, Kerala, India
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
                <h2 className="text-lg font-extrabold text-slate-900">
                  എൻറോൾമെന്റ് പൂർത്തിയാക്കൂ
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  തുടരുന്നതിനായി നിങ്ങളുടെ വിവരങ്ങൾ നൽകുക.
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
                    Excel + AI പ്രായോഗിക കോഴ്സ്
                  </strong>
                  <del className="text-xs text-slate-400">₹5,000</del>
                  <div className="mt-1 text-xl font-extrabold text-blue-600">
                    ₹1,499
                  </div>
                </div>

                <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-950">
                  ₹3,501 ലാഭം
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
                  <span className="text-slate-400">👤</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="പൂർണ്ണമായ പേര് (Full Name)"
                    required
                    className="w-full border-0 p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                  <span className="text-slate-400">✉</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="ഇമെയിൽ വിലാസം (Email)"
                    required
                    className="w-full border-0 p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                  <span className="text-slate-400">📞</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="ഫോൺ നമ്പർ (WhatsApp Number)"
                    required
                    className="w-full border-0 p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                  />
                </div>

                {/* SECURE CHECKOUT */}
                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                    <span>🛡️</span>
                    <strong>സുരക്ഷിത പേയ്മെന്റ് (Secure Checkout)</strong>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    Razorpay വഴി 100% സുരക്ഷിതമായ പേയ്മെന്റ്. പേയ്മെന്റിന് ശേഷം
                    ആക്റ്റിവേഷൻ ലിങ്ക് നിങ്ങളുടെ ഇമെയിലിൽ എത്തും.
                  </p>
                </div>

                {/* ACTION BUTTONS */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:bg-slate-50"
                    onClick={closeEnrollment}
                  >
                    ക്യാൻസൽ
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700"
                  >
                    ₹1,499 അടയ്ക്കാം →
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
