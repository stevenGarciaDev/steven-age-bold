import { BrowserRouter } from "react-router-dom";
import AuthenticatedNavbar from "./AuthenticatedNavbar";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("AuthenticatedNavbar", () => {
    test("renders navbar with correct links", () => {
        render(
            <BrowserRouter>
                <AuthenticatedNavbar />
            </BrowserRouter>
        );

        const homeLink = screen.getByText("Home");
        const programLink = screen.getByText("Program");
        const liveClassesLink = screen.getByText("Live classes");
        const exploreLink = screen.getByText("Explore");

        expect(homeLink).toBeInTheDocument();
        expect(programLink).toBeInTheDocument();
        expect(liveClassesLink).toBeInTheDocument();
        expect(exploreLink).toBeInTheDocument();
    });
});
