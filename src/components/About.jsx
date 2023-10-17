import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className='w-full gree-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div option={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                    <img src={icon} alt={title} className='w-16 h-16 object-contain' />
                    <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>

        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            I am a Frontend Developer at Aró Digital Strategy, a digital agency that helps businesses grow online. With 9+ years of experience in web development, I have a passion for designing and developing user interfaces that are both visually appealing and functional.
            In my current role, I use my expertise in HTML, CSS, JavaScript, and frontend frameworks to create responsive and mobile-friendly websites and applications for clients across various industries. I also leverage my skills in design systems and design tokens to ensure consistency and efficiency in my work. I am proficient in using Style Dictionary, a tool that helps manage design tokens across platforms and devices. Collaboration with designers, backend developers, and other stakeholders is a key aspect of my work, as I ensure that the frontend and backend components of a project are seamlessly integrated.
            I am always looking for ways to improve my skills and stay up to date with the latest trends and technologies in the web development field. I enjoy learning new tools and techniques that can enhance the user experience and the performance of the websites and applications I build. I am also motivated by the challenges and opportunities that come with working on diverse and complex web projects. 
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>
    </>
  )
}

export default SectionWrapper(About, "about")