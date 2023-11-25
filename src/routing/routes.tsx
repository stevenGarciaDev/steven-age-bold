import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import LiveClassesPage from "../pages/LiveClassesPage";
import AboutPage from "../pages/AboutPage";
import ExplorePage from "../pages/ExplorePage";
import ProfilePage from "../pages/ProfilePage";
import ProgramPage from "../pages/ProgramPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "program", element: <ProgramPage /> },
            { path: "live", element: <LiveClassesPage /> },
            { path: "explore", element: <ExplorePage /> },
            { path: "profile", element: <ProfilePage /> },
        ],
    },
]);

export default router;
