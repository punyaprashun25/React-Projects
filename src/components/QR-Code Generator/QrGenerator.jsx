import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QrGenerator = () => {
    const [QrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    function HandleInput(value)
    {
        setInput(value);
    }
    function HandleGenerate()
    {
        setQrCode(input);
    }
  return (
    <div className="qr-container w-full h-screen flex flex-col items-center mt-10 gap-4 ">
        <div className="input-box flex gap-5">
            <input type="text" name="" id="text" className='border-b-[1px] px-6 py-3 border-solid border-b-[rgba(0,0,0,0.58)] outline-none' placeholder='Enter some text here'
            onChange={(e)=>HandleInput(e.target.value)}
            />
            <button className='generate px-4 py-2 rounded-md bg-black text-white'
            onClick={HandleGenerate}
            >Generate</button>
        </div>
        <div className="qr-box">
            <QRCode 
            id={input}
            value={QrCode}
            height={400}
            />
        </div>

    </div>
  )
}

export default QrGenerator
