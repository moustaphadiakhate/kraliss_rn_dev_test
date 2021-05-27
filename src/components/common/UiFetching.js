import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const UiFetching = ({loading, style}) => {
  if (!loading) {
    return null;
  }

  return (
    <View style={[styles.loading, style]}>
      <Image
        style={styles.loading}
        source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}
      />
    </View>
  );
};

export default UiFetching;

const styles = StyleSheet.create({
  loading: {
    width: 30,
    height: 30,
    borderBottomColor: 'red',
    borderWidth: 2,
  },
});
