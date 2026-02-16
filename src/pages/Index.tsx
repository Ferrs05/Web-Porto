import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Projects />
        <Contact />
      </main>
      {/* BAGIAN FOOTER DI SINI SUDAH SAYA HAPUS AGAR TIDAK DOUBLE */}
    </div>
  );
};

export default Index;