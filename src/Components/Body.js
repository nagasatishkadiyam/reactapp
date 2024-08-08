    import restlist from "../Utils/mockdata";
    import RestaurantCard from "./ResetaurantCard";

    // resname="Meghana" cusines="Biriyani, south india, north inida" stars="4.1 stars" eta="30 min" 
    //  this all arguments will as props to componets.
    const Body = () => {
        return (
            <div className="body">
                <div className="search">
                    search
                </div>
                <div className="res-container">
                    {/* we can pass props to component as like below  */}
                {/* <RestaurantCard resname="Meghana" cusines="Biriyani, south india, north inida" stars="4.1 stars" eta="30 min"/> */}
                {/* <RestaurantCard restdata={restobj}/> */}
                {/* we need to pass the unique key to the same level component (loop) otherwise react will rerender all componets in the same level,
                 to render only newly added componet just give the unique id as key
                */}
                {
                    restlist.map((restaurant) => {
                        return (<RestaurantCard key={restaurant.info.id} restdata={restaurant}/>);
                    })
                }
                {/* not using keys (not acceptable) <<< index as key <<<<<<<<<< unique id as key  */}
                {
                    // restlist.map((restaurant, index) => {
                    //     return (<RestaurantCard key={index} restdata={restaurant}/>);
                    // })
                }
                </div>
            </div>
        );

    };

    export default Body;