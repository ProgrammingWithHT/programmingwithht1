import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Login from './Login'
import SignUp from './SignUp'
import Chat from './Chat'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Login />
      {/* <SignUp /> */}
      {/* <Chat /> */}
    </>
  )
}
