import React, { Component } from 'react'

class Skills extends Component {
    componentDidMount() {
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
        )
    }
}

export default Skills