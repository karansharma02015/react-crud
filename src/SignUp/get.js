import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



function Get() {

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {

        axios.get(`https://65338221d80bd20280f68b66.mockapi.io/fake`)
            .then(
                (response) => {
                    setAPIData(response.data)
                }
            )


    }
        , [])

    const setData = (data) => {

        console.log(data);

        let { id, firstName, mobile, checkBox, email, password, confirmPassword, selectedOption } = data;

        localStorage.setItem('ID', id);
        localStorage.setItem('first Name', firstName);
        localStorage.setItem('mobile', mobile);
        localStorage.setItem('checked', email);
        localStorage.setItem('checked', password);
        localStorage.setItem('checked', confirmPassword);
        localStorage.setItem('checked', selectedOption);
        localStorage.setItem('checked', checkBox);

    }

    const onDelete = (id) => {
        console.log(id);
        axios.delete(`https://65338221d80bd20280f68b66.mockapi.io/fake/${id}`)
            .then(() => getData());
    }

    const getData = () => {

        axios.get(`https://65338221d80bd20280f68b66.mockapi.io/fake`)
            .then((response) => {
                setAPIData(response.data);
            })
    }


    return (
        <>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Full Name</Table.HeaderCell>
                        <Table.HeaderCell>Mobile Number</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>gender</Table.HeaderCell>
                        <Table.HeaderCell>Confirm Password</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        APIData.map((data, index) => {
                            return (
                                <Table.Row key={index}>
                                    <Table.Cell>{data.fullName}</Table.Cell>
                                    <Table.Cell>{data.mobile}</Table.Cell>
                                    <Table.Cell>{data.email}</Table.Cell>
                                    <Table.Cell>{data.password}</Table.Cell>
                                    <Table.Cell>{data.gender}</Table.Cell>
                                    <Table.Cell>{data.confirmPassword}</Table.Cell>
                                    <Table.Cell>{data.selectedOption}</Table.Cell>
                                    <Table.Cell>{data.checkBox ? 'Checked' : 'Unchecked'}</Table.Cell>

                                    <Table.Cell>
                                        <Link to='/put'>
                                            <Button onClick={() => setData(data)}>Update</Button>
                                        </Link>
                                    </Table.Cell>

                                    <Table.Cell>
                                        <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                    </Table.Cell>

                                </Table.Row>

                            )
                        })
                    }
                </Table.Body>
            </Table>
        </>
    )
}

export default Get