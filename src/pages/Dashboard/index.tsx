import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import githubLogo from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={githubLogo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="Imagem">
          <img
            src="https://avatars.githubusercontent.com/u/64321026?s=460&u=ef2715daef4e36421dd0d07b72aa82241edeff8f&v=4"
            alt="Antonio Silva"
          />
          <div>
            <strong>antoniosilvavp/conceitos-reactjs</strong>
            <p>
              Desafio 03: Conceitos ReactJS aplicado no Bootcamp GoStack13 da
              Rocketseat!
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
