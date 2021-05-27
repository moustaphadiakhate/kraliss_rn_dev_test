import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const UiFetching = ({loading}) => {
  if (!loading) {
    return null;
  }

  return (
    <Image
      style={styles.loading}
      source={require('../../assets/loading.gif')}
    />
  );
};

export default UiFetching;

const styles = StyleSheet.create({
  loading: {
    width: 50,
    height: 50,
  },
});
