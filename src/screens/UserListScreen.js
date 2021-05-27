import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {getUsersList} from '../store/reducer';
import Theme from '../ThemeVars';

class UserListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.props.getUsersList();
  }

  onClickListener = item => {
    this.props.navigation.navigate('DetailScreen', {type: 'user', data: item});
  };

  renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => this.onClickListener(item)}>
        <View style={styles.row}>
          <Image source={{uri: item.avatar}} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.first_name + ' ' + item.last_name}
              </Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.email}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {data} = this.props.data;

    return (
      <View style={{flex: 1}}>
        <FlatList
          extraData={this.state}
          data={data || []}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  let users = {...state.users};
  console.log('mapStateToProps state: userlist' + JSON.stringify(users));
  return {
    data: users.data,
    error: users.error,
    loading: users.loading,
  };
};

const mapDispatchToProps = {
  getUsersList,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListScreen);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width: 170,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});
