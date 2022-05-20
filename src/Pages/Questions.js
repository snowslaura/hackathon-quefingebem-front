import styled from "styled-components";
import { IoReturnUpBack } from "react-icons/io"
import { CgMenuBoxed } from "react-icons/cg"
import { BsFillPencilFill} from "react-icons/bs"

function Questions(){
    <>
        <Top>
            <IoReturnUpBack/>
            <p>Javascript</p>
            <CgMenuBoxed/>
        </Top>
        <Question>
            <p>Qual a sua dúvida?</p>
            <form>
                <div>
                    <input type="text" id="question" />
                    <button type="submit"><BsFillPencilFill/></button>
                </div>    
            </form>
        </Question>
        <Answers></Answers>
    </>
}

export default Questions;

const Top = styled.div`
    margin-top: 108px;
    width: 100%;
    height: 45px;
    background: #4B5358;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: space-between;
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #F9F9F9;
`
const Question = styled.div`
    margin-top: 25px;

        p{
        margin-bottom: 20px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;        
        color: #000000; 
        }
`

const Answers = styled.div`

`



