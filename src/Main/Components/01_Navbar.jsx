import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import navIcon from "../Images/nav-icon.png";
import { useState } from "react";
export function Navbar() {
  let [activeLink, setActiveLink] = useState(null);
  let[Navbar ,setNavbar] = useState(false);
  let handleClick = (index) => {
    setActiveLink(index);
    
  };
//  function for showing the navbar and than hidding also
  let showNav = ()=>{
      setNavbar(!Navbar);
  }

  return (
    <>
    <div className="relative bg-white">
      {/* main navbar shows on the screen */}
      <div className="flex items-center justify-between border p-4 sm:p-0">
        <div className="xl:ml-24 ml-4 ">
          <img src={logo} alt="logo" />
        </div>
        <div className="xl:mr-24 mr-4 ">
          <ul
            className=" font-semibold sm:hidden md:hidden"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <li className="float-left pl-10 py-4 ">
              <Link
                to="/"
                onClick={() => handleClick(0)}
                className={
                  activeLink === 0
                    ? "hover:text-[#00A79D] text-[#00A79D]"
                    : "hover:text-[#00A79D]"
                }
               
              >
                Home{" "}
              </Link>
            </li>
            <li className="float-left pl-10 py-4">
              <Link
                to="/About-us"
                onClick={() => handleClick(1)}
                className={
                  activeLink === 1
                    ? "hover:text-[#00A79D] text-[#00A79D]"
                    : "hover:text-[#00A79D]"
                }
               
              >
                About Us{" "}
              </Link>
            </li>
            <li className="float-left pl-10 py-4">
              <Link
                to="/converter"
                onClick={() => handleClick(2)}
                className={
                  activeLink === 2
                    ? "hover:text-[#00A79D] text-[#00A79D]"
                    : "hover:text-[#00A79D]"
                }
                
              >
                Converter{" "}
              </Link>
            </li>
            <li className="float-left pl-10 py-4">
              <Link
                to="/blog"
                onClick={() => handleClick(3)}
                className={
                  activeLink === 3
                    ? "hover:text-[#00A79D] text-[#00A79D]"
                    : "hover:text-[#00A79D]"
                }
             
              >
                Blog
              </Link>
            </li>
            <li className="float-left pl-10 py-4">
              <Link
                to="/contact-us"
                onClick={() => handleClick(4)}
                className={
                  activeLink === 4
                    ? "hover:text-[#00A79D] text-[#00A79D]"
                    : "hover:text-[#00A79D]"
                }
                
              >
                Contact Us
              </Link>
            </li>
          
           <BtnComp name="GET THE APP" link = "" class="float-left pl-10 sm:hidden md:hidden" btnclass ="px-6 py-4"/>
        
          </ul>
          {/* image of the responsive icon */}
          <ul>
          <li className="float-left my-4 bg-[#00A79D] w-12 h-12 sm:h-10 sm:w-10 rounded-full flex items-center justify-center lg:hidden xl:hidden" ><img src={navIcon} alt="navIcon" className="w-12 h-10 sm:h-8 sm:w-8"  onClick={showNav}/></li>
          </ul>
        </div>
      </div>
        
        {/* extra container for the responsive navbar elements  */}
     <div className="flex justify-center">
     <ul
            className={`font-semibold text-center w-4/5 border shadow-lg p-4 absolute bg-white z-20 ${Navbar ? "top-[100%] transition-top duration-1000 ease-in-out": "top-[-300%] transition-top duration-1000 ease-in-out" } `} 
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <li className=" my-2">
              <Link
                to="/"
                className={
                  activeLink === 0
                    ? "hover:text-[#00A79D] text-[#00A79D]"
                    : "hover:text-[#00A79D]"
                }
                onClick={() => handleClick(0)}
              >
                Home{" "}
              </Link>
            </li>
            <li className=" my-2">
              <Link
                to="/About-us"
                className={
                  activeLink === 1
                    ? "hover:text-[#00A79D] text-[#00A79D]"
                    : "hover:text-[#00A79D]"
                }
                onClick={() => handleClick(1)}
              >
                About Us
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/converter"
                className={
                  activeLink === 2
                    ? "hover:text-[#00A79D] text-[#00A79D]"
                    : "hover:text-[#00A79D]"
                }
                onClick={() => handleClick(2)}
              >
                Converter
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/blog"
                className={
                  activeLink === 3
                    ? "hover:text-[#00A79D] text-[#00A79D]"
                    : "hover:text-[#00A79D]"
                }
                onClick={() => handleClick(3)}
              >
                Blog
              </Link>
            </li>
            <li className="my-2">
              <Link
                to="/contact-us"
                className={
                  activeLink === 4
                    ? "hover:text-[#00A79D] text-[#00A79D]"
                    : "hover:text-[#00A79D]"
                }
                onClick={() => handleClick(4)}
              >
                Contact Us
              </Link>
            </li>
          
        
          </ul>
     </div>
     </div>
    </>
  );
}

export let BtnComp = (props)=>{
 return(
  <>
   <li className={props.class}>
  <Link to={props.link} className="hover:text-[#00A79D] ">
    <button
      className={`btn bg-[#00A79D] text-[white] ${props.btnclass} rounded-md hover:bg-black hover:bg-gradient-to-tl from-transparent to-black` }
      style={{ transition: "background-color 1s ease" }} onClick={props.onClick}
    >
      {props.name}
    </button>
  </Link>
</li>
  </>
 )
}

// export default Navbar;
