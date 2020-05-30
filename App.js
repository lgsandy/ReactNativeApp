import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import drawer
import {createDrawerNavigator} from '@react-navigation/drawer';
//import main tab screen
import MainTabScreen from './screen/MainTabScreen';
//import drawer content
import {DrawerContent} from './screen/DrawerContent';
import SupportScreen from './screen/SupportScreen';
import SettingsScreen from './screen/SettingsScreen';
import BookMarkScreen from './screen/BookMarkScreen';

import RootScreen from './screen/RootStackScreen';

import {AuthContext} from './component/context';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  //create reducer function
  const loginReducer = (prevoiusState, action) => {
    switch (action.type) {
      //to check previousely user is loged in or not
      case 'RETERIVE_TOKEN':
        return {
          ...prevoiusState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevoiusState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevoiusState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevoiusState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  //now create reducer
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  //to speed up execution use  react hooks
  const authContext = React.useMemo(() => ({
    signIn: async (userName, password) => {
      let userToken;
      userToken = null;
      // console.log('before');
      // console.log('user:' + userName + ' pass:' + password);
      if (userName == 'sandy' && password == 'sandy') {
        // console.log('ihgjhjh');
        userToken = 'hgfhfhfhg';
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
      }

      dispatch({type: 'LOGIN', id: userName, token: userToken});
      // setUserToken('dfgsd');
      // setIsLoading(false);
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'LOGOUT'});
    },
    sinmUp: () => {
      // setUserToken('dfgsd');
      // setIsLoading(false);
    },
  }));

  //react hooks is runs during loading screen
  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RETERIVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  //create screen to shoe load screen
  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken != null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookMarkScreen} />
          </Drawer.Navigator>
        ) : (
          <RootScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
