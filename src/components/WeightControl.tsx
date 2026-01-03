import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Moon, Droplets, Footprints } from 'lucide-react';

const tips = [
    {
        icon: <Utensils size={32} />,
        title: "Mindful Eating",
        description: "Focus on the experience of eating. Chew slowly, remove distractions, and listen to your body's hunger cues."
    },
    {
        icon: <Droplets size={32} />,
        title: "Hydration",
        description: "Drinking water before meals can reduce appetite and calorie intake. Proper hydration drives metabolism."
    },
    {
        icon: <Moon size={32} />,
        title: "Quality Sleep",
        description: "Poor sleep disrupts hormones like ghrelin and leptin, increasing hunger and cravings for unhealthy foods."
    },
    {
        icon: <Footprints size={32} />,
        title: "Daily Movement",
        description: "Incorporate non-exercise activity thermogenesis (NEAT) by walking more, taking stairs, and standing often."
    }
];

const WeightControl: React.FC = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-accent text-sm font-bold uppercase tracking-widest">Natural Approach</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-text mt-2">Natural Weight Control</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tips.map((tip, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/20"
                        >
                            <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center text-primary mb-6">
                                {tip.icon}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-text mb-3">{tip.title}</h3>
                            <p className="text-text/70 leading-relaxed text-sm">
                                {tip.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeightControl;
