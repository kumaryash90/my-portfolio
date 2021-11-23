import React from "react"

function Carousel(props) {
    const carouselItems = props.carouselArray.map(item =>
        <img 
        src={item.itemContent}
        alt="no image"
        className={item.isVisible ? "carousel-item carousel-item-visible" : "carousel-item"}/>)
    return (
        <div className="carousel">
            {carouselItems}
            <div className="carousel-actions">
                <button className="carousel-btn" id="carousel-prev" onClick={props.carouselPrev}>{'<'}</button>
                <button className="carousel-btn" id="carousel-next" onClick={props.carouselNext}>{'>'}</button>
            </div>
            
        </div>
    )
}

export default Carousel