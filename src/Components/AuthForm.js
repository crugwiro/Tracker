import React, {useState} from 'react';
import {StyleSheet, View} from "react-native";
import {Input, Button, Text} from "react-native-elements";
import Spacer from "./Spacer";


const AuthForm = ({headerText, onSubmit, submitButtonText, errMessage}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
    <>
        <Spacer>
        <Text h3>{headerText}</Text>
        </Spacer>
        <Input label="Email"
               value={email}
               onChangeText={setEmail}
               autoCapitalize="none"
               autoCorrect={false}
        />
        <Input label="Password"
               secureTextEntry
               value={password}
               onChangeText={setPassword}
               autoCapitalize="none"
               autoCorrect={false}
        />
        <Spacer>
            {errMessage? <Text style={styles.errMessage}>{errMessage}</Text> : null}
            <Button title={submitButtonText} onPress={()=>onSubmit({email, password})}/>
        </Spacer>
    </>
    );
};

const styles = StyleSheet.create({
    errMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginBottom: 15
    }
});


export default AuthForm;