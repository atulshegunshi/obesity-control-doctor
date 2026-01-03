import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <div className="relative h-[600px] w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80")',
                    filter: 'brightness(0.7)'
                }}
            />

            {/* Overlay Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="uppercase tracking-widest text-sm mb-4"
                >
                    Kansas City Dietitian Nutritionists
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="font-serif text-5xl md:text-7xl mb-4 font-light italic"
                >
                    Personalized Solutions
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl md:text-2xl mb-8 font-light"
                >
                    for complicated journeys
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.8 }}
                    className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-colors uppercase tracking-wider font-medium"
                >
                    Work With Us
                </motion.button>
            </div>

            {/* Wave Separator */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
                <svg viewBox="0 0 1440 100" className="fill-background w-full h-auto block">
                    <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
