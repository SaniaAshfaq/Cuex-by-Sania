import { Navbar } from "./Components/01_Navbar";
import { Link } from "react-router-dom";
import Image from ".//Images/AllPages.jpg";
import { Text } from "./Components/03_Services";
import { BtnComp } from "./Components/01_Navbar";
import { Services } from "./Components/03_Services";
import Partners from "./Components/06_Partners";
import Profile from "./Components/08_Profile";
import Footer from "./Components/012_Footer";
import { useEffect } from "react";
import { useState } from "react";

function Converter() {
  const [data, setData] = useState();
  let [results, setResults] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://www.floatrates.com/daily/rub.json"
        );
        let convert = await response.json();
        setData(convert);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  let numValue;
  let ConvertedData = (e) => {
    console.log(e.target.value);
    numValue = parseFloat(e.target.value);
    console.log(typeof numValue);
  };
  console.log(data);

  let currencyCodes = [];
  let firstExchangeValue = [];
  let secondExchangeValue = [];

  // Iterate over the object and extract the currency codes
  for (const currencyKey in data) {
    if (data.hasOwnProperty(currencyKey)) {
      // Extract the code attribute of each currency and push it to the currencyCodes array
      currencyCodes.push(data[currencyKey].code);
      firstExchangeValue.push(data[currencyKey].rate);
      secondExchangeValue.push(data[currencyKey].rate);
    }
  }

  // Now, the currencyCodes array contains all the currency codes
  // console.log(currencyCodes);

  // function for getting the value of Exchange rate of first option
  let FirstExchangeRate;
  let SecondExchangeRate;
  let GetOption = (event) => {
    let singleValue = event.target.value.toLowerCase();

    FirstExchangeRate = data[singleValue].rate;
    console.log(FirstExchangeRate);
  };
  // function for getting the value of exchangeRate of second Option
  let GetOption2 = (event) => {
    let singleValue = event.target.value.toLowerCase();

    SecondExchangeRate = data[singleValue].rate;
    console.log(SecondExchangeRate);
  };

  //conversion of money

  let ConvertedMoney = () => {
    console.log(numValue);
    if (isNaN(numValue)) {
      alert("Enter the Money please....");
    }
    setResults(numValue * (SecondExchangeRate / FirstExchangeRate).toFixed(3));
    console.log(results);
  };

  return (
    <>
      <Navbar />

      <div className="">
        <div
          className="w-fll h-80 relative"
          style={{
            backgroundImage: `url(${Image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full absolute bg-black bg-opacity-80 flex items-center justify-center">
            <div className="">
              <h1
                className="text-white text-4xl py-2"
                style={{ fontFamily: "Raleway", fontWeight: 800 }}
              >
                Currency Converter
              </h1>
              <div className="flex text-white pl-28  font-semibold ">
                <Link to="/" className="pr-2">
                  Home
                </Link>

                <p className="cursor-pointer text-[#00A79D] px-2">Currency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:">
        <Text
          p="CURRENCY CONVERTER"
          H="The Relaible, Cheap,  & Fastest"
          H2="Way To Send Money Abroad"
        />
      </div>
      {/* main converter */}
      <div className="flex items-center justify-center">
        <div className="p-8  rounded-md py-8  bg-white w-2/5 shadow-lg  md:relative md:w-4/5 md:py-12 md:px-14 sm:static sm:w-full ">
          <div className="">
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
                onChange={ConvertedData}
                type="number"
                className="border-2 w-full p-3 mb-2 rounded-md focus:border-[#00A79D] outline-none"
                placeholder="$10"
              />
            </div>
          </div>
          <div>
            <label htmlFor="mySelect">Convert From</label>
            <div>
              <select
                id="mySelect"
                className="border-2 rounded-md w-full p-3 mb-2 focus:border-[#00A79D] outline-none"
                onChange={GetOption}
              >
                {currencyCodes.map((value, key) => {
                  return (
                    <option value={value} key={key}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="mySelect">Convert To</label>
            <div>
              <select
                id="mySelect"
                className="border-2 rounded-md w-full p-3 mb-2 focus:border-[#00A79D] outline-none"
                onChange={GetOption2}
              >
                {currencyCodes.map((value, key) => {
                  return (
                    <option value={value} key={key}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="py-4">Total Amount:{results}</div>
          <div className="mt-2">
            <ul>
              <BtnComp
                name="Convert Now"
                link=""
                btnclass="w-full py-3 mt-2 mb-2 font-semibold"
                onClick={ConvertedMoney}
              />
            </ul>
          </div>
        </div>
      </div>
      <Services />
      <Partners />
      <Profile />
      <Footer />
    </>
  );
}
export default Converter;
