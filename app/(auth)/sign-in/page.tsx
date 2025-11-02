import React from 'react'
import { Button } from '@/components/ui/button'
import InputField from '@/components/forms/InputField'
import { useForm } from 'react-hook-form'
import FooterLink from '@/components/forms/FooterLink'

const SignIn = () => {
    const {
      register,
      handleSubmit,
      control,
      formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
      defaultValues: {
        email: '',
        password: '',
      },
  
      mode: 'onBlur'
    },)

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data)
    } catch (error) {
      console.log(data)
    }
  }

  return (
    <>
    <h1 className=''>Sign in & Get Started</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <InputField 
          name='email'
          label='Email'
          placeholder='Example12@gmail.com'
          error={errors.email}
          validation={{ required: 'Email is required', minLength: 2}}
        />
        <InputField 
          type='password'
          name='password'
          label='Password'
          placeholder='Enter the your password'
          error={errors.password}
          validation={{ required: 'Password is required', minLength: 8}}
        />
      </form>

      <Button type='submit' disabled={isSubmitting} className='yellow_button w-full mt-5'>
        {isSubmitting ? 'Testing 123 ' : 'Commence Virtual Test'}
      </Button>


      <FooterLink text='No account?' linkText='Sign Up' href='/sign-up' />
    </>
  )
}

export default SignIn