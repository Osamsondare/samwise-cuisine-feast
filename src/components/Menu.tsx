
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const Menu: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Jollof Rice',
      description: 'Classic Nigerian rice cooked in a rich tomato sauce with aromatic spices',
      price: '₦2,500',
      image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
      category: 'Main'
    },
    {
      id: 2,
      name: 'Egusi Soup',
      description: 'Traditional melon seed soup with vegetables and choice of protein',
      price: '₦3,200',
      image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'Soups'
    },
    {
      id: 3,
      name: 'Suya',
      description: 'Spiced skewered meat, grilled to perfection with our secret suya spice mix',
      price: '₦1,800',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      category: 'Appetizers'
    },
    {
      id: 4,
      name: 'Pounded Yam & Vegetable Soup',
      description: 'Smooth, starchy yam served with fresh vegetable soup',
      price: '₦3,000',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      category: 'Main'
    },
    {
      id: 5,
      name: 'Moi Moi',
      description: 'Steamed bean pudding with vegetables and fish',
      price: '₦1,500',
      image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      category: 'Sides'
    },
    {
      id: 6,
      name: 'Pepper Soup',
      description: 'Spicy broth with choice of meat, fish, or chicken',
      price: '₦2,800',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'Soups'
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="menu" className="section-padding bg-nigeria-cream">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nigeria-black mb-4">
            Our <span className="text-nigeria-red">Menu</span>
          </h2>
          <div className="w-20 h-1 bg-nigeria-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover our authentic Nigerian dishes, carefully prepared with traditional spices and fresh ingredients.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="menu-item-card overflow-hidden group"
              whileHover={{
                y: -10,
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)"
              }}
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-nigeria-red transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-nigeria-red font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-nigeria-gold bg-nigeria-gold bg-opacity-10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm text-nigeria-red font-medium hover:underline"
                  >
                    Order Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <button className="btn btn-primary">View Full Menu</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
