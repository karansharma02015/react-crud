import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Form, Checkbox } from 'semantic-ui-react'



import { Link } from 'react-router-dom';

export default function Create() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [selectedOption, setSelectedOption] = useState("select");



    

    const option = [

        { label: 'Gender', value: 'Gender' },

        { label: 'Male', value: 'Male' },

        { label: 'Female', value: 'Female' },

    ]



    const postData = () => {
        console.log("click")
        axios.post(`https://65338221d80bd20280f68b66.mockapi.io/fake`,
            {
                firstName,
                lastName,
                checkbox,
                email,
                address,
                password,
                selectedOption

            }
        )

    }

    // const handleChange = (e) => {
    //     setFirstName(e.target.value)
    // }

    

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);

    }

    return (
        <>
            <form>
         
                <div>
                    <label className='f-name'>First Name
                        <input placeholder='First Name' type='text' className='form-control w-100' onChange={(e) => setFirstName(e.target.value)} />
                    </label>
                </div>


                <div>
                    <label className='f-name'>Last Name
                        <input placeholder='Last Name' type='text' className='form-control' onChange={(e) => setLastName(e.target.value)} />
                    </label>
                </div>

                <div>

                    <label className='f-name'>Email
                        <input placeholder='Enter Email Address' type='email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>

                <div>
                    <label className='f-name'> Address

                        <textarea placeholder='Enter Address here' className='form-control w-100' onChange={(e) => setAddress(e.target.value)}></textarea>

                    </label>
                </div>

                <div>
                    <label className='f-name'>Password
                        <input placeholder='Last Name' type='password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>



                <div className='mt-3'>

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
                </div>



                <Link to='/read'>
                    <button type='submit' className='btn btn-danger mt-4' onClick={postData}>Submit</button>
                </Link>

            </form>
        </>
    )
}

