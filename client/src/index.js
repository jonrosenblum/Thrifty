import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Root from "./Components/Root";
import Welcome from "./Components/Routes/Welcome";
import Error from "./Components/Error";
import SignUpPage from "./Components/Routes/CreateAccountPage";
import LoginPage from "./Components/Routes/LoginPage";
import Products from "./Components/Routes/Products" ;
import Wishlist from "./Components/Routes/Wishlist";


const router = createBrowserRouter([
  { 
    path: "/",
    element: <Root/>,
    errorElement: <Error />,
    children: [
      {
      path: "/",
      index: true,
      element: <Welcome/>,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/wishlist",
        element: <Wishlist/>
      },
      {
        path: "/signup",
        element: <SignUpPage/>
      },
      {
        path: "/login",
        element: <LoginPage/>
      },
    ]
  },
 ]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error/>
//   },
//   {
//     path: "/home",
//     element: <Home />,
//     index: true,
//   },
//   {
//     path: "/products",
//     element: <Shop />,
//   },
//   {
//     path: "/wishlist",
//     element: <Wishlist />,
//   },
//   {
//     path: "/signup",
//     element: <SignUpPage />,
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < RouterProvider router={router}/>
  </React.StrictMode>
);

// const Root = () => {
//   return <RouterProvider router={router}/>
// }
// export default App;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
