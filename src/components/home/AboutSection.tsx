import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const benefits = [
  'Made from sustainable city compost',
  'Improves soil structure and fertility',
  'Slow-release nutrients for lasting effect',
  'Safe for organic farming certification',
  'Reduces dependency on chemical fertilizers',
  'Supports local waste-to-wealth initiatives',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4 }
  }
};

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-logo-green/20 to-logo-blue/20 rounded-3xl blur-2xl transform -rotate-6"
              animate={{ rotate: [-6, -4, -6], scale: [1, 1.02, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div 
                  className="rounded-2xl overflow-hidden shadow-card bg-card border border-border/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <div className="aspect-square bg-gradient-to-br from-logo-green/5 to-logo-blue/5 flex items-center justify-center p-8">
                    <div className="text-center">
                      <motion.div 
                        className="text-5xl font-display font-bold text-logo-blue"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                      >
                        5+
                      </motion.div>
                      <div className="text-sm text-muted-foreground mt-2">Years of Excellence</div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="rounded-2xl overflow-hidden shadow-card bg-logo-blue"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  <div className="aspect-video p-6 flex items-center justify-center">
                    <div className="text-center text-logo-blue-foreground">
                      <motion.div 
                        className="text-3xl font-display font-bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        1000+
                      </motion.div>
                      <div className="text-sm opacity-80 mt-1">Tons Processed</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="space-y-4 mt-8">
                <motion.div 
                  className="rounded-2xl overflow-hidden shadow-card bg-logo-green"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <div className="aspect-video p-6 flex items-center justify-center">
                    <div className="text-center text-logo-green-foreground">
                      <motion.div 
                        className="text-3xl font-display font-bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        100%
                      </motion.div>
                      <div className="text-sm opacity-80 mt-1">Natural</div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="rounded-2xl overflow-hidden shadow-card bg-card border border-border/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  <div className="aspect-square bg-gradient-to-br from-sun/10 to-logo-green/10 flex items-center justify-center p-8">
                    <div className="text-center">
                      <motion.div 
                        className="text-5xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        ♻️
                      </motion.div>
                      <div className="text-sm text-muted-foreground mt-2">Trash to Treasure</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className="text-sm font-semibold text-logo-green uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About BA Prerna
            </motion.span>
            <motion.h2 
              className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Transforming Waste Into{' '}
              <span className="text-logo-blue">Wealth for Farmers</span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              BA Prerna is on a mission to create a cleaner earth by converting organic waste 
              into premium fertilizers. Our Nisarg Poshan and Nisarg Shakti products help 
              farmers and gardeners grow healthier plants while caring for the environment.
            </motion.p>
            <motion.p 
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Based on the philosophy that "Trash is Treasure," we work with city composting 
              facilities to create granularized soil revitalizers that enrich your soil naturally.
            </motion.p>

            {/* Benefits List */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-2"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05, type: "spring" }}
                  >
                    <CheckCircle className="w-5 h-5 text-logo-green flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="mt-6 bg-logo-blue hover:bg-logo-blue/90">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
