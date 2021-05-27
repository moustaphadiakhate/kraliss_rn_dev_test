import React from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView} from 'react-native';
import Theme from '../ThemeVars';

const ReduxDetailScreen = props => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Text style={{fontSize: 18}}>{JSON.stringify(props.storeState)}</Text>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    storeState: state,
  };
};

export default connect(mapStateToProps, null)(ReduxDetailScreen);
