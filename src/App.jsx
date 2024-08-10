import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import About from './pages/About/About';
import Mainlayout from './pages/Mainlayout/Mainlayout';
import StartFramework from './pages/Start Framework/Start Framework';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Notfound from './pages/Notfound/Notfound';

function App() {


  let x = createBrowserRouter([
    {
      path: "",
      element: <Mainlayout />,

      children: [
        { index: true, element: <StartFramework /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "Notfound", element: <Notfound /> },






        { path: "*", element: <Notfound /> },

      ]
    },

  ])


  return (
    <>
      <RouterProvider router={x}></RouterProvider>

    </>
  );
}

export default App;