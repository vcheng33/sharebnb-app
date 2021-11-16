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
        <View>
            <Text>{name}</Text>
            <Text>{city} {state}, {country}</Text>
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
        marginBottom: 20,
    }
})

export default ListingCard;