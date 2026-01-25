import "./App.css"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/resume",
          element: <Resume/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/projects",
          element: <Projects/>
        },
        {
          path: "/blog",
          element: <Blog/>
        }
      ]
    }
    
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

function AppLayout(){
  return(
    <>
      <div className="layout-container">
        <Navbar/>
        <Outlet/>
      </div>
      <Footer/>
    </>
    
  );
}