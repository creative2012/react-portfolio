import React from 'react';
import ProjectBox from './components/projectBox';
import projects from './projects.json';
import './style.css';

function Projects() {
    let t = 0.4;

    return (

        <div id="projectsPageContainer">
            {
            projects.map((project, i) => {
                if(i % 2 === 0) t = t += 0.1;

                return (<ProjectBox
                    timer={t}
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