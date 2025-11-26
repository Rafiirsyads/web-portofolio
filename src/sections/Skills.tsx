"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoLoop from '@/components/LogoLoop';
import { 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiNestjs, 
  SiFlask, 
  SiReact, 
  SiScikitlearn, 
  SiNumpy, 
  SiDocker, 
  SiGit, 
  SiHuggingface, 
  SiPostgresql,
  SiPlotly,
  SiTableau,
  SiSpringboot,
  SiGo
} from "react-icons/si";
import PixelBlast from "@/components/PixelBlast";

export default function Skills() {
  const skills = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Next.js", icon: SiReact, color: "#ffffffff" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "Flask", icon: SiFlask, color: "#ffffffff" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "NumPy", icon: SiNumpy, color: "#013243" },
    { name: "Matplotlib", icon: SiPlotly, color: "#3F4F75" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Tableau", icon: SiTableau, color: "#E97627" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Golang", icon: SiGo, color: "#00ADD8" },
  ];

  const techLogos = skills.map(skill => ({
    node: <skill.icon style={{ color: skill.color, fontSize: '100px' }} />,
    title: skill.name,
    href: "#"
  }));

  const textLogos = skills.map(skill => ({
    node: (
      <div className="px-6 py-3 backdrop-blur-md bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-full">
        <span className="font-semibold text-base text-white/90 whitespace-nowrap">
          {skill.name}
        </span>
      </div>
    ),
    title: skill.name,
    href: "#"
  }));

  return (
    <section className="py-24 px-4 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#B19EEF"
            patternScale={4}
            patternDensity={1.0}
            pixelSizeJitter={1.0}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            speed={0.6}
            edgeFade={0.25}
            transparent
          />
</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* First Carousel - Icon-based LogoLoop */}
        <div className="mb-16">
          <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="right"
              logoHeight={100}
              gap={60}
              hoverSpeed={20}
              scaleOnHover
              fadeOutColor="#000000"
              ariaLabel="Technology stack"
            />
          </div>
        </div>

        {/* Second Carousel - Text-based LogoLoop */}
        <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={textLogos}
            speed={80}
            direction="left"
            logoHeight={24}
            gap={16}
            hoverSpeed={20}
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technology names"
          />
        </div>
      </div>
    </section>
  );
}