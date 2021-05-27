import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {login} from '../store/reducer';
import Theme from '../ThemeVars';
import Modal from '../components/common/Modal';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      triedAuth: false,
    };
  }

  onClickListener = () => {
    this.props.login(this.state.email, this.state.password);
    this.setState({triedAuth: true, email: '', password: ''});
  };

  errorHandler = () => {
    return this.props.loginState.error != false && this.state.triedAuth;
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          modalVisible={this.errorHandler()}
          message={this.props.loginState.error}
          onRequestClose={() => this.setState({triedAuth: false})}
        />
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: 'https://png.icons8.com/message/ultraviolet/50/3498db',
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onClickListener()}
          disabled={this.props.loginState.loading}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('Register')}
          disabled={this.props.loginState.loading}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  let login = {...state.login};
  console.log(
    'mapStateToProps state: login ' + login.error + JSON.stringify(login),
  );
  return {
    loginState: login,
  };
};

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

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
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
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
  loginButton: {
    backgroundColor: Theme.Colors.green,
  },
  loginText: {
    color: 'white',
  },
  registerText: {
    fontWeight: 15,
    fontWeight: '700',
    color: Theme.Colors.orange,
  },
});
