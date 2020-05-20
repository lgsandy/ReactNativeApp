import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import drawer
import {createDrawerNavigator} from '@react-navigation/drawer';
//import screens
import HomeScreen from './screen/HomeScreen';
import DetailsScreen from './screen/DetailsScreen';
//impotr vector icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="DetailsScreen" component={DetailStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
