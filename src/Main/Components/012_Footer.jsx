import logo from "../Images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {faLocationDot , faEnvelope ,faPhone} from "@fortawesome/free-solid-svg-icons"
function Footer() {
  return (
    <>
      {/* main div which will hold all the data */}
      <div className="w-full bg-black flex pt-10 items-center justify-center mt-10 ">
        <div className="py-16  text-white w-11/12 justify-around border-b border-white ">
          {/* submain which hold all the flex data */}
          <div className="flex justify-around sm:flex-col md:flex-col">
            {/* first line div */}
            <div className="w-1/4 sm:w-2/3 md:w-2/3" data-aos="fade-up">
              <img src={logo} alt="logoImage " className="mb-2" />
              <p className="text-[#666666] text-[15px] my-6" data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                magnam ipsa ducimus temporibus amet quasi nisi. A porro adipis.
              </p>
              <div className="flex mt-3 gap-2">
                <div className="w-10 h-10 rounded-full bg-white text-[#00A79D] flex items-center justify-center  cursor-pointer hover:text-white hover:bg-[#00A79D] transition-colors duration-1000">
                  <FontAwesomeIcon icon={faFacebookF} className="" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-[#00A79D] flex items-center justify-center cursor-pointer hover:text-white hover:bg-[#00A79D] transition-colors duration-1000 ">
                  <FontAwesomeIcon icon={faTwitter} className="" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-[#00A79D] flex items-center justify-center cursor-pointer hover:text-white hover:bg-[#00A79D] transition-colors duration-1000 ">
                  <FontAwesomeIcon icon={faInstagram} className="" />
                </div>

                <div className="w-10 h-10 rounded-full bg-white text-[#00A79D] flex items-center justify-center cursor-pointer hover:text-white hover:bg-[#00A79D] transition-colors duration-1000">
                  <FontAwesomeIcon icon={faLinkedinIn} className="" />
                </div>
              </div>
            </div>
            {/* second line div? */}
            <div className="flex gap-20" >
              <BlogLinks topName="Company" first="About Us" second = "New and Blog" third = "Our Team" four = "converter" five="Exchange Rate"/>
              <BlogLinks topName="Resorces" first="Contact Us" second = "FAQ" third = "Download App" four="privacy policy" five = "Term and Conditions" />
            </div>

            <BlogLinks topName="Transfor Money" first="Register/login" second = "Currency Chart" third = "USA money transfor" four = "India Money Transfor" five = "UK Money Tranfor"/>

            <div className="sm:w-1/2 md:w-1/2" data-aos="fade-up">
            <h1 className="text-xl pb-4 relative" style={{ fontFamily: "Raleway, sans-serif", fontWeight: "800"}}>
          Contact Us
    <span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-teal-600"></span>
    <span className="absolute bottom-0 left-1/4 w-2/5 h-0.5 bg-gray-600"></span>
</h1>
              <div>
             <div className="flex items-center">
             <FontAwesomeIcon icon={faLocationDot} className="text-[#00A79D] "/>
                <h2 className="pl-2 py-2 text-[20px] " style={{ fontFamily: "Raleway, sans-serif", fontWeight: "500"}}>Location</h2>
             </div>
                <p className="text-[#666666]">2764 Sunrise Street mastarg USA</p>
              </div>
             
             <div className="flex items-center" >
             <FontAwesomeIcon icon={faEnvelope} className="text-[#00A79D]"/>
                <h2 className="pl-2 py-2 text-[20px] " style={{ fontFamily: "Raleway, sans-serif", fontWeight: "500"}}>Email</h2>
             </div>
                <p className="text-[#666666]">Hello@gamil.com</p>
             
              <div>
           <div className="flex items-center">
           <FontAwesomeIcon icon={faPhone} className="text-[#00A79D]"/>
                <h2 className="pl-2 py-2 text-[20px]" style={{ fontFamily: "Raleway, sans-serif", fontWeight: "500"}}>Phone</h2>
           </div>
                <p className="text-[#666666]">+123-545-23</p>
              </div>
            </div>
          </div>
        </div>
       
    
      </div>

      <div className="flex items-center justify-center text-white bg-black py-2" >
        <p className="text-white bg-black"> ©Cuex. Cloned by <span className="text-[#00A79D]">Sania Ashfaq</span></p>
      </div>
    </>
  );
}

let BlogLinks = (props) => {
  return (
    <>
      <div className="">
      <h1 className="text-xl pb-4 relative sm:w-1/2 md:w-1/2" style={{ fontFamily: "Raleway, sans-serif", fontWeight: "800"}} data-aos="fade-up">
   {props.topName}
    <span className="absolute bottom-0 left-0 w-1/4  h-0.5 bg-teal-600"></span>
    <span className="absolute bottom-0 left-1/4 w-3/4  h-0.5 bg-gray-600"></span>
</h1>



        <ul className="text-[#666666] text-[15px] mt-4 sm:w-1/2 md:w-1/4" data-aos="fade-up">
        <li className="py-2 relative group hover:text-[#00A79D] hover:cursor-pointer">
  {props.first}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:w-full group-hover:bg-teal-600 transition-all duration-5000"></span>
</li>
<li className="py-2 relative group hover:text-[#00A79D] hover:cursor-pointer">
{props.second}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:w-full group-hover:bg-teal-600 transition-all duration-1000"></span>
</li>
<li className="py-2 relative group hover:text-[#00A79D] hover:cursor-pointer">
{props.third}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:w-full group-hover:bg-teal-600 transition-all duration-1000"></span>
</li>
<li className="py-2 relative group hover:text-[#00A79D] hover:cursor-pointer">
{props.four}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:w-full group-hover:bg-teal-600 transition-all duration-1000"></span>
</li>
<li className="py-2 relative group hover:text-[#00A79D] hover:cursor-pointer">
{props.five}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-transparent group-hover:w-full group-hover:bg-teal-600 transition-all duration-1000"></span>
</li>

        

        </ul>
      </div>
    </>
  );
};
export default Footer;
