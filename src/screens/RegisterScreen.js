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
import {register} from '../store/reducer';
import Theme from '../ThemeVars';
import UiLoad from '../components/common/UiFetching';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      triedRegister: false,
    };
  }

  onClickListener = () => {
    this.props.register(this.state.email, this.state.password);
    this.setState({triedRegister: true, email: '', password: ''});
  };

  errorHandler = () => {
    return this.props.RegisterStarte.error != false && this.state.triedRegister;
  };

  render() {
    return (
      <View style={styles.container}>
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
            value={this.state.email}
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
            value={this.state.password}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.registerButton]}
          onPress={() => this.onClickListener()}
          disabled={this.props.RegisterStarte.loading}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('Login')}
          disabled={this.props.RegisterStarte.loading}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <UiLoad loading={this.props.RegisterStarte.loading} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  let register = {...state.register};
  console.log('mapStateToProps: register ' + JSON.stringify(register));
  return {
    RegisterStarte: register,
  };
};

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);

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
  registerButton: {
    backgroundColor: Theme.Colors.green,
  },
  registerText: {
    color: 'white',
  },
  loginText: {
    fontWeight: 15,
    fontWeight: '700',
    color: Theme.Colors.orange,
  },
});
