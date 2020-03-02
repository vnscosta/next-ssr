import 'isomorphic-fetch';
import React from 'react';
import { GlobalStyle } from '../styles';

import Container from '../components/Container';
import Header from '../components/Header';

const Home = ({ repositories }) => (
  <div>
    <GlobalStyle />
    <Header />
    <Container>
      { repositories.map(repo => (
        <div key={repo.id}>
          <a href={repo.html_url}>
            <h1>{repo.name}</h1>
          </a>
        </div>
      )) }
    </Container>
  </div>
);

Home.getInitialProps = async () => {
  const response = await fetch("https://api.github.com/users/vinipbk/repos");
  const repositories = await response.json();

  return { repositories };
};

export default Home;