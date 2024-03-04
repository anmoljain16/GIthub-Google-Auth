"use client";

import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'

export default function User() {
    const { data: session } = useSession()
    console.log(session)

    if(session) {
        return <>
            Hello {session.user.name} && signed in as {session.user.email} <br/>
            <br/>
            Image of the user: <br/>
            <Image
                src={session?.user?.image}
                width={50}
                height={50}
                alt="Picture of the author"
            />
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return <>
        Not signed in <br/>
        <button onClick={() => signIn()}>Sign in</button>
    </>
}
