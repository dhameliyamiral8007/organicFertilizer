import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-logo-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-logo-green/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-logo-blue-foreground/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-logo-blue-foreground leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to Transform Your Garden?
          </motion.h2>
          <motion.p 
            className="text-xl text-logo-blue-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of satisfied farmers and gardeners who trust Nisarg Poshan 
            for healthier soil and better yields.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="gap-2 text-base bg-logo-green hover:bg-logo-green/90 text-logo-green-foreground shadow-lg"
              >
                Shop Now
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
       <motion.div 
  whileHover={{ scale: 1.05, y: -3 }} 
  whileTap={{ scale: 0.95 }}
>
  <Button
    size="lg"
    variant="outline"
    className="
      gap-2 text-base
      bg-transparent
      border-logo-blue-foreground/40
      text-logo-blue-foreground
      hover:bg-logo-blue-foreground/10
      hover:text-logo-blue-foreground
      focus:bg-transparent
      active:bg-transparent
    "
  >
    <motion.div
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
    >
      <Phone className="w-5 h-5" />
    </motion.div>
    Contact Us
  </Button>
</motion.div>

          </motion.div>

          <motion.p 
            className="text-sm text-logo-blue-foreground/60 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Free shipping on orders above ₹999 | COD Available
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
