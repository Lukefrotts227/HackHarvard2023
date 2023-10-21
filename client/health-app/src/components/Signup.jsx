import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import { createUser} from '../api';


export const SignUp = () =>{
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [passwordConfirm, setPasswordConfirm] = useState(''); 

    const resets = sessionStorage.setItem('resets', 0); 
    const nav = useNavigate();

    const handleName = (e) =>{
        setName(e.target.value); 
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value); 
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value); 
    }
    const handlePasswordConfirm = (e) =>{
        setPasswordConfirm(e.target.value); 
    }

    const handleSubmit = async (e) => 
    {
        e.preventDefault(); 
        if(password !== passwordConfirm){
            alert('passwords have to match!!'); 
            return; 
        }
        
        

        try{
            const user = { name, email, password };
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('password', password);
            sessionStorage.setItem('name', name ); 

            const response = await createUser(user);    
            if(response.status===200){
                nav('/profile'); 
            }
            

        }catch(error){
            alert(`${error}`); 
        }
    }

    return(
     
            <main className = "">
                <div className="shadow-lg p-4 rounded-lg border-t-4 border-white bg-zinc-400"> 
                    <form className="flex flex-col gap-3 py-6 px-4 text-lg"> 
                        <input className="w-99 border border-gray-400 px-8" 
                            type ="text" placeholder="Full Name"
                            onChange={handleName} />
                        <input className="w-99 border border-gray-400 px-8" 
                            type ="text" placeholder="Email"
                            onChange={handleEmail}/>
                        <input className="w-99 border border-gray-400 px-8"  
                            type ="password" placeholder="Password"
                            onChange={handlePassword}/>
                        <input className="w-99 border border-gray-400 px-8"
                            type="password" placeholder="ConfirmPassword"
                            onChange={handlePasswordConfirm}  />
                        <button className="bg-gray-50 text-zinc-950 font-extrabold cursor-pointer px-5 py-2 text-xl" onClick={handleSubmit}>Submit</button>
                    </form>
                    <span className="text-center text-bold"><h1>Already have an account click <Link className="hover:text-blue-700 hover:underline" to="/">here</Link></h1></span>
                    
                </div>
            </main>
        
        )
}