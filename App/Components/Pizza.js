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

const {height} = Dimensions.get('window');
const Pizza = props => {
  const styles = StyleSheet.create({
    outer: {
      width:
        props.size === 'small'
          ? (height * 48) / 100
          : props.size === 'medium'
          ? (height * 50) / 100
          : (height * 52) / 100,

      height:
        props.size === 'small'
          ? (height * 48) / 100
          : props.size === 'medium'
          ? (height * 50) / 100
          : (height * 52) / 100,

      alignSelf: 'center',
      top:
        Platform.OS === 'ios'
          ? props.size === 'small'
            ? (height * 16) / 100
            : props.size === 'medium'
            ? (height * 15) / 100
            : (height * 14) / 100
          : props.size === 'small'
          ? (height * 12) / 100
          : props.size === 'medium'
          ? (height * 11) / 100
          : (height * 10) / 100,

      borderRadius: (height * 26) / 100,
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'absolute',
      zIndex: -1,
      borderWidth: 0.5,
      borderColor: '#DADAE5',
    },
    pizzaContainer: {
      width:
        props.size === 'small'
          ? (height * 38) / 100
          : props.size === 'medium'
          ? (height * 40) / 100
          : (height * 42) / 100,

      height:
        props.size === 'small'
          ? (height * 38) / 100
          : props.size === 'medium'
          ? (height * 40) / 100
          : (height * 42) / 100,

      marginTop:
        props.size === 'small'
          ? -(height * 19) / 100
          : props.size === 'medium'
          ? -(height * 20) / 100
          : -(height * 21) / 100,

      backgroundColor: '#FFFFFF99',
      alignSelf: 'center',
      borderRadius: (height * 50) / 100,
      justifyContent: 'center',
      alignItems: 'center',
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
    <React.Fragment>
      {props.sizeTag === 'size' && (
        <View style={styles.outer}>
          <View style={styles.size}>
            <Text style={styles.sizeText}>
              {props.size === 'small'
                ? "10'"
                : props.size === 'medium'
                ? "12'"
                : "14'"}
            </Text>
          </View>
        </View>
      )}
      {props.sizeTag === 'crust' && (
        <View style={styles.outer}>
          <View style={styles.size}>
            <Text style={styles.sizeText}>
              {props.crust === 'thin' ? '+$2.00' : '+$4.00'}
            </Text>
          </View>
        </View>
      )}
      <View style={styles.pizzaContainer}>
        <View style={styles.pizzaMiddleContainer}>
          <Image source={props.image} style={styles.pizzaImage} />
        </View>
      </View>
    </React.Fragment>
  );
};

export default Pizza;
