import { motion } from "motion/react";
import { Frame } from "./Frame";

export function Contact() {
  return (
    <section className="min-h-[70vh] bg-[#111] text-white flex flex-col md:flex-row items-center border-t border-stone-800">
      
      {/* Left Title */}
      <div className="w-full md:w-1/2 p-8 md:p-24">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <Frame theme="light" className="pl-8 pb-8 pt-8 pr-12 inline-block">
             <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tighter leading-none">
               Entre em<br />Contato
             </h2>
          </Frame>
        </motion.div>
      </div>

      {/* Right Details */}
      <div className="w-full md:w-1/2 p-8 md:p-24 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 text-sm text-[#dbc096] font-sans tracking-wide">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className="text-white font-display font-bold text-lg uppercase tracking-tight mb-4">Telefone</h4>
          <p>(82) 98210-3969</p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h4 className="text-white font-display font-bold text-lg uppercase tracking-tight mb-4">Instagram</h4>
          <p>@allandiasfilmes</p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="sm:col-span-2"
        >
          <h4 className="text-white font-display font-bold text-lg uppercase tracking-tight mb-4">Endereço</h4>
          <p>Rio Largo - AL</p>
        </motion.div>
      </div>

    </section>
  );
}
