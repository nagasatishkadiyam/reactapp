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
