import React, { ReactNode } from "react";
import { IoGridOutline } from "react-icons/io5";

interface ProgramProgressPreviewProps {
    title: ReactNode;
    titleIcon: ReactNode;
    titleColor: "purple" | "blue";
    description: string;
    imagePath: string;
    footerTitle: string;
    footerDescription: ReactNode;
}

const ProgramProgressPreview = ({
    title,
    titleIcon,
    titleColor,
    description,
    imagePath,
    footerTitle,
    footerDescription,
}: ProgramProgressPreviewProps) => {
    return (
        <div className="border-2 border-gray-200 py-2 rounded-md bg-white">
            <div className="px-4 flex flex-row items-center justify-between">
                <div
                    className={`text-xl font-semibold flex flex-row items-center space-x-2 ${
                        titleColor === "purple"
                            ? "text-purple-primary"
                            : "text-blue-500"
                    }`}
                >
                    <span>{titleIcon}</span>
                    <span className="underline">{title}</span>
                </div>
                <div className="text-md text-gray-500">{description}</div>
            </div>
            <div className="my-2">
                <img
                    src={imagePath}
                    alt="Program Preview"
                    className="border-y-[1px] border-gray-200 object-cover object-center h-72 w-full"
                />
            </div>
            <div className="px-4 py-2 flex flex-row items-center justify-between">
                <div className="text-black-700 font-bold text-lg">
                    {footerTitle}
                </div>
                <div>{footerDescription}</div>
            </div>
        </div>
    );
};

export default ProgramProgressPreview;
