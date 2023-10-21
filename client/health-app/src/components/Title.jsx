import React from 'react'; 
import { Logo } from '../graphics/MainLogo';

export const Title = () => 
{

    return(
        <section className = "grid place-items-center">
            <header className="text-4xl pt-4 text-extrabold text-center pb-3"> 
            <h1>Welcome to...</h1>
            </header>
            <Logo 
            includeText={true}
            width={122}
            height={122}/>
        </section>
        )
}