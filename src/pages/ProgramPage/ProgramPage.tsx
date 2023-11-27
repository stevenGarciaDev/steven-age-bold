import useScrollToTop from "../../hooks/useScrollToTop";
import { PiChairBold } from "react-icons/pi";
import { CiCoffeeCup } from "react-icons/ci";
import { RiMacbookLine } from "react-icons/ri";

const ProgramPage = () => {
    useScrollToTop();

    return (
        <div id="top" className="max-w-6xl mx-auto py-8 px-4 scroll-mt-24">
            <div className="flex flex-col px-2 lg:flex-row max-w-4xl mx-auto justify-around">
                <div className="mx-auto">
                    <img
                        src="./assets/images/aboutMePic.jpg"
                        alt="Steven Garcia"
                        className="h-[600px] origin-top-left rounded-md"
                    />
                </div>
                <div className="mx-auto mt-4 lg:mt-0 space-y-6">
                    <div>
                        <h2 className="text-3xl font-semibold mb-2">
                            Front End Engineer
                        </h2>
                        <span className="text-slate-700 text-xl">
                            Steven Garcia
                        </span>
                    </div>
                    <div>
                        <div className="text-2xl font-semibold mb-2">
                            About/Skills
                        </div>
                        <div className="text-gray-500 text-xl">
                            JavaScript, React, and Expo React Native
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-semibold mb-2">
                            Equipment
                        </div>
                        <ul className="text-gray-500">
                            <li className="flex flex-row items-center text-xl space-x-1">
                                <span>
                                    <PiChairBold />
                                </span>
                                <span>Chair</span>
                            </li>
                            <li className="flex flex-row items-center text-xl space-x-2">
                                <span>
                                    <RiMacbookLine />
                                </span>
                                <span>Laptop</span>
                            </li>
                            <li className="flex flex-row items-center text-xl space-x-2">
                                <span>
                                    <CiCoffeeCup />
                                </span>
                                <span>Coffee</span>
                            </li>
                        </ul>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default ProgramPage;
