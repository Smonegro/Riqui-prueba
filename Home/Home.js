import React from "react";

import Card from '../UI/Card/Card';
import styled from 'styled-components';

const Message = styled.h1 `

    width: 90%;
    max-width: 40rem;
    padding: 3rem;
    margin: 2rem auto;
    text-align: center;
 

`;


const Home = (props)=>{
return (
<Card> 
<Message>Welcome back Riqui!</Message>
</Card>
);
};

export default Home;