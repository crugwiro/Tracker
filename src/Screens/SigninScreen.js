import React, {useContext} from 'react';
import { View, StyleSheet} from 'react-native';
import {Context} from "../Context/AuthContext";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";
import {NavigationEvents} from "react-navigation";


const SigninScreen = ({navigation}) => {
    const {state, signin, clearErrorMessage} = useContext(Context);

    return <View style={styles.container}>
        <NavigationEvents onWillBlur={clearErrorMessage}/>
        <AuthForm
            headerText="Sign In to Your Account"
            onSubmit={signin}
            submitButtonText="Sign In"
            errMessage={state.errMessage}
        />
        <NavLink
            routeName='Signup'
            text="Dont have an Account ? Sign Up instead"
        />
    </View>
};

SigninScreen.navigationOptions = {
    headerShown: false
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SigninScreen;