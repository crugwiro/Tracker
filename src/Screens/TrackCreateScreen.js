// import '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements'
import {SafeAreaView, withNavigationFocus} from "react-navigation";
import Map from "../Components/Map";
import {Context as LocationContext} from '../Context/LocationContext'
import useLocation from "../Hooks/useLocation";
import TrackForm from "../Components/TrackForm";
import {Entypo} from '@expo/vector-icons';


const TrackCreateScreen = ({isFocused}) => {
    const {state: {recording}, addLocation} = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, recording)}, [recording]);
    // console.log(` IN TRACK LOCATION ${state.recording}`);
    const [err] = useLocation(isFocused || recording, callback);
    return(
        <SafeAreaView>
            <Text h3>Create a Track</Text>
            <Map/>
            <TrackForm/>
            {err? <Text> Please Allow access</Text> : null}
        </SafeAreaView>
    )
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <Entypo name="plus" size={20}/>
};

const styles = StyleSheet.create({});


export default withNavigationFocus(TrackCreateScreen);