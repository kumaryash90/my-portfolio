import React from "react"
import linkedInIcon from "../images/linkedin.png";
import githubIcon from "../images/github.png";

function Section2() {
    return(
        <section className="section-accent">
            <div className="container">
                    <h2>this is section <span className="text-emphasis">Two</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ducimus cum dolore, fugiat nesciunt nisi.</p>
                    <a href="https://www.linkedin.com/in/kumaryash96/" target="_blank" > <img src={linkedInIcon} className="logo1" />&nbsp;LinkedIn</a>
                    <a href="https://github.com/kumaryash90/" target="_blank" > <img src={githubIcon} className="logo2" />&nbsp;Github</a>
            </div>
        </section>
    )
}

export default Section2