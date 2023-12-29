import { Label } from "@/components/ui/label";
import { account } from "@/lib/appwrite/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setpassword] = useState({
    newPassword:'',
    repeatedPassword: '',
  })
  const changePassword = async(e: React.FormEvent) => {
    e.preventDefault();

    const urlParems = new URLSearchParams(window.location.search);
    const userId = urlParems.get("userId");
    const secret = urlParems.get("secret");
    
    
    await account.updateRecovery(
      userId || '',
      secret || '',
      password.newPassword,
      password.repeatedPassword
    );
    navigate('/sign-in')


  }


  return (
    <div className="sm:w-420 flex-center flex-col ">
      <div className="flex items-center">
          <img
          src="/assets/images/logo.jpg"
          className="w-13 h-16" 
          />
          <h1 className="ml-2 text-light-3 h2-bold md:h2-bold pt-2 sm:pt-0">MEMORIES</h1>
          </div>
          <h2 className="h3-bold md:h2-bold pt-2 sm:pt-0">Reset Password</h2>
          <p className="text-light-3 small-medium md:base-regular mt-2"> Please enter your details</p>
       

      <form className="flex flex-col gap-1 w-full mt-1">
        <div className="mb-3">
          <Label >
            Enter your new password :
          </Label>
          <input
          required
          type="password"
          name="password"
          onChange={(e)=> {
            setpassword({
              ...password,
              newPassword : e.target.value
            })
          }}
          className="shad-input"
          id="exampleInputPassword"
        />
        </div>
        <div className="mb-3">
          <Label >
            Repeat your new Password :
          </Label>
          <input
          required
          type="password"
          name="password"
          onChange={(e)=> {
            setpassword({
              ...password,
              repeatedPassword : e.target.value
            })
          }}
          className="shad-input"
          id="exampleInputPassword"
        />
        </div>
        <button className="shad-button_primary" type="submit" onClick={(e)=> changePassword(e) } >change password
        </button>
      </form>
      
    </div>
  );
}

export default ResetPassword;
