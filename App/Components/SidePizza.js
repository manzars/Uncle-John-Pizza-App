import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import colors from '../Utility/Colors';

const {height, width} = Dimensions.get('window');
const SidePizza = props => {
  const styles = StyleSheet.create({
    pizzaContainer: {
      width: (height * 70) / 100,

      height: (height * 70) / 100,

      marginTop: -(height * 12) / 100,

      backgroundColor: '#FFFFFF99',
      alignSelf: 'center',
      borderRadius: (height * 100) / 100,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: -((width * 80) / 100),
    },
    pizzaMiddleContainer: {
      width: '90%',
      height: '90%',
      backgroundColor: colors.white,
      alignSelf: 'center',
      borderRadius: (height * 30) / 100,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99,
      overflow: 'hidden',
    },
    pizzaImage: {
      height: '90%',
      width: '90%',
    },
    size: {
      backgroundColor: '#DADAE5',
      paddingHorizontal: 15,
      paddingVertical: 3,
      borderRadius: 15,
      marginBottom: -10,
    },
    sizeText: {
      fontSize: 10,
      color: '#A0A8CC',
    },
  });

  return (
    <View style={styles.pizzaContainer}>
      <View style={styles.pizzaMiddleContainer}>
        <Image
          source={require('../Assets/fullPizza.png')}
          style={styles.pizzaImage}
        />
      </View>
    </View>
  );
};

export default SidePizza;
