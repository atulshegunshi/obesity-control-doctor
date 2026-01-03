import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="font-serif text-2xl font-bold mb-2">Kansas City Dietitian</h3>
                        <p className="text-white/80 max-w-xs">Personalized solutions for your health journey.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-secondary transition-colors"><Facebook /></a>
                        <a href="#" className="hover:text-secondary transition-colors"><Instagram /></a>
                        <a href="#" className="hover:text-secondary transition-colors"><Linkedin /></a>
                        <a href="#" className="hover:text-secondary transition-colors"><Twitter /></a>
                    </div>

                    <div className="text-center md:text-right text-sm text-white/60">
                        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                        <p>12345 Main Street, Overland Park, KS 66213</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
