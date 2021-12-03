import React, { useState } from 'react'
import { View, TextInput, Text, Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
function Register() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const register = () => {
        if (email === "" || password === "" || name === '' || phone === '') {
            setError('Please fill the form correctly');
        }
        else {
            console.log('Success..!!')
        }
    }

    return (
        <View>
            <KeyboardAwareScrollView
            viewIsInsideTabBar={true}
            extraHeight={200}
            enableOnAndroid={true}
            >
            <FormContianer title={Register}>
                <TextInput
                    style={styles.text}
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChangeText={(email) => setEmail(email.toLowerCase())}
                />
                <TextInput
                    style={styles.text}
                    placeholder={"name"}
                    value={name}
                    onChangeText={(name) => setName(name.toLowerCase())}
                />

                <TextInput
                    style={styles.text}
                    placeholder={"Phone No"}
                    value={phone}
                    keyboardType={"numeric"}
                    onChangeText={(phone) => setPhone(phone.toLowerCase())}
                />


                <TextInput
                    style={styles.text}
                    placeholder="Enter Your Password"
                    secureText={true}
                    value={password}
                    onChangeText={(pass) => setPassword(pass)}
                />

                <View style={styles.btn}>
                    {error ? <Error message={error} /> : null}
                    <Button title='Login' onPress={() => register()} />
                </View>
                <View style={[{ marginTop: 40 }, styles.btn]}>
                    <Text style={styles.middle}>Don't have any account yet?</Text>
                    <Button title={"Back to Login"} onPress={() => <Login />} />
                </View>

            </FormContianer>
            </KeyboardAwareScrollView>
        </View>


    )
}

export default Register

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:
    {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'coral',
        margin: 10,
        padding: 10
    },
    btn:
    {
        width: '80%',
        alignItems: 'center'
    },
    middle: {
        margin: 10,
        textAlign: 'center'
    },
})
