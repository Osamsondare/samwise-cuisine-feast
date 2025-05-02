
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 6px 15px rgba(139, 0, 0, 0.4)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1616496848128-801046f9b149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <motion.div 
        className="container-custom text-center z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-2 text-nigeria-gold">
          <span className="inline-block text-lg md:text-xl border-b-2 border-nigeria-gold pb-1">Welcome to</span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 font-playfair leading-tight"
        >
          Samwise <span className="text-nigeria-gold">Cuisine</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto"
        >
          Experience the Rich Flavors of Nigeria at Samwise Cuisine
        </motion.p>
        
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className="btn btn-primary bg-nigeria-red text-white px-8 py-3 rounded-full text-lg"
        >
          Book a Table
        </motion.button>
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: 1, 
          y: [0, 10, 0],
          transition: {
            delay: 1.5,
            duration: 1.5,
            repeat: Infinity
          }
        }}
      >
        <a href="#menu" className="text-white opacity-70 hover:opacity-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
