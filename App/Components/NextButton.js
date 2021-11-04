import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../Utility/Colors';

const NextButton = props => {
  return (
    <TouchableOpacity style={styles.nextButton} onPress={props.onPress}>
      <View>
        <LinearGradient
          colors={['#F5313F', '#FFA360']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.innerButtonContainer}>
          <Text style={styles.nextText}>{props.name}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  nextButton: {
    width: '100%',
    height: '8%',
    position: 'absolute',
    bottom: 0,
  },
  innerButtonContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default NextButton;
