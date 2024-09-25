import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
// import "./index.css";
import App from "./App";
import Error from "./pages/Error";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
  {
    path: "/React-Portfolio",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "/React-Portfolio/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/React-Portfolio/Contact",
        element: <Contact />,
      },
      {
        path: "/React-Portfolio/Resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
