import React from 'react';
import {View, StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.img}>
      <Image
        source={{
          uri: 'https://media.gettyimages.com/photos/quaideazam-picture-id184944186?s=612x612',
        }}></Image>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 10,
  },
  img: {
    alignItems: 'center',
    height: 60,
    width: 50,
  },
});
