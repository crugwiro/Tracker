import React, {useContext} from 'react';
import { View, StyleSheet} from 'react-native';
import {Context} from "../Context/AuthContext";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";
import {NavigationEvents} from "react-navigation";


const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(Context);

    return <View style={styles.container}>
        <NavigationEvents onWillFocus={clearErrorMessage}/>
        <AuthForm
            headerText="Sign Up For Tracker"
        onSubmit={signup}
        submitButtonText="Sign Up"
        errMessage={state.errMessage}
        />
        <NavLink
        routeName='Signin'
        text="Already have an account ? Sign in instead"
        />
    </View>
};

SignupScreen.navigationOptions = {
    headerShown: false
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});


export default SignupScreen;