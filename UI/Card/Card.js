import React from 'react';
import styled from 'styled-components';

const GeneralDiv = styled.div`

  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 20px;
  box-sizing:'border-box';
  width: 60em;
  margin-left: 12.5rem;
  
`;

//quitar margin left

const Card = (props) => {
  return (
    <GeneralDiv>{props.children}
  </GeneralDiv>
  );
};

export default Card;
