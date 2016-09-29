# php-react
Mount React components by calling a render function from html 'script' tag

Simple example to ilustrate a way to mount React components from <script></script> tags passing props to them if they need.
This can be done thanks to Webpack and its ability to build modules as libraries, exposing functions that can render the components.
Those functions, that receives a props object and the tag which the component will be mounted inside as parameters, calls ReactDOM render.

The keys of this approach are:
  
  Setup webpack to expose modules as LIBRARIES (as you can see on webpack.config.js:9~10) inside Global object.
  
  The Webpack React modules, used to export the component itself, will export a function that can render the component. Ex: index.js.jsx.
  
  Inside the html (index.php) the bundled output is imported and the Global object is used to render the Index component receiving an json, that will be passed as props to the Index component, and the container tag, where the Index component will be mounted inside.
