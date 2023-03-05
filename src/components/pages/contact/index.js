import React, { Component } from 'react';
import { motion} from "framer-motion";
import './style.css';
import image from './images/cardLogo.svg';
import CV from './paulMorrisCV.doc';

class Contact extends Component {
    downloadCV(){
        window.open(CV);
    }

    render() {
        return (
            <motion.div  
            initial={{opacity:0,  bottom: 0}}
            animate={{opacity: 1, bottom: 20 + 'px'}}
            exit={{bottom: -1000, scale:0.2, transition:{delay: 0, duration: 0.2}}} 
            transition={{ delay: 0.8, ease: "linear"}}
            key="cc" id="contactPageContainer">
                <div id="contactCard">
                    <div id="cardLogo" style={{ backgroundImage: `url("${image}")` }}></div>
                    <div id="cardText">
                       
                            <div id="cc-name">Paul Morris<div>Front End Developer</div></div>
                            <div id="cc-contact-btns">
                            <button role="button" onClick={this.downloadCV}><i class="fa fa-download"></i> Download CV</button>
                            <button role="button"><i class="fa fa-id-card-o"></i> Contact Form</button>
                            </div>
                            <div id="cc-email"><i class="fa fa-envelope"></i> Creative2012@hotmail.com</div>
                            <div id="cc-number"><i class="fa fa-phone"></i> +44 07857 921 643</div>
                       
                    </div>

                </div>
            </motion.div >
        )
    }
}
export default Contact