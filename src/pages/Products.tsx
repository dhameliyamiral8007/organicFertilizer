import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/home/ProductCard';
import { getProducts, getCategories } from '@/services/productService';
import { Leaf, Carrot, Flower2, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Leaf,
  Carrot,
  Flower2,
  Mountain,
};

const Products = () => {
  const products = getProducts();
  const categories = getCategories();

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
            Shop Our Range
          </motion.span>
          <motion.h1 
            className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Products
          </motion.h1>
          <motion.p 
            className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Premium organic fertilizers for every type of plant. 100% natural, chemical-free, 
            and made from sustainable city compost.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-border overflow-hidden">
        <div className="container">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((category, index) => {
              const Icon = iconMap[category.icon] || Leaf;
              const isGreen = index % 2 === 0;
              return (
                <motion.div
                  key={category.id}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card shadow-soft hover:shadow-card cursor-pointer transition-shadow border border-border/50 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isGreen ? 'bg-logo-green/10 group-hover:bg-logo-green' : 'bg-logo-blue/10 group-hover:bg-logo-blue'
                    }`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon className={`w-5 h-5 transition-colors ${
                      isGreen ? 'text-logo-green group-hover:text-logo-green-foreground' : 'text-logo-blue group-hover:text-logo-blue-foreground'
                    }`} />
                  </motion.div>
                  <div>
                    <h3 className="font-medium text-card-foreground">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20 bg-background overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
