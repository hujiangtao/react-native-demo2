import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class HomeDetail extends React.Component {
  static navigationOptions = {
    title: '详情页',
  };

  render() {
    return (
      <View style={styles.detailStyle}>
        <Text>详情页</Text>
      </View>
    );
  }
}

/* 样式 */
const styles = StyleSheet.create({
  detailStyle: {
    flex: 1,
    backgroundColor: 'rgb(245,245,220)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {HomeDetail};
