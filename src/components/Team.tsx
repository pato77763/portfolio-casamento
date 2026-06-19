import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Film, Image as ImageIcon, ChevronDown } from "lucide-react";

import imgFotoOuro from "../assets/images/regenerated_image_1779409013161.jpg";
import imgFotoPrata from "../assets/images/regenerated_image_1779409019383.jpg";
import imgFotoBronze from "../assets/images/regenerated_image_1781815752193.png";
import imgFilmOuro from "../assets/images/regenerated_image_1779409023262.jpg";
import imgFilmPrata from "../assets/images/regenerated_image_1779409024257.jpg";
import imgFilmBronze from "../assets/images/regenerated_image_1779409025278.jpg";
import imgComboOuro from "../assets/images/regenerated_image_1779409026841.jpg";
import imgComboPrata from "../assets/images/regenerated_image_1781815813780.png";
import imgComboBronze from "../assets/images/regenerated_image_1779409028383.jpg";

export function Team() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const packageSections = [
    {
      title: "Fotografia",
      icon: <Camera size={24} className="text-[#dbc096] mb-3" />,
      packages: [
        { 
          id: "foto-ouro", 
          name: "Pacote Ouro", 
          desc: [
            "FOTOGRAFIA",
            "",
            "PRÉ WEDDING (50 fotos editadas)",
            "MAKING OFF (dia da noiva)",
            "CERIMONIA + RECEPÇÃO",
            "",
            "IMAGENS AEREAS",
            "IMAGENS ALTA DEFINIÇÃO",
            "ENTREGA DE 400 FOTOS, PODENDO ESTENDER",
            "MATERIAL (pendrive) e via drive",
            "",
            "INVESTIMENTO",
            "R$ 3.500"
          ], 
          image: imgFotoOuro 
        },
        { 
          id: "foto-prata", 
          name: "Pacote Prata", 
          desc: [
            "FOTOGRAFIA",
            "",
            "MAKING OFF (dia da noiva)",
            "CERIMONIA + RECEPÇÃO",
            "",
            "IMAGENS ALTA DEFINIÇÃO",
            "ENTREGA DE 350 FOTOS ESCOLHIDAS",
            "Material entregue (pendrive)",
            "",
            "INVESTIMENTO",
            "R$ 2.500"
          ], 
          image: imgFotoPrata 
        },
        { 
          id: "foto-bronze", 
          name: "Pacote Bronze", 
          desc: [
            "FOTOGRAFIA",
            "",
            "CERIMONIA + RECEPÇÃO",
            "",
            "FOTOS DE TODA CERIMONIA",
            "FOTOS DA RECEPÇÃO",
            "IMAGENS ALTA DEFINIÇÃO",
            "ENTREGA DE 350 FOTOS EDITADAS",
            "",
            "INVESTIMENTO",
            "R$ 1.800"
          ], 
          image: imgFotoBronze 
        },
      ]
    },
    {
      title: "Filmagem",
      icon: <Film size={24} className="text-[#dbc096] mb-3" />,
      packages: [
        { 
          id: "film-ouro", 
          name: "Pacote Ouro", 
          desc: [
            "FILMAGEM",
            "",
            "PRÉ WEDDING CLIPE",
            "CLIPE TEASER MELHORES MOMENTOS (making off+cerimonia+festa 2min)",
            "FILMES MAIS DETALHADOS",
            "(clipe de até 20 min, com detalhes)",
            "",
            "3 CÂMERAS + DRONE + EDIÇÃO FULL HD ESTILO FILME",
            "",
            "INVESTIMENTO",
            "R$ 3.000"
          ], 
          image: imgFilmOuro 
        },
        { 
          id: "film-prata", 
          name: "Pacote Prata", 
          desc: [
            "FILMAGEM",
            "",
            "CLIPE TEASER 1'30min",
            "(Making-Off melhores momentos)",
            "FILME DETALHADO DO EVENTO",
            "(Filme de até 20min.)",
            "",
            "3 CÂMERAS - VÍDEO",
            "EDITADO, ESTILO FILME",
            "",
            "INVESTIMENTO",
            "R$ 2.500,00"
          ], 
          image: imgFilmPrata 
        },
        { 
          id: "film-bronze", 
          name: "Pacote Bronze", 
          desc: [
            "FILMAGEM",
            "",
            "FILME TEASER (clipe melhores momentos da cerimonia e festa - 1 min)",
            "CLIPE DETALHADO DO EVENTO (filme de até 15 min)",
            "2 CÂMERAS",
            "EDIÇÃO FULL HD",
            "",
            "INVESTIMENTO",
            "R$ 1.500"
          ], 
          image: imgFilmBronze 
        },
      ]
    },
    {
      title: "Combo (Filme + Foto)",
      icon: <ImageIcon size={24} className="text-[#dbc096] mb-3" />,
      packages: [
        { 
          id: "combo-ouro", 
          name: "Pacote Ouro", 
          desc: [
            "FILMAGEM E FOTOGRAFIA",
            "",
            "PRÉ WEDDING (clipe + 50 fotos editadas)",
            "MAKING OFF (Dia da Noiva)",
            "CERIMÔNIA + RECEPÇÃO",
            "",
            "IMAGENS ALTA DEFINIÇÃO",
            "ENTREGA DE 200 FOTOS ESCOLHIDAS",
            "CLIPE 1:30 + Detalhado de até 20min",
            "Imagens Aéreas + 3 câmeras",
            "",
            "INVESTIMENTO",
            "R$ 4.600"
          ], 
          image: imgComboOuro 
        },
        { 
          id: "combo-prata", 
          name: "Pacote Prata", 
          desc: [
            "FOTOGRAFIA E FILMAGEM",
            "",
            "MAKING OFF (Dia da Noiva)",
            "CERIMÔNIA + RECEPÇÃO",
            "",
            "IMAGENS ALTA DEFINIÇÃO",
            "ENTREGA DE 150 FOTOS ESCOLHIDAS",
            "CLIPE 1:30 + Detalhado de até 20min",
            "Imagens Aéreas + 2 câmeras",
            "",
            "INVESTIMENTO",
            "R$ 3.500"
          ], 
          image: imgComboPrata 
        },
        { 
          id: "combo-bronze", 
          name: "Pacote Bronze", 
          desc: [
            "FOTOGRAFIA E FILMAGEM",
            "",
            "CERIMÔNIA E RECEPÇÃO",
            "",
            "IMAGENS ALTA DEFINIÇÃO",
            "ENTREGA DE 150 FOTOS ESCOLHIDAS",
            "CLIPE 1:30 + Detalhado de até 10min",
            "2 câmeras",
            "",
            "INVESTIMENTO",
            "R$ 3.000"
          ], 
          image: imgComboBronze 
        },
      ]
    }
  ];

  return (
    <section className="bg-[#111] text-white py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center md:text-left"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tighter">
            Orçamentos
          </h2>
        </motion.div>

        <div className="space-y-20">
          {packageSections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <div className="flex items-center gap-3 mb-8 border-b border-stone-800 pb-4">
                {section.icon}
                <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-white">
                  {section.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {section.packages.map((pkg) => {
                  const isExpanded = expandedId === pkg.id;
                  
                  return (
                    <motion.div 
                      key={pkg.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex flex-col bg-[#1a1a1a] border border-stone-800 cursor-pointer hover:border-stone-600 transition-colors"
                      onClick={() => toggleExpand(pkg.id)}
                    >
                      {/* Card Image Wrapper */}
                      <div className="w-full h-40 overflow-hidden relative">
                        <img 
                          src={pkg.image} 
                          alt={pkg.name} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-80"
                        />
                      </div>
                      
                      <div className="p-5 relative">
                         <div className="flex justify-between items-center bg-[#1a1a1a]">
                            <h4 className="font-display font-bold text-lg uppercase tracking-tight text-[#dbc096]">
                              {pkg.name}
                            </h4>
                            <ChevronDown 
                              size={20} 
                              className={`text-stone-400 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
                            />
                         </div>
                         
                         <AnimatePresence>
                           {isExpanded && (
                             <motion.div
                               initial={{ height: 0, opacity: 0 }}
                               animate={{ height: "auto", opacity: 1 }}
                               exit={{ height: 0, opacity: 0 }}
                               transition={{ duration: 0.3 }}
                               className="overflow-hidden"
                             >
                               <div className="pt-4 font-sans text-sm text-stone-300 leading-relaxed font-medium space-y-2">
                                 {pkg.desc.map((line, i) => {
                                   if (!line) return <div key={i} className="h-2"></div>;
                                   const isPrice = line.startsWith('R$') || line === 'INVESTIMENTO';
                                   return (
                                     <p key={i} className={isPrice ? 'text-[#dbc096] font-bold text-base' : ''}>
                                       {line}
                                     </p>
                                   );
                                 })}
                               </div>
                             </motion.div>
                           )}
                         </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
