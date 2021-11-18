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
            {listing && <View style={styles.container}>
                <Text style={styles.title}>{listing.name}</Text>
                <Text style={styles.details}>{listing.city} {listing.state}, {listing.country}</Text>
                <Text style={styles.details}>${listing.price}</Text>
                <Text style={styles.description}>{listing.description}</Text>
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
    container: {
        alignItems: 'center',
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        fontFamily: 'HelveticaNeue-Light',
    },
    details: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 5,
    },
    description: {
        fontSize: 12,
        color: 'gray',
        margin: 15,
        marginBottom: 20,
    }
})

export default Listing;