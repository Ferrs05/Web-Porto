import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, BookOpen, Terminal as TerminalIcon, Code2, Shield, Coffee } from "lucide-react";

// Tech stack 
const techStack = [
  "Python", "Algorithms", "React", "Next.js", "TypeScript", 
  "Kali Linux", "Burp Suite", "Node.js", "Tailwind CSS", "Git"
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BentoGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Update isi terminal
  const lines = [
    "$ whoami",
    "> Muhammad Ferry Saputra",
    "$ interests.txt",
    "> Competitive Games, Cat, Nature, Night Time",
    "> Coffee, Food, Working Out",
    "$ Os",
    "> Windows 11 / Kali Linux",
  ];
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    if (!inView) return;
    setDisplayedLines([]);
    let i = 0;
    const interval = setInterval(() => {
      if (i >= lines.length) { clearInterval(interval); return; }
      const line = lines[i];
      i++;
      setDisplayedLines((prev) => [...prev, line]);
    }, 400);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section id="about" className="py-24 px-6 relative" ref={ref}>
       {/* Background accent opsional untuk section ini */}
       <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-[120px] -z-10" />

      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-12 max-w-lg mx-auto"
        >
          Mahasiswa semester 6 yang fokus pada pengembangan antarmuka modern dan keamanan aplikasi web.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Terminal - spans 7 cols */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="md:col-span-7 rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4 border-b border-border/50 pb-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(45 80% 50% / 0.7)" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(140 60% 45% / 0.7)" }} />
              </div>
              <span className="text-xs text-muted-foreground ml-2 flex items-center gap-1 font-mono">
                <TerminalIcon size={12} /> Terminal
              </span>
            </div>
            <div className="font-mono text-sm space-y-1.5 min-h-[160px]">
              {displayedLines.map((line, i) => (
                <div key={i} className={line.startsWith("$") ? "text-blue-400" : "text-muted-foreground"}>
                  {line}
                </div>
              ))}
              <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
            </div>
          </motion.div>

          {/* Right column - 5 cols */}
          <div className="md:col-span-5 grid grid-cols-1 gap-4">
            {/* Location */}
            <motion.div
              variants={item}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-border bg-card p-6 flex items-center gap-4 hover:bg-accent/5 transition-colors"
            >
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Indonesia, Bali 🇮🇩</p>
                <p className="text-xs text-muted-foreground">Udayana University</p>
              </div>
            </motion.div>

            {/* Currently Learning */}
            <motion.div
              variants={item}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-border bg-card p-6 flex items-center gap-4 hover:bg-accent/5 transition-colors"
            >
              <div className="p-3 rounded-lg bg-accent/10">
                <Shield size={22} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold">Curently Learning</p>
                <p className="text-xs text-muted-foreground">Back End, Web App Security, Penetration Testing</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom row */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.25 }}
            className="md:col-span-4 rounded-xl border border-border bg-card p-6 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-secondary">
              <Coffee size={22} className="text-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold">Lifestyle</p>
              <p className="text-xs text-muted-foreground">Coffee, Food, Workout</p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 rounded-xl border border-border bg-card p-6 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-secondary">
              <Code2 size={22} className="text-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold">Role</p>
              <p className="text-xs text-muted-foreground">Frontend Developer</p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.35 }}
            className="md:col-span-4 rounded-xl border border-border bg-card p-6 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-secondary">
              <BookOpen size={22} className="text-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold">Education</p>
              <p className="text-xs text-muted-foreground">6th Semester Student</p>
            </div>
          </motion.div>

          {/* Tech Stack Marquee (INFINITE LOOP FIX) */}
          <motion.div
            variants={item}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: 0.4 }}
            className="md:col-span-12 rounded-xl border border-border bg-card p-6 overflow-hidden"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Tech Stack</p>
            
            <div className="relative overflow-hidden w-full mask-linear-fade">
              {/* Tambahkan mask di CSS index.css jika ingin fade di kiri kanan, atau biarkan default */}
              <div className="animate-marquee flex gap-4 w-max">
                {/* Duplikasi konten 2x untuk loop mulus */}
                {[...techStack, ...techStack].map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-4 py-2 rounded-md border border-border bg-secondary/50 text-sm text-foreground font-medium shrink-0"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;