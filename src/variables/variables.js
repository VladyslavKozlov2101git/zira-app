import * as yup from 'yup'

export const validationShema = yup.object().shape({
    first_name: yup.string().typeError("Должно быть строкой").required("Field first name is required"),
    last_name: yup.string().typeError("Должно быть строкой").required("Field last name is required"),
    username: yup.string().typeError("Должно быть строкой").required("Field username is required"),
    password: yup.string().typeError("Должно быть строкой").required("Field password is required"),
    repeat_password: yup.string().oneOf([yup.ref('password')], "Password don't match").required("This field is required"),
    email: yup.string().email("Введите верный емейл").required("This field is required")
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
    username: yup.string().typeError("Должно быть строкой").required("Field username is required"),
    password: yup.string().typeError("Должно быть строкой").required("Field password is required"),
})


export let initialValuesAuth = {
    password: "",
    username: ""
}


export const validationShemaProj = yup.object().shape({
    title: yup.string().typeError("Должно быть строкой").required("Field title is required"),
    key: yup.string().typeError("Должно быть строкой").required("Field key is required"),
    short_info: yup.string().typeError("Должно быть строкой").required("Field description is required"),

})


export let initialValuesProj = {
    title: "",
    key: "",
    short_info: ""
}

export let dropdownPriorityOptions = [{
        value: 'lowest',
        label: '- lowest priority',
        icon: "lowest.svg"
    },
    {
        value: 'low',
        label: '- low priority',
        icon: "low.svg"
    },
    {
        value: 'medium',
        label: '- medium priority',
        icon: "medium.svg"
    },
    {
        value: 'hight',
        label: '- high priority',
        icon: "high.svg"
    },
    {
        value: 'highest',
        label: '- highest priority',
        icon: "highest.svg"
    },
]

export let dropdownTypeOptions = [{
        value: 'task',
        label: '- for tasks',
        icon: "task.svg"
    },
    {
        value: 'bug',
        label: '- for glitces and mistakes',
        icon: "bug.svg"
    },
    {
        value: 'idea',
        label: '- for new introductionse',
        icon: "idea.svg"
    },
]

export let messagesTXT={
    successfulRegistration:"You are succesfully registered! Please wait until admin will check your account."
}