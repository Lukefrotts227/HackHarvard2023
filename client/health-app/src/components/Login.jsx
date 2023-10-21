import React, { useState } from 'react'; 
import { getUser } from '../api';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';


export const Login = () =>{
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const nav = useNavigate();

    const handleEmail = (e) =>{
        setEmail(e.target.value); 
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value); 
    }

    const handleSubmit = async (e) =>{
        e.preventDefault(); 
        try{
            const response = await getUser(email, password); 
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('password', password);

            if(response.status===200){
                nav('/profile')
            }
        }catch(error){
            alert(error); 
        }
    }


    return(
        
            <main className="shadow-lg p-4 rounded-lg border-t-4 border-white bg-zinc-400"> 
                <form className="flex flex-col gap-3 py-6 px-4 text-lg max-w-2xl"> 
                    <input className="w-99 border border-gray-400 px-8" 
                        type ="text" placeholder="Email"
                        onChange={handleEmail}/>
                    <input className="w-99 border border-gray-400 px-8"  
                        type ="password" placeholder="Password"
                        onChange={handlePassword}/>
                    <button className="bg-gray-50 text-zinc-950 font-extrabold cursor-pointer px-5 py-2 text-xl" onClick={handleSubmit}>Submit</button>
                </form>
                <span className="text-center text-bold"><h1>Don't have an account register <Link className="hover:text-blue-700 hover:underline" to="/signup">here</Link></h1></span>

            </main>
        
       
        )
}
