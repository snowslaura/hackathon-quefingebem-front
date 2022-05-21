import {useNavigate, Link, useParams} from "react-router-dom"

function TheTrueQuestions(params){
    const navigate = useNavigate();
    const {array, theTrueType} = params;
    return array.map((question, index) => {
        let {title, _id, type} = question;
        if(type === theTrueType){
            return (
                <p key={index} onClick={() => navigate(`/answers/${_id}`)}>{title}</p>
            )
        }
        console.log(title, _id, type)
    });
};

export default TheTrueQuestions;