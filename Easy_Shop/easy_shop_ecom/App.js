import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductContainer from './Products/ProductContainer'
import Header from './Shared/Header';
import { NativeBaseProvider} from 'native-base';
function App() {
  return (
<NativeBaseProvider>
<View style={styles.container}>
      
      <Header />
      <ProductContainer />
      
    </View>

</NativeBaseProvider>
   
   
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
