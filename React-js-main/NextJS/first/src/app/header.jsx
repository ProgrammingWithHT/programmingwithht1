import React from "react";
import Link from "next/link";
import SearchBar from "@/components/client/searchBar";

const header = () =>{
    return <div>
        <Link href={'/'}>Home </Link>
        <Link href={'/about'}>About </Link>
        <Link href={'/contact'}>Contact </Link>

        <SearchBar />  {/*this is client-side components we import client-side component into server side but not import server side component into client side*/}

    </div>
}

export default header;