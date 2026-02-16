import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";

// 1. Update Interface untuk menambahkan properti 'image'
interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string; // Path ke gambar (opsional)
}

// 2. Update Data Projects dengan gambar
// Ganti string 'image' di bawah dengan path gambar aslimu nanti.
// Contoh: image: "/projects/animal-ann.png" (jika file ada di folder public/projects)
const projects: Project[] = [
  {
    title: "Animal Classification ANN (Cat, Dog, Panda)",
    description: "Model Deep Learning menggunakan Artificial Neural Network (ANN) untuk mengklasifikasikan jenis hewan dengan akurasi tinggi.",
    tags: ["Python", "Deep Learning", "TensorFlow", "ANN"],
    github: "https://github.com/Ferrs05/Animal-Classification-Using-ANN.git",
    image: "data:image/jpeg;base64,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", // Placeholder
  },
  {
    title: "Tomato Condition CNN",
    description: "Sistem deteksi penyakit pada tanaman tomat menggunakan Convolutional Neural Network (CNN) untuk analisis citra digital.",
    tags: ["Python", "Computer Vision", "CNN", "Image Processing"],
    github: "https://github.com/Ferrs05/Klasifikasi-kondisi-tomat.git",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1000&auto=format&fit=crop", // Placeholder
  },
  {
    title: "Native Virtual Gift",
    description: "Platform website untuk pengiriman hadiah virtual yang dibangun secara native, fokus pada efisiensi dan struktur dasar web.",
    tags: ["Web Development", "Native JS", "PHP", "Frontend"],
    github: "https://github.com/Ferrs05/website-native-virtual-gift.git",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXAgE1XmnpAvkcIK_7HkdSXeRXWU5JYIw3g&s" ,
  },
  {
    title: "Bird Song RNN",
    description: "Klasifikasi kicauan burung menggunakan Recurrent Neural Network (RNN) untuk memproses data audio sekuensial.",
    tags: ["Python", "Audio Processing", "RNN", "AI"],
    github: "https://github.com/Ferrs05/Bird-song-classification.git",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=1000&auto=format&fit=crop", // Placeholder
  },
  {
    title: "Bird Song Random Forest",
    description: "Pendekatan Machine Learning konvensional menggunakan algoritma Random Forest sebagai baseline untuk klasifikasi audio.",
    tags: ["Machine Learning", "Scikit-Learn", "Random Forest"],
    github: "https://github.com/Ferrs05/bird-song-classification-denan-baseline-ml-random-forest.git",
    image: "data:image/jpeg;base64,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", // Placeholder
  },
  {
    title: "AnalisAcademy Pentest",
    description: "Security assessment dan penetration testing pada platform edukasi untuk mengidentifikasi celah keamanan (Vulnerability Assessment).",
    tags: ["Cybersecurity", "Pentest", "Web Security", "Reporting"],
    live: "https://analisacademy.com",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop", // Placeholder
  },
];

const ITEMS_PER_PAGE = 3;

const Projects = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const currentProjects = projects.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 text-center"
        >
          Selected Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-12"
        >
          Eksplorasi dalam Artificial Intelligence, Web Development, dan Keamanan Siber.
        </motion.p>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentProjects.map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="rounded-xl border border-border bg-card overflow-hidden group flex flex-col h-full"
                >
                  {/* 3. Bagian Image / Thumbnail */}
                  <div className="h-48 bg-secondary/30 relative overflow-hidden border-b border-border">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      // Fallback jika tidak ada image (Tampilan lama)
                      <div className="w-full h-full flex items-center justify-center relative">
                         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:16px_16px]" />
                         <div className="text-muted-foreground/20 flex flex-col items-center gap-2">
                            <ImageOff size={40} />
                            <span className="text-4xl font-bold select-none">
                              {project.title.substring(0, 2)}
                            </span>
                         </div>
                      </div>
                    )}
                    
                    {/* Overlay gradient agar text putih di atas gambar terbaca (opsional) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-5 flex flex-col gap-3 flex-grow">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
                      {project.github && (
                        <Button variant="ghost" size="sm" asChild className="h-8 px-2">
                          <a href={project.github} target="_blank" rel="noreferrer"><Github size={14} className="mr-1.5" /> Source</a>
                        </Button>
                      )}
                      {project.live && (
                        <Button variant="ghost" size="sm" asChild className="h-8 px-2">
                          <a href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={14} className="mr-1.5" /> Live</a>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-10">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                disabled={page === 0}
                className="rounded-full"
              >
                <ChevronLeft size={18} />
              </Button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === page ? "bg-primary w-6" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                disabled={page === totalPages - 1}
                className="rounded-full"
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;