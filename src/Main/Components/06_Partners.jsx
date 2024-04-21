import partner1 from "../Images/partner-1.png"
import partner2 from "../Images/partner-2.png"
import partner3 from "../Images/partner-3.png"
import partner4 from "../Images/partner-4.png"
import partner5 from "../Images/partner-5.png"
import partner6 from "../Images/partner-6.png"
import './02_coinAnimate.css'
function Partners()
{
    return(
        <>
    
         <div className="parentDiv bg-white w-full  py-20 my-12 overflow-hidden  whitespace-nowrap m-auto relative  grid place-content-center">

         <div className="animateDiv bg-white w-full flex justify-center ">

        <img src={partner1} alt="partnerimg" className="filter grayscale-[100%] hover:grayscale-0 inline-block " />
        <img src={partner2} alt="partnerimg" className="filter grayscale-[100%] hover:grayscale-0 inline-block" />
        <img src={partner3} alt="partnerimg" className="filter grayscale-[100%] hover:grayscale-0 inline-block" />
        <img src={partner4} alt="partnerimg" className="filter grayscale-[100%] hover:grayscale-0 inline-block"/>
        <img src={partner5} alt="partnerimg" className="filter grayscale-[100%] hover:grayscale-0 inline-block" />
        <img src={partner6} alt="partnerimg" className="filter grayscale-[100%] hover:grayscale-0 inline-block"/>
        <img src={partner1} alt="partnerimg" className="filter grayscale-[100%] hover:grayscale-0 inline-block " />



              
        <img src={partner1} alt="partnerimg" className="filter grayscale-[100%] hover:grayscale-0 inline-block " />
        <img src={partner2} alt="partnerimg" className="filter grayscale-[100%] hover:grayscale-0 inline-block" />
        <img src={partner3} alt="partnerimg" className="filter grayscale-[100%] hover:grayscale-0 inline-block" />
        <img src={partner4} alt="partnerimg" className="filter grayscale-[100%] hover:grayscale-0 inline-block"/>
        <img src={partner5} alt="partnerimg" className="filter grayscale-[100%] hover:grayscale-0 inline-block" />
        <img src={partner6} alt="partnerimg" className="filter grayscale-[100%] hover:grayscale-0 inline-block"/>
        <img src={partner1} alt="partnerimg" className="filter grayscale-[100%] hover:grayscale-0 inline-block " />
       



      
    </div>
   
   
         </div>
        </>
    )
}
export default Partners;