import { Frame } from "./Frame";
import { motion } from "motion/react";
import { Image as ImageIcon } from "lucide-react";
import { Fragment, FC } from "react";
import { BannerImage } from "./BannerImage";
import proj1Image from "../assets/images/regenerated_image_1779404171799.jpg";
import proj2Image from "../assets/images/regenerated_image_1779404175193.jpg";
import proj3Image from "../assets/images/regenerated_image_1781817085176.png";

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  colored?: boolean;
  reverse?: boolean;
}

const ProjectBlock: FC<ProjectProps> = ({ title, category, description, image, colored, reverse = false }) => {
  return (
    <div className={`min-h-[65vh] flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* Image Side */}
      <div className="w-full md:w-1/2 bg-[#e5e5e5] relative flex items-center justify-center p-8 h-[526px] md:h-auto md:min-h-full overflow-hidden">
         {image ? (
            <img 
              src={image} 
              alt={title} 
              className={`absolute inset-0 w-full h-full object-cover will-change-transform ${colored ? '' : 'grayscale'}`}
            />
         ) : (
           <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-stone-400 relative z-10"
           >
             <ImageIcon size={64} strokeWidth={1} />
           </motion.div>
         )}
      </div>

      {/* Info Side */}
      <div className="w-full md:w-1/2 bg-[#111] text-white flex items-center p-8 md:p-16 relative overflow-hidden">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="w-full"
        >
          <Frame theme="light" className="p-6 md:p-12 lg:p-16">
            <h3 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tighter mb-4">
              {title}
            </h3>
            <div className="h-px bg-stone-700 w-12 mb-6" />
            {category && (
              <p className="text-stone-400 text-xs uppercase tracking-widest mb-4">
                Categoria: {category}
              </p>
            )}
            <p className="font-sans text-base text-[#dbc096] font-bold leading-relaxed max-w-lg">
              {description}
            </p>
          </Frame>
        </motion.div>
      </div>
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "Trajetória",
      category: "",
      description: "Ao longo da minha trajetória, consolidei minha carreira atuando com fotografia e filmagem no segmento político e empresarial, desenvolvendo um olhar apurado para captar imagem, posicionamento, autenticidade e os detalhes que comunicam credibilidade e impacto. Com essa experiência, ampliei minha atuação e me tornei especialista em casamentos, unindo técnica, sensibilidade e uma abordagem cinematográfica para contar histórias reais com emoção, elegância e profundidade.",
      image: proj1Image,
      colored: true,
    },
    {
      title: "Ensaio Pré-Wedding",
      category: "Sessão Externa",
      description: "Um registro leve e autêntico da conexão dos noivos antes do grande dia, em locações que fazem parte da história do casal.",
      image: proj2Image,
    },
    {
      title: "Cerimônia e Festa",
      category: "Casamento",
      description: "Cobertura completa dos momentos mais intensos: do nervosismo do making of, a emoção do sim no altar, até a alegria contagiante da pista de dança.",
      image: proj3Image,
      colored: true,
    }
  ];

  return (
    <section>
      {projects.map((proj, index) => (
        <Fragment key={index}>
          {index === 1 && <BannerImage />}
          <ProjectBlock 
            title={proj.title} 
            category={proj.category} 
            description={proj.description} 
            image={proj.image}
            colored={proj.colored}
            reverse={index % 2 !== 0} 
          />
        </Fragment>
      ))}
    </section>
  );
}
