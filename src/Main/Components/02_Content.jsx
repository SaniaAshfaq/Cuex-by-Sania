import coin from "../Images/coin.png";
import { BtnComp } from "./01_Navbar";
import hero from "../Images/hero-img.png";
import { useEffect , useState } from "react";
import './02_coinAnimate.css';



function Content() {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

  }, []);
  return (
    <>
      <div className="flex bg-[#FCFCFA] justify-center items-center py-8  md:flex-col sm:flex-col">
        {/* left side of the content */}
        <div className=" w-1/3 md:w-4/5 sm:w-4/5" style={{ fontFamily: "Roboto, sans-serif" }}>
          <div className={`coin-container z-0  ${animate ? 'animate' : ''}`}>
            <img src={coin} alt="coin" className="coin" />
          </div>

          <div>
            <p className="text-[#00A79D] my-2">FAST AND HASTEL FREE</p>
          </div>
          <div className="my-3">
            <h1
              className="text-4xl"
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: "800" }}
            >
              The Most Powerful Money Exchange Services in the World
            </h1>
          </div>
          <div>
            <p className="text-[#666666] text-sm">
              it is a long established fact that a reader will be distracted by
              the reale he point of using Lorem Ipsum is that it has a more or
              less normal valid equity
            </p>
          </div>

          <div>
            <ul className="my-4">
              <BtnComp
                name="Contact us"
                link="contact-us"
                btnclass="px-6 py-4 font-semibold"
              />
            </ul>
          </div>
        </div>

        {/* right side of the content */}
        <div className="relative w-1/2  mt-6 md:w-full sm:w-full">
          {/* container holding whole the data */}
          <div className="flex justify-between md:justify-center sm:justify-center ">
            {/* this is the form container */}
            <div className="">
              <div className="p-8  rounded-md py-8 absolute bg-white w-1/2 top-12 left-7 shadow-lg  md:relative md:w-full md:py-12 md:px-14 sm:static sm:w-full ">
                <div>
                  <h1
                    className="text-xl font-semibold"
                    style={{
                      fontFamily: "Raleway, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Currency Converter
                  </h1>
                </div>
                <div>
                  <label htmlFor="input-field">I'd like to Convert</label>
                  <div>
                    <input
                      type="number"
                      className="border-2 w-full p-3 mb-2 rounded-md focus:border-[#00A79D] outline-none"
                      placeholder="$10"

                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="mySelect">Convert From</label>
                  <div>
                    <select id="mySelect" className="border-2 rounded-md w-full p-3 mb-2 focus:border-[#00A79D] outline-none">
                      <option value="">USD</option>
                      <option value="option1">CAD</option>
                      <option value="option2">PKR</option>
                      <option value="option3">INR</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mySelect">Convert To</label>
                  <div>
                    <select id="mySelect" className="border-2 rounded-md w-full p-3 mb-2 focus:border-[#00A79D] outline-none">
                    <option value="">USD</option>
                      <option value="option1">CAD</option>
                      <option value="option2">PKR</option>
                      <option value="option3">INR</option>
                    </select>
                  </div>
                </div>
                <div className="mt-2">
                  <ul>
                    <BtnComp
                      name="Convert Now"
                      link="converter"
                      btnclass="w-full py-3 mt-2 mb-2 font-semibold"
                    />
                  </ul>
                </div>
              </div>
            </div>
            {/* image of the hero on the website */}
            <div  data-aos="fade-left"
              className="sm:hidden"
              style={{
                backgroundImage: `url(${hero})`,
                backgroundSize: "cover",
                width: "350px",
                height: "500px",
                backgroundColor: "#00A79D",
                borderTopLeftRadius: "15%",
                borderTopRightRadius: "15%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Content;
