import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import projects from './projects.json';
import './style.css';


function ProjectDetail(props) {
    const data = useLocation()
    const { pathname } = data;
    //remove first part of pathname
    let targetProject = pathname.replace('/react-portfolio/projects/','');
    //use new string to search Json by link
    const project = filterById(projects,targetProject);    
    //function to get correct project from json
    function filterById(jsonObject, id) {
        return jsonObject.filter(function (jsonObject) {
            return (jsonObject['link'] == id);
        })[0];
    }




    return (
        
        <motion.div key={project.id} id="projectDetailsPageContainer"style={{backgroundImage: project.details.image}}
        initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ delay: 0.5, duration: 0.2, ease: "linear"}}
            exit={{opacity: 0, transition:{duration: 0.5}}}>
            <div id="backgroundBlur"></div>

        </motion.div>
    )

}
export default ProjectDetail

