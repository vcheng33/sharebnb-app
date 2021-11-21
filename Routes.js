import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Homepage from './Homepage';
import Listings from "./Listings";
import Listing from "./Listing";
import ListingCard from './ListingCard';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import NewListingForm from './NewListingForm';
import SearchForm from './SearchForm';

const Stack = createNativeStackNavigator();


function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Group>
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

                    <Stack.Screen
                        name="AddListing"
                        component={NewListingForm}
                    />

                    <Stack.Screen
                        name="SearchListings"
                        component={SearchForm}
                    />

                    <Stack.Screen
                        name="Login"
                        component={LoginForm}
                    />

                    <Stack.Screen
                        name="SignUp"
                        component={SignUpForm}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;