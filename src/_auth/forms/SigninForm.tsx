import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { SigninValidation, } from "@/lib/validation";
import Loader from "@/components/shared/Loader";
import { Link, useNavigate } from 'react-router-dom'
import { useSignInAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"




 
const SigninForm = () => {
  const { toast } = useToast()
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const navigate = useNavigate();
  
  const { mutateAsync: signInAccount } = useSignInAccount();

  // 1. Define your form.
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    const session = await signInAccount({
     email: values.email,
     password: values.password,
    })
  
   if (!session) {
    return toast({ title: 'Sign in failed.please try again.'})
   }

   const isLoggedIn = await checkAuthUser();

   if(isLoggedIn) {
    form.reset();

    navigate('/')
   } else {
    return toast({ title: 'Sign in failed.please try again.'})
   }
}

  return (
      <Form {...form}>
        <div className="sm:w-420 flex-center flex-col">
         <div className="flex items-center">
          <img
          src="/assets/images/logo.jpg"
          className="w-13 h-16" 
          />
          <h1 className="ml-2 text-light-3 h2-bold md:h2-bold pt-2 sm:pt-0">MEMORIES</h1>
          </div>
          <h2 className="h3-bold md:h2-bold pt-2 sm:pt-0">Log in to your account</h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">Welcome back! Please enter your details</p>
       

      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-1 w-full mt-1">        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="shad-button_primary">
          {isUserLoading ? (
            <div className="flex-center gap-2">
             <Loader /> Loading...
            </div>
          ): "Sign In"}</Button>

          <p className="text-small-regular text-light-2 text-center mt-0">
            Don't have an account?
            <Link to="/sign-up" className="text-primary-500 text-small-semibold ml-1">Sign Up</Link>
            </p>
          {/*<p className="text-small-regular text-light-2 text-center mt-0">
            Reset Password?
            <Link to="/reset-password" className="text-primary-500 text-small-semibold ml-1">Reset Password</Link>
          <p className="text-small-regular text-light-2 text-center mt-0">
            Forget Password?
          <Link to="/forget-password" className="text-primary-500 text-small-semibold ml-1">Forget Password</Link>
            </p>
          </p>*/}
      </form>
      </div>
    </Form>
      
    
  );
}

export default SigninForm;

