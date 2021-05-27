import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import Theme from '../../ThemeVars';

const ModalComponent = props => {
  const success = props.success || false;
  return (
    <Modal
      animationType={'fade'}
      transparent={false}
      visible={props.modalVisible}
      onRequestClose={() => props.onRequestClose()}>
      <View style={[styles.modal]}>
        <View
          style={[
            styles.modalContent,
            success ? {borderColor: Theme.Colors.green} : null,
          ]}>
          <Text
            style={[
              styles.modalText,
              success ? {color: Theme.Colors.green} : null,
            ]}>
            {props.message}
          </Text>
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
    borderColor: Theme.Colors.danger,
    width: 300,
    height: 150,
  },
  modalText: {
    fontSize: 12,
    fontWeight: '700',
    color: Theme.Colors.danger,
  },
});
