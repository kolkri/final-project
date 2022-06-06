import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { Signup } from "./components/Signup";
import { Userpage } from "./pages/Userpage";
import MainPage from "./pages/MainPage";


import { user } from "./reducers/user";

const reducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Signup />} />
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/userpage" element={<Userpage />} /> */}
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};