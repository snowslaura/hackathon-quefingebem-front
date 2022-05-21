import styled from "styled-components";
import { IoReturnUpBack } from "react-icons/io5"
import { CgMenuBoxed } from "react-icons/cg"
import { BsFillPencilFill} from "react-icons/bs"
import Header from "./../components/Header"
import {useLocation, useParams} from "react-router-dom";
import axios from "axios"
import {useEffect, useState} from "react"
import Answers from "../components/Answers.jsx"

function Answer(){
    const {id} = useParams();   
    console.log(id) 
    const navigate = useLocation();
    const [answers, setAnswers] = useState([]);
    const [postAnswer, setPostAnswer] = useState([])
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/answers/${id}`)
        .then((res) =>{
            setAnswers(res.data)
            console.log(id)
        })
        .catch((err) => {
            alert("Houve um erro. Tente mais tarde!")});
    },[id]);

    function submitAnswer(e){
        e.preventDefault();
        const body = {
            postAnswer
        }
        axios
        .post(`${process.env.REACT_APP_API_URL}/answers/${id}`, body )
        .then((res) =>{            
            setPostAnswer("")
        })
        .catch((err) => {
            alert("Houve um erro. Tente novamente!")});
    }

    return(    
    <>
    <Header></Header>
    <Container>
        <Top>
            <IoReturnUpBack/>
                {/* <p>{title}</p> */}
            <CgMenuBoxed />
        </Top>
        <Question>
            <p>{answers.title}</p>           
        </Question>
        <Question>
            <p>Sabe a resposta? Colabore aqui</p>
            <form onSubmit={submitAnswer}>
                <div>
                    <input type="text" id="question" />
                    <button type="submit" value={postAnswer} onChange={e => setPostAnswer({answer: e.target.value})} > <BsFillPencilFill/></button>
                </div>    
            </form>
        </Question>
        <LastQuestions>
            <div>
                <Answers array={answers}>  </Answers>
            </div>
        </LastQuestions>
    </Container>
    </>
        
    )}

export default Answer;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
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

        div{
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
    }
`    



