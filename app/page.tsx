"use client";
import React, { useState, useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";

function WorstUIEver() {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isModalVisible, setModalVisible] = useState(false);




  const handleInput = () => {
    if (inputRef.current) {
      inputRef.current.style.transform = `rotate(${Math.random() * 360}deg) translate(${Math.random() * 10}vw, ${
        Math.random() * 10
      }vh)`;
    }
    if (textAreaRef.current) {
      textAreaRef.current.style.transform = `rotate(${Math.random() * 360}deg) translate(${Math.random() * 10}vw, ${
        Math.random() * 10
      }vh)`;
    }
    if (submitRef.current) {
      submitRef.current.style.transform = `translate(${Math.random() * 40}vw, ${Math.random() * 40}vh)`;
    }
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    if (textAreaRef.current) {
      textAreaRef.current.value = "";
    }
  };

  const handleButtonRunAway = () => {
    if (submitRef.current) {
      submitRef.current.style.transform = `translate(${Math.random() * 40}vw, ${Math.random() * 40}vh)`;
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const modalInterval = setInterval(() => {
      setModalVisible(true);
    }, 30000); // Show the modal every 30 seconds

    return () => clearInterval(modalInterval);
  }, []);

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#41fc03] to-[#fc0377] flex items-center justify-center">
      <main className="flex items-center justify-center">
        <div className="items-center justify-center">
          <h1 className="text-8xl">It's what it's</h1>
          <Marquee className="rotate-45 z-1000">some words and stuff</Marquee>
          <form className="relative">
            <label htmlFor="email" className="block text-lg mb-4">
              Join our mailing list:
            </label>
            <input
              name="email"
              type="email"
              required={true}
              ref={inputRef}
              onInput={handleInput}
              className="focus:bg-transparent transition-transform duration-500 focus:rotate-180 absolute bg-white text-black px-4 py-2 border border-black rounded"
              style={{
                left: "10vw",
                top: "10vh",
              }}
            />
            <label
              htmlFor="tell"
              style={{
                left: "10vw",
                top: "10vh",
              }}
            >
              Tell us how you heard about us
            </label>
            <textarea
              name="tell"
              ref={textAreaRef}
              required={true}
              onInput={handleInput}
              className="focus:bg-transparent transition-transform duration-500 focus:rotate-180 absolute bg-white text-black px-4 py-2 border border-black rounded"
            />
            <button
              type="submit"
              ref={submitRef}
              onMouseEnter={handleButtonRunAway}
              onClick={handleButtonClick}
              className="absolute bg-black text-white px-6 py-2 rounded mt-4 transition-transform duration-500"
              style={{
                left: "20vw",
                top: "30vh",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      {isModalVisible && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg text-center relative">
            <h2 className="text-2xl text-black mb-4">Why haven't you submitted yet?</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
              onClick={() => {}}
            >
              OK
            </button>
            <div>
              <a
                href="#"
                onClick={handleModalClose}
                style={{
                  cursor: "default",
                }}
                // className="text-blue-500 underline"
              >
                click here to exit
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorstUIEver;
