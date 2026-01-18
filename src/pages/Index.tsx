import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import AboutSection from '@/components/home/AboutSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <AboutSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
