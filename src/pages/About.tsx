import Layout from '@/components/layout/Layout';
import { CheckCircle, Users, Leaf, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Recycle,
    title: 'Sustainability',
    description: 'Converting organic waste into valuable resources for a cleaner planet.',
    color: 'logo-green',
  },
  {
    icon: Leaf,
    title: 'Natural Approach',
    description: 'Using only organic materials to create chemical-free fertilizers.',
    color: 'logo-blue',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'Supporting local farmers and gardeners with affordable, quality products.',
    color: 'logo-green',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-20 overflow-hidden">
        <div className="container text-center">
          <motion.span 
            className="text-sm font-semibold text-logo-green uppercase tracking-wider inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.span>
          <motion.h1 
            className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn about our mission to create a cleaner earth through sustainable organic fertilizers.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="font-display text-3xl md:text-4xl font-bold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Trash is <span className="text-logo-green">Treasure</span>
              </motion.h2>
              <motion.p 
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                BA Prerna was founded with a simple yet powerful vision: to transform organic 
                waste into premium fertilizers that help farmers grow healthier crops while 
                reducing environmental pollution.
              </motion.p>
              <motion.p 
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Our Nisarg Poshan and Nisarg Shakti product lines are the result of years of 
                research and development, creating granularized soil revitalizers that deliver 
                consistent results while being 100% natural and organic.
              </motion.p>
              
              <div className="space-y-3 pt-4">
                {['City compost-based formulation', 'Chemical-free processing', 'Sustainable packaging', 'Quality tested products'].map((item, index) => (
                  <motion.div 
                    key={item} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1, type: "spring" }}
                    >
                      <CheckCircle className="w-5 h-5 text-logo-green" />
                    </motion.div>
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                <motion.div 
                  className="rounded-2xl bg-logo-blue p-8 text-logo-blue-foreground shadow-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <motion.div 
                    className="text-4xl font-display font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    5+
                  </motion.div>
                  <div className="text-sm opacity-80 mt-1">Years of Service</div>
                </motion.div>
                <motion.div 
                  className="rounded-2xl bg-logo-green p-8 text-logo-green-foreground shadow-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  <motion.div 
                    className="text-4xl font-display font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    1000+
                  </motion.div>
                  <div className="text-sm opacity-80 mt-1">Tons Processed</div>
                </motion.div>
              </div>
              <div className="space-y-4 mt-8">
                <motion.div 
                  className="rounded-2xl bg-sun p-8 text-sun-foreground shadow-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <motion.div 
                    className="text-4xl font-display font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    5000+
                  </motion.div>
                  <div className="text-sm opacity-80 mt-1">Happy Customers</div>
                </motion.div>
                <motion.div 
                  className="rounded-2xl bg-logo-blue p-8 text-logo-blue-foreground shadow-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  <motion.div 
                    className="text-4xl font-display font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    100%
                  </motion.div>
                  <div className="text-sm opacity-80 mt-1">Organic</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-secondary/30 overflow-hidden">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Values
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={value.title} 
                className="text-center p-8 rounded-2xl bg-card shadow-card border border-border/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    value.color === 'logo-green' ? 'bg-logo-green/10' : 'bg-logo-blue/10'
                  }`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className={`w-8 h-8 ${
                    value.color === 'logo-green' ? 'text-logo-green' : 'text-logo-blue'
                  }`} />
                </motion.div>
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-logo-blue overflow-hidden relative">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-logo-green/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-logo-blue-foreground/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
        </motion.div>
        <div className="container text-center relative">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold text-logo-blue-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Join Our Mission
          </motion.h2>
          <motion.p 
            className="text-logo-blue-foreground/80 text-lg max-w-xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Partner with us to create a cleaner, greener future through sustainable farming.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-logo-green hover:bg-logo-green/90 text-logo-green-foreground">
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
