import styled from 'styled-components';

const FooterStyle = styled.footer`
    font-family: 'Oswald', sans-serif;
    align-itens: center;
    justify-content: center;
    margin-left: 80px;
    ul{
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        font-size: 20px;
        justify-content: space-between;
        margin-top: 120px;
      }
      ul li{
        list-style: none;
        flex: 0 0 20%;
        color: #fff;

      }
    img {
        width: 170px;
    }
    .pokeball {
        margin-top: 12px;
    }
    .copy {
        margin-top: 80px;
        justify-content: space-between;
    }
    .copy a:link{
        text-decoration: none;
    }
    .copy a{
        color: #62c8e9;
        transition: 0.2s;
        
    }
    .copy a:hover{
        color: #37a1c3;
        
    }
    
`;



export default FooterStyle;