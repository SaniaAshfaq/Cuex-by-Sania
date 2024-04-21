import Girl from "../Images/About-girl.jpg";
import Money1 from "../Images/About-Money.jpg";
import Money2 from "../Images/About-Money2.jpg";
import Money3 from "../Images/About-Money3.jpg";
import "./02_coinAnimate.css";
import { BtnComp } from "./01_Navbar";
export function About() {
  let firstPath =
    "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z";
  let secondPath =
    "M381.2 64.1c-1.3-.1-2.6-.1-3.9-.1h-.2c-16.2 0-32 5.4-44.6 15.1-1.6 1.3-2.6 3.2-2.7 5.2-.1 2 .8 4 2.3 5.4l89.8 80.5c1.3 1.1 2.9 1.8 4.6 1.8h.4c1.9-.1 3.6-1 4.8-2.4C440.9 159 448 150.8 448 133c.1-36.4-29.1-66.8-66.8-68.9zM64 133c0 17.8 7.1 26 16.3 36.6 1.2 1.4 2.9 2.3 4.8 2.4h.4c1.7 0 3.3-.6 4.6-1.8L180 89.7c1.5-1.4 2.4-3.3 2.3-5.4-.1-2-1-3.9-2.7-5.2C167 69.4 151.2 64 135 64h-.2c-1.3 0-2.6 0-3.9.1-37.7 2.1-67 32.5-66.9 68.9z M390 386c26.2-30.7 42-70.5 42-114 0-97.2-78.8-176-176-176S80 174.8 80 272c0 43.5 15.8 83.3 42 114l-34.7 35.5c-6.2 6.3-6 15.5.3 21.6 3.1 3 7.4 4.8 11.4 4.8 4.2 0 8.1-1.9 11.2-5.1l34.6-34.5c30.3 24.7 69 39.6 111.2 39.6s80.9-14.8 111.2-39.6l33.6 34.5c3.1 3.2 7.3 5.1 11.5 5.1 4 0 8.1-1.8 11.2-4.8 6.3-6.2 7.5-15.3 1.3-21.6L390 386zM270 274c0 7.7-6.3 14-14 14h-82c-7.7 0-14-6.3-14-14s6.3-14 14-14h68V158c0-7.7 6.3-14 14-14s14 6.3 14 14v116z";
  let thirdPath =
    "M10 13c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm8.5-2l1.09-2.41L22 5.5l-2.41-1.09L18.5 2l-1.09 2.41L15 5.5l2.41 1.09L18.5 9zm2.78 3.72L20.5 11l-.78 1.72-1.72.78 1.72.78.78 1.72.78-1.72L23 13.5l-1.72-.78zM16.25 14c0-.12 0-.25-.01-.37l1.94-1.47-2.5-4.33-2.24.94c-.2-.13-.42-.26-.64-.37L12.5 6h-5l-.3 2.41c-.22.11-.43.24-.64.37l-2.24-.95-2.5 4.33 1.94 1.47c-.01.12-.01.25-.01.37s0 .25.01.37l-1.94 1.47 2.5 4.33 2.24-.94c.2.13.42.26.64.37l.3 2.4h5l.3-2.41c.22-.11.43-.23.64-.37l2.24.94 2.5-4.33-1.94-1.47c.01-.11.01-.24.01-.36zm-1.42 3.64l-1.73-.73c-.56.6-1.3 1.04-2.13 1.23L10.73 20H9.27l-.23-1.86c-.83-.19-1.57-.63-2.13-1.23l-1.73.73-.73-1.27 1.49-1.13c-.12-.39-.18-.8-.18-1.23 0-.43.06-.84.18-1.23l-1.49-1.13.73-1.27 1.73.73c.56-.6 1.3-1.04 2.13-1.23L9.27 8h1.47l.23 1.86c.83.19 1.57.63 2.13 1.23l1.73-.73.73 1.27-1.49 1.13c.12.39.18.8.18 1.23 0 .43-.06.84-.18 1.23l1.49 1.13-.73 1.29z";

  return (
    <>
      <div className="flex justify-center w-full bg-[#FAFAFC] py-20 sm:flex-col md:flex-col sm:items-center md:items-center sm:py-4">
        {/* left side div of pictures */}
        <div className="grid grid-cols-2 grid-row-2  w-5/12 sm:w-4/5 md:w-4/5 gap-2 ">
          <div className="" data-aos="fade-up">
            <img src={Girl} alt="" className="rounded-xl" />
          </div>
          <div className="" data-aos="fade-up">
            <img src={Money1} alt="" className=" rounded-xl mt-16" />
          </div>
          <div className="" data-aos="fade-up">
            <img src={Money2} alt="" className="rounded-xl" />
          </div>
          <div className="" data-aos="fade-up">
            <img src={Money3} alt="" className="rounded-xl" />
          </div>
        </div>

        {/* rigth side div for information */}

        <AboutLeftCom
          top="About Us"
          heading="Transofer & Exchange Your Money Any Time In This World"
          para="Best Strategic planning dolor sit amet consectetur adipiscing elit. Scel erus isque ametus odio velit auctor nam elit nulla eget sodales dui pulvinar dolor strategic planning dolor sit sectetur morethe"
          firstPath={firstPath}
          secondPath={secondPath}
          thirdPath={thirdPath}
          viewBox1="0 0 320 512"
          viewBox2="0 0 512 512"
          viewBox3="0 0 24 24"
          firstHeading="Powerful Mobile & Online App"
          secondHeading="Bring More Transperency and Speed"
          thirdHeading="Special For Multiuser Capability"
          btnName="Read More"
          BtnClass=" py-4 mt-4 mb-2 font-semibold px-6"
        />
      </div>
    </>
  );
}

