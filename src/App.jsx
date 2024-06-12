import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Contact from "./pages/Contact";
import Error404 from "./pages/error404/Error404";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
      
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
