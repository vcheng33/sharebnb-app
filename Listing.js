import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
} from "react-native";

import ShareBnbApi from "./api";

function Listing({ navigation, route }) {
    const { id } = route.params;

    const [listing, setListing] = useState(null);

    useEffect(function getListingOnMount() {
        async function getListingFromApi() {
            try {
                setListing(await ShareBnbApi.getListing(id));
            } catch (err) {
                console.log(err)
            }
        }
        getListingFromApi();
    }, [id]);

    return (
        <ScrollView key={id}>
            {listing && <View >
                <Text>{listing.name}</Text>
                <Text>{listing.city}</Text>
                <Text>${listing.price}</Text>
                <Text>{listing.description}</Text>
                {listing.photoUrls && listing.photoUrls.map(url =>
                    <Image 
                        source={{ uri: url }} 
                        key={url}
                        style={styles.image}
                    />)}
            </View>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 225,
        width: 300,
        marginBottom: 20,
    },
})

export default Listing;