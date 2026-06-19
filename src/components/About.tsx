import { Frame } from "./Frame";
import { motion } from "motion/react";
import aboutImage from "../assets/images/regenerated_image_1779400297683.jpg";

export function About() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-[#f7f7f7]">
      {/* Left side full image */}
      <div className="w-full h-[50vh] md:h-auto md:w-1/2 relative bg-stone-200">
        <img 
          src={aboutImage} 
          alt="Allan Dias - Fotógrafo e Filmmaker" 
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
      </div>

      {/* Right side dark content */}
      <div className="w-full md:w-1/2 bg-[#111] text-white flex items-center p-8 md:p-24 relative">
         <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
         >
            <Frame theme="light" className="pl-8 md:pl-16 pr-8 border-r-0">
              <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tighter mb-8 leading-tight">
                Biografia
              </h2>
              <div className="space-y-6 font-sans text-base text-[#dbc096] font-bold leading-relaxed max-w-md">
                <p>
                  Sou Allan Dias, fotógrafo e filmmaker, natural de Maceió – AL. Há mais de uma década, dedico minha vida a transformar momentos em memórias que atravessam o tempo.
                </p>
              </div>
            </Frame>
         </motion.div>
      </div>
    </section>
  );
}
