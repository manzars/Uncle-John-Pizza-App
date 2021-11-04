import React from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import colors from '../Utility/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.backPressed}>
        <Icon name="arrow-back" color={colors.purple} size={25} />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>Uncle John Pizzas</Text>
      </View>
      <TouchableOpacity style={styles.bag} onPress={props.homePressed}>
        <MaterialIcons name="home" color={colors.purple} size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS === 'ios' ? '10%' : '6%',
    backgroundColor: colors.white,
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 14,
    color: '#6D6E9C',
  },
  bag: {
    alignItems: 'flex-end',
  },
  innerContainer: {
    justifyContent: 'flex-end',
  },
});

export default Header;
