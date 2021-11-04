import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChooseSize from '../Screen/ChooseSize';
import ChooseCrust from '../Screen/ChooseCrust';
import ChooseTopping from '../Screen/ChooseTopping';
import Checkout from '../Screen/Checkout';
import Detail from '../Screen/Details';
import Payment from '../Screen/Payment';

const Stack = createStackNavigator();

const PizzaNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Size"
        component={ChooseSize}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Crust"
        component={ChooseCrust}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Topping"
        component={ChooseTopping}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PizzaNavigator;
