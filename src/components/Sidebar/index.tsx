import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { shade } from 'polished'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { useAuth } from '../../contexts/auth'

// import axios from 'axios'

import {
  FiLogOut
  // FiX
} from 'react-icons/fi'

import {
  Container,
  Header,
  Avatar,
  UserData,
  Separator,
  Navbar
  // Modal
} from './styles'
import { spawn } from 'child_process'

interface Props {
  name: string
  signOut(): void
  avatar: any
  toggleTheme(): void
}

const Sidebar: React.FC<Props> = ({
  avatar,
  name,
  signOut,
  toggleTheme,
  ...rest
}) => {
  const { colors, title } = useContext(ThemeContext)
  const { user } = useAuth()
  const [version] = useState('')
  // const [setShowModal] = useState(false)

  // useEffect(() => {
  //   async function getVersion() {
  //     const { data } = await axios.get(
  //       'https://api.github.com/repos/gustavts/portalcontrol/releases/latest'
  //     )
  //     setVersion(data.name)
  //   }

  //   getVersion()
  // }, [])

  return (
    <>
      <Container {...rest}>
        <Header>
          <UserData>
            <Link to="/profile">
              <p>
                bem vindo, <strong>{name}</strong>
              </p>
            </Link>
            <button onClick={signOut}>
              <FiLogOut />
              sair
            </button>
          </UserData>
        </Header>

        <Separator />

        <Navbar>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/dashboard">Resumo</Link>
            </li>
            <li>
              <Link to="/caixa">Caixa Principal</Link>
            </li>

            <li>
              <Link to="/my">Minha Caixa</Link>
            </li>
            <li>
              <Link to="/myclosed">Histórico</Link>
            </li>
            {user.super_id > 2 && (
              <li>
                <Link to="/alldata">Relatorios</Link>
              </li>
            )}

            {user.super_id > 3 && (
              <li>
                <Link to="/adm">Painel adm</Link>
              </li>
            )}
          </ul>
        </Navbar>
        <div className="switch">
          <Switch
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={35}
            handleDiameter={15}
            offColor={shade(0.2, colors.primary)}
            onColor={colors.menuHover}
          />
        </div>
        <span className="current-version">Versão: {version}</span>
      </Container>
    </>
  )
}

export default Sidebar
