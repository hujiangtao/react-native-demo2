import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class MinePage extends React.Component {
  render() {
    return (
      <View style={styles.mineStyle}>
        <Text>我的</Text>
      </View>
    );
  }
}

/* 样式 */
const styles = StyleSheet.create({
  mineStyle: {
    flex: 1,
    backgroundColor: 'rgb(127,255,170)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailStyle: {
    flex: 1,
    backgroundColor: 'rgb(245,245,220)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {MinePage};
