import styled from 'styled-components'

export const ContainerProduct = styled.div`
    border: solid 1px #A8A8A8;
    border-radius: 1vh;
    display: flex;
    margin: 0% 5% 4vh 5%;
    border-radius: 1vh;
    background-color: #fff;
`;
export const ContainerImage = styled.img`
    width: 20vh;
    height: 20vh;
    align-content: left;
    border-radius: 1vh 0vh 0vh 1vh;
    @media(max-width: 530px) {
        width: 16vh;
        height: 16vh;
    }
`;
export const ContainerInformation = styled.div`
    padding: 1%;
    flex-direction: column;
    justify-content: space-between;
`;
export const ContainerName = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    align-content: left;
    font-size: 24px;
    height: 4vh;

    @media(max-width: 530px) {
        font-size: 14px;
    }
`;
export const ContainerPrice = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    padding: 5% 0% 5% 0%;
    align-content: left;
    font-weight: bold;
    font-size: 30px;

    @media(max-width: 530px) {
        font-size: 20px;
        padding-top: 5%;
    }
`;
export const ContainerDescription = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    font-size: 20px;

    @media(max-width: 530px) {
        font-size: 12px;
    }
`;

export const ContainerAdd = styled.div`
    display: flex;

    div{
        flex: 1;
    }

    img{
        height: 20vh;
        width: 20vh;
        @media(max-width: 530px) {
            width: 16vh;
            height: 16vh;
        }
    }
`;
export const ContainerAddInformation = styled.div`
    display: flex;
    flex-direction: column;

    input{
        margin-bottom: 1vh;
        width: 100%;
        padding: 0 0 0 0;
        font-size: 24px;
        border: none;
        height: 6vh;
        background-color: #c4c4c4;
        option{
            color: #252526;
        }
        
        @media(max-width: 530px) {
            width: 100%;
            height: 4.65vh;
            font-size: 16px;
        }
    }
`;

export const ContainerAddCatSto = styled.div`
    display: flex;
`;

export const ContainerAddCategory = styled.div`
    width: 50%;
    select{
        width: 100%;
        font-size: 24px;
        border: none;
        height: 6vh;
        background-color: #c4c4c4;
        option{
            color: #252526;
        }
        
        @media(max-width: 530px) {
            height: 4.65vh;
            font-size: 16px;
        }
    }
`;

export const ContainerAddStock = styled.div`
    width: 50%;
    input{
        width: 98.5%;
        padding: 0 0 0 0;
        font-size: 24px;
        border: none;
        height: 6vh;
        background-color: #c4c4c4;
        option{
            color: #252526;
        }
        
        @media(max-width: 530px) {
            width: 96%;
            height: 4.65vh;
            font-size: 16px;
        }
    }
`;

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        cursor: pointer;
        margin-top: 10vh;
        width: 170px;
        height: 50px;
        border-radius: 23px;
        color: #f2f2f2;
        background-color: #732306;
        border: none;
        font-size: 20px;

        &:hover{
            transition: 0.4s;
            background-color: #5c1c04;
        }

        @media(max-width: 530px) {
        width: 85px;
        height: 25px;
        border-radius: 10px;
        font-size: 14px;
        }
    }
`;

export const Image = styled.p`
    margin: 0 0 0 0;
    width: 21vh;

    @media(max-width: 530px) {
        width: 17vh;
    }
`;