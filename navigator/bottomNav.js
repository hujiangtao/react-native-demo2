import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.homeStyle}>
        <Text>首页</Text>
      </View>
    );
  }
}

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.detailStyle}>
        <Text>详情页</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
});

const AppContainer = createAppContainer(TabNavigator);

/* 样式 */
const styles = StyleSheet.create({
  homeStyle: {
    flex: 1,
    backgroundColor: 'rgb(240,230,140)',
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

export {AppContainer};
