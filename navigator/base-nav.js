import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.homeStyle}>
        <Text>首页</Text>
        <Button
          title="跳转到详情页面"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
      </View>
    );
  }
}

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.detailStyle}>
        <Text>详情页面</Text>
      </View>
    );
  }
}

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
// });

const rootStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
});

const AppContainer = createAppContainer(rootStack);

/* 样式 */
const styles = StyleSheet.create({
  homeStyle: {
    flex: 1,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailStyle: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {HomeScreen, AppContainer};
