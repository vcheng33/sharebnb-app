import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button
} from 'react-native';

function Header(){
    return(
        <View style={styles.title}>
            <Text style={{ fontSize: 30 }}>Welcome to</Text>
            <Text style={{ fontSize: 30, marginBottom: 10 }}>Share B&B</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        // flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
})

export default Header;