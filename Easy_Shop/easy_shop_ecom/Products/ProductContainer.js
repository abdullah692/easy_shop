import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ProductList from './ProductList';
import { Icon, Container, Item, Input, Header } from 'native-base'
import SearchedList from './SearchedList';
import Banner from '../Shared/Banner';


const data = require("../assets/084 products.json");
console.log(data);

function ProductContainer() {
    const [product, setProduct] = useState([]);
    const [productFiltered, setProductFiltered] = useState([]);
    const [focus, setFocus] = useState();

    useEffect(() => {
        setProduct(data)
        setProductFiltered(data)
        setFocus(false);
        return () => {
            setProduct([])
            setProductFiltered([])
            setFocus([])
        }
    }, [])

    const searchProduct = (text) => {
        setProductFiltered(
            product.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = () => {
        setFocus(true)
    }
    const onBlur = () => {
        setFocus(false)
    }


    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search"
                        onFocus={openList}
                        onChangeText={(text) => searchProduct(text)}
                    />
                    {focus == true ? (
                        <Icon name="ios-close" onPress={onBlur} />
                    ) : null}
                </Item>

            </Header>
            {focus == true ? (
                <SearchedList
                    productFiltered={productFiltered} />
            ) : (
                <View style={styles.container}>
                    <View><Banner /></View>
                    <FlatList
                        data={product}
                        renderItem={({ item }) => <ProductList
                            key={item.id}
                            item={item} />}
                        keyExtractor={item => item.name}
                    />
                </View>

            )}
        </Container>


    )
}

export default ProductContainer

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        marginBottom: '10%'

    }
})
