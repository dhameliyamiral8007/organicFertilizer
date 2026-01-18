import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-logo-blue text-logo-blue-foreground overflow-hidden">
      <div className="container mx-auto px-6 rounded-3xl my-8 bg-logo-blue border-2 border-logo-blue">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          
          {/* Brand Section - Left */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Logo Box */}
            <div className="bg-white rounded-xl p-4 w-fit">
              <div className="flex items-center gap-2">
                <div className="flex flex-col">
                  <div className="flex items-center gap-0.5">
                    <span className="font-display text-lg font-bold text-logo-blue">BA</span>
                    <span className="font-display text-lg font-bold text-logo-green">PRERNA</span>
                  </div>
                  <span className="text-[8px] text-logo-blue font-semibold">Nisarg Poshan</span>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm opacity-90 leading-relaxed">
              BA Prerna Group advances sustainable growth in India through renewable energy, infrastructure, and innovation.
            </p>
            
            {/* Address */}
            <p className="text-xs opacity-80 leading-relaxed">
              Tower-B, 7th Floor, SNS ATRIA, Opp Jolly Party Plot, Vesu, Surat, Gujarat, India
            </p>
          </motion.div>

          {/* Services & Products - Middle Left */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold">Services & Products</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                'Land, Connectivity & Power Evacuation',
                'Project & Asset Lifecycle Management',
                'Engineering, Procurement & Construction',
                'Customer Outreach & Power Procurement',
                'Waste to Fuel',
                'Waste to Compost'
              ].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-sm opacity-80 hover:opacity-100 hover:text-logo-green transition-all"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Internal Links - Middle Right */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold">Internal Links</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { to: '/about', label: 'About Us' },
                { to: '#', label: 'Careers' },
                { to: '#', label: 'Photos & Videos' }
              ].map((link) => (
                <motion.div key={link.to} whileHover={{ x: 5 }}>
                  <Link to={link.to} className="text-sm opacity-80 hover:opacity-100 hover:text-logo-green transition-all">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Contact Buttons - Center */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-end gap-4 mb-8 pb-8 border-b border-logo-blue-foreground/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Phone Button */}
          <motion.a
            href="tel:+919876543210"
            className="flex items-center gap-3 px-5 py-3 bg-logo-blue-foreground/15 rounded-full hover:bg-logo-green hover:text-logo-green-foreground transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">0261-3517373</span>
          </motion.a>

          {/* Email Button */}
          <motion.a
            href="mailto:info@baprerna.com"
            className="flex items-center gap-3 px-5 py-3 bg-logo-blue-foreground/15 rounded-full hover:bg-logo-green hover:text-logo-green-foreground transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">baprerna@gmail.com</span>
          </motion.a>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {/* Left: Copyright */}
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} BA Prerna Group. All Rights Reserved.
          </p>

          {/* Right: Footer Links */}
          <div className="flex gap-6">
            {['Sitemap', 'Privacy Policy', 'Terms & condition', 'Disclaimer'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-sm opacity-70 hover:opacity-100 hover:text-logo-green transition-all"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
