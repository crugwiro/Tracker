import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Button} from "react-native-elements";
import Spacer from "../Components/Spacer";
import {Context} from "../Context/AuthContext";
import {SafeAreaView} from "react-native";
import {FontAwesome} from '@expo/vector-icons';


const AccountScreen = () => {
    const {signout} = useContext(Context);
    return (
    <SafeAreaView forceInset={{top: 'always'}}>
        <Text>Account Screen</Text>
        <Spacer>
        <Button title="Sign Out" onPress={signout}/>
        </Spacer>
    </SafeAreaView>
    )
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name='gear' size={20}/>,
    headerBackTitle: ''
};


const styles = StyleSheet.create({});


export default AccountScreen;