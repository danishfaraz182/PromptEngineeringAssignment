import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { admissionSteps } from '../../data/campus';
import { SectionHeading } from '../ui/SectionHeading';

export function AdmissionsJourney() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="admissions-journey" className="relative bg-ink-950 py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Admissions"
          title="Your admissions journey."
          description="Seven steps take you from first exploring DFIU to arriving on campus. Click any step to preview what it involves."
        />

        <div className="mt-14">
          {/* progress rail */}
          <div className="relative mb-10 hidden lg:block">
            <div className="absolute left-0 right-0 top-5 h-0.5 bg-white/10" />
            <motion.div
              className="absolute left-0 top-5 h-0.5 bg-gradient-to-r from-cyan-400 to-gold-400"
              initial={false}
              animate={{ width: `${((activeStep - 1) / (admissionSteps.length - 1)) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
            <div className="relative grid grid-cols-7">
              {admissionSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.step)}
                  className="flex flex-col items-center gap-3"
                  aria-current={activeStep === step.step}
                >
                  <span
                    className={`z-10 flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                      step.step <= activeStep
                        ? 'border-cyan-400 bg-cyan-400 text-ink-950'
                        : 'border-white/20 bg-ink-900 text-parchment/50'
                    }`}
                  >
                    {step.step < activeStep ? <Check className="h-4 w-4" /> : step.step}
                  </span>
                  <span
                    className={`text-center text-xs ${
                      step.step === activeStep ? 'text-parchment' : 'text-parchment/45'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* mobile list */}
          <div className="flex flex-col gap-3 lg:hidden">
            {admissionSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.step)}
                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                  activeStep === step.step ? 'border-cyan-400/40 bg-cyan-400/5' : 'border-white/10'
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                    step.step <= activeStep ? 'bg-cyan-400 text-ink-950' : 'bg-white/10 text-parchment/60'
                  }`}
                >
                  {step.step}
                </span>
                <span className="text-sm text-parchment">{step.title}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="glass-panel mt-8 max-w-2xl p-8"
          >
            <p className="eyebrow">Step {activeStep} of {admissionSteps.length}</p>
            <h3 className="mt-2 text-2xl font-medium text-parchment">
              {admissionSteps[activeStep - 1].title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-parchment/70">
              {admissionSteps[activeStep - 1].description}
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setActiveStep((s) => Math.max(1, s - 1))}
                disabled={activeStep === 1}
                className="btn-ghost disabled:opacity-30"
              >
                Back
              </button>
              <button
                onClick={() => setActiveStep((s) => Math.min(admissionSteps.length, s + 1))}
                disabled={activeStep === admissionSteps.length}
                className="btn-primary disabled:opacity-30"
              >
                Next Step
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
