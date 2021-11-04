import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Switch, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';
import NextButton from '../Components/NextButton';
import SecondHeader from '../Components/SecondHeader';
import colors from '../Utility/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const {height} = Dimensions.get('window');

const Payment = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const Seperator = data => {
    return <View style={[styles.seperator, data.style]}></View>;
  };

  return (
    <View style={styles.container}>
      <Header
        backPressed={() => props.navigation.goBack()}
        homePressed={() => props.navigation.replace('Drawer')}
      />
      <SecondHeader payment />

      <View style={styles.pizzaContainer}>
        <View style={styles.pizzaContainerTop}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ionicons name="location-sharp" size={25} color={colors.red} />
            <Text style={styles.text}>Delivery Address</Text>
          </View>
          <View
            style={{
              width: 25,
              height: 25,
              borderRadius: 13,

              shadowColor: '#F5313F',
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.4,
              shadowRadius: 5,
            }}>
            <LinearGradient
              elevation={5}
              colors={['#F5313F', '#FFA360']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.button}>
              <MaterialCommunityIcons
                name="pencil"
                size={15}
                color={colors.white}
              />
            </LinearGradient>
          </View>
        </View>
        <Text
          style={{
            marginLeft: 5,
            fontSize: 14,
            fontWeight: 'bold',
            color: colors.purple,
            marginTop: 15,
          }}>
          Home
        </Text>
        <Text
          style={{
            marginLeft: 5,
            fontSize: 12,
            color: colors.purple,
            marginTop: 2,
          }}>
          3728 Brand Road, Swift Current
        </Text>

        <Seperator style={{marginTop: 15}} />

        <Text
          style={{
            marginLeft: 5,
            fontSize: 14,
            fontWeight: 'bold',
            color: colors.purple,
            marginTop: 15,
          }}>
          + {'   '}
          Add delivery instruction
        </Text>
        <Seperator style={{marginTop: 15}} />

        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 14,
                fontWeight: 'bold',
                color: colors.purple,
              }}>
              Contactless Delivery:
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 12,
                color: colors.purple,
                marginTop: 2,
              }}>
              Rider will place order at your door
            </Text>
          </View>
          <View>
            <Switch
              onValueChange={toggleSwitch}
              value={isEnabled}
              thumbColor={isEnabled ? '#F5313F' : '#F4F3F9'}
              trackColor={{false: '#767577', true: '#FFA360'}}
              style={{
                transform: [{scaleX: 0.7}, {scaleY: 0.7}],
              }}
            />
          </View>
        </View>
      </View>

      <View style={[styles.pizzaContainer, {marginTop: 20}]}>
        <View style={styles.pizzaContainerTop}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Entypo name="wallet" size={25} color={colors.red} />
            <Text style={styles.text}>Payment method</Text>
          </View>
          <View
            style={{
              width: 25,
              height: 25,
              borderRadius: 13,

              shadowColor: '#F5313F',
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.4,
              shadowRadius: 5,
            }}>
            <LinearGradient
              elevation={5}
              colors={['#F5313F', '#FFA360']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.button}>
              <MaterialCommunityIcons
                name="pencil"
                size={15}
                color={colors.white}
              />
            </LinearGradient>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../Assets/visa.png')}
              style={{width: 25, height: 25}}
            />
            <View style={{marginLeft: 5}}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: colors.purple,
                }}>
                VISA
              </Text>
              <Text style={{fontSize: 10, color: colors.purple}}>....0145</Text>
            </View>
          </View>

          <Text
            style={{color: colors.purple, fontSize: 14, fontWeight: 'bold'}}>
            ${props.route.params.price.toFixed(2)}
          </Text>
        </View>

        <View style={styles.cachback}>
          <Text style={{fontSize: 10, fontWeight: 'bold', color: '#57C168'}}>
            10% Cashback Applied
          </Text>
        </View>
      </View>

      <NextButton
        name="Place Order"
        onPress={() =>
          props.navigation.navigate('Detail', {
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
  pizzaContainer: {
    width: '85%',
    backgroundColor: '#FFFFFFDD',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: (-height * 7) / 100,
    overflow: 'hidden',
    padding: 20,
  },
  pizzaContainerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.red,
    marginLeft: 5,
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperator: {
    width: '150%',
    height: 0.5,
    backgroundColor: '#DADAE5',
    alignSelf: 'center',
  },
  cachback: {
    backgroundColor: '#DEF3E1',
    marginTop: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    width: '50%',
  },
});

export default Payment;
