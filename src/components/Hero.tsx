import { Frame } from "./Frame";
import { motion } from "motion/react";

// Substitua esta URL pelo caminho da sua imagem (ex: import heroImg from '../assets/images/sua-imagem.jpg')
// Ou adicione a imagem na pasta /public com o nome hero_anexo.jpg
const HERO_IMAGE = "/hero_anexoIMG8274.JPEG"; // Caminho atualizado para a nova imagem enviada

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#111] text-white flex flex-col justify-end pb-4 pt-12 px-4 lg:px-8 overflow-hidden">
      
      {/* Background Image (Homem no canto direito) */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full md:w-[337px] h-full">
          <img 
            src={HERO_IMAGE}  
            alt="Allan Dias no set" 
            onError={(e) => {
               // Fallback temporário caso a imagem ainda não exista no public/
               e.currentTarget.src = "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000";
            }}
            className="w-full h-full object-cover object-right grayscale opacity-90"
          />
          {/* Gradiente focado na borda da imagem para criar a transição suave */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/40 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-xl mt-auto pb-2 flex flex-col gap-8">
        
        {/* Main Title Area (Agora o quadrado e o texto ficam juntos na parte inferior esquerda) */}
        <Frame theme="dark" className="w-fit py-5 px-5 md:py-8 md:px-8 bg-black/20 backdrop-blur-md rounded border-white/10 shadow-xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase mb-1 text-white"
          >
            ALLAN DIAS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold text-[#b59b73]"
          >
            Filmagem e Fotografia
          </motion.p>
        </Frame>

        {/* Bottom info (Junto ao quadrado) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="uppercase tracking-widest pl-2"
        >
          <p className="font-display text-white font-bold text-lg md:text-xl">ORÇAMENTOS</p>
          <p className="text-[#b59b73] text-[10px] md:text-xs mt-1 tracking-[0.2em] uppercase font-bold">WEDDING</p>
        </motion.div>
        
      </div>
    </section>
  );
}
