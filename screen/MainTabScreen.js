import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//impotr vector icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import screens
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExplorerScreen from './ExplorerScreen';

//import buttom tab navigator
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
//create main tab screen
const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color}) => (
            <FontAwesome name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#d953f7',
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExplorerScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#fa59b8',
          tabBarIcon: ({color}) => (
            <FontAwesome name="th" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;
//home stack scree
const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <FontAwesome
              name="navicon"
              size={25}
              color="#fff"
              style={{marginLeft: 10}}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
//details stack screen
const DetailStackScreen = ({navigation}) => {
  return (
    <DetailStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
      }}>
      <DetailStack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerLeft: () => (
            <FontAwesome
              name="navicon"
              size={25}
              color="#fff"
              style={{marginLeft: 10}}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </DetailStack.Navigator>
  );
};
