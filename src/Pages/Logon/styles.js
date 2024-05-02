import styled from 'styled-components';


export const Container = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
`;

export const DivLottie = styled.div`
    width:600px;
    height:600px;
  
  @media(max-width: 500px){
    width:200px;
    height:200px;
    position: absolute;
    margin-bottom: 100%;
  }
`;

export const DivLogin = styled.div`
  @media(max-width: 500px){    
    margin-top: 40%;
  }  
`;

export const DisplayMessage = styled.div`
    margin-bottom: 15px;
    flex-wrap: nowrap;
    display: flex;
    justify-content: center;
    list-style-type: none;
    font-weight:bold;
    font-size:14pt;
    color:#ff0000
`;