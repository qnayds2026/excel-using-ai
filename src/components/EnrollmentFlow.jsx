import React from "react";
import { CreditCard, MailCheck, GraduationCap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const steps = [
  {
    num: "01",
    icon: CreditCard,
    title: "എൻറോൾ & പേയ്‌മെന്റ്",
    eng: "Enroll & Pay",
    desc: "പേരും നമ്പറും നൽകി GPay, PhonePe അല്ലെങ്കിൽ Cards വഴി സുരക്ഷിതമായി ഫീസ് അടയ്ക്കുക.",
  },
  {
    num: "02",
    icon: MailCheck,
    title: "ലോഗിൻ ലിങ്ക് ലഭിക്കുന്നു",
    eng: "Instant Access Link",
    desc: "പേയ്‌മെന്റ് കഴിഞ്ഞ ഉടൻ തന്നെ Email വഴി ലോഗിൻ ലിങ്ക് തൽക്ഷണം എത്തും.",
  },
  {
    num: "03",
    icon: GraduationCap,
    title: "പഠനം ആരംഭിക്കാം!",
    eng: "Start Learning",
    desc: "Password നൽകി ലോഗിൻ ചെയ്ത് ഫോണിലോ ലാപ്ടോപ്പിലോ ക്ലാസുകൾ കണ്ടുതുടങ്ങാം.",
  },
];

const EnrollmentFlow = ({ onEnroll, whatsappUrl }) => {
  return (
    <section className="bg-slate-50 py-20 sm:py-28" id="how-to-enroll">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700">
            How to Enroll
          </div>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Start Learning in{" "}
            <br className="hidden sm:inline" />
            <span className="text-blue-600">3 Simple Steps.</span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            സങ്കീർണ്ണമായ ഒന്നുമില്ല — 1 മിനിറ്റിൽ എൻറോൾ ചെയ്ത് പഠനം ആരംഭിക്കാം.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.num}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div>
                  {/* Top Bar: Icon & Step Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 transition-colors duration-300 group-hover:bg-blue-100 group-hover:text-blue-600">
                      {step.num}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="mt-5">
                    <span className="text-xs font-semibold text-blue-600">
                      {step.eng}
                    </span>

                    <h3 className="mt-1.5 text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance & Actions Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row">
          <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-600">
              ✓
            </span>
            <span>100% സുരക്ഷിത പേയ്‌മെന്റ് • Instant Access</span>
          </div>

          <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            {onEnroll && (
              <button
                type="button"
                onClick={onEnroll}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl animate-pulse sm:w-auto"
              >
                <span>ഇപ്പോൾ Enroll ചെയ്യാം</span>
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            )}

            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-6 py-3.5 text-base font-bold text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-100 hover:border-emerald-400 sm:w-auto"
              >
                <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                <span>സംശയങ്ങൾ ചോദിക്കാം</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentFlow;