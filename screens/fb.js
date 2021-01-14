import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class fb extends React.Component {
  render() {
    return (
      <View>
        <AppHeader Text='FaceBook'/>
        <Text style={{ color: 'black', marginLeft: '35%', marginTop: '50%' }}>
          FaceBook Screen
        </Text>
      </View>
    );
  }
}
