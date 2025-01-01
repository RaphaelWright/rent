import React from 'react'
import { login } from '@/app/actions'

export default function page() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <form action={login}>
            <div className='flex flex-col'>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="" className='border px-2 py-1' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" className='border px-2 py-1' />
            </div>
            <div className='w-full flex justify-center mt-3'>
                <button className='p-2 bg-gray-50 border'>Log in</button>
            </div>
        </form>
    </div>
  )
}
