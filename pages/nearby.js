import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class NearbyPage extends React.Component {
  render() {
    return (
      <View style={styles.nearbyStyle}>
        <Text>附近</Text>
      </View>
    );
  }
}

/* 样式 */
const styles = StyleSheet.create({
  nearbyStyle: {
    flex: 1,
    backgroundColor: 'rgb(230,230,250)',
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

export {NearbyPage};
