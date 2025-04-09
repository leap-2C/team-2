"use client"

import React, { useState } from 'react';
import SignUpFirstStep from './SignUpFirstStep';
import SignUpSecondStep from './SignUpSecondStep';

const MultiStep = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
    });
    const handleNextStep = (newData: any) => {
        setFormData((prev) => ({ ...prev, ...newData }));
        setStep(2);
    };
    const handlePrevStep = () => {
        setStep(1);
    };
    return (
        <div className="flex">
            {step === 1 && <SignUpFirstStep formData={formData} onNext={handleNextStep} />}
            {step === 2 && <SignUpSecondStep formData={formData} onPrev={handlePrevStep} />}
        </div>
    );
};

export default MultiStep;
