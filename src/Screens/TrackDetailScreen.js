import React, {useContext} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Context as TrackContext} from '../Context/TracksContext'
import MapView, {Polyline} from "react-native-maps";
import Spacer from "../Components/Spacer";


const TrackDetailScreen = ({navigation}) => {
    const {state} = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(t => t._id === _id);
    const initialLocation = track.locations[0].coords;

    return <>
        <Spacer/>
        <Text style={{fontSize: 40, marginLeft: 135}}>{track.name}</Text>
        <MapView style={styles.map}
            initialRegion={{
            longitudeDelta: 0.01,
            latitudeDelta: 0.01,
                ...initialLocation
            }}
        >
            <Polyline coordinates={track.locations.map(loc => loc.coords)}/>
            </MapView>

    </>
};
TrackDetailScreen.navigationOptions = {
    title: 'Track Details'
};


const styles = StyleSheet.create({
    map:{
        height: 300,
        borderRadius: 5,
        padding: 10,
        borderColor: 'red',
        margin: 10
    },
    container: {
        backgroundColor: 'grey'
    }
});


export default TrackDetailScreen;