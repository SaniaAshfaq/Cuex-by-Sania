import { Navbar } from "./Components/01_Navbar";
import Image from './/Images/AllPages.jpg';
import { Link } from "react-router-dom";
import Blog from "./Components/011_Blog";
import Footer from "./Components/012_Footer";
import blog1 from './Images/blog-4.jpg'
import blog2 from './Images/blog-5.jpg';
import blog3 from './Images/blog-6.jpg';
import { BtnComp } from "./Components/01_Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function MainBlog()
{
    return(
        <>
        <Navbar/>
        <div className="">
        <div className="w-fll h-80 relative" style={{backgroundImage: `url(${Image})`, backgroundPosition:'center', backgroundSize:'cover'}}>
         <div className="w-full h-full absolute bg-black bg-opacity-80 flex items-center justify-center">

        <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl py-2" style={{fontFamily:'Raleway', fontWeight:800}}>Blog Page</h1>
         <div className="flex text-white font-semibold ">
         <Link to='/' className="pr-2">
            Home
         </Link>

        
        <p className="cursor-pointer text-[#00A79D] px-2">Blog</p>
      
         </div>
         
        </div>
         </div>
       
         </div>
        
        </div>
       <Blog/>
       <div className="w-full flex justify-center gap-6 sm:flex-col md:flex-col sm:items-center md:items-center">

         <BlogCards blogimg = {blog1} name="Consumer" heading = "How To Stop Country From Being Overwhelmed"/>
         <BlogCards blogimg = {blog2} name  = "Finance" heading = "Effect Of Inlation On Our Daily Expenditure"/>

         <BlogCards blogimg = {blog3} name = "Finance" heading = "7 Tips To Get Best Exchange Rate In Currency"/>


       </div>


         <div className="flex items-center justify-center my-12 gap-5">
         <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer hover:bg-[#00A79D] hover:text-[white] transition-all duration-200 ease-in"> <FontAwesomeIcon icon={faArrowLeft} /></div>  
         <div className="w-12 h-12 rounded-full bg-[#00A79D] shadow-xl flex items-center justify-center text-[white] transition-all duration-200 ease-in "><span>1</span></div>
         <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer hover:bg-[#00A79D] hover:text-[white] transition-all duration-200 ease-in"> <span>2</span></div>
         <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer hover:bg-[#00A79D] hover:text-[white] transition-all duration-200 ease-in"> <span>3</span></div>
            <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer hover:bg-[#00A79D] hover:text-[white] transition-all duration-200 ease-in"><FontAwesomeIcon icon={faArrowRight} /></div>
         </div>

       <Footer/>
        </>
    )
}

let BlogCards = (props)=>{
    return(
        <>
         <div className="card w-[27%] p-3 shadow-xl flex-col items-center rounded-xl sm:w-4/5 md:w-3/4">
            {/* image holder div */}
            <div className="w-full h-60 relative" style={{backgroundImage : `url(${props.blogimg})`, backgroundSize: "cover", backgroundPosition:"center"}}>
          <ul className="absolute bottom-2 right-2 ">
          <BtnComp
                name={props.name}
                link="contact-us"
                btnclass="px-3 py-2"
              />
          </ul>
            </div>
                {/* date and time div */}
            <div className="flex text-sm cardp">
                <div className="flex items-center">
                <svg stroke="currentColor"className="cardp blogsvg"  stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"></path></svg>
            <p>May 22, 2022</p>
                </div>
                <div className="flex items-center ml-4">
                <svg stroke="currentColor" className="cardp blogsvg" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>
                <p>May 22,2022</p>
                </div>
           </div>
            <div className="my-4">
                    <h1 className=" cardp text-2xl"   style={{ fontFamily: "Raleway, sans-serif", fontWeight: "800" }}>{props.heading}</h1>
                </div>
          </div>

        </>
    )
}






export default MainBlog;