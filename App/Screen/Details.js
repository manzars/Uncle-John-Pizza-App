import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';
import SecondHeader from '../Components/SecondHeader';
import colors from '../Utility/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {height} = Dimensions.get('window');

const Details = props => {
  const Seperator = data => {
    return <View style={[styles.seperator, data.style]}></View>;
  };

  return (
    <View style={styles.container}>
      <Header
        backPressed={() => props.navigation.goBack()}
        homePressed={() => props.navigation.replace('Drawer')}
      />
      <SecondHeader details />

      <View style={styles.pizzaContainer}>
        <View style={styles.pizzaContainerTop}>
          <View style={styles.pizzaTOpInnerContainer}>
            <Text style={styles.pizzaTopFirst}>ORDERED ON</Text>
            <Text style={styles.pizzaTopSecond}>14 FEB</Text>
          </View>
          <View style={styles.pizzaTOpInnerContainer}>
            <Text style={styles.pizzaTopFirst}>INVOICE #</Text>
            <Text style={styles.pizzaTopSecond}>#15569</Text>
          </View>
          <View style={styles.pizzaTOpInnerContainer}>
            <Text style={styles.pizzaTopFirst}>TOTAL DUE</Text>
            <Text style={styles.pizzaTopSecond}>
              ${props.route.params.price.toFixed(2)}
            </Text>
          </View>
        </View>
        <Seperator style={{marginTop: 30, marginBottom: 40}} />

        <View style={{paddingHorizontal: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: colors.red,

                shadowColor: colors.red,
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.5,
                shadowRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <React.Fragment>
                <AntDesign
                  style={{position: 'absolute'}}
                  name="check"
                  size={20}
                  color={colors.red}
                />
                <LinearGradient
                  elevation={5}
                  colors={['#F5313F', '#FFA360']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.button}></LinearGradient>
              </React.Fragment>
            </View>
            <View style={{marginLeft: '20%'}}>
              <Text
                style={{
                  color: colors.purple,
                  fontWeight: 'bold',
                  fontSize: 10,
                }}>
                11:41 AM
              </Text>
              <Text
                style={{
                  color: colors.purple,
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Order Confirmed
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 1,
              height: 30,
              backgroundColor: 'red',
              marginLeft: 18,
            }}></View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: colors.red,

                shadowColor: colors.red,
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.5,
                shadowRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <React.Fragment>
                <MaterialCommunityIcons
                  style={{position: 'absolute'}}
                  name="silverware-fork-knife"
                  size={20}
                  color={colors.red}
                />
                <LinearGradient
                  elevation={5}
                  colors={['#F5313F', '#FFA360']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.button}></LinearGradient>
              </React.Fragment>
            </View>
            <View style={{marginLeft: '20%'}}>
              <Text
                style={{
                  color: colors.purple,
                  fontWeight: 'bold',
                  fontSize: 10,
                }}>
                12:01 AM
              </Text>
              <Text
                style={{
                  color: colors.purple,
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Preparing....
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 1,
              height: 30,
              backgroundColor: '#DADAE5',
              marginLeft: 18,
            }}></View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#DADAE5',

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <React.Fragment>
                <Foundation
                  style={{position: 'absolute'}}
                  name="shopping-bag"
                  size={20}
                  color={'#DADAE5'}
                />
                <LinearGradient
                  elevation={5}
                  colors={['#ddd', '#F4F3F9']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.button}></LinearGradient>
              </React.Fragment>
            </View>
            <View style={{marginLeft: '20%'}}>
              <Text
                style={{
                  color: colors.purple,
                  fontSize: 14,
                }}>
                Dispatched
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 1,
              height: 30,
              backgroundColor: '#DADAE5',
              marginLeft: 18,
            }}></View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#DADAE5',

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <React.Fragment>
                <Ionicons
                  style={{position: 'absolute'}}
                  name="bicycle"
                  size={20}
                  color={'#DADAE5'}
                />
                <LinearGradient
                  elevation={5}
                  colors={['#ddd', '#F4F3F9']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.button}></LinearGradient>
              </React.Fragment>
            </View>
            <View style={{marginLeft: '20%'}}>
              <Text
                style={{
                  color: colors.purple,
                  fontSize: 14,
                }}>
                In Transit
              </Text>
            </View>
          </View>

          <View
            style={{
              width: 1,
              height: 30,
              backgroundColor: '#DADAE5',
              marginLeft: 18,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#DADAE5',

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <React.Fragment>
                <MaterialCommunityIcons
                  style={{position: 'absolute'}}
                  name="home"
                  size={20}
                  color={'#DADAE5'}
                />
                <LinearGradient
                  elevation={5}
                  colors={['#ddd', '#F4F3F9']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.button}></LinearGradient>
              </React.Fragment>
            </View>
            <View style={{marginLeft: '20%'}}>
              <Text
                style={{
                  color: colors.purple,
                  fontSize: 14,
                }}>
                Delivered
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.secondCheck}>
        <View
          style={{
            width: '80%',
            height: '100%',
            backgroundColor: '#57C16833',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 20,
            borderRightWidth: 2,
            borderColor: '#57C168',
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: '#57C168',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="cash-register"
              size={25}
              color="#57C168"
            />
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{color: '#57C168', fontWeight: 'bold', fontSize: 16}}>
              Earned cashback!
            </Text>
            <Text style={{color: colors.purple, fontSize: 14}}>+ $1.45</Text>
          </View>
        </View>
        <View
          style={{
            width: '20%',
            height: '100%',
            backgroundColor: '#57C16866',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons
            name="chevron-right"
            color={'#57C168'}
            size={50}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  pizzaContainer: {
    width: '85%',
    backgroundColor: '#FFFFFFEE',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: (-height * 7) / 100,
    overflow: 'hidden',
    padding: 20,
  },
  pizzaContainerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pizzaTOpInnerContainer: {
    alignItems: 'center',
  },
  pizzaTopFirst: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.purple,
  },
  pizzaTopSecond: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.red,
    marginTop: 2,
  },
  seperator: {
    width: '150%',
    height: 0.5,
    backgroundColor: '#DADAE5',
    alignSelf: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.4,
  },
  secondCheck: {
    width: '85%',
    height: 100,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 20,
    overflow: 'hidden',
    flexDirection: 'row',
  },
});

export default Details;
