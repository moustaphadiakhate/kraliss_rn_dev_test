import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Theme from '../ThemeVars';
import Menu from '../components/common/Menu';

const menu = [
  {route: 'UserListScreen', description: 'User List'},
  {route: 'CreateUserScreen', description: 'Create User'},
  {route: 'ReduxDetailScreen', description: 'Redux Details'},
  {route: 'ResourceScreen', description: 'Resources'},
  {route: 'PdfSreen', description: 'PDF'},
];

const DashboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Menu style={styles.menu} items={menu} />
    </View>
  );
};

export default DashboardScreen;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  menu: {
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
};
