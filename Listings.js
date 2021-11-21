import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import ShareBnbApi from './api';
import ListingCard from './ListingCard';
import SearchForm from './SearchForm';


function Listings() {
    const [listings, setListings] = useState(null);

    /** Submits a search with no queries on first load to get all database
     *  listings
     */
    useEffect(function getListingsOnMount() {
        search();
    }, []);

    
    async function search(searchForm) {
        try {
            let resultListings = await ShareBnbApi.getListingsDirectly(searchForm);
            setListings(resultListings);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <ScrollView style={{ flex: 1, }}>
            <SearchForm search={search} />
            {listings.length 
                ? listings.map(l => 
                <ListingCard 
                    id={l.id}
                    key={l.id}
                    name={l.name}
                    city={l.city}
                    state={l.state}
                    country={l.country}
                    photoUrls={l.photoUrls}
                />)
                : <Text>Sorry, no results were found!</Text>
            }

        </ScrollView>
    );
}

export default Listings;


// function navigateToNewListingForm() {
//     navigation.navigate("AddListing");
// }
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

{/* <Button
                title="Add New Listing"
                onPress={navigateToNewListingForm}
            /> */}
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