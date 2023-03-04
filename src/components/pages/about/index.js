import React, { Component } from 'react';
import { motion } from "framer-motion";
import image1 from './images/main_funnyFace.png';
import image2 from './images/mainPic.png';
import image3 from './images/slide_bgImage.png';
import Skills from './components/skills';
import './style.css';

const images = [
  image1,
  image2,
  image3
];

class About extends Component {


  componentDidMount() {
    //preload images
    for (const image of images) {
      const imageElement = new Image();
      imageElement.src = image;
    }
    //set [profile pic inital image
    let ap_picture = document.getElementById('aboutImage');
    ap_picture.style.backgroundImage = `url("${images[2]}")`;
    setTimeout(() => {
      //set profile pic to main image
      ap_picture.style.backgroundImage = `url("${images[1]}")`;
      ap_picture.style.transitionDuration = '0.2s';

    }, 1800);
    //add event listeners to hover over profile image
    ap_picture.addEventListener("mouseover", this.changeImage, false);
    ap_picture.addEventListener("mouseout", this.changeImageBack, false);
    ap_picture.addEventListener("mousemove", this.rotate, false);

  }
  changeImage() {
    let ap_picture = document.getElementById('aboutImage');
    ap_picture.style.backgroundImage = `url("${images[0]}")`;
  }
  changeImageBack() {
    let ap_picture = document.getElementById('aboutImage');
    ap_picture.style.backgroundImage = `url("${images[1]}")`;
    ap_picture.style.transform = "translate(0) perspective(550px) rotateY(0) rotateX(0)";
  }
  rotate(event) {
    let ap_picture = document.getElementById('aboutImage');
    let midpoint = window.innerWidth / 2;
    let midpoint2 = window.innerHeight / 2;
    let pos = event.clientX - midpoint;
    let pos2 = event.clientY - midpoint2;
    let val = (pos / midpoint) * 12;
    let val2 = (pos2 / midpoint2) * 8;
    ap_picture.style.transform = "translate(0) perspective(550px) rotateY(" + val + "deg) rotateX(" + val2 + "deg)";
  }
  componentWillUnmount() {
    let ap_picture = document.getElementById('aboutImage');
    ap_picture.addEventListener("mouseover", this.changeImage, false);
    ap_picture.addEventListener("mouseout", this.changeImageBack, false);
    ap_picture.addEventListener("mousemove", this.rotate, false);
  }



  render() {
    return (
      <div id="aboutPageContainer" style={{ display: 'grid' }}>
        <div id="scroll">
          <motion.div id="aboutText"
            initial={{ x: 500 + 'px', opacity: 0 }}
            animate={{ x: 0 + 'px', opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "anticipate" }}
            exit={{ x: 500 + 'px', opacity: 0, transition: { duration: 0.5, delay: 0 } }}>

            <h1>Its all about me...</h1>
            <p>Hey, <b>I'm Paul</b>, nice to see you here! </p>
            <p> I'm a <b>Front end Developer</b> with a passion for the <b>user experiance,
              design and programming</b>.
              I love to <b>create new things and solve problems</b>,
              try different approaches and continue learning
              new ideas.</p>
            <p>For over 8 years,
              this was simply a hobbie. But, after recently completing a
              <b> front end Bootcamp</b> it is now my focus
              and drive... I must also give a huge thank you to the skills for life Edx team for helping to hone my
              skills.
            </p>
            <p> Based in Staffordshire UK,
              I plan to delve deeper and deeper into the world of
              design and programming, to bring <b>fresh interfaces </b>
              and <b>engaging experiances</b> to the world... While scoffing a cheesy oatcake!</p>

            <p>Besides my front end skills in JS, React, Vue and an assortment of different packages for each, I have <b>also spent alot of time coding in PHP and working with MySql databases.</b></p>
            <Skills />
          </motion.div>
        </div>
        <motion.div id="aboutImage"
          initial={{ x: -800 + 'px', opacity: 0 }}
          animate={{ x: 0 + 'px', opacity: 1 }}
          transition={{ duration: .7, delay: 1, ease: "anticipate" }}
          exit={{ x: -1000 + 'px', opacity: 0, transition: { duration: 0.5, delay: 0 } }}
        ></motion.div >
      </div>
    );
  }
}

export default About;