import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// Import icons from React Icons
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={`${styles.sectionSubText} mb-4`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadTextLight} mb-8`}>Contact.</h3>

        {/* Add your contact details here */}
        <div className="mt-10 flex flex-col gap-8 font-poppins">
          <p className="text-taupe text-[18px]">
            Feel free to reach out to me through the following platforms:
          </p>

          {/* <ul className="text-taupe text-[18px] leading-[30px] space-y-6">
            <li className="flex items-center">
              <FaEnvelope className="mr-3 w-6 h-6 text-lightBlue" />
              <strong>Email:</strong>{' '}
              <a
                href="mailto:youremail@example.com"
                className="ml-2 text-timberWolf hover:text-lightBlue transition duration-200">
                youremail@example.com
              </a>
            </li> */}
            <ul className="text-taupe text-[18px] leading-[30px] space-y-6">
            {/* First email */}
            <li className="flex items-center">
              <FaEnvelope className="mr-3 w-6 h-6 text-lightBlue" />
              <strong>Email 1:</strong>{' '}
              <a
                href="mailto:firstemail@example.com"
                className="ml-2 text-timberWolf hover:text-lightBlue transition duration-200">
                ab10945@nyu.edu
              </a>
            </li>
            {/* Second email */}
            <li className="flex items-center">
              <FaEnvelope className="mr-3 w-6 h-6 text-lightBlue" />
              <strong>Email 2:</strong>{' '}
              <a
                href="mailto:secondemail@example.com"
                className="ml-2 text-timberWolf hover:text-lightBlue transition duration-200">
                anishabhatnagar2511@gmail.com
              </a>
            </li>

            <li className="flex items-center">
              <FaLinkedin className="mr-3 w-6 h-6 text-lightBlue" />
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/anishabhatnagar/"
                className="ml-2 text-timberWolf hover:text-lightBlue transition duration-200"
                target="_blank"
                rel="noopener noreferrer">
                linkedin.com/in/anishabhatnagar/
              </a>
            </li>
            <li className="flex items-center">
              <FaGithub className="mr-3 w-6 h-6 text-lightBlue" />
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/anishabhatnagar"
                className="ml-2 text-timberWolf hover:text-lightBlue transition duration-200"
                target="_blank"
                rel="noopener noreferrer">
                github.com/anishabhatnagar
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
