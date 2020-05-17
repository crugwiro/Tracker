import React, {useContext} from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {NavigationEvents} from "react-navigation";
import {ListItem} from "react-native-elements";
import {Context as TrackContext} from '../Context/TracksContext'


const TrackListScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext);
    return (
    <>
        <NavigationEvents on onWillFocus={fetchTracks}/>
        <FlatList data={state}
                  keyExtractor={item => item._id}
                  renderItem={({item}) => {
                      return <TouchableOpacity onPress={() => {
                          navigation.navigate('TrackDetail', {_id: item._id});
                      }}>
                          <ListItem chevron title={item.name} style={{marginTop: 5}}/>
                      </TouchableOpacity>
                  }}
        />
    </>
    )
};

TrackListScreen.navigationOptions = {
    title: 'Tracks'
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green'
    }
});


export default TrackListScreen;