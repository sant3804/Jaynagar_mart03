import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hero = () => {
  const { darkMode } = useContext(ShopContext);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl mb-20 mt-6">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 backdrop-blur-sm rounded-full text-sm font-semibold text-indigo-700 shadow-lg border border-indigo-200"
            >
              ✨ New Collection 2025 - Limited Time
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                Shop Smart,
              </span>
              <br />
              <span className="text-gray-900 relative">
                Live Better
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-700 max-w-lg leading-relaxed font-medium"
            >
              Discover amazing products at <span className="text-indigo-600 font-bold">unbeatable prices</span>. Shop with JAYNAGAR MART and experience convenience like never before.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/collection">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl shadow-indigo-500/40 hover:shadow-3xl hover:shadow-indigo-500/60 transition-all overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Shop Now 
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              
              <Link to="/collection">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white border-3 border-indigo-300 text-indigo-700 rounded-full font-bold text-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all shadow-lg hover:shadow-xl"
                >
                  View Collection
                </motion.button>
              </Link>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { label: 'Products', value: '1000+', icon: '🛍️', color: 'from-blue-500 to-indigo-600' },
                { label: 'Happy Customers', value: '5000+', icon: '😊', color: 'from-purple-500 to-pink-600' },
                { label: 'Rating', value: '4.9★', icon: '⭐', color: 'from-yellow-500 to-orange-600' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="relative p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="text-3xl mb-1">{stat.icon}</div>
                  <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image/Illustration - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glowing background effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-30"
            />
            
            <div className="relative z-10">
              {/* Hero Image with enhanced styling */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-transparent to-pink-500/20 z-10 pointer-events-none" />
                <img 
                  src={assets.hero_img} 
                  alt="Hero Product" 
                  className="w-full h-auto object-cover" 
                />
              </motion.div>
            </div>

            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [-3, 3, -3]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
              className="absolute top-10 -left-10 bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-full shadow-2xl font-bold text-lg z-20 border-4 border-white"
            >
              <span className="text-2xl">🔥</span> 50% OFF
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [2, -2, 2]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5,
                ease: "easeInOut"
              }}
              className="absolute bottom-10 -right-10 bg-white px-8 py-4 rounded-full shadow-2xl font-bold text-lg z-20 border-4 border-indigo-200"
            >
              <span className="text-2xl">⚡</span> 
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Fast Delivery
              </span>
            </motion.div>

            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "linear"
              }}
              className="absolute top-1/2 -right-8 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-4 rounded-full shadow-xl z-20"
            >
              <span className="text-3xl">🎁</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -40, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>
    </div>
  );
};

export default Hero;
