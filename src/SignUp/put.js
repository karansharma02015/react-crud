import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Button, Form, checkBox } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { signUpSchema } from '../schemas';
import { useHistory } from "react-router-dom";


function Put() {

    const [id, setID] = useState(null);

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

    const radioOptions = [
        { value: 'male', label: 'male' },
        { value: 'female', label: 'female' }
    ];


    useEffect(() => {

        setID(localStorage.getItem('ID'));
        
        setValue({
            fullName: localStorage.getItem('fullName'),
            mobile: localStorage.getItem('mobile'),
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password'),
            confirmPassword: localStorage.getItem('confirmPassword'),
            checkBox: localStorage.getItem('checkBox'),
            selectedOption: localStorage.getItem('selectedOption'),
            gender: localStorage.getItem('gender'),
        });

    }, []);



    const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik(
        {
            initialValues: value,

            validationSchema: signUpSchema,

            onSubmit: (values) => {
                console.log(values);
                axios.put(`https://65338221d80bd20280f68b66.mockapi.io/fake/${id}`, values)
            }
        }
    );

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className='d-flex flex-column'>
                    <label htmlFor='fullName' className='f-name'>First Name
                        <input placeholder='First Name' type='fullName' name='fullName' id="fullName" className='form-control w-100' value={values.fullName.getItem} onChange={handleChange} onBlur={handleBlur} />
                        {errors.fullName && touched.fullName ? (<p className='text-danger'>{errors.fullName}</p>) : null}
                    </label>

                    <label htmlFor='phonenumber' className='f-name'>Mobile
                        <input placeholder='Mobile' type='number' name='mobile' id="mobile" className='form-control w-100' value={values.mobile} onChange={handleChange} onBlur={handleBlur} />
                        <div>{errors.mobile && touched.mobile ? (<p className='text-danger'>{errors.mobile}</p>) : null}</div>
                    </label>

                    <label htmlFor='email' className='f-name'>Email
                        <input placeholder='Email' type='email' name='email' id="email" className='form-control w-100' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        {errors.email && touched.email ? (<p className='text-danger'>{errors.email}</p>) : null}
                    </label>

                    <label htmlFor='password' className='f-name'>Password

                        <input placeholder='password' type='password' name='password' id="password" className='form-control w-100' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                        {errors.password && touched.password ? (<p className='text-danger'>{errors.password}</p>) : null}

                    </label>

                    <label htmlFor='confirmPassword' className='f-name'>confirm password

                        <input placeholder='confirm password' type='password' name='confirmPassword' id="confirmPassword" className='form-control w-100' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                        {errors.confirmPassword && touched.confirmPassword ? (<p className='text-danger'>{errors.confirmPassword}</p>) : null}
                    </label>

                    <div>
                        <label htmlFor='radionbutton' className='radio-btn mt-4'>Gender</label>

                        {
                            radioOptions.map((option) => (
                               
                                    <div key={option.value}><input type='radio' name='gender' value={option.value} checked={values.gender === option.value}  onChange={handleChange}/> {option.label}</div>
                               
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

                    <div className='d-flex mt-4'>

                        <input className='text-white' type='checkBox' id='checkBox' name='checkBox' onChange={handleChange} onBlur={handleBlur} value={values.checkBox} />
                        <div className='ps-2'>I agree to the Terms and Conditions</div>

                    </div>
                    <div className='d-block'>{errors.checkBox && touched.checkBox ? (<p className='text-danger'>{errors.checkBox}</p>) : null}</div>

                    <button type='submit' className='btn btn-danger mt-4'>Submit</button>

                </div>
            </form>

        </>
    )
}

export default Put