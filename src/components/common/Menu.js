import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Theme from '../../ThemeVars';

const Menu = ({items, style}) => {
  const navigation = useNavigation();
  return (
    <View style={{...styles.container, ...style}}>
      {items.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.route)}
            style={styles.circle}>
            <Text style={styles.text}>{item.description}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    backgroundColor: 'rgba(102, 218, 178, 1)',
    borderWidth: 2,
    margin: 12,
    borderColor: 'rgba(246, 191, 76, 1)',
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
});
