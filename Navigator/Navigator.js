import React from "react";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";

import BottomTabNavigator from "./TabNavigation";
import { selectIsLoggedIn, selectUser } from "../redux/slices/authSlice";

const AppRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isLoggedIn = false;

  return (
    <>
      {/* Conditional stack navigator rendering based on login state */}

      {isLoggedIn ? <BottomTabNavigator /> : <AuthNavigator />}
      {/* <BottomTabNavigator /> */}
    </>
  );
};

export default AppRoute;
