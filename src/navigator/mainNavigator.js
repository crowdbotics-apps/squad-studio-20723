import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList111553Navigator from '../features/NotificationList111553/navigator';
import Settings111552Navigator from '../features/Settings111552/navigator';
import Settings111544Navigator from '../features/Settings111544/navigator';
import UserProfile111542Navigator from '../features/UserProfile111542/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList111553: { screen: NotificationList111553Navigator },
Settings111552: { screen: Settings111552Navigator },
Settings111544: { screen: Settings111544Navigator },
UserProfile111542: { screen: UserProfile111542Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
