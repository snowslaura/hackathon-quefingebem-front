import {useNavigate, Link} from "react-router-dom"

function Answers(params){
    const {array} = params;
    return array.map((question) => {
        const {answer, _id} = question;
        console.log(answer)

        return (
            <p>{answer}</p>
        )
    });
};

export default Answers;