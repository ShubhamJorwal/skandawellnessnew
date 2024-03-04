import { createBrowserRouter } from "react-router-dom";
import Notfoundpage from "./notfound/404Notfound";
import Home from "../Views/Home/Home";
import ContactUs from "../Views/ExtraPages/ContactUs";
import CareerPage from "../Views/ExtraPages/CareerPage";
import Blogs from "../Views/ExtraPages/Blogs";
import AboutUs from "../Views/ExtraPages/AboutUs";
import Services from "../Views/Services/Services";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Notfoundpage />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/career",
    element: <CareerPage />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    element: <Services />,
  },

  
]);

export default router;
