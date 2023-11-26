import { BrowserRouter } from "react-router-dom";
import AuthenticatedNavbar from "./AuthenticatedNavbar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRef } from "react";

describe("AuthenticatedNavbar", () => {
    test("renders navbar items", () => {
        render(
            <BrowserRouter>
                <AuthenticatedNavbar />
            </BrowserRouter>
        );

        expect(screen.getByText("Home")).toBeInTheDocument();
    });
});
