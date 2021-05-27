import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Theme from '../ThemeVars';

const DetailScreen = props => {
  const detail = props.route.params;

  return (
    <View style={styles.container}>
      {detail.type === 'user' ? (
        <React.Fragment>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image style={styles.avatar} source={{uri: detail.data.avatar}} />
              <Text style={styles.name}>{detail.data.first_name}</Text>
              <Text style={styles.userInfo}>{detail.data.email} </Text>
            </View>
          </View>
          <View style={styles.body}></View>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Text style={styles.name}>{detail.data.name}</Text>
              <Text style={styles.name}>{detail.data.year}</Text>
              <Text style={styles.name}>{detail.data.pantone_value}</Text>
              <Text style={styles.userInfo}>{detail.data.color} </Text>
            </View>
          </View>
          <View
            style={[styles.body, {backgroundColor: detail.data.color}]}></View>
        </React.Fragment>
      )}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Theme.Colors.coolGrey,
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: Theme.Colors.orange,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  body: {
    backgroundColor: Theme.Colors.green,
    height: 500,
    alignItems: 'center',
  },
});
