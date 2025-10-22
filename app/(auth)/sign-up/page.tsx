import React from 'react'
import { useForm } from 'react-hook-form';


const SignUp = () => {
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitted },
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: '',
      password: '',
      fullName: '',
      country: 'US',
    },

    mode: 'onBlur'
  },)

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data)
    } catch (error) {
      console.log(data)
    }
  }

  return (
    <>
    <h1 className=''>Sign up & Be in Control</h1>
    </>
  )
}

export default SignUp