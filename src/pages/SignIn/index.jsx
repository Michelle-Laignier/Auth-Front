import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { MdMailOutline, MdLockOutline } from "react-icons/md"

import { Container, Form } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Modal } from "../../components/Modal"

import signInImg from "../../../src/assets/images/signIn.jpeg"

import { useAuth } from "../../hooks/auth"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [showModal, setShowModal] = useState(false)
  const [modalTitle, setModalTitle] = useState("")

  const { signIn } = useAuth()
  const navigate = useNavigate()

  async function login() {
    if(!email || !password) {
      setShowModal(true)
      setModalTitle("Preencha e-mail e senha.")
      return
    }
    signIn({ email, password })
    
    if(!alert) {
      setShowModal(true)
      setModalTitle("Carregando, por favor aguarde")
    }
  }

  useEffect(() => {
    if(email.length > 0 || password.length > 0) {
      setShowModal(false)
    }
  }, [email, password])

  function navigation() {
    navigate("/register")
  }
  
  return(
    <Container>
      <img src={signInImg} alt="ilustração de uma mulher digitando em um notebook em frente a uma janela, com as luzes do prédios e a lua e estrelas de fundo." />

      <Form>
        <h1>Entrar na sua conta</h1>

        <div className="inputs">
          <Input icon={MdMailOutline} placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <Input icon={MdLockOutline} placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        <Button title="Entrar" onClick={login}/>
        <button className="createBtn" onClick={navigation}>Criar conta</button>
      </Form>

      {showModal && <Modal title={modalTitle} onClose={() => setShowModal(false)} />}
    </Container>
  )
}