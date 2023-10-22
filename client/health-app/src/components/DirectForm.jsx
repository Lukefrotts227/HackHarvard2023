import React, { useState } from 'react'; 

export const DirectFrom = () =>{

    return(
        <main>
            <form>
                <input
                placeholder="Height"
                />
                <input 
                placeholder="Weight"
                />
                <input 
                placeholder="Age"
                />
                <input 
                placeholder="Family History"
                />
                <input 
                placeHolder="Glucose"
                />

                <button>Submit</button>
            </form>

        </main>
    )
}