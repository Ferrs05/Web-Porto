import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { 
    icon: Github, 
    label: "GitHub", 
    href: "https://github.com/Ferrs05" 
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/muhammad-ferry-saputra-a01423297" 
  },
  { 
    icon: Mail, 
    label: "Email", 
    href: "mailto:muhferry.saputra@gmail.com" 
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi pengiriman pesan
    toast({
      title: "Pesan terkirim!",
      description: "Terima kasih telah menghubungi. Saya akan membalas secepatnya.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 text-center"
        >
          Get in Touch
        </motion.h2>
        <p className="text-center text-muted-foreground mb-10">
          Tertarik berkolaborasi dalam proyek AI, Web Dev, atau Cybersecurity?
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="name">Nama</Label>
            <Input
              id="name"
              placeholder="Nama Anda"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="anda@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Pesan</Label>
            <Textarea
              id="message"
              placeholder="Ceritakan tentang proyek atau tawaran Anda..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>
          <Button type="submit" className="w-full" size="lg">
            <Send size={16} />
            Kirim Pesan
          </Button>
        </motion.form>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {socials.map((s) => (
            <Tooltip key={s.label}>
              <TooltipTrigger asChild>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors"
                >
                  <s.icon size={20} className="text-muted-foreground" />
                </a>
              </TooltipTrigger>
              <TooltipContent>{s.label}</TooltipContent>
            </Tooltip>
          ))}
        </div>

        {/* FOOTER & ATTRIBUTION (SC) */}
        <div className="mt-20 border-t border-border pt-8 text-center flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Muhammad Ferry Saputra. All rights reserved.
          </p>
          
          <p className="text-xs text-muted-foreground/50">
            <a 
              href="https://www.flaticon.com/free-icons/terminal" 
              title="terminal icons"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors underline decoration-dotted"
            >
              Terminal icons created by Arkinasi - Flaticon
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;