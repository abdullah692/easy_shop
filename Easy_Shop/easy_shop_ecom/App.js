import React from 'react'
import { View, StyleSheet } from 'react-native'
import SplashScreen from './components/SplashScreen'

function App() {
  return (
   <View style={styles.container}>
<SplashScreen/>

   </View>
  )
}

export default App


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
},
})