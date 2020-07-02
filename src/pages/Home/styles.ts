import styled from 'styled-components';

const PageHome = styled.div `
  width: 100%;
  max-width: 1100px;
  color: #fff;
  margin: 0 auto;
  align-itens: center;
  justify-content: center;
  font-family: 'Oswald', sans-serif;
  
  
  body, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    
  }
  form {
    margin-top: 40px;
    max-width: 500px;
    display: flex;
    margin: 48px 0 0;
    
  }
  
    input {
      flex: 1;
      display: inline-block;
      padding: 0 24px;
      border: 0;
      border-radius: 5px 5px;
      color: #3a3a3a;
      border: 2px solid #3a3a3a;
      
    }
  
  
    button {
      width: 210px;
      height: 44px;
      margin-left: 10px;
      background: #62c8e9;
      border-radius:  5px 5px ;
      border: 0;
      color: #000;
      font-weight: bold;
      transition: 0.2s;
    }
  
    button:hover {
        background-color: #37a1c3;
    }
      ul{
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        font-size: 20px;
      }
      ul li{
        list-style: none;
        flex: 0 0 20%;
        align-items: center;
      }
      a {
        color: #fff;
        width: 150px;
        border-radius: 4.75% / 3.5%;
        display: flex;
        transition: 0.2s;
        font-size: 18px;
        padding: 5px;
      }
  
      a:hover {
          transform: translateX(10px);
      }
      .arrowLeft:hover {
        transform: translateX(-10px);
      }
  
      a:link {
          text-decoration: none;
      }  
`;

export const Pagination = styled.div `
      display: flex;
      justify-content: center;
`;

export default PageHome;
