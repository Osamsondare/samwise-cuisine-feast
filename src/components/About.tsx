
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-nigeria-black mb-6">
              Experience the Heart of <span className="text-nigeria-red">Nigerian Cuisine</span>
            </h2>
            <div className="w-20 h-1 bg-nigeria-gold mb-6"></div>
            <p className="text-gray-700 mb-6 text-lg">
              Samwise Cuisine brings the authentic taste of Nigeria to your plate. 
              Founded in 2015 by Chef Samuel Adewale, our restaurant celebrates the diverse 
              culinary heritage of Nigeria, from the spicy flavors of the North to the rich, 
              coastal dishes of the South.
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              Our chefs use traditional cooking methods and carefully sourced ingredients to 
              create dishes that transport you to the heart of Nigeria. Every meal at Samwise 
              Cuisine is a celebration of culture, community, and the joy of sharing good food.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-nigeria-gold bg-opacity-20 rounded-full flex items-center justify-center text-nigeria-gold mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-nigeria-black">Authentic Recipes</h4>
                  <p className="text-gray-600">Traditional Nigerian cooking</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-nigeria-red bg-opacity-20 rounded-full flex items-center justify-center text-nigeria-red mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-nigeria-black">Fresh Ingredients</h4>
                  <p className="text-gray-600">Locally sourced produce</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={imageVariants}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="h-48 md:h-64 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Nigerian food" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-40 md:h-56 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1515589667966-8d6790681b57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Chef cooking" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="h-40 md:h-56 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                  alt="Restaurant interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-48 md:h-64 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Nigerian spices" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
