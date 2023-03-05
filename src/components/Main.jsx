import React from 'react';
import {Text, View} from 'react-native';
import Constants from 'expo-constants';
import { RepositoryList } from './RepositoryList.jsx';

export const Main = () => {
  return (
    <View style={{marginTop: Constants.statusBarHeight}}>

        <Text style={{textAlign: 'center', color: '#E98D09', fontSize: 30}}>APP FACUNDO</Text>
        <RepositoryList/>
        

    </View>
  )
}

