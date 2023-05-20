import { useState, useEffect } from 'react' ;
import './App.css';
import Navbar from './Navbar';
import NavbarSM from './NavbarSM'; 

import destinationD from "./assets/destination/background-destination-desktop.jpg";
import destinationT from "./assets/destination/background-destination-tablet.jpg";
import destinationM from "./assets/destination/background-destination-mobile.jpg";



import logo from "./assets/shared/logo.svg";
import hambu from "./assets/shared/icon-hamburger.svg";
import moon from "./assets/destination/image-moon.png";
import data from "./data.json";

import imoon from "./assets/destination/image-moon.png"
import imars from "./assets/destination/image-mars.png"
import ieuropa from "./assets/destination/image-europa.png"
import ititan from "./assets/destination/image-titan.png"



function Moon() {
  const [count, setCount] = useState(0);

  const imageMap = {
    [data.crew[0].images.png]: imoon,
    [data.crew[1].images.png]: imars,
    [data.crew[2].images.png]: ieuropa,
    [data.crew[3].images.png]: ititan,
  };

  const imageName = data.crew[count].images.png;
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
      <div
          className="flex flex-col items-start justify-start xl:h-[900px] md:w-full md:h-[1024px]"
          
        >
          <img className="relative h-fit w-full overflow-hidden" src={(window.innerWidth >= 768? window.innerWidth >=  1280? destinationD: destinationT : destinationM)} />

          <div
            className="flex flex-col space-y-6 items-center justify-start pr-1 absolute xl:w-[445px] xl:h-[445px] xl:left-[230px] xl:top-[348px] md:w-[300px] md:h-[300px] md:left-[calc(50%-150px)] md:top-[220px] w-[170px] h-[170px] left-[calc(50%-85px)] top-[139px]"
            
          >
            <img src={imageVariable} alt="moon"></img>
          </div>


        </div>

        <div className="flex space-x-7 items-start justify-start absolute w-auto xl:h-[34px] md:h-24 h-[19px] xl:left-[166px] xl:top-[212px] md:left-[10%] md:top-[136px] left-[calc(50%-110px)] top-[88px]  pr-1.5">
          <p className="opacity-25 xl:text-3xl md:text-xl text-base font-bold tracking-tight text-white">01</p>
          <p className="xl:text-3xl md:text-xl text-base tracking-tighter text-white uppercase">Pick your destination</p>
        </div>

        <div
          className="flex flex-col space-y-3.5 xl:items-start items-center justify-start absolute xl:w-[480px] xl:h-[472px] xl:left-[832px] xl:top-[310px] md:w-[695px] md:h-[455px] md:left-[calc(50%-347.5px)] md:top-[548px] w-[237px] h-[28px] left-[calc(50%-119px)] top-[335px]"
          
        >
          <div className="flex space-x-4 items-start justify-center w-72 h-8 pr-1">
            
            <button
              onClick={() => setCount(0)}
              className={
                "md:text-base text-sm tracking-widest " +
                (count === 0 ? "text-white" : "text-indigo-200")
              }
            >
              MOON
            </button>
            <button
              onClick={() => setCount(1)}
              className={
                "text-base tracking-widest " +
                (count === 1 ? "text-white" : "text-indigo-200")
              }
            >
              MARS
            </button>
            <button
              onClick={() => setCount(2)}
              className={
                "md:text-base text-sm tracking-widest " +
                (count === 2 ? "text-white" : "text-indigo-200")
              }
            >
              EUROPA
            </button>
            <button
              onClick={() => setCount(3)}
              className={
                "md:text-base text-sm tracking-widest " +
                (count === 3 ? "text-white" : "text-indigo-200")
              }
            >
              TITAN
            </button>
          </div>
          <p className="md:text-8xl text-6xl uppercase text-white">{data.destinations[count].name}</p>
          <p
            className="md:text-lg text-sm xl:text-left text-center leading-loose text-indigo-200 xl:w-[480px] md:w-[640px] w-[327px]"
            
          >
            {data.destinations[count].description}
          </p>
          <div className="bg-gray-700 md:w-[444px] w-[327px] h-[1px]"/> 

          <div className="flex xl:flex-col md:flex-row flex-col xl:space-y-3 space-y-6">
          <div className="flex flex-col space-y-3 md:items-start items-center justify-end w-48 h-16">
            <p className="text-sm tracking-widest text-indigo-200 uppercase">
              AVG. DISTANCE
            </p>
            <p className="text-3xl text-white uppercase">
              {data.destinations[count].distance}
            </p>
          </div>

          <div className="flex flex-col space-y-3 md:items-start items-center justify-end w-48 h-16 pr-1">
            <p className="text-sm tracking-widest text-indigo-200 uppercase">
              Est. travel time
            </p>
            <p className="text-3xl text-white uppercase">
              {data.destinations[count].travel}
            </p>
          </div> 
          </div>

        </div>
        {isMobile? <NavbarSM/>: <Navbar />}
        
      </div>
    </>
  );
}

export default Moon
