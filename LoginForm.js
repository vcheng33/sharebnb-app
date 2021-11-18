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

const INITIAL_LOGIN_FORM = {
    username: "",
    password: "",
}

function LoginForm({ navigation }) {
    // const [formData, setFormData] = useState({});
    // const [formErrors, setFormErrors] = useState([]);
    const { handleLogin } = useContext(UserContext);

    function navigateToHomepage() {
        navigation.popToTop();
    }

    return (
        <View style={styles.form}>
            <View style={styles.background}>
                <Image source={require('./assets/bg.jpg')} resizeMode='cover' style={styles.backdrop} />
            </View>
            <Formik
                initialValues={INITIAL_LOGIN_FORM}
                onSubmit={(values, actions)  => {
                    console.log({values});
                    handleLogin(values);
                    actions.resetForm();
                    navigateToHomepage();
                }}
            >
            
            {(props) => (
                <View>
                    <View style={styles.title}>
                        <Text style={styles.titleFont}>Login</Text>
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

export default LoginForm;