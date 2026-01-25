import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface AddressInfo {
  flatHouseNo: string;
  apartmentArea: string;
  pincode: string;
  city: string;
  state: string;
  addressType: 'home' | 'office';
}

interface AddressStepProps {
  addressInfo: AddressInfo;
  onAddressInfoChange: (info: AddressInfo) => void;
  onBack: () => void;
}

const AddressStep = ({ 
  addressInfo, 
  onAddressInfoChange, 
  onBack
}: AddressStepProps) => {
  const [errors, setErrors] = useState<Partial<Record<keyof AddressInfo, string>>>({});

  const handleChange = (field: keyof AddressInfo, value: string) => {
    onAddressInfoChange({ ...addressInfo, [field]: value });
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
      <h3 className="text-lg font-bold text-logo-blue mb-6">Address Details</h3>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="flatHouseNo" className="text-logo-blue">
              Flat / House No. <span className="text-destructive">*</span>
            </Label>
            <Input
              id="flatHouseNo"
              placeholder="Flat / House No."
              value={addressInfo.flatHouseNo}
              onChange={(e) => handleChange('flatHouseNo', e.target.value)}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="apartmentArea" className="text-logo-blue">
              Apartment / Area / Sector / Village <span className="text-destructive">*</span>
            </Label>
            <Input
              id="apartmentArea"
              placeholder="Apartment / Area / Sector / Village"
              value={addressInfo.apartmentArea}
              onChange={(e) => handleChange('apartmentArea', e.target.value)}
              className="mt-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="pincode" className="text-logo-blue">
              Pincode <span className="text-destructive">*</span>
            </Label>
            <Input
              id="pincode"
              placeholder="Pincode"
              value={addressInfo.pincode}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                handleChange('pincode', value);
              }}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="city" className="text-logo-blue">
              City <span className="text-destructive">*</span>
            </Label>
            <Input
              id="city"
              placeholder="City"
              value={addressInfo.city}
              onChange={(e) => handleChange('city', e.target.value)}
              className="mt-2"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="state" className="text-logo-blue">
            State <span className="text-destructive">*</span>
          </Label>
          <Input
            id="state"
            placeholder="State"
            value={addressInfo.state}
            onChange={(e) => handleChange('state', e.target.value)}
            className="mt-2"
          />
        </div>

        <div>
          <Label className="text-logo-blue mb-3 block">
            Address Type <span className="text-destructive">*</span>
          </Label>
          <RadioGroup
            value={addressInfo.addressType}
            onValueChange={(value) => handleChange('addressType', value as 'home' | 'office')}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="home" id="home" />
              <Label htmlFor="home" className="cursor-pointer">Home</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="office" id="office" />
              <Label htmlFor="office" className="cursor-pointer">Office</Label>
            </div>
          </RadioGroup>
        </div>

        <Button 
          variant="outline" 
          onClick={onBack}
          className="w-full"
        >
          Back
        </Button>
      </div>
    </motion.div>
  );
};

export default AddressStep;
