import React, { Component } from 'react';
import { motion} from "framer-motion";
import './style.css';
const animateHeight = {
    initial:{height: 0},
    animate: {height: 50 + '%'}

}

class LandingPage extends Component{

        rotate(event) {
            let midpoint = window.innerWidth / 2;
            let midpoint2 = window.innerHeight / 2;
            let pos = event.clientX - midpoint;
            let pos2 = event.clientY - midpoint2;
            let val = (pos / midpoint) * 2;
            let val2 = (pos2 / midpoint2) * 5;
            document.getElementById('lp_welcomeText').style.transform = "perspective(550px) rotateY(" + val + "deg) rotateX(" + val2 + "deg)";
        }
        componentDidMount(){
            document.addEventListener("mousemove", this.rotate, false);
            
        }
        componentWillUnmount() {
            document.removeEventListener("mousemove", this.rotate, false);
        }

        render(){
        return (
            
            <div key="landingPage" id="landingPageContainer">
                
                <motion.div 
                key="one"
                {...animateHeight}
                transition={{ delay: 0.7, ease: "linear"}}
                exit={{height: 0}} 
                id="lp_one">
                </motion.div>
                <motion.div 
                key="two"
                {...animateHeight}
                transition={{ delay: 0.7, ease: "linear"}}
                exit={{height: 0}} 
                id="lp_two">
                </motion.div>
                <motion.div 
                key="three"
                {...animateHeight}
                transition={{ delay: 0.6, ease: "linear"}}
                exit={{height: 0}} 
                id="lp_three">
                </motion.div>
                <motion.div 
                key="four"
                {...animateHeight}
                transition={{ delay: 0.6, ease: "linear"}}
                exit={{height: 0}} 
                id="lp_four">
                </motion.div>
                <motion.div 
                key="five"
                {...animateHeight}
                transition={{ delay: 0.5, ease: "linear"}}
                exit={{height: 0}} 
                id="lp_five">
                </motion.div>
                <motion.div 
                key="six"
                {...animateHeight}
                transition={{ delay: 0.5, ease: "linear"}}
                exit={{height: 0}} 
                id="lp_six">
                </motion.div>
                <motion.div 
                key="seven"
                {...animateHeight}
                transition={{ delay: 0.6, ease: "linear"}}
                exit={{height: 0}} 
                id="lp_seven">
                </motion.div>
                <motion.div 
                key="eight"
                {...animateHeight}
                transition={{ delay: 0.6, ease: "linear"}}
                exit={{height: 0}} 
                id="lp_eight">
                </motion.div>
                <motion.div 
                key="nine"
                {...animateHeight}
                transition={{ delay: 0.7, ease: "linear"}}
                exit={{height: 0}} 
                id="lp_nine">
                </motion.div>
                <motion.div 
                key="ten"
                {...animateHeight}
                transition={{ delay: 0.7, ease: "linear"}}
                exit={{height: 0 }} 
                id="lp_ten">
                </motion.div>
         
                <motion.div 
                key="name"
                initial={{opacity: 0}} 
                animate={{opacity: 1}}
                exit={{opacity: 0, scale: 0.1, y: 200 +'vw', transition: { delay: 0.2, duration: 0.5 }}} 
                transition={{ delay: 1, duration: 1}}
                
                id="lp_welcomeText" >Paul Morris
                    <motion.div 
                    key="tag"
                    initial={{x:1000 +'px'}} 
                    animate={{x: 0}}
                    transition={{ delay: 1.3, duration: 0.5}}
                     
                    id="lp_mainTitle" >FRONT END DEVELOPER.</motion.div>
                </motion.div>
              
            </div>

        )
    }
}


export default LandingPage;