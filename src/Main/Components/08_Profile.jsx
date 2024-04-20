import { Text } from "./03_Services";
import "./02_coinAnimate.css";
import usa from "../Images/usa.png"
import eu from "../Images/eu.png";
import uk from "../Images/uk.png";
import canda from "../Images/canada.png";
import astralia from "../Images/australia.png";
import japan from "../Images/japan.png";
import india from "../Images/india.png";
import newzland from "../Images/newzland.png";
import france from "../Images/france.png";
function Profile()
{
    return(
        <>
        <div className="py-12 md:py-0 sm:py-0">
        <Text p = "CURRENCY PROFILE" H = "Get These Local Account Details" H2 = "Just Like Pay A Local"/>
                {/* main div which will hold all the cards of countries */}

              <div className="flex items-center justify-center">
              <div className=" w-4/5  grid grid-cols-3 grid-rows-3 gap-5 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-1"  >
                    {/* sub div or each indivisula div of countries */}
                  

                    
               
                   <ProfileCards img = {usa} countryName="USD - Us Dollars"/>
                   <ProfileCards img = {eu} countryName="EUR - Euro"/>
                   <ProfileCards img = {uk} countryName="GBP - British Pound"/>
                   <ProfileCards img = {canda} countryName="CAD - Candadian Dollar"/>
                   <ProfileCards img = {astralia} countryName="AUD - Aus Dollar"/>
                   <ProfileCards img = {japan} countryName="JPY - Japaneese Yen"/>
                   <ProfileCards img = {india} countryName="INR - Indian Rupee"/>
                   <ProfileCards img = {newzland} countryName="NZD - NZ Dollar"/>
                   <ProfileCards img = {france} countryName="CHF - Swiss France"/>

                 
                
            

                 </div>
              </div>



        </div>
        </>
    )
}

let ProfileCards = (props)=>{
    return(
        <>
         <div className=" profileCard flex  border bg-white px-4 py-6">
                   <div className="mr-4">
                     <img src={props.img} alt="usa" className="w-[80px] h-[50px] " />
                    </div>
                    <div className="">
                        <h1 className="profileHeading text-xl "  style={{ fontFamily: "Raleway, sans-serif" , fontWeight:"800"}}>{props.countryName}</h1>
                        <p className="profilePara text-[15px]">Adipiscing eliId nque diraam nim etrous porta vierra dolore.</p>
                    </div>

                   </div>
        </>
    )
}
export default Profile;