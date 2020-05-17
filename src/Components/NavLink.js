import React from "react";

import {withNavigation} from "react-navigation";
import Spacer from "./Spacer";
import {Text} from "react-native-elements";
import {TouchableOpacity, StyleSheet} from "react-native";

const NavLink = ({navigation, text, routeName}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.text}> {text}</Text>
            </Spacer>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    text: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);