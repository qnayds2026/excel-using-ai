import React, { useState } from "react";

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
  "ഫ്രഷേഴ്സ്",
  "ജോലി അന്വേഷിക്കുന്നവർ",
  "Office / MIS ജീവനക്കാർ",
  "HR മേഖലയിൽ ജോലി ചെയ്യുന്നവർ",
  "Accounts മേഖലയിൽ ജോലി ചെയ്യുന്നവർ",
  "Business ചെയ്യുന്നവർ",
  "Freelancers",
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
    question: "Course പൂർത്തിയാക്കിയാൽ Certificate ലഭിക്കുമോ?",
    answer:
      "Program completion-നുമായി ബന്ധപ്പെട്ട certification section ഈ landing page-ൽ ഉൾപ്പെടുത്തിയിട്ടുണ്ട്.",
  },
];

function App() {
  const [showEnrollment, setShowEnrollment] = useState(false);

  const openEnrollment = (e) => {
    e.preventDefault();
    setShowEnrollment(true);
  };

  const closeEnrollment = () => {
    setShowEnrollment(false);
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="container nav-inner">

          <a href="#home" className="logo">
            <span className="logo-icon">✦</span>
            <span>
              Excel <b>AI</b>
            </span>
          </a>

          <nav className="nav-links">
            <a href="#features">പ്രധാന സവിശേഷതകൾ</a>
            <a href="#learn">എന്താണ് പഠിക്കുന്നത്?</a>
            <a href="#projects">Projects</a>
            <a href="#faq">ചോദ്യങ്ങൾ</a>
          </nav>

          <a
            href="#enroll"
            className="nav-button"
            onClick={openEnrollment}
          >
            Enroll Now →
          </a>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <main>

        <section className="hero" id="home">
          <div className="hero-glow"></div>

          <div className="container hero-grid">

            <div className="hero-content">

              <div className="eyebrow">
                ✦ ജോലി നേടാൻ സഹായിക്കുന്ന പ്രായോഗിക Excel + AI പഠനം
              </div>

              <h1>
                Excel + AI
                <br />
                <span>നിങ്ങളുടെ Career</span>
                <br />
                അടുത്ത ഘട്ടത്തിലേക്ക്.
              </h1>

              <p className="hero-text">
                Excel വെറും ഒരു spreadsheet skill ആയി മാത്രം പഠിക്കേണ്ടതില്ല.
                Data, Reports, Dashboards, AI, Automation എന്നിവ
                പ്രായോഗികമായി പഠിച്ച് ജോലി ചെയ്യാൻ തയ്യാറാകൂ.
              </p>

              <div className="hero-actions">

                <a
                  href="#enroll"
                  className="primary-button"
                  onClick={openEnrollment}
                >
                  Enroll Now
                  <span>→</span>
                </a>

                <a href="#learn" className="secondary-button">
                  കൂടുതൽ അറിയാം
                </a>

              </div>

              <div className="hero-points">
                <span>✓ പ്രായോഗിക പഠനം</span>
                <span>✓ Job-oriented</span>
                <span>✓ AI ഉപയോഗിച്ച് Excel</span>
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

                  <div className="excel-title">
                    Sales_Report.xlsx
                  </div>

                  <div className="ai-badge">
                    ✦ AI
                  </div>

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

                  <p>
                    “ഈ data-യിൽ ഏറ്റവും കൂടുതൽ വളർച്ച
                    ഏത് product-നാണ്?”
                  </p>
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
                കോഴ്സിനെക്കുറിച്ച് അറിയാം
              </div>

              <h2>
                Excel + AI
                <br />
                <span>എങ്ങനെ പഠിക്കാം എന്ന് കാണാം.</span>
              </h2>

              <p>
                Excel + AI പഠനത്തിന്റെ പ്രധാന ഭാഗങ്ങളും
                പ്രായോഗിക പരിശീലനവും ഈ വീഡിയോയിലൂടെ പരിചയപ്പെടാം.
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

                  <div className="play-button">
                    ▶
                  </div>

                </div>

              </div>


              <div className="video-points">

                <div>
                  <span>✓</span>
                  Excel പ്രായോഗിക പരിശീലനം
                </div>

                <div>
                  <span>✓</span>
                  AI ഉപയോഗിച്ചുള്ള പഠനം
                </div>

                <div>
                  <span>✓</span>
                  Real-world Projects
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
              Course Value Stack:
            </h2>

            <div className="value-list">

              <div>✓ Excel + AI Practical Learning</div>
              <div>✓ Real-world Excel Projects</div>
              <div>✓ AI-assisted Excel Workflows</div>
              <div>✓ Data Analysis & Dashboards</div>
              <div>✓ Job-oriented Excel Skills</div>
              <div>✓ Certification</div>

            </div>


            <div className="value-price">

              <span>
                TODAY
              </span>

              <div className="regular-price">
                REGULAR PRICE <del>₹5,000</del>
              </div>

              <strong>
                ₹1,499
              </strong>

            </div>


            {/* MAIN ENROLL BUTTON */}

            <a
              href="#enroll"
              className="value-button"
              onClick={openEnrollment}
            >
              START LEARNING EXCEL + AI TODAY
              <span>→</span>
            </a>


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
              <span className="trust-number">
                2,000+
              </span>

              <span className="trust-label">
                ടീമുകൾ Excel ഉപയോഗിക്കുന്ന മേഖലകൾ
              </span>
            </div>

            <div className="trust-divider"></div>

            <p>
              Office-ൽ ദിവസേന ഉപയോഗിക്കുന്ന spreadsheet
              skills കൂടുതൽ കാര്യക്ഷമമായി പഠിക്കാം.
            </p>

          </div>

        </section>


        {/* ================= INTRO ================= */}

        <section className="section intro-section">

          <div className="container narrow">

            <div className="section-tag">
              എന്തുകൊണ്ട് Excel?
            </div>

            <h2>
              Excel ഒരു
              <span> Spreadsheet Skill </span>
              മാത്രമല്ല.
            </h2>

            <p className="section-lead">
              Reports തയ്യാറാക്കുന്നതിൽ നിന്ന് data വിശകലനം ചെയ്യുന്നതുവരെ,
              പല ജോലികളുടെയും പ്രധാന ഭാഗമാണ് Excel.
              അതിനൊപ്പം AI ഉപയോഗിക്കുമ്പോൾ repetitive work കുറയ്ക്കാനും
              productivity വർധിപ്പിക്കാനും കഴിയും.
            </p>

          </div>

        </section>


        {/* ================= WHO IS THIS FOR ================= */}

        <section className="section audience-section">

          <div className="container">

            <div className="section-heading">

              <div className="section-tag">
                ആർക്കുവേണ്ടി?
              </div>

              <h2>
                ഈ പഠനം
                <br />
                <span>നിങ്ങൾക്കുള്ളതാണോ?</span>
              </h2>

              <p>
                Excel ഉപയോഗിച്ച് നിങ്ങളുടെ ജോലി skills
                മെച്ചപ്പെടുത്താൻ ആഗ്രഹിക്കുന്നവർക്ക്.
              </p>

            </div>


            <div className="audience-grid">

              {learners.map((learner, index) => (

                <div
                  className="audience-card"
                  key={learner}
                >

                  <span className="card-number">
                    0{index + 1}
                  </span>

                  <span className="check-icon">
                    ✓
                  </span>

                  <h3>
                    {learner}
                  </h3>

                  <p>
                    നിങ്ങളുടെ ജോലി ആവശ്യങ്ങൾക്ക്
                    Excel skills കൂടുതൽ ശക്തമാക്കാം.
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
                ഇന്നത്തെ വെല്ലുവിളി
              </div>

              <h2>
                Basic Excel മാത്രം
                <br />
                <span>എപ്പോഴും മതിയാകില്ല.</span>
              </h2>

              <p>
                Data കൂടുമ്പോഴും reports കൂടുതൽ complex ആകുമ്പോഴും
                spreadsheet-ൽ കൂടുതൽ സമയം ചെലവഴിക്കേണ്ടി വരാം.
              </p>

              <div className="problem-list">

                <div>
                  <span>01</span>
                  Reports തയ്യാറാക്കാൻ കൂടുതൽ സമയം
                </div>

                <div>
                  <span>02</span>
                  Data മനസ്സിലാക്കാൻ ബുദ്ധിമുട്ട്
                </div>

                <div>
                  <span>03</span>
                  Repetitive Excel work
                </div>

                <div>
                  <span>04</span>
                  Interview-ready skills കുറവ്
                </div>

              </div>

            </div>


            <div className="problem-visual">

              <div className="stat-card">
                <span>Data</span>
                <strong>12,840</strong>
                <small>Rows</small>
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

        <section
          className="section features-section"
          id="features"
        >

          <div className="container">

            <div className="section-heading centered">

              <div className="section-tag">
                നിങ്ങൾ പഠിക്കുന്നത്
              </div>

              <h2>
                Excel-നെ
                <br />
                <span>കൂടുതൽ ശക്തമാക്കാം.</span>
              </h2>

              <p>
                Excel + AI ഉപയോഗിച്ച് modern workplace-ന് ആവശ്യമായ
                skills step-by-step ആയി പഠിക്കാം.
              </p>

            </div>


            <div className="features-grid">

              {features.map((feature) => (

                <div
                  className="feature-card"
                  key={feature.title}
                >

                  <div className="feature-icon">
                    {feature.icon}
                  </div>

                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.text}
                  </p>

                  <span className="feature-arrow">
                    ↗
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          className="section skills-section"
          id="learn"
        >

          <div className="container skills-grid">

            <div className="skills-heading">

              <div className="section-tag">
                Course Skills
              </div>

              <h2>
                ഒരു
                <span> complete Excel skillset.</span>
              </h2>

              <p>
                Basic മുതൽ advanced practical workflows വരെ
                പഠിക്കാൻ കഴിയുന്ന രീതിയിലാണ് learning path.
              </p>

            </div>


            <div className="skills-list">

              {skills.map((skill, index) => (

                <div
                  className="skill-item"
                  key={skill}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {skill}
                  </strong>

                  <i>
                    ✓
                  </i>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= LEARNING PATH ================= */}

        <section className="section path-section">

          <div className="container">

            <div className="section-heading centered">

              <div className="section-tag">
                Job-ready Skill Path
              </div>

              <h2>
                പഠിക്കുക.
                <span> പരിശീലിക്കുക.</span>
                <br />
                Build ചെയ്യുക.
              </h2>

            </div>


            <div className="path">

              <div className="path-line"></div>

              <div className="path-item">
                <span>01</span>
                <strong>പഠിക്കുക</strong>
                <p>Concepts മനസ്സിലാക്കുക</p>
              </div>

              <div className="path-item">
                <span>02</span>
                <strong>പരിശീലിക്കുക</strong>
                <p>Practical tasks ചെയ്യുക</p>
              </div>

              <div className="path-item">
                <span>03</span>
                <strong>Build ചെയ്യുക</strong>
                <p>Real projects നിർമ്മിക്കുക</p>
              </div>

              <div className="path-item">
                <span>04</span>
                <strong>തയ്യാറാകുക</strong>
                <p>Interview skills മെച്ചപ്പെടുത്തുക</p>
              </div>

              <div className="path-item">
                <span>05</span>
                <strong>Demonstrate ചെയ്യുക</strong>
                <p>നിങ്ങളുടെ skills തെളിയിക്കുക</p>
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
                  Sales Report തയ്യാറാക്കുക
                </div>

                <div className="office-task">
                  <span>✓</span>
                  Monthly Data പരിശോധിക്കുക
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
                പഠിക്കുന്നത്
                <span> യഥാർത്ഥ ജോലിയിൽ </span>
                ഉപയോഗിക്കാം.
              </h2>

              <p>
                Course-ൽ പഠിക്കുന്ന concepts practical office
                tasks-ലേക്ക് connect ചെയ്യാൻ കഴിയുന്ന രീതിയിലാണ്
                learning experience.
              </p>

              <a
                href="#projects"
                className="text-link"
              >
                Projects കാണാം →
              </a>

            </div>

          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section
          className="section projects-section"
          id="projects"
        >

          <div className="container">

            <div className="section-heading">

              <div className="section-tag">
                Practical Projects
              </div>

              <h2>
                പഠിച്ചതെല്ലാം
                <br />
                <span>Projects ആയി മാറ്റാം.</span>
              </h2>

              <p>
                Theory മാത്രം അല്ല. നിങ്ങളുടെ skills ഉപയോഗിച്ച്
                practical spreadsheet projects നിർമ്മിക്കാം.
              </p>

            </div>


            <div className="projects-grid">

              {projects.map((project) => (

                <div
                  className="project-card"
                  key={project.number}
                >

                  <span className="project-number">
                    {project.number}
                  </span>

                  <div className="project-icon">
                    ▦
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.text}
                  </p>

                  <span className="project-link">
                    Project →
                  </span>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= AI WORKFLOW ================= */}

        <section className="section workflow-section">

          <div className="container">

            <div className="section-heading centered">

              <div className="section-tag">
                Excel + AI Workflow
              </div>

              <h2>
                AI-യെ നിങ്ങളുടെ
                <br />
                <span>Excel workflow-ന്റെ ഭാഗമാക്കൂ.</span>
              </h2>

            </div>


            <div className="workflow">

              {workflow.map((item, index) => (

                <div
                  className="workflow-item"
                  key={item}
                >

                  <div className="workflow-number">
                    {index + 1}
                  </div>

                  <strong>
                    {item}
                  </strong>

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


        {/* ================= CAREER ================= */}

        <section className="section career-section">

          <div className="container">

            <div className="career-box">

              <div className="section-tag">
                Career Connection
              </div>

              <h2>
                Excel skills
                <br />
                <span>ഏത് ജോലികളിൽ ഉപയോഗിക്കാം?</span>
              </h2>

              <p>
                വിവിധ office, operations, HR, accounts,
                MIS, data-related roles-ൽ Excel ഒരു പ്രധാന skill ആണ്.
              </p>


              <div className="roles-grid">

                {roles.map((role, index) => (

                  <div
                    className="role-card"
                    key={role}
                  >

                    <span>
                      0{index + 1}
                    </span>

                    <strong>
                      {role}
                    </strong>

                    <i>
                      ↗
                    </i>

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
                <span> Interview-നും തയ്യാറാകൂ.</span>
              </h2>

              <p>
                Excel-related interview questions,
                practical tasks, data handling എന്നിവയെ
                നേരിടാൻ ആവശ്യമായ confidence വികസിപ്പിക്കാം.
              </p>

            </div>


            <div className="interview-list">

              <div>
                <span>✓</span>
                Excel Practical Questions
              </div>

              <div>
                <span>✓</span>
                Formula-based Tasks
              </div>

              <div>
                <span>✓</span>
                Data Analysis Tasks
              </div>

              <div>
                <span>✓</span>
                Reporting Tasks
              </div>

              <div>
                <span>✓</span>
                Workplace Scenarios
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
                പഠനം മാത്രമല്ല.
                <br />
                <span>പ്രായോഗിക Skill Building.</span>
              </h2>

            </div>


            <div className="different-grid">

              <div className="different-card">
                <span>01</span>

                <h3>
                  പ്രായോഗിക സമീപനം
                </h3>

                <p>
                  Real-world Excel tasks-നോട് ബന്ധിപ്പിച്ചുള്ള പഠനം.
                </p>
              </div>


              <div className="different-card">
                <span>02</span>

                <h3>
                  AI Integration
                </h3>

                <p>
                  Excel workflow-ൽ AI എങ്ങനെ ഉപയോഗിക്കാം എന്ന് പഠിക്കുക.
                </p>
              </div>


              <div className="different-card">
                <span>03</span>

                <h3>
                  Projects
                </h3>

                <p>
                  പഠിച്ച skills practical projects വഴി ഉപയോഗിക്കുക.
                </p>
              </div>


              <div className="different-card">
                <span>04</span>

                <h3>
                  Career Focus
                </h3>

                <p>
                  Job-related skills വികസിപ്പിക്കുന്നതിൽ ശ്രദ്ധ.
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
                <span> നിങ്ങൾക്ക് ചെയ്യാൻ കഴിയുന്നത്.</span>
              </h2>

              <p>
                Excel ഉപയോഗിച്ച് കൂടുതൽ confidence-ോടെ
                data, reports, dashboards, AI-assisted workflows
                എന്നിവ കൈകാര്യം ചെയ്യാൻ കഴിയുന്ന രീതിയിലേക്ക് വളരുക.
              </p>

            </div>


            <div className="outcomes-list">

              <div>✓ Excel data ക്രമീകരിക്കുക</div>
              <div>✓ Formulas ഉപയോഗിക്കുക</div>
              <div>✓ Data വിശകലനം ചെയ്യുക</div>
              <div>✓ Reports തയ്യാറാക്കുക</div>
              <div>✓ Dashboards നിർമ്മിക്കുക</div>
              <div>✓ AI സഹായം ഉപയോഗിക്കുക</div>
              <div>✓ Repetitive work കുറയ്ക്കുക</div>
              <div>✓ Practical projects നിർമ്മിക്കുക</div>

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
                പഠനം പൂർത്തിയാക്കിയതിന്
                <span> ഒരു Certificate.</span>
              </h2>

              <p>
                Program പൂർത്തിയാക്കിയ ശേഷം certification
                ലഭിക്കുന്ന രീതിയിലാണ് ഈ section ഒരുക്കിയിരിക്കുന്നത്.
              </p>

              <a
                href="#enroll"
                className="primary-button"
                onClick={openEnrollment}
              >
                Enroll Now →
              </a>

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
                  പ്രായോഗിക Excel & AI പഠനം
                </p>

                <div className="certificate-line"></div>

                <span>
                  വിദ്യാർത്ഥിയുടെ പേര്
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
                <span> എങ്ങനെ നടക്കും?</span>
              </h2>

            </div>


            <div className="how-grid">

              <div>
                <span>01</span>
                <h3>പഠിക്കുക</h3>
                <p>
                  Concepts ലളിതമായി മനസ്സിലാക്കുക.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Practice ചെയ്യുക</h3>
                <p>
                  Hands-on tasks ഉപയോഗിച്ച് പരിശീലിക്കുക.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Project നിർമ്മിക്കുക</h3>
                <p>
                  പഠിച്ച skills ഉപയോഗിച്ച് project ചെയ്യുക.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>Career-ന് തയ്യാറാകുക</h3>
                <p>
                  Interview-നും workplace tasks-നും തയ്യാറാകുക.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= TESTIMONIAL ================= */}

        <section className="section testimonial-section">

          <div className="container">

            <div className="section-heading centered">

              <div className="section-tag">
                Learner Experience
              </div>

              <h2>
                പഠനം
                <span> എങ്ങനെ അനുഭവപ്പെടും?</span>
              </h2>

            </div>


            <div className="testimonial-card">

              <div className="quote-mark">
                “
              </div>

              <p>
                Excel concepts മാത്രം പഠിക്കുന്നതിനേക്കാൾ,
                അത് യഥാർത്ഥ ജോലിയിൽ എങ്ങനെ ഉപയോഗിക്കാം എന്ന്
                മനസ്സിലാക്കാൻ practical approach സഹായിക്കുന്നു.
              </p>

              <div className="testimonial-person">

                <div className="avatar">
                  A
                </div>

                <div>
                  <strong>
                    Program Learner
                  </strong>

                  <span>
                    Excel + AI Training
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= FAQ ================= */}

        <section
          className="section faq-section"
          id="faq"
        >

          <div className="container faq-grid">

            <div className="faq-heading">

              <div className="section-tag">
                FAQ
              </div>

              <h2>
                
                <span> Frequently Asked Questions</span>
              </h2>

              <p>
                Program-നെക്കുറിച്ച് അറിയേണ്ട പ്രധാന കാര്യങ്ങൾ.
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
                      0{index + 1}
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

        <section
          className="final-cta"
          id="enroll"
        >

          <div className="final-glow"></div>

          <div className="container final-content">

            <div className="section-tag">
              നിങ്ങളുടെ അടുത്ത ഘട്ടം
            </div>

            <h2>
              Excel Skill
              <br />
              <span>ഇന്ന് തന്നെ Upgrade ചെയ്യൂ.</span>
            </h2>

            <p>
              Excel + AI skills പ്രായോഗികമായി പഠിച്ച്
              നിങ്ങളുടെ career-ന് കൂടുതൽ ശക്തമായ skillset നിർമ്മിക്കൂ.
            </p>

            <a
              href="#checkout"
              className="final-button"
              onClick={openEnrollment}
            >
              ഇപ്പോൾ പഠനം ആരംഭിക്കൂ
              <span>→</span>
            </a>

            <div className="final-points">
              <span>✓ Practical Learning</span>
              <span>✓ Excel + AI</span>
              <span>✓ Career-focused</span>
            </div>

          </div>

        </section>


        {/* ================= CHECKOUT ================= */}

        <section
          className="checkout-section"
          id="checkout"
        >

          <div className="container checkout-grid">

            <div className="checkout-info">

              <div className="section-tag">
                Enrollment
              </div>

              <h2>
                
                <span> Your learning journey starts today.</span>
              </h2>

              <p>
                Excel + AI practical learning program-ൽ
                ചേരാൻ താഴെയുള്ള option ഉപയോഗിക്കുക.
              </p>

              <div className="checkout-benefits">

                <div>✓ Excel + AI Learning</div>
                <div>✓ Practical Projects</div>
                <div>✓ Job-oriented Skills</div>
                <div>✓ Certification</div>

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
                  Program Access
                </small>

                <strong>
                  ₹1,499
                </strong>

              </div>

              <a
                href="#enroll"
                className="checkout-button"
                onClick={openEnrollment}
              >
                Enroll Now →
              </a>

              <p className="checkout-note">
                Your learning journey starts today.
              </p>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container footer-inner">

          <div className="footer-brand">

            <a
              href="#home"
              className="logo"
            >
              <span className="logo-icon">
                ✦
              </span>

              <span>
                Excel <b>AI</b>
              </span>

            </a>

            <p>
              Excel + AI ഉപയോഗിച്ച് practical,
              career-focused skills പഠിക്കാം.
            </p>

          </div>


          <div className="footer-links">

            <a href="#features">
              Features
            </a>

            <a href="#learn">
              Learn
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#faq">
              FAQ
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
          <strong>
            Your Excel + AI Journey 
          </strong>

          <span>
            Starts today
          </span>
        </div>

        <a
          href="#enroll"
          onClick={openEnrollment}
        >
          Enroll Now →
        </a>

      </div>


      {/* =========================================================
          ENROLLMENT MODAL
          ========================================================= */}

      {showEnrollment && (

        <div
          className="enrollment-overlay"
          onClick={closeEnrollment}
        >

          <div
            className="enrollment-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* MODAL HEADER */}

            <div className="enrollment-header">

              <div>

                <h2>
                  Complete Your Enrollment
                </h2>

                <p>
                  Enter your details to continue securely.
                </p>

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

                  <strong>
                    Excel + AI Practical Program
                  </strong>

                  <del>
                    ₹5,000
                  </del>

                  <div className="enrollment-price">
                    ₹1,499
                  </div>

                </div>

                <span className="enrollment-save">
                  Save ₹3,501
                </span>

              </div>


              {/* FORM */}

              <form
                className="enrollment-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Payment page will open here.");
                }}
              >

                <div className="input-wrap">

                  <span>♙</span>

                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                  />

                </div>


                <div className="input-wrap">

                  <span>✉</span>

                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                  />

                </div>


                <div className="input-wrap">

                  <span>⌕</span>

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                  />

                </div>


                {/* SECURE CHECKOUT */}

                <div className="secure-box">

                  <div className="secure-title">
                    🛡️
                    <strong>
                      Secure Checkout
                    </strong>
                  </div>

                  <p>
                    Secure payment via Razorpay. After payment,
                    we'll send an activation email to your inbox.
                  </p>

                </div>


                {/* ACTION BUTTONS */}

                <div className="enrollment-actions">

                  <button
                    type="button"
                    className="cancel-button"
                    onClick={closeEnrollment}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="payment-button"
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