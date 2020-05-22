import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import drawer
import {createDrawerNavigator} from '@react-navigation/drawer';
//import main tab screen
import MainTabScreen from './screen/MainTabScreen';
//import drawer content
import {DrawerContent} from './screen/DrawerContent';
import SupportScreen from './screen/SupportScreen';
import SettingsScreen from './screen/SettingsScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        {/* <Drawer.Screen name="SupportScreen" component={SupportScreen} /> */}
        {/* <Drawer.Screen name="SettingsScreen" component={SettingsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
