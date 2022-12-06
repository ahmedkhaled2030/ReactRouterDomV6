import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Faq from "./routes/Faq.jsx";
import Contact from "./routes/Conatct";
import Index from "./routes/Index";
import ErrorPage from "./routes/ErrorPage";
import UserRoot from "./routes/UserRoot";
import UserInfo from "./routes/UserInfo";
import UserEdit from "./routes/UserEdit";

// createBrowserRouter => make the map of the routing
const routes = createBrowserRouter([
  {
    path: "/", // base Url
    element: <Root />,
    errorElement: <ErrorPage />, //handle Not found pages
    children: [
      // nested Routes
      { index: true, element: <Index /> }, // to render home in Routes
      {
        path: "faq", //  you don't need to write /faq
        element: <Faq />,
      },
      {
        path: "contact", //  you don't need to write /contact
        element: <Contact />,
      },
    ],
  },
  {
    // another design out of base Url
    path: "/user",
    element: <UserRoot />,
    children: [
    {index:true , element:<div>Hello Ahmed</div>},
      {
        path: "info",
        element: <UserInfo />,
      },
      {
        path: ":userId/edit",
        element: <UserEdit />,
      },
    ],
  },
]);

// RouterProvider => inject the routing inside the app

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
