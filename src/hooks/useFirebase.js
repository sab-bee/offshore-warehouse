import { useEffect } from 'react'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSendPasswordResetEmail,
} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../firebase/firebase.init'

export function useFirebase() {
  //* firebase hooks

  const [signInWithGoogle, googleUser, loading, error] =
    useSignInWithGoogle(auth)

  const [
    createUserWithEmailAndPassword,
    createUser,
    createLoading,
    createError,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  const [signInWithEmailAndPassword, loginUser, loginLoading, loginError] =
    useSignInWithEmailAndPassword(auth)

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth)

  /**
   * react router function
   */
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || '/'

  useEffect(() => {
    if (googleUser || createUser || loginUser) {
      navigate(from, { replace: true })
    }
  }, [googleUser, from, navigate, createUser, loginUser])

  /**
   * sing in with google
   */
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
  }

  /**
   *  create account with email address
   */
  const handleRegisterWithEmail = (
    { email, password, confirmPassword },
    reset
  ) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.warning('invalid email', {
        autoClose: 1500,
      })
      return
    }
    if (password.length < 8) {
      toast.error('password too short', {
        autoClose: 1500,
      })
      return
    }
    if (password !== confirmPassword) {
      toast.error('password does not match', {
        autoClose: 1500,
      })
      return
    }
    createUserWithEmailAndPassword(email, password)
    reset()
    toast.success('successfuly registered', {
      autoClose: 1500,
    })
  }

  /**
   * login with email and pass
   */
  const handleLoginWithEmail = ({ email, password }, reset) => {
    signInWithEmailAndPassword(email, password)
    reset()
  }

  /**
   * reset password
   */
  const handleResetPassword = async (email) => {
    await sendPasswordResetEmail(email)
    toast.success('email sent')
  }

  return {
    handleSignInWithGoogle,
    handleRegisterWithEmail,
    handleLoginWithEmail,
    handleResetPassword,
  }
}
