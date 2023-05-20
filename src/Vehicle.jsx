import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarSM from "./NavbarSM";
import data from "./data.json";

import techD from "./assets/technology/background-technology-desktop.jpg";
import techT from "./assets/technology/background-technology-tablet.jpg";
import techM from "./assets/technology/background-technology-mobile.jpg"; 

import vehiclePortrait from "./assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportPortrait from "./assets/technology/image-spaceport-portrait.jpg";
import spacePortrait from "./assets/technology/image-space-capsule-portrait.jpg";

import vehicleLandscape from "./assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportLandscape from "./assets/technology/image-spaceport-landscape.jpg";
import spaceLandscape from "./assets/technology/image-space-capsule-landscape.jpg";

function Vehicle() {
  const [name, setName] = useState(0);

  const imageMap = {
    [data.technology[0].images.portrait]: vehiclePortrait,
    [data.technology[1].images.portrait]: spaceportPortrait,
    [data.technology[2].images.portrait]: spacePortrait,
    [data.technology[0].images.landscape]: vehicleLandscape,
    [data.technology[1].images.landscape]: spaceportLandscape,
    [data.technology[2].images.landscape]: spaceLandscape,
  };

  const imageName =
    window.innerWidth >= 1280
      ? data.technology[name].images.portrait
      : data.technology[name].images.landscape;
  const imageVariable = imageMap[imageName];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-col items-start justify-start xl:h-[900px] md:w-full md:h-[1024px]">
          <img
            className="relative h-full w-full"
            src={
              window.innerWidth >= 768
                ? window.innerWidth >= 1280
                  ? techD
                  : techT
                : techM
            }
          />

          <div className="flex space-x-6 items-center justify-end w-auto md:h-8 h-5 pr-1.5 absolute xl:left-[166.5px] xl:top-[212px] md:left-[38.5px] md:top-[136px] left-[calc(50%-88px)] top-[88px]">
            <p className="opacity-25 xl:text-3xl md:text-xl font-bold tracking-widest text-white">
              03
            </p>
            <p className="xl:text-3xl md:text-xl tracking-widest text-white">
              SPACE LAUNCH 101
            </p>
          </div>

          <div className="flex flex-col xl:space-y-6 items-center justify-start pr-1 absolute \
                          xl:w-[515px] xl:h-[527px] xl:left-[925px] xl:top-[272px] \
                          md:w-full md:h-[310px] md:left-0 md:top-[220px] \
                          w-full h-[170px] left-0 top-[139px] overflow-hidden">
            <img src={imageVariable} alt="moon" />
          </div>
          <div className="flex xl:flex-col flex-row xl:space-y-10 xl:space-x-0 md:space-x-9 space-x-6 absolute \
                        xl:top-[383px] xl:left-[165px] \
                        md:top-[586px] md:left-[calc(50%-105px)] \
                        top-[calc(50%-20px)] left-[calc(50%-76px)] ">
           
            <button
              className="flex justify-center items-center relative group \
                        xl:h-[80px] xl:w-[80px] \
                        md:h-[60px] md:w-[60px] \
                        h-10 w-10"
              
              onClick={() => setName(0)}
            >
              <div
                className={
                  "xl:w-20 xl:h-20 md:h-[60px] md:w-[60px] w-10 h-10 rounded-full " +
                  (name === 0
                    ? " bg-white"
                    : "opacity-25 group-hover:opacity-100 border border-white")
                }
              />
              
              <p
                className={
                  "absolute text-3xl tracking-widest text-center xl:left-[32.5px] xl:top-[22px] md:left-[22.5px] md:top-[15px] " +
                  (name === 0 ? "text-gray-900" : "text-white")
                }
              >
                1
              </p>
            </button> 
            <button
              className="flex justify-center items-center relative group xl:h-[80px] xl:w-[80px] md:h-[60px] md:w-[60px] w-10 h-10"
              onClick={() => setName(1)}
            >
              <div
                className={
                  "xl:w-20 xl:h-20 md:h-[60px] md:w-[60px] w-10 h-10 rounded-full " +
                  (name === 1
                    ? " bg-white"
                    : "opacity-25 group-hover:opacity-100 border border-white")
                }
              />
              <p
                className={
                  "absolute text-3xl tracking-widest text-center xl:left-[32.5px] xl:top-[22px] md:left-[22.5px] md:top-[15px] " +
                  (name === 1 ? "text-gray-900" : "text-white")
                }
              >
                2
              </p>
            </button>
            <button
              className="flex justify-center items-center relative group xl:h-[80px] xl:w-[80px] md:h-[60px] md:w-[60px] w-10 h-10"
              onClick={() => setName(2)}
            >
              <div
                className={
                  "xl:w-20 xl:h-20 md:h-[60px] md:w-[60px] w-10 h-10 rounded-full " +
                  (name === 2
                    ? " bg-white"
                    : "opacity-25 group-hover:opacity-100 border border-white")
                }
              />
              <p
                className={
                  "absolute text-3xl tracking-widest text-center xl:left-[32.5px] xl:top-[22px] md:left-[22.5px] md:top-[15px] " +
                  (name === 2 ? "text-gray-900" : "text-white")
                }
              >
                3
              </p>
            </button>
          </div>

          <div className="flex flex-col space-y-3.5 xl:items-start items-center xl:justify-start md:justify-center absolute \
                        xl:w-[470px] xl:h-[303px] xl:left-[325px] xl:top-[383px] \
                        md:w-[458px] md:h-[237px] md:left-[calc(50%-228px)] md:top-[690px] \
                        w-[327px] h-[220px] left-[calc(50%-163px)] top-[calc(73%-110px)]">

            <p className="md:text-base text-sm tracking-widest text-indigo-200">
              THE TERMINOLOGY…
            </p>
            <p className="xl:text-5xl md:text-4xl text-2xl text-white">
              {data.technology[name].name.toUpperCase()}
            </p>
            <p className="xl:text-lg md:text-base text-sm leading-loose xl:text-left text-center w-fit text-indigo-200">
              {data.technology[name].description}
            </p>
          </div>
        </div>

        {isMobile? <NavbarSM />: <Navbar/>}
      </div>
    </>
  );
}

export default Vehicle;
