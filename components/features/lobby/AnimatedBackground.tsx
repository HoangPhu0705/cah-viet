"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start p-4 *:relative"
      style={{ backgroundImage: "url('/images/bg_lobby.jpg')" }}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
