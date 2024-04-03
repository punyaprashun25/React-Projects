import React from 'react'
import { Accordion, ColorSelector, ImageSlider, LoadMore, StarRating } from './components'
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
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} /> */}

      {/* Load More Button to Load more Data from API */}
      <LoadMore />
    </div>
  )
}

export default App
