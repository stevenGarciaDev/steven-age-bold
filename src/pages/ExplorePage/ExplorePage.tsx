import { AiOutlineCheck } from "react-icons/ai";
import useScrollToTop from "../../hooks/useScrollToTop";

const ExplorePage = () => {
    useScrollToTop();

    return (
        <div id="top" className="max-w-7xl mx-auto py-8 px-4 scroll-mt-24">
            <h2 className="text-4xl text-center mb-2 font-semibold">
                About me
            </h2>

            <div className="flex flex-col md:flex-row md:items-center justify-center">
                <div className="p-8 md:w-2/4">
                    <h2 className="text-2xl mb-2 font-semibold md:text-3xl">
                        Hand crafted web and mobile engineering.
                    </h2>
                    <p className="mb-4 text-lg">
                        I am Steven Garcia, a Front End Software Engineer in
                        Southern California. (I am from Whittier, California
                        which is 30 miles from Culver City) I live with an
                        intense passion for my craft of front-end development,
                        mobile development, and backend API development.
                    </p>
                    <p className="mb-4 text-lg">
                        I have a growth mindset and continually invest in
                        improving my skills through online courses, books, and
                        side projects.
                    </p>
                    <p className="text-lg">
                        Lately? I&apos;ve been building a web and mobile app,{" "}
                        <a href="https://fitfuelplanner.com" target="_blank">
                            FitFuelPlanner
                        </a>
                        , using the technologies of TypeScript/JavaScript,
                        Next.js/React, Redux, Expo, C#, .NET 6, PostgreSQL,
                        Docker, and Amazon Web Services.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        src="./assets/images/MainHeaderAppImage.png"
                        alt="FitFuelPlanner Meal Plan Preview"
                        className="h-[600px] w-[300px] origin-top-left md:rotate-4"
                    />
                </div>
            </div>
            <div className="my-8 flex flex-col md:flex-row-reverse md:items-center justify-center">
                <div className="p-8 md:w-2/4">
                    <h2 className="text-2xl md:text-3xl mb-2 font-semibold flex flex-row items-center">
                        <span className="mr-2">
                            <AiOutlineCheck className="text-3xl" />
                        </span>
                        My interest in Bold
                    </h2>
                    <p className="mb-4 text-lg">
                        The opportunity to work for Bold is exciting as it
                        enables me to work with a team of talented engineers to
                        build a product that will help people live healthier
                        lives.
                    </p>

                    <p className="text-lg">
                        Collaborating to build a maintain Bold's React Native
                        app and React web app is a fun and meaningful project I
                        would be happy to take on.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        src="./assets/images/WorkoutPlanPreview.png"
                        alt="FitFuelPlanner Workout Preview"
                        className="h-[600px] w-[300px] origin-top-left md:rotate-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default ExplorePage;
