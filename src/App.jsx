import Forest from "./3DForest";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import DateTimePicker from "./Components/Timetravel";
import LoginMachine from "./login/Login";
import Register from "./Register/Register";
import NavigationPage from "./Navigation/NavigationPage";
import SaveForest from "./SaveForest/SaveForest";
import City from "./ModernCity/City";
import FutureCity from "./FutureCity/FutureCity";
import { DestroyedCity } from "./DestroyedCity/DistroyedCity";
import { FutureCity2 } from "./FutureCity2/FutureCity2";
import FutureChoice from "./Components/SaveFutureOrNot";
import TwoBrightFutures from "./Components/TwoPossibleFutures";

const router = createBrowserRouter(
  [
    {
      path:"/Forest",
      element:<Forest/>
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
      path:"/",
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
      path:"/NavigationPage",
      element:<NavigationPage/>
    }
    ,
    {
      path:"/SaveForest",
      element:<SaveForest/>
    }
  ]
);

function App(){
    return (
      <RouterProvider router={router}/>
    )
}

export default App;