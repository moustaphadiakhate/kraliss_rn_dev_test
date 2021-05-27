import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {getResourceList} from '../store/reducer';
import Theme from '../ThemeVars';
import UiLoad from '../components/common/UiFetching';

class ResourceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.props.getResourceList();
  }

  onClickListener = item => {
    this.props.navigation.navigate('DetailScreen', {
      type: 'resource',
      data: item,
    });
  };

  render() {
    const {data} = this.props.data;

    return (
      <View style={styles.container}>
        {this.props.loading && <UiLoad loading={this.props.loading} />}

        <FlatList
          style={styles.itemList}
          data={data || []}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => this.onClickListener(item)}
                style={styles.itemContainer}>
                <View
                  style={[styles.colorZone, {backgroundColor: item.color}]}
                />

                <Text
                  style={
                    styles.name
                  }>{`${item.name}  ${item.year}  ${item.pantone_value}`}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  let resources = {...state.resources};
  console.log('mapStateToProps state: resources' + JSON.stringify(resources));
  return {
    data: resources.data,
    error: resources.error,
    loading: resources.loading,
  };
};

const mapDispatchToProps = {
  getResourceList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemList: {
    marginTop: 20,
    padding: 10,
  },
  itemContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 10,
  },
  colorZone: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 10,
    alignSelf: 'center',
  },
});
