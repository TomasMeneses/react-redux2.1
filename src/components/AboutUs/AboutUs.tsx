import React from 'react';
import { useSelector } from 'react-redux';

import { IGlobalState } from '../../store/modules/user/types';

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"

  import { Container } from './styles';

const AboutUs: React.FC = () => {
    const state = useSelector((state: IGlobalState) => state.users)

    return (
        <Container>
            <h1>Matriculados, Academia Accenture 2.1</h1>
            <>
                <Table variant="simple">
                    <TableCaption>Estudantes Matriculados</TableCaption>
                    <Thead>
                        <Tr>
                        <Th>Id</Th>
                        <Th>Nome</Th>
                        <Th>Email</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            state.map((user, index) =>(
                                <Tr key={index}>
                                    <Td>{user.id}</Td>
                                    <Td>{user.name}</Td>
                                    <Td>{user.email}</Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                    </Table>
            </>
        </Container>
    );
}

export default AboutUs;