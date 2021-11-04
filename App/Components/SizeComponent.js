import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../Utility/Colors';

const SizeComponent = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Choose your <Text style={{fontWeight: 'bold'}}>size</Text>
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <TouchableOpacity style={styles.button} onPress={props.smallPressed}>
          {props.small ? (
            <View>
              <LinearGradient
                colors={['#F5313F', '#FFA360']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.gradientContainer}>
                <Text style={styles.sizeText}>Small</Text>
              </LinearGradient>
            </View>
          ) : (
            <Text
              style={[
                styles.sizeText,
                {
                  color: colors.purple,
                  fontWeight: 'normal',
                  textAlign: 'center',
                },
              ]}>
              Small
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.mediumPressed}>
          {props.medium ? (
            <View>
              <LinearGradient
                colors={['#F5313F', '#FFA360']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.gradientContainer}>
                <Text style={styles.sizeText}>Medium</Text>
              </LinearGradient>
            </View>
          ) : (
            <Text
              style={[
                styles.sizeText,
                {
                  color: colors.purple,
                  fontWeight: 'normal',
                  textAlign: 'center',
                },
              ]}>
              Medium
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.largePressed}>
          {props.large ? (
            <View>
              <LinearGradient
                colors={['#F5313F', '#FFA360']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.gradientContainer}>
                <Text style={styles.sizeText}>Large</Text>
              </LinearGradient>
            </View>
          ) : (
            <Text
              style={[
                styles.sizeText,
                {
                  color: colors.purple,
                  fontWeight: 'normal',
                  textAlign: 'center',
                },
              ]}>
              Large
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: '12%',
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
  },
  text: {
    color: '#6D6E9C',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    width: '30%',
    height: 40,
    borderRadius: 20,

    shadowColor: '#rgba(245, 49, 63, 0.4)',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    shadowRadius: 5,

    justifyContent: 'center',
  },
  gradientContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default SizeComponent;
