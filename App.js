
/**
 * Parcel functionalities.
 * HMR - Hot module reloading (it will refresh the page automatically).
 * File water algorithm (based on File water algorithm Hot module reloading is happening).
 * Building.
 * Minifying.
 * Dev and production build.
 * Super fast build algorithm.
 * Image optimization.
 * Caching while development.
 * compression.
 * rewriting.
 * compatable with older version of browsers.
 * https on dev also. (npx parcel index.html --https)
 * it will assign the port.
 * Consist of hasing algorithm.
 * Zero config
 * Tree shaking (Removing unwanted code) (It will remove unused functions of the installed packages).
 */

/**
 * Transitive dependencies(each package has it own dependencies).
 * 
 * polyfill means converting the newer version of code to old code. (bable will do the functionality) 
 * If we mentioned the browsers list, then bable will do the polyfill, means it will convert the new version of code to old code.
 * We don't need to write the polyfill, bable will take care of it.
 * Bable will clearing the console log.
 */
import React from "react";
import ReactDOM  from "react-dom/client";

// React element is nothing but javascript object
// React.createElement => React Element - js object => html(dom)

const heading = React.createElement(
    "h1",  // element name
    {id:"heading"}, // properties
    "welcome to React hello world" // children
    );

    // rendering the html using reactdom.
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);

    // creating a nested html using react.
    const parent =  React.createElement(
        "div",  // element name
        {id:"parent"}, // properties
        React.createElement(
            "div",  // element name
            {id:"child"}, // properties
            React.createElement(
                "h1",  // element name
                {}, // properties
                "its h1 tag" // children
                )
            )
        );

    // rendering the nested html using reactdom.
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(parent);

        // creating a nested html using react.
        const parentwithsiblings =  React.createElement(
            "div",  // element name
            {id:"parent"}, // properties
            React.createElement(
                "div",  // element name
                {id:"child"}, // properties
                [
                    React.createElement(
                    "h1",  // element name
                    {key:"1"}, // properties
                    "its h1 tag" // children
                    ),
                    React.createElement(
                    "h2",  // element name
                    {key:"2"}, // properties
                    "its h2 tag" // children
                    )
                ]
                )
            );

            // const root = ReactDOM.createRoot(document.getElementById("root"));
            // root.render(parentwithsiblings);


        const parentwithchildsiblings =  React.createElement(
            "div",  // element name
            {id:"parents"}, // properties
            [   
                React.createElement(
                "div",  // element name
                {id:"child1", key:"3"}, // properties
                [
                    React.createElement(
                    "h1",  // element name
                    {key:"4"}, // properties
                    "its h1 tag" // children
                    ),
                    React.createElement(
                    "h2",  // element name
                    {key:"5"}, // properties
                    "its h2 tag" // children
                    )
                ]
                ),
                React.createElement(
                    "div",  // element name
                    {id:"child2", key:"6"}, // properties
                    [
                        React.createElement(
                        "h1",  // element name
                        {key:"7"}, // properties
                        "its h1 tag" // children
                        ),
                        React.createElement(
                        "h2",  // element name
                        {key:"8"}, // properties
                        "its h2 tag" // children
                        )
                    ]
                    )
                ]
            );


        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(parentwithchildsiblings);    

    // creating the elements using JSX.
    // JSX means javascript xml 
    // JSX - is not HTML in JS.
    // JSX - is HTML or XML like syntax.
    // JS engine can understand only javascript, it doesn't understand the jsx.
    // how JS engine is understaning the JSX? (jsx transpiled before it reaches to the js engine) 
    // PARCLE has the BABEL , so BABEL is doing the conveWrtion.

    // JSX example
    //single line JSX.
    // React element
    const jsxheading = <h1 className="jsxheadinsg" id="jsxheadingid"> jsx heading</h1>
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(jsxheading);

    //Mutiple line JSX.
    // React element
    const multilinejsx = (<h1 className="multilinejsx" id="multilinejsxid">
        this is multi line jsx
        </h1>);

    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(multilinejsx);

    // React Component (everything is a component in react)
    // 1. Functional Component.
    // 2. Class Component.
    // Functional component is normal java script arrow function, which return a jsx or react element.
    // functional component name starts with capital letter.(not mandatory but its good practice).
    // we have to render the React component using following syntax <ComponentName /> <Heading />
    
    // functional componet with retun statement
    const Heading = () => {
        return <h1>its react functional component</h1>;
    };

    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(<Heading />);

    // functional componet without retun statement.
    const HeaderWithoutReturn = () => (
    <h1>
        Function component without return statement
    </h1>
    );
    
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(<HeaderWithoutReturn />);

    // we can write nested components.
    // component composition means adding one componet insdie another component.
    const ChildComponent = () => {
        return <h1>Child component in container.</h1>;
    }
    const ContainerComponet = () => {
        return (
        <div id="container">
            <ChildComponent></ChildComponent>
            <h1>Parent componet</h1>
        </div>
        );
    }
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(<ContainerComponet />);


    // we can place a functional component inside the react element by using <ComponentName/>.
    // we can place react elemet inside the functional component by using {}.
    // we can write any javascript code inside the {} like { 2 + 60}. 
    // we can print javascript variable like {number} and even console.log() also as {console.log()}.
    // jsx will sanitize the javascipt inside the {}.
    // if {} contains the malicious code, jsx will escape it.
    // we can the react componet inside the {}  as like this {ChildComponent()} 

     const element = (<div> 
        {2 + 10}
        <ChildComponent />
        <ChildComponent></ChildComponent>
        {ChildComponent()} 
        <h1>react elements</h1>
        </div>);

    const element2 = (<div> 
        {2 + 10} 
        {element} 
        {ChildComponent()}  
        <h1>react element</h1>
        </div>);

    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(element2);

    // react fucntional component
    const TestComponent = () => {
        return (<h1>TestComponent</h1>);
    };
    // react fucntional component
    const TestComponent2 = () => {
        return (
            <div>
            <TestComponent />
            <h1> TestComponent 2</h1>
            {TestComponent()}
            </div>
        );
    };
    
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(<TestComponent2 />);


    /**
     * ==========================================================================
     */
    /*  basics are complete from now onwards swiggy clone app is started */

    /**
     * Header
     *  - logo
     *  - menu items
     * Body
     *  - Search bar.
     *  - Restaurants Contaoiner
     *      - Restaurants cards
     * Footer
     *  - copyright
     *  - links
     *  - addresses
     *  - contact
     */

    // header component 
    const Header = () => {
        return (
            <div className="header">
                <div className="logo">
                <img className="logoimage"src="https://t3.ftcdn.net/jpg/05/62/16/16/240_F_562161641_l6cBjybZdSnrtAVtXDXPZCM6myHJI4SR.jpg" alt="image not found" /> 
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        );
    }; 

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

    const RestaurantCard = (props) => {
        const {restdata} = props;
        const {name,cuisines, avgRatingString,costForTwo } = restdata.info;
        return (
            <div className="res-card">
            <div>
                <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restdata.info.cloudinaryImageId }/>
            </div>
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
        );
    };

    const  restlist = [
        {
            "info": {
                "id": "393840",
                "name": "Chinese Wok",
                "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                "locality": "Chikka Lakshmaiah Layout",
                "areaName": "Adugodi",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Chinese",
                    "Asian",
                    "Tibetan",
                    "Desserts"
                ],
                "avgRating": 4.2,
                "parentId": "61955",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 51,
                    "lastMileTravel": 2.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-55 mins",
                    "lastMileTravelString": "2.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-08 02:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹149"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-2438e965-6295-478a-bd78-0e9a1e27b864"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/chinese-wok-chikka-lakshmaiah-layout-adugodi-bangalore-393840",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "5934",
                "name": "Burger King",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
                "locality": "Koramangala",
                "areaName": "Koramangala",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Burgers",
                    "American"
                ],
                "avgRating": 4.3,
                "parentId": "166",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 40,
                    "lastMileTravel": 1.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "1.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-08 06:55:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "ITEMS",
                    "subHeader": "AT ₹139"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.2",
                        "ratingCount": "1K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-2438e965-6295-478a-bd78-0e9a1e27b864"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "269402",
                "name": "The Tea Brewery",
                "cloudinaryImageId": "v4s7ectlujr8325ejrnc",
                "locality": "1st Block",
                "areaName": "Koramangala",
                "costForTwo": "₹100 for two",
                "cuisines": [
                    "Beverages",
                    "Snacks",
                    "Bakery",
                    "Desserts",
                    "Fast Food",
                    "Chaat",
                    "Healthy Food"
                ],
                "avgRating": 4.6,
                "parentId": "21147",
                "avgRatingString": "4.6",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 1.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "1.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-08 00:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-2438e965-6295-478a-bd78-0e9a1e27b864"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/the-tea-brewery-1st-block-koramangala-bangalore-269402",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "23678",
                "name": "McDonald's",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1fe8039a-0a1a-41f8-8db1-f3521ba8fada_23678.jpg",
                "locality": "5th Block",
                "areaName": "Koramangala",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "avgRating": 4.5,
                "parentId": "630",
                "avgRatingString": "4.5",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 31,
                    "lastMileTravel": 1.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "1.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-08 04:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "Delivery!",
                                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-2438e965-6295-478a-bd78-0e9a1e27b864"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/mcdonalds-5th-block-koramangala-bangalore-23678",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "25620",
                "name": "KFC",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_25620.JPG",
                "locality": "Intermediate Ring Road",
                "areaName": "Ejipura",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Fast Food",
                    "Rolls & Wraps"
                ],
                "avgRating": 4.3,
                "parentId": "547",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 32,
                    "lastMileTravel": 0.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "30-35 mins",
                    "lastMileTravelString": "0.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-07 23:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-2438e965-6295-478a-bd78-0e9a1e27b864"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "286156",
                "name": "Sour House",
                "cloudinaryImageId": "cihuy7nxa3lhf0qj1eom",
                "locality": "8th Block",
                "areaName": "Koramangala",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Bakery"
                ],
                "avgRating": 4.8,
                "parentId": "191275",
                "avgRatingString": "4.8",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 27,
                    "lastMileTravel": 0.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25-30 mins",
                    "lastMileTravelString": "0.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-07 21:30:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "aggregatedDiscountInfoV2": {},
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-2438e965-6295-478a-bd78-0e9a1e27b864"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/sour-house-8th-block-koramangala-bangalore-286156",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "422863",
                "name": "Jose Mess",
                "cloudinaryImageId": "lltunkievzpxrrcarfmy",
                "locality": "BTM Layout",
                "areaName": "BTM",
                "costForTwo": "₹150 for two",
                "cuisines": [
                    "South Indian"
                ],
                "avgRating": 4.5,
                "parentId": "20129",
                "avgRatingString": "4.5",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "3.0 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-07 22:45:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "10% OFF",
                    "subHeader": "UPTO ₹40"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.1",
                        "ratingCount": "1K+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-2438e965-6295-478a-bd78-0e9a1e27b864"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/jose-mess-layout-btm-bangalore-422863",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "219784",
                "name": "Grill Daddy",
                "cloudinaryImageId": "7139719793bebb18d020baa9d88f3431",
                "locality": "1st Block",
                "areaName": "Koramangala",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Continental",
                    "American",
                    "Pastas",
                    "Pizzas",
                    "Italian",
                    "Steakhouse",
                    "Burgers",
                    "Salads",
                    "Grill",
                    "Beverages",
                    "Seafood"
                ],
                "avgRating": 4.4,
                "parentId": "90631",
                "avgRatingString": "4.4",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 36,
                    "lastMileTravel": 1.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35-40 mins",
                    "lastMileTravelString": "1.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-08-08 00:30:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "options available"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                },
                "orderabilityCommunication": {
                    "title": {},
                    "subTitle": {},
                    "message": {},
                    "customIcon": {}
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {},
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "4.3",
                        "ratingCount": "500+"
                    },
                    "source": "GOOGLE",
                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-2438e965-6295-478a-bd78-0e9a1e27b864"
            },
            "cta": {
                "link": "https://www.swiggy.com/restaurants/grill-daddy-1st-block-koramangala-bangalore-219784",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
    ];

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

    // body component
    const AppLayout = () => {
        return (
            <div className="app">
                <Header />
                <Body />
                {/* <Footer /> */}
            </div>
        );
    };
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout />);

    