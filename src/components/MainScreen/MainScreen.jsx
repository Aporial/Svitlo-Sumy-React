import { styled } from 'styled-components'
import LampContainer from './lampContainer/lampContainer'

const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`

export default function MainScreen() {
  return (
    <Main>
      <LampContainer />
    </Main>
  )
}
