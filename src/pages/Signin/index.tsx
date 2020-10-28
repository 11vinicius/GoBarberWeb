import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />

      <form action="">
        <h1>Faça seu logo</h1>

        <input type="" placeholder="E-mail" />

        <input type="password" placeholder="senha" />

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
