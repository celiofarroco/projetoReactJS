import React, { useState, useEffect } from 'react';

import api from '../../services/api'
import notFound from '../../assets/images/image-not-found.jpg'

import {
    ContainerProduct,
    ContainerImage,
    ContainerInformation,
    Space,
    Delete,
    ContainerName,
    ContainerPrice,
    ContainerDescription,
} from './style'
import { FiTrash2 } from 'react-icons/fi';

const Del = () => {

    const [lists, setLists] = useState([]);
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        const handleListProduct = async () => {


            try {
                const response = await api.get('/produto');
                const list = response.data;

                setLists(list);
                setRefresh(false);
            } catch (error) {
                alert('Erro no acesso a API');
            }
        };
        handleListProduct();
    }, [refresh]);

    const handleDelete = async (id) => {
        try {
            await api.delete(`/produto/${id}`);
            setRefresh(true);

        } catch (error) {
            alert('Erro no acesso a API');
        }
        console.log(id)
    }

    const addDefaultImg = (e) => {
        e.target.src = notFound;
    }

    return (
        <>
            {lists.map(list => {
                return (
                    <ContainerProduct key={list.id}>
                            <ContainerImage src={list.fotoLink} onError={addDefaultImg} alt='foto' />
                            <ContainerInformation>
                                <ContainerName>{list.nome}</ContainerName>
                                <ContainerPrice>R$ {list.valor}</ContainerPrice>
                                <ContainerDescription>{list.descricao}</ContainerDescription>
                            </ContainerInformation>
                        <Space />
                        <Delete value={list.id} onClick={() => (handleDelete(list.id))} ><FiTrash2 /></Delete>
                    </ContainerProduct>
                )
            })}
        </>

    );
}

export default Del;