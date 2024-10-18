import React from 'react'
import { useAuth } from '../../contexts/authContext'

const Home = () => {
    const { currentUser } = useAuth()
    return (
        <>
        <div className='text-2xl  font-bold pt-14 pl-10'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are logged in in</div>
        
        <div className='h-116 w-96 rounded-xl pt-20 border-orange-500'>
        <img  src="https://media.makeameme.org/created/thank-you-have-400870e333.jpg"/>
        </div>
        </>
    )
}

export default Home