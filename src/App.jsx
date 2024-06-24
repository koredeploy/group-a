import "./App.css";
import HomeIndex from "./pages/Home/HomeIndex";
import AboutIndex from "./pages/About/AboutIndex";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Contact from "./pages/Contact";
import Error404 from "./pages/error404/Error404";
import Categories from "./pages/categories/Categories";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SignUpIndex from "./pages/signUp/signUpIndex";
import VendorForm1 from "./pages/signUp/VendorForm1/VendorForm1";
import VendorForm2 from "./pages/signUp/VendorForm2/VendorForm2";

function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomeIndex />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/About",
          element: <AboutIndex />,
        },
        {
          path: "/privacy",
          element: <PrivacyPolicy />,
        },
        {
          path: "*",
          element: <Error404 />,
        },
        {
          path: "/signUp",
          element: <SignUpIndex />,
        },
        {
          path: "/vendor1",
          element: <VendorForm1 />,
        },
        {
          path: "/vendor2",
          element: <VendorForm2 />,
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
