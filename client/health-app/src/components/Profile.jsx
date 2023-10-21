import React, { useState, useEffect } from 'react'; 
import { setHeight, getHeight, getWeight, setWeight } from '../api'
import { Link } from 'react-router-dom'; 

export const Profile = () =>{
    const [height, setHeight2] = useState(0); 
    const [weight, setWeight2] = useState(0); 
    const [oldWeight, setOldWeight] = useState(0); 
    const [oldHeight, setOldHeight] = useState(0); 

    const user = sessionStorage.getItem('email'); 

    const fetchData = async () => {
        const userWeight = await getWeight(user);
        const userHeight = await getHeight(user);
        setOldWeight(userWeight);
        setOldHeight(userHeight);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault(); 
        try{
            if(!height && !weight){
                return; 
    
            }else if(!height){
                const response = await setWeight(user, weight); 

            }else if(!weight){
                const response = await setHeight(user, height); 

            }else{
                const response = await setWeight(user, weight); 
                const resposne = await setHeight(user, height); 

            }
            fetchData(); 
        }catch(error){
            alert(error); 
        }

    }
    const handleHeight = (e) =>
    {
        setHeight2(e.target.value)
    }
    const handleWeight = (e) =>
    {
        setWeight2(e.target.value); 
    }

    useEffect(() =>{
        fetchData()

    },[user])

    if(!sessionStorage.getItem('password')){
        alert("nothing to see here"); 
        return(
            <div className="text-7xl text-center text-extrabold">
                You are not a User
            </div>)
    }else{
        return(
            <main className="shadow-lg p-4 rounded-lg border-t-4 border-white bg-zinc-400">
                <div className="pb-6 flex flex-col gap-3 px-5 text-3xl">
                    <h1>Stored Height: {oldHeight || "no data yet"}</h1>
                    <h1>Stored Weight: {oldWeight || "no data yet"} </h1>
                </div>
                <form className="flex flex-col gap-3 py-6 px-4 text-lg">
                    <input className="w-52 border border-gray-400 px-8"
                    placeHolder="Height" type="number" onSubmit={handleHeight}
                    />
                    <input className="w-52 border border-gray-400 px-8"
                    placeHolder="Weight" type="number" onSubmit={handleWeight}
                    />
                    <button className="bg-gray-50 text-zinc-950 font-extrabold cursor-pointer px-5 py-2 text-xl" onClick={handleSubmit}>Submit</button>

                </form>
                <div className="borde border-black border-4 shadow-lg bg-slate-700 hover:bg-slate-500">  
                    <Link to="/main">Progress to Main</Link>
                </div>
            </main>
            )
    }
    
}