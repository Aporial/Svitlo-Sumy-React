import { styled } from 'styled-components'

const ImgLamp = styled.img`
  width: 25%;
`

export default function LampContainer() {
  return <ImgLamp src="./assets/Images/lamp_on.png" alt="Lamp On" />
}
