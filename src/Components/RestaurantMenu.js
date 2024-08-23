import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_URL } from "../Utils/constants";
import { useParams } from "react-router-dom";

const ResetaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);
    const {restid} = useParams();

    useEffect(() => {
        fetchMenu();

    },[]);
    
    const fetchMenu = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + restid + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setRestInfo(json?.data);

        // console.log(json?.data.cards[2]?.card?.card?.info);
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
    };

    if (restInfo === null ) {
        return <Shimmer></Shimmer>;
    }

    const { id, name, city, areaName, costForTwoMessage, 
        cuisines, avgRatingString, totalRatingsString
        } = restInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>

            <div className="restaurant-info">
                <p>{avgRatingString   + ' ' + '(' + totalRatingsString + ')'  +  '  ' + costForTwoMessage }</p>
                <p>{ cuisines.join(", ") }</p>
                <div>
                    <p>Outlet : {areaName}</p> 
                </div>
            </div>

            <ul>
                {
                    itemCards?.map((itemCard) => {
                        return (
                            <div className="restaurant-menu-item" key={itemCard.card.info.id}>
                                <div>
                                    <h3>{itemCard.card.info.name}</h3>
                                    <h2>Rs {itemCard.card.info.price}</h2>
                                    <p>{itemCard.card.info.description}</p>
                                </div>
                                <div>
                                    <img className="res-logo"  alt="image not found" src={IMG_URL + itemCard.card.info.imageId }/>
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