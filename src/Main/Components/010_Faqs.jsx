import appStore from '../Images/app-store.png';
import playstore from '../Images/play-store.png';
import appscreen from '../Images/app-screen.png';
function Faqs()
{
    return(
        <>
        <div className='flex justify-between  my-20 sm:flex-col md:flex-col sm:items-center md:items-center  '>
            {/* left side div */}
            <div className='w-1/2 flex justify-center sm:w-4/5 md:4/5 '>
                <img src={appscreen} alt="appScreen" />
            </div >
            {/* right side main div */}
            <div className='w-1/2 sm:w-4/5 md:w-4/5 sm:mt-4 '>
            <div className='w-11/12 sm:w-full md:w-full'>
            <p className='text-[#00A79D] font-semibold my-2' style={{letterSpacing: "2px"}}>OUR APP</p>
            <h1 className='text-4xl my-6 sm:text-3xl' style={{ fontFamily: "Raleway, sans-serif", fontWeight: "800" }}>Let's Answer Some of Your Questions or Download Our App</h1>
            <p className='text-[#666666] text-[15px] w-11/12 sm:w-full'>In our dolore with people who are important to you, conversations that bring you to closer to each other and those who enjoy our dishes. Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam malesuada eros nec luctus laoreet. Fusce sodales consequat velit eget dictum. Integer ornare magna.</p>
            <h2 className='text-2xl my-6'  style={{ fontFamily: "Raleway, sans-serif", fontWeight: "700" }}> Over 70 Million Downloads Worldwide</h2>
            <div className='flex gap-5 my-4 sm:flex-col'>
                <img src={appStore} alt="appstore" />
                <img src={playstore} alt="PlayStore" />
            </div>
            </div>
            
            </div>
        </div>
        </>
    )
}

export default Faqs;