import React from "react"

function Sections(props) {
    return (
        <section className="section-plain">
            <div className="container">
                    <h2>this is section <span className="text-emphasis">One</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolor!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim, harum provident illo culpa in.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fuga aut <a href="#" className="links">laboriosam placeat dolor modi</a> cumque optio est quisquam, cupiditate et. Maiores consequuntur earum non, quaerat illum eum molestias impedit.</p>
                    <a href="" id="see-work" className="btn btn-plain" onClick={props.showWork}>view my work</a>
            </div>
        </section>
    )
}

export default Sections