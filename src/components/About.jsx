import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, source_to_go_to, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        onClick={() => window.open(source_to_go_to, "_blank")}
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='Architectural-visualization'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Welcome to Glem Studio</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        At Glem Studio, We specialize in creating stunning 3D visualizations for
        architects, designers, and developers. With over 3 years of experience, we
        deliver high-quality, photorealistic renders and animations that bring your
        projects to life. Our expertise in 3ds Max, V-Ray, and After Effects ensures
        every detail is meticulously crafted to meet your vision. Explore our
        Portfolio and Contact Us today to see how we can transform your ideas into captivating visuals.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        <div class="youtube-container">
          <iframe src="https://www.youtube.com/embed/56IdMVQUm5A?autoplay=0&mute=0&loop=0&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=56IdMVQUm5A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
