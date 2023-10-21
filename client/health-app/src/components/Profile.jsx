import React from 'react'; 

export const Profile = () =>{


    if(!sessionStorage.getItem('email')){
        alert("nothing to see here"); 
        return(
            <div className="text-7xl text-center text-extrabold">
                You are not a User
            </div>)
    }else{
        return(
            <main>

            </main>
            )
    }
    
}