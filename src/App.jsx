import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./page/Home"
import Layout from "../layout/Layout"
import Blog from "./page/Blog"
import Proects from "./page/Proects"

function App() {
  const route = createBrowserRouter([{
    element: <Layout/>,
    path: "/",
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "proects",
        element: <Proects/>
      }
    ]
  }])

  return <RouterProvider router={route}/>
}

export default App