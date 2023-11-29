import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';


import { Button, Form, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



export default function Update() {

    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {

        setID(localStorage.getItem('ID'));
        setFirstName(localStorage.getItem('first Name'));
        setLastName(localStorage.getItem('last Name'));
        setCheckbox(localStorage.getItem('checkbox Value'));

    }, []);

    const updateAPIData = () => {
        axios.put(`https://65338221d80bd20280f68b66.mockapi.io/fake/${id}`, {
            firstName,
            lastName,
            checkbox
        })
    }

    return (
        <>

            <Form className="create-form">

                <label className='f-name'>First Name</label>
                <input placeholder='First Name' className='form-control w-100' value={firstName} onChange={(e) => setFirstName(e.target.value)} />


                <label className='f-name'>Last Name</label>
                <input placeholder='Last Name' className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)} />


                <div className=' d-flex mt-4'>

                    <input className='text-white' type='checkbox' onChange={(e) => setCheckbox(!checkbox)} />
                    <p className='ps-2'>I agree to the Terms and Conditions</p>

                </div>

                <div>
                    <Link to='/read'>

                        <button type='submit' className='btn btn-danger mt-4' onClick={updateAPIData}>Update</button>
                    </Link>
                </div>
            </Form>


        </>
    )
} 