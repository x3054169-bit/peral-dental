import React, { useEffect, useState, useMemo } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Smile,
  Shield,
  ArrowRight,
  Award,
  Users,
  Zap,
  Map
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
      scrolled ? "py-3 glass-header" : "py-6 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-12 shadow-lg shadow-brand-500/20">
            <Smile size={24} strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter text-brand-500">
            PEARL<span className={cn("transition-colors duration-500", scrolled ? "text-slate-900" : "text-slate-900")}>DENTAL</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-brand-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-6 pl-6 border-l border-slate-200">
            <a 
              href="tel:+918602655259"
              className="text-sm font-bold text-slate-900 hover:text-brand-500 transition-colors flex items-center gap-2"
            >
              <Phone size={16} className="text-brand-500" />
              Call
            </a>
            <a 
              href="https://wa.me/918602655259"
              className="bg-brand-500 text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/20 active:scale-95"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-10 h-10 flex items-center justify-center text-slate-900 bg-white/50 backdrop-blur-sm rounded-full border border-slate-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-slate-900 flex items-center justify-between"
                >
                  {link.name}
                  <ChevronRight size={20} className="text-slate-300" />
                </a>
              ))}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <a 
                  href="tel:+918602655259"
                  className="bg-slate-50 text-slate-900 p-5 rounded-2xl text-center font-bold flex flex-col items-center gap-2"
                >
                  <Phone size={20} />
                  Call
                </a>
                <a 
                  href="https://wa.me/918602655259"
                  className="bg-brand-500 text-white p-5 rounded-2xl text-center font-bold flex flex-col items-center gap-2"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-44 pb-28 overflow-hidden bg-slate-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0F3D3E 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-100/30 blur-[120px] -z-10 rounded-full translate-x-1/3 -translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-white premium-shadow px-5 py-2.5 rounded-full mb-10 border border-slate-100"
            >
              <div className="flex -space-x-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-[11px] font-black text-slate-900 uppercase tracking-[0.15em]">4.9 Rating | 150+ Happy Patients</span>
            </motion.div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] text-slate-900 mb-10 tracking-tight">
              Gentle, Modern <br />
              <span className="text-brand-500">Dental Care</span> <br />
              You Can Trust
            </h1>
            
            <p className="text-xl text-slate-500 mb-14 max-w-lg leading-relaxed font-medium">
              Experience world-class dental excellence in Indore. We combine clinical precision with a luxury patient experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="https://wa.me/918602655259"
                className="inline-flex items-center justify-center gap-3 bg-brand-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-600 transition-all shadow-2xl shadow-brand-500/30 active:scale-95"
              >
                Book Appointment
                <ArrowRight size={20} />
              </a>
              <a 
                href="tel:+918602655259"
                className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:border-brand-500 border-2 border-transparent transition-all premium-shadow active:scale-95"
              >
                <Phone size={20} className="text-brand-500" />
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:block hidden"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[80px] overflow-hidden premium-shadow border-[16px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Premium Dental Clinic" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 bg-white p-7 rounded-[40px] premium-shadow border border-slate-50 z-20"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-500">
                  <Award size={28} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-wider">Top Rated</p>
                  <p className="text-xs text-slate-400 font-bold">Award Winning Care</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-12 -left-12 bg-white p-7 rounded-[40px] premium-shadow border border-slate-50 z-20"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-500">
                  <Users size={28} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-wider">150+ Happy</p>
                  <p className="text-xs text-slate-400 font-bold">Trusted by Families</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const items = [
    { label: "4.9 Rating", icon: <Star size={20} className="fill-brand-500" /> },
    { label: "150+ Patients", icon: <Users size={20} /> },
    { label: "Painless Care", icon: <HeartPulse size={20} /> },
    { label: "Modern Tech", icon: <Zap size={20} /> },
  ];

  return (
    <div className="bg-white border-y border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-4 text-slate-900">
              <div className="text-brand-500 bg-brand-50 p-3 rounded-xl">{item.icon}</div>
              <span className="font-black uppercase tracking-[0.2em] text-[10px]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-28 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden premium-shadow transition-all duration-1000 group-hover:scale-[1.01] border-[12px] border-slate-50">
              <img 
                src="https://images.pexels.com/photos/5738735/pexels-photo-5738735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Dr. Rishika Jain" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 bg-brand-500 text-white p-12 rounded-[50px] premium-shadow max-w-[320px] transition-transform duration-500 group-hover:-translate-y-2">
              <p className="text-3xl font-bold mb-3">Dr. Rishika Jain</p>
              <p className="text-brand-100 text-xs font-black uppercase tracking-[0.25em]">BDS Dental Surgeon</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8 block">About the Clinic</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-slate-900 mb-10 leading-[1.1]">
              Painless Dentistry <br />
              <span className="text-slate-300">Redefined for You</span>
            </h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
              Dr. Rishika Jain is a patient-focused dentist dedicated to providing the highest quality dental care in Indore. Her philosophy centers on making every procedure as comfortable and stress-free as possible.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-10 mb-14">
              {[
                { title: "Painless Focus", desc: "Advanced numbing techniques" },
                { title: "Modern Tech", desc: "Digital diagnostics & imaging" },
                { title: "Luxury Comfort", desc: "Premium clinic environment" },
                { title: "Expert Care", desc: "Personalized treatment plans" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-7 h-7 bg-brand-100 rounded-full flex items-center justify-center text-brand-500 shrink-0 mt-1">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-sm uppercase tracking-wider mb-1">{item.title}</p>
                    <p className="text-sm text-slate-400 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="#contact"
              className="inline-flex items-center gap-3 text-brand-500 font-black uppercase tracking-widest text-xs group"
            >
              Learn more about our approach
              <div className="w-10 h-10 rounded-full border border-brand-100 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all">
                <ArrowRight size={16} />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Teeth Cleaning", icon: <Sparkles />, desc: "Professional scaling and polishing for a radiant, healthy smile." },
    { title: "Root Canal", icon: <HeartPulse />, desc: "Expert painless root canal therapy using advanced rotary systems." },
    { title: "Dental Fillings", icon: <ShieldCheck />, desc: "Aesthetic, tooth-colored restorations that blend seamlessly." },
    { title: "Cosmetic Care", icon: <Smile />, desc: "Smile makeovers, whitening, and veneers for your perfect look." },
    { title: "Preventive Care", icon: <Shield />, desc: "Comprehensive checkups to catch issues before they start." },
    { title: "General Dentistry", icon: <Stethoscope />, desc: "Complete oral health solutions for patients of all ages." },
  ];

  return (
    <section id="services" className="py-36 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-brand-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8 block">Our Expertise</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-slate-900 mb-8">World-Class Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            We provide a comprehensive range of dental treatments using international standards of hygiene and technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group p-12 rounded-[50px] bg-white border border-slate-100 premium-card-hover"
            >
              <div className="w-20 h-20 bg-brand-50 rounded-3xl flex items-center justify-center text-brand-500 mb-10 group-hover:bg-brand-500 group-hover:text-white transition-all duration-700 shadow-sm">
                {React.cloneElement(service.icon as React.ReactElement, { size: 36, strokeWidth: 1.5 })}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-5">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-10 font-medium">{service.desc}</p>
              <div className="flex items-center gap-3 text-brand-500 font-black uppercase tracking-widest text-[10px] group-hover:gap-5 transition-all">
                Explore Service <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "Painless Experience", icon: <HeartPulse />, desc: "Our advanced techniques ensure a virtually painless experience for every patient." },
    { title: "Modern Technology", icon: <Zap />, desc: "We use the latest digital diagnostics and treatment tools for precision and safety." },
    { title: "Personal Attention", icon: <Smile />, desc: "Dr. Rishika Jain personally oversees every treatment plan with dedicated care." },
    { title: "Transparent Pricing", icon: <ShieldCheck />, desc: "No hidden costs. We provide clear, honest advice and upfront treatment estimates." },
  ];

  return (
    <section className="py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div>
            <span className="text-brand-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8 block">Why Choose Us</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-slate-900 mb-14 leading-[1.1]">
              Setting the Standard <br />
              <span className="text-slate-300">for Dental Excellence</span>
            </h2>
            <div className="grid sm:grid-cols-1 gap-12">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-10 group"
                >
                  <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-500 shrink-0 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    {React.cloneElement(reason.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h4>
                    <p className="text-slate-500 leading-relaxed font-medium">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[80px] overflow-hidden premium-shadow border-[20px] border-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Modern Dental Clinic Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-14 -right-14 bg-white p-12 rounded-[50px] premium-shadow border border-slate-100 hidden sm:block">
              <p className="text-6xl font-bold text-brand-500 mb-3">100%</p>
              <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Sterilization Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Rahul Sharma", text: "Very kind and excellent doctor. Cleaning was thorough and painless. Highly recommended!", rating: 5 },
    { name: "Priya Verma", text: "Humble, efficient, and very satisfying treatment. The clinic is very clean and modern.", rating: 5 },
    { name: "Ankit Gupta", text: "Professional, caring, and explains everything clearly. Best dental experience in Indore.", rating: 5 },
  ];

  return (
    <section id="reviews" className="py-36 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-brand-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8 block">Testimonials</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-slate-900 mb-8">Patient Stories</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-black text-slate-900 uppercase tracking-widest text-xs">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[50px] border border-slate-100 premium-shadow relative"
            >
              <div className="flex gap-1.5 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 text-xl leading-relaxed mb-12 italic font-medium">"{review.text}"</p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-700 font-black text-xl">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">{review.name}</p>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Timings = () => {
  const isClinicOpen = useMemo(() => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const min = now.getMinutes();
    const time = hour + min / 60;

    if (day === 0) { // Sunday
      return time >= 10.5 && time <= 12.5;
    } else { // Mon-Sat
      return (time >= 10 && time <= 13) || (time >= 17 && time <= 20);
    }
  }, []);

  return (
    <section className="py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-500 rounded-[80px] p-16 md:p-28 text-white relative overflow-hidden shadow-2xl shadow-brand-500/20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] -z-0" />
          
          <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
            <div>
              <div className={cn(
                "inline-flex items-center gap-3 px-6 py-2.5 rounded-full mb-10 text-[10px] font-black uppercase tracking-[0.3em]",
                isClinicOpen ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"
              )}>
                <div className={cn("w-2.5 h-2.5 rounded-full", isClinicOpen ? "bg-green-400 animate-pulse" : "bg-red-400")} />
                {isClinicOpen ? "Open Today" : "Closed Now"}
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-14 leading-tight">Clinic Hours</h2>
              
              <div className="space-y-10">
                <div className="flex justify-between items-center border-b border-white/10 pb-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Clock size={28} className="text-brand-200" />
                    </div>
                    <span className="text-2xl font-bold">Mon – Sat</span>
                  </div>
                  <div className="text-right text-brand-100 font-bold">
                    <p className="text-lg">10:00 AM – 1:00 PM</p>
                    <p className="text-lg">5:00 PM – 8:00 PM</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center border-b border-white/10 pb-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Clock size={28} className="text-brand-200" />
                    </div>
                    <span className="text-2xl font-bold">Sunday</span>
                  </div>
                  <div className="text-right text-brand-200 font-black">
                    <p className="text-3xl">10:30 AM – 12:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-12 md:p-20 rounded-[60px] border border-white/10 backdrop-blur-xl">
              <h3 className="text-4xl font-bold mb-8">Book Your Visit</h3>
              <p className="text-brand-100 mb-12 text-xl leading-relaxed font-medium">
                Ready for a painless dental experience? Schedule your appointment today and join our family of happy patients.
              </p>
              <div className="flex flex-col gap-5">
                <a 
                  href="https://wa.me/918602655259"
                  className="flex items-center justify-center gap-4 bg-white text-brand-500 p-7 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-brand-50 transition-all active:scale-95 shadow-xl"
                >
                  <MessageCircle size={24} />
                  Chat on WhatsApp
                </a>
                <a 
                  href="tel:+918602655259"
                  className="flex items-center justify-center gap-4 bg-brand-600 text-white p-7 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-brand-700 transition-all active:scale-95 border border-white/10"
                >
                  <Phone size={24} />
                  Call +91 8602655259
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="contact" className="py-36 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-24">
          <div className="lg:col-span-1">
            <span className="text-brand-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8 block">Find Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-14">Visit Our Clinic</h2>
            
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-brand-500 shrink-0 premium-shadow border border-slate-100">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="font-black text-slate-900 text-sm uppercase tracking-wider mb-3">Clinic Address</p>
                  <p className="text-slate-500 leading-relaxed font-medium text-lg">
                    Vaishali Nagar, near Suryadev Nagar,<br />
                    Surya Dev Nagar, Indore,<br />
                    Madhya Pradesh 452009, India
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-brand-500 shrink-0 premium-shadow border border-slate-100">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="font-black text-slate-900 text-sm uppercase tracking-wider mb-3">Direct Contact</p>
                  <a href="tel:+918602655259" className="text-slate-500 hover:text-brand-500 transition-colors text-xl font-bold">
                    +91 8602655259
                  </a>
                </div>
              </div>

              <a 
                href="https://maps.app.goo.gl/YourGoogleMapsLink" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-brand-500 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-brand-600 transition-all shadow-2xl shadow-brand-500/30"
              >
                Get Directions
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-[60px] overflow-hidden premium-shadow border-[16px] border-white h-[550px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58900.13616353855!2d75.829473!3d22.6814186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc38a2b21089%3A0x4cdc22c6775cc2ce!2sPearl%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1775149742961!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-500 text-white pt-40 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-20 mb-32">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-500 shadow-xl">
                <Smile size={28} strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-3xl tracking-tighter">
                PEARL<span className="text-brand-200">DENTAL</span>
              </span>
            </div>
            <p className="text-brand-100 max-w-sm mb-12 text-xl leading-relaxed font-medium">
              Experience the future of dental care in Indore. We combine clinical excellence with a luxury patient experience.
            </p>
            <div className="flex gap-5">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer border border-white/5">
                  <Smile size={24} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-10 text-brand-200">Quick Links</h4>
            <ul className="space-y-6 text-brand-100 font-bold text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Dr. Rishika</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Patient Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-10 text-brand-200">Contact Us</h4>
            <ul className="space-y-8 text-brand-100 font-bold text-sm">
              <li className="flex gap-5">
                <MapPin size={20} className="shrink-0 text-brand-300" />
                <span>Vaishali Nagar, Indore, MP 452009</span>
              </li>
              <li className="flex gap-5">
                <Phone size={20} className="shrink-0 text-brand-300" />
                <span>+91 8602655259</span>
              </li>
              <li className="flex gap-5">
                <Clock size={20} className="shrink-0 text-brand-300" />
                <span>Open Mon – Sun</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-brand-300">
          <p>© 2026 Pearl Dental Clinic. All rights reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingCTA = () => {
  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-5 bg-white/95 backdrop-blur-2xl border-t border-slate-100 flex gap-4 shadow-[0_-15px_40px_rgba(0,0,0,0.08)]">
        <a 
          href="tel:+918602655259"
          className="flex-1 bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          <Phone size={18} />
          Call
        </a>
        <a 
          href="https://wa.me/918602655259"
          className="flex-1 bg-brand-500 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>

      {/* Desktop Floating WhatsApp */}
      <a 
        href="https://wa.me/918602655259"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-12 z-40 bg-[#25D366] text-white p-6 rounded-[32px] shadow-[0_20px_50px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all hidden md:flex items-center justify-center group"
      >
        <MessageCircle size={36} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-4 transition-all duration-700 font-black uppercase tracking-widest text-[10px] whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </>
  );
};

// --- Main App ---

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Timings />
        <Location />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
