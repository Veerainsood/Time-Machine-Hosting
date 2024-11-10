import Forest from "./3DForest";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import DateTimePicker from "./Components/Timetravel";
import LoginMachine from "./login/Login";
import Register from "./Register/Register";
import NavigationPage from "./Navigation/NavigationPage";
import SaveForest from "./SaveForest/SaveForest";
import City from "./ModernCity/City";
import FutureCity from "./FutureCity/FutureCity";
import { FutureCity2 } from "./FutureCity2/FutureCity2";
import FutureChoice from "./Components/SaveFutureOrNot";
import TwoBrightFutures from "./Components/TwoPossibleFutures";
import HomePage from "./HomePage/Home";
import { DestroyedCity } from "./DestroyedCity/DistroyedCity";
import Compost_Food_Waste from "./assets/Habbits/compost_food";
import Eco_friendly_appliance from "./assets/Habbits/eco_freindly_appliances";
import Eco_friendly_cleaning from "./assets/Habbits/eco_freindly_cleaning";
import Natural_Light from "./assets/Habbits/natural_Light";
import R from "./assets/Habbits/r";
import Single_use_plastic from "./assets/Habbits/single_use_plastic";
import Small_Garden from "./assets/Habbits/small_Garden";
import Unplug from "./assets/Habbits/unplug";
import Water from "./assets/Habbits/water";
import EduVids from "./HomePage/EduVids";


const router = createBrowserRouter(
  [
    {
      path:"/Forest",
      element:<Forest/>
    },
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/EduVids",
      element:<EduVids/> 
    },
    {
      path:"/compost_food",
      element:<Compost_Food_Waste/>
    },
    {
      path:"/unplug",
      element:<Unplug/>
    },
    {
      path:"/eco_freindly_appliances",
      element:<Eco_friendly_appliance/>
    },
    {
      path:"/water",
      element:<Water/>
    },
    {
      path:"/eco_freindly_cleaning",
      element:<Eco_friendly_cleaning/>
    },
    {
      path:"/natural_Light",
      element:<Natural_Light/>
    },
    {
      path:"/r",
      element:<R/>
    },
    {
      path:"/small_Garden",
      element:<Small_Garden/>
    },
    {
      path:"/single_use_plastic",
      element:<Single_use_plastic/>
    },
    {
      path:"/Destroyed",
      element:<DestroyedCity/>
    }
    ,
    {
      path:"/City",
      element:<City/>
    },
    {
      path:"/FutureCity",                                                                             
      element:<FutureCity/>
    }
    ,
    {
      path:"/FutureCity2",                                                                             
      element:<FutureCity2/>
    }
    ,
    {
      path:"/Login",
      element:<LoginMachine/>
    },
    {
      path:"/timeTravel",
      element:<DateTimePicker/>
    }
    ,
    {
      path:"/FutureChoice",
      element:<FutureChoice/>
    }
    ,
    {
      path:"/TwoBrightFuture",
      element:<TwoBrightFutures/>
    }
    ,
    {
      path:"/Register",
      element:<Register/>
    }
    ,
    {
      path:"/NavigationPage", // Route for the navigation page
      element:<NavigationPage/>
    }
    ,
    {
      path:"/SaveForest", // Route for saving the forest state
      element:<SaveForest/>
    }
  ]
);

// Main App component to set up routing
function App(){
    return (
      <RouterProvider router={router}/> // Providing the router to handle navigation between components
    )
}

export default App; // Exporting the App component as default
