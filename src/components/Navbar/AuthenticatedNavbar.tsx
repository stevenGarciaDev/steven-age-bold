import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Program", path: "/program" },
    { name: "Live classes", path: "/live" },
    { name: "Explore", path: "/explore" },
];

const AuthenticatedNavbar = () => {
    const [dropdown, setDropdown] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !(dropdownRef.current as HTMLElement).contains(
                    event.target as Node
                )
            ) {
                setDropdown(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <nav className="flex flex-row items-center justify-between w-full px-2 md:px-6 lg:px-24 h-20 bg-white fixed z-10 border-b-[1px] border-gray-300">
            <div className="text-2xl font-semibold">
                <Link to="/">AgeGrace</Link>
            </div>
            <ul className="list-none flex flex-row space-x-8 text-md font-medium">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            to={item.path}
                            className="hover:bg-purple-background hover:text-purple-primary rounded-md p-3"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="relative" ref={dropdownRef}>
                <div
                    className="flex flex-row items-center space-x-2 cursor-pointer"
                    onClick={() => setDropdown(!dropdown)}
                >
                    <span className="text-3xl text-gray-700">
                        <CgProfile />
                    </span>
                    <span className="text-md font-medium">Steven</span>
                    <span className="text-3xl text-gray-700">
                        {dropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>
                </div>

                {dropdown && (
                    <div className="absolute top-10 bg-white z-20">
                        <div className="border-2 border-b-0 border-slate-300 w-32 py-1 text-center">
                            <Link
                                to="/profile"
                                onClick={() => setDropdown(false)}
                                className="block w-full"
                            >
                                Profile
                            </Link>
                        </div>
                        <div className="border-2 border-slate-300 w-32 py-1 text-center">
                            Logout
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default AuthenticatedNavbar;
