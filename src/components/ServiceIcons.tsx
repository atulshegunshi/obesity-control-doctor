import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Scale, User, Users, Activity, Heart, HelpCircle } from 'lucide-react';

interface ServiceIconProps {
    icon: React.ReactNode;
    label: string;
    color: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ icon, label, color }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="flex flex-col items-center gap-3 group cursor-pointer"
    >
        <div
            className={`w-24 h-24 rounded-full flex items-center justify-center text-white transition-shadow shadow-md group-hover:shadow-lg ${color}`}
        >
            {React.cloneElement(icon as React.ReactElement, { size: 40, strokeWidth: 1.5 })}
        </div>
        <span className={`text-center font-medium text-sm md:text-base max-w-[120px] leading-tight group-hover:text-primary transition-colors`}>
            {label}
        </span>
    </motion.div>
);

const ServiceIcons: React.FC = () => {
    const services = [
        { icon: <Leaf />, label: "Improved Gut Health", color: "bg-[#5D4037]" }, // Deep Earth
        { icon: <Scale />, label: "Balancing Hormones", color: "bg-[#8D6E63]" }, // Cocoa
        { icon: <User />, label: "Supporting Autoimmune Conditions", color: "bg-[#D4C4B7]" }, // Taupe
        { icon: <Users />, label: "Family Nutrition & Pediatrics", color: "bg-[#A1887F]" }, // Light Brown
        { icon: <Activity />, label: "Athletic Performance", color: "bg-[#C5A065]" }, // Muted Gold
        { icon: <Heart />, label: "Healthy Living", color: "bg-[#7CB342]" }, // Muted Green
        { icon: <HelpCircle />, label: "It's Complicated But I Still Need Help!", color: "bg-[#FF8A65]" }, // Soft Coral
    ];

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
                    {/* Decorative title background could go here */}
                    <div className="bg-[#D2691E] text-white py-2 px-8 rounded-full shadow-lg transform -rotate-1 inline-block">
                        <h2 className="font-serif text-2xl md:text-3xl">How Can We Help You?</h2>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceIcon key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceIcons;
