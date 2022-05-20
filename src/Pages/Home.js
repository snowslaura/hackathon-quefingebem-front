import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { api } from './../assets/api';
import styled from 'styled-components';
import Topics from '../components/Topics';


function Home() {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        api
        .get('/questions')
        .then(((res) => setQuestions(res)))
        .catch((err) => {
            alert("Houve um erro. Tente mais tarde!")});
    });

    return (
        <Section>
            <h2>Login</h2>
            <Article>
                <h1>AskSnap</h1>
                <p>Escolha um tema</p>
                <Topics 
                    array={questions}/>
                <p>Primeira vez? Cadastre-se</p>
            </Article>
        </Section>
    );
};

export default Home;

const Section = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #104547;

    h2{
        margin-left: 85%;
        font-family: 'Alata';
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
    }

    p{
        font-family: 'Alata';
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
    }
`;

const Article = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h1{
        font-family: 'Alata';
        font-weight: 400;
        font-size: 48px;
        line-height: 66px;
        text-align: center;
        color: #D2D6EF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    button{
        width: 282px;
        height: 50px;
        left: 70px;
        top: 295px;
        background: #4B5358;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        cursor: pointer;
    }
`;