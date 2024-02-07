"use client"
import Image from 'next/image'
import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'

const Documents = () => {
  const {user}=useUser()
    
  return (
    <div className='h-full flex flex-col items-center justify-center'>
      <Image src='/empty.png' width={300} height={300} alt='empty' className='dark:hidden' />
      <Image src='/empty-dark.png' width={300} height={300} alt='empty-dark' className='hidden dark:block' />
      <h2 className='text-lg font-medium'>Welcome to { user?.firstName }&apos;s Jotion</h2>
      <Button className='mt-4'>
        <PlusCircle size={16} className='mr-2 h-4 w-4' />
        Create a note</Button>
    </div>
  )
}

export default Documents