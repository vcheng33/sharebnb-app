import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from './Homepage';
import Listings from "./Listings";
import Listing from "./Listing";
import ListingCard from './ListingCard';

const Stack = createNativeStackNavigator();


function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Homepage}
                    options={{
                        title: "Share B&B",
                    }}
                />

                <Stack.Screen
                    name="Listings"
                    component={Listings}
                    options={{
                        title: "Listings",
                        // headerStyle: {
                        //   backgroundColor: 'pink',
                        // },
                        // headerTitleStyle: {
                        //   fontSize: 30,
                        // }
                    }}
                />

                <Stack.Screen
                    name="Listing"
                    component={Listing}
                    options={{
                        title: "Listing Detail",
                    }}
                />

                <Stack.Screen
                    name="ListingCard"
                    component={ListingCard}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;