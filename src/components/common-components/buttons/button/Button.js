import styled from 'styled-components';
import { ACCENT_THEME_COLOR, CONTAINER_BACKGROUND_COLOR, BORDER_COLOR } from '../../../../constants/themeColors';

const Button = styled.button`
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding: 10px 25px;
  font-family: 'Montserrat', sans-serif;
  outline: none;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: ${props => props.disabled ? BORDER_COLOR : ACCENT_THEME_COLOR};
  color: ${CONTAINER_BACKGROUND_COLOR};
  transition: 0.2s ease-in-out all;
  min-width: 140px;
  &:hover {
    opacity: .8;
  }
`

export default Button;