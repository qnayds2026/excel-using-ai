import React, { useState } from "react";
import logo from "./assets/QNAYDS_LOGO.png";

const EXCEL_COURSE_ID = 13;
const API_URL = "http://localhost:3000";
console.log("API_URL =", API_URL);
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
  "🌱 Excel Beginner — Zero മുതൽ പഠിക്കാൻ ആഗ്രഹിക്കുന്നവർ",
  "📈 Excel Users — Existing skills next level-ലേക്ക് upgrade ചെയ്യാൻ ആഗ്രഹിക്കുന്നവർ",
  "⚡ Advanced Learners — Advanced Excel + AI പഠിക്കാൻ ആഗ്രഹിക്കുന്നവർ",
  "🎓 Freshers — Job-ready skills build ചെയ്യാൻ ആഗ്രഹിക്കുന്നവർ",
  "💼 Office / MIS Professionals — Daily work faster & smarter ആക്കാൻ ആഗ്രഹിക്കുന്നവർ",
  "📊 Data & Reporting Professionals — Reports & dashboards powerful ആക്കാൻ ആഗ്രഹിക്കുന്നവർ",
  "👥 HR & Accounts Professionals — Repetitive work simplify ചെയ്യാൻ ആഗ്രഹിക്കുന്നവർ",
  "🚀 Freelancers & Business Owners — Data & reporting സ്വന്തം കൈയ്യിൽ control ചെയ്യാൻ ആഗ്രഹിക്കുന്നവർ",
];

