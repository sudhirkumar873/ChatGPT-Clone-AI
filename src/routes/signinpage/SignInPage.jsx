import { SignIn } from '@clerk/clerk-react'
import React from 'react'

export const SignInPage = () => {
  return (
    <div className='signinpage'><SignIn path="/sign-in"/></div>
  )
}
