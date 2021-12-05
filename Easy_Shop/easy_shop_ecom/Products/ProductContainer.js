import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ProductList from './ProductList';

const data = require("../assets/084 products.json");
console.log(data);

function ProductContainer() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(data)
        return () => {
            setProduct([])
        }
    }, [])


    return (
        <View style={styles.container}>
            <FlatList
                data={product}
                renderItem={({ item }) => <ProductList
                    key={item.id}
                    item={item} />}
                keyExtractor={item => item.name}
            />
        </View>
    )
}

export default ProductContainer

const styles=StyleSheet.create({
    container:
    {
flex:1,
marginBottom:'10%'

    }
})
