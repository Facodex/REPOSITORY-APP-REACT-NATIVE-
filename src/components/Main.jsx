import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { RepositoryList } from './RepositoryList.jsx';

export const Main = () => {
  return (
    <View style={{marginTop: Constants.statusBarHeight}}>

        <Text style={styles.header}>APP FACUNDO</Text>
        <RepositoryList/>
        
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
      backgroundColor: '#1F618D',
      color: '#fff',
      textAlign: 'center',
      fontSize:30
  }
});

