import  {createBrowserRouter} from "react-router-dom"
import Login from "../components/Login";
import Signup from "../components/Signup";
import ProtectedRoute from "../components/ProtectedRoute";

// import ProtectedRoute from './components/ProtectedRoute.tsx';

const router = createBrowserRouter([
  { 
      path:"/",   
      element: <Login />
    },
    { 
        path:"/login",   
        element: <Login />
      },    
    { 
      path:"/signup",
      element: <Signup />
    },
    { 
        path:"/protected",
        element: <ProtectedRoute />
      },
]);
export default router;

