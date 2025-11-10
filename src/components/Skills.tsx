"use client";
import { motion } from "framer-motion";
import Image from "next/image";
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

  return (
    <section className="py-24 px-4 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/line.png"
            alt="Technology Background"
            fill
            className="object-cover opacity-20 blur-sm"
            priority={false}
            quality={75}
          />
        </div>
        <div className="absolute inset-0 bg-waves-blur bg-gradient-to-b from-transparent to-background/70" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* First Carousel - Moving Right (Icons Only) */}
        <div className="relative mb-12 overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -128 * skills.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{
              width: `${128 * skills.length * 2}px`
            }}
          >
            {/* Double the array for seamless loop */}
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex items-center justify-center p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl min-w-[100px] h-[100px] group hover:bg-white/10 transition-all duration-300 flex-shrink-0"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <skill.icon 
                  className="text-5xl group-hover:scale-110 transition-transform duration-300"
                  style={{ color: skill.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Carousel - Moving Left (Names Only) */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-6"
            animate={{
              x: [-158 * skills.length, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
            style={{
              width: `${158 * skills.length * 2}px`
            }}
          >
            {/* Double the array for seamless loop */}
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={`second-${index}`}
                className="px-8 py-4 backdrop-blur-md bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-full min-w-max group hover:from-white/10 hover:to-white/15 transition-all duration-300 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-semibold text-lg text-white/90 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}