import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';


const SignUp = () => {
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
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
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
      <Button type='submit' disabled={isSubmitting} className='bg-orange-400 w-full mt-5'>
        {isSubmitting ? 'Creating Account' : 'Commence Your Journey'}
      </Button>
    </form>
    </>
  )
}

export default SignUp