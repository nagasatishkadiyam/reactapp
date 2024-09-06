import { fireEvent, render,screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import {act} from "react";
import RESTAURANT_MENU_DATA from "../mocks/restaurantmenu_mock_data";
import { Provider } from "react-redux";
import AppStore from "../../Utils/AppStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../../Components/Cart";


test("add item to cart", async () => {

    global.fetch = jest.fn(() => Promise.resolve({
            json:() => Promise.resolve(RESTAURANT_MENU_DATA),
        })
    );

    await act(async () =>  render(<Provider store={AppStore}><BrowserRouter><Header></Header><RestaurantMenu /><Cart></Cart></BrowserRouter></Provider>));


    const header = screen.getByText("Executive Thalis ( 7)");
    expect(header).toBeInTheDocument();
    fireEvent.click(header);

    const items = screen.getAllByTestId("items");
    expect(items.length).toBe(7);

    const itemsbuttons = screen.getAllByRole("button", {name: "Add"});
    fireEvent.click(itemsbuttons[0]);
    fireEvent.click(itemsbuttons[1]);

    const cart = screen.getByText("Cart (2 items)");
    expect(cart).toBeInTheDocument();

    fireEvent.click(cart);
    expect(screen.getAllByTestId("items").length).toBe(9);

});