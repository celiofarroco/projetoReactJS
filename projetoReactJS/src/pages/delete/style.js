import styled from 'styled-components'

export const ContainerProduct = styled.div`
    display: flex;
    margin: 0% 10% 2% 10%;
    border-radius: 1vh;
    background-color: #fff;

    a{
        color: #252526;
        width: 100%;
        text-decoration: none;
        display: flex;
    }
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
        padding: 5% 0% 0% 0%;
    }
`;
export const ContainerDescription = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    align-content: left;
    font-size: 20px;

    @media(max-width: 530px) {
        font-size: 12px;
    }
`;

export const Delete = styled.button`
    border: none;
    background-color: #fff;
    cursor: pointer;
    margin: 2vh;
    height: 20px;
`;

export const Space = styled.div`
    flex: 1;
`;