import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase.init'

export function useFirebase() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
  }

  const handleSignInWithEmail = ({ credentials }) => {}

  return { handleSignInWithGoogle, handleSignInWithEmail }
}
