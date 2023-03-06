import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { motion} from "framer-motion";
const cusid_ele = document.getElementsByClassName('project');

class  ProjectBox extends Component {
    //listener to check screen size
    componentDidMount(){
        window.addEventListener("resize", this.resize, false)        
    }
    componentWillUnmount(){
        window.removeEventListener("resize", this.resize, false)
    }
    //resize 100% if mobile, only 50% if desktop
    resize(){
        if(window.innerWidth < 901){
            
            for (let i = 0; i < cusid_ele.length; ++i) {
                let item = cusid_ele[i];  
                item.style.width = '100%';
                item.style.opacity= 1;
            } 
        } else {
            for (let i = 0; i < cusid_ele.length; ++i) {
                let item = cusid_ele[i];  
                item.style.width = '50%';
                item.style.opacity= 1;
            } 
        }
    }
    
    render(){
        return (
        
            <motion.div  className="project" key={this.props.id} id={this.props.id}
            initial={{width: 0, opacity: 0}}
            animate={window.innerWidth < 901 ? {width: 100 + '%', opacity: 1}: {width: 50 + '%', opacity: 1}}
            transition={{ delay: this.props.timer, duration: 0.2, ease: "linear"}}
            exit={window.innerWidth < 901 ? {width: 0, opacity: 0, transition:{duration: 0.5}}:{width: 0, opacity: 0, transition:{duration: 0.5}}}>
                <div className="pp_description">
                    <Link to={this.props.link} 
                    state={{ 
                        id: this.props.id,
                        }}>
                    
                        <h1>{this.props.title} </h1>
                        <p>{this.props.description} </p>
                        <p>{this.props.skills.map((skillClass, i) =>{
                            return (<i key={i} className={skillClass}></i>)
                        }) } 
                        </p>
                        </Link>
                </div>
                <div className="pp_image" style={this.props.backgroundImage}></div>
            </motion.div >
        
        )
    }
    
}

export default ProjectBox