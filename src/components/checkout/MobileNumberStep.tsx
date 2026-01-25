import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface MobileNumberStepProps {
  mobileNumber: string;
  onMobileNumberChange: (value: string) => void;
  onContinue: () => void;
}

const MobileNumberStep = ({ 
  mobileNumber, 
  onMobileNumberChange, 
  onContinue 
}: MobileNumberStepProps) => {
  const [error, setError] = useState('');

  const validateAndContinue = () => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!mobileNumber.trim()) {
      setError('Mobile number is required');
      return;
    }
    if (!phoneRegex.test(mobileNumber)) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    setError('');
    onContinue();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-card rounded-lg border border-border p-6"
    >
      <h3 className="text-lg font-bold text-logo-blue mb-2">Mobile Number</h3>
      <p className="text-sm text-muted-foreground mb-6">
        We'll use this to send you order updates
      </p>

      <div className="space-y-4">
        <div>
          <Label htmlFor="mobile" className="text-logo-blue">
            Mobile Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="mobile"
            type="tel"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 10);
              onMobileNumberChange(value);
              if (error) setError('');
            }}
            className="mt-2"
          />
          {error && <p className="text-sm text-destructive mt-1">{error}</p>}
        </div>

        <Button 
          onClick={validateAndContinue}
          className="w-full bg-logo-green hover:bg-logo-green/90 text-white"
        >
          Continue
        </Button>
      </div>
    </motion.div>
  );
};

export default MobileNumberStep;
