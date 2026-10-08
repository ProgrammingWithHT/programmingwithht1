'use client'
import React, { useState } from 'react'

const SearchBar = () => {
    const [searchQuery,setSearchQuery] = useState("")
    console.log(searchQuery)
  return (
    <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
  )
}

export default SearchBar