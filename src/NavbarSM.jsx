import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/shared/logo.svg";
import menu from "./assets/shared/icon-hamburger.svg"


function NavbarSM() {
  const [open, setOpen] = useState(false)

 return (
    <>
      <div
        className="absolute left-6 top-6 w-[40px] h-[40px]"
        
      >
        <div className="w-[40px] h-[40px] absolute left-0 top-0 bg-white rounded-full">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="w-[40px] h-[40px] bg-gray-900 rounded-lg" /> 
      </div>

      <button
        className="absolute right-6 top-8 w-[24px] h-[21px]"
        
      >
        
            <img src={menu} alt="menu" onClick={()=> setOpen(true)}></img>
          </button>

          {open? 
          (<div className="w-64 absolute right-0 top-0">
          <div className="flex flex-col space-y-6 items-start justify-start flex-1 pl-8 pt-8 pb-96 bg-black bg-opacity-80">
              <button className="absolute right-6 top-9" onClick={()=> setOpen(false)} style={{width: 19.09, height: 19.09,}}>
                  <div className="transform -rotate-45 w-6 h-0.5 absolute right-0 top-0 bg-indigo-200"/>
                  <div className="transform rotate-45 w-6 h-0.5 absolute right-0 top-0 bg-indigo-200"/>
              </button>

              <div className="h-8 bg-white"/>

              <Link to="/" onClick={()=>setOpen(false)} className="flex space-x-2.5 items-center justify-end w-16 h-5 pr-0.5">
                  <p className="text-base font-bold tracking-widest text-white">00</p>
                  <p className="text-base tracking-widest text-white">HOME</p>
              </Link>
              <Link to="/moon" onClick={()=>setOpen(false)} className="flex space-x-2.5 items-center justify-end w-32 h-5 pr-0.5">
                  <p className="text-base font-bold tracking-widest text-white">01</p>
                  <p className="text-base tracking-widest text-white">DESTINATION</p>
              </Link>
              <Link to="/crew" onClick={()=>setOpen(false)} className="flex space-x-3.5 items-center justify-end w-16 h-5 pr-0.5">
                  <p className="text-base font-bold tracking-widest text-white">02</p>
                  <p className="text-base tracking-widest text-white">CREW</p>
              </Link>
              <Link to="/vehicle" onClick={()=>setOpen(false)} className="flex space-x-2.5 items-center justify-end w-32 h-5 pr-0.5">
                  <p className="text-base font-bold tracking-widest text-white">03</p>
                  <p className="text-base tracking-widest text-white">TECHNOLOGY</p>
              </Link>
          </div>
      </div>): null}
        
  
    </>
  );
}

export default NavbarSM;
