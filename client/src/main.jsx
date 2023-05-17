import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Rconfig/Router";
import './main.scss'
import 'react-toastify/dist/ReactToastify.css';


import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/userAction";


store.dispatch(loadUser());


window.addEventListener("contextmenu", (e) => e.preventDefault());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

