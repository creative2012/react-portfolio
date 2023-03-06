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
                    link={project.link}
                    title={project.title}
                    description={project.description}
                    skills={project.skills}
                    backgroundImage={{ backgroundImage: `${project.backgroundImage}` }}
                />)
            })}
        </div>
    )

}

export default Projects