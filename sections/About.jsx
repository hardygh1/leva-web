'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Leva IA" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Leva IA </span> 
         se destaca en el <span className="font-extrabold text-white">desarrollo de software</span>, enfocándose en la <span className="font-extrabold text-white">innovación</span> y la excelencia técnica. Ofrecemos soluciones personalizadas para impulsar el éxito empresarial, desde el diseño de software a medida hasta la implementación de tecnologías avanzadas como la <span className="font-extrabold text-white">IA</span> y los <span className="font-extrabold text-white">Chatbots</span>. Guiados por la transparencia, integridad y colaboración, creamos relaciones de confianza que fomentan el crecimiento empresarial y la innovación.


      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
