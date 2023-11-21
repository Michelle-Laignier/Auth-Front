import { FaRegUser } from "react-icons/fa";
import { MdMailOutline, MdLockOutline } from "react-icons/md"

import { Container, Form } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import signUp from "../../../src/assets/images/signUp.jpeg"

export function SignUp() {
  return(
    <Container>
      <img src={signUp} alt="ilustração de um homem digitando em um notebook em frente a uma janela, com as luzes do prédios e a lua e estrelas de fundo." />

      <Form>
        <h1>Cadastre sua conta</h1>

        <div>
          <Input icon={FaRegUser} placeholder="Nome" type="text" />
          <Input icon={MdMailOutline} placeholder="E-mail" type="email"  className="input"/>
          <Input icon={MdLockOutline} placeholder="Senha" type="password" />
        </div>

        <Button title="Cadastrar" />
        <button className="createBtn">Voltar para o login</button>
      </Form>

    </Container>
  )
}