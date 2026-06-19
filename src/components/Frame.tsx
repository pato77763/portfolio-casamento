import { ReactNode } from "react";
import { motion } from "motion/react";

interface FrameProps {
  children: ReactNode;
  className?: string;
  theme?: "light" | "dark";
}

export function Frame({ children, className = "", theme = "light" }: FrameProps) {
  const borderColor = theme === "light" ? "border-stone-100" : "border-stone-800";
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`border ${borderColor} p-8 md:p-16 relative flex flex-col justify-center ${className}`}
    >
      {/* Decorative extension lines to give that open bracket feel occasionally, or just keep it simple */}
      {children}
    </motion.div>
  );
}
