"use client";

import { useState, useEffect } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { motion, AnimatePresence } from "framer-motion";

const MultiStep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValue, setFormValue] = useState<any>({});

  useEffect(() => {
    const saved = localStorage.getItem("FormData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setCurrentStep(parsed.currentStep || 0);
      setFormValue(parsed);
    }
  }, []);

  const steps = [<FirstStep key="1" />, <SecondStep key="2" />];

  const handleNextPage = () => {
    if (currentStep < steps.length - 1) {
      const next = currentStep + 1;
      setCurrentStep(next);
      localStorage.setItem("FormData", JSON.stringify({ ...formValue, currentStep: next }));
    }
  };

  const handleBackPage = () => {
    if (currentStep > 0) {
      const prev = currentStep - 1;
      setCurrentStep(prev);
      localStorage.setItem("FormData", JSON.stringify({ ...formValue, currentStep: prev }));
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-xl"
        >
          {steps[currentStep]}
          <div className="mt-6 flex justify-between">
            <button
              onClick={handleBackPage}
              disabled={currentStep === 0}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition disabled:opacity-50"
            >
              Back
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentStep === steps.length - 1}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MultiStep;
