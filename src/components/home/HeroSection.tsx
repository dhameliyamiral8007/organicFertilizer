import { ArrowRight, Leaf, Sparkles, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroProducts from '@/assets/hero-products.png';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-logo-green/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-logo-blue/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-logo-green/10 text-logo-green text-sm font-semibold border border-logo-green/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <span>100% Organic & Natural</span>
            </motion.div>

            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Nourish Your Soil,{' '}
              <motion.span 
                className="text-logo-green inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Naturally!
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform your garden with <strong className="text-logo-blue">Nisarg Poshan</strong> - premium organic fertilizers 
              made from city compost. Healthy soil, healthy plants, healthy you!
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="gap-2 bg-logo-blue hover:bg-logo-blue/90 shadow-elevated">
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="gap-2 border-logo-green text-logo-green hover:bg-logo-green/10">
                  <Leaf className="w-4 h-4" />
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: '100%', label: 'Organic', color: 'text-logo-green' },
                { value: '5000+', label: 'Happy Farmers', color: 'text-logo-blue' },
                { value: '4', label: 'Products', color: 'text-logo-green' }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center lg:text-left p-4 rounded-xl bg-card shadow-soft"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className={`text-2xl md:text-3xl font-display font-bold ${stat.color}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-logo-green/20 to-logo-blue/20 rounded-3xl blur-2xl transform rotate-6"
              animate={{ rotate: [6, 8, 6], scale: [1, 1.02, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-elevated bg-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src={heroProducts}
                alt="Nisarg Poshan Organic Fertilizer Products"
                className="w-full h-auto object-cover"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-card rounded-2xl p-4 shadow-card border border-border"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-logo-blue to-logo-blue/80 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sun className="w-6 h-6 text-sun" />
                </motion.div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Eco-Friendly</div>
                  <div className="text-xs text-logo-green font-medium">Trash is Treasure</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
