"use client";
import { motion } from "framer-motion";

export default function About() {
  const interests = [
    {
      title: "IT Consulting",
      description: "Helping businesses leverage technology to achieve their strategic goals through tailored solutions and digital transformation strategies.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data & Machine Learning",
      description: "Transforming raw data into actionable insights and building intelligent systems that can learn, predict, and automate decision-making processes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Project Management",
      description: "Leading cross-functional teams to deliver innovative products from concept to launch, ensuring alignment between user needs and business objectives.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto"
        >
          I'm a final-year Information Systems student at Universitas Indonesia with a strong foundation in data and project management. As I continue to grow, I've also developed a deep interest in IT consulting allowing me to explore how technology can align with business goals. These combined interests reflect my passion for building practical solutions that solve real-world problems and enhance user experiences.
        </motion.p>
      </div>

      {/* Interest Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="group relative"
          >
            {/* Card Background */}
            <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
              
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${interest.gradient} rounded-t-2xl`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${interest.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {interest.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-200 transition-all duration-300">
                {interest.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {interest.description}
              </p>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${interest.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-gray-400 text-lg mb-8">
          Interested in collaborating or learning more about my work?
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-white shadow-lg hover:shadow-xl"
        >
          Let's Connect
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}