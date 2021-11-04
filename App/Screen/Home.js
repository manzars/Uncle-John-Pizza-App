import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Address from '../Components/Address';
import HomeHeader from '../Components/HomeHeader';
import colors from '../Utility/Colors';
import LinearGradient from 'react-native-linear-gradient';

const {height} = Dimensions.get('window');

const Home = props => {
  const [addressClick, setAddressClick] = useState(false);

  return (
    <View
      style={[
        styles.container,
        addressClick ? {backgroundColor: '#FFFFFFCC'} : null,
      ]}>
      <HomeHeader
        menuPressed={props.navigation.openDrawer}
        addressPressed={() => setAddressClick(state => !state)}
      />
      {addressClick && <Address />}
      <LinearGradient
        colors={['#F5313F', '#FFA360']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.banner}>
        <Text style={styles.nameText}>Hi Jane Doe!</Text>
        <View style={styles.headingContainner}>
          <Text style={styles.heading}>
            What <Text style={{fontWeight: 'bold'}}>pizza</Text> do you{'\n'}
            want to try today?
          </Text>
        </View>
      </LinearGradient>
      <View style={styles.pizzaContainer}>
        <Image
          source={require('../Assets/simplepizza.png')}
          style={styles.pizza}
          resizeMode="contain"
        />
        <View style={styles.pizzaTextContainer}>
          <Text style={styles.reorder}>Reorder again?</Text>
          <Text style={styles.flavour}>
            SMALL, THIN CRUST, TOMATOES, BASIL, CHEESE
          </Text>
          <Text style={styles.price}>$12</Text>

          <LinearGradient
            elevation={5}
            colors={['#F5313F', '#FFA360']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.button}>
            <Text style={styles.cart}>Add To Cart</Text>
          </LinearGradient>
        </View>
      </View>

      <TouchableOpacity
        style={{height: '50%'}}
        onPress={() => props.navigation.navigate('Pizza')}>
        <View
          style={[
            styles.pizzaContainer,
            {
              marginTop: '5%',
              height: '100%',
              alignItems: 'flex-start',
              flexDirection: 'column',
            },
          ]}>
          <Text style={styles.ownPizza}>
            Create your <Text style={{fontWeight: 'bold'}}>own pizza</Text>
          </Text>
          <Text style={styles.cost}>
            The cost will depend on your customization
          </Text>
          <Image
            source={require('../Assets/pizza.png')}
            style={styles.wholePizza}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  banner: {
    width: '100%',
    height: '25%',
    paddingTop: 25,
    paddingLeft: 40,
  },
  nameText: {
    color: colors.white,
    fontSize: 18,
    marginBottom: 10,
  },
  headingContainner: {
    borderLeftWidth: 1.5,
    borderColor: colors.white,
    paddingLeft: 10,
    paddingVertical: 2,
  },
  heading: {
    color: colors.white,
    fontSize: 28,
  },
  pizzaContainer: {
    width: '85%',
    height: '25%',
    backgroundColor: '#FFFFFFEE',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: (-height * 5) / 100,
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  pizza: {
    width: '60%',
    height: '80%',
    marginLeft: (-height * 5) / 100,
    ...Platform.select({
      ios: {
        shadowColor: '#6D6E9C',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.8,
        shadowRadius: 5,
      },
      android: {
        shadowColor: '#6D6E9C',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.8,
        shadowRadius: 5,
      },
    }),
  },
  pizzaTextContainer: {
    height: '100%',
    justifyContent: 'center',
    width: '65%',
    paddingLeft: 30,
    marginLeft: (-height * 5) / 100,
    paddingRight: 10,
  },
  reorder: {
    color: colors.red,
    fontWeight: 'bold',
    fontSize: 20,
  },
  flavour: {
    fontWeight: 'bold',
    fontSize: 12,
    color: colors.purple,
    marginTop: 2,
  },
  price: {
    color: colors.purple,
    fontWeight: 'bold',
    fontSize: 23,
    marginTop: 2,
  },
  button: {
    width: '80%',
    height: 40,
    borderRadius: 20,

    shadowColor: '#6D6E9C',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    shadowRadius: 5,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  cart: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  wholePizza: {
    width: '95%',
    height: '75%',
    alignSelf: 'center',
  },
  ownPizza: {
    fontSize: 28,
    alignSelf: 'center',
    color: colors.red,
    fontWeight: '300',
    marginTop: 25,
  },
  cost: {
    alignSelf: 'center',
    color: '#A0A8CC',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 25,
  },
});

export default Home;
