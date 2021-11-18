import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    StyleSheet,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

function ListingCard({ id, name, city, state, country, photoUrls }) {
    const navigation = useNavigation();


    function navigateToListing(id) {
        navigation.navigate('Listing', {id});
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.location}>{city} {state}, {country}</Text>
            {photoUrls && 
                <TouchableOpacity onPress={() => navigateToListing(id)}>
                    <Image
                        key={photoUrls[0]}
                        source={{ uri: photoUrls[0] }}
                        style={styles.image}
                    />
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 225,
        width: 300,
    },
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        fontFamily: 'HelveticaNeue-Light',
    },
    location: {
        fontSize: 12,
        color: 'darkgray',
        marginBottom: 5,
    }
})

export default ListingCard;