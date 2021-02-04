import React from 'react'
import { useAuth } from '../../contexts/auth'

import { Grid, Main } from './styles'

import Sidebar from '../Sidebar'
import Header from '../DashHeader'

interface Props {
  title: string
  description: string
  picture: any
  toggleTheme(): void
}

const Dashboard: React.FC<Props> = ({
  children,
  picture,
  toggleTheme,
  ...rest
}) => {
  const { signOut, user } = useAuth()

  return (
    <Grid>
      <Sidebar
        avatar={user.arquivo}
        name={user.name}
        signOut={signOut}
        toggleTheme={toggleTheme}
      />

      <Header title={rest.title} description={rest.description} />

      <Main>{children}</Main>
    </Grid>
  )
}

export default Dashboard
