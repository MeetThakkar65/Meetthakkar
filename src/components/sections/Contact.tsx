"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, AlertCircle, Mail } from "lucide-react";

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const projectTypes = [
  { id: "Reels", label: "Instagram Reels / TikTok" },
  { id: "YouTube", label: "YouTube Longform" },
  { id: "Commercial", label: "Commercial / Brand Film" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", brand: "", email: "", whatsapp: "", type: "Reels", budget: "", description: "",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({}); // NEW: Track multiple errors

 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // 1. Precise Validation
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email Address is required";
    if (!formData.description) newErrors.description = "Project description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // 2. Professional Message Formatting (using %0A for line breaks)
    const message = `*New Project Inquiry*%0A%0A` +
                    `*Name:* ${formData.name}%0A` +
                    `*Brand:* ${formData.brand || "N/A"}%0A` +
                    `*Email:* ${formData.email}%0A` +
                    `*WhatsApp:* ${formData.whatsapp || "N/A"}%0A%0A` +
                    `*Project Type:* ${formData.type}%0A` +
                    `*Budget:* ${formData.budget || "Not Specified"}%0A%0A` +
                    `*Description:*%0A${formData.description}`;

    // 3. Direct WhatsApp Link Construction
    const phoneNumber = "919104141094"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open in new tab
    window.open(whatsappUrl, "_blank");
  };
  const inputClasses = (fieldName: string) => `
    w-full bg-white/5 border rounded-2xl px-5 py-4 text-white focus:outline-none transition-all placeholder:text-white/20 
    ${errors[fieldName] ? 'border-red-500/50' : 'border-white/10 focus:border-accent/50 focus:bg-white/[0.08]'}
  `;

  // Helper to render error messages
  const ErrorMessage = ({ field }: { field: string }) => (
    <AnimatePresence>
      {errors[field] && (
        <motion.p 
          initial={{ opacity: 0, y: -5 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-red-500 text-[10px] mt-1 ml-2 font-medium flex items-center gap-1"
        >
          <AlertCircle size={10} /> {errors[field]}
        </motion.p>
      )}
    </AnimatePresence>
  );

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Ready to <br /> <span className="text-mask">Elevate?</span>
          </h2>
          <p className="text-secondaryText text-xl leading-relaxed max-w-md opacity-60">
            Stop leaving views on the table. Fill out the form, and let's craft something premium.
          </p>
          
          <div className="mt-12">
            <div className="glass p-8 rounded-[2rem] border-white/5 inline-flex flex-col gap-4">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-secondaryText font-bold">Direct Email</p>
                    <p className="text-white font-medium">tmeet348@gmail.com</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <motion.div className="glass p-8 md:p-12 rounded-[3rem] border-white/10 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input type="text" placeholder="Full Name *" className={inputClasses('name')} onChange={(e)=>setFormData({...formData, name: e.target.value})} />
                <ErrorMessage field="name" />
              </div>
              <div>
                <input type="text" placeholder="Brand Name" className={inputClasses('brand')} onChange={(e)=>setFormData({...formData, brand: e.target.value})} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input type="email" placeholder="Email Address *" className={inputClasses('email')} onChange={(e)=>setFormData({...formData, email: e.target.value})} />
                <ErrorMessage field="email" />
              </div>
              <div>
                <input type="text" placeholder="WhatsApp Number" className={inputClasses('whatsapp')} onChange={(e)=>setFormData({...formData, whatsapp: e.target.value})} />
              </div>
            </div>

            {/* FIXED DROPDOWN */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`${inputClasses('type')} flex justify-between items-center text-left`}
              >
                <span>{projectTypes.find(t => t.id === formData.type)?.label}</span>
                <ChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} size={18} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    /* FIXED: Higher Z-index and Solid Dark Background to prevent clutter */
                    className="absolute top-full left-0 w-full mt-2 bg-[#0B0B0B] border border-white/10 rounded-2xl overflow-hidden z-[999] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2 backdrop-blur-xl"
                  >
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, type: type.id });
                          setIsOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10 text-white text-sm transition-colors"
                      >
                        {type.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <input type="text" placeholder="Monthly Budget" className={inputClasses('budget')} onChange={(e)=>setFormData({...formData, budget: e.target.value})} />
            
            <div>
              <textarea 
                placeholder="Project Description *" 
                rows={4} 
                className={`${inputClasses('description')} resize-none`} 
                onChange={(e)=>setFormData({...formData, description: e.target.value})}
              ></textarea>
              <ErrorMessage field="description" />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-accent hover:bg-hoverAccent text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-3 group active:scale-[0.98]"
            >
              <WhatsAppIcon />
              Send Message via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}