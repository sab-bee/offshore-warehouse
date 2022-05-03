import axios from 'axios'
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
      const email =
        loginUser?.user?.email ||
        createUser?.user?.email ||
        googleUser?.user?.email
      axios
        .post('https://pacific-oasis-60084.herokuapp.com/api/login', { email })
        .then((res) => {
          // console.log(res.data.token)
          localStorage.setItem('token', res.data?.token)
        })
      navigate(from, { replace: true })
    }
  }, [googleUser, from, navigate, createUser, loginUser])

  useEffect(() => {
    if (createUser) {
      toast.success('successfuly registered', {
        autoClose: 1500,
      })
    }
  }, [createUser])

  useEffect(() => {
    if (loginError || error || createError) {
      let errorMeassage =
        loginError?.message || error?.message || createError?.message

      errorMeassage = errorMeassage.split(' ')

      toast.error(
        errorMeassage[errorMeassage.length - 1]
          .replace(/auth/g, '')
          .replace(/[-/()]/g, ' '),
        {
          autoClose: 1500,
        }
      )
    }
  }, [loginError, error, createError])

  if (loginLoading) {
    console.log('loading')
  }
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
    toast.success('email sent', {
      autoClose: 1500,
    })
  }

  return {
    handleSignInWithGoogle,
    handleRegisterWithEmail,
    handleLoginWithEmail,
    handleResetPassword,
    createLoading,
    loginLoading,
  }
}
