import React from 'react';
import { View, Text } from 'react-native';
import { RepositoryList } from './RepositoryList.jsx';
import { AppBar } from './AppBar.jsx';
import { Redirect, Route, Switch } from 'react-router-native';

export const Main = () => {
  return (
    <View style={{ flex: 1 }}>

      {/* el AppBar siempre se tiene que mostrar por eso estara fuera de las rutas */}
      <AppBar />

      {/* Aqui las rutas que se mostrará solo una a la vez  */}
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>

        <Route path='/signin' exact>
          <Text>Working on it</Text>
        </Route>

        <Redirect to='/'/>
        
      </Switch>


    </View>
  )
}

