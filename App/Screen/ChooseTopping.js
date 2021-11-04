import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../Components/Header';
import NextButton from '../Components/NextButton';
import Pizza from '../Components/Pizza';
import SecondHeader from '../Components/SecondHeader';
import colors from '../Utility/Colors';
import ToppingComponent from '../Components/ToppingContainer';

const ChooseTopping = props => {
  const [size, setSize] = useState('');
  const [price, setPrice] = useState(0);
  const [pizza, setPizza] = useState(require('../Assets/thin.png'));
  const [toppings, setToppings] = useState(data);
  const [selected, setSelected] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setPrice(props.route.params.price.toFixed(2));
    setSize(props.route.params.size);
    setPizza(props.route.params.pizza);
    setToppings(data);
  }, []);

  useEffect(() => {
    let additionPrice = 0;
    if (selected.length - 3 >= 1) {
      additionPrice = (selected.length - 3) * 0.5;
      setPrice((props.route.params.price + additionPrice).toFixed(2));
    } else {
      setPrice(props.route.params.price.toFixed(2));
    }
  }, [selected]);

  const data = [
    {
      id: 1,
      image: require('../Assets/pepperoni.png'),
      name: 'Pepperoni',
      price: '+ $0.00',
    },
    {
      id: 2,
      image: require('../Assets/mushroom.png'),
      name: 'Mushrooms',
      price: '+ $0.00',
    },
    {
      id: 3,
      image: require('../Assets/olive.png'),
      name: 'Black Olives',
      price: '+ $0.00',
    },
    {
      id: 4,
      image: require('../Assets/sausage.png'),
      name: 'Sausages',
      price: '+ $0.00',
    },
    {
      id: 5,
      image: require('../Assets/bacon.png'),
      name: 'Bacon',
      price: '+ $0.00',
    },
    {
      id: 6,
      image: require('../Assets/cheese.png'),
      name: 'Extra Cheese',
      price: '+ $0.00',
    },
    {
      id: 7,
      image: require('../Assets/capcicum.png'),
      name: 'Green Peppers',
      price: '+ $0.00',
    },
    {
      id: 8,
      image: require('../Assets/pineapple.png'),
      name: 'Pineapple',
      price: '+ $0.00',
    },
    {
      id: 9,
      image: require('../Assets/spinach.png'),
      name: 'Spinach',
      price: '+ $0.00',
    },
    {
      id: 10,
      image: require('../Assets/onion.png'),
      name: 'Onions',
      price: '+ $0.00',
    },
  ];

  const toppingPressed = (id, type, name) => {
    if (type === 'remove') {
      setSelected(state => {
        return state.filter(dat => {
          return dat.id !== id;
        });
      });
      setTotal(state => state - 1);
    } else {
      if (total <= 6) {
        setSelected(state => [...state, {id: id, name: name}]);
        setTotal(state => state + 1);
      }
    }
  };

  useEffect(() => {
    let newArray = [];
    if (total > 2) {
      data.map(dat => {
        selected.map((da, index) => {
          if (index >= 3) return;
          else {
            if (dat.id === da.id) {
              newArray.push(dat);
            } else {
              newArray.push({...dat, price: '+ $0.50'});
            }
          }
        });
      });
    } else {
      newArray.push(data);
    }
    let latestArray = [];
    let checkArray = [];
    newArray.map(dat => {
      if (dat.price === '+ $0.00') {
        latestArray.push(dat);
        checkArray.push(dat.id);
      }
    });

    newArray.map(dat => {
      if (checkArray.includes(dat.id)) {
      } else {
        latestArray.push(dat);
        checkArray.push(dat.id);
      }
    });

    latestArray.sort((a, b) => {
      return a.id - b.id;
    });

    if (total > 2) {
      setToppings(latestArray);
    } else {
      setToppings(data);
    }
  }, [total]);

  return (
    <View style={styles.container}>
      <Header
        backPressed={() => props.navigation.goBack()}
        homePressed={() => props.navigation.replace('Drawer')}
      />
      <SecondHeader
        first={size.toUpperCase()}
        second={props.route.params.crust.toUpperCase() + ' CRUST'}
        third="TOPPINGS"
        firstBold
        secondBold
        // thirdBold
        amount={price}
      />
      <Pizza
        size={size}
        image={
          selected.length === 0
            ? require('../Assets/thick.png')
            : selected.length === 1
            ? require('../Assets/pepperoniPizza.png')
            : selected.length === 2
            ? require('../Assets/mushroomPizza.png')
            : selected.length === 3
            ? require('../Assets/olivePizza.png')
            : require('../Assets/onionPizza.png')
        }
      />

      <ToppingComponent
        toppings={toppings}
        toppingPressed={toppingPressed}
        selected={selected}
      />

      <NextButton
        name="Done"
        onPress={() => {
          let params = [];
          params.push({
            name: size + ' size',
            price: size === 'small' ? 8 : size === 'medium' ? 10 : 12,
          });
          params.push({
            name: props.route.params.crust + ' crust',
            price: props.route.params.crust === 'thick' ? 4 : 2,
          });

          selected.map((dat, index) => {
            if (index - 2 >= 1) {
              params.push({
                name: dat.name,
                price: 0.5,
              });
            } else {
              params.push({
                name: dat.name,
                price: 0,
              });
            }
          });

          props.navigation.navigate('Checkout', {
            data: params,
            price: +price,
          });
        }}
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

export default ChooseTopping;
