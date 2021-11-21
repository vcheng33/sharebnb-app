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
                <Image source={require('./assets/login-bg.jpg')} resizeMode='cover' style={styles.backdrop} />
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
                <View style={styles.formBackground}>
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
        height: 40,
        margin: 12,
        marginLeft: 30,
        marginRight: 30,
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
        marginTop: 20,
    },
    titleFont: {
        fontSize: 30,
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
    button: {
        // borderWidth: 1,
        // borderColor: '#007BFF',
        // backgroundColor: '#007BFF',
        // padding: 15,
        // backgroundColor: 'rgba(263,263,263,0.2)',
        margin: 12,
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    formBackground: {
        backgroundColor: 'rgba(263,263,263,0.2)',
        marginLeft: 40,
        marginRight: 40,
    },

});

export default LoginForm;

{/* <Button
    title="Submit"
    onPress={props.handleSubmit}
/> */}