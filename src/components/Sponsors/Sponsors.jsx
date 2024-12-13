import React from 'react';
import { motion } from 'framer-motion';

const sponsorsData = [
  {
    id: 1,
    name: 'TechCorp',
    logo: 'https://via.placeholder.com/150',
    tier: 'Platinum',
  },
  {
    id: 2,
    name: 'InnovateX',
    logo: 'https://via.placeholder.com/150',
    tier: 'Gold',
  },
  {
    id: 3,
    name: 'FutureWave',
    logo: 'https://via.placeholder.com/150',
    tier: 'Gold',
  },
  {
    id: 4,
    name: 'DigiSolutions',
    logo: 'https://via.placeholder.com/150',
    tier: 'Silver',
  },
  {
    id: 5,
    name: 'NextGen',
    logo: 'https://via.placeholder.com/150',
    tier: 'Silver',
  },
];

const Sponsors = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const sponsorVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      // rotate: [0, 2, -2, 0],
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div id='sponsors' className="  min-h-screen 
    bg-black 
     py-20 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          className="text-5xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Sponsors
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-16 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Proud partners making our fest possible
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sponsorsData.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              variants={sponsorVariants}
              whileHover="hover"
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-2xl transform transition-all duration-300"
            >
              <motion.div
                className="bg-white rounded-lg p-4 mb-4 flex items-center justify-center h-48"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                {/* <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold
                  ${sponsor.tier === 'Platinum' ? 'bg-gradient-to-r from-gray-100 to-gray-300 text-gray-800' :
                    sponsor.tier === 'Gold' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900' :
                    'bg-gradient-to-r from-gray-400 to-gray-600 text-white'}`}>
                  {sponsor.tier} Sponsor
                </span> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sponsors;