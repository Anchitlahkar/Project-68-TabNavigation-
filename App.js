import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import fb from './screens/fb';
import insta from './screens/insta';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    FaceBook: {
      screen: fb,
    },
    Instagram: {
      screen: insta,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'FaceBook') {
          return (
              <Image
                style={{ height: 40, width: 40 }}
                source={require('./assets/fb.jpg')}
              />
          );
        } else if (routeName === 'Instagram') {
          return (
            <Image
              style={{ height: 40, width: 40 }}
              source={require('./assets/instagram.jpg')}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);
