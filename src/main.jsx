import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Event from './pages/Event/index.jsx'
import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Projects from './pages/Projects/index.jsx'
import Members from './pages/Members/index.jsx'
import JoinMSC from "./pages/JoinMSC/index.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/events",
        element: <Event/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/members",
        element: <Members/>
      },
      {
        path:"/joinmsc",
        element:<JoinMSC/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
