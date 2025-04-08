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

  const steps = [
    <FirstStep key="1" onNext={handleNextPage} />,
    <SecondStep key="2" onBack={handleBackPage} onNext={function (): void {
      throw new Error("Function not implemented.");
    } }/>,
  ];

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

        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MultiStep;
