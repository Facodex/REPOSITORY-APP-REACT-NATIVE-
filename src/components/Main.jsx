import React from 'react';
import { View, Text } from 'react-native';
import { RepositoryList } from './RepositoryList.jsx';
import { AppBar } from './AppBar.jsx';
import { Routes, Route } from 'react-router-native';
import { Login } from '../pages/Login.jsx';

export const Main = () => {
  return (
    <View style={{ flex: 1 }}>

      {/* el AppBar siempre se tiene que mostrar por eso estara fuera de las rutas */}
      <AppBar />

      {/* Aqui las rutas que se mostrará solo una a la vez  */}
      
      <Routes>

          <Route path='/' element={<RepositoryList/>}/>

          <Route path='/signin' element={<Login/>}/>

      </Routes>
      
    </View>
  )
}
