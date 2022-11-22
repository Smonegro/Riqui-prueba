
import styled from 'styled-components';


const Button = styled.button `
  font: inherit;
  border: 1px solid #bd23e4;
  background: #bd23e4;
  color: white;
  padding: 0.75rem 3.5rem;
  cursor: pointer;
  font-size: 1.15rem;
  border-radius: 30px;
  margin-top: 0rem;
  margin-bottom: 1rem;
  margin-left: 2rem;


&:hover,
&:active {
  background: #b623c4;
  border-color:  #b623c4;
}

&:focus {
  outline: none;
}

&:disabled,
&:focus:disabled,
&:hover:disabled,
&:active:disabled {
  background: #ccc;
  border-color: #ccc;
  color: #666666;
  cursor: not-allowed;
}


`;


export default Button;