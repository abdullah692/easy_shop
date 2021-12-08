import React from 'react'
import { View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import ProductCard from './ProductCard'

var { width } = Dimensions.get("window")

function ProductList(props) {
    const { item } = props;
    return (
        <View>
            <TouchableOpacity stlye={{ width: '100%' }}>
                <View style={{ width: width / 2, backgroundColor: 'lightgrey' }}>
                    <ProductCard {...item} />
                </View>

            </TouchableOpacity>
        </View>
    )
}

export default ProductList


