import React from 'react';
import { useLocation } from 'react-router-dom'


function ProjectDetail() {
    const props = useLocation()
  const { title } = props.state

    return (
      <div>{title}</div>
    )
  
}
export default ProjectDetail