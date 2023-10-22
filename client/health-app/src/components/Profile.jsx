import React, { useState, useEffect } from 'react'; 
import { setHeight, getHeight, getWeight, setWeight, setAge, getAge, setFamilyHistory, getFamilyHistory } from '../api';
import { Link } from 'react-router-dom'; 

export const Profile = () => {
    const [height, setHeight2] = useState(0); 
    const [weight, setWeight2] = useState(0); 
    const [age, setAge2] = useState(0); 
    const [familyHistory, setFamilyHistory2] = useState(0)

    const [oldWeight, setOldWeight] = useState(0); 
    const [oldHeight, setOldHeight] = useState(0); 
    const [oldAge, setOldAge] = useState(0); 
    const [oldFamilyHistory, setOldFamilyHistory] = useState(0); 
    


    const user = sessionStorage.getItem('email'); 

    const fetchData = async () => {
        const userWeight = await getWeight(user);
        const userHeight = await getHeight(user);
        const userAge = await getAge(user); 
        const userFamilyHistory = await getFamilyHistory(user)
        setOldWeight(userWeight);
        setOldHeight(userHeight);
        setOldAge(userAge); 
        setFamilyHistory(userFamilyHistory); 
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        if(!(familyHistory < 10 && familyHistory > 1)){
            alert('must be between 1 and 10')
            return; 
        }
        try {
            const response = await setWeight(user, weight); 
            const response2 = await setHeight(user, height);  
            const response3 = await setAge(user, age); 
            const response4 = await setFamilyHistory(user, familyHistory)
            
            fetchData(); 
        } catch (error) {
            alert(error); 
        }
    }

    const handleHeight = (e) => {
        setHeight2(e.target.value)
    }

    const handleWeight = (e) => {
        setWeight2(e.target.value); 
    }
    const handleAge = (e) => {
        setAge2(e.target.value)
    }

    const handleFamilyHistory = (e) => {
        setFamilyHistory2(e.target.value); 
    }

    if (!sessionStorage.getItem('password')) {
        alert("nothing to see here"); 
        return (
            <div className="text-7xl text-center text-extrabold">
                You are not a User
            </div>
        )
    } else {
        return (
            <main className="shadow-lg p-4 rounded-lg border-t-4 border-white bg-zinc-400 w-5/6">
                <div className="pb-2 flex flex-col gap-3 px-5 text-xl text-center">
                    <h1>Stored Height: {oldHeight || "no data yet"}</h1>
                    <h1>Stored Weight: {oldWeight || "no data yet"} </h1>
                    <h1>Stored Age: {oldAge || "no data yet"}</h1>
                    <h1>Stored Family History: {oldFamilyHistory || "no data yet"} </h1>
                </div>
                <form className="flex flex-col gap-3 py-6 px-4 text-lg items-center justify-center" onSubmit={handleSubmit}>
                    <div>
                        <label>Enter you height in inches:</label>
                        <input
                            className="w-52 border border-gray-400"
                            placeholder="Height"
                            type="number"
                            value={height}
                            onChange={handleHeight}
                        />
                    </div>
                    <div>
                        <label>Enter your weight in year:</label>
                        <input
                            className="w-52 border border-gray-400S"
                            placeholder="Age"
                            type="number"
                            value={weight}
                            onChange={handleWeight}
                        />
                    </div>
                    <div>
                        <label>Enter your age in years:</label>
                        <input
                            className="w-52 border border-gray-400S"
                            placeholder="Age"
                            type="number"
                            value={age}
                            onChange={handleAge}
                        />
                    </div>
                    <div>
                        <label className="text-sm">On a Scale from 1-10 how common is diabetes in your family</label>
                        <input
                            className="w-52 border border-gray-400S"
                            placeholder="Family History"
                            type="number"
                            value={familyHistory}
                            onChange={handleFamilyHistory}
                        />
                    </div>
                    <button className="bg-gray-50 text-zinc-950 font-extrabold cursor-pointer px-5 py-2 text-xl w-48" type="submit">Submit</button>
                </form>
                <div className="border-black border-4 shadow-lg bg-slate-700 hover-bg-slate-500 w-1/2 ml-28">  
                    <Link to="/main">Progress to Main</Link>
                </div>
            </main>
        )
    }
}
