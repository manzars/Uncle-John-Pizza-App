import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../Utility/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SecondHeader = props => {
  return (
    <View
      style={[
        styles.header,
        props.checkout || props.payment || props.details
          ? {height: '20%'}
          : null,
      ]}>
      <LinearGradient
        colors={['#F5313F', '#FFA360']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.innerButtonContainer}>
        {!props.checkout && !props.payment && !props.details && (
          <React.Fragment>
            <View style={styles.headerContainer}>
              <Text style={styles.pizzaText}>Create Your Pizza</Text>
              <Text style={styles.pizzaPrice}>${props.amount}</Text>
            </View>
            <Text style={styles.pizzaDetails}>
              <Text
                style={[
                  props.firstBold
                    ? {fontWeight: 'bold', opacity: 1}
                    : {opacity: 0.3, fontWeight: 'normal'},
                ]}>
                {props.first + ','}
              </Text>{' '}
              <Text
                style={[
                  props.secondBold
                    ? {fontWeight: 'bold', opacity: 1}
                    : {opacity: 0.3, fontWeight: 'normal'},
                ]}>
                {props.second + ','}
              </Text>{' '}
              <Text
                style={[
                  props.thirdBold
                    ? {fontWeight: 'bold', opacity: 1}
                    : {opacity: 0.3, fontWeight: 'normal'},
                ]}>
                {props.third + ','}
              </Text>
            </Text>
          </React.Fragment>
        )}
        {props.checkout && (
          <React.Fragment>
            <View
              style={[
                styles.headerContainer,
                {
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                },
              ]}>
              <FontAwesome5 name="pizza-slice" size={35} color={colors.white} />
              <Text style={styles.text}>
                Check your {'\n'}
                <Text style={{fontWeight: 'bold'}}>custom pizza</Text>
              </Text>
            </View>
          </React.Fragment>
        )}
        {props.payment && (
          <React.Fragment>
            <View
              style={[
                styles.headerContainer,
                {
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                },
              ]}>
              <Feather name="shopping-cart" size={35} color={colors.white} />
              <Text style={styles.text}>Checkout</Text>
            </View>
          </React.Fragment>
        )}
        {props.details && (
          <React.Fragment>
            <View
              style={[
                styles.headerContainer,
                {
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                },
              ]}>
              <Ionicons name="newspaper-sharp" size={35} color={colors.white} />
              <Text style={styles.text}>Order Details</Text>
            </View>
          </React.Fragment>
        )}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '30%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  pizzaText: {
    color: colors.white,
    fontWeight: '300',
    fontSize: 24,
  },
  pizzaPrice: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  pizzaDetails: {
    marginHorizontal: 20,
    fontSize: 10,
    color: colors.white,
  },
  innerButtonContainer: {
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 24,
    color: colors.white,
    marginTop: 10,
  },
});

export default SecondHeader;
