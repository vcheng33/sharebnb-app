import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import ShareBnbApi from './api';
import ListingCard from './ListingCard';

function Listings() {
    const [listings, setListings] = useState(null);

    /** Submits a search with no queries on first load to get all database
     *  listings
     */
    useEffect(function getListingsOnMount() {
        search();
    }, []);

    async function search() {
        try {
            let resultListings = await ShareBnbApi.getListingsDirectly({});
            console.log("result listings:", resultListings);
            setListings(resultListings);
        } catch (err) {
            console.log(err);
        }
    }

    // function pushToListings() {
    //     navigation.push("Listings");
    // }

    // function goBackToLastScreen() {
    //     navigation.goBack();
    // }

    // function popToFirstScreen() {
    //     navigation.popToTop();
    // }

    // function goToListing(id) {
    //     navigation.navigate('Listing', {id});
    // }
    return (
        <ScrollView style={{ flex: 1}}>
            {listings && listings.map(l => 
                <ListingCard 
                    id={l.id}
                    key={l.id}
                    name={l.name}
                    city={l.city}
                    state={l.state}
                    country={l.country}
                    photoUrls={l.photoUrls}
                />
            )}
            {/* <Button
                title="Go To Listings Page Again"
                onPress={pushToListings}
            />
            <Button
                title="Go Back"
                onPress={goBackToLastScreen}
            />
            <Button
                title="Go To First Page"
                onPress={popToFirstScreen}
            /> */}
        </ScrollView>
    );
}

export default Listings;