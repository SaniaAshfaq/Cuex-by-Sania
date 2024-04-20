 import {Navbar} from "./Components/01_Navbar";
 import Content from "./Components/02_Content";
 import {Services} from "./Components/03_Services";
 import {About} from "./Components/04_AboutUs";
 import Tools from "./Components/05_Tools";
 import Partners from "./Components/06_Partners";
 import Features from "./Components/07_Features";
 import Profile from "./Components/08_Profile";
 import Reviews from "./Components/09_Reviews";
 import Faqs from "./Components/010_Faqs";
 import Blog from "./Components/011_Blog";
import Footer from "./Components/012_Footer";
 function Home()
 {
    return(
        <>
        <div >
        <Navbar/>
         <Content/>
         <Services/>
         <About/>
         <Tools/>
         <Partners/>
         <Features/>
         <Profile/>
         <Reviews/>
         <Faqs/>
         <Blog/>
         <Footer/>
        </div>
       
        </>
    )
 }
 export default Home;