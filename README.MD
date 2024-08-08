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


