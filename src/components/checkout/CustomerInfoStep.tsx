import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
}

interface CustomerInfoStepProps {
  customerInfo: CustomerInfo;
  onCustomerInfoChange: (info: CustomerInfo) => void;
  onContinue: () => void;
  onBack: () => void;
}

const CustomerInfoStep = ({ 
  customerInfo, 
  onCustomerInfoChange, 
  onContinue,
  onBack
}: CustomerInfoStepProps) => {
  const [errors, setErrors] = useState<Partial<CustomerInfo>>({});

  const validateAndContinue = () => {
    const newErrors: Partial<CustomerInfo> = {};
    
    if (!customerInfo.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!customerInfo.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!customerInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    onContinue();
  };

  const handleChange = (field: keyof CustomerInfo, value: string) => {
    onCustomerInfoChange({ ...customerInfo, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="bg-card rounded-lg border border-border p-6"
    >
      <h3 className="text-lg font-bold text-logo-blue mb-6">Customer Information</h3>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-logo-blue">
              First Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="firstName"
              placeholder="First Name"
              value={customerInfo.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className="mt-2"
            />
            {errors.firstName && (
              <p className="text-sm text-destructive mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName" className="text-logo-blue">
              Last Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="lastName"
              placeholder="Last Name"
              value={customerInfo.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className="mt-2"
            />
            {errors.lastName && (
              <p className="text-sm text-destructive mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-logo-blue">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Email Address"
            value={customerInfo.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="mt-2"
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="w-full"
          >
            Back
          </Button>
          <Button 
            onClick={validateAndContinue}
            className="w-full bg-logo-green hover:bg-logo-green/90 text-white"
          >
            Continue
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomerInfoStep;
