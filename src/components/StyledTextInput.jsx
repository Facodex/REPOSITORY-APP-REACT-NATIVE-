import React from "react";
import { StyleSheet, TextInput } from "react-native";

// los estilos que le vamos a poner al componente de StyledTextInput 
const styles = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10
    },
    error: {
        borderColor: 'red'
    }
});

export const StyledTextInput = ({style = {}, error,  ...props}) => {

    const inputStyle = [
        styles.textInput, //los estilos de la constante styles
        style, //los estilos de la prop style
        error && styles.error //si vino error de prop entonces que se le pongan los estilos de error
    ];

    return (
        <TextInput style={inputStyle} {...props}/>
    )
}
