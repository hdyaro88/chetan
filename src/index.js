import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { MainContainer, CreateContainer, PopularContainer } from "./components";
import Errorpage from "./components/Errorpage";
import store from "./redux";
import { Provider } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import MenuPage from "./page/MenuPage";
import Cart from "./page/Cart";
import MenuStatic from "./page/MenuStatic";
import About from "./page/About";
import Service from "./page/Service";
import Success from "./page/Success";
import Cancelled from "./page/Cancelled";
import "bootstrap/dist/css/bootstrap.css";
import Laurels from "./components/Laurels";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Errorpage />}>
      <Route
        path="/"
        element={<MainContainer />}
        errorElement={<Errorpage />}
      />
      <Route path="/about" element={<About />}  />
      <Route path="/service" element={<Service />}  />
      <Route path="/menu" element={<MenuStatic />}/>
      <Route path='/menu/:productId' element={<MenuPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/createitem" element={<CreateContainer />}  />
      <Route path="/popularitem" element={<PopularContainer />}  />
      <Route path="/Success" element={<Success />}  />
      <Route path="/Cancelled" element={<Cancelled />}  />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
