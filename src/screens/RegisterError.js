import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Menu from '../components/common/Menu';
import Modal from '../components/common/Modal';

const RegisterErrorScreen = props => {
  const [modalVisible, setModalVisible] = useState(true);
  const menu = [
    {route: 'Login', description: 'Login'},
    {route: 'Home', description: 'Dashboard'},
  ];

  return (
    <View style={styles.container}>
      <Modal
        modalVisible={modalVisible}
        message={JSON.stringify(props.route.params.message)}
        onRequestClose={() => setModalVisible(false)}
      />
      <Menu style={{top: 20}} items={menu} />
    </View>
  );
};

export default RegisterErrorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
});
