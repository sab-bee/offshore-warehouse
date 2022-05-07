import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import { Spinner } from '../components'
import { auth } from '../firebase/firebase.init'
import { VerifyPopup } from '../pages'

export function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()

  if (loading) return <Spinner></Spinner>

  if (!user) {
    return (
      <Navigate to='/user/login' state={{ from: location }} replace></Navigate>
    )
  }

  if (!user?.emailVerified) {
    return <VerifyPopup></VerifyPopup>
  }

  return children
}
