import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import {addUser, creanCreate} from '../store/reducer';
import Theme from '../ThemeVars';
import Modal from '../components/common/Modal';
import UiLoad from '../components/common/UiFetching';

class CreateUserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      triedCreate: false,
    };
  }

  onClickListener = () => {
    this.props.addUser({nom: this.state.nom, prenom: this.state.prenom});
    this.setState({triedCreate: true, nom: '', prenom: ''});
  };

  onModalCosed = () => {
    this.props.creanCreate();
    this.setState({triedCreate: false});
  };

  errorHandler = () => {
    return (
      !this.props.newUser.loading &&
      this.props.newUser.triedCreate &&
      this.state.triedCreate
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          modalVisible={this.errorHandler()}
          message={
            this.props.newUser.success
              ? JSON.stringify(this.props.newUser.data)
              : this.props.newUser.error
          }
          success={this.props.newUser.success}
          onRequestClose={() => this.onModalCosed()}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Nom"
            underlineColorAndroid="transparent"
            onChangeText={nom => this.setState({nom})}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Prenom"
            underlineColorAndroid="transparent"
            onChangeText={prenom => this.setState({prenom})}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.createButton]}
          onPress={() => this.onClickListener()}
          disabled={this.props.newUser.loading}>
          <Text style={styles.createText}>Ajouter</Text>
        </TouchableHighlight>

        <UiLoad loading={this.props.newUser.loading} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  let newUser = {...state.newUser};
  console.log('mapStateToProps state: newUser ' + JSON.stringify(newUser));
  return {
    newUser: newUser,
  };
};

const mapDispatchToProps = {
  addUser,
  creanCreate,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 5,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  createButton: {
    backgroundColor: Theme.Colors.green,
  },
  createText: {
    color: 'white',
  },
});
