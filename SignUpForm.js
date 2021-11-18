import React, { useContext } from "react";
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
    Touchable
} from "react-native";

import UserContext from "./UserContext";

const INITIAL_SIGNUP_FORM = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
};

function SignUpForm({ navigation }) {
    const { handleSignUp } = useContext(UserContext);

    function navigateToHomepage() {
        navigation.popToTop();
    }

    return (

        <View style={styles.form}>
            <View style={styles.background}>
                <Image source={require('./assets/bg.jpg')} resizeMode='cover' style={styles.backdrop} />
            </View>
            <Formik
                initialValues={INITIAL_SIGNUP_FORM}
                onSubmit={(values, actions) => {
                    console.log({ values });
                    handleSignUp(values);
                    actions.resetForm();
                    navigateToHomepage();
                }}
            >

                {(props) => (
                    <View>
                        <View style={styles.title}>
                            <Text style={styles.titleFont}>Sign Up</Text>
                        </View>
                        <TextInput
                            placeholder="Username"
                            value={props.values.username}
                            onChangeText={props.handleChange('username')}
                            style={styles.input}
                            onBlur={Keyboard.dismiss}
                            autoCapitalize='none'
                        />
                        <TextInput
                            placeholder="Password"
                            value={props.values.password}
                            onChangeText={props.handleChange('password')}
                            style={styles.input}
                            onBlur={Keyboard.dismiss}
                            autoCapitalize='none'
                            secureTextEntry={true}
                        />
                        <TextInput
                            placeholder="First Name"
                            value={props.values.firstName}
                            onChangeText={props.handleChange('firstName')}
                            style={styles.input}
                            onBlur={Keyboard.dismiss}
                            autoCapitalize='none'
                        />
                        <TextInput
                            placeholder="Last Name"
                            value={props.values.lastName}
                            onChangeText={props.handleChange('lastName')}
                            style={styles.input}
                            onBlur={Keyboard.dismiss}
                            autoCapitalize='none'
                        />
                        <TextInput
                            placeholder="Email"
                            value={props.values.email}
                            onChangeText={props.handleChange('email')}
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

export default SignUpForm;