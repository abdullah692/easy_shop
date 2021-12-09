import { View, StyleSheet, Text, Dimensions } from 'react-native'
import React from 'react'
import { Left, Container, Body, ListItem, Thumbnail, } from 'native-base'

var { width } = Dimensions.get('window');

function SearchedList(props) {
    const { productFiltered } = props;
    return (
        <Content style={{ width: width }}>
            {productFiltered.length > 0 ? ( 
                productFiltered.map((item) => {
                    <ListItem key={item._id} avatar>
                        <Left>
                            <Thumbnail
                                source={{ uri: item.image ? item.image : 'https://media.gettyimages.com/photos/general-view-of-brazuca-and-the-fifa-world-cup-trophy-at-the-maracana-picture-id453347919?s=2048x2048' }} />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem>
                })
            ) :
                (
                    <View style={styles.center
                     }>
                        <Text style={{ alignSelf: 'center' }}>
                            No product match the selected criteria
                        </Text>
                    </View>
                )}
        </Content>
    )
}

export default SearchedList

const styles = StyleSheet.create({
    center:
    {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
