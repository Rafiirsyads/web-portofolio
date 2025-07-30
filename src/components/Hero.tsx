"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Rafi</h1>
        <p className="mt-4 text-lg text-gray-400">A passionate software developer & project enthusiast</p>
      </motion.div>
      <div className="absolute top-[-100px] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-vibrant.pink opacity-30 blur-3xl z-0" />
    </section>
  );
}
