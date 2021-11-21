import React from 'react';

import {
    StyleSheet,
    View,
    Image,
} from 'react-native';

function Header() {
    return (
        <View style={styles.title}>
            <Image 
                source={require('./assets/logo.png')}
                style={styles.logo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logo: {
        padding: 20,
        backgroundColor: 'rgba(263,263,263,0.2)',
        width: 320,
        height: 200,
        borderRadius: 5,
    },
})

export default Header;