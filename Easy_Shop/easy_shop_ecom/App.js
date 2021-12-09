
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductContainer from './Products/ProductContainer';
import Header from './Shared/Header';

function App() {
  return (

<View style={styles.container}>
  
      
      <Header />
      <ProductContainer />
      
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
