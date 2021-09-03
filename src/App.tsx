import Layout from 'components/Layout';
import FindPro from 'pages/Pro';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

const MainContentStyled = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  padding: 5rem;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;
function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Layout />

      <MainContentStyled>
        <Switch>
          <Route component={FindPro} path='/findCarer' exact />
          <Route path='/about' exact>
            <h1>about</h1>
          </Route>
          <Route path='/help' exact>
            <h1>help</h1>
          </Route>
          <Route path='/profile' exact>
            <h1>profile</h1>
          </Route>
        </Switch>
      </MainContentStyled>
    </div>
  );
}

export default App;
