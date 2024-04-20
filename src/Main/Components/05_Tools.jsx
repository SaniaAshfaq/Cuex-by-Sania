import { AboutLeftCom } from "./04_AboutUs";
import girl from "../Images/Tools-girl.jpg";
import money1 from "../Images/Tools-money1.jpg";
import money2 from "../Images/Tools-money2.jpg";

function Tools() {
  return (
    <>
      <div className="flex justify-around my-20 items-center sm:flex-col sm:my-0 md:flex-col">
        <AboutLeftCom
          top="CUEX CURRENCY TOOLS"
          heading="We Provide Currency Exchange Services World Wide"
          para="Best Strategic planning dolor sit amet consectetur adipiscing elit. Scel erus isque ametus odio velit auctor nam elit nulla eget sodales dui pulvinar dolor strategic planning dolor sit sectetur morethe."
          firstPath="M14.1 27.2l7.1 7.2 16.7-16.8"
          secondPath="M14.1 27.2l7.1 7.2 16.7-16.8"
          thirdPath="M14.1 27.2l7.1 7.2 16.7-16.8"
          viewBox1="0 0 40 40"
          viewBox2="0 0 40 40"
          viewBox3="0 0 40 40"
          firstHeading="Historical Currency Rates"
          secondHeading="Travel Expence Calculator"
          thirdHeading="Currency Email Update"
        />

        <div className="grid w-5/12 grid-cols-2 grid-rows-2  gap-4 sm:w-4/5 md:w-4/5">
          <div className="row-span-2 ">
            <img src={girl} alt="girl" className="rounded-xl mt-4 sm:mt-10" />
          </div>
          <div className="">
            <img src={money1} alt="money1" className="rounded-xl mt-20" />
          </div>
          <div className="">
            <img src={money2} alt="money2" className="rounded-xl " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
