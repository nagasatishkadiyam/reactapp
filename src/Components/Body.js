    import restlist from "../Utils/mockdata";
    import RestaurantCard, {withPromotedLabel} from "./ResetaurantCard";
    import { useState,useEffect, useContext } from "react";
    import Shimmer from "./Shimmer"
    import { Link } from "react-router-dom";
    import useOnlineStatus from "../Utils/useOnlineStatus";
    import UserContext from "../Utils/UserContext";

    // resname="Meghana" cusines="Biriyani, south india, north inida" stars="4.1 stars" eta="30 min" 
    //  this all arguments will as props to componets.
    const Body = () => {
        //useState method will accept the  argument as shown below, if u passed the data in the usestate method
        // it will pass to the component bydefault.  
        // usestate will return the array. 
        // 1st element is the state variable.
        // 2nd element is the setvariable.

        // when ever the local state variable value is updated, react triggers a reconciliation cycle (react will rerender the component).
        const [listOfRestaurant, setListOfRestaurant] = useState([]);
        const [filteredrestRestaurant, setFilteredrestRestaurant] = useState([]);
        const [searchText, setSearchText] = useState("");
        //calling higherorder function.
        const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

        // usecontext to get the user data.  
        const {loggedinUser, setUserName} = useContext(UserContext);

        useEffect(() => {
            fetchData();

            // unmounting stage, (it will be called when leaving the current page)
            return () => {
                // console.log('unmounting stage');
            };
        },[]);

        fetchData = async () => {
         const data = await fetch(
          "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"          
        );

        const json = await data.json();
        // console.log(json);


        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredrestRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

         // setFilteredrestRestaurant(restlist);
         // setListOfRestaurant(restlist);
        }

        //conditional rendering.
        // if(listOfRestaurant.length === 0) {
        //     return (
        //         <div>
        //             <Shimmer></Shimmer>
        //         </div>
        //     );
        // }

        // using custom hook to check the internet status.
        const onlinestatus = useOnlineStatus();
        if (onlinestatus === false) {
            return <h1>you are offline, please check the internet.</h1>;
        }

        // writing the above code with ternary operator.
        return listOfRestaurant?.length === 0 ? <Shimmer></Shimmer> : (
            <div className="body">
                <div className="filter flex">
                    <div className="search m-4 p-4">
                        <input data-testid="searchbox" type="text"
                         value={searchText} 
                        className="border border-solid border-gray m-4"
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }
                        }/>
                        <button className="px-4 bg-gray-100 rounded-lg" onClick={() => {

                            const filteredList = listOfRestaurant?.filter((restaurant)=> {
                                return restaurant.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
                            })

                            setFilteredrestRestaurant(filteredList);

                            
                        }}> Search</button>
                    </div>
                    <div className="m-4 p-4 flex items-center">
                        <button className="px-4 bg-gray-100 rounded-lg" onClick={() => {
                            const filteredrestlist = listOfRestaurant?.filter((resta) => {
                                return resta.info.avgRatingString > 4;
                            });
                            setFilteredrestRestaurant(filteredrestlist);

                        }}>Top rated restaurants</button>
                    </div>
                    <div className="m-4 p-4 flex items-center">
                        <label>Username</label>
                        <input type="text" value={loggedinUser} className="border border-solid border-gray m-4 " onChange={(e) => {
                            setUserName(e.target.value);                            
                        }}></input>
                    </div>
                </div>
                <div className="res-container flex flex-wrap">
                    {/* we can pass props to component as like below  */}
                {/* <RestaurantCard resname="Meghana" cusines="Biriyani, south india, north inida" stars="4.1 stars" eta="30 min"/> */}
                {/* <RestaurantCard restdata={restobj}/> */}
                {/* we need to pass the unique key to the same level component (loop) otherwise react will rerender all componets in the same level,
                 to render only newly added componet just give the unique id as key
                */}
                {/* listing the data with source */}
                {
                    // listOfRestaurant.map((restaurant) => {
                    //     return (<RestaurantCard key={restaurant.info.id} restdata={restaurant}/>);
                    // })
                }
                {/* not using keys (not acceptable) <<< index as key <<<<<<<<<< unique id as key  */}
                                    {
                    // restlist.map((restaurant, index) => {
                    //     return (<RestaurantCard key={index} restdata={restaurant}/>);
                    // })
                }                                    

                    {/* listing the data with filtered data, then it will solve the filter issue. */}
                {

                    filteredrestRestaurant?.map((restaurant) => {
                        return (
                        <Link to={ "/restaurant/" + restaurant.info.id} key={restaurant.info.id}>

                            {/* If the restaurant is promoted then add the promoted label to it. */}
                            
                            {
                                restaurant.info.promoted ? <RestaurantCardPromoted restdata={restaurant}/> : <RestaurantCard restdata={restaurant}/>
                            }
                            
                        </Link>);
                    })

                }

                </div>
            </div>
        );

    };

    export default Body;