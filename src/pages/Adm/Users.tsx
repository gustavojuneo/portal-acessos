import React from 'react'
import Users from '../../components/Adm'
import Dashboard from '../../components/DashBoard'

import { UserStyle } from './styles'

interface Props {
  toggleTheme(): void
}

const AllUsers: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Dashboard
      title="Painel Adm"
      description=""
      picture
      toggleTheme={toggleTheme}
    >
      <UserStyle>
        <div className="table">
          <Users />
        </div>
      </UserStyle>
    </Dashboard>
  )
}

export default AllUsers
