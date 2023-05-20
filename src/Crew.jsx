import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import NavbarSM from "./NavbarSM";

import crewD from "./assets/crew/background-crew-desktop.jpg";
import crewT from "./assets/crew/background-crew-tablet.jpg";
import crewM from "./assets/crew/background-crew-mobile.jpg";




import data from "./data.json";
import doglas from "./assets/crew/image-douglas-hurley.png";
import mark from "./assets/crew/image-mark-shuttleworth.png";
import victor from "./assets/crew/image-victor-glover.png";
import ansari from "./assets/crew/image-anousheh-ansari.png"; 

function Crew() {
  const [count, setCount] = useState(0);
  

  const imageMap = {
    [data.crew[0].images.png]: doglas,
    [data.crew[1].images.png]: mark,
    [data.crew[2].images.png]: victor,
    [data.crew[3].images.png]: ansari,
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
          <img className="relative h-auto w-full" src={(window.innerWidth >= 768? window.innerWidth >=  1280? crewD: crewT : crewM)} />

          <div
            className="xl:space-y-6 items-start justify-start pr-1 absolute \
                      xl:w-[568px] xl:h-[712px] xl:left-[735px] xl:top-[198px] \
                      md:w-[456px] md:h-[572px] md:left-[calc(50%-228px)] md:top-[450px] \
                      w-[327px] h-[223px] left-[calc(50%-163.5px)] top-[139px] \
                      overflow-hidden"
            
          >
            {!isMobile? 
                  <img src={imageVariable} alt="crew"/>:
                  <img className="w-44 m-auto" src={imageVariable} alt="crew"/>}
            
          </div>
          

          <div className="flex md:space-x-6 space-x-2 items-center justify-end pr-1 absolute \
                        w-auto xl:h-8 md:h-6 h-5  \
                        xl:left-[166.5px] xl:top-[212px] \
                        md:left-[38.5px] md:top-[136px] \
                        left-[105px] top-[88px]">
              <p className="opacity-25 xl:text-3xl md:text-xl font-bold tracking-widest text-white">02</p>
              <p className="xl:text-3xl md:text-xl tracking-widest text-white uppercase">Meet your crew</p> 
          </div>

          <div
            className="inline-flex flex-col space-y-6 items-center md:justify-start justify-center pr-1 absolute \
                      xl:w-[533px] xl:h-[668px] xl:left-[152px] xl:top-[260px] \
                      md:w-[480px] md:h-[232px] md:left-[calc(50%-240px)] md:top-[180px] \
                      w-[327px] h-[212px] left-[calc(50%-163.5px)] top-[394px]"
            
          > 
            <div className="xl:space-y-16 md:space-y-4 items-start justify-start xl:pl-3 xl:pr-8 xl:pt-2 md:pt-0 pt-10 xl:pb-14"> 
              <p className="opacity-50 xl:text-3xl md:text-2xl text-base xl:text-start text-center text-white uppercase">
                Commander{" "}
              </p>
              <p className="xl:text-5xl md:text-4xl text-2xl text-white xl:text-start text-center uppercase">
                {data.crew[count].name}
              </p>
              <p className="xl:text-lg md:text-base text-sm leading-loose text-indigo-200 xl:text-justify text-center">
                {data.crew[count].bio}
              </p>
               
              <div className={isMobile ? "flex absolute space-x-6 md:ml-36 items-center justify-end w-32 h-4 left-[calc(50%-64px)] top-0" : "flex space-x-6 md:ml-36 items-center justify-end w-32 h-4"}>
              
                <button
                  onClick={() => setCount(0)}
                  className={
                    count === 0
                      ? "w-6 h-full bg-white rounded-full"
                      : "opacity-20 hover:opacity-50 w-6 h-full bg-white rounded-full"
                  }
                />
                <button
                  onClick={() => setCount(1)}
                  className={
                    count === 1
                      ? "w-6 h-full bg-white rounded-full"
                      : "opacity-20 hover:opacity-50 w-6 h-full bg-white rounded-full"
                  }
                />
                <button
                  onClick={() => setCount(2)}
                  className={
                    count === 2
                      ? "w-6 h-full bg-white rounded-full"
                      : "opacity-20 hover:opacity-50 w-6 h-full bg-white rounded-full"
                  }
                />
                <button
                  onClick={() => setCount(3)}
                  className={
                    count === 3
                      ? "w-6 h-full bg-white rounded-full"
                      : "opacity-20 hover:opacity-50 w-6 h-full bg-white rounded-full"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {(isMobile)? <NavbarSM />: <Navbar/>}
      </div>
    </>
  );
}

export default Crew;
