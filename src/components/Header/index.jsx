import { useNavigate } from "react-router-dom"

import { Container } from "./styles.js"

import { useAuth } from "../../hooks/auth"

export function Header() {

  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function logout() {
    signOut()
    navigate("/")
  }

  return(
    <Container>
      <div>
        <p>Olá,</p>
        <p>{user.name}</p>
      </div>

      <button onClick={logout} >Sair</button>
    </Container>
  )
}