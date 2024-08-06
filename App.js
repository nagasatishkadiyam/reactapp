
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
                    {}, // properties
                    "its h1 tag" // children
                    ),
                    React.createElement(
                    "h2",  // element name
                    {}, // properties
                    "its h2 tag" // children
                    )
                ]
                )
            );

            // const root = ReactDOM.createRoot(document.getElementById("root"));
            // root.render(parentwithsiblings);


        const parentwithchildsiblings =  React.createElement(
            "div",  // element name
            {id:"parent"}, // properties
            [   
                React.createElement(
                "div",  // element name
                {id:"child1"}, // properties
                [
                    React.createElement(
                    "h1",  // element name
                    {}, // properties
                    "its h1 tag" // children
                    ),
                    React.createElement(
                    "h2",  // element name
                    {}, // properties
                    "its h2 tag" // children
                    )
                ]
                ),
                React.createElement(
                    "div",  // element name
                    {id:"child2"}, // properties
                    [
                        React.createElement(
                        "h1",  // element name
                        {}, // properties
                        "its h1 tag" // children
                        ),
                        React.createElement(
                        "h2",  // element name
                        {}, // properties
                        "its h2 tag" // children
                        )
                    ]
                    )
                ]
            );
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parentwithchildsiblings);    
