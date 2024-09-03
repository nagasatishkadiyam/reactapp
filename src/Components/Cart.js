import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../Utils/CartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => {
        return store.cart.items;
    })

    const dispatch = useDispatch();
    const handleclearcart = () => {
        dispatch(clearItems());
    }

    console.log(cartItems);
    return (
        <div className="p-4 m-4 text-center ">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="rounded-lg p-2 m-2 bg-black text-white" onClick={handleclearcart}>Clear Cart</button>
            <ItemList items={cartItems}></ItemList>
            </div>

        </div>
    );
}

export default Cart;
