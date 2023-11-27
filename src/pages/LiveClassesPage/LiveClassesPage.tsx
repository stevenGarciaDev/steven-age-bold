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
            <div className="mt-8 mx-auto flex flex-row justify-center">
                <iframe
                    className="w-full h-[500px]"
                    src="https://www.youtube.com/embed/orqiGxnu7RU?si=QHSi_DwLxzi77y9C"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>
        </div>
    );
};

export default LiveClassesPage;
