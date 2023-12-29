import { Label } from "@/components/ui/label";
import { account } from "@/lib/appwrite/config";
import { useState } from "react";


const ForgetPassword = () => {
  const [userEmail, setuserEmail] = useState("");

  const forgetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    await account.createRecovery(userEmail, 'http://localhost:5173/reset-password' )
    console.log('Email has been sent')
  };

  
  return (
    <div className="sm:w-420 flex-center flex-col ">
      <div className="flex items-center">
          <img
          src="/assets/images/logo.jpg"
          className="w-13 h-16" 
          />
          <h1 className="ml-2 text-light-3 h2-bold md:h2-bold pt-2 sm:pt-0">MEMORIES</h1>
          </div>
          <h2 className="h3-bold md:h2-bold pt-2 sm:pt-0">Password Recovery</h2>
          <p className="text-light-3 small-medium md:base-regular mt-2"> Please enter your details</p>
       

      <form className="flex flex-col gap-1 w-full mt-1">
        <div className="mb-3">
          <Label >
            Enter your email
          </Label>
          <input
          onChange={(e) => {
            setuserEmail(e.target.value)
          }}
          type="email"
          name="password"
          className="shad-input"
          id="exampleInputPassword"
        />
        </div>
        <button className="shad-button_primary" onClick={(e)=> forgetPassword(e) } >Reset Password
        </button>
      </form>
      
    </div>
  );
}

export default ForgetPassword;
