import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, ShieldCheck, Cpu, Code2 } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg"; // Pastikan path foto benar

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* --- BACKGROUND LAYER: TECHNICAL & ALIVE --- */}
      
      {/* 1. Grid Pattern (Statis tapi memberi tekstur) */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px]" />
      
      {/* 2. Radial Mask (Supaya gridnya memudar di pinggir, fokus ke tengah) */}
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* 3. Living Glows (Dua warna: Biru/Cyber & Ungu/AI) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Orb 1: Cyan/Security */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow" />
        {/* Orb 2: Purple/AI */}
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-6 max-w-6xl mx-auto"
      >
        
        {/* LEFT SIDE: PHOTO & STATUS */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative group"
          >
            {/* Tech Ring Animation */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm group-hover:blur-md transition-all duration-500" />
            <div className="absolute -inset-0.5 rounded-full border border-white/10" />
            
            <img
              src={profilePhoto}
              alt="Muhammad Ferry Saputra"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-background shadow-2xl"
            />
            
            {/* Floating Badges (Interest Indicators) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
              className="absolute top-4 -right-4 bg-background/80 backdrop-blur-md border border-white/10 p-2 rounded-full shadow-lg"
              title="Red Team / Security"
            >
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}
              className="absolute bottom-4 -left-4 bg-background/80 backdrop-blur-md border border-white/10 p-2 rounded-full shadow-lg"
              title="AI / Machine Learning"
            >
              <Cpu className="w-5 h-5 text-purple-400" />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: TEXT CONTENT */}
        <div className="text-center md:text-left flex-1">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-medium text-blue-300 tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Open to Work
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6 text-foreground">
            Designing Interfaces, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white">
              Securing the Core.
            </span>
          </h1>

          {/* Subheadline - Penekanan Frontend tapi mention interest lain */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Seorang <span className="text-foreground font-semibold">Frontend Developer</span> yang detail-oriented, 
            dengan ketertarikan mendalam pada <span className="text-blue-400/80">Cybersecurity (Red Team)</span> dan <span className="text-purple-400/80">Artificial Intelligence</span>.
            Saya membangun pengalaman web yang indah, fungsional, dan aman.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Button size="lg" className="bg-foreground text-background hover:bg-white/90" asChild>
              <a href="#projects">
                <Code2 className="mr-2 h-4 w-4" />
                Lihat Portfolio
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Hubungi Saya
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;