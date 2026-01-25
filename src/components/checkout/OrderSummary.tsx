import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/components/context/CartContext';

interface OrderSummaryProps {
  showPayButton?: boolean;
  onProceedToPayment?: () => void;
}

const OrderSummary = ({ showPayButton = false, onProceedToPayment }: OrderSummaryProps) => {
  const { getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const shipping = 0; // Free shipping

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="text-lg font-bold text-logo-blue mb-4">Order Summary</h3>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">₹{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-medium text-logo-green">FREE</span>
        </div>
        
        <div className="border-t border-border pt-3 mt-3">
          <div className="flex justify-between">
            <span className="font-bold text-foreground">Total</span>
            <span className="font-bold text-foreground">₹{subtotal + shipping}</span>
          </div>
        </div>
      </div>

      {showPayButton && (
        <Button 
          onClick={onProceedToPayment}
          className="w-full mt-4 bg-logo-green hover:bg-logo-green/90 text-white"
        >
          Proceed to Payment
        </Button>
      )}

      <Link 
        to="/products" 
        className="block text-center text-sm text-logo-blue hover:underline mt-4"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSummary;
