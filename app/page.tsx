'use client'
import React, { useState, useRef } from 'react';

function WorstUIEver() {
  const [counter, setCounter] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  // const submitRef = useRef<HTMLButtonElement>(null);
  // const [rotation, setRotation] = useState(0);

  // const handleButtonClick = () => {
  //   setCounter(counter + Math.floor(Math.random() * 100) - 50); // Unpredictable increments
  //   setPopupVisible(!isPopupVisible);
  //   alert("Why did you click this?");
  // };

  const handleInput = () => {
    if (inputRef.current){
      inputRef.current.style.transform = 
        `rotate(${Math.floor(Math.random() * 360)}deg) translate(${Math.floor(Math.random() * 10)}vw,${Math.floor(Math.random()*10)}vh)`;
    }
  }
  

  return (
    <div
      className='w-screen h-screen bg-gradient-to-r from-[#41fc03] to-[#fc0377] flex items-center justify-center'
    >
      <main className='flex items-center justify-center'>
        <div className='items-center justify-center'>
        <h1 className="text-8xl rotate-[``]">It's what it's</h1>
        <form className='relative'>
          <label htmlFor="email">Your email</label>
          <input 
            name="email"
            type="email" 
            ref={inputRef} 
            onInput={handleInput}
            className='bg-transparent transition-transform duration-500 focus:rotate-180 absolute'
            style={{
              left: '10vw',
              top: '10vh',
            }}
            >
            </input>
            {/* <button> */}
              {/* submit */}
            {/* </button> */}
        </form>
        </div>
      </main>

    </div>
  );
}

export default WorstUIEver;
