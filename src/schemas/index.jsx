import * as Yup from "yup";

export const signUpSchema = Yup.object({

    fullName: Yup.string().min(2).max(20).required("Please enter your name"),

    mobile: Yup.string().min(10).required('please enter phone number'),

    email: Yup.string().matches(/^[a-zA-Z0-9._-]+@gmail\.com$/, 'invalid gmail address').required("Please enter your email"),

    password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum')
        .max(20, 'Password is too long - should not contain more than 20 chars')
        .required("please enter your password")
        .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
        .matches(/\d/, "Password should contain at least one number")
        .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),

    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "password Must Match").required('Please enter password'),

    checkBox: Yup.boolean().oneOf([true], 'Please check the box'),

    selectedOption: Yup.string().required('Please select a state'),

    gender: Yup.string().required('Gender is required'),

});