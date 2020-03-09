import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class HomePage extends React.Component {
  // 头部导航设置
  static navigationOptions = {
    title: '首页',
    headerStyle: {
      backgroundColor: 'rgb(100,149,237)',
    },
    headerTintColor: 'rgb(250,235,215)',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    headerLeft: () => <Button title="设置" onPress={() => alert('设置')} />,
    headerRight: () => (
      <Button title="扫一扫" onPress={() => alert('扫一扫')} />
    ),
  };

  render() {
    return (
      <View style={styles.homeStyle}>
        <Text>首页</Text>
        <Button
          title="跳转到详情页面"
          onPress={() => this.props.navigation.navigate('homeDetail')}
        />
      </View>
    );
  }
}

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

export {HomePage};
