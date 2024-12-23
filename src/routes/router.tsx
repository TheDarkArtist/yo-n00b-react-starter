import App from "../App";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "@/pages/error-page";
import AboutPage from "@/pages/about-page";
import ContactPage from "@/pages/contact-page";
import HomePage from "@/pages/home-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
