import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Homepage from './Homepage';
import Listings from "./Listings";

const Tab = createBottomTabNavigator();


function BottomTab() {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Homepage} />
                <Tab.Screen name="Listings" component={Listings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTab;
