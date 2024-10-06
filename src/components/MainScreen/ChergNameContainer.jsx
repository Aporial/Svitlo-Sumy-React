import { styled } from 'styled-components'

const ChergName = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  padding: 8px;
  color: #ffcc66;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.25);
`

export default function ChergNameContainer() {
  return (
    <ChergName>
      <div>
        <h2>1 черга</h2>
      </div>
    </ChergName>
  )
}
