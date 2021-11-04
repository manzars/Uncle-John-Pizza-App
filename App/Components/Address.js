import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Utility/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Address = () => {
  const RenderItem = data => {
    return (
      <View style={styles.innerContainer}>
        {data.icon !== 'work' ? (
          <Icon color={colors.red} size={22} name={data.icon} />
        ) : (
          <MaterialIcons color={colors.red} size={25} name={data.icon} />
        )}

        <View>
          <Text style={styles.text}>{data.name}</Text>
          {data.subName && (
            <Text
              style={[
                styles.text,
                {opacity: 0.5, fontWeight: 'normal', fontSize: 10},
              ]}>
              {data.subName}
            </Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <RenderItem icon="crosshairs-gps" name="CURRENT LOCATION" />
      <RenderItem
        icon="home"
        name="HOME"
        subName="3728  Brand Road, Swift Current"
      />
      <RenderItem
        icon="map-marker"
        name="OTHER"
        subName="81 Springside, Lancaster"
      />
      <RenderItem
        icon="work"
        name="WORK"
        subName="4932 Sixth Street, Westminster"
      />
      <View style={[styles.innerContainer]}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: '#F5313F1A',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#FFA360',
              textAlign: 'center',
              textAlignVertical: 'center',
              marginTop: -2,
            }}>
            +
          </Text>
        </View>
        <Text style={[styles.text, {color: '#FFA360'}]}>ADD A NEW ADDRESS</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingBottom: 20,
    position: 'absolute',
    zIndex: 99,
    top: Platform.OS === 'ios' ? '10%' : '6%',
    shadowColor: '#6D6E9C',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    paddingLeft: '15%',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  text: {
    color: colors.purple,
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 20,
  },
});

export default Address;
