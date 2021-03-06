import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  TextInput,
  StatusBar,
} from 'react-native';
//import for gradient color
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
//import animatable
import * as Animatable from 'react-native-animatable';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    conf_password: '',
    check_text_input_change: false,
    secureTextEntry: true,
    confSecureTextEntry: true,
  });
  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_text_input_change: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_text_input_change: false,
      });
    }
  };
  const handelPasswordChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        password: val,
      });
    }
  };
  const handelConformPasswordChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        conf_password: val,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const confPpdateSecureTextEntry = () => {
    setData({
      ...data,
      confSecureTextEntry: !data.confSecureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_text_input_change ? (
            <Animatable.View animation="bounceIn">
              <FontAwesome name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handelPasswordChange(val)}
          />
          <TouchableOpacity onPress={() => updateSecureTextEntry()}>
            {data.secureTextEntry ? (
              <FontAwesome name="eye-slash" color="green" size={20} />
            ) : (
              <FontAwesome name="eye" color="green" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>
          Conform Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Conform Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.confSecureTextEntry ? true : false}
            onChangeText={(val) => handelConformPasswordChange(val)}
          />
          <TouchableOpacity onPress={() => confPpdateSecureTextEntry()}>
            {data.confSecureTextEntry ? (
              <FontAwesome name="eye-slash" color="green" size={20} />
            ) : (
              <FontAwesome name="eye" color="green" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
            <Text style={[styles.textSign, {color: '#fff'}]}>Sign Up</Text>
          </LinearGradient>
          <TouchableOpacity
            style={[
              styles.signIn,
              {borderColor: '#009387', borderWidth: 1, marginTop: 15},
            ]}
            onPress={() => navigation.goBack()}>
            <Text style={[styles.textSign, {color: '#009387'}]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
