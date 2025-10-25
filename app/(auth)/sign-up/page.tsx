import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import InputField from '@/components/forms/InputField';
import SelectField from '@/components/forms/SelectField';

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
      <InputField 
        name='fullName'
        label='Full Name'
        placeholder='Josh Boy'
        register={register}
        error={errors.fullName}
        validation={{ required: 'Full name is required', pattern: /^\w+@\w+\.\w+$/, message: 'Email address is required'}}
      />
      <InputField 
        name='email'
        label='Email'
        placeholder='Example12@gmail.com'
        register={register}
        error={errors.email}
        validation={{ required: 'Email is required', minLength: 2}}
      />
      <InputField 
        type='password'
        name='password'
        label='Password'
        placeholder='Enter the strongest password you can think of'
        register={register}
        error={errors.password}
        validation={{ required: 'Password is required', minLength: 8}}
      />

      <SelectField 
        name='investment'
        label='Investment'
        placeholder='Select your reason for investment'
        options=''
        control={control}
        error={errors.investment}
        required
      />

      <Button type='submit' disabled={isSubmitting} className='yellow_button w-full mt-5'>
        {isSubmitting ? 'Creating Account' : 'Commence Your Journey'}
      </Button>
    </form>
    </>
  )
}

export default SignUp