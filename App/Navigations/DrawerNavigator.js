import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';
import Payment from '../Screen/Payment';
import Home from '../Screen/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{swipeEnabled: true, headerShown: false}}>
      <Drawer.Screen name="Profile" component={Home} />
      <Drawer.Screen name="PaymentMethod" component={Payment} />
      <Drawer.Screen name="OrderHistory" component={Payment} />
      <Drawer.Screen name="Addresses" component={Payment} />
      <Drawer.Screen name="HelpCenter" component={Payment} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
