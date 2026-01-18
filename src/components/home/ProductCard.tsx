import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import type { Product } from '@/services/productService';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 border border-border/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Badge */}
      {product.badge && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
        >
          <Badge className="absolute top-4 left-4 z-10 bg-logo-green text-logo-green-foreground border-0">
            {product.badge}
          </Badge>
        </motion.div>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-card">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Quick action overlay */}
        <motion.div 
          className="absolute inset-0 bg-logo-blue/90 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Button className="gap-2 bg-logo-green hover:bg-logo-green/90 text-logo-green-foreground">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-logo-blue transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{product.tagline}</p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {product.features.slice(0, 2).map((feature, i) => (
            <motion.span
              key={feature}
              className="text-xs px-2.5 py-1 rounded-full bg-logo-green/10 text-logo-green font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
            >
              {feature}
            </motion.span>
          ))}
        </div>

        {/* Price & Weight */}
        <div className="flex items-end justify-between pt-3 border-t border-border">
          <div>
            <motion.span 
              className="text-2xl font-display font-bold text-logo-blue"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              ₹{product.price}
            </motion.span>
            <span className="text-sm text-muted-foreground ml-1">/ {product.weight}</span>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm" variant="ghost" className="text-logo-green hover:text-logo-green hover:bg-logo-green/10 font-medium">
              View Details
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
