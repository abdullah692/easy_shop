import React, {useState} from 'react';
import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Login from './Login';
import Error from './Error';

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const register = () => {
    if (email === '' || password === '' || name === '' || phone === '') {
      setError('Please fill the form correctly');
    } else {
      console.log('Success..!!');
    }

    console.log(error);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.register}>Registration</Text>
      <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        extraHeight={200}
        enableOnAndroid={true}>
        <TextInput
          style={styles.text}
          placeholder="Email Address"
          value={email}
          id={email}
          onChangeText={email => setEmail(email.toLowerCase())}
        />
        <TextInput
          style={styles.text}
          placeholder={'Name'}
          value={name}
          id={name}
          onChangeText={name => setName(name.toLowerCase())}
        />

        <TextInput
          style={styles.text}
          placeholder={'Phone No'}
          value={phone}
          id={phone}
          keyboardType={'numeric'}
          onChangeText={phone => setPhone(phone.toLowerCase())}
        />

        <TextInput
          style={styles.text}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          id={password}
          onChangeText={pass => setPassword(pass)}
        />

        <View style={styles.btn}>
          {error ? <Error message={error} /> : null}

          <Button title="Register" onPress={() => register()}></Button>
        </View>
        <View style={[{marginTop: 10}, styles.btn]}>
          <Text style={styles.middle}>Don't have any account yet?</Text>
          <Button title="Back to Login" onPress={() => <Login />}></Button>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  register: {
    fontSize: 35,
    fontFamily: 'sans',
    marginBottom: 10,
  },
  text: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'coral',
    margin: 10,
    marginVertical: 10,
    padding: 10,
    width: 250,
  },
  btn: {
    margin: 5,
    alignItems: 'center',
  },
  middle: {
    margin: 20,
    textAlign: 'center',
  },
});
