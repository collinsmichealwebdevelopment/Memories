import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div className="flex justify-start items-center flex-col h-screen w-full">
        <div className="relative w-full h-full">
          <video src="assets/images/video.mp4"
          typeof="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"/>

          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0
          backdrop-brightness-40">
            <div className="p-0 flex items-center">
            <img
          src="/assets/images/logo.jpg"
          className="w-13 h-16 rounded-xl" 
          />
          <h1 className="ml-2 text-purple-900 h2-bold md:h2-bold font-poppins pt-2 sm:pt-0">MEMORIES</h1>
            </div>
            <div className="shadow-2xl mt-3 ">
            <Link to="/sign-in" >
              <button type="button" className="py-4 px-6 bg-purple-900 font-poppins font-bold
              text-[18px] text-primary outline-none rounded-[10px]">Login now
              </button>
              </Link>
              <span className="ml-2 font-extrabold">Or</span>
            <Link to="/sign-up" >
              <button type="button" className="py-4 px-6 bg-purple-900 font-poppins font-bold
              text-[18px] text-primary outline-none rounded-[10px] ml-2">Create Account
              </button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}

export default HomePage;
