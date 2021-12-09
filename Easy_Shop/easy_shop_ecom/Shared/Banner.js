import React, { useState,useEffect } from 'react'
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper'

var { width } = Dimensions.get("window")
function Banner() {

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        setBanner(["https://media.gettyimages.com/photos/interior-of-modern-home-with-furniture-picture-id1162135105?s=2048x2048",
            "https://media.gettyimages.com/photos/woman-carrying-shopping-bags-picture-id107428671?s=2048x2048",
            "https://media.gettyimages.com/photos/canvas-shoes-picture-id171224469?s=2048x2048"])
        return () => {
            setBanner([])
        }
    }, [])

    return (
        <ScrollView>
            <View style={styles.contianer}>
                <View style={styles.swiper}>
                    <Swiper
                        style={{ height:width / 2 }}
                        showButton={false}
                        autoplay={true}
                        autoplayTimeout={2}
                    >
                        {banner.map((item) => {
                            return (
                                <Image
                                    key={item}
                                    style={styles.imageBanner}
                                   
                               source={{ uri: item }} />
                            )
                        })}
                    </Swiper>
                    <View style={{ height: 20 }}></View>
                </View>
            </View>
        </ScrollView>

    )
}

export default Banner

const styles = StyleSheet.create({
    contianer:
    {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    swiper:
    {
        width: width,
        alignItems: 'center',
        marginTop: 10
    },
    imageBanner:
    {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    }
})