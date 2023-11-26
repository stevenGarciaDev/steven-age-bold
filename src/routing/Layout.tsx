import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="pt-20 bg-[#fafafa] w-full min-h-screen">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
