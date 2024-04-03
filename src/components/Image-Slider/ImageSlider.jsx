import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { BsArrowRightCircleFill, BsCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';

const ImageSlider = ({ url, page = 1, limit = 5 }) => {
  const [Images, setImages] = useState([]);
  const [currentSlide, setcurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    // error handling
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    }
    catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function HandlePrevious() {
    setcurrentSlide(currentSlide === 0 ? Images.length - 1 : currentSlide - 1);
  }
  function HandleNext() {
    setcurrentSlide(currentSlide === Images.length - 1 ? 0 : currentSlide + 1);
  }
  function HandleCirle(index)
  {
    setcurrentSlide(index);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url])

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }
  if (errorMsg !== null) {
    return <div>Error occured !</div>;
  }
  return (
    <div className="container relative flex justify-center items-center w-[600px] h-[450px]">
      <BsArrowLeftCircleFill className='arrow arrow-left absolute w-[2rem] h-[2rem] text-white drop-shadow-lg left-4 cursor-pointer'
        onClick={HandlePrevious}
      />
      {
        Images && Images.length
          ? Images.map((imageItem, index) => (
            <img src={imageItem.download_url} alt="" key={imageItem.id} className={'current-image rounded-[0.5rem] shadow-lg w-full h-full ' + (currentSlide === index ? "block" : "hidden")} />
          ))
          : null
      }
      <BsArrowRightCircleFill className='arrow arrow-right absolute w-[2rem] h-[2rem] text-white drop-shadow-lg right-4 cursor-pointer'
        onClick={HandleNext}
      />
      <span className='circle-indicators absolute flex gap-4 bottom-4'>
        {
          Images && Images.length
            ? Images.map((_, index) => (
              <BsCircleFill key={index} className={"current-indicator h-[12x] w-[12px] rounded-[50%] border-none outline-none cursor-pointer "+(currentSlide===index ? 'text-white': "text-gray-500")}
              onClick={()=>HandleCirle(index)}
              ></BsCircleFill>
            ))
            : null
        }
      </span>
    </div>
  )
}

export default ImageSlider
