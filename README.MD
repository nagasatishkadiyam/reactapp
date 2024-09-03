- npm init (initializing the npm in our app, it will create a package.jon file in our app). 
- npm install -D parcel (install the parcel as a dev depnedency package) 
- "parcel": "^2.12.0".
- here ^ if you used ^ symbol it will install latest minor version of the package. 
- here ~ if you used ~ symbol it will install latest major version of the package.
- npm install will recreate the entire nodemodules (noneed to push the node modules into the github).
- npm install react OR (npm i react) 
- npm install react-dom OR (npm i react-dom)
- npx parcel index.html (this command is used to generate the development build). 
- npx parcel build index.html (if we used build it will generate the production ready optimized code)
- npx means npm execute
- npx parcel index.html means npm execute parcel package entry point is index.html
- we can write the scripts for builds.
- npm run start will generate the dev build
- npm run build (you can write any word instead of build)  


- here 2 types of import/export availabe.
- 1. default export /import.  ( if file contains single componenet/varible better to use default export/import)
    - Example
    - default export Componentname/variablename;
    - import Componentname/variablename from "path".

- 2. named export/import.
    - Example named export: ( if file contains Multiple componenets/varibles better to use named export /import)
    - export const Componentname/variablename;
    - import { Componentname/variablename } from "path".


- React Hooks
    - (hooks are normal javascript functions given by facebook developers)
    - these are most used hooks
      - useState() (superpowerfull state variable in react).
        - superpowerfull variable keeps the UI sync with the data.
        - whenever a state variable is changed/updated react will rerender my component.
        - usestate should be write inside the componet.
        - do not add usestate inside the for loop or any conditions. 

      - useEffect()  
        - If no dependecy array useeffect will call on every render.
        - If dependency array is empty,then useeffect will call on only initial render (just once).
      - useParams() is used to get the query parameters from the url.
        - useParams() is exported from react-router-dom.

      - If any function starts with use keyword then its a hook.

- React uses reconcilation althogrithem also known as react fiber.
- virtual dom means representation of actual dom.
- react is fast becuase of rect fiber which means reconcilation algorithem will find out the   difference between the old dom object and new dom object then update the updated part only.

- react-router-dom is used to create the routes in the application.
- we have to create the routes configuration by using the createBrowserRouter componet.
- we have to provide the router configuration to RouterProvider compoent.
- Outlet is filled by the component once its matched the given path. 


- Routing.
  - 2 types of routing availabel in web apps
    - client side Routing(single page application)(client side routing won't do http request because its already loaded as single page)
    - server side Routing(every request will go the server with http and get back to the browser)
- functional component 
  - functional component is nothing but a javascript fucntion which return the jsx.

- Class component 
  - class component is nothing but a javascript class which extends React.Component and it has  a render method which returns the jsx.
  - class component constructor will execute first ===> then render will execute then ==> componentdidmount will execute.

  - Life cycle
    - Mounting

      - constructor 
      - render
      -  dummy html
      - Component Did Mount
        - API CALL
        - this.setState (state variable is updated)

    - updating
      - render API data.
      - Html with original data.
      - ComponenDidUpdate
    
    - Unmounting
      - console.log("component will unmount while component disapearing time 
        (while changing to different page)");

    - custom hook is nothing but a javascript fucntion.
      - if we used customhooks we can maintian, reuseable, testable the code easly.  


    - higher order components:
      - higher order component is a function it takes a componet as an input and enhance it and return the enhanced component.

    - Lifting up the state.
      - Controling the child components state varibale from the parent coponent. 
      - Example accordian implemented.

    - Props drilling.
     - sendign the data from one parent component to its child componets is called props drilling.
     - componetA is sending the data as the props CoponentB also sending the data to ComponentC  ComponetC is using the data.
     - this is called props drilling.

     - React context.
      - Its solves the Props drilling.
      - If you want to store/access the data inside entire application like logged in user details, we can use react context.
      - Redux.
      - Redux primarly is used to handel the state of the our application.
      - If Redux used in our application, its easier to debug our application.

      - Redux store is a big javascript object and kepts at centralized place.
      - Any compoent can read/write the redux store data. 
      - Redux store partitioned as multiple slices, so we can store different types of data in different slices.
      - EX: card data, loged in user data, theme data(white or dark).


      - when we click on the add button, it will dispatch an action and then this action will call function then this function will manuply the card slice in redux store.
      - when we click on the add button, it will disapatch an action which calls the reducer function, which modifies/ updates the redux store cart slice.

      - Wrting the data to redux store
        - BUTTON CLICK ==> DISPATCH ACTION ==> FUNCTION ==> REDUX STORE SLICE 
      - Reading the data from redux store.
        - Header componet is subscribed to the store using a SELECTOR, so its automatically fetches the data in the Header.

      # Redux toolkit
       - install @reduxjs/toolkit and react-redux
       - build our store.
       - connect our store to our app.
       - slice (cart slice)
       - dispatch
       - selector 
    






