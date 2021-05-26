import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import Theme from '../../ThemeVars';

const ModalComponent = props => {
  return (
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={props.modalVisible}
      onRequestClose={() => props.onRequestClose()}>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{props.message}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: Theme.Colors.green,
    width: 300,
    height: 250,
  },
  modalText: {
    fontSize: 18,
    fontWeight: '700',
    color: Theme.Colors.orange,
  },
});
