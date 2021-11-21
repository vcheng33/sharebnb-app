import React, { useContext, useState } from "react";
// import { Input } from 'reactstrap';
import { Formik } from "formik";
import {
    ScrollView,
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Image,
    Keyboard,
    TouchableOpacity,
    Touchable,
} from "react-native";

const INITIAL_SEARCH_FORM = {
    name: "",
    city: "",
    state: "",
    country: "",
    minPrice: '',
    maxPrice: '',
}

import UserContext from "./UserContext";
import ShareBnbApi from "./api";

function SearchForm({ navigation, search }) {

    const [searchTerms, setSearchTerms] = useState([]);
    const [formErrors, setFormErrors] = useState([]);

    function navigateToHomepage() {
        navigation.popToTop();
    }

    // async function addNewListing(values) {
    //     const data = new FormData();

    //     for (let image of images) {
    //         data.append('file', image);
    //     }

    //     for (let obj in values) {
    //         data.append(obj, values[obj]);
    //     }

    //     try {
    //         await ShareBnbApi.uploadNewListing(data);
    //     } catch (err) {
    //         setFormErrors(err);
    //     }
    // }

    return (

        <View style={styles.form}>
            {/* <View style={styles.background}>
                <Image source={require('./assets/search-bg.jpg')} resizeMode='cover' style={styles.backdrop} />
            </View> */}
            <Formik
                initialValues={INITIAL_SEARCH_FORM}
                onSubmit={(values, actions) => {
                    console.log("inside Formik:", {values});
                    search(values);
                    actions.resetForm();
                    // navigateToHomepage();
                }}
            >

                {(props) => (
                    <View style={styles.formBackground}>
                        <View style={styles.title}>
                            <Text style={styles.titleFont}>Search Listings</Text>
                        </View>
                        <TextInput
                            placeholder="Name"
                            value={props.values.name}
                            onChangeText={props.handleChange('name')}
                            style={styles.input}
                            onBlur={Keyboard.dismiss}
                            autoCapitalize='none'
                        />
                        <TextInput
                            placeholder="City"
                            value={props.values.city}
                            onChangeText={props.handleChange('city')}
                            style={styles.input}
                            onBlur={Keyboard.dismiss}
                            autoCapitalize='none'
                        />
                        <TextInput
                            placeholder="State"
                            value={props.values.state}
                            onChangeText={props.handleChange('state')}
                            style={styles.input}
                            onBlur={Keyboard.dismiss}
                            autoCapitalize='none'
                        />
                        <TextInput
                            placeholder="Country"
                            value={props.values.country}
                            onChangeText={props.handleChange('country')}
                            style={styles.input}
                            onBlur={Keyboard.dismiss}
                            autoCapitalize='none'
                        />
                        <TextInput
                            placeholder="Min Price"
                            value={props.values.minPrice}
                            onChangeText={props.handleChange('minPrice')}
                            style={styles.input}
                            // keyboardType='numeric'
                            onBlur={Keyboard.dismiss}
                            autoCapitalize='none'
                        />
                        <TextInput
                            placeholder="Max Price"
                            value={props.values.maxPrice}
                            onChangeText={props.handleChange('maxPrice')}
                            style={styles.input}
                            // keyboardType='numeric'
                            onBlur={Keyboard.dismiss}
                            autoCapitalize='none'
                        />
                        <TouchableOpacity
                            onPress={props.handleSubmit}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik >
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 30,
        // margin: 12,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: -1,
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 8,
    },
    titleFont: {
        fontSize: 25,
        fontFamily: 'HelveticaNeue-Light',
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
    button: {
        // borderWidth: 1,
        // borderColor: '#007BFF',
        // backgroundColor: '#007BFF',
        // padding: 15,
        margin: 5
    },
    buttonText: {
        // color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    },
    formBackground: {
        // backgroundColor: 'rgba(263,263,263,0.2)',
        marginLeft: 40,
        marginRight: 40,
    },
});

export default SearchForm;