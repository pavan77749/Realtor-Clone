import { useState } from "react"
import { Link } from "react-router-dom"

import OAuth from "../components/OAuth"

export default function ForgetPassword() {

  const [email, setEmail]= useState("");
 
  function onChange(e){
    setEmail(e.target.value);
     
    }

  return (
    <>
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forget Password</h1>
      <div className="flex justify-center flex-wrap items-center py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md-mb-6">
          <img src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" alt="key" className="w:full rounded-2xl" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 ">
          <form >
           
            <input className="w-full" type="email" id="email" value={email} onChange={onChange} placeholder="Email address" className="w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"/>
            
              <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                <p>Don't have an account?
                <Link to="/signup" className="text-red-600  hover:text-red-700 transition duration-200 ease-in-out"> Register</Link>
                </p>
                <p>
                  <Link to="/signin" className="text-blue-600  hover:text-blue-800 transition duration-200 ease-in-out">Sign in instead</Link>
                </p>
              </div>
          </form>
          <button className="w-full mt-6  bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type="submit">Send reset password</button>
          <div className="my-4 before:border-t flex before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
            <p className="text-center font-semibold mx-4 ">OR</p>
          </div>
          <OAuth/>
        </div>
      </div>
    </section>
    </>
  )
}
