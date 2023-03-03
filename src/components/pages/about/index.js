import React, { Component } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import image1 from './images/main_funnyFace.png';
import image2 from './images/mainPic.png';
import image3 from './images/slide_bgImage.png';
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

    }, 2000);
    //add event listeners to hover over profile image
    ap_picture.addEventListener("mouseover", this.changeImage, false);
    ap_picture.addEventListener("mouseout", this.changeImageBack, false);
    ap_picture.addEventListener("mousemove", this.rotate, false);
    let ap_pageContainer = document.getElementById('aboutPageContainer');
    let ap_scroll = document.getElementById('scroll');
    ap_scroll.onscroll = () => {
      if (this.isScrolledIntoView()) {
        this.scrollFunction();
      }


    };
    ap_pageContainer.onscroll = () => {

      if (this.isScrolledIntoView()) {
        this.scrollFunction();
      }

    };

  }
  changeImage() {
    let ap_picture = document.getElementById('aboutImage');
    ap_picture.style.backgroundImage = `url("${images[0]}")`;
  }
  changeImageBack(image) {
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
  scrollFunction() {

    let buttonTimer = 500;
    Array.from(document.querySelectorAll('.sp')).forEach(function (button) {
      setTimeout(() => {
        button.style.transform = "translate(0)";
      }, buttonTimer);
      buttonTimer += 100;
    });


  }
  isScrolledIntoView() {
    let ap_skillsContainer = document.getElementById('skillsContainer');
    let rect = ap_skillsContainer.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;

    // Only completely visible elements return true:
    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  render() {
    return (
      <div id="aboutPageContainer" style={{ display: 'grid' }}>
        <div id="scroll">
          <motion.div id="aboutText"
            initial={{ x: 500 + 'px', opacity: 0 }}
            animate={{ x: 0 + 'px', opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.8, ease: "easeOut" }}
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
              <b>front end Bootcamp</b> it is now my focus
              and drive... I must also give a huge thank you to the skills for life Edx team for helping to hone my
              skills.
            </p>


            <p> Based in Staffordshire UK,
              I plan to delve deeper and deeper into the world of
              design and programming, to bring <b>fresh interfaces</b>
              and <b>engaging experiances</b> to the world... While scoffing a cheesy oatcake!</p>
            <div id="skills">
              <h1>My Super Powers...</h1>
              <div id="skillsContainer">
                <i className="sp devicon-html5-plain-wordmark colored"></i>
                <i className="sp devicon-css3-plain-wordmark colored"></i>
                <i className="sp devicon-javascript-plain colored"></i>
                <i className="sp devicon-photoshop-plain colored"></i>
                <i className="sp devicon-bootstrap-plain-wordmark "></i>
                <i className="sp devicon-jquery-plain-wordmark colored"></i>
                <i className="sp devicon-nodejs-plain colored"></i>
                <i className="sp devicon-react-original-wordmark colored"></i>
                <i className="sp devicon-vuejs-plain-wordmark colored"></i>
                <i className="sp devicon-laravel-plain-wordmark colored"></i>
                <i className="sp devicon-mysql-plain-wordmark"></i>
                <i className="sp devicon-php-plain colored"></i>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div id="aboutImage"
          initial={{ x: -1000 + 'px', opacity: 0 }}
          animate={{ x: 0 + 'px', opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          exit={{ x: -1000 + 'px', opacity: 0, transition: { duration: 0.5, delay: 0 } }}
        ></motion.div >
      </div>
    );
  }
}

export default About;