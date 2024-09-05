import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import ALL_RESTAURANT_MOCK_DATA from "../mocks/allrestaurant_mock_data";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(ALL_RESTAURANT_MOCK_DATA);
        }
    })
});

test("it should render the body component", async () => {
    // because of fetchign data as async mode we have to use act
    await act(async () => render(<BrowserRouter><Body></Body></BrowserRouter>));

    const restcard = screen.getAllByTestId("restcard");
    expect(restcard.length).toBe(8);

    const button = screen.getByRole("button", {name: "Search"});
    const searchinput = screen.getByTestId("searchbox");
    fireEvent.change(searchinput,{ target:{value:"Home"}});
    fireEvent.click(button);
    const cards = screen.getAllByTestId("restcard");
    expect(cards.length).toBe(1);

});

test("it should filter the top rated restaurants", async () => {


    // because of fetchign data as async mode we have to use act
    await act(async () => render(<BrowserRouter><Body></Body></BrowserRouter>));

    const restcard = screen.getAllByTestId("restcard");
    expect(restcard.length).toBe(8);

    const button = screen.getByRole("button", {name: "Top rated restaurants"});
    fireEvent.click(button);
    const cardsafterfilter = screen.getAllByTestId("restcard");
    expect(cardsafterfilter.length).toBe(6);

});