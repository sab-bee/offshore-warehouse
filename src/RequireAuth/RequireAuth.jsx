import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import { auth } from '../firebase/firebase.init'

export function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()
  console.log(user)
  if (loading) return

  if (!user) {
    return <Navigate to='/user/login' state={{ from: location }} replace />
  }

  if (!user?.emailVerified) {
    return <p>email is not verified</p>
  }

  return children
}
