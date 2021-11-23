import React from "react"
import Carousel from "./Carousel"

function Overlay(props) {
    return (
        <div className={props.display ? "overlay overlay-visible" : "overlay"}>
            <Carousel  
                carouselArray={props.carouselArray}
                carouselNext={props.carouselNext}
                carouselPrev={props.carouselPrev}/>
            <a href="" className="btn" id="overlay-close" onout onClick={props.closeOverlay}>x</a>
        </div>
    )
}

export default Overlay