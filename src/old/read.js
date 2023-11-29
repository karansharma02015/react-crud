import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Read() {

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

        let { id, firstName, lastName, checkbox } = data;

        localStorage.setItem('ID', id);
        localStorage.setItem('first Name', firstName);
        localStorage.setItem('last Name', lastName);
        localStorage.setItem('checked', checkbox);

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
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        APIData.map((data, index) => {
                            return (

                                <Table.Row key={index}>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>



                                    <Table.Cell>
                                        <Link to='/update'>
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