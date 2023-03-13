import React from 'react'
import { Formik, useField } from 'formik'
import { View, Button, StyleSheet } from 'react-native';
import { StyledTextInput } from '../components/StyledTextInput';
import StyledText from '../components/StyledText'
import { loginValidationSchema } from '../ValidationSchemas/login';

// valores iniciales de nuestro formulario 
const initialValues = {
    email: '',
    password: ''
};

//  estilos adicionales para usar 
const styles = StyleSheet.create({
    error:{
        color: 'red',
        fontSize: 12,
        marginTop: -5
    },
    form: {
        margin: 12,

    }
})

// ESTE ES UN COMPONENTE DE INPUT PERSONALIZADO PARA SIMPLIFICAR EL USO DE FORMIK 

const FormikInputValue = ({ name, ...props }) => {

    // field: es la informacion sobre el campo
    // meta: metainformacion del campo, validaciones, errores, etc 
    // helpers: metodos, como setValue, setError, etc 
    // useField(): hook personal de formik que nos extrae todos los datos gracias al name que le pasamos
    const [field, meta, helpers] = useField(name);

    return (
        <>
            <StyledTextInput
                error={meta.error} //solo si existe meta.error se mandaría la prop
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>


    )
}

export const Login = () => {
    return (
        <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
            {
                ({ handleSubmit }) => {
                    return (
                        <View style={styles.form}>
                            <FormikInputValue name='email' placeholder='E-mail' />
                            <FormikInputValue name='password' placeholder='********' secureTextEntry />
                            <Button onPress={handleSubmit} title='Log In' />
                        </View>
                    )
                }
            }
        </Formik>
    )

};
