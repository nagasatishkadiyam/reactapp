import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    // uncontrollered state.
    const [togglrItems, settogglrItems] = useState(false);
    handelClick = () => {
        // child level controll
        settogglrItems(!togglrItems);

        // parent level controll
        // we can controllered state from the parent.
        setShowIndex();
    }

    return (
        <div>
            <div className="w-6/12 shadow-lg mx-auto my-4 bg-gray-50  p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handelClick}>
                    <span className="font-bold">{data.title} ( {data.itemCards.length})</span> 
                    <span>{data.itemCards.length}</span>
                </div>
                {showItems && togglrItems &&  <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
}

export default RestaurantCategory;