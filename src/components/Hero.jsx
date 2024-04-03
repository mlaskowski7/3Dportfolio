import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen mx-auto flex items-center justify-center flex-col gap-10"
    >
      <div
        className={`${styles.paddingX} max-lg:mt-[202px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:g-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, My name is <span className="text-secondary">Mateusz</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a web dev, working in various backend{" "}
            <br className="sm:block hidden" /> and frontend technologies. Feel
            free to contact me.
          </p>
        </div>
      </div>

      <button className="bg-secondary px-5 py-4 rounded-lg hover:brightness-90 font-bold">
        Click to download my CV
      </button>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
