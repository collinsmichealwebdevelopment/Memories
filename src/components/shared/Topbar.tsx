import { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from '@/context/AuthContext';


const Topbar = () => {
    const { mutate: signOut, isSuccess } = useSignOutAccount();
    const navigate = useNavigate();
    const { user } = useUserContext();

    useEffect(() => {
        if (isSuccess) navigate(0);
    }, [isSuccess])
     
  return (
    <section className="topbar">
        <div className="flex-between py-4 px-5">
            <Link to="/" className="flex gap-3 items-center">
                <img
                src="/assets/images/logo.jpg"
                alt="logo"
                width={45}
                height={90} 
                />
                <h1 className="ml-2 text-light-3 h2-bold md:h2-bold pt-2 sm:pt-0">MEMORIES</h1>
            </Link>

            <div className="flex gap-4">
                <Button variant="ghost" className="shad-button_ghost"
                onClick={() => signOut()}>
                    <img src="/assets/icons/logout.svg" alt="logout" />
                </Button>
                <Link to={`/profile/${user.id}`} className='flex-center gap-3'>
                    <img 
                    src={user.imageUrl || '/assets/icons/profile-placeholder.svg'}
                    alt="profile"
                    className='h-8 w-8 rounded-full'
                    />
                </Link>
            </div>
        </div>

      
    </section>
  );
}

export default Topbar;
