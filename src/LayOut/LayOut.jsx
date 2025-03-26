import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "../Pages/LOGIN/Login";
import SignUp from "../Pages/SIGN/Sign";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/profile/Profile";
import Chatbox from "../Pages/chatbox/Chatbox";


import Nav from '../components/nav/Nav'
import LeftBar from '../components/leftbar/LeftBar'
import RightBar from '../components/rightbar/RightBar'


export default function LayOut() {
const Feed = () => {
  return (
    <>
    <Nav/>
    <main>
      <LeftBar/>
      <div className="container">
        <Outlet />
      </div>
      <RightBar/>
    </main>
    </>
  );
};


  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Feed />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/chatbox/:id",
          element: <Chatbox />,
        },
      ],
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}
