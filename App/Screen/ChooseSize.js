import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../Components/Header';
import colors from '../Utility/Colors';
import NextButton from '../Components/NextButton';
import SecondHeader from '../Components/SecondHeader';
import Pizza from '../Components/Pizza';
import SizeComponent from '../Components/SizeComponent';

const ChooseSize = props => {
  const [size, setSize] = useState('small');
  const [price, setPrice] = useState((8).toFixed(2));

  return (
    <View style={styles.container}>
      <Header
        backPressed={() => props.navigation.goBack()}
        homePressed={() => props.navigation.replace('Drawer')}
      />
      <SecondHeader
        first="SIZE"
        second="CRUST"
        third="TOPPINGS"
        // firstBold
        // secondBold
        // thirdBold
        amount={price}
      />
      <Pizza size={size} image={require('../Assets/thin.png')} sizeTag="size" />
      <SizeComponent
        small={size === 'small' ? true : false}
        large={size === 'large' ? true : false}
        medium={size === 'medium' ? true : false}
        smallPressed={() => {
          setSize('small');
          setPrice((8).toFixed(2));
        }}
        mediumPressed={() => {
          setSize('medium');
          setPrice((10).toFixed(2));
        }}
        largePressed={() => {
          setSize('large');
          setPrice((12).toFixed(2));
        }}
      />

      <NextButton
        name="Next"
        onPress={() =>
          props.navigation.navigate('Crust', {
            price: +price,
            size: size,
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

export default ChooseSize;
