'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant, fadeIn, textVariants, letterVariants, useAnimation } from '../utils/motion';

const text = "Quiero actualizar mi web site.";
/*const controls = useAnimation();

  useEffect(() => {
    const animateText = async () => {
      // Esperar medio segundo antes de iniciar la animación
      await controls.start({ opacity: 1 });
      controls.start('visible');
    };
  
    animateText();
  }, [controls]);
*/

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 py-10 text-center">
        <motion.h1 variants={textVariant(1.1)}  textStyles="text-center"className={styles.heroHeading2}>
          Desarollo de Software
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading2}>impulsado por IA</h1>
          {/* <div className={styles.heroDText} />*/}
        </motion.div>
        

        <motion.div
          variants={textVariants(1.2,1)}
          initial="hidden"
          /* animate={controls} />*/
          className="text-secondary-white py-2"
        >
          {text.split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[10px] z-[0] -top-[30px]" />

        <img
          src="/leva_hero.jpg"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[10px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
