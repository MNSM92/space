import { Link } from "react-router-dom";
import logo from "./assets/shared/logo.svg"; 
import { useLocation } from "react-router-dom";

function Navbar() {
  const param = useLocation().pathname;

  const imageMap = {
    "/": 0,
    "/moon": 1,
    "/crew": 2,
    "/vehicle": 3,
  };

  const imageVariable = imageMap[param];

  return (
    <>
      <div
        className="flex md:flex-row md:justify-between items-center absolute w-[95%] left-[5%] xl:top-[40px] md:top-0"
        
      >
        <div className="relative md:w-[48px] md:h-[48px]">
          <div className="md:w-[48px] md:h-[48px] absolute right-0 bottom-0 bg-white rounded-full">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="md:w-[48px] md:h-[48px] bg-gray-900 rounded-lg" />
        </div>
        <div
          className="opacity-25 bg-white"
          style={{ width: 473, height: 1 }}
        />
        <div className="flex items-center justify-end md:pl-2 pt-10 pb-9 bg-white bg-opacity-5 xl:w-[830px] md:w-[450px] h-[96px]">
          <div className="flex lg:space-x-12 md:space-x-6 items-center justify-end h-[19px] md:w-full">
            <div
              className={
                "flex space-x-3 items-center justify-start w-auto h-[86px] pr-0.5 " +
                (imageVariable === 0 ? "border-b-4" : "hover:border-b-2")
              }
            >
              <Link to="/" className="flex">
                <p className="xl:text-base md:text-sm lg:mr-4 md:mr-2 font-bold xl:tracking-widest md:tracking-tighter text-white">
                  00
                </p>
                <p className="xl:text-base md:text-sm xl:tracking-widest md:tracking-tighter text-white">
                  HOME
                </p>
              </Link>
            </div>
            <div
              className={
                "flex space-x-3 items-center justify-start w-auto h-[86px] pr-0.5 " +
                (imageVariable === 1 ? "border-b-4" : "hover:border-b-2")
              }
            >
              <Link to="/moon" className="flex">
                <p className="xl:text-base md:text-sm lg:mr-4 md:mr-2 font-bold xl:tracking-widest md:tracking-tighter text-white">
                  01
                </p>
                <p className="xl:text-base md:text-sm xl:tracking-widest md:tracking-tighter text-white">
                  DESTINATION
                </p>
              </Link>
            </div>
            <div
              className={
                "flex space-x-3 items-center justify-start w-auto h-[86px] pr-0.5 " +
                (imageVariable === 2 ? "border-b-4" : "hover:border-b-2")
              }
            >
              <Link to="/crew" className="flex">
                <p className="xl:text-base md:text-sm lg:mr-4 md:mr-2 font-bold xl:tracking-widest md:tracking-tighter text-white">
                  02
                </p>
                <p className="xl:text-base md:text-sm xl:tracking-widest md:tracking-tighter text-white">
                  CREW
                </p>
              </Link>
            </div>

            <div
              className={
                "flex space-x-3 items-center justify-start w-auto h-[86px] pr-0.5 " +
                (imageVariable === 3 ? "border-b-4" : "hover:border-b-2")
              }
            >
              <Link to="/vehicle" className="flex">
                <p className="xl:text-base md:text-sm lg:mr-4 md:mr-2 font-bold xl:tracking-widest md:tracking-tighter text-white">
                  03
                </p>
                <p className="xl:text-base md:text-sm xl:tracking-widest md:tracking-tighter text-white">
                  TECHNOLOGY
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
