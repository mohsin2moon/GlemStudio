import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>


      <div
        className={`relative inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <motion.h1
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className={`${styles.heroHeadText} mt-5 text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Mahmud Mohsin</span>
          </motion.h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100`}>
            <motion.button whileHover={{ y: -15, color: '#76ffff', }}>I</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}>am</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}>an</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}>architect</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}>and
            </motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> interior</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> designer.</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> I</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> create</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> architectural
            </motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> interior</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}>
              exterior</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> and</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}>
              3D</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> product</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}>
              visuals</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> and</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}>
              I</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> run</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> this</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}>
              studio</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> where</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> you</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}>
              can</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> see</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> the</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}>
              power</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> of</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> my</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}>
              visualization</motion.button> <motion.button whileHover={{ y: -15, color: '#76ffff', }}> world.</motion.button>
          </p>

        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
