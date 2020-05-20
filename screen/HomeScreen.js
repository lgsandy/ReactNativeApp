import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => {
          navigation.navigate('DetailsScreen');
        }}></Button>
    </View>
  );
};

export default HomeScreen;
