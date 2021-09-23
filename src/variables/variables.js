import * as yup from 'yup'

export const validationShema = yup.object().shape({
    first_name: yup.string().typeError("Должно быть строкой").required("Поле first name обязательно к заполнению"),
    last_name: yup.string().typeError("Должно быть строкой").required("Поле last name обязательно к заполнению"),
    username: yup.string().typeError("Должно быть строкой").required("Поле username обязательно к заполнению"),
    password: yup.string().typeError("Должно быть строкой").required("Поле password обязательно к заполнению"),
    repeat_password: yup.string().oneOf([yup.ref('password')], "Пароли не совпадают").required("Обязательно к заполнению"),
    email: yup.string().email("Введите верный емейл").required("Обязательно к заполнению")
})


export let initialValues = {
    first_name: "",
    last_name: "",
    password: "",
    repeat_password: "",
    email: "",
    username: ""
}

export const validationShemaAuth = yup.object().shape({
    username: yup.string().typeError("Должно быть строкой").required("Поле username обязательно к заполнению"),
    password: yup.string().typeError("Должно быть строкой").required("Поле password обязательно к заполнению"),
})


export let initialValuesAuth  = {
    password: "",
    username: ""
}


export const validationShemaProj = yup.object().shape({
    title: yup.string().typeError("Должно быть строкой").required("Поле title обязательно к заполнению"),
    key: yup.string().typeError("Должно быть строкой").required("Поле key обязательно к заполнению"),
    short_info: yup.string().typeError("Должно быть строкой").required("Поле description обязательно к заполнению"),
})


export let initialValuesProj  = {
    title: "",
    key: "",
    short_info: ""
}