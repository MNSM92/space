import React, { useEffect, useState } from "react";


import homeD from "./assets/home/background-home-desktop.jpg";
import homeT from "./assets/home/background-home-tablet.jpg";
import homeM from "./assets/home/background-home-mobile.jpg";

import Navbar from "./Navbar";
import NavbarSM from "./NavbarSM";
import { Link } from "react-router-dom";

function Home() {

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

  const [backG, setBackG] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setBackG(
        window.innerWidth >= 768
          ? window.innerWidth >= 1280
            ? homeD
            : homeT
          : homeM
      );
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize immediately to set the initial value
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <>
      <div className="bg-gray-900 w-full h-full">
        <div className="flex flex-col items-start justify-start xl:w-full xl:h-full md:w-full md:h-full">
          <img
            className="relative xl:h-[900px] md:h-[1024px] w-full"
            src={backG} />

          <Link to="/moon" className="group">
            <div className="inline-flex flex-col space-y-6 items-center justify-start pr-1 absolute opacity-10 group-hover:bg-white rounded-full \
                            xl:w-[450px] xl:h-[450px] xl:left-[825px] xl:top-[407px] \
                            md:w-[350px] md:h-[350px]  md:left-[calc(50%-175px)] md:top-[638px] \
                            w-[210px] h-[210px] left-[calc(50%-105px)] top-[calc(81%-105px)]" />

            <div className="inline-flex flex-col space-y-6 items-center justify-start pr-1 absolute \
                            xl:w-[450px] xl:h-[450px] xl:left-[825px] xl:top-[407px] \
                            md:w-[242px] md:h-[242px] md:left-[calc(50%-121px)] md:top-[692px] \
                            w-[150px] h-[150px] left-[calc(50%-75px)] top-[calc(81%-75px)]">

              <div className="m-0 bg-white rounded-full xl:m-[88px] \
                              xl:w-72 xl:h-72 \
                              md:h-[242px] md:w-[242px] \
                              w-[150px] h-[150px]">

                <p className="relative md:text-3xl text-xl tracking-widest text-gray-900 \
                              xl:top-[109px] xl:left-[70px] \
                              md:top-[105px] md:left-[50px] \
                              top-[60px] left-[27px]">
                  EXPLORE
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-col space-y-6 items-center justify-start pr-1 absolute \
                        xl:w-[450px] md:w-[450px] w-[327px] \
                        xl:h-[382px] md:h-[334px] h-[276px] \
                        xl:left-[12.89%] md:left-[calc(50%-225px)] left-[calc(50%-163.5px)] \
                        xl:top-[43%] md:top-[202px] top-[112px]">

          <p className="xl:text-3xl md:text-xl text-base tracking-widest text-indigo-200">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className="xl:text-9xl text-7xl text-white">SPACE</p>
          <p className="lg:text-lg text-base leading-loose text-center text-indigo-200 md:w-[444px] w-[327px]">
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        {isMobile? <NavbarSM />: <Navbar/>}
        
      </div>
    </>
  );
}

export default Home;
