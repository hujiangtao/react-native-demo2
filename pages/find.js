import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class FindPage extends React.Component {
  render() {
    return (
      <View style={styles.findStyle}>
        <Text>发现</Text>
      </View>
    );
  }
}

/* 样式 */
const styles = StyleSheet.create({
  findStyle: {
    flex: 1,
    backgroundColor: 'rgb(255,160,122)',
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

export {FindPage};
