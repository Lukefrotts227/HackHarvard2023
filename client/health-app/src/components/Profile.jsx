import React, { useState, useEffect } from 'react'; 
import { setHeight, getHeight, getWeight } from '../api'

export const Profile = () =>{
    const [height, setHeight] = useState(0); 
    const [weight, setWeight] = useState(0); 

    const user = sessionStorage.getItem('email'); 

    if(!sessionStorage.getItem('password')){
        alert("nothing to see here"); 
        return(
            <div className="text-7xl text-center text-extrabold">
                You are not a User
            </div>)
    }else{
        return(
            <main className="shadow-lg p-4 rounded-lg border-t-4 border-white bg-zinc-400">
                <div>

                </div>
                <form className="flex flex-col gap-3 py-6 px-4 text-lg">
                    <input 
                    />
                    <input 
                    />

                </form>
            </main>
            )
    }
    
}