import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
function Header() {
    return (
        <View style={styles.header}>
            <Image
            resizeMode='center'
                source={require('../assets/pngtree-cartoon-tote-bag-image_1174743-removebg-preview.png')}
                style={{ height:80, marginHorizontal:50}}

            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:
    {
        width: '100%',
        flexDirection:'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    }
})
