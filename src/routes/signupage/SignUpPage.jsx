import { SignUp } from '@clerk/clerk-react'
import React from 'react'

export const SignUpPage = () => {
  return (
    <div className='signuppage'><SignUp path="/sign-up"/></div>
  )
}
