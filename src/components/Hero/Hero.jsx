import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';
import {motion} from 'framer-motion';


const Hero = () => {
    const transition = {type:'spring', duration : 3}
    const mobile = window.innerWidth<=768 ? true : false;
  return (
    /*========= HERO SECTION ============*/ 
    <div className="hero">
        <div className="blur hero-blur"></div>
        {/* Left side of the hero section */}
        <div className="left-h">
            <Header/>
            
            <div className="the-best-ad">
                {/* this div will be used for the orange color behind the text and for animations */}
                <motion.div
                initial={{left: mobile? '145px':'198px'}}
                whileInView={{left:'8px'}}
                transition={{...transition, type:'tween'}}
                ></motion.div>
                <span>the best fitness in the town</span>
            </div>

            {/* Hero Heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>SHAPE </span>
                    <span>YOUR</span>
                </div>
                <div>
                    <span>IDEAL BODY</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build 
                        your ideal body and live your life to the fullest.
                    </span>
                </div>
            </div>

            {/* Hero Figures */}

            <div className="figures">
                <div><span><NumberCounter end={140} start={100} delay='4' preFix='+'></NumberCounter></span><span>Expert Coaches</span></div>
                <div><span><NumberCounter end={978} start={800} delay='4' preFix='+'></NumberCounter></span><span>members joined</span></div>
                <div><span><NumberCounter end={50} start={0} delay='4' preFix='+'></NumberCounter></span><span>fitness programs</span></div>
            </div>

            {/* Hero Buttons */}

            <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>            
        </div>
        {/* Right side of the hero section  */}
        <div className="right-h">
            <button className='btn'>Join Now</button>

            <motion.div
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart rate</span>
                <span> 116 bpm</span>
            </motion.div>

            {/* Hero Image */}
            <img src={hero_image} alt="" className='hero-image'/>
            <motion.img
            initial={{right:'11rem'}}
            whileInView={{right:'20rem'}}
            transition={transition} 
            src={hero_image_back} alt="" className='hero-image-back'/>

            {/* Calories  */}
            <motion.div 
            initial={{right:'37rem'}}
            whileInView={{right:'28rem'}}
            transition={transition}
            className="calories">
                <img src={Calories} alt=""/>
                <div>
                    <span>CaloriesBurnt</span>
                    <span>220 kcal</span>
                </div>
                
            </motion.div>
        </div>
    </div>
  );
};

export default Hero