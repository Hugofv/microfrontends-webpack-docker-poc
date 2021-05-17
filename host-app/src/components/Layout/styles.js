import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 100%auto;
  height: 4rem;
  background-color: #1976d2;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  & h1 {
    color: white;
    font-weight: 600;
    margin-right: 2rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    display: flex;
    list-style-type: none;
  }

  li {
    color: white;
    transition: all 300ms;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    &:hover {
      color: #115293;
    }
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;