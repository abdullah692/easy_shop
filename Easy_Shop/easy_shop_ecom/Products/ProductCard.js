import React from 'react'
import { View, Text, StyleSheet, Image, Button, Dimensions } from 'react-native'

var { width } = Dimensions.get('window');
function ProductCard(props) {
    const { image, price, name, countInStock } = props;
    return (
        <View style={styles.contianer}>
            <Image style={styles.image}
                resizeMode="contain"
                source={{ uri: image ? image : 'https://unsplash.com/photos/qS6BLSaa63A' }} />
            <View style={styles.card} />
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 15 - 3) + "..." : name}
            </Text>
            <Text style={styles.price}>${price}</Text>
            {countInStock > 0 ? (
                <View style={{ marginBottom: 50 }}>
                    <Button style={styles.btn} title={'Add'} color={'lightgreen'} />
                </View>
            ) :
                <Text style={{ marginBottom: 20 }}>Currently out of stock</Text>
            }
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    contianer:
    {

        width: width / 2 - 20,
        height: width / 1.5,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white',
    },

    image:
    {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -10,
        borderRadius: 50
    },
    card:
    {
        marginBottom: 10,
        height: width / 2 - 20 - 100,
        width: width / 2 - 20 - 10,
        backgroundColor: 'transparent'
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: 'center',
        marginTop: 25
    },
    price:
    {
        marginBottom: 10,
        fontSize: 30,
        color: 'orange',
        marginTop: 10
    },
    btn:
    {
        marginBottom: 10,
        width: 100,
        padding: 10
    }
})
