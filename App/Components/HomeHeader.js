import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../Utility/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get('window');

const HomeHeader = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.menuPressed}>
        <Icon name="menu-outline" color={colors.purple} size={25} />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.addressPressed}>
        <View style={styles.middle}>
          <Text style={styles.text}>Deliver to:</Text>
          <Text
            style={[styles.text, {fontWeight: 'bold', color: colors.purple}]}>
            HOME
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bag}>
        <MaterialIcons name="shopping-bag" color={colors.purple} size={25} />
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
  middle: {
    marginLeft: -width / 3,
  },
  text: {
    fontSize: 12,
    color: '#6D6E9C',
  },
  bag: {
    alignItems: 'flex-end',
  },
  innerContainer: {
    justifyContent: 'flex-end',
  },
});

export default HomeHeader;
