import { Navbar } from "./Components/01_Navbar";
import Footer from "./Components/012_Footer";
import { Link } from "react-router-dom";
import Image from './/Images/AllPages.jpg';
function ContactUs()
{
    return(
        <>
        <Navbar/>
        <div className="">
        <div className="w-fll h-80 relative" style={{backgroundImage: `url(${Image})`, backgroundPosition:'center', backgroundSize:'cover'}}>
         <div className="w-full h-full absolute bg-black bg-opacity-80 flex items-center justify-center">

        <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl py-2" style={{fontFamily:'Raleway', fontWeight:800}}>Contact Us</h1>
         <div className="flex text-white  font-semibold ">
         <Link to='/' className="pr-2">
            Home
         </Link>

        
        <p className="cursor-pointer text-[#00A79D] px-2">Contact</p>
      
         </div>
         
        </div>
         </div>
       
         </div>
        
        </div>
        {/* contact info cards */}
        <div className="flex flex-col mt-20 ml-20 sm:ml-6">
            {/* uper div content */}
            <div className="w-11/12 flex gap-5 md:flex-col sm:flex-col">
                <div className="flex gap-5 px-6 py-3 w-2/6 md:w-full sm:w-full bg-white shadow-md">
                    <div className="group h-12 w-16 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#00A79D]">
                    <svg stroke="currentColor" fill="#00A77D" className="group-hover:fill-white transition-colors duration-300 ease-in-out" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z"></path></svg>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold my-3">Our Location</h1>
                        <p>342/A Brooklyn St, Milson Avenue, New York, USA</p>
                    </div>
                </div>
                <div className="flex gap-5 px-6 py-3 w-2/6 md:w-full sm:w-full bg-white shadow-md">
                    <div className="group h-12 w-16 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#00A79D]">
                    <svg stroke="currentColor"fill="#00A77D" className="group-hover:fill-white transition-colors duration-300 ease-in-out" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold my-3">E-mail</h1>
                        <p>123@gamil.com  SupportCuex@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-5 px-6 py-3 w-2/6 md:w-full sm:w-full bg-white shadow-md">
                    <div className="group h-12 w-16 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#00A79D]">
                    <svg stroke="currentColor" fill="#00A77D" className="group-hover:fill-white transition-colors duration-300 ease-in-out"stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold my-3">Phone</h1>
                        <p>+92-1234555-22 <br />+92-123098812-24</p>
                    </div>
                </div>
              

            </div>

            <div className="w-11/12 my-6  flex gap-6 sm:flex-col sm:w-[100%]">
                {/* info Div */}
                <div className="w-2/3 bg-white shadow-xl sm:w-11/12" >
                  <div className="pl-16 md:pl-2 sm:pl-2">
                  <div className="">
                  <input type="text" placeholder="Name*" className="border w-5/12 p-2 mr-4 ml-4 mt-4"/>
                  <input type="text" placeholder="Email*" className="border w-5/12 p-2" />
                  </div>
                  <input type="text" placeholder="Phone*" className="border w-5/12 p-2 mr-4 ml-4 mt-2" />
                  <input type="text" placeholder="Subject*" className="border w-5/12 p-2 mt-2" />
                  </div>
                  <textarea name="text"  className="border ml-20 sm:ml-6 md:ml-4 my-4 w-[78%] h-60 md:w-5/6" placeholder="Your Message"></textarea>
                </div>
                 {/* map div */}
             <div className="w-1/3 h-90 bg-white shadow-xl sm:w-11/12 ">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425289.99051355274!2d72.75644339582655!3d33.616250940983974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710666408615!5m2!1sen!2s" className= "w-[100%] h-[100%] " allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
             </div>

            </div>

           
        </div>
        <Footer/>
        </>
    )
}
export default ContactUs;