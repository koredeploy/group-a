import "./App.css";
import HomeIndex from "./pages/Home/HomeIndex";
import AboutIndex from './pages/About/AboutIndex'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Contact from "./pages/Contact";
import Error404 from "./pages/error404/Error404";
import Categories from "./pages/categories/Categories";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
