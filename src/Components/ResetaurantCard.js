    // const RestaurantCard = (props) => {
    //     return (
    //         <div className="res-card">
    //         <div>
    //             <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"/>
    //         </div>
    //         <h2>{props.resname}</h2>
    //         <h3>{props.cusines}</h3>
    //         <h4>{props.stars}</h4>
    //         <h4>{props.eta}</h4>
    //     </div>
    //     );
    // };

    // const RestaurantCard = (props) => {
    //     const {resname, cusines, stars, eta} = props;
    //     //this is called object destructring
    //     return (
    //         <div className="res-card">
    //         <div>
    //             <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"/>
    //         </div>
    //         <h2>{resname}</h2>
    //         <h3>{cusines}</h3>
    //         <h4>{stars}</h4>
    //         <h4>{eta}</h4>
    //     </div>
    //     );
    // };

    // destructring in the fly 
    //     const RestaurantCard = ({resname, cusines, stars, eta}) => {
    //     return (
    //         <div className="res-card">
    //         <div>
    //             <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"/>
    //         </div>
    //         <h2>{resname}</h2>
    //         <h3>{cusines}</h3>
    //         <h4>{stars}</h4>
    //         <h4>{eta}</h4>
    //     </div>
    //     );
    // };

    // const RestaurantCard = (props) => {
    //     const {restdata} = props;
    //     return (
    //         <div className="res-card">
    //         <div>
    //             <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restdata.info.cloudinaryImageId }/>
    //         </div>
    //         <h2>{restdata.info.name}</h2>
    //         <h4>{restdata.info.cuisines.join(", ")}</h4>
    //         <h4>{restdata.info.avgRatingString} stars</h4>
    //         <h4>{restdata.info.costForTwo}</h4>
    //     </div>
    //     );
    // };

import { IMG_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
    const {restdata} = props;
    const {name, cuisines, avgRatingString, costForTwo } = restdata.info;
    return (
        <div className="res-card">
        <div>
            <img className="res-logo" src={IMG_URL + restdata.info.cloudinaryImageId }/>
        </div>
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString} stars</h4>
        <h4>{costForTwo}</h4>
    </div>
    );
};

export default RestaurantCard;