import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Text} from "@chakra-ui/react"

import {StyledBox, Container} from './styles';

import api from '../../service/api' 

import { IUser } from '../../store/modules/user/types';
import { addNewUser } from '../../store/modules/user/actions';

const Home: React.FC = () => {
    const dispatch = useDispatch()
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        api.get('students').then(
            response => {
                setUsers(response.data)
            }
        )
    }, [])

    const handleUsers = useCallback( ( user: IUser  ) => {
        dispatch((addNewUser(user)))
    }, [dispatch]) 

    return (
        <div>
            <Container>
                { users.map( user => (
                    <div key={user.id}>
                        <StyledBox maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                            <Text fontSize="2xl"> { user.name } | { user.email } | { user.age }</Text>
                            <Button colorScheme="teal" size="md" onClick={ () => handleUsers(user) }> Adicionar </Button>
                        </StyledBox>
                    </div>
                ))}
                
            </Container>
        </div>
    );
}

export default Home;