import styled from 'styled-components';

const Container = styled.aside`
  width: 16.3rem;
  background-color: ${props => props.theme.colors.dark.light};
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  justify-content: space-between;
  z-index: 99999;


  h1{
    color: white;
    text-align: center;
    font-weight: 800;
    font-size: 30px;
  }
  p{
    color: white;
    align-self: flex-end;

  }
  .menu-icon{
    font-size: 28px;
    margin-right: 5px;

  }
  .avatar {
    display: flex;
    flex-direction: column;

    .active{
      color: ${props => props.theme.colors.coffee.dark};
    }
    ul {
      list-style: none;
      display: block;
      margin-bottom: 30%;

      li{
        display: flex;
        align-items: center;
        margin-top: 15px;
        gap: 10;
        :hover{
          color: ${props => props.theme.colors.dark.dark};
          transition: linear 150ms;
        }
      }
    }
      a {
        text-decoration: none;
        color: ${props => props.theme.colors.coffee.lighter};
        font-size: 16px;
        :hover{
          color: ${props => props.theme.colors.coffee.dark};
        }
      }
    }
  }
`;

export default Container;
