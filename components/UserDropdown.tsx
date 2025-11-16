'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const UserDropdown = ({ user } : { user: User }) => {
  const router = useRouter();

  const handleSignOut = async() => {
    router.push('/sign-in')
  }

  const mockUser = {name: 'Billy' , email: 'billyboe@gmail.com'}

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='flex items-center gap-3 text-yellow-900 hover:text-yellow-500'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className='bg-red-500 text-red-950 text-sm font-bold'>
              {mockUser.name[0]}
            </AvatarFallback>
          </Avatar>

          <div className="hidden md:flex flex-col items-start">
            <span className='text-base font-medium text-gray-500'>
              {mockUser.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='text-gray-400'>
        <div className="flex relative items-center gap-4 py-2">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>      
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown