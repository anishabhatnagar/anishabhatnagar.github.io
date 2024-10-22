import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { anisha, bwmap, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto
          sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[150px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" /> 
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                Anisha Bhatnagar
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
            Machine Learning | AI Research | Software Engineering <br className="sm:block hidden" />
            Masters in CS @ Courant - New York University
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        {/* Anisha's Image */}
        {/* Anisha's Image */}
        <div className="absolute bottom-0 right-0 lg:right-10 sm:right-5 md:bottom-[40px] flex justify-end w-full">
          <img
            // className="rounded-full object-cover 
            //   h-[30vh] sm:h-[50vh] md:h-[55vh] lg:h-[65vh] xl:h-[75vh] 
            //   w-auto max-w-[50vw] sm:max-w-[40vw] md:max-w-[30vw] lg:max-w-[25vw]"
            // className="absolute bottom-[40px] ml-[36vw]  
            //   lg:ml-[61vw] md:ml-[46vw] xmd:ml-[46vw] 2xl:ml-[69vw]
            //   sm:h-[75vh] md:h-[55vh] xl:h-[65vh]
            //   rounded-full object-cover"
            className="rounded-full object-cover h-[30vh]
              lg:ml-[61vw] md:ml-[46vw] xmd:ml-[46vw] 2xl:ml-[69vw]
              sm:h-[75vh] md:h-[55vh] xl:h-[65vh]"
            src={anisha}
            alt="Anisha"
          />
        </div>

      </section>
    </>
  );
};

export default Hero;