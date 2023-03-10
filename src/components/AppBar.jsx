import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import StyledText from './StyledText';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link, useLocation } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 15,
        flexDirection: 'row'
    },
    scroll: {
        paddingBottom: 15
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    active:{
        color: theme.appBar.textPrimary,
    }
});

// activo: si esta activo ese tab 
// children: texto a reenderizar 
// to: hacia donde tiene que ir 
export const AppBarTab = ({ children, to }) => {

    // aqui usamos el hook useLocation() para traer el pathActual
    // y si el path actual es === al to significa que este enlace esta activo 
    const {pathname} = useLocation();
    const active = pathname === to;

    // dandole la propiedad de estilos active si es que el enlace viene activo 
    const textStyles = [
        styles.text,
        active && styles.active
    ];

    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    );
}

// ATENCION COMO HACEMOS SCROLL DE COSTADO 
export const AppBar = () => {

    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab active to='/'>Repositories</AppBarTab>
                <AppBarTab active to='/signin'>Sign In</AppBarTab>
            </ScrollView>
        </View>
    )
}
