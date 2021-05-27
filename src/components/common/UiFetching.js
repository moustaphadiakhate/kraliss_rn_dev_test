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
        source={require('../../assets/loading.gif')}
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
