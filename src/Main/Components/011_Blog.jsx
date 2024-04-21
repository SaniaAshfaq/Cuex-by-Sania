import { Text } from "./03_Services";
import blog1 from '../Images/blog-1.jpg';
import blog2 from '../Images/blog-2.jpg';
import blog3 from '../Images/blog-3.jpg';
import './02_coinAnimate.css';
import { BtnComp } from "./01_Navbar";
function Blog()
{
    return(
        <>
       <div className=" py-8 sm:py-0">
       <Text p = "OUR BLOG" H = "Keep Up To Date With Global" H2 = "Content From Our Trusted Team"/>
       {/* div which hold the bolg cards? */}
       <div className="w-full flex justify-center gap-6 sm:flex-col md:flex-col sm:items-center md:items-center">

         <BlogCards blogimg = {blog1} name="Corporate" heading = "How Exchange Rate Effect Your Bussiness Growth"/>
         <BlogCards blogimg = {blog2} name  = "Consumer" heading = "How to Stop Currency From Being Overwhelmed"/>

         <BlogCards blogimg = {blog3} name = "Finance" heading = "How to Transfer Money With Internation Debit Cards"/>


       </div>



        </div> 
        </>
    )
}

let BlogCards = (props)=>{
    return(
        <>
         <div className="card w-[27%] p-3 shadow-xl flex-col items-center rounded-xl sm:w-4/5 md:w-3/4" data-aos="flip-up">
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
export default Blog;