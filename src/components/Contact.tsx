import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div>
                        <span className="text-accent text-sm font-bold uppercase tracking-widest">Get In Touch</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-text mt-2 mb-6">Start Your Journey Today</h2>
                        <p className="text-text/70 mb-8 leading-relaxed">
                            We are accepting new patients. Fill out the form or contact us directly to schedule your initial consultation.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-background rounded-full text-primary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text">Phone</h4>
                                    <p className="text-text/70">(555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-background rounded-full text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text">Email</h4>
                                    <p className="text-text/70">contact@kcdietitian.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-background rounded-full text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text">Location</h4>
                                    <p className="text-text/70">12345 Main Street<br />Overland Park, KS 66213</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-background rounded-full text-primary">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-text">Hours</h4>
                                    <p className="text-text/70">Mon-Fri: 9am - 5pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-background p-8 rounded-2xl shadow-sm border border-primary/10">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text">First Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary bg-white" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary bg-white" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary bg-white" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text">Message</label>
                                <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary bg-white" placeholder="How can we help you?" />
                            </div>

                            <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
