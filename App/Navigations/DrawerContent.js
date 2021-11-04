import React from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import {DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../Utility/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export function DrawerContent(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        height: '100%',
      }}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Image
                source={require('../Assets/profile.png')}
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: 60,
                  opacity: 0.1,
                }}
              />
              <Image
                source={require('../Assets/profile.png')}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 40,
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  borderWidth: 2,
                  borderColor: colors.white,
                }}
              />
            </View>

            <View
              style={{
                marginLeft: 15,
                flexDirection: 'column',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Title style={styles.title}>Jane Doe</Title>
              </View>
              <Caption style={styles.caption}>janedoe@gmail.com</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <FontAwesome5 name="user-alt" color={colors.red} size={size} />
            )}
            label="Profile"
            labelStyle={{
              color: colors.purple,
              width: '100%',
              marginLeft: -5,
            }}
            onPress={() => {
              console.log('clicked');
            }}
          />

          <DrawerItem
            icon={({color, size}) => (
              <FontAwesome5 name="money-bill" color={colors.red} size={size} />
            )}
            label="Payment Method"
            labelStyle={{
              color: colors.purple,
              width: '100%',
              marginLeft: -10,
            }}
            onPress={() => {
              console.log('clicked');
            }}
          />

          <DrawerItem
            icon={({color, size}) => (
              <FontAwesome5
                name="clipboard-list"
                color={colors.red}
                size={size}
              />
            )}
            label="Order History"
            labelStyle={{
              color: colors.purple,
              width: '100%',
              marginLeft: 2,
            }}
            onPress={() => {
              console.log('clicked');
            }}
          />

          <DrawerItem
            icon={({color, size}) => (
              <FontAwesome5
                name="map-marker-alt"
                color={colors.red}
                size={size}
              />
            )}
            label="Addresses"
            labelStyle={{
              color: colors.purple,
              width: '100%',
              marginLeft: 2,
            }}
            onPress={() => {
              console.log('clicked');
            }}
          />

          <DrawerItem
            icon={({color, size}) => (
              <AntDesign name="questioncircle" color={colors.red} size={size} />
            )}
            label="Help Center"
            labelStyle={{
              color: colors.purple,
              width: '100%',
              marginLeft: -5,
            }}
            onPress={() => {
              console.log('clicked');
            }}
          />
        </Drawer.Section>
      </View>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Ionicons name="settings-sharp" color={colors.red} size={size} />
          )}
          label="Setings"
          labelStyle={{color: colors.purple}}
          onPress={() => {
            console.log('pressed');
          }}
        />

        <DrawerItem
          icon={({color, size}) => (
            <AntDesign name="logout" color={colors.red} size={size} />
          )}
          label="Log Out"
          labelStyle={{color: colors.purple}}
          onPress={() => {
            console.log('pressed');
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: colors.background,
    height: '80%',
  },
  userInfoSection: {
    backgroundColor: colors.white,
    height: '40%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    color: colors.purple,
  },
  caption: {
    fontSize: 14,
    color: colors.purple,
    opacity: 0.6,
    marginTop: -5,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
  },
  drawerSection: {
    marginTop: 15,
    height: '80%',
    paddingLeft: '10%',
  },
  bottomDrawerSection: {
    height: '20%',
    justifyContent: 'flex-end',
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingLeft: '10%',
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
