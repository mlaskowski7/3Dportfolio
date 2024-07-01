import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { skills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full greeen-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary  rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} className="w-16 h-16 object-contain" />
          <h3 className="text-black text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.sectionHeadText}>Let Me Introduce Myself. </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-xl leading-[30px]"
      >
        I am 19 years old student living in Warsaw, Poland. I study Computer
        Science at PJAIT. Since early age I was interested in computers, now I
        am taking my first steps in IT industry. I am passionate about
        programming, especially web development and deep learning.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {skills.map((skill, index) => (
          <ServiceCard key={skill.title} index={index} {...skill} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
