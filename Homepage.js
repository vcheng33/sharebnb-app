import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button
} from 'react-native';

import Header from './Header';

function Homepage({ navigation }) {

    function navigateToListings(){
        navigation.navigate("Listings");
    }

    return(
        <SafeAreaView style={styles.container}>
            <Header />
            <View>
                <Text>Find your next adventure</Text>
            </View>
            <Button 
                title="Go To Listings Page"
                onPress={navigateToListings}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 50,
    },
})

export default Homepage;