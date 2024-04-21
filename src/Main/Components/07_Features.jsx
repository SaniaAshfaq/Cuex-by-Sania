import { Text } from "./03_Services";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
function Features()
{
    let path1 = "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z";
    let path2 = "M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z";
    let path3 = "M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z";
    return(
        <>
                <div className="mb-20">
                <Text p = "PMAIN FEATURES" H = "We Care Very Much About Our" H2 = "Customer Satisfaction"/>
                
                {/* This is the div for three cards */}
                <div className="w-full flex justify-center gap-5 flex-wrap sm:flex-col sm:items-center  ">
                    {/* this is the div for singal card element */}
                

                 <FeatureCards path = {path1} viewBox = "0 0 24 24" heading="Secured Payment Services" />
                 <FeatureCards path = {path2} viewBox = "0 0 544 512" heading="Low Cost & Fast Exchange" />
                 <FeatureCards path = {path3} viewBox = "0 0 24 24" heading="Real Time Money Tracking" />
                
                
                
                
                
                
                </div>
                </div>

       
        </>
    )
}


let FeatureCards = (props)=>{
    return(
        <>
          <div className=" w-[27%]  px-4 py-8 border bg-white rounded-lg shadow-lg sm:w-4/5" data-aos="flip-right" >
                    {/* this div is for logo and the circle behind it */}
                  <div className="relative pl-2 ">
                    <svg stroke="currentColor"  style={{fill:"#00A79D"}} stroke-width="0" viewBox={props.viewBox} height="3.2em" width="3.2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d={props.path}></path></svg>
                    <div className="absolute top-7 left-9 w-8 h-8 rounded-full bg-[#00A79D] opacity-20"> </div>

                 
                    </div>
                    <div className="my-3">
                        <h2 className="text-xl font-bold" style={{ fontFamily: "Raleway, sans-serif" , fontWeight:"700"}}>{props.heading}</h2>
                    </div>
                       {/* div for discription inside the card */}

                  <div>
                  <div className="flex ">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-[#00A79D] mr-3 mt-2" />
                     <div>
                     <p className="text-[#666666] text-[15px]">Lorem ipsum dolor sit amet consectetur. Exercitationem ipsa minus velit .</p>
                     </div>
                  </div>

                      {/* div for discription inside the card */}
                      <div className="flex ">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-[#00A79D] mr-3 mt-2" />
                     <div>
                     <p className="text-[#666666] text-[15px]">Lorem ipsum dolor sit amet consectetur. Exercitationem ipsa minus velit .</p>
                     </div>
                  </div>
                  </div>

                  





                    </div>

        </>
    )

}

export default Features;


<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d=""></path></svg>