export let Aboutcomp = (props) => {
  return (
    <div className="flex items-center my-4" >
      <div className="About w-20 h-14 bg-[#00A79D4D] rounded-full flex justify-center items-center border-b-4 border-[#00A79D] mr-4  sm:w-24 sm:h-12" data-aos="fade-up">
        <svg
          stroke="[#00A79D]"
          className="About-svg"
          stroke-width="0"
          viewBox={props.viewBox}
          height="1.7em"
          width="1.7em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={props.path}></path>
        </svg>
      </div>
      <div>
        <h1
          className="text-xl my-2"
          style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}
          data-aos="fade-up">
          {props.heading}
        </h1>
        <p className="text-[15px]" style={{ fontFamily: "Roboto, sans-serif", fontWeight: 300 }}
        data-aos="fade-up">
          {props.para}
          
        </p>
      </div>
    </div>
  );
};

export let AboutLeftCom = (props) => {
  return (
    <div className="w-5/12 pl-10  sm:w-11/12 md:w-4/5 sm:pl-3 ">
      <p
        className="text-[#00A79D] text-[15px]"
        style={{ fontFamily: "Roboto, sans-serif", fontWeight: 500 }}
        data-aos="fade-up"  >
        {props.top}
        
      </p>
      <h1
        className="text-4xl my-6 sm:text-3xl"
        style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}
        data-aos="fade-up"  >
        {props.heading}
      </h1>
      <p
        className=""
        style={{ fontFamily: "Roboto, sans-serif", fontWeight: 300 }}
        data-aos="fade-up">
        {props.para}
      </p>
      <div>
        {/* singal element div */}
        <Aboutcomp
          path={props.firstPath}
          viewBox={props.viewBox1}
          heading={props.firstHeading}
          para="Vestibulum ac diam sit amet quam vehicula elemen tum sed sit amet dui praesent sapien pellen tesque"
        />
        <Aboutcomp
          path={props.secondPath}
          viewBox={props.viewBox2}
          heading={props.secondHeading}
          para="Vestibulum ac diam sit amet quam vehicula elemen tum sed sit amet dui praesent sapien pellen tesque"
        />
        <Aboutcomp
          path={props.thirdPath}
          viewBox={props.viewBox3}
          heading={props.thirdHeading}
          para="Vestibulum ac diam sit amet quam vehicula elemen tum sed sit amet dui praesent sapien pellen tesque"
        />

        <ul>
          <BtnComp
            name={props.btnName}
            link="converter"
            btnclass={props.BtnClass}
          />
        </ul>
      </div>
    </div>
  );
};
