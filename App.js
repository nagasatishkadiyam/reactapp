
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
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Footer from "./src/Components/Footer";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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


    // body component
    const AppLayout = () => {
        return (
            <div className="app">
                <Header />
                <Outlet />
                <Footer />
            </div>
        );
    };
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(<AppLayout />);


    const approuter = createBrowserRouter([
        {
            path:"/",
            element: <AppLayout></AppLayout>,
            errorElement: <Error></Error>,
            children:[
                {
                    path:"/",
                    element:<Body />
                },
                {
                    path:"/about",
                    element: <About></About>
                },
                {
                    path:"/contact",
                    element:<Contact />
                }
            ]
        }
    ]);


    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={approuter}/>);
    // we have to render the RouterProvider then routing will start work.

    