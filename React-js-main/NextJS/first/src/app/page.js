import Image from 'next/image'
import styles from './page.module.css'
// import {notfound} from 'next/navigation'
// import notfound from './not-found'
import {notFound} from "next/navigation" //use camal case otherwise not work file name not neccessary be same

// index.js in react or next.js 12 versions but in next.js 13 we default name is page.js or page.jsx

export default function Home() {
  // notFound()
  // return Error('lool')
  return (
    <div>Hello World
    </div>
  )
}
