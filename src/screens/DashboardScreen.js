import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const DashboardScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('UserListScreen')}
        style={styles.circle}>
        <Text style={styles.text}>UserListScreen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ReduxDetailScreen')}
        style={styles.circle}>
        <Text style={styles.text}>ReduxDetailScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;

const styles = {
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    backgroundColor: 'rgba(102, 218, 178, 1)',
    borderWidth: 2,
    marginBottom: 5,
    borderColor: 'rgba(246, 191, 76, 1)',
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
};
