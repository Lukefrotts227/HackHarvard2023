import React, { useState } from 'react'; 
import { SignUp } from './Signup';
import { Link } from 'react-router-dom'; 


export const Login = () =>{
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const handleEmail = (e) =>{
        setEmail(e); 
    }
    const handlePassword = (e) =>{
        setPassword(e); 
    }


    return(
        
            <main className="shadow-lg p-4 rounded-lg border-t-4 border-white bg-zinc-400"> 
                <form className="flex flex-col gap-3 py-6 px-4 text-lg max-w-2xl"> 
                    <input className="w-99 border border-gray-400 px-8" 
                        type ="text" placeholder="Email"/>
                    <input className="w-99 border border-gray-400 px-8"  
                        type ="password" placeholder="Password"/>
                    <button className="bg-gray-50 text-zinc-950 font-extrabold cursor-pointer px-5 py-2 text-xl">Submit</button>
                </form>
                <span className="text-center text-bold"><h1>Don't have an account register <Link className="hover:text-blue-700 hover:underline" to="/signup">here</Link></h1></span>

            </main>
        
       
        )
}
