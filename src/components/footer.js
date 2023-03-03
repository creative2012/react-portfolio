import React from "react";

function footer(props) {
    return (
        <footer style={props.style}>
            <ul>
                <li id="mail"><a href="mailto:creative2012@hotmail.com">
                    <div id="email_i"></div>
                </a></li>
                <li id="git"><a href="https://github.com/creative2012" target="_new">
                    <div id="git_i"></div>
                </a></li>
                <li id="linkedin"><a href="https://www.linkedin.com/in/paul-morris-1b938230/" target="_new">
                    <div id="linkedin_i"></div>
                </a>
                </li>
            </ul>
            <div id="copyright">&copy; 2023 Paul Morris</div>
        </footer>
    )

}


export default footer;