import { Text } from "./03_Services";
import client1 from "../Images/client-1.jpg"
import client2 from "../Images/client-2.jpg"
import client3 from "../Images/client-3.jpg"
import client4 from "../Images/client-4.jpg"
import client5 from "../Images/client-5.jpg"
import "./02_coinAnimate.css";
function Reviews()
{ return(
    <>
    <div className="my-16 r">
    <Text p = "OUR REVIEWS" H = "More Than 20,000+ Happy" H2 = "Customer Trust Our Services"/>
        <div className="flex justify-center">
            {/* all cards holder div */}
            <div className=" cardHolder w-full gap-10  my-12 overflow-hidden  whitespace-nowrap">
                 {/* single card holder div */}
                  <ReviewCards img = {client1} name = "Jim Morison"/>
                 <ReviewCards img = {client2} name = "Chris Haris"/> 
                 <ReviewCards img = {client3} name = "Thomas Gerge"/>
                 <ReviewCards img = {client4} name = "Alex Cruis"/>
                 <ReviewCards img = {client5} name = "Tom Chris"/>
            </div>
            
             
        </div>
    </div>
    </>
   ) 
}
let ReviewCards = (props)=>{
    return(
        <>
        
        <div className="card09 w-[380px]  bg-white py-6 rounded-xl  shadow-md p-4 hover:cursor-grab z-10  inline-block ml-12 sm:w-[300px]" >
                {/* top section of the card */}
                  <div className="flex justify-between items-center mx-2  ">
                  <div className="flex my-3  items-center  " >
                    <img src= {props.img} alt="client" className="w-16 h-16 rounded-full" />
                    <div>
                        <h1 className="para09 text-xl"  style={{ fontFamily: "Raleway, sans-serif" , fontWeight:"800"}}>{props.name}</h1>
                        <p className="para09 text-[#666666]">Digital Marketer</p>
                    </div>
                </div>
                <svg stroke="pink"  style={{fill: "#00a79d", opacity: 0.4 , marginLeft: "10px"}} stroke-width="0" viewBox="0 0 512 512" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>


                  </div>

                {/* bottom section of the card */}

                <div className="my-4">
                    <p className="para09 text-[#666666] text-[15px] whitespace-normal " style={{wordSpacing : "5px"}}>Lorem ipsum dolor sit amet adip elitions repellat tetur delni vel quam aliq earum explibo dolor eme fugiat enim illumon.</p>
                </div>

            </div>
            
        </>
    )
}
export default Reviews;