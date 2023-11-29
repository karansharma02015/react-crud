import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Form, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default function Write() {

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('')
    // const [address, setAddress] = useState('');
    // const [password, setPassword] = useState('');
    

    const initialValues = { firstname: "", lastname: "", password: "", email: "", address: ""};

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    


    // const option = [

    //     { label: 'Gender', value: 'Gender' },

    //     { label: 'Male', value: 'Male' },

    //     { label: 'Female', value: 'Female' },

    // ]



    // const postData = () => {
    //     console.log("click")
    //     axios.post(`https://65338221d80bd20280f68b66.mockapi.io/fake`,
    //         {
    //             firstName,
    //             lastName,
    //             email,
    //             address,
    //             password,
    //         }
    //     )

    // }

    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
        console.log(formValues);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true)
        
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s]+@[^\s@]+\.[^\s@]{2,}$/i;

        if(!values.firstname){
            errors.firstname = "FirstName is Required";
        }

        if(!values.lastname){
            errors.lastname = "LastName is Required";
        }

        if(!values.password){
            errors.password = "Password is Required";
        }

        if(!values.email){
            errors.email = "Email is Required";
        }

        if(!values.address){
            errors.address = "address is Required";
        }

        return errors;
    }

    // const handleDropdownChange = (event) => {
    //     setSelectedOption(event.target.value);

    // }

    return (
        <>
            <form onSubmit={handleSubmit}>
         
                <div>
                    <label className='f-name'>First Name
                        <input placeholder='First Name' type='text' name='firstname' value={formValues.firstname} className='form-control w-100' onChange={handleChange} />
                        <p className='text-danger'>{formErrors.firstname}</p>
                    </label>
                </div>


                <div>
                    <label className='f-name'>Last Name
                        <input placeholder='Last Name' type='text' name='lastname' className='form-control' value={formValues.lastname} onChange={handleChange} />
                        <p className='text-danger'>{formErrors.lastname}</p>
                    </label>
                </div>

                <div>

                    <label className='f-name'>Email
                        
                        <input placeholder='Enter Email Address' type='email' name='email' className='form-control' value={formValues.email} onChange={handleChange} />
                        <p className='text-danger'>{formErrors.email}</p>
                    </label>
                </div>

                <div>
                    <label className='f-name'> Address

                        <textarea placeholder='Enter Address here' name='address' className='form-control w-100' value={formValues.address} onChange={handleChange}></textarea>
                        <p className='text-danger'>{formErrors.address}</p>
                    </label>
                </div>

                <div>
                    <label className='f-name'>Password
                        <input placeholder='Last Name' type='password' name='password' className='form-control' value={formValues.password} onChange={handleChange} />
                        <p className='text-danger'>{formErrors.password}</p>
                    </label>
                </div>

                <button type='submit' className='btn btn-danger mt-4' onClick={handleSubmit}>Submit</button>



                {/* <div className='mt-3'>

                    <label>

                        <select className=' form-select' value={selectedOption} onChange={handleDropdownChange}>
                            {
                                option.map((option, index) => (
                                    <option value={option.value} key={index}>{option.label}</option>
                                ))
                            }
                        </select>
                    </label>


                </div>

                <div className=' d-flex mt-4'>

                    <input className='text-white' type='checkbox' onChange={(e) => setCheckbox(!checkbox)} />
                    <p className='ps-2'>I agree to the Terms and Conditions</p>
                </div> */}


                
                

            </form>
        </>
    )
}