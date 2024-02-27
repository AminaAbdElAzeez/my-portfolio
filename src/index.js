import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Routes/Root/Root';
import About from './Routes/About/About';
import Resume from './Routes/Resume/Resume';
import Works from './Routes/Works/Works';
import Contact from './Routes/Contact/Contact';

const routes = createBrowserRouter([
  {
    path : "/",
    element : <Root/>,
    children : [
      { index: true, element : <About/>},
      { path : "about" , element : <About/>},
      { path : "resume", element : <Resume/> },
      { path : "works", element : <Works/> },
      { path : "contact", element : <Contact/> },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes}/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
