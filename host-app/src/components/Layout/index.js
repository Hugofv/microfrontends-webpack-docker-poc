import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Container, Content } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <NavBar>
        <h1>
          <Link to="/">
            Orchestrator
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/module-1">Módulo 1</Link>
          </li>
          <li>
            <Link to="/module-2">Módulo 2</Link>
          </li>
        </ul>
      </NavBar>
      <Content>
        {children}
      </Content>
    </Container>
  );
}

export default Layout;
