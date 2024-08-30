import Shimmer from "./Shimmer";
import { IMG_URL } from "../Utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const ResetaurantMenu = () => {
    const {restid} = useParams();

    // Custom hook to fetch the data and return to component.
    restInfo = useRestaurantMenu(restid);

    // converting as a custom hook(useResetaurantMenu)
    /*
    useEffect(() => {
        fetchMenu();

    },[]);
    
    const fetchMenu = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + restid + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestInfo(json?.data);
    };
    */

    if (restInfo === null ) {
        return <Shimmer></Shimmer>;
    }

    const {name, areaName, costForTwoMessage, cuisines, 
        avgRatingString, totalRatingsString
    } = restInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu m-2 p-4 ">
            <div className="restaurant-info p-4 bg-gray-100">
                <h1 className="p-2 font-bold">{name}</h1>
                <p className="font-semibold">{avgRatingString   + ' ' + '(' + totalRatingsString + ')'  +  '  ' + costForTwoMessage }</p>
                <p>{ cuisines.join(", ") }</p>
                <div>
                    <p>Outlet : {areaName}</p> 
                </div>
            </div>

            <ul className="">
                {
                    itemCards?.map((itemCard) => {
                        return (
                            <div className="restaurant-menu-item m-4 p-4 bg-gray-50 rounded-s-lg flex flex-1" key={itemCard.card.info.id}>
                                <div className="">
                                    <h3 className="font-bold">{itemCard.card.info.name}</h3>
                                    <h2 className="font-semibold">Rs {itemCard.card.info.price}</h2>
                                    <p>{itemCard.card.info.description}</p>
                                </div>
                                <div className="">
                                    <img className="res-logo w-40"  alt="image not found" src={IMG_URL + itemCard.card.info.imageId }/>
                                </div>
                            </div>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default ResetaurantMenu;