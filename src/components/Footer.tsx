
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const socialIconsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };

  return (
    <footer className="bg-nigeria-black text-white">
      <div className="container-custom py-12 md:py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="text-2xl font-playfair font-bold text-nigeria-gold mb-6">Samwise Cuisine</h4>
            <p className="text-gray-300 mb-4">
              Experience the authentic flavors of Nigerian cuisine in a modern, welcoming atmosphere.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: "facebook", href: "#" },
                { icon: "instagram", href: "#" },
                { icon: "twitter", href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-nigeria-red flex items-center justify-center text-white hover:bg-nigeria-gold transition-colors duration-300"
                  custom={i}
                  variants={socialIconsVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {social.icon === "facebook" && (
                      <path d="M9.101 23.691v-9.689h-3.235v-3.817h3.235v-2.812c0-3.276 1.99-5.033 4.866-5.033 1.393 0 2.585.107 2.933.152v3.405h-2c-1.581 0-1.889.758-1.889 1.87v2.449h3.777l-.489 3.816h-3.288v9.66h-3.91z" />
                    )}
                    {social.icon === "instagram" && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    )}
                    {social.icon === "twitter" && (
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h5 className="text-lg font-semibold mb-4 text-nigeria-gold">Quick Links</h5>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-nigeria-gold transition-colors inline-block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h5 className="text-lg font-semibold mb-4 text-nigeria-gold">Opening Hours</h5>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h5 className="text-lg font-semibold mb-4 text-nigeria-gold">Newsletter</h5>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for promotions and Nigerian cuisine tips.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="input-field py-2 px-3 bg-white bg-opacity-10 text-white border-none focus:ring-2 focus:ring-nigeria-gold flex-grow"
                />
                <button
                  type="submit"
                  className="bg-nigeria-red text-white py-2 px-4 hover:bg-nigeria-gold transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 mt-10 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <p className="text-gray-400">
            © {currentYear} Samwise Cuisine. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
