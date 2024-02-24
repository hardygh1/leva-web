'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav variants={navVariants} initial="hidden" whileInView="show" className={`${styles.zPaddings} py-8 relative mx-auto mr-4`}>
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        LEVA
      </h2>

      {/* <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" /> */}

      <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
        <img
          src="/headset.svg"
          alt="headset"
          className="w-[24px] h-[24px] object-contain"
        />
        <span className="font-normal text-[16px] text-white md:empty:">
          Contactanos
        </span>
      </button>
    </div>
  </motion.nav>

);

export default Navbar;
