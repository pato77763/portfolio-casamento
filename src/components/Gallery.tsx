import { motion } from "motion/react";
import { Frame } from "./Frame";
import { Camera } from "lucide-react";
import img1 from "../assets/images/regenerated_image_1779410457242.png";
import img2 from "../assets/images/regenerated_image_1779410470503.jpg";
import img3 from "../assets/images/regenerated_image_1779410466325.jpg";
import img4 from "../assets/images/regenerated_image_1779410472368.jpg";
import img5 from "../assets/images/regenerated_image_1779410475023.jpg";
import img6 from "../assets/images/regenerated_image_1779410468293.jpg";
import img7 from "../assets/images/regenerated_image_1779410473621.jpg";
import img8 from "../assets/images/regenerated_image_1779410476523.jpg";
import img9 from "../assets/images/regenerated_image_1781817083197.png";
import img10 from "../assets/images/regenerated_image_1779410479325.jpg";
import img11 from "../assets/images/regenerated_image_1781817973709.png";
import img12 from "../assets/images/regenerated_image_1781817974768.png";
import img13 from "../assets/images/regenerated_image_1781817975983.png";
import img14 from "../assets/images/regenerated_image_1781817982161.png";
import img15 from "../assets/images/regenerated_image_1781817980404.png";
import img16 from "../assets/images/regenerated_image_1781817978291.png";

export function Gallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16
  ];

  return (
    <section id="filmes-momentos" className="bg-[#111] py-16 px-6 lg:py-24 lg:px-24 border-t border-stone-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Title Area */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full text-center mb-16"
        >
          <Frame theme="light" className="inline-block py-6 px-12 bg-black/40 backdrop-blur-sm">
             <span className="text-xs uppercase tracking-[0.25em] text-[#b59b73] font-bold block mb-2">Histórias em Imagens</span>
             <h2 className="font-display font-bold text-3.5xl md:text-5xl uppercase tracking-tighter text-white">
               Galeria de Momentos
             </h2>
             <div className="h-px bg-stone-700 w-12 mt-4 mx-auto" />
          </Frame>
        </motion.div>

        {/* Photo Gallery Column Masonry */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 w-full">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="break-inside-avoid relative overflow-hidden rounded-lg group cursor-pointer border border-stone-900/40"
            >
              <img
                src={img}
                alt={`Galeria de Momentos Allan Dias ${index + 1}`}
                className="w-full h-auto rounded-lg object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle elegant hover overlay */}
              <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
