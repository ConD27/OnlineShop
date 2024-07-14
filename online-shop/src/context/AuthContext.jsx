import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

// Provider
const AuthProvider = ({ children }) => {
  // Lógica de autenticación
  const [isAuth, setIsAuth] = useState(false)
  const [userPayload, setUserPayload] = useState(null)

  const login = (token) => {
    localStorage.setItem('token', token)
    const payload = jwtDecode(token)
    setIsAuth(true)
    setUserPayload(payload)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setIsAuth(false)
    setUserPayload(null)
  }

  // Verificar si hay un token en localstorage y cargarlo
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const payload = jwtDecode(token)
      setIsAuth(true)
      setUserPayload(payload)
    }
  }, [])

  // Lo que se hará global
  const data = {
    isAuth,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}
