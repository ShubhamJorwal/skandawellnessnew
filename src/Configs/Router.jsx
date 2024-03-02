import { createBrowserRouter } from "react-router-dom";
import Notfoundpage from "./notfound/404Notfound";
import Home from "../Views/Home/Home";





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
  // {
  //   path: "/contact-us",
  //   element: <ContactUs />,
  // },

  
]);

export default router;
