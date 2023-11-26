import { FaHome } from "react-icons/fa";

const AuthenticatedHomePage = () => {
    return (
        <div className="max-w-6xl mx-auto pt-8">
            <h1 className="font-semibold text-4xl flex flex-row space-x-2">
                <span className="text-2xl self-center bg-[#f2f1fb] p-3 rounded-full text-purple-primary">
                    <FaHome />
                </span>
                <span>Welcome back, Steven!</span>
            </h1>
            <div>test</div>
        </div>
    );
};

export default AuthenticatedHomePage;
