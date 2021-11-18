import React, { useContext } from 'react';

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button,
    ImageBackground,
    Dimensions,
    Image,
} from 'react-native';

import UserContext from './UserContext';
import Header from './Header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Homepage({ navigation }) {
    const { currentUser } = useContext(UserContext);

    function navigateToListings() {
        navigation.navigate("Listings");
    }

    function navigateToLogin() {
        navigation.navigate("Login");
    }

    function navigateToSignUp() {
        navigation.navigate("SignUp")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.background}>
                <Image source={require('./assets/bg.jpg')} resizeMode='cover' style={styles.backdrop} />
            {/* <ImageBackground style={{ height: windowHeight, width: windowHeight, margin: 10, }} source={bg} resizeMode='cover'> */}
            </View>
            <View>
                <Header />
                <View style={styles.button}>
                    {!currentUser && <Button
                        title="Login"
                        onPress={navigateToLogin}
                        style={styles.buttonFont}
                    />}
                    {!currentUser && <Button
                        title="Sign Up"
                        onPress={navigateToSignUp}
                        style={styles.buttonFont}
                    />}
                    {currentUser && <Button
                        title="Go To Listings Page"
                        onPress={navigateToListings}
                        style={styles.buttonFont}
                    />}
                </View>
            </View>
            {/* </ImageBackground> */}
            
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
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 50,
    },
    image: {
        // flex: 1,
        justifyContent: "center",
        width: 250,
        height: 400,
    },
    button: {
        flex: 1,
    },
    buttonFont: {
        color: 'white',
    },
    background: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    backdrop: {
        flex: 1,
        alignItems: 'center',
        width: 400,
        height: 400,
    },
    logo: {
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: 200,
        height: 150,
    },
})

export default Homepage;