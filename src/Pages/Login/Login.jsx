import React, { useState } from 'react';
import StepOtp from '../RegistrationSteps/StepOtp/StepOtp';
import StepPhoneEmail from '../RegistrationSteps/StepPhoneEmail/StepPhoneEmail';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp
};

const Login = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    const onNext = () => {
        setStep(step + 1);
    }

    return (
        <div>
            <Step onNext={onNext} />
        </div>
    )
}

export default Login
