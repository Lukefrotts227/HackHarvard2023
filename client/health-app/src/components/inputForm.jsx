import React, { useState } from 'react'; 

export const InputForm = () =>{

    return(
        <>
            <main className="shadow-lg p-4 rounded-lg border-t-4 border-white bg-zinc-400"> 
                <form className="flex flex-col gap-3 py-6 px-4 text-lg"> 
                    <input className="w-99 border border-gray-400 px-8" 
                        type ="text" placeholder="Something should go here"/>
                    <input className="w-99 border border-gray-400 px-8" 
                        type ="text" placeholder="Something should go here"/>
                    <input className="w-99 border border-gray-400 px-8"  
                        type ="text" placeholder="Something should go here"/>
                    <button className="bg-gray-50 text-zinc-950 font-extrabold cursor-pointer px-5 py-2 text-xl">Submit</button>
                </form>

            </main>
        
        </>
        )
}