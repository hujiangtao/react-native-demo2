import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';

// import {HomePage} from '../pages/home';
import {HomeRootStack} from './homeStackNavigator';
import {NearbyPage} from '../pages/nearby';
import {MinePage} from '../pages/mine';
import {FindPage} from '../pages/find';

// 底部导航
const TABS = {
  Home: {
    screen: HomeRootStack,
    NavigationOptions: {
      tabBarLabel: '首页',
    },
  },
  Find: {
    screen: FindPage,
    NavigationOptions: {
      tabBarLabel: '发现',
    },
  },
  Nearby: {
    screen: NearbyPage,
    NavigationOptions: {
      tabBarLabel: '附近',
    },
  },
  Mine: {
    screen: MinePage,
    NavigationOptions: {
      tabBarLabel: '我的',
    },
  },
};

class MainTabNavigator extends React.Component {
  _tabNavigator() {
    const {Home, Find, Nearby, Mine} = TABS;
    const tabs = {Home, Find, Nearby, Mine};

    if (!this.tabNavigator) {
      this.tabNavigator = createAppContainer(
        createBottomTabNavigator(tabs, {
          tabBarComponent: props => <BottomTabBar {...props} />,
        }),
      );
    }

    return this.tabNavigator;
  }

  render() {
    const TabNavigator = this._tabNavigator();
    return <TabNavigator />;
  }
}

export {MainTabNavigator};
