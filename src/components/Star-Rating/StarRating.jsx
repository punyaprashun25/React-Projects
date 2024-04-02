import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

const StarRating = ({noOfStars = 5}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const HandleClick = (currRating)=>{
    setRating(currRating);
  }
  const HandleMouseMove = (currRating)=>{
    setHover(currRating);
  }
  const HandleMouseLeave = ()=>{
    setHover(rating);
  }
  return (
    <div className="star-rating flex gap-5 justify-center mt-6">
      {
        [...Array(noOfStars)].map((_, index)=>{
          index +=1
          return <FaStar
          key={index}
          onClick={()=>HandleClick(index)}
          onMouseMove={()=>HandleMouseMove(index)}
          onMouseLeave={HandleMouseLeave}
          size={40}
          className={index <= (hover || rating) ? "text-[#fff700]" : "text-black"}
          />
        })
      }
    </div>
  )
}

export default StarRating
