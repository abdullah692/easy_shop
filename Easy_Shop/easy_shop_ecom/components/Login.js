import React, { useState } from 'react'
import { View, StyleSheet,Text,TextInput,FormContianer, Button } from 'react-native'
import Header from './Header'
function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    return (
        <View style={styles.container}>
            <Header />
            <View>
<FormContianer title={Login}>
<TextInput
          style={styles.text}
          placeholder="Enter Your Email Address"
         value={email}
         onChangeText={(email)=>setEmail(email.toLowerCase())}
          />

<TextInput
          style={styles.text}
          placeholder="Enter Your Password"
         secureText={true}
         value={password}
         onChangeText={(pass)=>setPassword(pass)}
          />

          <View style={styles.btn}>
              <Button title='Login'/>
          </View>
<View style={[{marginTop:40}, styles.btn]}>
<Text style={styles.middle}>Don't have any account yet?</Text>
<Button title="Register" onPress={()=><Registration/>}/>
</View>

</FormContianer>
            </View>
        </View>
    )
}

export default Login

const styles=StyleSheet.create({
    container:
    {
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
    },
    text:
    {
        borderWidth:1,
        borderRadius:'20',
        borderColor:'coral',
        margin:10,
        padding:10
    },
    btn:
    {
        width:'80%',
        alignItems:'center'
    },
    middle:{
        margin:10,
        textAlign:'center'
    },

})