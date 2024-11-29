import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage/Home";
import EduVids from "./HomePage/EduVids";
import Loading from './Loading'; // Import the Loading component

const Forest = React.lazy(() => import("./3DForest"));
const LoginMachine = React.lazy(() => import("./login/Login"));
const Register = React.lazy(() => import("./Register/Register"));
const NavigationPage = React.lazy(() => import("./Navigation/NavigationPage"));
const SaveForest = React.lazy(() => import("./SaveForest/SaveForest"));
const City = React.lazy(() => import("./ModernCity/City"));
const FutureCity = React.lazy(() => import("./FutureCity/FutureCity"));
const FutureCity2 = React.lazy(() => import("./FutureCity2/FutureCity2"));
const DestroyedCity = React.lazy(() => import('./DestroyedCity/DistroyedCity'));
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
        <Suspense fallback={<Loading />}>
          <Forest />
        </Suspense>
      ),
    },
    {
      path: "/",
      element: (<Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
      ),
    },
    {
      path: "/EduVids",
      element: (<Suspense fallback={<Loading />}>
        <EduVids />
      </Suspense>
      ),
    },
    {
      path: "/compost_food",
      element: (<Suspense fallback={<Loading />}>
        <Compost_Food_Waste />
      </Suspense>
      ),
    },
    {
      path: "/unplug",
      element: (<Suspense fallback={<Loading />}>
        <Unplug />
      </Suspense>
      ),
    },
    {
      path: "/eco_freindly_appliances",
      element: (<Suspense fallback={<Loading />}>
        <Eco_friendly_appliance />
      </Suspense>
      ),
    },
    {
      path: "/water",
      element: (<Suspense fallback={<Loading />}>
        <Water />
      </Suspense>
      ),
    },
    {
      path: "/eco_freindly_cleaning",
      element: (<Suspense fallback={<Loading />}>
        <Eco_friendly_cleaning />
      </Suspense>
      ),
    },
    {
      path: "/natural_Light",
      element: (
        <Suspense fallback={<Loading />}>
          <Natural_Light />
        </Suspense>

      ),
    },
    {
      path: "/r",
      element: (
        <Suspense fallback={<Loading />}>
          <R />
        </Suspense>

      ),
    },
    {
      path: "/small_Garden",
      element: (
        <Suspense fallback={<Loading />}>
          <Small_Garden />
        </Suspense>

      ),
    },
    {
      path: "/single_use_plastic",
      element: (
        <Suspense fallback={<Loading />}>
          <Single_use_plastic />
        </Suspense>

      ),
    },
    {
      path: "/Destroyed",
      element: (
        <Suspense fallback={<Loading />}>
          <DestroyedCity />
        </Suspense>
      ),
    },
    {
      path: "/City",
      element: (
        <Suspense fallback={<Loading />}>
          <City />
        </Suspense>
      ),
    },
    {
      path: "/FutureCity",
      element: (
         <Suspense fallback={<Loading />}>
        <FutureCity />
        </Suspense>

      ),
    },
    {
      path: "/FutureCity2",
      element: (
         <Suspense fallback={<Loading />}>
        <FutureCity2 />
        </Suspense>

      ),
    },
    {
      path: "/Login",
      element: (
         <Suspense fallback={<Loading />}>
        <LoginMachine />
        </Suspense>

      ),
    },
    {
      path: "/timeTravel",
      element: (
         <Suspense fallback={<Loading />}>
        <DateTimePicker />
        </Suspense>

      ),
    },
    {
      path: "/FutureChoice",
      element: (
         <Suspense fallback={<Loading />}>
        <FutureChoice />
        </Suspense>

      ),
    },
    {
      path: "/TwoBrightFuture",
      element: (
         <Suspense fallback={<Loading />}>
        <TwoBrightFutures />
        </Suspense>

      ),
    },
    {
      path: "/Register",
      element: (
         <Suspense fallback={<Loading />}>
        <Register />
        </Suspense>

      ),
    },
    {
      path: "/NavigationPage",
      element: (
         <Suspense fallback={<Loading />}>
        <NavigationPage />
        </Suspense>

      ),
    },
    {
      path: "/SaveForest",
      element: (
         <Suspense fallback={<Loading />}>
        <SaveForest />
        </Suspense>

      ),
    },
  ]
);


// Main App component to set up routing
function App() {
  return (
    <RouterProvider router={router} /> // Providing the router to handle navigation between components
  )
}

export default App; // Exporting the App component as default
