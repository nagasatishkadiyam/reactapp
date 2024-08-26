import { useEffect, useState } from "react";

const useRestaurantMenu = (restid) => {

    const [restInfo, setrestInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + restid + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        setrestInfo(json.data);
    }

    return restInfo;

};

export default useRestaurantMenu;