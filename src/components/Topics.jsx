import {useNavigate} from "react-router-dom"

function Topics(params){
    const navigate = useNavigate();
    const {array} = params;
    return array.map((topic, index) => {
        const {title} = topic;

        return (
            <button key={index} onClick={() => navigate('/questions', {state: {
                title
            }})}>{title}</button>
        )
    });
};

export default Topics;