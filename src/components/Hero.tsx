"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import PDFViewer from "./PDFViewer";


export default function Hero() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showPDF, setShowPDF] = useState(false);

  const jobTitles = [
    "IT Consultant",
    "Data Analyst", 
    "Data Science",
    "AI/ML Engineer",
    "Project Management"
  ];

  // Typewriter effect
  useEffect(() => {
    const currentJob = jobTitles[currentJobIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentJob.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentJobIndex((prev) => (prev + 1) % jobTitles.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentJob.substring(0, displayText.length + 1));
        if (displayText === currentJob) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentJobIndex, jobTitles]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 md:px-8 lg:px-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
              <Image
              src="/images/abstract-waves.png"
              alt="Abstract Waves Background"
              fill
              className="object-cover bg-waves-subtle opacity-50"
              priority
              />
          </div>
  
      <div className="absolute inset-0 bg-waves-blur bg-gradient-to-b from-transparent to-background/70" /></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hello, <span className="text-blue-400">I'm</span>
                <br />
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Rafi Irsyad Saharso</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
                Currently Exploring and Interested in
              </h2>
              <div className="text-2xl md:text-3xl font-semibold text-vibrant-pink min-h-[1.5em]">
                {displayText}
                <span className="animate-pulse">|</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex gap-4"
            >
            {/* Preview Resume Button */}
            <button
                onClick={() => setShowPDF(true)}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
                View Resume
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="z-10 flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20">
                <Image
                  src="/images/profile-photo.jpg"
                  alt="Rafi Irsyad"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
      {/* PDF Viewer Modal */}
      <PDFViewer
        isOpen={showPDF}
        onClose={() => setShowPDF(false)}
        pdfUrl="/document/CV - Rafi Irsyad Saharso.pdf"
      />
    </section>
  );
}