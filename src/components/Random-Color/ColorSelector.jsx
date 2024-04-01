import React, { useState } from 'react'

const ColorSelector = () => {
  const Hexcode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  // manage state for selected color type
  const [selectedValue, setSelectedValue] = useState("HEX");

  // manage state for current color
  const [currentColor, setCurrentColor] = useState("#FFFFF");

  // handle the change in the option input
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  }

  // Generate random index from Hexcode
  const RandomIndex = () => {
    return Math.floor(Math.random() * Hexcode.length);
  }

  // Generate Randome Hex Color
  const RandomHexColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += Hexcode[RandomIndex()];
    }
    setCurrentColor(color);
  }
  // Generate Random RGB Color
  const RandomRGB = () => {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let color = `rgb(${red}, ${green}, ${blue})`;
    setCurrentColor(color);
  }

  // Generate Random HSL Color
  const RandomHSL = () => {
    let hue = Math.floor(Math.random() * 361)
    let saturation = Math.floor(Math.random() * 101)
    let lightness = Math.floor(Math.random() * 101)
    let color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    setCurrentColor(color);
  }

  // Handle the generate button eventand trigger respective type color
  const HandleRandomGenerate = () => {
    switch (selectedValue) {
      case "HEX": {
      } RandomHexColor();
        break;
      case "RGB": {
      } RandomRGB();
        break;
      case "HSL": {
      } RandomHSL();
        break;
    }
  }
  const colorType = ["HEX", "RGB", "HSL"];
  return (
    <div className='flex h-screen flex-col items-center gap-28' style={{ backgroundColor: currentColor }}>
      <div className="nav w-full bg-black text-white flex justify-center gap-12 py-6">
        <select value={selectedValue} onChange={handleChange} className='px-4 py-4 rounded-md bg-black focus:outline-none cursor-pointer'>
          
          {/* <option value={"hex"}>HEX</option>
          <option value={"rgb"}>RGB</option>
          <option value={"hsl"}>HSL</option> */}
          {
            colorType.map((item)=>{
              return <option value={item}>{item}</option>
            })
          }
        </select>
        <button className="generateColor border-none bg-white text-black px-4 py-2 rounded-lg" onClick={HandleRandomGenerate}>Generate Random Color</button>
      </div>
      <div className="ColorName font-bold text-3xl h-full">{currentColor}</div>
    </div>
  )
}

export default ColorSelector
