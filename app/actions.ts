'use server'
import { cookies } from 'next/headers'

import getRandString from "@/utils/getRand";


export async function login(formData: FormData) {
    const username = formData.get('username')?.toString();
    const password = formData.get('password')?.toString();
    
    const id = getRandString(120)
    
    const cookieStore = await cookies()
    cookieStore.set({
        name: 'session_id',
        value: id,
        httpOnly: true,
        path: '/dashboard',
      })  
  }
  