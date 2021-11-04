import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../Utility/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const ToppingContainer = props => {
  const RenderItem = data => {
    const id = data.item.id;
    const selected = props.selected;
    let pressed = false;
    selected.map(dat => {
      if (dat.id === id) pressed = true;
    });

    return (
      <View style={styles.toppingContainer}>
        <View style={styles.toppingFirst}>
          <Image source={data.item.image} style={styles.image} />
        </View>
        <View style={styles.toppingSecond}>
          <Text style={styles.toppingText}>{data.item.name}</Text>
          <Text
            style={[
              styles.toppingPrice,
              data.item.price === '+ $0.50' ? {fontWeight: 'bold'} : null,
            ]}>
            {data.item.price}
          </Text>
        </View>
        <View style={styles.toppingThird}>
          <TouchableOpacity
            style={styles.toppingButton}
            onPress={() =>
              props.toppingPressed(
                data.item.id,
                pressed ? 'remove' : 'add',
                data.item.name,
              )
            }>
            <LinearGradient
              colors={pressed ? ['#F5313F', '#FFA360'] : ['#ddd', '#F4F3F9']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.gradientContainer}>
              {pressed && (
                <AntDesign color={colors.white} size={10} name="check" />
              )}
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={styles.text}>
          Choose up to <Text style={{fontWeight: 'bold'}}>7 toppings</Text>
        </Text>
        <Text style={styles.free}>FREE 3 ADD-ONS</Text>
      </View>

      <FlatList
        style={{position: 'absolute', bottom: '16%', overflow: 'visible'}}
        data={props.toppings}
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <RenderItem item={item} />}
        ItemSeparatorComponent={() => <View style={{width: 15}}></View>}
        ListFooterComponent={() => (
          <View style={{width: (width * 12) / 100}}></View>
        )}
        ListHeaderComponent={() => (
          <View style={{width: (width * 12) / 100}}></View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF99',
    position: 'absolute',
    bottom: '12%',
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
    height: '22%',
  },
  text: {
    color: '#6D6E9C',
    fontSize: 18,
  },
  gradientContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  free: {
    fontSize: 10,
    color: '#A0A8CC',
    marginTop: 2,
    fontWeight: 'bold',
  },
  toppingContainer: {
    width: (width * 60) / 100,
    height: (height * 10) / 100,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  toppingFirst: {
    width: '33%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  toppingSecond: {
    width: '50%',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  toppingText: {
    color: colors.purple,
    fontWeight: 'bold',
    fontSize: 14,
  },
  toppingPrice: {
    color: colors.purple,
    fontSize: 14,
  },
  toppingThird: {
    width: '17%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  toppingButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
});

export default ToppingContainer;
