import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api'
import notFound from '../../assets/images/image-not-found.jpg'

import {
    ContainerProduct,
    ContainerImage,
    ContainerInformation,
    ContainerName,
    ContainerPrice,
    ContainerDescription,
    ContainerAdd,
    ContainerAddInformation,
    ContainerAddCatSto,
    ContainerAddCategory,
    ContainerAddStock,
    Button,
    Image,
} from './style.js'

const Update = () => {

    const { params } = useRouteMatch();

    const [produto, setProduto] = useState();
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const handleProduct = async () => {


            try {
                const response = await api.get(`/produto/${params.id}`);
                const prod = response.data;

                setProduto(prod);

            } catch (error) {
                alert('Erro no acesso a API');
            }
        };
        handleProduct();
    }, [params.id]);

    useEffect(() => {
        const handleListCategorias = async () => {


            try {
                const response = await api.get('/categoria');
                const list = response.data;
                const namesList = [];
                list.forEach(item => {
                    namesList.push(item)
                });
                setCategorias(namesList);

            } catch (error) {
                alert('Erro no acesso a API');
            }
        };
        handleListCategorias();

    }, []);

    const handleUpdateProduct = async () => {

        try {
            await api.put(`/produto/${params.id}`, produto);

        } catch (error) {
            alert('Erro no acesso a API');
        }

    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(produto)
        handleUpdateProduct();
    }

    const findCategoria = (id) => {
        const result = categorias.find(cat => cat.id === parseInt(id));
        return result.nome;
    }

    const addDefaultImg = (e) => {
        e.target.src = notFound;
    }

    console.log(produto)
    return (
        <>
            <ContainerProduct>
                <ContainerImage src={produto?.fotoLink} onError={addDefaultImg} alt='foto' />
                <ContainerInformation>
                    <ContainerName>{produto?.nome}</ContainerName>
                    <ContainerPrice>R$ {produto?.valor}</ContainerPrice>
                    <ContainerDescription>{produto?.descricao}</ContainerDescription>
                </ContainerInformation>
            </ContainerProduct>
            <form style={{ margin: '0 5% 0 5%' }}>
                <ContainerAdd>
                    <Image>
                        <img src={produto?.fotoLink} onError={addDefaultImg} alt='' />
                    </Image>
                    <ContainerAddInformation>
                        <div>
                            <input type='text' placeholder='Name Product' value={produto?.nome} onChange={e => setProduto({ ...produto, nome: e.target.value })} />
                        </div>
                        <div>
                            <input type='number' placeholder='Price' value={produto?.valor} onChange={e => setProduto({ ...produto, valor: parseFloat(e.target.value) })} />
                        </div>
                        <div>
                            <input type='text' placeholder='Description' value={produto?.descricao} onChange={e => setProduto({ ...produto, descricao: e.target.value })} />
                        </div>
                    </ContainerAddInformation>
                </ContainerAdd>
                <ContainerAddCatSto>
                    <ContainerAddStock>
                        <input type='number' placeholder='Stock' value={produto?.qtdEstoque} onChange={e => setProduto({ ...produto, qtdEstoque: parseInt(e.target.value) })} />
                    </ContainerAddStock>
                    <ContainerAddCategory>
                        <select name="dropdown" onChange={e => setProduto({
                            ...produto,
                            idCategoria: parseInt(e.target.value), nomeCategoria: findCategoria(e.target.value)
                        })}>

                            {categorias.map(cat => {
                                return (
                                    <option id={cat.id} key={cat.id} value={cat.id}>{cat.nome}</option>)
                            })};
                        </select>
                    </ContainerAddCategory>
                </ContainerAddCatSto>
                <Button><button onClick={handleClick} >Submit</button></Button>
            </form>
        </>
    );
};

export default Update;