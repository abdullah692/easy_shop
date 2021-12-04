import React,{useEffect, useState} from 'react'
import { View,Text, FlatList } from 'react-native'


const data=require("../assets/084 products.json");
console.log(data);

function ProductContainer() 
{
    const [product,setProduct]=useState([]);

    useEffect(()=>{
        setProduct(data)
        return()=>{
            setProduct([])
        }
    },[])    


    return (
       <View>
<Text>Product Container</Text>
<FlatList
data={product}
renderItem={({item})=><Text>{item.brand}</Text>}
keyExtractor={item=>item.name}
/>
 </View>
    )
}

export default ProductContainer
