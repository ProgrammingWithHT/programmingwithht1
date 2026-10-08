import React from 'react'
import Contact from './contact'
import ServerComponent from '../../components/servers/ServerComponent'

const page = () => {
  return (
    <Contact value='nice'>
        <ServerComponent />
    </Contact>
  )
}

export default page
