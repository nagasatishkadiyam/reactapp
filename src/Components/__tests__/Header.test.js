import Header from "../Header";
import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import AppStore from "../../Utils/AppStore";
import { BrowserRouter } from "react-router-dom";

test("should load header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        );
    const button = screen.getByRole("button", {name:"Login"});

    expect(button).toBeInTheDocument();
});

test("should load header component with empty cart", () => {
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        );
    const cart = screen.getByText("Cart (0 items)");

    expect(cart).toBeInTheDocument();
});
test("should load header component with cart", () => {
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        );
    const cart = screen.getByText(/Cart/);

    expect(cart).toBeInTheDocument();
});

test("should change login button to logout.", () => {
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header />
            </Provider>
        </BrowserRouter>
        );

    const loginbutton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginbutton);
    const logoutbutton = screen.getByRole("button", {name: "Logout"})


    expect(logoutbutton).toBeInTheDocument();
});