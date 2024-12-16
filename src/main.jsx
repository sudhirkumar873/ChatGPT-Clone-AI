import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import { RootLayout } from "./layouts/rootLayout/RootLayout.jsx";
import { Homepage } from "./routes/homepage/Homepage.jsx";
import { Dashboard } from "./routes/dashboard/Dashboard.jsx";
import { DashboardLayout } from "./layouts/dashboardLayout/DashboardLayout.jsx";
import { Chatpage } from "./routes/chatpage/Chatpage.jsx"
import { SignInPage } from "./routes/signinpage/SignInPage.jsx"
import { SignUpPage } from "./routes/signupage/SignUpPage.jsx"

const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children:[
      {
        path:'/', element:<Homepage/>
      },
      {
        path:'/sign-in/*', element:<SignInPage/>
      },
      {
        path:'/sign-up/*', element:<SignUpPage/>
      },
      {
        element:<DashboardLayout/>,
        children:[
          {
            path:'/dashboard',
            element:<Dashboard/>
          },
          {
            path:'/dashboard/chats/:id',
            element:<Chatpage/>
          },
        ]
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
