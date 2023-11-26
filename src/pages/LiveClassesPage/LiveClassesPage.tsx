import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";

const LiveClassesPage = () => {
    useScrollToTop();

    return (
        <div id="top" className="max-w-6xl mx-auto py-8 px-4 scroll-mt-24">
            <div>
                <h1 className="text-center text-3xl font-semibold mb-2">
                    Introduction Video
                </h1>
                <p className="text-lg">
                    This video provides a narrated guide of my recent Expo React
                    Native and React projects. This showcases my skill and work
                    ethic that I can bring to the Front End Engineer position at
                    Bold.
                </p>
            </div>
            <div></div>
        </div>
    );
};

export default LiveClassesPage;
