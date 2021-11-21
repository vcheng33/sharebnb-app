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

import UserContext from "./UserContext";
import ShareBnbApi from "./api";

function NewListingForm({ navigation }) {
    const { currentUser } = useContext(UserContext);
    
    const INITIAL_NEW_LISTING_FORM = {
        name: "",
        street: "",
        city: "",
        state: "",
        country: "",
        description: "",
        photoUrls: "",
        price: 0,
        username: currentUser.username,
        images: "",
    }

    const [images, setImages] = useState([]);
    const [formErrors, setFormErrors] = useState([]);

    function navigateToHomepage() {
        navigation.popToTop();
    }

    async function addNewListing(values) {
        const data = new FormData();

        for (let image of images) {
            data.append('file', image);
        }

        for (let obj in values) {
            data.append(obj, values[obj]);
        }

        try {
            await ShareBnbApi.uploadNewListing(data);
        } catch (err) {
            setFormErrors(err);
        }
    }

    function handlePhoto(evt) {
        setImages(evt.target.files);
    }

    return (

        <View style={styles.form}>
            <View style={styles.background}>
                <Image source={require('./assets/bg.jpg')} resizeMode='cover' style={styles.backdrop} />
            </View>
            <Formik
                initialValues={INITIAL_NEW_LISTING_FORM}
                onSubmit={(values, actions) => {
                    console.log({ values });
                    addNewListing(values);
                    actions.resetForm();
                    navigateToHomepage();
                }}
            >

                {(props) => (
                    <View>
                        <View style={styles.title}>
                            <Text style={styles.titleFont}>Add a New Listing</Text>
                        </View>
                        <Input
                            type="file"
                            name="name"
                            // value={props.values.images}
                            onChange={(event) => {
                                handlePhoto();
                                setFieldValue("image", event.target.files)
                            }}
                            style={styles.input}
                            onBlur={Keyboard.dismiss}
                            autoCapitalize='none'
                        />
                        <TextInput
                            placeholder="Name"
                            value={props.values.name}
                            onChangeText={props.handleChange('name')}
                            style={styles.input}
                            onBlur={Keyboard.dismiss}
                            autoCapitalize='none'
                            secureTextEntry={true}
                        />
                        <TextInput
                            placeholder="Street"
                            value={props.values.street}
                            onChangeText={props.handleChange('street')}
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
                            placeholder="Description"
                            value={props.values.description}
                            onChangeText={props.handleChange('description')}
                            style={styles.input}
                            onBlur={Keyboard.dismiss}
                            autoCapitalize='none'
                        />
                        <Button
                            title="Submit"
                            onPress={props.handleSubmit}
                        />
                    </View>
                )}
            </Formik >
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        alignItems: 'center',
    },
    titleFont: {
        fontSize: 30,
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
    saveButton: {
        // borderWidth: 1,
        // borderColor: '#007BFF',
        // backgroundColor: '#007BFF',
        // padding: 15,
        margin: 5
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default NewListingForm;