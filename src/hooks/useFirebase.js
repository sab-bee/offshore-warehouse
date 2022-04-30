import { useEffect } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase.init'

export function useFirebase() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  const navigate = useNavigate()
  const location = useLocation()

  let from = location.state?.from?.pathname || '/'
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true })
    }
  }, [user, from, navigate])

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
  }

  const handleSignInWithEmail = ({ credentials }) => {}

  return { handleSignInWithGoogle, handleSignInWithEmail }
}
