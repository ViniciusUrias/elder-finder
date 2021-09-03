import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcLike, FcAbout, FcOnlineSupport, FcPortraitMode, FcGoodDecision } from 'react-icons/fc';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import Container from './styles';

const Layout: React.FC = () => (
  <>
    <Container>
      <h1>Elder Finder</h1>
      <div className='avatar'>
        <ul>
          <li>
            <FcLike className='menu-icon' />
            <NavLink to='/findCarer'>Procurar Cuidador</NavLink>
          </li>
          <li>
            <FcGoodDecision className='menu-icon' />
            <NavLink to='/findElder'>Procurar Cliente</NavLink>
          </li>
          <li>
            <FcAbout className='menu-icon' />
            <NavLink to='/about'>Sobre</NavLink>
          </li>
          <li>
            <FcOnlineSupport className='menu-icon' />
            <NavLink to='/help'>Ajuda</NavLink>
          </li>
          <li>
            <FcPortraitMode className='menu-icon' />
            <NavLink to='/profile'>Meu Perfil</NavLink>
          </li>
        </ul>
      </div>

      <Box component='div' style={{ display: 'flex' }}>
        <Badge badgeContent={7} color='secondary'>
          <Avatar src='https://uploads-ssl.webflow.com/5e3ce2ec7f6e53c045fe7cfa/6041f96dd994118e5aa5b7e4_603dda4daa5db80f2a70a468_Discovery-01-1.png' />
        </Badge>
        <p>Bem vindo, Vinicius!</p>
      </Box>
    </Container>
  </>
);

export default Layout;
