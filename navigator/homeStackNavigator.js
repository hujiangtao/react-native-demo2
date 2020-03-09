import {createStackNavigator} from 'react-navigation-stack';
import {HomePage} from '../pages/home';
import {HomeDetail} from '../pages/homeDetail';

const HomeRootStack = createStackNavigator(
  {Home: HomePage, homeDetail: HomeDetail},
  {
    initialRouteName: 'Home',
    navigationOptions: ({navigation}) => ({
      tabBarVisible: navigation.state.index === 0,
    }),
  },
);

export {HomeRootStack};
