import React, { Component } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import './style.css';

const animateHeight = {
    initial:{height: 0},
    animate: {height: 50 + '%'}

}

function LandingPage(props) {


        return (

            <div key="landingPage" id="landingPageContainer">
                
                <motion.div 
                key="one"
                {...animateHeight}
                transition={{ delay: 0.7, ease: "easeOut"}}
                exit={{height: 0}} 
                id="lp_one">
                </motion.div>
                <motion.div 
                key="two"
                {...animateHeight}
                transition={{ delay: 0.7, ease: "easeOut"}}
                exit={{height: 0}} 
                id="lp_two">
                </motion.div>
                <motion.div 
                key="three"
                {...animateHeight}
                transition={{ delay: 0.6, ease: "easeOut"}}
                exit={{height: 0}} 
                id="lp_three">
                </motion.div>
                <motion.div 
                key="four"
                {...animateHeight}
                transition={{ delay: 0.6, ease: "easeOut"}}
                exit={{height: 0}} 
                id="lp_four">
                </motion.div>
                <motion.div 
                key="five"
                {...animateHeight}
                transition={{ delay: 0.5, ease: "easeOut"}}
                exit={{height: 0}} 
                id="lp_five">
                </motion.div>
                <motion.div 
                key="six"
                {...animateHeight}
                transition={{ delay: 0.5, ease: "easeOut"}}
                exit={{height: 0}} 
                id="lp_six">
                </motion.div>
                <motion.div 
                key="seven"
                {...animateHeight}
                transition={{ delay: 0.6, ease: "easeOut"}}
                exit={{height: 0}} 
                id="lp_seven">
                </motion.div>
                <motion.div 
                key="eight"
                {...animateHeight}
                transition={{ delay: 0.6, ease: "easeOut"}}
                exit={{height: 0}} 
                id="lp_eight">
                </motion.div>
                <motion.div 
                key="nine"
                {...animateHeight}
                transition={{ delay: 0.7, ease: "easeOut"}}
                exit={{height: 0}} 
                id="lp_nine">
                </motion.div>
                <motion.div 
                key="ten"
                {...animateHeight}
                transition={{ delay: 0.7, ease: "easeOut"}}
                exit={{height: 0 }} 
                id="lp_ten">
                </motion.div>
         
                <motion.div 
                key="name"
                initial={{opacity: 0}} 
                animate={{opacity: 1}}
                exit={{opacity: 0, scale: 0.8, x: -200 +'vw', transition: { delay: 0.2 }}} 
                transition={{ delay: 1, duration: 1}}
                
                id="lp_welcomeText" >Paul Morris
                    <motion.div 
                    key="tag"
                    initial={{x:1000 +'px'}} 
                    animate={{x: 0}}
                    transition={{ scale: {
                        type: "spring" },delay: 1.3, duration: 0.5}}
                    exit={{opacity: 0, scale: 0.8, x: -200 +'vw', transition: { delay: 0.2 }}} 
                    id="lp_mainTitle" >FRONT END DEVELOPER.</motion.div>
                </motion.div>
              
            </div>

        )
}


export default LandingPage;