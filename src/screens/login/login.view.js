import React from "react";
import "./login.view.css";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96" style = {{marginTop : 100,borderTopStyle : "solid" , borderTopColor : "rgba(79, 70, 229, var(--tw-border-opacity))"}}>
           <h1 className="font-bold text-center block text-2xl">Log In</h1>

           <label className="text-gray-500 block mt-3">Email Address</label>
           <input type="email" placeholder="me@example.com" className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"/> 

           <br />

           <label className="text-gray-500 block mt-3">Password</label>
           <input type="password" placeholder="xxxxxxxxxx" className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"/>

           <button className="mt-6 transition transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg">
                Submit
            </button>
          
           <div class="hr-with-text">Or</div>
          
           <button className="mt-6 transition transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg"
            
           >
               <Link to = "/home" style={{textDecoration : 'none',color : 'white'}}>Continue as a Guest</Link> 
            </button>
        </div>
    )
}

export default Login;