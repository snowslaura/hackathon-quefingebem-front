import styled from "styled-components";
import { IoReturnUpBack } from "react-icons/io5"
import { CgMenuBoxed } from "react-icons/cg"
import { BsFillPencilFill} from "react-icons/bs"
import Header from "./../components/Header"
import {useEffect, useState} from "react"
import axios from "axios"
import {useLocation} from "react-router-dom";
import TheTrueQuestions from '../components/Questions.jsx';


function Questions(){
    const navigate = useLocation();
    const {title} = navigate.state;
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState("");
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/questions`)
        .then((res) =>{
            setQuestions(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            alert("Houve um erro. Tente mais tarde!")});
    },[]);
    
    function submitQuestion(e){
        e.preventDefault();
        axios
        .post(`${process.env.REACT_APP_API_URL}/questions`,{
            type:title,title:question
        }).then(
            () => (
                alert("Meu deus, meu senho, me ajuda, por favor")
            )
        ).catch((err) =>  {
            alert("Infelizmente aconteceu um erro! Tente novamente!")
            console.log(err);
            }
        )
        
    }
    
    return(    
    <>
    <Header></Header>
    <Container>
        <Top>
            <IoReturnUpBack/>
                <p>{title}</p>
            <CgMenuBoxed />
        </Top>
        <Question>
            <p>Qual a sua dúvida?</p>
                    <form onSubmit={submitQuestion}>
                        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} id="question" />
                        <button type="submit"> <BsFillPencilFill/></button>
                    </form>
        </Question>
        <LastQuestions>
            <p>Últimas perguntas</p>
            <div>
                <TheTrueQuestions array={questions} theTrueType={title}/>
            </div>
        </LastQuestions>
    </Container>
    </>
        
    )}

export default Questions;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

const Top = styled.div`
    width: 100%;
    height: 45px;
    background: #4B5358;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 28px;
    text-align: center;
    color: #F9F9F9;
    padding: 10px;
`
const Question = styled.div`
        margin-top: 5px;
        width: 95%;
        padding: 10px;

        p{
        margin-bottom: 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;        
        color: #000000; 
        font-family: 'Alata';
        }

        button{
            background: #D9D9D9;
            border: none;
            font-size: 25px;
        }

        form{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 59px;
            background: #D9D9D9;
            backdrop-filter: blur(4px);
            border-radius: 15px;
            padding:5px;
        }
        input{
            width: 100%;
            height: 100%;
            background: #D9D9D9;
            border: none;
        }
`

const LastQuestions = styled.div`
        margin-top: 5px;
        width: 95%;
        height: 100%;
        padding: 10px;

        p{
            margin-bottom: 20px;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;        
            color: #000000; 
            font-family: 'Alata';

        }
    
        div{
            width: 100%;
            height: 517px;
            overflow-y: scroll;
            background: #D9D9D9;
            backdrop-filter: blur(4px);
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 10px; 
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;        
            color: #000000; 
            font-family: 'Alata';       
        }

        Link{
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;        
            color: #000000; 
        }
` 

