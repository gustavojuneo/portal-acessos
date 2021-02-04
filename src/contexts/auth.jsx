import React, { createContext, useState, useEffect, useContext } from 'react'

import api from '../services/api'
import history from '../history'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [mat, setMat] = useState(null)

  const [user, setUser] = useState({})
  const [authenticated, setAuthenticated] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [registerError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storageMat = sessionStorage.getItem('mat')
    const storageToken = sessionStorage.getItem('token')

    if (storageMat && storageToken) {
      setMat(storageMat)
      api.defaults.headers['Authorization'] = `${storageMat}`
      setAuthenticated(true)
      loadProfile()
    }

    setLoading(false)
  }, [])

  async function loadProfile() {
    const response = await api.get('/user')
    setUser(response.data)
  }

  async function signIn(data) {
    const response = await api.post('/login', data)
    if (response.data.mat) {
      setMat(response.data.mat)
      setLoginError(null)
    } else {
      setLoginError(response.data.status_message)
      return
    }

    api.defaults.headers['Authorization'] = `${response.data.mat}`

    sessionStorage.setItem('mat', response.data.mat)
    sessionStorage.setItem('token', response.data.token)

    if (sessionStorage.getItem('token') === response.data.token) {
      setAuthenticated(true)
      loadProfile()
      history.push('/')
    }
  }

  async function signOut() {
    await api.post('/logout', {
      mat
    })
    setMat(null)
    sessionStorage.clear()
    localStorage.clear()
    setAuthenticated(false)
    history.push('/')
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        authenticated,
        mat,
        user,
        loginError,
        registerError,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
