import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Login from './Login';
function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      <Login />;
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://media.gettyimages.com/photos/quaideazam-picture-id184944186?s=612x612',
        }}></Image>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 250,
  },
});
