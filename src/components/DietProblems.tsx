import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, AlertCircle } from 'lucide-react';

interface Problem {
    title: string;
    description: string;
}

const problems: Problem[] = [
    {
        title: "Emotional Eating",
        description: "Using food to cope with feelings rather than to satisfy hunger. This often leads to overeating and guilt loops."
    },
    {
        title: "Insulin Resistance",
        description: "When cells in your muscles, fat, and liver don't respond well to insulin and can't use glucose from your blood for energy."
    },
    {
        title: "Slow Metabolism",
        description: "A condition where your body burns fewer calories than expected, making weight loss difficult despite diet and exercise."
    },
    {
        title: "Hormonal Imbalances",
        description: "Fluctuations in hormones like cortisol, leptin, and ghrelin can significantly impact appetite and fat storage."
    },
    {
        title: "Portion Control",
        description: "Difficulty estimating appropriate serving sizes, often influenced by large restaurant portions and package sizes."
    }
];

const DietProblems: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-accent text-sm font-bold uppercase tracking-widest">Challenges</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-text mt-2 mb-4">Common Diet Problems</h2>
                    <p className="text-text/70 max-w-2xl mx-auto">
                        Understanding the root cause is the first step towards a sustainable solution.
                    </p>
                </div>

                <div className="space-y-4">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="border border-gray-100 rounded-xl overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openIndex === index ? 'bg-background' : 'bg-white hover:bg-gray-50'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-full ${openIndex === index ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                                        <AlertCircle size={20} />
                                    </div>
                                    <span className={`font-medium text-lg ${openIndex === index ? 'text-primary' : 'text-text'}`}>
                                        {problem.title}
                                    </span>
                                </div>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown className="text-gray-400" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 bg-background text-text/80 leading-relaxed border-t border-gray-100/50">
                                            {problem.description}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DietProblems;
