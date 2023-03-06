import React from 'react';
import { useLocation } from 'react-router-dom'
import projects from '../projects.json';


function ProjectDetail() {
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
        
        <div id="projectDetailsPageContainer"></div>
    )

}
export default ProjectDetail

