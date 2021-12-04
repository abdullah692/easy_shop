import React from 'react';
import {View, StyleSheet} from 'react-native';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Register from './components/Register';
import ProductContainer from './Products/ProductContainer';

function App() {
  return (

    <View style={styles.container}>
 
      <ProductContainer/>
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
