
import { Link } from 'react-router-dom';
import './02_coinAnimate.css'
export function Services()

{
    let firstPath = "M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z"
    let secondPath = "M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z";

    let thirdPath = "M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 013.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 013.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z";

    let fourthPath = "M7.38938 16.5386C5.33894 15.0901 4 12.7014 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 12.7014 18.6611 15.0901 16.6106 16.5386L18.6936 21.2996C18.8043 21.5526 18.6889 21.8474 18.4359 21.9581C18.3727 21.9857 18.3045 22 18.2355 22H5.76451C5.48837 22 5.26451 21.7761 5.26451 21.5C5.26451 21.431 5.27878 21.3628 5.30643 21.2996L7.38938 16.5386ZM8.11851 10.9704C8.55217 12.7106 10.1255 14 12 14C13.8745 14 15.4478 12.7106 15.8815 10.9704L13.9407 10.4852C13.7239 11.3553 12.9372 12 12 12C11.0628 12 10.2761 11.3553 10.0593 10.4852L8.11851 10.9704Z"
    return(
        <>
        <div className='py-10 flex flex-col items-center justify-center] sm:py-6'>
           <Text p = "MOST POPULAR CURRENCY TOOLS" H = "Set Up and Exchange Money From" H2 = "  Your Card In a Minute"/>

           <div>
           <div className='flex items-center justify-center gap-5 py-4 my-4 flex-wrap sm:flex-col'>
              <Card path = {firstPath} viewBox = {"0, 0, 544 , 512"} heading = "Money Transfor"
              para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nisi animi adipisci tenesectetur modi, fugiat eatae esse?"
              link = "Send Money ->"/>

              <Card path = {secondPath} viewBox = {"0, 0, 544 , 512"} heading = "Currency Chart"
              para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nisi animi adipisci tenesectetur modi, fugiat eatae esse?"
              link = "View Chart ->"/>
               <Card path = {thirdPath} viewBox = {"0, 0, 24 , 24"} heading = "Rate Alerts"
              para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nisi animi adipisci tenesectetur modi, fugiat eatae esse?"
              link = "Create Alerts ->"/>
               <Card path = {fourthPath} viewBox = {"0, 0, 24, 24"} heading = "Create Account"
              para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nisi animi adipisci tenesectetur modi, fugiat eatae esse?"
              link = "Get Started ->"/>




            </div>
           </div>
        </div>
        </>
    )
}
 export let Text = (props)=>{
    return(
        <div className='flex flex-col justify-center items-center mt-20 mb-8'  style={{ fontFamily: "Raleway, sans-serif"}}>
        <p className='text-[#00A79D] font-semibold '>{props.p}</p>
       <div className='my-3 text-center'>
       <h1 className='text-[2rem] sm:text-3xl -tracking-tight' style={{ fontFamily: "Raleway, sans-serif" , fontWeight:"700"}}>{props.H}</h1>
        <h1 className='text-[2rem] sm:text-3xl' style={{ fontFamily: "Raleway, sans-serif" , fontWeight : "700"}}>{props.H2}</h1>
       </div>
    </div>
    )
}
let Card = (props)=>{
 return(
    <>
    
     <div className='card w-1/5 sm:w-4/5 md:w-2/5 border-2 pl-4 py-4 rounded-lg bg-white z-30 border-l-[#00A79D] '  >
     <div className='svgDiv w-14 h-14 bg-[#00A79D] rounded-full flex items-center justify-center'  >
     <svg className='svgStroke' stroke="white" fill="white" stroke-width="0" viewBox={props.viewBox} height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d={props.path}></path></svg>
     </div>
       <h1 className='text-2xl my-3'  style={{ fontFamily: "Raleway, sans-serif", fontWeight: "800" }}>{props.heading}</h1>
       <p className='text-justify my-2 w-11/12 '>{props.para}</p>
       <Link to = "converter">
        <p className='cardp my-2 text-[#00A79D] font-bold text-md'>{props.link} </p>
       </Link>
      </div>
    


     
    </>
 )
}
