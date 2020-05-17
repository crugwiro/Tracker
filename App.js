import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from "./src/Screens/AccountScreen";
import SigninScreen from "./src/Screens/SigninScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import TrackCreateScreen from "./src/Screens/TrackCreateScreen";
import TrackDetailScreen from "./src/Screens/TrackDetailScreen";
import TrackListScreen from "./src/Screens/TrackListScreen";
import {Provider} from "./src/Context/AuthContext";
import {setNavigator} from "./src/navigationRef";
import ResolveAuth from "./src/Screens/ResolveAuth";
import {Provider as LocationProvider} from './src/Context/LocationContext'
import {Provider as TrackProvider} from './src/Context/TracksContext'
import {FontAwesome} from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name="th-list" size={20}/>
};


const switchNavigator = createSwitchNavigator({
  Resolve: ResolveAuth,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});


const App =  createAppContainer(switchNavigator);

export default () => {
  return (
      <TrackProvider>
          <LocationProvider>
            <Provider>
               <App ref={(navigator)=> {setNavigator(navigator)}}/>
            </Provider>
          </LocationProvider>
    </TrackProvider>
  );
};