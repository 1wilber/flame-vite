import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import validationSchema from './schema'
import authService from '@/services/authService'

export const LoginForm = () => {
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: 'admin@example.com',
      password: 'admin123'
    },
    validationSchema,
    onSubmit: async (values) => {
      axios.defaults.withCredentials = true
      const { data } = await authService.signIn({ user: values })
      console.log(data);
    }
  })
  return (
    <form onSubmit={handleSubmit}>
      <div>

        <label htmlFor='email'>Email</label>
        <input value={values.email} onChange={handleChange} type='email' id='email' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input value={values.password} onChange={handleChange} type='password' id='password' />
      </div>

      <button type='submit'>Login</button>
    </form>
  )
}
