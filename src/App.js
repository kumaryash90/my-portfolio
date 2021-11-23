import React from "react"
import Header from "./components/Header"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Overlay from "./components/Overlay"
import "./App.css"
import pic from "./images/profilePic.jpg"
import carouselData from "./files/carouselData"

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      displayOverlay : false,
      carousel : carouselData,
      carouselCurrentSlide : 0,
      carouselTotalSlides : carouselData.length,
    }
    this.showWork = this.showWork.bind(this)
    this.closeOverlay = this.closeOverlay.bind(this)
    this.carouselNext = this.carouselNext.bind(this)
    this.carouselPrev = this.carouselPrev.bind(this)
    this.setCarousel = this.setCarousel.bind(this)
  }

  showWork(event) {
    event.preventDefault()
    this.setState({displayOverlay : true})
  }

  setCarousel(currentSlide) {
    let carouselArray = this.state.carousel.map(i => {
      if (i.itemId == currentSlide + 1) {
        return {
          ...i,
          isVisible : true
        }
      } else {
        return {
          ...i,
          isVisible : false
        }
      }
    })
    
    this.setState({
      carousel : carouselArray,
      carouselCurrentSlide : currentSlide
    })
  }

  carouselNext() {
    let currentSlide = this.state.carouselCurrentSlide
    let totalSlides = this.state.carouselTotalSlides
    if (currentSlide == totalSlides - 1) {
      currentSlide = 0
    } else {
      currentSlide++
    }
    
    this.setCarousel(currentSlide)
  }

  carouselPrev() {
    let currentSlide = this.state.carouselCurrentSlide
    let totalSlides = this.state.carouselTotalSlides
    if (currentSlide == 0) {
      currentSlide = totalSlides - 1
    } else {
      currentSlide--
    }
    
    this.setCarousel(currentSlide)
  }

  closeOverlay(event) {
    event.preventDefault()
    let currentSlide = 0
    this.setState({displayOverlay : false}, () => {this.setCarousel(currentSlide)})
  }

  render() {
    return(
      <div>
        <Header img={pic}/>
        <Section1 showWork={this.showWork}/>
        <Section2 />
        <Overlay 
          display={this.state.displayOverlay} 
          closeOverlay={this.closeOverlay}
          carouselArray={this.state.carousel}
          carouselNext={this.carouselNext}
          carouselPrev={this.carouselPrev}/>
      </div>
    )
  }
}

export default App