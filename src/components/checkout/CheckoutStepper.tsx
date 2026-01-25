import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Step {
  number: number;
  label: string;
}

interface CheckoutStepperProps {
  currentStep: number;
  steps: Step[];
}

const CheckoutStepper = ({ currentStep, steps }: CheckoutStepperProps) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            {/* Step Circle */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm transition-all duration-300 ${
                currentStep > step.number
                  ? 'bg-logo-green text-white'
                  : currentStep === step.number
                  ? 'bg-logo-green text-white'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {currentStep > step.number ? (
                <Check className="w-5 h-5" />
              ) : (
                step.number
              )}
            </motion.div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={`w-16 md:w-24 h-1 mx-2 rounded transition-all duration-300 ${
                  currentStep > step.number ? 'bg-logo-green' : 'bg-muted'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Current Step Label */}
      <p className="mt-3 text-sm text-muted-foreground">
        Step {currentStep}: {steps.find(s => s.number === currentStep)?.label}
      </p>
    </div>
  );
};

export default CheckoutStepper;
