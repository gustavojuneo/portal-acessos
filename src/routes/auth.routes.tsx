import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ConsultaChamado from '../pages/ConsultaChamado'
import Home from '../pages/Home'
import Portal from '../pages/Portal'
import Principal from '../pages/Caixa'
import MyData from '../pages/MyData'
import MyData2 from '../pages/MyDataFechados'
import AllData from '../pages/Relatorios'
import Adm from '../pages/Adm'
import AllUsers from '../pages/Adm/Users'
import Sys from '../pages/Adm/Systems'
import Types from '../pages/Adm/type'
interface Props {
  toggleTheme(): void
}

export default function AuthRoutes({ toggleTheme }: Props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/chamado"
        component={() => <ConsultaChamado toggleTheme={toggleTheme} />}
      />
      <Route
        path="/dashboard"
        component={() => <Portal toggleTheme={toggleTheme} />}
      />
      <Route
        path="/caixa"
        component={() => <Principal toggleTheme={toggleTheme} />}
      />
      <Route
        path="/my"
        component={() => <MyData toggleTheme={toggleTheme} />}
      />
      <Route
        path="/myclosed"
        component={() => <MyData2 toggleTheme={toggleTheme} />}
      />
      <Route
        path="/alldata"
        component={() => <AllData toggleTheme={toggleTheme} />}
      />
      <Route path="/adm" component={() => <Adm toggleTheme={toggleTheme} />} />
      <Route
        path="/users"
        component={() => <AllUsers toggleTheme={toggleTheme} />}
      />
      <Route
        path="/systems"
        component={() => <Sys toggleTheme={toggleTheme} />}
      />
      <Route
        path="/types"
        component={() => <Types toggleTheme={toggleTheme} />}
      />
      <Redirect from="*" to="/" />
    </Switch>
  )
}
