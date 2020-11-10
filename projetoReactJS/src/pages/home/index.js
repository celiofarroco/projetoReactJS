import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api'
import notFound from '../../assets/images/image-not-found.jpg'

import {
    ContainerProduct,
    ContainerImage,
    ContainerInformation,
    ContainerName,
    ContainerPrice,
    ContainerDescription,
} from './style'

const Home = () => {

    const [lists, setLists] = useState([]);

    useEffect(() => {
        const handleListProduct = async () => {


            try {
                const response = await api.get('/produto');
                const list = response.data;

                setLists(list);

            } catch (error) {
                alert('Erro no acesso a API');
            }
        };
        handleListProduct();
    }, []);

    const addDefaultImg = (e) => {
        e.target.src = notFound;
    }

    return (
        <>
            {lists.map(list => {
                return (
                    <ContainerProduct key={list.id}>
                        <Link to={`/update/${list.id}`}>
                            <ContainerImage src={list.fotoLink} onError={addDefaultImg} alt='foto' />
                            <ContainerInformation>
                                <ContainerName>{list.nome}</ContainerName>
                                <ContainerPrice>R$ {list.valor}</ContainerPrice>
                                <ContainerDescription>{list.descricao}</ContainerDescription>
                            </ContainerInformation>
                        </Link>
                    </ContainerProduct>
                )
            })}
        </>

    );
}

export default Home;
