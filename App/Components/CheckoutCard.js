import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../Utility/Colors';

const CheckoutCard = props => {
  const Seperator = data => {
    return <View style={[styles.seperator, data.style]}></View>;
  };

  const RenderItems = list => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 20,
          marginBottom: 5,
        }}>
        <Text style={styles.item}>{list.data.name.toUpperCase()}</Text>
        <Text style={styles.item}>${list.data.price.toFixed(2)}</Text>
      </View>
    );
  };

  return (
    <View style={styles.card}>
      <View style={{marginLeft: 80}}>
        <Feather name="shopping-cart" color={colors.red} size={20} />
        <Text style={styles.summary}>ORDER SUMMARY</Text>
      </View>
      <Seperator style={{marginTop: 20}} />
      <View style={{marginLeft: 80, marginTop: 15}}>
        {props.data.map(data => {
          return <RenderItems key={data.name} data={data} />;
        })}
      </View>
      <Seperator style={{marginTop: 20, marginBottom: 15}} />
      <View style={{marginLeft: 80}}>
        <RenderItems data={{name: 'Total', price: props.price}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '70%',
    backgroundColor: '#FFFFFFDD',
    position: 'absolute',
    bottom: '15%',
    borderRadius: 20,
    left: 0,
    paddingVertical: 40,
    left: -60,
  },
  summary: {
    color: colors.red,
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 5,
  },
  seperator: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#DADAE5',
  },
  item: {
    color: colors.purple,
    fontWeight: '600',
    fontSize: 12,
  },
});

export default CheckoutCard;
