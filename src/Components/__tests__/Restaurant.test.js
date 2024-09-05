import { render,screen } from "@testing-library/react";
import RestaurantCard, {withPromotedLabel} from "../ResetaurantCard";
import RESTAURANT_MOCK_DATA from "../mocks/Restaurant_mock_data";
import "@testing-library/jest-dom";


test("should render restaurant card with props", () => {
    render(<RestaurantCard restdata={RESTAURANT_MOCK_DATA} />);
    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
});

test("should render restaurant card with promoted label", () => {
    render(withPromotedLabel(<RestaurantCard restdata={RESTAURANT_MOCK_DATA} />));

    // const text = screen.getByText("promoted");
    // expect(text).toBeInTheDocument();
});