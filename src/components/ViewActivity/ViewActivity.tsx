import { GoStar } from "react-icons/go";
import { FaCheck, FaLaptopCode } from "react-icons/fa";
import {
    GiWeightLiftingUp,
    GiWhiteBook,
    GiGraduateCap,
    GiTacos,
} from "react-icons/gi";
import { MdOutlinePhoneIphone } from "react-icons/md";

const ViewActivity = () => {
    const daysInWeek = ["Su", "M", "T", "W", "Th", "F", "S"];

    const listItems = [
        {
            icon: <GoStar />,
            content: (
                <>
                    1 year as a Startup Founder @{" "}
                    <a
                        href="https://fitfuelplanner.com"
                        target="_blank"
                        className="underline"
                    >
                        fitfuelplanner.com
                    </a>
                </>
            ),
        },
        {
            icon: <FaLaptopCode />,
            content: (
                <>
                    1 year as a Jr. Software Dev @{" "}
                    <a
                        href="https://www.linkedin.com/in/stevengarciadev/"
                        target="_blank"
                        className="underline"
                    >
                        Toshiba
                    </a>
                </>
            ),
        },
        {
            icon: <MdOutlinePhoneIphone />,
            content: (
                <>
                    React +{" "}
                    <a
                        href="https://apps.apple.com/us/app/fitfuelplanner/id6468933781"
                        target="_blank"
                        className="underline"
                    >
                        Expo React Native
                    </a>
                </>
            ),
        },
        {
            icon: <GiWeightLiftingUp />,
            content: <>Passionate about Bold's mission</>,
        },
        {
            icon: <GiWhiteBook />,
            content: <>Growth mindset + Always Learning</>,
        },
        {
            icon: <GiGraduateCap />,
            content: <>CS Degree @ CSULB</>,
        },
    ];

    return (
        <div className="border-2 border-gray-200 p-6 rounded-md bg-white">
            <div className="flex flex-row justify-between">
                <h2 className="text-xl font-semibold mb-3">My activity</h2>
                <div className="text-gray-500">View activity</div>
            </div>
            <span>7 active coding days this week, keep it up!</span>
            <div className="flex flex-row mt-3 space-x-2">
                {daysInWeek.map((day) => (
                    <div
                        key={day}
                        className="bg-purple-primary rounded-full p-3 w-10 h-10 text-purple-background flex justify-center items-center"
                    >
                        <span>{day}</span>
                    </div>
                ))}
            </div>
            <hr className="border-b my-6" />
            <div className="bg-purple-background rounded-md p-4 py-6 space-y-2 text-lg">
                {listItems.map((item, index) => (
                    <div
                        key={index}
                        className="text-purple-primary font-medium flex flex-row items-center space-x-2"
                    >
                        <span className="text-2xl bg-white rounded-full w-10 h-10 flex justify-center items-center">
                            {item.icon}
                        </span>
                        <span>{item.content}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewActivity;
