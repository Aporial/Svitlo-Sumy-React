import { styled } from 'styled-components'
import LampContainer from './LampContainer'
import ChergNameContainer from './ChergNameContainer'
import TabsContainer from './TabsContainer'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  /* justify-content: center; */
  align-items: center;
  margin-top: 15px;
`

export default function MainScreen() {
  return (
    <Main>
      <LampContainer />
      <ChergNameContainer />
      <TabsContainer />
    </Main>
  )
}
