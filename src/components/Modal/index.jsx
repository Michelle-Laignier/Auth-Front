import { Container } from "./styles"

export function Modal({ title, ...rest} ) {
  return(
    <Container {...rest}>
      {title}
    </Container>
  )
}