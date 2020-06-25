import styled from 'styled-components';
import { MAIN_THEME_COLOR, BORDER_COLOR } from '../../../constants/themeColors';

const Input = styled.input`
  display: flex;
  width: 100%;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  padding: 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${BORDER_COLOR};
  transition: 0.2s ease-in-out all;
  &:focus {
    border-bottom-color: ${MAIN_THEME_COLOR}
  }
`

export default Input;