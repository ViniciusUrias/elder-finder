// Static object
const Box = styled.div({
  background: 'palevioletred',
  height: '50px',
  width: '50px'
});

// Adapting based on props
const PropsBox = styled.div(props => ({
  background: props.background,
  height: '50px',
  width: '50px'
}));

render(
  <div>
    <Box />
    <PropsBox background="blue" />
  </div>
);

MATERIAL UI
//OVERRIDING CLASSES

const StyledButton = styled(({ color, ...other }) => (
  <Button classes={{ label: 'label' }} {...other} />
))`
  background-color: #6772e5;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
  & .label {
    color: #fff;
  }
`;


const StyledMenu = styled(({ className, ...props }) => (
  <Menu {...props} classes={{ paper: className }} />
))`
  box-shadow: none;
  border: 1px solid #d3d4d5;

  li {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;


//THEME

const StyledButton = styled(Button)`
  ${({ theme }) => `
  background-color: ${theme.palette.primary.main};
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 10px;
  font-size: 13px;
  &:hover {
    background-color: ${darken(theme.palette.primary.main, 0.2)};
  }
  ${theme.breakpoints.up('sm')} {
    font-size: 14px;
    padding: 7px 14px;
  }
  `}
`;
