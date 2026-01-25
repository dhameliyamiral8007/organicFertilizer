import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import CheckoutStepper from '@/components/checkout/CheckoutStepper';
import MobileNumberStep from '@/components/checkout/MobileNumberStep';
import CustomerInfoStep from '@/components/checkout/CustomerInfoStep';
import AddressStep from '@/components/checkout/AddressStep';
import OrderSummary from '@/components/checkout/OrderSummary';
import OrderItems from '@/components/checkout/OrderItems';
import { useCart } from '@/components/context/CartContext';
import { toast } from 'sonner';

const steps = [
  { number: 1, label: 'Mobile Number' },
  { number: 2, label: 'Customer Information' },
  { number: 3, label: 'Address Details' },
];

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  
  const [mobileNumber, setMobileNumber] = useState('');
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [addressInfo, setAddressInfo] = useState<{
    flatHouseNo: string;
    apartmentArea: string;
    pincode: string;
    city: string;
    state: string;
    addressType: 'home' | 'office';
  }>({
    flatHouseNo: '',
    apartmentArea: '',
    pincode: '',
    city: '',
    state: '',
    addressType: 'home',
  });

  const handleProceedToPayment = () => {
    // Validate address fields
    if (!addressInfo.flatHouseNo || !addressInfo.apartmentArea || 
        !addressInfo.pincode || !addressInfo.city || !addressInfo.state) {
      toast.error('Please fill in all address fields');
      return;
    }
    if (addressInfo.pincode.length !== 6) {
      toast.error('Please enter a valid 6-digit pincode');
      return;
    }
    
    toast.success('Order placed successfully! Redirecting to payment...');
    // Here you would integrate with a payment gateway
  };

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-2xl font-bold text-logo-blue mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">Add some products to proceed with checkout</p>
            <button
              onClick={() => navigate('/products')}
              className="bg-logo-green text-white px-6 py-3 rounded-lg hover:bg-logo-green/90 transition-colors"
            >
              Browse Products
            </button>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-logo-blue mb-8"
        >
          Checkout
        </motion.h1>

        <CheckoutStepper currentStep={currentStep} steps={steps} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form Area */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <MobileNumberStep
                  key="step1"
                  mobileNumber={mobileNumber}
                  onMobileNumberChange={setMobileNumber}
                  onContinue={() => setCurrentStep(2)}
                />
              )}
              {currentStep === 2 && (
                <CustomerInfoStep
                  key="step2"
                  customerInfo={customerInfo}
                  onCustomerInfoChange={setCustomerInfo}
                  onContinue={() => setCurrentStep(3)}
                  onBack={() => setCurrentStep(1)}
                />
              )}
              {currentStep === 3 && (
                <AddressStep
                  key="step3"
                  addressInfo={addressInfo}
                  onAddressInfoChange={setAddressInfo}
                  onBack={() => setCurrentStep(2)}
                />
              )}
            </AnimatePresence>

            {/* Order Items */}
            <OrderItems />
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <OrderSummary 
                showPayButton={currentStep === 3}
                onProceedToPayment={handleProceedToPayment}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
