

function Topics(params){
    const {array} = params;

    return array.map((question, index) => {
        const {type} = question;

        return (
            <button key={index} onClick={() => navigate('/questions')}>{type}</button>
        )
    })
};

export default Topics;