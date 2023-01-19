import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Resource from "./pages/Resource"
import Expand from "./pages/Expand";
// LEVEL2
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/Product",
    element: <Product />,
  },

  {
    path: "/Resource",
    element: <Resource />,
  },
  {
    path: "/Expand",
    element: <Expand />,
  },
]);

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
