import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage/Home";
import EduVids from "./HomePage/EduVids";

const Forest = React.lazy(() => import("./3DForest"));
const LoginMachine = React.lazy(() => import("./login/Login"));
const Register = React.lazy(() => import("./Register/Register"));
const NavigationPage = React.lazy(() => import("./Navigation/NavigationPage"));
const SaveForest = React.lazy(() => import("./SaveForest/SaveForest"));
const City = React.lazy(() => import("./ModernCity/City"));
const FutureCity = React.lazy(() => import("./FutureCity/FutureCity"));
const FutureCity2 = React.lazy(() => import("./FutureCity2/FutureCity2"));
const DestroyedCity = React.lazy(() => import("./DestroyedCity/DistroyedCity"));
const DateTimePicker = React.lazy(() => import("./Components/Timetravel"));
const FutureChoice = React.lazy(() => import("./Components/SaveFutureOrNot"));
const TwoBrightFutures = React.lazy(() => import("./Components/TwoPossibleFutures"));
const Compost_Food_Waste = React.lazy(() => import("./assets/Habbits/compost_food"));
const Eco_friendly_appliance = React.lazy(() => import("./assets/Habbits/eco_freindly_appliances"));
const Eco_friendly_cleaning = React.lazy(() => import("./assets/Habbits/eco_freindly_cleaning"));
const Natural_Light = React.lazy(() => import("./assets/Habbits/natural_Light"));
const R = React.lazy(() => import("./assets/Habbits/r"));
const Single_use_plastic = React.lazy(() => import("./assets/Habbits/single_use_plastic"));
const Small_Garden = React.lazy(() => import("./assets/Habbits/small_Garden"));
const Unplug = React.lazy(() => import("./assets/Habbits/unplug"));
const Water = React.lazy(() => import("./assets/Habbits/water"));

const router = createBrowserRouter(
  [
    {
      path: "/Forest",
      element: (
        <Suspense fallback={<div>Loading 3D Forest...</div>}>
          <Forest />
        </Suspense>
      ),
    },
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <HomePage />
        </Suspense>
      ),
    },
    {
      path: "/EduVids",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <EduVids />
        </Suspense>
      ),
    },
    {
      path: "/compost_food",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Compost_Food_Waste />
        </Suspense>
      ),
    },
    {
      path: "/unplug",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Unplug />
        </Suspense>
      ),
    },
    {
      path: "/eco_freindly_appliances",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Eco_friendly_appliance />
        </Suspense>
      ),
    },
    {
      path: "/water",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Water />
        </Suspense>
      ),
    },
    {
      path: "/eco_freindly_cleaning",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Eco_friendly_cleaning />
        </Suspense>
      ),
    },
    {
      path: "/natural_Light",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Natural_Light />
        </Suspense>
      ),
    },
    {
      path: "/r",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <R />
        </Suspense>
      ),
    },
    {
      path: "/small_Garden",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Small_Garden />
        </Suspense>
      ),
    },
    {
      path: "/single_use_plastic",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Single_use_plastic />
        </Suspense>
      ),
    },
    {
      path: "/Destroyed",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <DestroyedCity />
        </Suspense>
      ),
    },
    {
      path: "/City",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <City />
        </Suspense>
      ),
    },
    {
      path: "/FutureCity",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <FutureCity />
        </Suspense>
      ),
    },
    {
      path: "/FutureCity2",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <FutureCity2 />
        </Suspense>
      ),
    },
    {
      path: "/Login",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <LoginMachine />
        </Suspense>
      ),
    },
    {
      path: "/timeTravel",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <DateTimePicker />
        </Suspense>
      ),
    },
    {
      path: "/FutureChoice",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <FutureChoice />
        </Suspense>
      ),
    },
    {
      path: "/TwoBrightFuture",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <TwoBrightFutures />
        </Suspense>
      ),
    },
    {
      path: "/Register",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Register />
        </Suspense>
      ),
    },
    {
      path: "/NavigationPage",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <NavigationPage />
        </Suspense>
      ),
    },
    {
      path: "/SaveForest",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <SaveForest />
        </Suspense>
      ),
    },
  ]
);


// Main App component to set up routing
function App(){
    return (
      <RouterProvider router={router}/> // Providing the router to handle navigation between components
    )
}

export default App; // Exporting the App component as default
