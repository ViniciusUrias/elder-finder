/* eslint-disable no-undef */
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

type ButtonProps = {
  readonly isActive: boolean;
};

const StyledButton = styled(Button)<ButtonProps>`
  color: ${props => (props.isActive ? '#222' : '#555')};
  background-color: ${props => (props.isActive ? props.theme.colors.coffee.darker : '#333')};
  :hover {
    background-color: ${props => (props.isActive ? props.theme.colors.coffee.dark : 'inherit')};

    cursor: ${props => (props.isActive ? 'pointer' : 'not-allowed')};
  }
`;

const Buttons: React.FC<ButtonProps> = ({ isActive }) => <StyledButton isActive={isActive}>oi</StyledButton>;

export default Buttons;
