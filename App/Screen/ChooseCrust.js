import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import CrustComponent from '../Components/CrustComponent';
import Header from '../Components/Header';
import NextButton from '../Components/NextButton';
import Pizza from '../Components/Pizza';
import SecondHeader from '../Components/SecondHeader';
import colors from '../Utility/Colors';

const ChooseCrust = props => {
  const [size, setSize] = useState('');
  const [price, setPrice] = useState(0);
  const [crust, setCrust] = useState('thin');
  const [crustPrice, setCrustPrice] = useState(2);
  const [pizza, setPizza] = useState(require('../Assets/thin.png'));

  useEffect(() => {
    setPrice((props.route.params.price + crustPrice).toFixed(2));
    setSize(props.route.params.size);
  });

  return (
    <View style={styles.container}>
      <Header
        backPressed={() => props.navigation.goBack()}
        homePressed={() => props.navigation.replace('Drawer')}
      />
      <SecondHeader
        first={size.toUpperCase()}
        second="CRUST"
        third="TOPPINGS"
        firstBold
        // secondBold
        // thirdBold
        amount={price}
      />
      <Pizza size={size} image={pizza} sizeTag="crust" crust={crust} />

      <CrustComponent
        thin={crust === 'thin' ? true : false}
        thick={crust === 'thick' ? true : false}
        thinPressed={() => {
          setCrust('thin');
          setCrustPrice(2);
          setPizza(require('../Assets/thin.png'));
        }}
        thickPressed={() => {
          setCrust('thick');
          setCrustPrice(4);
          setPizza(require('../Assets/thick.png'));
        }}
      />

      <NextButton
        name="Next"
        onPress={() =>
          props.navigation.navigate('Topping', {
            price: +props.route.params.price + crustPrice,
            size: size,
            pizza: pizza,
            crust: crust,
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

export default ChooseCrust;
