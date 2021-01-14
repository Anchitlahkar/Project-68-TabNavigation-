import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class fb extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: 'black',height: '100%'}}>
        <AppHeader Text='Instagram'/>
        <Text style={{ color: 'white', marginLeft: '35%', marginTop: '50%' }}>
          Instagram Screen
        </Text>
      </View>
    );
  }
}
