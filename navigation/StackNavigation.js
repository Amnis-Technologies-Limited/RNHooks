import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TestRedux from "../src/TestRedux";
import Hooks from "../src/Index";
import Blog from "../src/Blog";

const MainStack = createStackNavigator();

const StackNavigation = () => {

    return (
        <MainStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={"Blog"}
        >
            <MainStack.Screen name='Index' component={Hooks} />
            <MainStack.Screen name='Home' component={TestRedux} />
            <MainStack.Screen name='Blog' component={Blog} />
        </MainStack.Navigator>
    )
}

export default StackNavigation