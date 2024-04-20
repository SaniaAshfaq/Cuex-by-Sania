

// import Main from './Main/01_Main';
import Home from './Main/Home';
import AboutUs from './Main/AboutUs'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Converter from './Main/Converter';
import MainBlog from './Main/MainBlog';
import ContactUs from './Main/ContactUs';
function App() {
  let allroutes =  createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
  {
    path:'/About-us',
    element:<AboutUs/>
  },
  {
    path: '/converter',
    element:<Converter/>
  },
  {
    path:'/blog',
    element:<MainBlog/>
  },
  {
    path:'//contact-us',
    element:<ContactUs/>
  }
   ])
  return (
   <>
    <RouterProvider router={allroutes}/>
   </>
  );
}

export default App;
