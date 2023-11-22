import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaRegUser } from "react-icons/fa";
import { MdMailOutline, MdLockOutline } from "react-icons/md"

import { Container, Form } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import signUp from "../../../src/assets/images/signUp.jpeg"

import { api } from "../../services/api"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function register() {
    if(!name || !email || !password) {
      return alert("Preencha nome, e-mail e senha.")
    } else if(!email.includes("@")) {
      return alert("E-mail inválido.")
    } else if(password.length < 6) {
      return alert("A senha deve conter 6 caracteres no mínimo.")
    }
    
    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso :D")
      navigate("/")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar :(")
      }
    })
  }

  function navigation() {
    navigate("/")
  }

  return(
    <Container>
      <img src={signUp} alt="ilustração de um homem digitando em um notebook em frente a uma janela, com as luzes do prédios e a lua e estrelas de fundo." />

      <Form>
        <h1>Cadastre sua conta</h1>

        <div>
          <Input icon={FaRegUser} placeholder="Nome" type="text" value={name} onChange={e => setName(e.target.value)} />
          <Input icon={MdMailOutline} placeholder="E-mail" type="email"  className="input" value={email} onChange={e => setEmail(e.target.value)} />
          <Input icon={MdLockOutline} placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <Button title="Cadastrar" onClick={register} />
        <button className="createBtn" onClick={navigation}>Voltar para o login</button>
      </Form>

    </Container>
  )
}