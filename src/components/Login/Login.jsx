import React from 'react'
import { useFirebase } from '../../hooks/useFirebase'

const Login = () => {
  const { handleSignInWithGoogle } = useFirebase()

  return (
    <div>
      <button onClick={handleSignInWithGoogle}>login</button>
    </div>
  )
}

export default Login
