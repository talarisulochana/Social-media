import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


const Login = lazy(() => import("../Pages/LOGIN/Login"));
const SignUp = lazy(() => import("../Pages/SIGN/Sign"));
const Home = lazy(() => import("../Pages/Home/Home"));
const Profile = lazy(() => import("../Pages/profile/Profile"));
const Chatbox = lazy(() => import("../Pages/chatbox/Chatbox"));
const Nav = lazy(() => import("../components/nav/Nav"));
const LeftBar = lazy(() => import("../components/leftbar/LeftBar"));
const RightBar = lazy(() => import("../components/rightbar/RightBar"));

const Layout = () => {
  return (
    <>
      <Nav />
      <main>
        <LeftBar />
        <div className="container">
          <Outlet />
        </div>
        <RightBar />
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/profile/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/chatbox/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Chatbox />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    ),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
