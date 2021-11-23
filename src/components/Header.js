import React from "react"


function Header (props) {
    return(
        <header>
            <div className="container">
                    <h1>Hello, my name is <span className="text-emphasis">Yash</span></h1>
                    <img src={props.img} alt="kdjfnvkdf" id="profile-pic"/>
            </div>
        </header>
    )
}

export default Header