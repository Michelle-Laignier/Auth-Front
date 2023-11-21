import { MdMailOutline, MdLockOutline } from "react-icons/md"

import { Container, Form } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import signIn from "../../../src/assets/images/signIn.jpeg"

export function SignIn() {
  return(
    <Container>
      <img src={signIn} alt="ilustração de uma mulher digitando em um notebook em frente a uma janela, com as luzes do prédios e a lua e estrelas de fundo." />

      <Form>
        <h1>Entrar na sua conta</h1>

        <div className="inputs">
          <Input icon={MdMailOutline} placeholder="E-mail" type="email" />
          <Input icon={MdLockOutline} placeholder="Senha" type="password" />
        </div>

        <Button title="Entrar" />
        <button className="createBtn">Criar conta</button>
      </Form>

    </Container>
  )
}