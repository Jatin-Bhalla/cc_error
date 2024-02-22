import *  as React from 'react';
import { useState } from 'react';
export  function Login(){
    
    const [ username , setusername ] = useState ("");
    const [ password , setpassword ] = useState ("");

    return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: ' rgb(219 234 254)' }} >
       
        <div >
        <input type="text" placeholder='username'></input>
        </div>

        <br /><br />

        <div  >
        <input type="text" placeholder='password'></input>
        </div>

        <br /><br />

        <button>SIGN IN</button>
        
        
    </div>
}