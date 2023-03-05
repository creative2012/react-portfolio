import React from 'react';
import ProjectBox from './components/projectBox';
import image1 from './images/aritasn.jpg';
import image2 from './images/dateLounge.png';
import image3 from './images/readme.png';
import image4 from './images/weatherapp.png';
import image5 from './images/blackJack.png';
import image6 from './images/portfolio.png';
import placeHolder from './images/matrix.jpg';
import './style.css';

function Projects() {
    //array of projects with details
    const projects = [
        {
            id: "pp_one",
            url: "https://github.com/creative2012/css-artisan",
            title: "CSS Artisan",
            description: "A free resource.",
            skills:
                [
                    "sp devicon-javascript-plain colored",
                    "sp devicon-css3-plain-wordmark colored"
                ],
            backgroundImage: `url("${image1}")`,
        },
        {
            id: "pp_two",
            url: "#",
            title: "The Date Lounge",
            description: "A Dating Platform.",
            skills:
                [
                    "sp devicon-laravel-plain-wordmark colored",
                    "sp devicon-react-original-wordmark colored",
                    "sp devicon-photoshop-plain colored"
                ],
            backgroundImage: `url("${image2}")`,
        },
        {
            id: "pp_three",
            url: "https://github.com/creative2012/Professional-README-Generator",
            title: "Readme Generator",
            description: "NodeJs command line App",
            skills:
                [
                    "sp devicon-nodejs-plain colored"
                ],
            backgroundImage: `url("${image3}")`,
        },
        {
            id: "pp_four",
            url: "https://github.com/creative2012/weather-dashboard",
            title: "Weather App",
            description: "5 day forcast App using openweather API",
            skills:
                [
                    "sp devicon-html5-plain-wordmark colored",
                    "sp devicon-css3-plain-wordmark colored",
                    "sp devicon-jquery-plain-wordmark colored"
                ],
            backgroundImage: `url("${image4}")`,
        },
        {
            id: "pp_five",
            url: "https://github.com/creative2012/BlackJack",
            title: "Black Jack",
            description: "Simple Browser Game",
            skills:
                [
                    "sp devicon-html5-plain-wordmark colored",
                    "sp devicon-css3-plain-wordmark colored",
                    "sp devicon-javascript-plain colored"
                ],
            backgroundImage: `url("${image5}")`,
        },
        {
            id: "pp_six",
            url: "https://github.com/creative2012/Bootstrap-Portfolio",
            title: "1st Portfolio",
            description: "Made during my time at Edx bootcamp",
            skills:
                [
                    "sp devicon-html5-plain-wordmark colored",
                    "sp devicon-css3-plain-wordmark colored",
                    "sp devicon-bootstrap-plain-wordmark colored"
                ],
            backgroundImage: `url("${image6}")`,
        },
        {
            id: "pp_seven",
            url: "",
            title: "Comming Soon",
            description: "",
            skills:
                [
                    
                ],
            backgroundImage: `url("${placeHolder}")`,
        },
        {
            id: "pp_eight",
            url: "",
            title: "Comming Soon",
            description: "",
            skills:
                [
                    
                ],
            backgroundImage: `url("${placeHolder}")`,
        },
        {
            id: "pp_nine",
            url: "",
            title: "Comming Soon",
            description: "",
            skills:
                [
                    
                ],
            backgroundImage: `url("${placeHolder}")`,
        },
        {
            id: "pp_ten",
            url: "",
            title: "Comming Soon",
            description: "",
            skills:
                [
                    
                ],
            backgroundImage: `url("${placeHolder}")`,
        }
    ];



    return (

        <div id="projectsPageContainer">
            {projects.map((project, i) => {
                return (<ProjectBox
                    key={i}
                    id={project.id}
                    url={project.url}
                    title={project.title}
                    description={project.description}
                    skills={project.skills}
                    backgroundImage={{ backgroundImage: `${project.backgroundImage}` }}
                />)
            })}
            <div id="pp_seven">
                <div className="pp_description">
                    <h1>coming Soon</h1>
                    <p></p>
                </div>
                <div className="pp_image"></div>
            </div>
            <div id="pp_eight">

                <div className="pp_image"></div>
                <div className="pp_description">
                    <h1>coming Soon</h1>
                    <p></p>
                </div>
            </div>
            <div id="pp_nine">
                <div className="pp_description">
                    <h1>coming Soon</h1>
                    <p></p>
                </div>
                <div className="pp_image"></div>
            </div>
            <div id="pp_ten">

                <div className="pp_image"></div>
                <div className="pp_description">
                    <h1>coming Soon</h1>
                    <p></p>
                </div>
            </div>
        </div>
    )

}

export default Projects