import React from 'react'
import Dashboard from '../../components/DashBoard'
import Table from '../../components/MeuChamadosFechados'
import { Container } from './styles'
interface Props {
  toggleTheme(): void
}

const MyData: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Dashboard
      title="Histórico"
      description=""
      picture
      toggleTheme={toggleTheme}
    >
      <Container>
        <div className="table">
          <Table />
        </div>
      </Container>
    </Dashboard>
  )
}

export default MyData
