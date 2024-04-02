import React from 'react'
import { Accordion, ColorSelector, ImageSlider, StarRating} from './components'
const App = () => {
  return (
    <div>
      {/* Accordion single and Multiple selection */}
      {/* <Accordion /> */}
      
      {/* Random color generator with different types */}
      {/* <ColorSelector/>  */}

      {/* Star rating with updating and increasing and decreasing the no. of stars using props*/}
      {/* <StarRating /> */}

      {/* Image Slider where data will be received using API */}
      <ImageSlider />
    </div>
  )
}

export default App
