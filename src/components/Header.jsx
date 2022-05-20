import styled from 'styled-components';

function Header() {
    return (
        <Headers>
            <h1>AskSnap</h1>
        </Headers>
    );
};

export default Header;

const Headers = styled.div`
    background-color: #104547;
    height: 85px; //#TODO: check height

    h1{
        font-family: 'Alata';
        font-weight: 400;
        font-size: 48px;
        line-height: 66px;
        text-align: center;

        color: #D2D6EF;

        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`