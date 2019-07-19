import { createSwitchNavigator,createStackNavigator, createAppContainer, createDrawerNavigator, DrawerActions } from 'react-navigation';

import NewScreen from '../screens/NewScreen';
import Home from '../screens/Home';
import DrawerScreen from '../screens/DrawerScreen';

const LeftDrawer = createDrawerNavigator({
    LeftDrawer: { screen: Home,  },
    },{ 
    getCustomActionCreators: (route, stateKey) => ({
            toggleLeftDrawer: () => DrawerActions.toggleDrawer({ key: stateKey})
    }),
    drawerBackgroundColor: '#193250',
    contentComponent: DrawerScreen,
    
}) 

const RightDrawer = createDrawerNavigator({
    RightDrawer: { screen: LeftDrawer }
    },{ 
    getCustomActionCreators: (route, stateKey) => ({
            toggleRightDrawer: () => DrawerActions.toggleDrawer({ key: stateKey })
    }),
    drawerPosition: 'right',
    drawerBackgroundColor: '#193250',
    contentComponent: DrawerScreen,
})

export const AppNavigator = createStackNavigator({
    Main: { screen: RightDrawer },
    NewScreen,
},{
    headerMode: 'none'
})


export default createAppContainer(AppNavigator)