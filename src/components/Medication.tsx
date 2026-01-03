import React from 'react';
import { Pill } from 'lucide-react';

const Medication: React.FC = () => {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    <div className="flex-1">
                        <span className="text-accent text-sm font-bold uppercase tracking-widest">Medical Support</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-text mt-2 mb-6">General Medication</h2>
                        <div className="space-y-4 text-text/80 leading-relaxed">
                            <p>
                                While lifestyle changes are the foundation of weight management, some patients benefit from medical assistance. Modern obesity medications work by targeting specific pathways in the brain and body that regulate appetite and fullness.
                            </p>
                            <p>
                                We carefully evaluate candidates for FDA-approved medications such as GLP-1 receptor agonists, which have shown significant results in clinical weight management when combined with diet and exercise.
                            </p>
                            <div className="p-4 bg-white rounded-lg border-l-4 border-accent shadow-sm mt-6">
                                <p className="italic text-sm">
                                    "Medication is not a replacement for healthy habits, but a tool to make those habits more sustainable."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full md:w-1/3 flex justify-center">
                        <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl transform scale-150"></div>
                        <div className="relative bg-white p-8 rounded-2xl shadow-lg rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Pill size={80} className="text-primary" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Medication;
