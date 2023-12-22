import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";
import { signUpSchema } from '../schemas';



function Registration() {

    const [value, setValue] = useState(
        {
            fullName: '',
            mobile: '',
            email: '',
            password: '',
            confirmPassword: '',
            checkBox: '',
            selectedOption: '',
            gender: 'male',
        }
    )

    const [passwordType, setPasswordType] = useState("password");

    const [passwordType2, setPasswordType2] = useState('password')


    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const togglePassword2 = () => {
        if (passwordType2 === "password") {
            setPasswordType2("text")
            return;
        }
        setPasswordType2("password")
    }

    const history = useHistory();

    const radioOptions = [
        { value: 'male', label: 'male' },
        { value: 'female', label: 'female' }
    ];

    const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik(
        {
            initialValues: value,

            validationSchema: signUpSchema,

            onSubmit: (values) => {
                console.log(values);
                axios.post(`https://65338221d80bd20280f68b66.mockapi.io/fake`, values)
            }
        },
    );


    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className='d-flex flex-column'>
                    <label htmlFor='fullName' className='f-name'>Full Name
                        <input placeholder='Full Name' type='fullName' name='fullName' id="fullName" className='form-control w-100' value={values.fullName} onChange={handleChange} onBlur={handleBlur} />
                        <div>{errors.fullName && touched.fullName ? (<p className='text-danger'>{errors.fullName}</p>) : null}</div>
                    </label>

                    <label htmlFor='phonenumber' className='f-name'>Mobile
                        <input placeholder='Mobile' type='number' name='mobile' id="mobile" className='form-control w-100' value={values.mobile} onChange={handleChange} onBlur={handleBlur} />
                        <div>{errors.mobile && touched.mobile ? (<p className='text-danger'>{errors.mobile}</p>) : null}</div>
                    </label>

                    <label htmlFor='email' className='f-name'>Email
                        <input placeholder='Email' type='email' name='email' id="email" className='form-control w-100' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        <div> {errors.email && touched.email ? (<p className='text-danger'>{errors.email}</p>) : null}</div>
                    </label>

                    <label htmlFor='password' className='f-name'>Password
                        <div className='d-flex' id='pass'>
                            <input placeholder='password' type={passwordType} name='password' id="password" className='form-control w-100' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            <span className="btn btn-outline-primary" onClick={togglePassword}>
                                {passwordType === "password" ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
                            </span>
                        </div>
                        <div>{errors.password && touched.password ? (<p className='text-danger'>{errors.password}</p>) : null}</div>
                    </label>

                    <label htmlFor='confirmPassword' className='f-name'>confirm password
                        <div className='d-flex'>
                            <input placeholder='confirm password' type={passwordType2} name='confirmPassword' id="confirmPassword" className='form-control w-100' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                            <span className="btn btn-outline-primary" onClick={togglePassword2}>
                                {passwordType2 === "password" ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
                            </span>
                        </div>
                        <div>{errors.confirmPassword && touched.confirmPassword ? (<p className='text-danger'>{errors.confirmPassword}</p>) : null}</div>
                    </label>

                    <div>
                        <label htmlFor='radionbutton' className='radio-btn mt-4'>Gender</label>
                        {
                            radioOptions.map((option) => (

                                <div key={option.value}><input type='radio' name='gender' value={option.value} checked={values.gender === option.value} onChange={handleChange} /> {option.label}</div>

                            ))}
                        {errors.gender && <p className='text-danger'>Gender is required</p>}

                    </div>

                    <div className='mt-3'>
                        <label>
                            <label>
                                Select City :
                                <select
                                    name="selectedOption"
                                    value={values.selectedOption}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option value="" label="Select" />
                                    <option value="mumbai" label="mumbai" />
                                    <option value="hyderabad" label="hyderabad" />
                                </select>
                            </label>
                            <div> {errors.selectedOption && touched.selectedOption ? (<p className='text-danger'>{errors.selectedOption}</p>) : null}</div>
                        </label>
                    </div>

                    <div className=' d-flex mt-4'>

                        <input className='text-white' type='checkBox' id='checkBox' name='checkBox' onChange={handleChange} onBlur={handleBlur} value={values.checkBox} />
                        <p className='ps-2'>I agree to the Terms and Conditions</p>
                        <div>{errors.checkBox && touched.checkBox ? (<p className='text-danger'>{errors.checkBox}</p>) : null}</div>

                    </div>
                    

                    <button type='submit' className='btn btn-danger mt-4'>Submit button</button>

                </div>
            </form>
        </>
    )
}

export default Registration



