import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart, CartItem } from '@/components/context/CartContext';

const OrderItems = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="text-lg font-bold text-logo-blue mb-4">Order Items (0)</h3>
        <p className="text-muted-foreground text-center py-8">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="text-lg font-bold text-logo-blue mb-4">
        Order Items ({cartItems.length})
      </h3>
      
      <div className="space-y-4">
        {cartItems.map((item: CartItem) => (
          <div 
            key={item.product.id}
            className="flex items-center gap-4 py-3 border-b border-border last:border-b-0"
          >
            {/* Product Image */}
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex-shrink-0 overflow-hidden">
              <img 
                src={item.product.image} 
                alt={item.product.name}
                className="w-full h-full object-contain p-1"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-foreground truncate">
                {item.product.name}
              </h4>
              <p className="text-sm text-muted-foreground">
                ₹{item.product.price} each
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              >
                <Minus className="w-3 h-3" />
              </Button>
              <span className="w-8 text-center font-medium">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>

            {/* Price & Remove */}
            <div className="text-right">
              <p className="font-bold text-foreground">
                ₹{item.product.price * item.quantity}
              </p>
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="text-sm text-destructive hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderItems;
