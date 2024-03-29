import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaRegUser } from "react-icons/fa";
import { MdMailOutline, MdLockOutline } from "react-icons/md"

import { Container, Form } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Modal } from "../../components/Modal"

import signUp from "../../../src/assets/images/signUp.jpeg"

import { api } from "../../services/api"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [showModal, setShowModal] = useState(false)
  const [modalTitle, setModalTitle] = useState("")

  const navigate = useNavigate()

  function register() {
    if(!name || !email || !password) {
      setShowModal(true)
      setModalTitle("Preencha nome, e-mail e senha.")
      return
    } else if(!email.includes("@") || email.length < 5) {
      setShowModal(true)
      setModalTitle("E-mail inválido.")
      return
    } else if(password.length < 6) {
      setShowModal(true)
      setModalTitle("A senha deve conter 6 caracteres no mínimo.")
      return
    }

    setShowModal(true)
    setModalTitle("Carregando, por favor aguarde");

    api.post("/users", {name, email, password})
    .then(() => {
      setShowModal(true)
      setModalTitle("Usuário cadastrado com sucesso :D")
      setTimeout(() => {
        navigate("/")
      }, 2000)
    })
    .catch(error => {
      if(error.response) {
        setShowModal(true)
        setModalTitle(error.response.data.message)
        return
      } else {
        setShowModal(true)
        setModalTitle("Não foi possível cadastrar :(")
        return
      }
    })
  }

  // Pra tirar as mensagens de erro quando o user começar a digitar:
  useEffect(() => {
    if(name.length > 0 || email.length > 0 || password.length > 0) {
      setShowModal(false)
    }
  }, [name, email, password])

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

      <div>
        {showModal && <Modal title={modalTitle} onClose={() => setShowModal(false)} />}
      </div>
    </Container>
  )
}