import React from 'react'
import { Formik, useField } from 'formik'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StyledTextInput } from '../components/StyledTextInput';

// valores iniciales de nuestro formulario 
const initialValues = {
    email: '',
    password: ''
};

//  estilos adicionales para usar 
const styles = StyleSheet.create({
    form: {
        margin: 12,

    }
})

// ESTE ES UN COMPONENTE DE INPUT PERSONALIZADO PARA SIMPLIFICAR EL USO DE FORMIK 
const FormikInputValue = ({name, ...props}) => {

    // field: es la informacion sobre el campo
    // meta: metainformacion del campo, validaciones, errores, etc 
    // helpers: metodos, como setValue, setError, etc 
    // useField(): hook personal de formik que nos extrae todos los datos gracias al name que le pasamos
    const [field, meta, helpers] = useField(name);

    return(
        <StyledTextInput
            value={field.value}
            onChangeText={value => helpers.setValue(value)}
            {...props}
        />
    )
}

export const Login = () => {
    return (
        <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
            {
                ({handleSubmit}) => {
                    return (
                        <View style={styles.form}>
                            <FormikInputValue name='email' placeholder='E-mail' />
                            <FormikInputValue name='password' placeholder='********' />
                            <Button onPress={handleSubmit} title='Log In'/>
                        </View>
                    )
                }
            }
        </Formik>
    )

};
