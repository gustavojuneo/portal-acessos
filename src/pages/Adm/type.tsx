import React from 'react'
import Dashboard from '../../components/DashBoard'
import Typ from '../../components/Adm/types'
import { UserStyle } from './styles'

interface Props {
  toggleTheme(): void
}

const Types: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Dashboard
      title="Painel Adm"
      description="Tipos de solicitações"
      picture
      toggleTheme={toggleTheme}
    >
      <UserStyle>
        <div className="table">
          <Typ />
        </div>
      </UserStyle>
    </Dashboard>
  )
}
export default Types
