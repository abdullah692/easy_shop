import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ProductList from './ProductList';
import { Icon, Container, Item, Input, Header } from 'native-base'
import SearchedList from './SearchedList';
import Banner from '../Shared/Banner';
import CategoryFilter from './CategoryFilter';


const data = require("../assets/084 products.json");
const productCat = require("../assets/094 categories.json");
console.log(data);
console.log(productCat);

function ProductContainer() {
    const [product, setProduct] = useState([]);
    const [productFiltered, setProductFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories, setCategories] = useState([]);
    const [Productctg, setProductctg] = useState([]); 
    const [active, setActive] = useState();
    const [initialstate, setInitialState] = useState([]);
    

    useEffect(() => {
        setProduct(data)
        setProductFiltered(data)
        setFocus(false);
        setCategories(productCat)
        setActive(-1)
        setInitialState(data)
        return () => {
            setProduct([])
            setProductFiltered([])
            setFocus([])
            setCategories([])
            setActive()
            setInitialState()

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

    //Categories

    const changeCtg = (ctg) => {
        ctg === "all"
            ? [setProductctg(initialstate), setActive(true)]
            : [
                setProductctg(
                    product.filter((i) => i.category._id == ctg),
                    setActive(true)
                )
            ]
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
                    <View>
                        <Banner />
                    </View>
                    <View>  
                     <CategoryFilter
                        categories={productCat}
                        CategoryFilter={changeCtg}
                        productCtg={Productctg}
                        setActive={setActive}
                        active={active}
                    />
                    </View>
                    <FlatList
                        data={product}
                        numColumns={2}
                        renderItem={({ item }) => <ProductList
                            key={item.id}
                            item={item} />}
                        keyExtractor={item => item.brand }
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
