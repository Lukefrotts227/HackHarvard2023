import React, { useState } from 'react'; 

export const InputForm = () =>{

    return(
        <>
            <main className="shadow-lg p-4 rounded-lg border-t-4 border-white"> 
                <form className="flex flex-col gap-3 py-6 px-4"> 
                    <input className="w-99 border border-gray-400" />
                    <input className="w-99 border border-gray-400" />
                    <input className="w-99 border border-gray-400"  />
                    <button></button>
                </form>

            </main>
        
        </>
        )
}