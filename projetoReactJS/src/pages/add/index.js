import React, { useState, useEffect } from 'react';

import api from '../../services/api';
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

const Add = () => {

    const [categorias, setCategorias] = useState([]);

    const [produto, setProduto] = useState({
        dataFabricacao: '2019-10-01T00:00:00Z',
        descricao: '',
        fotoLink: null,
        id: 0,
        idCategoria: 0,
        idFuncionario: 1,
        nome: '',
        nomeCategoria: '',
        nomeFuncionario: null,
        qtdEstoque: null,
        valor: null
    });

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

    const handleAddProduct = async () => {

        try {
            await api.post('/produto', produto);

        } catch (error) {
            alert('Erro no acesso a API');
        }

    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(produto);
        handleAddProduct();
    }

    const findCategoria = (id) => {
        const result = categorias.find(cat => cat.id === parseInt(id));
        return result.nome;
    }

    return (
        <>
            <ContainerProduct>
                <ContainerImage src={notFound} alt='foto' />
                <ContainerInformation>
                    <ContainerName>{produto.nome}</ContainerName>
                    <ContainerPrice>R$ {produto.valor}</ContainerPrice>
                    <ContainerDescription>{produto.descricao}</ContainerDescription>
                </ContainerInformation>
            </ContainerProduct>
            <form onSubmit={handleSubmit} style={{ margin: '0 5% 0 5%' }}>
                <ContainerAdd>
                    <Image>
                        <img src={notFound} alt='' />
                    </Image>
                    <ContainerAddInformation>
                        <div>
                            <input type='text' placeholder='Name Product' value={produto.nome} onChange={e => setProduto({ ...produto, nome: e.target.value })} />
                        </div>
                        <div>
                            <input type='number' placeholder='Price' value={produto.valor} onChange={e => setProduto({ ...produto, valor: parseFloat(e.target.value) })} />
                        </div>
                        <div>
                            <input type='text' placeholder='Description' value={produto.description} onChange={e => setProduto({ ...produto, descricao: e.target.value })} />
                        </div>
                    </ContainerAddInformation>
                </ContainerAdd>
                <ContainerAddCatSto>
                    <ContainerAddStock>
                        <input type='number' placeholder='Stock' value={produto.qtdEstoque} onChange={e => setProduto({ ...produto, qtdEstoque: parseInt(e.target.value) })} />
                    </ContainerAddStock>
                    <ContainerAddCategory>
                        <select name='dropdown' onChange={e => setProduto({
                            ...produto,
                            idCategoria: parseInt(e.target.value), nomeCategoria: findCategoria(e.target.value)
                        })}>
                            <option selected="selected" disabled="disabled">Category...</option>
                            {categorias.map(cat => {
                                return (
                                    <option id={cat.id} key={cat.id} value={cat.id}>{cat.nome}</option>)
                            })};
                        </select>
                    </ContainerAddCategory>
                </ContainerAddCatSto>
                <Button><button>Submit</button></Button>
            </form>
        </>
    );
};

export default Add;