const skills = [
  "Excel Basics — Zero മുതൽ Strong Foundation വരെ",
  "Formulas & Functions — Smart calculations ചെയ്യാൻ",
  "Data Analysis — Raw Data → Useful Insights",
  "Reports & Dashboards — Professional-looking reports build ചെയ്യാൻ",
  "Excel + AI — AI-യെ നിങ്ങളുടെ Excel Assistant ആക്കാൻ",
  "Automation — Repetitive tasks കുറച്ച് time save ചെയ്യാൻ",
  "MIS & Workplace Skills — Real office tasks confidently handle ചെയ്യാൻ",
  "Advanced Excel Projects — പഠിച്ചതെല്ലാം real-world projects വഴി practice ചെയ്യാൻ",
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

const modules = [
  {
    number: "01",
    title: "Excel Fundamentals",
    duration: "3 Hours",
    items: [
      "Excel Interface & Navigation",
      "Workbook & Worksheet Structure",
      "Cells & Cell Referencing",
      "Data Types (Text, Number, Date)",
      "Formatting & Styles",
      "Essential Keyboard Shortcuts",
    ],
    outcome: "Strong Excel foundation",
  },
  {
    number: "03",
    title: "Data Handling & Analysis",
    duration: "4 Hours",
    items: [
      "Sorting & Filtering Data",
      "Data Validation (Dropdown Lists)",
      "Remove Duplicates",
      "Text Functions (LEFT, RIGHT, MID, LEN)",
      "Pivot Tables",
      "Pivot Charts",
    ],
    outcome: "Used in Real-Time Office Work",
  },
  {
    number: "04",
    title: "Reports & Dashboards",
    duration: "3 Hours",
    items: [
      "Chart Types (Column, Bar, Line, Pie)",
      "Dynamic Charts",
      "KPI Reports",
      "Dashboard Design Principles",
      "Professional Report Presentation",
    ],
    outcome: "Management-Level Reporting Skills",
  },
  {
    number: "05",
    title: "AI Tools with Excel",
    duration: "5 Hours",
    items: [
      "Introduction to AI in Excel",
      "ChatGPT for Excel",
      "Formula generation",
      "Error fixing",
      "Data explanation",
      "AI-assisted data cleaning",
      "Smart analysis & insights",
      "Prompt writing for Excel tasks",
    ],
    outcome: "Work Faster & Smarter Using AI",
  },
  {
    number: "06",
    title: "Automation & Job Preparation",
    duration: "1 Hour",
    items: [
      "AI-assisted Excel automation",
      "Monthly report automation",
      "Resume Excel projects",
      "Excel interview questions",
      "Practical Excel test preparation",
    ],
    outcome: "Job-Ready Skill Development",
  },
  {
    number: "08",
    title: "Excel for MIS & Management Reporting",
    duration: "",
    items: [
      "MIS report structure",
      "Daily / Weekly / Monthly reports",
      "Performance tracking sheets",
      "KPI & scorecard creation",
      "Management-ready report formats",
    ],
    outcome: "",
  },
  {
    number: "09",
    title: "Excel for HR & Accounts",
    duration: "",
    items: [
      "HR attendance & leave tracker",
      "Payroll basics using Excel",
      "Incentive & salary calculation",
      "Expense & budget tracking",
      "Accounts summary sheets",
    ],
    outcome: "",
  },
  {
    number: "10",
    title: "Excel Automation with AI",
    duration: "",
    items: [
      "Automating repetitive Excel tasks",
      "AI-assisted formula automation",
      "Monthly report auto-generation",
      "Workflow optimization using AI prompts",
    ],
    outcome: "",
  },
  {
    number: "12",
    title: "Industry Projects & Case Studies",
    duration: "",
    items: [
      "Real company data projects",
      "Sales & business analysis project",
      "HR / finance-based case studies",
      "End-to-end Excel + AI project",
    ],
    outcome: "",
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
function App() {
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  const openEnrollment = (e) => {

    e.preventDefault();
    setShowEnrollment(true);
  };

  const closeEnrollment = () => {
    setShowEnrollment(false);
  };
  if (showPaymentSuccess) {
    return (
      <div className="payment-success-page">
        <div className="payment-success-card">
          <div className="success-icon">✓</div>

          <h1>Payment Successful!</h1>

          <p className="success-message">
            Thank you for enrolling in the Excel Using AI Course.
          </p>

          <div className="email-box">
            <div className="email-icon">✉</div>

            <div>
              <h3>Check your email</h3>
              <p>
                Please check your email for the activation link and course
                access details.
              </p>
            </div>
          </div>

          <button
            className="whatsapp-button"
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
            className="back-button"
            onClick={() => setShowPaymentSuccess(false)}
          >
            ← Back to Landing Page
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}

      <header className="fixed inset-x-0 top-0 z-[9999] px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-5 shadow-xl backdrop-blur-md sm:px-7">
          <a href="#home" className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="QNAYDS"
              className="block h-11 w-auto max-w-[150px] object-contain sm:h-12"
            />
          </a>

          <button
            type="button"
            onClick={openEnrollment}
            className="cta-pulse group inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl sm:px-6 sm:text-base"
          >
            Enroll Now
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </nav>
      </header>

      {/* ================= HERO ================= */}

<main>
  <section className="hero" id="home">
    <div className="hero-glow"></div>

    <div className="container hero-grid">
      <div className="hero-content">

        <div className="eyebrow">
          ✦ Beginner മുതൽ Advanced വരെ — Excel + AI
        </div>

        <h1>
          Excel പഠിക്കൂ.
          <br />
          <span>AI ഉപയോഗിച്ച് Smart ആയി Work ചെയ്യൂ.</span>
        </h1>

        <p className="hero-text">
          Basics മുതൽ Advanced Excel, AI, Automation വരെ practical ആയി പഠിച്ച്
          നിങ്ങളുടെ skills next level-ലേക്ക് upgrade ചെയ്യൂ.
        </p>

        <div className="hero-actions">
          <button
            type="button"
            onClick={openEnrollment}
            className="cta-pulse group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            Start Learning Now
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <a
            href="#learn"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-800 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50"
          >
            What Will You Learn?
          </a>
        </div>

        <div className="hero-points">
          <span>✓ Beginner Friendly</span>
          <span>✓ Advanced Skills</span>
          <span>✓ Excel + AI</span>
        </div>

      </div>

      {/* Excel Preview */}

      <div className="hero-visual">
        <div className="excel-window">
          <div className="excel-top">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="excel-title">Sales_Report.xlsx</div>

            <div className="ai-badge">✦ AI</div>
          </div>

          <div className="excel-toolbar">
            <span>Home</span>
            <span>Insert</span>
            <span>Data</span>
            <span>Review</span>
          </div>

          <div className="formula-bar">
            <span>fx</span>
            <strong>=SUM(C2:C6)</strong>
          </div>

          <div className="spreadsheet">
            <div className="sheet-row sheet-header">
              <div>Product</div>
              <div>Units</div>
              <div>Revenue</div>
              <div>Growth</div>
            </div>

            <div className="sheet-row">
              <div>Laptop Pro</div>
              <div>128</div>
              <div>₹1,53,600</div>
              <div>+18.4%</div>
            </div>

            <div className="sheet-row">
              <div>Monitor</div>
              <div>94</div>
              <div>₹82,300</div>
              <div>+12.8%</div>
            </div>

            <div className="sheet-row">
              <div>Keyboard</div>
              <div>216</div>
              <div>₹43,200</div>
              <div>+24.1%</div>
            </div>

            <div className="sheet-row">
              <div>Mouse</div>
              <div>187</div>
              <div>₹28,050</div>
              <div>+9.7%</div>
            </div>
          </div>
        </div>

        <div className="ai-card">
          <div className="ai-card-icon">✦</div>

          <div>
            <strong>AI സഹായം</strong>

            <p>“ഈ data-യിൽ ഏറ്റവും കൂടുതൽ വളർച്ച ഏത് product-നാണ്?”</p>
          </div>
        </div>
      </div>
    </div>
  </section>

        {/* ================= VIDEO SECTION ================= */}

<section className="video-section">
  <div className="container">

    <div className="video-heading">
      <div className="section-tag">
        ഈ Course-ൽ എന്താണ് പഠിക്കുന്നത്?
      </div>

      <h2>
        Excel പഠിക്കുക മാത്രമല്ല.
        <br />
        <span>Excel ഉപയോഗിച്ച് Work ചെയ്യാൻ പഠിക്കൂ.</span>
      </h2>

      <p>
        Basic formulas മുതൽ Data Analysis, Reports, Dashboards, AI,
        Automation വരെ step-by-step ആയി പഠിക്കാം. പഠിച്ച ഓരോ skill-ഉം
        real-world projects വഴി practice ചെയ്ത് workplace-ൽ ഉപയോഗിക്കാൻ
        തയ്യാറാകൂ.
      </p>
    </div>

    <div className="course-video">

      <div className="video-frame">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "white",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: "0 0 8px" }}>
            കോഴ്സ് വീഡിയോ
          </h3>

          <p style={{ margin: 0, opacity: 0.75 }}>
            വീഡിയോ ഉടൻ ഇവിടെ ലഭ്യമാകും
          </p>
        </div>

        <div className="video-overlay">
          <div className="play-button">▶</div>
        </div>
      </div>

      <div className="video-points">

        <div>
          <span>✓</span>
          Step-by-step Practical Learning
        </div>

        <div>
          <span>✓</span>
          Excel + AI Workplace Skills
        </div>

        <div>
          <span>✓</span>
          Real-world Projects &amp; Practice
        </div>

      </div>

    </div>
  </div>
</section>

{/* ================= COURSE VALUE STACK ================= */}

<section className="value-section">
  <div className="value-card">

    <div className="save-badge">
      SAVE ₹3,501
    </div>

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

    <div className="value-price">
      <span>TODAY</span>

      <div className="regular-price">
        REGULAR PRICE <del>₹5,000</del>
      </div>

      <strong>₹1,499</strong>
    </div>

    {/* MAIN ENROLL BUTTON */}

    <button
      type="button"
      onClick={openEnrollment}
      className="cta-pulse group inline-flex w-full items-center justify-between gap-4 rounded-full bg-blue-600 px-6 py-4 text-left text-base font-extrabold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
    >
      <span>YES, I WANT TO LEARN EXCEL + AI</span>

      <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>

    <div className="value-trust">
      <span>✓ Instant Access</span>
      <span>✓ Practical Learning</span>
      <span>✓ Beginner Friendly</span>
    </div>

  </div>
</section>

        {/* ================= TRUST ================= */}

<section className="trust-section">
  <div className="container trust-inner">

    <div>
      <span className="trust-number">Excel + AI</span>

      <span className="trust-label">
        ഇന്നത്തെ Workplace-ന് ആവശ്യമായ Skills
      </span>
    </div>

    <div className="trust-divider"></div>

    <p>
      Excel-ൽ formulas മാത്രം പഠിക്കാതെ, Data Analysis, Reports,
      Dashboards, AI, Automation എന്നിവ real-world work-ൽ ഉപയോഗിക്കാൻ
      പഠിക്കാം.
    </p>

  </div>
</section>

    {/* ================= INTRO ================= */}

<section className="intro-modern" id="learn">
  <div className="intro-modern-container">

    {/* LEFT CONTENT */}
    <div className="intro-copy">

      <div className="intro-label">
        ✦ Excel + AI
      </div>

      <h2>
        Excel പഠിക്കൂ.
        <br />
        <span>Skill Upgrade ചെയ്യൂ.</span>
      </h2>

      <p>
        Excel basics മുതൽ advanced formulas, data analysis,
        professional reports, dashboards, AI & automation വരെ
        practical ആയി step-by-step പഠിക്കാം.
      </p>

      {/* 3 CARDS */}
      <div className="intro-highlights">

        <div className="intro-highlight">
          <div className="intro-number">01</div>
          <div>
            <strong>Learn</strong>
            <small>Excel Basics</small>
          </div>
        </div>

        <div className="intro-highlight">
          <div className="intro-number purple">02</div>
          <div>
            <strong>Build</strong>
            <small>Real-world Skills</small>
          </div>
        </div>

        <div className="intro-highlight">
          <div className="intro-number green">03</div>
          <div>
            <strong>Upgrade</strong>
            <small>Excel + AI</small>
          </div>
        </div>

      </div>
    </div>

    {/* RIGHT EXCEL + AI VISUAL */}
    <div className="intro-visual">

      <div className="intro-orbit orbit-1"></div>
      <div className="intro-orbit orbit-2"></div>

      {/* Excel */}
      <div className="excel-logo-box">
        <div className="excel-logo-inner">
          <span>X</span>
        </div>
      </div>

      {/* AI */}
      <div className="ai-logo-box">
        <span>AI</span>

        <i className="ai-node node-1"></i>
        <i className="ai-node node-2"></i>
        <i className="ai-node node-3"></i>
        <i className="ai-node node-4"></i>
      </div>

      {/* Floating mini cards */}
      <div className="floating-card chart-card">
        <span>▥</span>
      </div>

      <div className="floating-card formula-card">
        <small>fx</small>
        <strong>=SUM(C2:C6)</strong>
      </div>

      <div className="floating-card graph-card">
        <span>◢</span>
      </div>

      <div className="intro-spark spark-a">✦</div>
      <div className="intro-spark spark-b">✦</div>

    </div>

  </div>
</section>    

{/* ================= WHO IS THIS FOR ================= */}

<section className="section audience-section">
  <div className="container">

    <div className="section-heading">
      <div className="section-tag">ആർക്കുവേണ്ടി?</div>

      <h2>
        നിങ്ങളുടെ Level ഏതായാലും,
        <br />
        <span>Next Level ഇവിടെ തുടങ്ങാം.</span>
      </h2>

      <p>
        Excel-ൽ ഒരു Beginner ആണെങ്കിലും, already Excel ഉപയോഗിക്കുന്ന
        professional ആണെങ്കിലും, Excel + AI skills ഉപയോഗിച്ച് കൂടുതൽ
        confidently, quickly & professionally work ചെയ്യാൻ പഠിക്കാം.
      </p>
    </div>

    <div className="audience-grid">
      {learners.map((learner, index) => (
        <div className="audience-card" key={learner}>

          <span className="card-number">
            0{index + 1}
          </span>

          <span className="check-icon">✓</span>

          <h3>{learner}</h3>

          <p>
            {index === 0 &&
              "Excel ഒന്നും അറിയാത്തവർക്കും basics മുതൽ step-by-step ആയി strong foundation build ചെയ്യാം."}

            {index === 1 &&
              "Existing Excel skills കൂടുതൽ powerful ആക്കാൻ advanced formulas, analysis, dashboards & AI പഠിക്കാം."}

            {index === 2 &&
              "Advanced Excel knowledge ഉപയോഗിച്ച് AI, automation & smarter workflows പഠിച്ച് next level-ലേക്ക് പോകാം."}

            {index === 3 &&
              "Job-ready Excel + AI skills develop ചെയ്ത് interviews-ലും workplace tasks-ലും കൂടുതൽ confident ആകാം."}

            {index === 4 &&
              "Daily MIS, reporting & office tasks കൂടുതൽ fast, accurate & professional ആയി handle ചെയ്യാം."}

            {index === 5 &&
              "Raw data-യെ meaningful insights, reports & professional dashboards ആക്കി മാറ്റാൻ പഠിക്കാം."}

            {index === 6 &&
              "Attendance, payroll, expenses, reports തുടങ്ങിയ repetitive tasks Excel + AI ഉപയോഗിച്ച് smart ആക്കാം."}

            {index === 7 &&
              "Business, client reporting & everyday data work കൂടുതൽ efficiently manage ചെയ്യാൻ practical skills നേടാം."}
          </p>

        </div>
      ))}
    </div>

  </div>
</section>
{/* ================= PROBLEM ================= */}

<section className="section problem-section">
  <div className="container problem-grid">

    <div className="problem-content">

      <div className="section-tag">
        നിങ്ങൾക്കും ഇതിൽ ഏതെങ്കിലും പരിചിതമാണോ?
      </div>

      <h2>
        Excel അറിയാം...
        <br />
        <span>പക്ഷേ Work ചെയ്യുമ്പോൾ?</span>
      </h2>

      <p>
        Excel-ൽ basic formulas അറിയുന്നതുകൊണ്ട് മാത്രം daily work
        എളുപ്പമാകണമെന്നില്ല. Data കൂടുമ്പോൾ, reports വരുമ്പോൾ,
        repetitive tasks കൂടുമ്പോൾ കൂടുതൽ സമയം പോകാം.
      </p>

      <div className="problem-list">

        <div>
          <span>01</span>
          Reports തയ്യാറാക്കാൻ മണിക്കൂറുകൾ ചെലവാകുന്നു
        </div>

        <div>
          <span>02</span>
          വലിയ Data നോക്കുമ്പോൾ എന്ത് ചെയ്യണമെന്ന് confusion
        </div>

        <div>
          <span>03</span>
          ഒരേ Excel tasks വീണ്ടും വീണ്ടും ചെയ്യേണ്ടി വരുന്നു
        </div>

        <div>
          <span>04</span>
          Practical Excel skills-ൽ confidence കുറവാണ്
        </div>

      </div>

    </div>

    <div className="problem-visual">

      <div className="stat-card">
        <span>Data</span>
        <strong>12,840</strong>
        <small>Rows to Analyze</small>
      </div>

      <div className="stat-card active">
        <span>Reports</span>
        <strong>24</strong>
        <small>This Month</small>
      </div>

      <div className="stat-card">
        <span>Tasks</span>
        <strong>68%</strong>
        <small>Repeated Work</small>
      </div>

    </div>

  </div>
</section>
{/* ================= FEATURES ================= */}

<section className="section features-section" id="features">
  <div className="container">

    <div className="section-heading centered">

      <div className="section-tag">
        നിങ്ങൾ പഠിക്കുന്നത്
      </div>

      <h2>
        ഒരു Course.
        <br />
        <span>Multiple Workplace Skills.</span>
      </h2>

      <p>
        Excel + AI ഉപയോഗിച്ച് daily work കൂടുതൽ fast, accurate &
        professional ആക്കാൻ ആവശ്യമായ practical skills step-by-step ആയി
        പഠിക്കാം.
      </p>

    </div>

    <div className="features-grid">
      {features.map((feature) => (
        <div className="feature-card" key={feature.title}>

          <div className="feature-icon">
            {feature.icon}
          </div>

          <h3>{feature.title}</h3>

          <p>{feature.text}</p>

          <span className="feature-arrow">
            ↗
          </span>

        </div>
      ))}
    </div>

  </div>
</section>
{/* ================= SKILLS ================= */}

<section className="section skills-section" id="learn">
  <div className="container skills-grid">

    <div className="skills-heading">

      <div className="section-tag">
        Course Skills
      </div>

      <h2>
        Excel-ൽ നിന്ന്
        <span> Workplace-ready Skills-ലേക്ക്.</span>
      </h2>

      <p>
        Basic Excel മുതൽ Data Analysis, Reports, Dashboards, AI,
        Automation എന്നിവ വരെ step-by-step ആയി പഠിച്ച്, real-world
        work-ൽ ഉപയോഗിക്കാൻ കഴിയുന്ന practical skillset build ചെയ്യാം.
      </p>

    </div>

    <div className="skills-list">
      {skills.map((skill, index) => (
        <div className="skill-item" key={skill}>

          <span>
            {String(index + 1).padStart(2, "0")}
          </span>

          <strong>{skill}</strong>

          <i>✓</i>

        </div>
      ))}
    </div>

  </div>
</section>
{/* ================= COURSE STRUCTURE / MODULES ================= */}

<section className="modules-section" id="modules">
  <div className="modules-container">

    <div className="modules-heading">
      <div className="section-tag">
        Course Structure
      </div>

      <h2>
        Basic Excel മുതൽ
        <br />
        <span>Workplace Skills വരെ.</span>
      </h2>

      <p>
        Excel + AI പഠനം step-by-step ആയി മുന്നോട്ട് കൊണ്ടുപോകുന്ന രീതിയിൽ
        practical modules, real-world tasks, projects എന്നിവയിലൂടെ
        പഠിക്കാം.
      </p>
    </div>

    <div className="modules-grid">

      <div className="module-card">
        <div className="module-icon">📊</div>

        <span className="module-number">MODULE 01</span>

        <h3>Excel Fundamentals</h3>

        <ul className="module-topics">
          <li>Excel Interface & Navigation</li>
          <li>Workbook & Worksheet Structure</li>
          <li>Cells & Cell Referencing</li>
          <li>Data Types & Formatting</li>
          <li>Essential Keyboard Shortcuts</li>
        </ul>

        <div className="module-outcome">
          Outcome: <strong>Strong Excel Foundation</strong>
        </div>
      </div>

      <div className="module-card">
        <div className="module-icon">📈</div>

        <span className="module-number">MODULE 02</span>

        <h3>Data Handling & Analysis</h3>

        <ul className="module-topics">
          <li>Sorting & Filtering Data</li>
          <li>Data Validation</li>
          <li>Remove Duplicates</li>
          <li>Text Functions</li>
          <li>Pivot Tables & Charts</li>
        </ul>

        <div className="module-outcome">
          Outcome: <strong>Turn Data into Useful Insights</strong>
        </div>
      </div>

      <div className="module-card">
        <div className="module-icon">📊</div>

        <span className="module-number">MODULE 03</span>

        <h3>Reports & Dashboards</h3>

        <ul className="module-topics">
          <li>Chart Types</li>
          <li>Dynamic Charts</li>
          <li>KPI Reports</li>
          <li>Dashboard Design</li>
          <li>Professional Reporting</li>
        </ul>

        <div className="module-outcome">
          Outcome: <strong>Build Professional Reports</strong>
        </div>
      </div>

      <div className="module-card featured">
        <div className="module-icon">✦</div>

        <span className="module-number">MODULE 04</span>

        <h3>AI Tools with Excel</h3>

        <ul className="module-topics">
          <li>Introduction to AI in Excel</li>
          <li>ChatGPT for Excel</li>
          <li>Formula Generation</li>
          <li>Error Fixing</li>
          <li>AI-assisted Data Cleaning</li>
          <li>Smart Analysis & Insights</li>
        </ul>

        <div className="module-outcome">
          Outcome: <strong>Work Smarter with Excel + AI</strong>
        </div>
      </div>

      <div className="module-card">
        <div className="module-icon">⚙</div>

        <span className="module-number">MODULE 05</span>

        <h3>Automation with AI</h3>

        <ul className="module-topics">
          <li>Automating Repetitive Tasks</li>
          <li>AI-assisted Formula Automation</li>
          <li>Monthly Report Generation</li>
          <li>Workflow Optimization</li>
        </ul>

        <div className="module-outcome">
          Outcome: <strong>Reduce Repetitive Excel Work</strong>
        </div>
      </div>

      <div className="module-card">
        <div className="module-icon">💼</div>

        <span className="module-number">MODULE 06</span>

        <h3>MIS, HR & Accounts</h3>

        <ul className="module-topics">
          <li>MIS Report Structure</li>
          <li>Daily / Weekly / Monthly Reports</li>
          <li>HR Attendance & Leave Tracker</li>
          <li>Payroll Basics</li>
          <li>Expense & Budget Tracking</li>
        </ul>

        <div className="module-outcome">
          Outcome: <strong>Apply Excel to Office Work</strong>
        </div>
      </div>

    </div>

    <div className="modules-bottom">
      <p>
        <strong>Job-Ready Learning:</strong>{" "}
        Real Office Tasks • Practical Projects • Excel + AI
      </p>
    </div>

  </div>
</section>
{/* ================= LEARNING PATH ================= */}

<section className="section path-section">
  <div className="container">

    <div className="section-heading centered">
      <div className="section-tag">
        Practical Learning Path
      </div>

      <h2>
        പഠിക്കുക.
        <span> Practice ചെയ്യുക.</span>
        <br />
        Skill ആയി മാറ്റുക.
      </h2>

      <p>
        പഠിച്ച concepts വെറും theory ആയി നിർത്താതെ, practice ചെയ്ത്
        real-world projects വഴി practical Excel + AI skills ആയി
        build ചെയ്യാം.
      </p>
    </div>

    <div className="path">
      <div className="path-line"></div>

      <div className="path-item">
        <span>01</span>
        <strong>പഠിക്കുക</strong>
        <p>Excel + AI concepts മനസ്സിലാക്കുക</p>
      </div>

      <div className="path-item">
        <span>02</span>
        <strong>Practice ചെയ്യുക</strong>
        <p>Real-world tasks ചെയ്ത് പഠിക്കുക</p>
      </div>

      <div className="path-item">
        <span>03</span>
        <strong>Build ചെയ്യുക</strong>
        <p>Practical Excel projects നിർമ്മിക്കുക</p>
      </div>

      <div className="path-item">
        <span>04</span>
        <strong>Apply ചെയ്യുക</strong>
        <p>Workplace scenarios-ൽ skills ഉപയോഗിക്കുക</p>
      </div>

      <div className="path-item">
        <span>05</span>
        <strong>Demonstrate ചെയ്യുക</strong>
        <p>നിങ്ങളുടെ practical skills confidently കാണിക്കുക</p>
      </div>

    </div>
  </div>
</section>

{/* ================= OFFICE SKILLS ================= */}

<section className="section office-section">
  <div className="container office-grid">

    <div className="office-visual">
      <div className="office-card">

        <div className="office-header">
          <span>Today's Work</span>
          <span>Excel + AI</span>
        </div>

        <div className="office-task">
          <span>✓</span>
          Sales Data Analyze ചെയ്യുക
        </div>

        <div className="office-task">
          <span>✓</span>
          Monthly Report തയ്യാറാക്കുക
        </div>

        <div className="office-task">
          <span>✓</span>
          Dashboard Update ചെയ്യുക
        </div>

        <div className="office-task">
          <span>✓</span>
          MIS Report തയ്യാറാക്കുക
        </div>

      </div>
    </div>

    <div className="office-content">

      <div className="section-tag">
        Real Office Skills
      </div>

      <h2>
        പഠിച്ച Excel skills
        <span> യഥാർത്ഥ Work-ൽ ഉപയോഗിക്കാം.</span>
      </h2>

      <p>
        Sales reports, data analysis, dashboards, MIS reports തുടങ്ങിയ
        real-world office tasks Excel + AI ഉപയോഗിച്ച് കൂടുതൽ efficiently
        ചെയ്യാൻ പഠിക്കാം. Theory മാത്രം അല്ല — പഠിക്കുന്ന skills practical
        work-ലേക്ക് connect ചെയ്യുകയാണ് ലക്ഷ്യം.
      </p>

      <a href="#projects" className="text-link">
        Projects കാണാം →
      </a>

    </div>

  </div>
</section>

{/* ================= PROJECTS ================= */}

<section className="section projects-section" id="projects">
  <div className="container">

    <div className="section-heading">
      <div className="section-tag">
        Practical Projects
      </div>

      <h2>
        പഠിച്ച Skills
        <br />
        <span>Real Projects ആയി Build ചെയ്യാം.</span>
      </h2>

      <p>
        Theory മാത്രം പഠിച്ച് നിർത്തില്ല. Excel + AI ഉപയോഗിച്ച്
        real-world workplace scenarios അടിസ്ഥാനമാക്കിയുള്ള projects
        build ചെയ്ത് practical experience നേടാം.
      </p>
    </div>

    <div className="projects-grid">

      {projects.map((project) => (
        <div className="project-card" key={project.number}>

          <span className="project-number">
            {project.number}
          </span>

          <div className="project-icon">
            ▦
          </div>

          <h3>{project.title}</h3>

          <p>{project.text}</p>

          <span className="project-link">
            Build this Project →
          </span>

        </div>
      ))}

      {/* ================= EXCEL + AI PROJECT VISUAL ================= */}

      <div className="project-ai-visual">

        <div className="project-ai-formula">
          <span>fx</span>
          <strong>=SUM(C2:C6)</strong>
        </div>

        <div className="project-ai-sheet">

          <div className="sheet-mini-row">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="sheet-mini-chart">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>

          <div className="sheet-mini-pie"></div>

        </div>

        <div className="project-excel-icon">
          X
        </div>

        <div className="project-ai-icon">
          AI
        </div>

        <div className="project-ai-sparkle sparkle-one">
          ✦
        </div>

        <div className="project-ai-sparkle sparkle-two">
          ✦
        </div>

        <div className="project-ai-sparkle sparkle-three">
          ✦
        </div>

      </div>

    </div>

  </div>
</section>


{/* ================= PROJECT OUTCOME STRIP ================= */}

<div className="project-outcome-strip">

  <div className="project-outcome-heading">
    <span>✦ After This Course</span>

    <h3>
      Learn. Build. <strong>Work Smarter.</strong>
    </h3>
  </div>

  <div className="project-outcome-items">

    <div>
      <b>01</b>
      <span>Excel Skills</span>
    </div>

    <div>
      <b>02</b>
      <span>Real Projects</span>
    </div>

    <div>
      <b>03</b>
      <span>AI Workflows</span>
    </div>

    <div>
      <b>04</b>
      <span>Workplace Ready</span>
    </div>

  </div>

</div>


{/* ================= EXCEL + AI MINI HIGHLIGHTS ================= */}

<div className="excel-ai-highlights">

  <div className="excel-ai-highlight">

    <span className="highlight-icon">
      ✓
    </span>

    <div>
      <strong>Learn Faster</strong>
      <small>Practical Excel Skills</small>
    </div>

  </div>


  <div className="excel-ai-highlight">

    <span className="highlight-icon">
      ✦
    </span>

    <div>
      <strong>Work Smarter</strong>
      <small>Excel + AI Workflow</small>
    </div>

  </div>


  <div className="excel-ai-highlight">

    <span className="highlight-icon">
      ⚡
    </span>

    <div>
      <strong>Save Time</strong>
      <small>Smart Automation</small>
    </div>

  </div>

</div>
{/* ================= AI WORKFLOW ================= */}

<section className="section workflow-section">
  <div className="container">

    <div className="section-heading centered">

      <div className="section-tag">
        Excel + AI Workflow
      </div>

      <h2>
        Excel-നൊപ്പം
        <br />
        <span>AI ഉപയോഗിച്ച് Smart ആയി Work ചെയ്യൂ.</span>
      </h2>

      <p>
        Repetitive tasks കുറയ്ക്കാനും formulas, data, reports എന്നിവയിൽ
        AI-യുടെ സഹായം ഉപയോഗിക്കാനും പഠിക്കാം. നിങ്ങളുടെ existing Excel
        workflow കൂടുതൽ fast & efficient ആക്കുകയാണ് ലക്ഷ്യം.
      </p>

    </div>

    <div className="workflow">
      {workflow.map((item, index) => (
        <div className="workflow-item" key={item}>

          <div className="workflow-number">
            {index + 1}
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

  </div>
</section>
{/* ================= MIDDLE ENROLL CTA ================= */}

<section className="middle-cta-modern">
  <div className="middle-cta-container">

    {/* LEFT */}
    <div className="middle-cta-content">

      <div className="middle-cta-eyebrow">
        ✦ Beginner → Advanced
      </div>

      <h2>
        Excel + AI
        <br />
        <span>Skills that move you forward.</span>
      </h2>

      <p>
        Basics മുതൽ Advanced Excel + AI വരെ
        practical ആയി പഠിക്കാം.
      </p>

      <button
        type="button"
        onClick={openEnrollment}
        className="middle-cta-button"
      >
        <span>START LEARNING — ₹1,499</span>
        <span>→</span>
      </button>

      <div className="middle-cta-steps">
        <span>Learn</span>
        <i>•</i>
        <span>Practice</span>
        <i>•</i>
        <span>Build</span>
        <i>•</i>
        <span>Go Advanced</span>
      </div>

    </div>

    {/* RIGHT VISUAL */}
    <div className="middle-cta-visual">

      <div className="cta-glow"></div>

      <div className="cta-excel">
        <span>X</span>
      </div>

      <div className="cta-ai">
        <span>AI</span>
      </div>

      <div className="cta-floating cta-formula">
        <small>fx</small>
        <strong>=SUM(C2:C6)</strong>
      </div>

      <div className="cta-floating cta-data">
        <span>▥</span>
        <small>Smart Data</small>
      </div>

      <div className="cta-spark spark-1">✦</div>
      <div className="cta-spark spark-2">✦</div>

    </div>

  </div>
</section>
{/* ================= CAREER ================= */}

<section className="section career-section">
  <div className="container">

    <div className="career-box">

      <div className="section-tag">
        Career Connection
      </div>

      <h2>
        ഒരു Excel skill.
        <br />
        <span>Multiple Career Paths.</span>
      </h2>

      <p>
        Excel + AI skills വിവിധ office, MIS, HR, accounts, operations,
        reporting, data-related roles-ൽ daily work ചെയ്യാൻ ഉപയോഗിക്കാം.
        നിങ്ങളുടെ career path അനുസരിച്ച് ഈ skills practical advantage
        നൽകും.
      </p>

      <div className="roles-grid">
        {roles.map((role, index) => (
          <div className="role-card" key={role}>

            <span>
              0{index + 1}
            </span>

            <strong>{role}</strong>

            <i>↗</i>

          </div>
        ))}
      </div>

    </div>

  </div>
</section>

{/* ================= INTERVIEW ================= */}

<section className="section interview-section">
  <div className="container interview-grid">

    <div>
      <div className="section-tag">
        Interview Preparation
      </div>

      <h2>
        Skill പഠിക്കുന്നതിനൊപ്പം
        <span> Interview confidence-ഉം build ചെയ്യൂ.</span>
      </h2>

      <p>
        Excel-related questions, formula-based tasks, data analysis,
        reporting തുടങ്ങിയ practical scenarios practice ചെയ്ത്
        interview-ൽ നിങ്ങളുടെ Excel skills കൂടുതൽ confidently
        demonstrate ചെയ്യാൻ തയ്യാറാകൂ.
      </p>
    </div>

    <div className="interview-list">

      <div>
        <span>✓</span>
        Excel Practical Questions
      </div>

      <div>
        <span>✓</span>
        Formula & Function Tasks
      </div>

      <div>
        <span>✓</span>
        Data Analysis Challenges
      </div>

      <div>
        <span>✓</span>
        Reporting & Dashboard Tasks
      </div>

      <div>
        <span>✓</span>
        Real-world Workplace Scenarios
      </div>

    </div>

  </div>
</section>
{/* ================= WHY DIFFERENT ================= */}

<section className="section different-section">
  <div className="container">

    <div className="section-heading centered">

      <div className="section-tag">
        എന്തുകൊണ്ട് ഈ Program?
      </div>

      <h2>
        Excel പഠിക്കുന്നതിൽ നിന്ന്
        <br />
        <span>Excel ഉപയോഗിക്കാൻ പഠിക്കുന്നതിലേക്ക്.</span>
      </h2>

      <p>
        Videos മാത്രം കണ്ടു concepts പഠിക്കുന്നതല്ല. Learn → Practice →
        Build → Apply എന്ന approach വഴി practical Excel + AI skills
        develop ചെയ്യുകയാണ് ലക്ഷ്യം.
      </p>

    </div>

    <div className="different-grid">

      <div className="different-card">
        <span>01</span>

        <h3>Learn by Doing</h3>

        <p>
          Real-world Excel tasks ഉപയോഗിച്ച് concepts പഠിക്കുകയും
          practice ചെയ്യുകയും ചെയ്യാം.
        </p>
      </div>

      <div className="different-card">
        <span>02</span>

        <h3>Excel + AI</h3>

        <p>
          Formulas, data, reports തുടങ്ങിയ workflows-ൽ AI എങ്ങനെ
          smart ആയി ഉപയോഗിക്കാം എന്ന് പഠിക്കാം.
        </p>
      </div>

      <div className="different-card">
        <span>03</span>

        <h3>Real Projects</h3>

        <p>
          പഠിച്ച skills വെറും theory ആയി നിർത്താതെ practical projects
          വഴി ഉപയോഗിച്ച് build ചെയ്യാം.
        </p>
      </div>

      <div className="different-card">
        <span>04</span>

        <h3>Workplace Focus</h3>

        <p>
          Office, MIS, HR, Accounts, Operations തുടങ്ങിയ work scenarios
          മനസ്സിലാക്കി skills apply ചെയ്യാൻ പഠിക്കാം.
        </p>
      </div>

    </div>

  </div>
</section>
{/* ================= OUTCOMES ================= */}

<section className="section outcomes-section">
  <div className="container outcomes-grid">

    <div>

      <div className="section-tag">
        Course Outcomes
      </div>

      <h2>
        Course കഴിഞ്ഞാൽ
        <span> Excel ഉപയോഗിച്ച് കൂടുതൽ confidently work ചെയ്യാം.</span>
      </h2>

      <p>
        പഠിച്ച concepts practical tasks-ലേക്ക് apply ചെയ്ത്, daily
        workplace-ൽ വരുന്ന data, reports, dashboards, analysis,
        AI-assisted workflows എന്നിവ കൂടുതൽ efficiently handle ചെയ്യാൻ
        കഴിയുന്ന രീതിയിൽ നിങ്ങളുടെ Excel skillset develop ചെയ്യാം.
      </p>

    </div>

    <div className="outcomes-list">

      <div>
        ✓ Excel data clean & organize ചെയ്യാം
      </div>

      <div>
        ✓ Formulas & functions confidently ഉപയോഗിക്കാം
      </div>

      <div>
        ✓ Large data analyze ചെയ്ത് useful insights കണ്ടെത്താം
      </div>

      <div>
        ✓ Professional reports തയ്യാറാക്കാം
      </div>

      <div>
        ✓ Interactive dashboards build ചെയ്യാം
      </div>

      <div>
        ✓ Excel tasks-ൽ AI assistance ഉപയോഗിക്കാം
      </div>

      <div>
        ✓ Repetitive tasks കൂടുതൽ efficiently handle ചെയ്യാം
      </div>

      <div>
        ✓ Real-world Excel projects build ചെയ്യാം
      </div>

    </div>

  </div>
</section>
{/* ================= CERTIFICATE ================= */}

<section className="section certificate-section">
  <div className="container certificate-box">

    <div className="certificate-content">

      <div className="section-tag">
        Certification
      </div>

      <h2>
        പഠിക്കുക.
        <br />
        <span>Complete ചെയ്യുക. Certificate നേടുക.</span>
      </h2>

      <p>
        Program പൂർത്തിയാക്കുന്ന learners-ന് Excel + AI practical learning
        complete ചെയ്തതിന്റെ Certificate ലഭിക്കും. നിങ്ങളുടെ പഠനം
        document ചെയ്യാനും skills confidently present ചെയ്യാനും ഇത്
        സഹായിക്കും.
      </p>
        <div className="certificate-points">

  <div className="certificate-point certificate-point-blue">
    <div className="certificate-point-icon">
      🎓
    </div>

    <div className="certificate-point-content">
      <strong>Course Completion</strong>
      <span>
        Your learning journey gets official recognition.
      </span>
    </div>
  </div>


  <div className="certificate-point certificate-point-purple">
    <div className="certificate-point-icon">
      ✦
    </div>

    <div className="certificate-point-content">
      <strong>Excel + AI Learning</strong>
      <span>
        Build practical skills for the future.
      </span>
    </div>
  </div>


  <div className="certificate-point certificate-point-green">
    <div className="certificate-point-icon">
      📈
    </div>

    <div className="certificate-point-content">
      <strong>Practical Skills</strong>
      <span>
        Learn, practice and apply in real scenarios.
      </span>
    </div>
  </div>

</div>
      
      <button
        type="button"
        onClick={openEnrollment}
        className="cta-pulse group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
      >
        Get Started
        <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>

    </div>

    <div className="certificate-preview">

      <div className="certificate-inner">

        <span className="certificate-star">
          ✦
        </span>

        <small>
          CERTIFICATE OF COMPLETION
        </small>

        <h3>
          Excel + AI
        </h3>

        <p>
          Practical Excel & AI Learning
        </p>

        <div className="certificate-line"></div>

        <span>
          Learner Name
        </span>

      </div>

    </div>

  </div>
</section>
{/* ================= HOW IT WORKS ================= */}

<section className="section how-section">
  <div className="container">

    <div className="section-heading centered">

      <div className="section-tag">
        How the Program Works
      </div>

      <h2>
        പഠനം
        <span> എങ്ങനെ Skill ആയി മാറും?</span>
      </h2>

      <p>
        ഓരോ concept-ഉം പഠിച്ച്, practice ചെയ്ത്, real-world projects
        വഴി apply ചെയ്യുന്നതാണ് ഈ program-ന്റെ learning approach.
      </p>

    </div>

    <div className="how-grid">

      <div>
        <span>01</span>

        <h3>
          Learn
        </h3>

        <p>
          Excel + AI concepts step-by-step ആയി ലളിതമായി മനസ്സിലാക്കുക.
        </p>
      </div>

      <div>
        <span>02</span>

        <h3>
          Practice
        </h3>

        <p>
          Hands-on tasks ചെയ്ത് പഠിച്ച concepts practical ആയി ഉപയോഗിക്കുക.
        </p>
      </div>

      <div>
        <span>03</span>

        <h3>
          Build
        </h3>

        <p>
          പഠിച്ച skills ഉപയോഗിച്ച് real-world Excel projects build ചെയ്യുക.
        </p>
      </div>

      <div>
        <span>04</span>

        <h3>
          Apply
        </h3>

        <p>
          Workplace tasks, reporting, analysis തുടങ്ങിയ scenarios-ൽ
          skills confidently apply ചെയ്യാൻ തയ്യാറാകുക.
        </p>
      </div>

    </div>

  </div>
</section>
{/* ================= REVIEWS ================= */}
<section className="section reviews-section" id="reviews">
  <div className="container">

    <div className="section-heading centered">

      <div className="section-tag">
        Learning Experience
      </div>

      <h2>
        Learn Smart.
        <br />
        <span>Grow from Beginner to Advanced.</span>
      </h2>

      <p>
        Learn. Practice. Apply. Level up your Excel + AI skills.
      </p>

    </div>

    <div className="reviews-grid">

      {/* REVIEW 1 */}
      <div className="review-card">

        <div className="review-top">
          <div className="review-avatar">
            AK
          </div>

          <div>
            <strong>Arun Kumar</strong>
            <span>Excel Beginner</span>
          </div>
        </div>

        <div className="review-stars">
          ★★★★★
        </div>

        <p>
          “Excel ഒന്നും അറിയാതെ തുടങ്ങിയെങ്കിലും basics വളരെ easy ആയി
          മനസ്സിലാക്കാൻ കഴിഞ്ഞു. ഇപ്പോൾ Excel ചെയ്യുമ്പോൾ confidence കൂടുതലാണ്.”
        </p>

        <span className="review-label">
          Beginner Friendly
        </span>

      </div>


      {/* REVIEW 2 */}
      <div className="review-card">

        <div className="review-top">
          <div className="review-avatar">
            SM
          </div>

          <div>
            <strong>Swetha Menon</strong>
            <span>Office Professional</span>
          </div>
        </div>

        <div className="review-stars">
          ★★★★★
        </div>

        <p>
          “Formulas മാത്രം പഠിക്കുന്ന course അല്ല. Reports, dashboards,
          data work എല്ലാം practical ആയി ചെയ്യാൻ പഠിച്ചത് really useful ആയി.”
        </p>

        <span className="review-label">
          Practical Learning
        </span>

      </div>


      {/* REVIEW 3 */}
      <div className="review-card">

        <div className="review-top">
          <div className="review-avatar">
            RN
          </div>

          <div>
            <strong>Rahul Nair</strong>
            <span>Advanced Learner</span>
          </div>
        </div>

        <div className="review-stars">
          ★★★★★
        </div>

        <p>
          “Excel + AI combination ആണ് ഏറ്റവും interesting ആയത്.
          Repetitive tasks smart ആയി ചെയ്യാനും time save ചെയ്യാനും പഠിച്ചു.”
        </p>

        <span className="review-label">
          Excel + AI
        </span>

      </div>

    </div>

  </div>
</section>
{/* ================= FAQ ================= */}

<section className="section faq-section" id="faq">
  <div className="container faq-grid">

    <div className="faq-heading">

      <div className="section-tag">
        FAQ
      </div>

      <h2>
        Program-നെക്കുറിച്ച്
        <span> അറിയേണ്ട കാര്യങ്ങൾ.</span>
      </h2>

      <p>
        Course, learning approach, access, certificate, practical projects
        എന്നിവയെക്കുറിച്ചുള്ള പ്രധാന ചോദ്യങ്ങളുടെ ഉത്തരങ്ങൾ ഇവിടെ കാണാം.
      </p>

    </div>

    <div className="faq-list">

      {faqs.map((faq, index) => (
        <details
          className="faq-item"
          key={faq.question}
        >
          <summary>

            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>
              {faq.question}
            </strong>

            <i>
              +
            </i>

          </summary>

          <p>
            {faq.answer}
          </p>

        </details>
      ))}

    </div>

  </div>
</section>
{/* ================= FINAL CTA ================= */}

<section className="final-cta" id="enroll">
  <div className="final-glow"></div>

  <div className="container final-content">

    <div className="section-tag">
      Ready to Upgrade?
    </div>

    <h2>
      Excel + AI
      <br />
      <span>നിങ്ങളുടെ അടുത്ത Skill Upgrade ആക്കൂ.</span>
    </h2>

    <p>
      Excel വെറും ഒരു basic skill ആയി നിർത്താതെ, Data Analysis,
      Reports, Dashboards, AI, Automation എന്നിവ practical ആയി പഠിച്ച്
      workplace-ൽ confidently apply ചെയ്യാൻ ഇന്ന് തന്നെ തുടങ്ങൂ.
    </p>

    <button
      type="button"
      onClick={openEnrollment}
      className="cta-pulse group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
    >
      <span>START LEARNING — ₹1,499</span>

      <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>

    <div className="final-points">
      <span>✓ Practical Learning</span>
      <span>✓ Real-world Projects</span>
      <span>✓ Excel + AI Skills</span>
      <span>✓ Certificate</span>
    </div>

  </div>
</section>
{/* ================= CHECKOUT ================= */}

<section className="checkout-section" id="checkout">
  <div className="container checkout-grid">

    <div className="checkout-info">

      <div className="section-tag">
        Enrollment
      </div>

      <h2>
        <span>
          നിങ്ങളുടെ Excel + AI learning journey ഇന്ന് തന്നെ തുടങ്ങൂ.
        </span>
      </h2>

      <p>
        Practical Excel + AI skills പഠിച്ച്, real-world projects
        practice ചെയ്ത്, workplace-ൽ apply ചെയ്യാൻ കഴിയുന്ന skillset
        build ചെയ്യാനുള്ള അടുത്ത step ഇവിടെ നിന്ന് ആരംഭിക്കാം.
      </p>

      <div className="checkout-benefits">

        <div>
          ✓ Excel + AI Practical Learning
        </div>

        <div>
          ✓ Real-world Projects
        </div>

        <div>
          ✓ Data Analysis & Dashboards
        </div>

        <div>
          ✓ Job-oriented Workplace Skills
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
      {/* ================= STICKY CTA ================= */}

      <div className="sticky-cta">
        <div>
          <strong>Your Excel + AI Journey</strong>

          <span>Starts today</span>
        </div>

        <button
          type="button"
          onClick={openEnrollment}
          className="cta-pulse inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl sm:text-sm"
        >
          Enroll Now
          <span className="text-base">→</span>
        </button>
      </div>

      {/* =========================================================
          ENROLLMENT MODAL
          ========================================================= */}

      {showEnrollment && (
        <div className="enrollment-overlay" onClick={closeEnrollment}>
          <div
            className="enrollment-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}

            <div className="enrollment-header">
              <div>
                <h2>Complete Your Enrollment</h2>

                <p>Enter your details to continue securely.</p>
              </div>

              <button
                type="button"
                className="enrollment-close"
                onClick={closeEnrollment}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* MODAL BODY */}

            <div className="enrollment-body">
              {/* COURSE PRICE BOX */}

              <div className="enrollment-product">
                <div>
                  <strong>Excel + AI Practical Program</strong>

                  <del>₹5,000</del>

                  <div className="enrollment-price">₹1,499</div>
                </div>

                <span className="enrollment-save">Save ₹3,501</span>
              </div>

              {/* FORM */}

              <form
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
                <div className="input-wrap">
                  <span>♙</span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="input-wrap">
                  <span>✉</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="input-wrap">
                  <span>⌕</span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                {/* SECURE CHECKOUT */}

                <div className="secure-box">
                  <div className="secure-title">
                    🛡️
                    <strong>Secure Checkout</strong>
                  </div>

                  <p>
                    Secure payment via Razorpay. After payment, we'll send an
                    activation email to your inbox.
                  </p>
                </div>

                {/* ACTION BUTTONS */}

                <div className="enrollment-actions">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:bg-slate-50"
                    onClick={closeEnrollment}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="cta-pulse inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700"
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
