import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';


function Home() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     GET - topics/themes
    // });

    return (
        <Section>
            <p>Login</p>
            <Article>
                <h1>AskSnap</h1>
                <p>Escolha um tema</p>
                {/* Render buttons com os tópicos recebidos do GET(useEffect) */}
                <button onClick={() => navigate('/questions')}>JavaScript</button>
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


    p{
        margin-right: 0;
        font-family: 'Alata';
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        text-align: center;
        color: #FFFFFF;
    }
`;

const Article = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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