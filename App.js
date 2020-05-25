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

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  //to speed up execution use  react hooks
  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('dfgsd');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    sinmUp: () => {
      setUserToken('dfgsd');
      setIsLoading(false);
    },
  }));

  //react hooks is runs during loading screen
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  //create screen to shoe load screen
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken != null ? (
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
