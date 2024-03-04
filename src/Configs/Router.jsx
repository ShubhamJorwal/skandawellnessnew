import { createBrowserRouter } from "react-router-dom";
import Notfoundpage from "./notfound/404Notfound";
import Home from "../Views/Home/Home";
import ContactUs from "../Views/ExtraPages/ContactUs";
import CareerPage from "../Views/ExtraPages/CareerPage";
import Blogs from "../Views/ExtraPages/Blogs";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Notfoundpage />,
  },
  // {
  //   path: "/about-us",
  //   element: <About />,
  // },
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

  
]);

export default router;
