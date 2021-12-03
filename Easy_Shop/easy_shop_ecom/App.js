import React from 'react';
import {View, StyleSheet} from 'react-native';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';


function App() {
  return (
    <View style={styles.container}>
      <Login/>
     
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
