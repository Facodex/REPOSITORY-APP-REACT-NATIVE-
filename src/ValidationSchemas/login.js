import * as yup from 'yup'; // importamos todo de yup

// creando el objeto que esperamos que tenga nuestro formulario 
export const loginValidationSchema = yup.object().shape({
    email: yup //validaciones sobre el campo email
        .string()
        .email()
        .required('E-mail is required'),
    password: yup //validaciones sobre el campo password
        .string()
        .min(5, 'Too short')
        .max(50, 'Too long')
        .required('Password is required')
});