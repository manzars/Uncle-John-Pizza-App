import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckoutCard from '../Components/CheckoutCard';
import Header from '../Components/Header';
import NextButton from '../Components/NextButton';
import SecondHeader from '../Components/SecondHeader';
import SidePizza from '../Components/SidePizza';
import colors from '../Utility/Colors';

const Checkout = props => {
  return (
    <View style={styles.container}>
      <Header
        backPressed={() => props.navigation.goBack()}
        homePressed={() => props.navigation.replace('Drawer')}
      />
      <SecondHeader checkout />
      <SidePizza />
      <CheckoutCard
        data={props.route.params.data}
        price={props.route.params.price}
      />
      <NextButton
        name="Confirm Pizza"
        onPress={() =>
          props.navigation.navigate('Payment', {
            price: props.route.params.price,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export default Checkout;
