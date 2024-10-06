import { styled } from 'styled-components'

const ImgLamp = styled.img`
  width: 30%;
`

export default function LampContainer() {
  return <ImgLamp src="./assets/Images/lamp_on.png" alt="Lamp On" />
}
