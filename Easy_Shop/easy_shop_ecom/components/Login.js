import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import Header from './Header';
import Error from './Error';
import Register from './Register';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };
    if (email === '' || password === '') {
      setError('Please fill your credentials');
    } else {
      console.log('Success..!!');
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <View>
      <Text style={styles.register}>User Login</Text>
        {/* <FormContainer title={Login}> */}
        <TextInput
          style={styles.text}
          placeholder="Email Address"
          value={email}
          onChangeText={email => setEmail(email.toLowerCase())}
        />

        <TextInput
          style={styles.text}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={pass => setPassword(pass)}
        />

        <View style={styles.btn}>
          {error ? <Error message={error} /> : null}
          <Button title="Login" style={[{with:50}]} onPress={() => handleSubmit()} />
        </View>

        <View style={[{marginTop: 40}, styles.btn]}>
          <Text style={styles.middle}>Don't have any account yet?</Text>
          <Button title="Register" onPress={() => <Register />} />
        </View>
        {/* </FormContainer> */}
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  register: {
      textAlign:'center',
    fontSize: 35,
    fontFamily: 'sans',
    marginBottom: 10,
  },
  text: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'coral',
    margin: 10,
    marginVertical:10,
    padding: 10,
    width:250
  },
  btn: {
    alignItems: 'center',
    marginTop:20,
  },
  middle: {
    margin: 10,
    textAlign: 'center',
  },
});
