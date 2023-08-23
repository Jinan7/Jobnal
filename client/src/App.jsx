import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './index.css'
import Layout from "./pages/Layout"
import Register, { action as registerAction} from "./pages/Register"
import Dashboard, { dashBoardLoader } from "./pages/dashboard"
import Login, { action as loginAction } from "./pages/login"
import Landing from "./pages/landing"
import Error from "./pages/Error"
import Addjob, { addJobAction } from "./pages/Addjob"
import Alljobs, { allJobsLoader } from "./pages/Alljobs"
import Profile from "./pages/Profile"
import Stats, { statsLoader } from "./pages/Stats"
import EditJob, { editJobAction, editJobLoader } from "./pages/Editjob"
import { deleteJobLoader } from "./pages/Deletejob"


const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:'register',
        element:<Register/>,
        action:registerAction
      },
      {
        path:'login',
        element:<Login/>,
        action:loginAction
      },
      {
        path:'dashboard',
        element:<Dashboard/>,
        loader:dashBoardLoader,
        children:[
          {
            index:true,
            element:<Alljobs/>,
            loader:allJobsLoader
          },
          {
            path:'addjob',
            element:<Addjob/>,
            action:addJobAction
          },
          {
            path:'stats',
            element:<Stats/>,
            loader:statsLoader,
          },
          {
            path:'profile',
            element:<Profile/>,
          },
          {
            path:'editjob/:id',
            element:<EditJob/>,
            loader:editJobLoader,
            action:editJobAction,
          }
        ]
      },
      {
        path:'/deletejob/:id',
        loader:deleteJobLoader
      }

    ]
  },
  
  
])
export const App = () => {
  return <RouterProvider router={router}/>
}