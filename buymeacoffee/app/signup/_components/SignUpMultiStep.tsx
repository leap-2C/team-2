"use client";

import React, { useState } from "react";
import SignUpFirstStep from "./SignUpFirstStep";
import SignUpSecondStep from "./SignUpSecondStep";

const MultiStep = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");

  return (
    <div>
      {step === 1 && (
        <SignUpFirstStep
          onNext={(user) => {
            setUsername(user);
            setStep(2);
          }}
        />
      )}
      {step === 2 && (
        <SignUpSecondStep
          username={username}
          onPrev={() => setStep(1)}
        />
      )}
    </div>
  );
};

export default MultiStep;