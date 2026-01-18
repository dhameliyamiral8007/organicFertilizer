import { Leaf, Recycle, Award, Truck, Shield, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Leaf,
    title: '100% Organic',
    description: 'Made from natural city compost with no harmful chemicals or synthetic additives.',
    color: 'logo-green',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly',
    description: 'Trash is treasure! We convert organic waste into valuable soil nutrients.',
    color: 'logo-blue',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Granularized soil revitalizer that delivers consistent, long-lasting results.',
    color: 'logo-green',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery across India to your doorstep.',
    color: 'logo-blue',
  },
  {
    icon: Shield,
    title: 'Safe for Plants',
    description: 'Gentle yet effective formula safe for all types of plants and gardens.',
    color: 'logo-green',
  },
  {
    icon: Heart,
    title: 'Farmer Trusted',
    description: 'Trusted by thousands of farmers and gardeners across the country.',
    color: 'logo-blue',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-sm font-semibold text-logo-green uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The Nisarg Poshan Difference
          </motion.h2>
          <motion.p 
            className="mt-4 text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We're committed to sustainable farming and healthier soil through our 
            premium organic products.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { type: "spring", stiffness: 400 }
              }}
              className="group p-6 rounded-2xl bg-card shadow-soft hover:shadow-card border border-border/50 transition-colors duration-300"
            >
              <motion.div 
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  feature.color === 'logo-green' 
                    ? 'bg-logo-green/10 group-hover:bg-logo-green' 
                    : 'bg-logo-blue/10 group-hover:bg-logo-blue'
                }`}
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <feature.icon className={`w-7 h-7 transition-colors ${
                  feature.color === 'logo-green'
                    ? 'text-logo-green group-hover:text-logo-green-foreground'
                    : 'text-logo-blue group-hover:text-logo-blue-foreground'
                }`} />
              </motion.div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
