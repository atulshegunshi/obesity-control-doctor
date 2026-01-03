import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const articles = [
    {
        title: "New Study Links Sleep Patterns to Metabolic Health",
        source: "Medical News Today",
        date: "Dec 12, 2025",
        link: "#"
    },
    {
        title: "Understanding GLP-1 Agonists: A Comprehensive Guide",
        source: "Healthline",
        date: "Nov 28, 2025",
        link: "#"
    },
    {
        title: "5 Natural Ways to Boost Your Metabolism",
        source: "Nutrition Daily",
        date: "Nov 15, 2025",
        link: "#"
    },
    {
        title: "The Impact of Stress on Weight Gain",
        source: "Psychology Today",
        date: "Nov 03, 2025",
        link: "#"
    }
];

const NewsSection: React.FC = () => {
    return (
        <section className="py-20 bg-background border-t border-primary/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <span className="text-accent text-sm font-bold uppercase tracking-widest">Latest Updates</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-text mt-2">In The News</h2>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium">
                        View all articles <ArrowRight size={18} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {articles.map((article, index) => (
                        <a
                            key={index}
                            href={article.link}
                            className="group block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                                    {article.source}
                                </span>
                                <ExternalLink size={18} className="text-gray-400 group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-sm text-gray-500">{article.date}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
